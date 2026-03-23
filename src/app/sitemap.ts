import { getAllResumeIds } from "@/lib/resume";
import { website } from "@/lib/website";
import type { MetadataRoute } from "next";

export const revalidate = 5;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resumeEntries: MetadataRoute.Sitemap = getAllResumeIds().map((id) => ({
    url: `${website.url}/resume/${id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${website.url}`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${website.url}/resume`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...resumeEntries,
  ];
  return sitemap;
}
