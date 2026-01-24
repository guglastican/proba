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
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
import { Metadata } from "next";
import { cache } from "react";
import { slugify } from "@/lib/utils";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const allTags = await getAllTags();

  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location: slugify(location),
        q: slugify(tag),
      })),
    )
    .flat();
}

const getHotels = cache(searchHotels);

async function getMatchedParams(params: { location: string; q: string }) {
  const allTags = await getAllTags();

  const matchedLocation = locations.find(l => slugify(l) === params.location) || params.location;
  const matchedTag = allTags.find(t => slugify(t) === params.q) || params.q;

  return { location: matchedLocation, q: matchedTag };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { location, q } = await getMatchedParams(resolvedParams);

  const results = await getHotels(q, location);

  return {
    title: `Top ${results.length} ${q} near ${location} - Updated ${new Date().getFullYear()}`,
    description: `Find the best ${q} near ${location}`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { location, q } = await getMatchedParams(resolvedParams);

  const results = await getHotels(q, location);
  const geoData = locationGEOData[location] || { expertTips: [], faqs: [] };

  return (
    <div>
      <Header q={q} location={location} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <Breadcrumbs location={location} q={q} />

        <h1 className="text-center text-3xl font-bold">
          Best {results.length} {location} with {q}
        </h1>

        <AISummaryBlock locationName={location} summary={geoData.sentimentSummary!} />

        <SentimentSummary summary={geoData.sentimentSummary!} />

        <HotelSchema hotels={results} locationName={location} />

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
