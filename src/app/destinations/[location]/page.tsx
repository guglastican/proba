import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import ComparisonTable from "@/components/ComparisonTable";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import LocationOverview from "@/components/LocationOverview";
import QuickAnswer from "@/components/QuickAnswer";
import { locations } from "@/data/hotels";
import {
  getLocationBySlug,
  getHotelsForLocation,
  getLocationCount,
} from "@/data/directory";
import { locationGEOData } from "@/data/location-geo-data";
import { slugify, PRIMARY_TAG_SLUG } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";

interface PageProps {
  params: Promise<{ location: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ location: slugify(location.split(",")[0]) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const matched = getLocationBySlug(location);
  if (!matched) return { title: "Destination Not Found" };

  const count = getLocationCount(matched);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com";

  return {
    title: `Hotels with Hot Tubs in ${matched} (${count})`,
    description: `Discover the ${count} best hotels with hot tubs in ${matched}. Compare prices, ratings and amenities to book your perfect soak.`,
    alternates: { canonical: `${baseUrl}/${slugify(matched)}/${PRIMARY_TAG_SLUG}` },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { location } = await params;
  const matched = getLocationBySlug(location);
  if (!matched) notFound();

  const hotels = getHotelsForLocation(matched);
  const geoData = locationGEOData[matched] || { expertTips: [], faqs: [] };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link
          href="/destinations"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          All destinations
        </Link>

        <header className="mb-12 text-center">
          <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-emerald-600">
            <MapPin className="size-4" />
            Destination guide
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Hotels with Hot Tubs in {matched}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {hotels.length} top-rated hot tub stays in {matched}, hand-picked and ranked so you can
            find the perfect place to unwind.
          </p>
        </header>

        <div className="mx-auto mb-12 max-w-4xl">
          <QuickAnswer
            location={matched}
            q="Hot Tubs"
            hotels={hotels}
            summary={geoData.sentimentSummary}
          />
        </div>

        {hotels.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No stays found for this destination yet — check back soon.
          </p>
        ) : (
          <>
            <div className="flex flex-col space-y-16 border-t border-gray-100 py-8">
              {hotels.map((hotel, index) => (
                <HotelItem key={hotel.id} hotel={hotel} index={index} />
              ))}
            </div>

            <ComparisonTable hotels={hotels} />
          </>
        )}

        <ExpertTips tips={geoData.expertTips} location={matched} />
        <FAQSection faqs={[...geoData.faqs, ...locationGEOData["General"].faqs]} location={matched} />

        <div className="mx-auto mt-12 max-w-5xl">
          <LocationOverview location={matched} />
        </div>
      </main>
    </div>
  );
}
