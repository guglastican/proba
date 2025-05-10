import { getAllTags, locations } from "@/data/hotels";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allTags = await getAllTags();
  
  // Get unique tags and locations
  const uniqueTags = [...new Set(allTags.map(tag => tag.toLowerCase()))];
  const uniqueLocations = [...new Set(locations)];

  const searchLandingPages = uniqueTags
    .map((tag) =>
      uniqueLocations.map((location) => ({
        url: `${baseUrl}/${location}/${tag.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      })),
    )
    .flat() as MetadataRoute.Sitemap;

  return [
    // Insert your other pages:
    {
      url: `${baseUrl}/about`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.8,
    },
      // Our pSEO pages:
    ...searchLandingPages,
  ];
}
