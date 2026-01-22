import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import ComparisonTable from "@/components/ComparisonTable";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import { Skeleton } from "@/components/ui/skeleton";
import { locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
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

  // Construct the canonical URL - Ensure no double slash if baseUrl ends with /
  const searchPath = 'search';
  const canonicalUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}${searchPath}?${queryParams}`;

  return {
    title: `${q ? `Best ${q}` : 'Best'} in ${location}`,
    description: `Discover the best ${q} in ${location}. Luxurious accommodations with private ${q} for a relaxing getaway.`,
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
  const geoData = locationGEOData[location] || { expertTips: [], faqs: [] };

  return (
    <main className="container mx-auto space-y-8 px-4 py-8">
      <p className="text-center font-semibold">
        Showing {results.length} results for {`"${q}"`} near {location}
      </p>
      <h1 className="text-center text-3xl font-bold">
        {results.length} Best {q} in {location}
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((hotel) => (
          <HotelItem key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <ComparisonTable hotels={results} />

      <ExpertTips tips={geoData.expertTips} location={location} />

      <FAQSection faqs={geoData.faqs} location={location} />
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
