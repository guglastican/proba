import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: { location: string; q: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

/**
 * Normalizes a URL parameter to a consistent format
 */
function normalizeParam(param: string): string {
  return param
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/**
 * Converts a normalized parameter back to display format
 */
function formatParamForDisplay(param: string): string {
  return param.replace(/-/g, " ");
}

export async function generateStaticParams() {
  const allTags = await getAllTags({
    // If you have very many pages, you can only render a subset at compile-time. The rest will be rendered & cached at first access.
    // limit: 10
  });

  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location: normalizeParam(location),
        q: normalizeParam(tag),
      })),
    )
    .flat();
}

const getHotels = cache(searchHotels);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { q, location } = params;

  const results = await getHotels(q, location);

  return {
    title: `Top ${results.length} ${formatParamForDisplay(q)} in ${formatParamForDisplay(location)}`,
    description: `Find the best ${formatParamForDisplay(q)} in ${formatParamForDisplay(location)}`,
    // Add canonical URL to prevent duplicate content issues
    alternates: {
      canonical: `/search/${location}/${q}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { q, location } = params;
  
  // Check if the URL is in the canonical format
  const canonicalQ = normalizeParam(decodeURIComponent(q));
  const canonicalLocation = normalizeParam(decodeURIComponent(location));
  
  // If the URL is not in canonical form, redirect to the canonical version
  if (q !== canonicalQ || location !== canonicalLocation) {
    redirect(`/search/${canonicalLocation}/${canonicalQ}`);
  }
  
  // Verify this is a valid location/tag combination
  const validLocations = locations.map(loc => normalizeParam(loc));
  const validTags = await getAllTags();
  const normalizedTags = validTags.map(tag => normalizeParam(tag));
  
  if (!validLocations.includes(canonicalLocation) || !normalizedTags.includes(canonicalQ)) {
    notFound();
  }

  const results = await getHotels(q, location);

  // For display purposes, convert hyphenated format back to readable format
  const displayQ = formatParamForDisplay(q);
  const displayLocation = formatParamForDisplay(location);

  return (
    <div>
      <Header q={displayQ} location={displayLocation} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {displayQ} in {displayLocation}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}