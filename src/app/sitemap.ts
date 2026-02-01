import { getValidLocationTagPairs, locations } from "@/data/hotels";
import { locationDescriptions } from "@/data/location-descriptions";
import { slugify } from "@/lib/utils";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const validPairs = await getValidLocationTagPairs();

  const searchLandingPages = validPairs.map((pair) => ({
    url: `${baseUrl}/${slugify(pair.location)}/${slugify(pair.tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Add attraction landing pages
  const attractionPages: any[] = [];
  Object.entries(locationDescriptions).forEach(([locationName, data]) => {
    data.attractions.forEach(attraction => {
      attractionPages.push({
        url: `${baseUrl}/${slugify(locationName)}/${slugify(attraction.title)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    });
  });

  // Filter out any duplicates if an attraction title happens to match a tag
  const allDynamicPages = [...searchLandingPages, ...attractionPages];
  const uniquePages = Array.from(new Set(allDynamicPages.map(p => p.url)))
    .map(url => allDynamicPages.find(p => p.url === url)!);

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
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
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
    ...uniquePages,
  ];
}
