import type { Metadata } from "next";
import { indexable, site } from "./site";

export function absoluteUrl(path = "/") {
  return path === "/" ? site.url : `${site.url}${path}`;
}

/**
 * Per-route metadata. Social images come from the colocated `opengraph-image.tsx`
 * route files, which take priority over anything set here.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  absoluteTitle = false,
  publishedTime,
  section,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
  absoluteTitle?: boolean;
  publishedTime?: string;
  section?: string;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex || !indexable ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      ...(type === "article"
        ? { type: "article", publishedTime, section }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
