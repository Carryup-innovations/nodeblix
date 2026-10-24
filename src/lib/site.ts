const productionUrl = "https://nodeblix.com";

/** Bump when page copy changes materially; feeds sitemap lastmod. */
export const contentUpdated = "2026-10-24";

/**
 * Indexing is on by default so a production deploy can never ship blocked by accident.
 * Preview and staging deployments must opt out with NEXT_PUBLIC_SITE_NOINDEX=true
 * (Vercel previews are detected automatically).
 */
export const indexable =
  process.env.NEXT_PUBLIC_SITE_NOINDEX !== "true" && process.env.VERCEL_ENV !== "preview";

export const site = {
  name: "Nodeblix",
  url: (process.env.NEXT_PUBLIC_SITE_URL || productionUrl).replace(/\/$/, ""),
  tagline: "Technology built for what comes next.",
  description:
    "Nodeblix is an AI-first technology engineering and consulting company. We design, build, and modernize AI applications, cloud infrastructure, software, data platforms, analytics, and CRM systems for organisations that depend on them.",
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", childrenKey: "services" as const },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/services/ai-engineering", label: "AI Engineering" },
  { href: "/services/cloud-engineering", label: "Cloud Engineering" },
  { href: "/services/devops-engineering", label: "DevOps Engineering" },
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/microservices", label: "Microservices Architecture" },
  { href: "/services/data-engineering", label: "Data Engineering & Architecture" },
  { href: "/services/analytical-platforms", label: "Analytical Platforms" },
  { href: "/services/crm-solutions", label: "CRM Solutions" },
] as const;

export const interests = [
  "AI Engineering",
  "Cloud Engineering",
  "DevOps Engineering",
  "Software Development",
  "Microservices Architecture",
  "Data Engineering & Architecture",
  "Analytical Platforms",
  "CRM Solutions",
  "Not sure yet",
] as const;
