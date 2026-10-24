import { absoluteUrl } from "./seo";
import { site } from "./site";

/**
 * Structured data is limited to facts visible on the site. Do not add address,
 * telephone, sameAs profiles, founders, ratings, or reviews until they are verified
 * and published on the page itself.
 */

export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.png`,
      width: 512,
      height: 512,
    },
    knowsAbout: [
      "AI engineering",
      "Generative AI application development",
      "Retrieval-augmented generation",
      "AI agents",
      "LLM evaluation",
      "MLOps",
      "Cloud engineering",
      "Cloud migration",
      "DevOps",
      "CI/CD",
      "Infrastructure as code",
      "Custom software development",
      "Application modernization",
      "Microservices architecture",
      "Data engineering",
      "Data architecture",
      "Business intelligence",
      "Analytics engineering",
      "CRM implementation",
      "CRM integration",
    ],
  };
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": orgId },
    inLanguage: "en",
  };
}

export function breadcrumbList(items: { href?: string; label: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function serviceSchema({
  path,
  name,
  serviceType,
  description,
}: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    provider: { "@id": orgId },
  };
}

export function articleSchema({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  section,
}: {
  path: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  section: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    image: [absoluteUrl(image)],
    datePublished,
    dateModified: dateModified ?? datePublished,
    articleSection: section,
    author: { "@type": "Organization", "@id": orgId, name: site.name, url: site.url },
    publisher: { "@id": orgId },
    mainEntityOfPage: url,
    inLanguage: "en",
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
