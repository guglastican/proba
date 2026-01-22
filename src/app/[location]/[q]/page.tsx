import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import ComparisonTable from "@/components/ComparisonTable";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import SentimentSummary from "@/components/SentimentSummary";
import AISummaryBlock from "@/components/AISummaryBlock";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
import { Metadata } from "next";
import { cache } from "react";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const allTags = await getAllTags({
    // If you have very many pages, you can only render a subset at compile-time. The rest will be rendered & cached at first access.
    // limit: 10
  });

  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location,
        q: tag,
      })),
    )
    .flat();
}

const getHotels = cache(searchHotels);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);


  return {
    title: `Top ${results.length} ${qDecoded} near ${locationDecoded} - Updated ${new Date().getFullYear()}`,
    description: `Find the best ${qDecoded} near ${locationDecoded}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);
  const geoData = locationGEOData[locationDecoded] || { expertTips: [], faqs: [] };

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Best {results.length} {locationDecoded} with {qDecoded}
        </h1>

        <AISummaryBlock locationName={locationDecoded} summary={geoData.sentimentSummary!} />

        <SentimentSummary summary={geoData.sentimentSummary!} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <ComparisonTable hotels={results} />

        <ExpertTips tips={geoData.expertTips} location={locationDecoded} />

        <FAQSection faqs={geoData.faqs} location={locationDecoded} />
      </main>
    </div>
  );
}
