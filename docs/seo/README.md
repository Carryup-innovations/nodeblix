# Nodeblix SEO & AEO — audit and implementation log

Prepared 24 October 2026 against the local production build (`npm run build && npm start`). The site has not been deployed to `nodeblix.com`; nothing here describes live indexing, rankings, or traffic.

| Document | Contents |
| --- | --- |
| [keyword-research.md](keyword-research.md) | Evidence-based keyword research (methodology, SERP observations, Google guidance with sources) |
| [keyword-map.md](keyword-map.md) | Keyword-to-page map and cannibalization rules |
| [service-pages-and-aeo.md](service-pages-and-aeo.md) | What each service page now contains, and every FAQ added |
| [technical-configuration.md](technical-configuration.md) | Metadata, robots, sitemap, structured data, redirects, analytics, env vars, local test results |
| [launch-checklist.md](launch-checklist.md) | Items needing external access, and the production launch checklist |
| [roadmap.md](roadmap.md) | Content roadmap and prioritized 90-day post-launch plan |

Status key: **Done** = implemented and verified locally. **Partial** = implemented, but something outside the codebase is still needed. **Awaiting** = needs deployment or account access.

## Initial audit summary

The site already had a sound base: static App Router pages, `metadataBase` set to `https://nodeblix.com`, a sitemap, a robots file, unique page titles, semantic headings, and Organization, Service, Article, and Breadcrumb JSON-LD. The gaps were mostly in search alignment, answer-style content, and launch safety.

**Search alignment**
- Service titles used internal names ("Analytical Platforms", "CRM Solutions") rather than the phrases buyers search for ("business intelligence consulting", "CRM implementation services").
- Several meta descriptions were longer than search results display.
- Some topics were claimed by two pages. For example, the Cloud page described provisioning and automation in terms that overlapped the DevOps page's infrastructure-as-code focus.

**Content depth and answerability**
- Service pages explained capabilities but had no plain definition, no comparison of approaches, no trade-offs, and only a few short FAQs.
- The homepage never stated plainly what Nodeblix is, who it serves, and which technologies it covers.
- Articles had no summary, no question-led sections, no "last updated" date, and no link back to the service they support.
- Industry pages were thin (about 360–410 words) and did not link to every relevant service.

**Technical**
- No way to keep a staging or preview deployment out of the index.
- `FAQPage` JSON-LD was emitted, although Google withdrew FAQ rich results in May 2026.
- JSON-LD was not escaped against `</script>` injection.
- Breadcrumbs were plain links without list markup. One page type emitted breadcrumb JSON-LD manually, and others emitted none.
- No social share images. A child route's `openGraph` object replaced the parent's, so pages lost the default image.
- The default Next.js favicon, and no logo file suitable for Organization markup.
- No `www` to apex redirect, an `X-Powered-By` header, and images served as WebP only.
- Link cards repeated their visible title as image alt text, so screen readers announced each card twice.
- No analytics, Search Console verification, or enquiry conversion event.

## Implementation status

| Area | Work | Status |
| --- | --- | --- |
| Keyword research | Autocomplete, SERP, and Google-documentation research. No invented volumes or difficulty. See `keyword-research.md`. | Done |
| Keyword-to-page map | One primary intent per URL, with explicit cannibalization owners | Done |
| Titles and descriptions | Reviewed on all 38 indexable URLs and rewritten where they missed search intent or length. Titles are unique, and descriptions are 70–170 characters. | Done |
| H1s and heading hierarchy | Exactly one H1 per page and no skipped levels (verified by crawl) | Done |
| Service pages | Definition, problems, capabilities, approach, decision table, use cases, industry links, trade-offs, 5–8 FAQs plus a definition answer, related services, CTA | Done |
| Homepage | Plain-language company statement and a six-question FAQ | Done |
| AI Engineering service | New `/services/ai-engineering` page (8th service) with a decision table, eight FAQs, an architecture diagram, and a supporting article. Linked from the navigation, footer, homepage, services index, every industry page, and related services. AI is mentioned on existing services only where the work genuinely involves it. | Done |
| Services index | "Which service fits your problem?" table that routes each symptom to a service | Done |
| Articles | SEO titles, key takeaways, two question-led answers each, primary-service link, published/updated dates | Done (dates need confirming, see launch checklist) |
| Industry pages | Titles, descriptions, related services extended | Partial: still the thinnest page type; needs sector input to deepen honestly |
| Internal linking | Service ↔ industry ↔ article links. No orphans and no broken links (crawl). | Done |
| Canonicals | Self-referencing, relative paths resolved against `NEXT_PUBLIC_SITE_URL` (default `https://nodeblix.com`) | Done locally; Awaiting live verification |
| Indexability control | `NEXT_PUBLIC_SITE_NOINDEX` and Vercel preview detection; indexable by default | Done |
| robots.txt and sitemap | Production rules, `/api/` disallowed, sitemap with `lastmod`; both switch off in noindex mode | Done locally; Awaiting Search Console submission |
| Redirects and 404 | `www` → apex 308, trailing slash → no slash 308, real 404 status | Done locally; Awaiting HTTPS/DNS at host |
| Structured data | Organization, WebSite, BreadcrumbList, Service, Article, all from verified facts only. FAQPage removed. | Done; Awaiting Rich Results Test on live URLs |
| Social images | Generated 1200×630 Open Graph images for every route | Done |
| Icons and logo | Favicon, SVG icon, Apple touch icon, 512px logo | Done |
| Images | Decorative link-card images use `alt=""`; AVIF and WebP; LCP hero uses `fetchPriority="high"` | Done |
| Accessibility | Lighthouse 100 on the pages tested; contrast fix for blue text on tinted backgrounds | Done |
| Analytics | GA4 loader and `generate_lead` event, both inactive until a real ID is set | Partial: needs GA4 property, consent decision, privacy update |
| Search Console | Verification meta tag wired to `GOOGLE_SITE_VERIFICATION` | Awaiting account access |
| Validation tooling | `npm run seo:check` crawl validator | Done |
| Company facts | Address, phone, social profiles, team, partner status | Awaiting the company. Deliberately not published or marked up. |
