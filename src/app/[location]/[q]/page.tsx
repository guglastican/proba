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
import { getValidLocationTagPairs, getAllTags, locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
import { Metadata } from "next";
import { cache } from "react";
import { slugify, sanitizeUrl, getSeoPhrasing } from "@/lib/utils";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const validPairs = await getValidLocationTagPairs();

  return validPairs.map((pair) => ({
    location: slugify(pair.location),
    q: slugify(pair.tag),
  }));
}

const getHotels = cache(searchHotels);

async function getMatchedParams(params: { location: string; q: string }) {
  // Validate that location is one of our canonical locations
  const matchedLocation = locations.find(l => slugify(l) === params.location);
  if (!matchedLocation) return null;

  // Validate that q is not just numbers (which indicates an indexed internal ID)
  if (/^\d+$/.test(params.q)) return null;

  const allTags = await getAllTags();
  const matchedTag = allTags.find(t => slugify(t) === params.q) || params.q;

  return { location: matchedLocation, q: matchedTag };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const matchedParams = await getMatchedParams(resolvedParams);

  if (!matchedParams) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const { location, q } = matchedParams;
  const results = await getHotels(q, location);

  const baseUrl = sanitizeUrl(process.env.NEXT_PUBLIC_BASE_URL) || 'https://www.romantic-vacations-destinations.com';
  const url = `${baseUrl}/${resolvedParams.location}/${resolvedParams.q}`;

  const { title, description } = getSeoPhrasing(q, location, results.length);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Romantic Vacations Destinations",
      type: "website",
      images: results.length > 0 ? [{ url: sanitizeUrl(results[0].image) }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: results.length > 0 ? [sanitizeUrl(results[0].image)] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const matchedParams = await getMatchedParams(resolvedParams);

  if (!matchedParams) {
    notFound();
  }

  const { location, q } = matchedParams;
  const results = await getHotels(q, location);
  const geoData = locationGEOData[location] || { expertTips: [], faqs: [] };

  const { h1, intro } = getSeoPhrasing(q, location, results.length);

  return (
    <div>
      <Header q={q} location={location} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <Breadcrumbs location={location} q={q} />

        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight mb-2">
          {h1}
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          {intro}
        </p>

        <AISummaryBlock locationName={location} summary={geoData.sentimentSummary!} q={q} />

        <SentimentSummary summary={geoData.sentimentSummary!} />

        <HotelSchema hotels={results} locationName={location} q={q} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <LocationOverview location={location} />

        <ComparisonTable hotels={results} />

        <ExpertTips tips={geoData.expertTips} location={location} />

        <FAQSection faqs={geoData.faqs} location={location} />

        <InternalLinks currentQ={q} currentLocation={location} />
      </main>
    </div>
  );
}
