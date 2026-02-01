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
import { getAllTags, getValidLocationTagPairs, locations, searchHotels } from "@/data/hotels";
import { locationGEOData } from "@/data/location-geo-data";
import { locationDescriptions } from "@/data/location-descriptions";
import { Metadata } from "next";
import { cache } from "react";
import { slugify } from "@/lib/utils";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const validPairs = await getValidLocationTagPairs();

  const hotelPages = validPairs.map((pair) => ({
    location: slugify(pair.location),
    q: slugify(pair.tag),
  }));

  // Also pre-render attraction pages
  const attractionPages: any[] = [];
  Object.entries(locationDescriptions).forEach(([locationName, data]) => {
    data.attractions.forEach(attraction => {
      attractionPages.push({
        location: slugify(locationName),
        q: slugify(attraction.title),
      });
    });
  });

  // Deduplicate and return
  const allParams = [...hotelPages, ...attractionPages];
  const uniquePaths = new Set(allParams.map(p => `${p.location}/${p.q}`));

  return Array.from(uniquePaths).map(path => {
    const [location, q] = path.split('/');
    return { location, q };
  });
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
    title: `Top ${results.length} ${q} near ${location}`,
    description: `Find the best ${q} near ${location}. Book Now`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/${resolvedParams.location}/${resolvedParams.q}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { location, q } = await getMatchedParams(resolvedParams);

  const results = await getHotels(q, location);
  const geoData = locationGEOData[location] || { expertTips: [], faqs: [] };

  return (
    <div className="min-h-screen bg-white">
      <Header q={q} location={location} />
      <main className="standard-container py-12 space-y-20">
        <section className="text-center max-w-4xl mx-auto">
          <Breadcrumbs location={location} q={q} />
          <h1 className="mt-8 text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Top {results.length} Best <br />
            <span className="text-transparent bg-clip-text premium-gradient">{q}</span> <br />
            <span className="text-2xl md:text-3xl text-gray-400 font-bold block mt-4">near {location}</span>
          </h1>
        </section>

        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
          <AISummaryBlock locationName={location} summary={geoData.sentimentSummary!} />
          <div className="max-w-4xl mx-auto mt-8">
            <SentimentSummary summary={geoData.sentimentSummary!} />
          </div>
        </section>

        <HotelSchema hotels={results} locationName={location} />

        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </section>

        <section className="pt-20 border-t border-gray-100">
          <LocationOverview location={location} />
        </section>

        <section className="pt-20 border-t border-gray-100">
          <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Direct Comparison</h2>
          <ComparisonTable hotels={results} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20 border-t border-gray-100">
          <ExpertTips tips={geoData.expertTips} location={location} />
          <FAQSection faqs={geoData.faqs} location={location} />
        </section>

        <section className="pt-20 border-t border-gray-100 bg-gray-50/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-20 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto">
            <InternalLinks currentQ={q} currentLocation={location} />
          </div>
        </section>
      </main>
    </div>
  );
}
