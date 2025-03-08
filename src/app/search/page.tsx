import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { Skeleton } from "@/components/ui/skeleton";
import { locations, searchHotels } from "@/data/hotels";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Canonical from "@/components/Canonical";
import { Metadata } from "next";

interface PageProps {
  searchParams: Promise<{ q?: string; location?: string }>;
}

export const metadata: Metadata = {
  title: "Search Hotels - Find Your Perfect Stay",
  description: "Search for hotels by location and amenities",
  alternates: {
    canonical: '/search',
  },
};

async function Results({
  q,
  location,
}: {
  q: string;
  location: string;
}) {
  const hotels = await searchHotels(q, location);

  if (hotels.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-gray-600">
          Try a different search term or location
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {hotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

function ResultsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 space-y-4 shadow-sm bg-white"
        >
          <Skeleton className="h-48 w-full rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 w-16 rounded-full" />
              <Skeleton className="h-8 w-16 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function Page({ searchParams }: PageProps) {
  const { q, location } = await searchParams;

  if (!q) redirect("/");

  // In a real app, a missing location param could automatically search close to the user's location (That's how Yelp does it)
  const userLocation = location || locations[0];

  return (
    <div>
      <Canonical />
      <Header q={q} location={userLocation} />
      <Suspense fallback={<ResultsLoadingSkeleton />} key={`${q}-${location}`}>
        <Results q={q} location={userLocation} />
      </Suspense>
    </div>
  );
}