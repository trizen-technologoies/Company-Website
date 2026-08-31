import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();
  return nav.map((n) => ({
    url: `${base}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));
}
