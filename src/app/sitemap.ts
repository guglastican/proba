import { getAllTags, locations } from "@/data/hotels";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;  // Add the non-null assertion

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allTags = await getAllTags();

  const searchLandingPages = allTags
    .map((tag) =>
      locations.map((location) => ({
        // Use baseUrl here without the undefined error
        url: `${baseUrl.trim()}/${location.replace(/\s+/g, '-').replace(/,/g, '-').trim()}/${tag.replace(/\s+/g, '-').replace(/,/g, '-').trim()}`,
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
