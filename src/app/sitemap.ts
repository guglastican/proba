import { getAllTags, locations } from "@/data/hotels";
import { slugify } from "@/lib/utils";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allTags = await getAllTags();

  const searchLandingPages = allTags
    .map((tag) =>
      locations.map((location) => ({
        url: `${baseUrl}/${slugify(location)}/${slugify(tag)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })),
    )
    .flat();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/author`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...searchLandingPages,
  ];
}
