import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${site.domain}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
