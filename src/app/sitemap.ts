import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { scenarios } from "@/content/work";
import { absoluteUrl } from "@/lib/seo";
import { contentUpdated, indexable } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];

  const pages: { path: string; updated: string }[] = [
    ...[
      "/",
      "/services",
      "/industries",
      "/work",
      "/insights",
      "/about",
      "/approach",
      "/contact",
      "/privacy",
      "/terms",
    ].map((path) => ({ path, updated: contentUpdated })),
    ...services.map((s) => ({ path: `/services/${s.slug}`, updated: contentUpdated })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, updated: contentUpdated })),
    ...scenarios.map((w) => ({ path: `/work/${w.slug}`, updated: contentUpdated })),
    ...articles.map((a) => ({ path: `/insights/${a.slug}`, updated: a.updated ?? a.date })),
  ];

  return pages.map(({ path, updated }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(updated),
  }));
}
