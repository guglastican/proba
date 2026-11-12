import { locations } from "@/data/hotels";
import { categories } from "@/data/directory";
import { slugify, PRIMARY_TAG_SLUG } from "@/lib/utils";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // One canonical page per city (all tag variations canonicalize to it).
  const cityPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/${slugify(location)}/${PRIMARY_TAG_SLUG}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
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
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoryPages,
    ...cityPages,
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
  ];
}
