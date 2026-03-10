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
import { sanitizeUrl, slugify, getSeoPhrasing } from "@/lib/utils";
import { notFound, permanentRedirect } from "next/navigation";
import Image from "next/image";

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

type MatchedParamsResult =
  | { type: 'render'; location: string; q: string }
  | { type: 'redirect'; url: string }
  | { type: 'not-found' };

async function getMatchedParams(params: { location: string; q: string }): Promise<MatchedParamsResult> {
  const decodedLocation = decodeURIComponent(params.location);
  const decodedQ = decodeURIComponent(params.q);

  const slugifiedLocation = slugify(decodedLocation);
  const slugifiedQ = slugify(decodedQ);

  const matchedLocation = locations.find(l => slugify(l) === slugifiedLocation);

  if (!matchedLocation) {
    // Check for known legacy non-location paths
    if (slugifiedLocation === 'hotel' || slugifiedLocation === 'destination-weddings-in-oregon' || slugifiedLocation === 'caribbean-sailing-cruise-vacation') {
      return { type: 'redirect', url: '/' };
    }

    // Fallback for weird typos like cas-vegas-nv
    if (slugifiedLocation === 'cas-vegas-nv') {
      return { type: 'redirect', url: '/las-vegas-nv/hotels-with-hot-tub-in-room' };
    }

    return { type: 'not-found' };
  }

  // If the query is just numbers (indicating an old indexed internal ID)
  if (/^\d+$/.test(decodedQ)) {
    return { type: 'redirect', url: `/${slugify(matchedLocation)}/hotels-with-hot-tub-in-room` };
  }

  const allTags = await getAllTags();

  // Try exact match first
  let matchedTag = allTags.find(t => slugify(t) === slugifiedQ);

  // If not found, try partial match (e.g. 'Hotels With Hot' -> 'Hotels With Hot Tub In Room')
  if (!matchedTag) {
    matchedTag = allTags.find(t => slugify(t).includes(slugifiedQ) || slugifiedQ.includes(slugify(t)));
  }

  // If still no tag match (e.g. completely invalid tag for a valid location)
  if (!matchedTag) {
    return { type: 'redirect', url: `/${slugify(matchedLocation)}/hotels-with-hot-tub-in-room` };
  }

  const targetLocationSlug = slugify(matchedLocation);
  const targetTagSlug = slugify(matchedTag);

  // If the current URL parameters exactly match the clean slugs, render the page
  if (params.location === targetLocationSlug && params.q === targetTagSlug) {
    return { type: 'render', location: matchedLocation, q: matchedTag };
  }

  // Otherwise, issue a 301 Permanent Redirect to the clean slugified URL
  return { type: 'redirect', url: `/${targetLocationSlug}/${targetTagSlug}` };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const matchedParams = await getMatchedParams(resolvedParams);

  if (matchedParams.type !== 'render') {
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

  if (matchedParams.type === 'redirect') {
    permanentRedirect(matchedParams.url);
  } else if (matchedParams.type === 'not-found') {
    notFound();
  }

  const { location, q } = matchedParams;
  const results = await getHotels(q, location);
  const geoData = locationGEOData[location] || { expertTips: [], faqs: [] };

  const { h1, intro } = getSeoPhrasing(q, location, results.length);
  const heroImage = results.length > 0 ? results[0].image : "/hotels-with-hot-tub.jpg";

  return (
    <div>
      <Header q={q} location={location} />

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
    </div>
  );
}
