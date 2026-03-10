import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import ComparisonTable from "@/components/ComparisonTable";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import SentimentSummary from "@/components/SentimentSummary";
import AISummaryBlock from "@/components/AISummaryBlock";
import LocationOverview from "@/components/LocationOverview";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinks from "@/components/InternalLinks";
import HotelSchema from "@/components/HotelSchema";
import { Skeleton } from "@/components/ui/skeleton";
import { locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getSeoPhrasing, sanitizeUrl } from "@/lib/utils";
import Image from "next/image";

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

  // Use the helper for metadata, defaulting to 10 if we don't know the exact count here
  const { title, description } = getSeoPhrasing(q, location, 10);

  // We rewrite title to strip out "Top 10" because this is a general search page
  // A simple safe string replace or relying on just "Best X in Y" is okay
  const dynamicTitle = `${q ? `${q}` : 'Best Hotels'} in ${location}`;

  return {
    title: dynamicTitle,
    description,
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

  const heroImage = results.length > 0 ? results[0].image : "/hotels-with-hot-tub.jpg";
  const { h1, intro } = getSeoPhrasing(q, location, results.length);

  return (
    <>
      {/* Header Section without Photo */}
      <section className="container mx-auto px-4 pt-10 pb-4">
        <Breadcrumbs location={location} q={q} />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl mx-auto text-gray-900 text-center">
          {h1}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium text-center">
          {intro}
        </p>
      </section>

      <main className="container mx-auto space-y-12 px-4 py-8 bg-white">

        {/* Elevated E-E-A-T Section */}
        <div className="flex flex-col gap-10 mb-8 max-w-5xl mx-auto">
          <AISummaryBlock locationName={location} summary={geoData.sentimentSummary!} q={q} />
          <ExpertTips tips={geoData.expertTips} location={location} />
        </div>

        <HotelSchema hotels={results} locationName={location} q={q} />

        <div className="flex flex-col space-y-16 py-12 border-t border-gray-100 mt-12">
          {results.slice(0, 1).map((hotel, index) => (
            <HotelItem key={hotel.id} hotel={hotel} index={index} />
          ))}

          {geoData.sentimentSummary && (
            <div className="my-8 max-w-5xl mx-auto w-full">
              <SentimentSummary summary={geoData.sentimentSummary} />
            </div>
          )}

          {results.slice(1).map((hotel, index) => (
            <HotelItem key={hotel.id} hotel={hotel} index={index + 1} />
          ))}
        </div>

        <ComparisonTable hotels={results} />

        <FAQSection faqs={geoData.faqs} location={location} />

        <div className="max-w-5xl mx-auto w-full pt-8">
          <LocationOverview location={location} />
        </div>

        <InternalLinks currentQ={q} currentLocation={location} />
      </main>
    </>
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
