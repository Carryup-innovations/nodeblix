# Handover

## Stack

- Next.js 16 (App Router) + TypeScript
- CSS design tokens in `src/app/globals.css`
- Content in `src/content/`
- Original photography in `public/images/`

## Still requiring client verification

- Legal entity name, registration, and any trading names
- Public email, phone, and address (intentionally unpublished)
- Social profiles
- Founder / team biographies and photography
- Authorised case studies and any numeric outcomes
- CRM and cloud partnership badges
- Response-time commitments
- Counsel review of Privacy and Terms
- `CONTACT_WEBHOOK_URL` for production form delivery
- Analytics / Search Console IDs, consent approach, and privacy-policy update before GA4 is enabled
- Confirmation of named platforms (AWS, Azure, Google Cloud, Kubernetes, Salesforce, HubSpot, Dynamics 365)
- Real article publish dates (current dates are placeholders)

## Form

`POST /api/contact` validates the enquiry. If `CONTACT_WEBHOOK_URL` is set, the payload is forwarded. Otherwise it is logged on the server and the visitor is told delivery is not yet connected.

## SEO

Full detail is in `docs/seo/`. Start with `docs/seo/README.md`.

- Unique, keyword-aligned titles and descriptions per page (`docs/seo/keyword-map.md`)
- Canonicals, sitemap, robots, and Open Graph URLs resolve against `NEXT_PUBLIC_SITE_URL` (default `https://nodeblix.com`)
- `NEXT_PUBLIC_SITE_NOINDEX=true` (or a Vercel preview) switches the whole site to noindex for staging
- Organization, WebSite, Service, Article, and BreadcrumbList JSON-LD from `src/lib/schema.ts`, verified facts only
- Generated Open Graph images per route (`opengraph-image.tsx`, template in `src/lib/og.tsx`)
- GA4 and Search Console verification are wired but inactive until real IDs are set (`.env.example`)
- `npm run seo:check` crawls a running build and fails on SEO errors
- Bump `contentUpdated` in `src/lib/site.ts` when page copy changes; it drives sitemap `lastmod`

## Page inventory

Home, Services + 8 service pages, Industries + 6 industry pages, Work + 3 illustrative scenarios, Insights + 11 articles, About, Approach, Contact, Privacy, Terms, custom 404.
