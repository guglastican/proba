import { getAllTags, locations } from "@/data/hotels";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;  // Add the non-null assertion

// Function to format the location and tag to ensure no consecutive dashes
const formatString = (str: string) =>
  str
    .replace(/\s+/g, '-')    // Replace spaces with dashes
    .replace(/,/g, '-')      // Replace commas with dashes
    .replace(/-+/g, '-')     // Replace multiple consecutive dashes with a single dash
    .trim();                 // Trim leading and trailing spaces


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allTags = await getAllTags();

  const searchLandingPages = allTags
    .map((tag) =>
      locations.map((location) => ({
        // Use baseUrl here without the undefined error
        url: `https://${baseUrl.trim()}/${formatString(location)}/${formatString(tag)}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      })),
    )
    .flat() as MetadataRoute.Sitemap;

  return [
    // Insert your other pages:
    {
      url: `${baseUrl.trim()}/about`,
      lastModified: "2024-12-31",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // Our pSEO pages:
    ...searchLandingPages,
  ];
}
