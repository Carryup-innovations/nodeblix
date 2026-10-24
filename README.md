# Nodeblix

Corporate site for Nodeblix — an AI-first technology engineering and consulting firm. Built with Next.js and TypeScript.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Configuration

Copy `.env.example`. Set `CONTACT_WEBHOOK_URL` when the enquiry form should leave the server. Set `NEXT_PUBLIC_SITE_NOINDEX=true` on any staging deployment. Analytics and Search Console variables are described in `docs/seo/technical-configuration.md`.

## SEO check

With a production build running:

```bash
npm run seo:check
```

See `docs/design-strategy.md`, `docs/handover.md`, and `docs/seo/` for positioning, page inventory, and facts that still need verification.
