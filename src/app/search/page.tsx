import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { Skeleton } from "@/components/ui/skeleton";
import { locations, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ q?: string; location?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const q = params.q || ''; // q is always present due to redirect in Page
  const location = params.location || locations[0]; // Default to first location if not provided
  const baseUrl = 'https://www.romantic-vacations-destinations.com/'; // Replace with your actual domain, e.g., process.env.SITE_URL

  // Build the query string with q and effective location
  const queryParams = new URLSearchParams({
    q,
    location,
  }).toString();

  // Construct the canonical URL
  const canonicalUrl = `${baseUrl}/search?${queryParams}`;

  return {
    title: `${q ? `Hotels With ${q}` : 'Hotels With'} in ${location}`,
    description: `Discover the best ${q} hotels in ${location}. Luxurious accommodations with private ${q} for a relaxing getaway.`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const { q, location } = await searchParams;

  if (!q) redirect("/");

  // In a real app, a missing location param could automatically search close to the user's location (That's how Yelp does it)
  const userLocation = location || locations[0];

  return (
    <div>
      <Header q={q} location={userLocation} />
      <Suspense fallback={<ResultsLoadingSkeleton />} key={`${q}-${location}`}>
        <Results q={q} location={userLocation} />
      </Suspense>
    </div>
  );
}

interface ResultsProps {
  q: string;
  location: string;
}

async function Results({ q, location }: ResultsProps) {
  const results = await searchHotels(q, location);

  return (
    <main className="container mx-auto space-y-8 px-4 py-8">
      <p className="text-center font-semibold">
        Showing {results.length} results for {`"${q}"`} near {location}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </main>
  );
}

function ResultsLoadingSkeleton() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <Skeleton className="mx-auto h-7 w-[380px]" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[420px] w-full" />
        ))}
      </div>
    </div>
  );
}
