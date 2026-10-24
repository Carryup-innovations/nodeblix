import type { MetadataRoute } from "next";
import { indexable, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
