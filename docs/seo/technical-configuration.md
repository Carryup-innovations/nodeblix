# Technical SEO configuration

## Environment variables

All are optional. With none set, the site builds as the indexable production site on `https://nodeblix.com`, with analytics off. See `.env.example`.

| Variable | Effect | Production value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origin for canonicals, sitemap, robots, and Open Graph URLs. Trailing slash is stripped. | Leave unset, or `https://nodeblix.com` |
| `NEXT_PUBLIC_SITE_NOINDEX` | `"true"` adds `noindex, follow` to every page, makes robots.txt `Disallow: /`, and empties the sitemap | Unset |
| `VERCEL_ENV` | Set by Vercel. `preview` is treated like `NEXT_PUBLIC_SITE_NOINDEX=true`. | (automatic) |
| `GOOGLE_SITE_VERIFICATION` | Emits `<meta name="google-site-verification">` | Token from Search Console, if using the HTML-tag method |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Loads GA4 only if it matches `G-XXXXXXXX` | Unset until consent and the privacy policy are ready |
| `CONTACT_WEBHOOK_URL` | Where enquiries are forwarded | Real endpoint before launch |

`NEXT_PUBLIC_*` values are inlined at build time. Changing one requires a rebuild.

## Metadata

- **Root defaults** (`src/app/layout.tsx`): `metadataBase`, the title template `%s | Nodeblix`, a default description, the Open Graph site name, the `summary_large_image` Twitter card, robots, and the verification tag.
- **Per page** (`src/lib/seo.ts` → `pageMeta()`): title, description, a relative canonical (resolved against `metadataBase`), Open Graph title, description, URL and type, and article `publishedTime` and `section`.
- **Social images**: `opengraph-image.tsx` route files generate 1200×630 PNGs with the page title over a site photograph. Templates are in `src/lib/og.tsx`, and the fonts are bundled in `src/assets/fonts/` under the SIL Open Font Licence. Every indexable URL has one.
- **Icons**: `src/app/icon.svg`, `src/app/favicon.ico`, `src/app/apple-icon.png`. `public/logo.png` (512×512) is the Organization logo.

## Crawling and indexing

- `src/app/robots.ts`: allow `/`, disallow `/api/`, reference the sitemap. In noindex mode it emits `Disallow: /`.
- `src/app/sitemap.ts`: 38 URLs covering home, 8 top-level pages, 8 services, 6 industries, 3 scenarios, the insights hub and 11 articles. `lastmod` uses `contentUpdated` in `src/lib/site.ts`, or `updated`/`date` for articles. **Bump `contentUpdated` when page copy changes**, rather than using build time, so `lastmod` stays truthful.
- **Redirects** (`next.config.ts`): `www.nodeblix.com/*` → `https://nodeblix.com/*` (308), and trailing-slash URLs → no slash (308, Next.js default). HTTP → HTTPS must be enforced by the host.
- **404**: unknown paths, and unknown slugs under dynamic routes, return HTTP 404 with the custom not-found page.
- `X-Powered-By` is disabled. Images are served as AVIF, falling back to WebP.
- **URLs**: no URL changed during this work, so no redirects from old paths were needed.

## Structured data

All JSON-LD is generated in `src/lib/schema.ts`, rendered by `src/components/JsonLd.tsx` (which escapes `<`), and linked through `@id` references in one `@graph` per page.

| Type | Where | Contents |
| --- | --- | --- |
| Organization | Every page (layout) | name, url, description, logo, knowsAbout. **No address, telephone, email, sameAs, founder, or ratings**, because none are verified. |
| WebSite | Every page | name, url, publisher → Organization |
| BreadcrumbList | Every page below home (from the visible breadcrumb) | Matches the on-page trail; the last item has no `item` URL, as Google allows |
| Service | Each service page | name, serviceType, description, url, provider → Organization |
| Article | Each article | headline, description, image, datePublished, dateModified, author and publisher = Organization (no invented people) |

Not used: `FAQPage` (Google retired the rich result on 7 May 2026), `Review`, `AggregateRating`, `LocalBusiness`, and `Person`. Add `sameAs`, `email`, or `contactPoint` to `organization()` only when the details are real and published on the site.

## Analytics and conversion tracking (prepared, inactive)

- `src/components/Analytics.tsx` loads gtag with `afterInteractive` only when a valid measurement ID is configured. Otherwise it renders nothing. Verified locally: no Google tag appears in the HTML.
- `src/components/ContactForm.tsx` fires `generate_lead` (`form_id`, `interest`, `timeline`) only when `/api/contact` reports `delivered: true`. Spam-trap submissions and undelivered enquiries are not counted.
- **No personal data** (name, email, message) is sent to analytics.

Steps that need account access:
1. **Create a GA4 property and web data stream** for `https://nodeblix.com`. Copy the `G-` ID.
2. **Decide on consent.** Depending on the jurisdictions you serve, add a consent banner and Google Consent Mode, or confirm in writing that none is required.
3. **Update `/privacy`.** It currently states that no analytics tag is loaded. Describe GA4 before enabling it.
4. **Enable the tag.** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`, rebuild, and deploy.
5. **Mark the event.** In GA4, under Admin → Events, mark `generate_lead` as a key event.
6. **Test the event.** Submit a real enquiry with DebugView open and confirm the event arrives once.
7. **Link GA4 to Search Console** under Admin → Product links.

## Local test results (24 October 2026, production build)

| Check | Result |
| --- | --- |
| `npm run build` | 80 static outputs, no errors |
| `tsc --noEmit`, `npm run lint` | Clean |
| `npm run seo:check` (38 sitemap URLs, every internal link, 404 probe) | **0 errors.** 1 warning: `/terms` is linked only from the footer, which is acceptable for a legal page. |
| Canonical = sitemap URL on every page, host `https://nodeblix.com` | Pass |
| One H1 per page, no skipped heading levels | Pass |
| Title ≤ 65 characters, description 70–170 characters, all unique | Pass |
| JSON-LD parses on every page; BreadcrumbList on every page below home | Pass |
| Every `<img>` has an `alt` attribute (empty for decorative images) | Pass |
| Broken internal links / orphan pages | 0 / 0 |
| Unknown URL returns 404 | Pass |
| `www` → apex 308 (simulated with a `Host` header); trailing slash → 308 | Pass |
| Noindex build (`NEXT_PUBLIC_SITE_NOINDEX=true`) | robots `Disallow: /`, empty sitemap, `noindex, follow` on pages |
| Lighthouse, mobile: home, `/services`, `/services/data-engineering`, one article | Accessibility 100, Best Practices 100, SEO 100 on all four (after fixing blue-on-tint contrast) |
| Performance trace, home, emulated mid-range phone (Slow 4G, 4× CPU slowdown) | LCP 0.8–1.8 s across runs, CLS 0.00. Hero image found in the initial HTML and fetched at high priority. |

These are local lab results. Real-user Core Web Vitals will only exist after launch, in the Search Console "Core Web Vitals" report once there is enough traffic.

Re-run the crawl check against any environment:

```bash
npm run seo:check                                   # local build on :3000
node scripts/seo-check.mjs https://nodeblix.com     # live site, after launch
```
