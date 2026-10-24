# Launch checklist

None of this has been done yet. The site has only been tested locally, and `nodeblix.com` is not connected. Public search engines cannot crawl a local build, so there are no indexing or ranking results to report.

## A. Needed from the company before launch

These cannot be resolved in code without inventing facts.

| Item | Why it matters | Where to change it |
| --- | --- | --- |
| Confirm the platforms Nodeblix genuinely delivers: AWS, Azure, Google Cloud, Kubernetes, Salesforce, HubSpot, Dynamics 365 | The pages name them. Remove any that are not real capabilities. | `src/content/services.ts`, `src/content/service-guides.ts`, the homepage FAQ in `src/app/page.tsx` |
| Real article publish dates | Articles carry placeholder dates from January–May 2026, before the site existed. Set them to the real publish date (likely launch day), or set `updated` when edited. | `date` / `updated` in `src/content/articles.ts` |
| Named article authors (optional) | Articles are currently attributed to Nodeblix as an organization. Real named engineers with short bios strengthen trust signals. | `src/content/articles.ts`, `articleSchema()` |
| Public contact email, and optionally phone and address | Nothing is published or marked up. Add it to the contact page and to Organization `email`/`contactPoint` only once real. | `site.email` in `src/lib/site.ts`, `organization()` |
| Real social profiles | Add as Organization `sameAs` and footer links only once they exist | `src/lib/schema.ts`, footer |
| Legal entity name and registration details | Terms and privacy need the real controller or operator name | `/privacy`, `/terms` |
| Counsel review of Privacy and Terms | Current text is a reasonable draft, not legal advice | `src/app/privacy`, `src/app/terms` |
| Team, founder, and About details | E-E-A-T trust signals. Currently method-focused by design. | `/about` |
| Partner badges or certifications | Only if held. Never implied. | Service pages |
| Authorised case studies | `/work` holds clearly labelled illustrative scenarios. Replace or supplement with real, client-approved work. | `src/content/work.ts` |
| Engagement models and how pricing works (no prices required) | Buyers ask, and the cost FAQs explain cost drivers only | Approach or contact page |
| `CONTACT_WEBHOOK_URL` | Without it, enquiries are logged, not delivered | Hosting environment variables |

## B. Production launch checklist

The eleven items from the brief, in order.

1. **Deploy to the production domain.**
   - Build with `NEXT_PUBLIC_SITE_NOINDEX` unset and `NEXT_PUBLIC_SITE_URL` unset or `https://nodeblix.com`.
   - Staging and preview environments must set `NEXT_PUBLIC_SITE_NOINDEX=true` (Vercel previews do this automatically).
2. **Configure HTTPS and redirects.**
   - Issue a TLS certificate for `nodeblix.com` and `www.nodeblix.com`, and force HTTP → HTTPS at the host.
   - Confirm `https://www.nodeblix.com/services` returns 308 to `https://nodeblix.com/services`.
   - Confirm `https://nodeblix.com/services/` returns 308 to the URL without the slash.
   - Confirm a made-up URL returns 404.
3. **Verify canonical URLs.**
   - Run `node scripts/seo-check.mjs https://nodeblix.com`. It must report 0 errors.
   - Spot-check page source: every `rel="canonical"` must start with `https://nodeblix.com` and match the address bar.
4. **Check the production robots.txt.**
   - `https://nodeblix.com/robots.txt` must show `Allow: /`, `Disallow: /api/`, and the sitemap line.
   - It must **not** show `Disallow: /`.
   - No page should have a `noindex` robots meta tag.
5. **Submit the XML sitemap** in Search Console (Sitemaps → `https://nodeblix.com/sitemap.xml`). Expect 38 URLs.
6. **Verify domain ownership in Search Console.**
   - Prefer a Domain property verified by DNS TXT record.
   - Otherwise, use a URL-prefix property with the HTML tag: set `GOOGLE_SITE_VERIFICATION` and redeploy.
7. **Inspect URL indexing and rendering.** Use URL Inspection → Test live URL on these pages, then Request indexing:
   - the homepage;
   - `/services`;
   - each of the eight service pages.

   Check that the rendered HTML includes the FAQ answers and tables.
8. **Test structured data on the live site.**
   - Run the Rich Results Test on a service page, an article, and an industry page. Expect Breadcrumb and Article to be detected. Service and Organization are valid schema.org but do not produce rich results.
   - Run the Schema Markup Validator (validator.schema.org) for full-vocabulary checks.
9. **Run production performance tests.**
   - PageSpeed Insights (mobile and desktop) on home, one service page and one article. Record the scores as the baseline.
   - Check social cards with the LinkedIn Post Inspector and an X/Twitter card preview.
10. **Confirm analytics and enquiry tracking.**
    - After the consent and privacy steps in `technical-configuration.md`, set the GA4 ID, redeploy, and submit a test enquiry.
    - Confirm one `generate_lead` event in DebugView, and that the enquiry reached the webhook destination.
11. **Monitor indexing, impressions, clicks, and qualified leads.**
    - Weekly: the Search Console Pages (indexing) report and the Performance report, filtered by page.
    - Check that Settings → "Search generative AI features" is set to Include.
    - Monthly: GA4 `generate_lead` by landing page, and qualified enquiries from the CRM or inbox.

## C. Watch-outs after launch

- **Expect delays.** A new domain usually takes weeks to be fully indexed and longer to earn rankings. Do not judge the keyword strategy before about three months of Search Console data.
- **Keep `lastmod` honest.** Change `contentUpdated` in `src/lib/site.ts` only when copy actually changes.
- **Keep URLs stable.** If a URL ever changes, add a permanent redirect in `next.config.ts` in the same release.
