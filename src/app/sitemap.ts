import { website } from "@/lib/website";
import type { MetadataRoute } from "next";

export const revalidate = 5;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  ];
  return sitemap;
}
