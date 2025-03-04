import { getAllTags, locations } from "@/data/hotels";
import { MetadataRoute } from "next";

// Provide a default base URL with a fallback
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'example.com';

// Function to format the location and tag to ensure no consecutive dashes
const formatString = (str: string) => {
  if (!str) return '';
  return str
    .replace(/\s+/g, '-')    // Replace spaces with dashes
    .replace(/,/g, '-')      // Replace commas with dashes
    .replace(/-+/g, '-')     // Replace multiple consecutive dashes with a single dash
    .trim();                 // Trim leading and trailing space
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const allTags = await getAllTags();

    const searchLandingPages = allTags
      .map((tag) =>
        locations.map((location) => ({
          url: `https://${baseUrl}/${formatString(location)}/${formatString(tag)}/`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 1,
        }))
      )
      .flat() as MetadataRoute.Sitemap;

    return [
      // Insert your other pages:
      {
        url: `https://${baseUrl}/about`,
        lastModified: "2024-12-31",
        changeFrequency: "yearly",
        priority: 0.8,
      },
      // Our pSEO pages:
      ...searchLandingPages,
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return []; // Return an empty sitemap if there's an error
  }
}
