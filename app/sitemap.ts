import type { MetadataRoute } from "next";

const base = "https://www.ohiomuscleactivation.com";

// Update when page content meaningfully changes (a per-build new Date() would
// falsely tell crawlers everything changed on every deploy).
const lastModified = "2026-07-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const conditions = [
    "chronic-pain",
    "golf-performance",
    "hip-pain",
    "neck-shoulder-tension",
    "post-surgical-recovery",
    "strength-performance",
  ];
  return [
    {
      url: base,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...conditions.map((slug) => ({
      url: `${base}/conditions/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
