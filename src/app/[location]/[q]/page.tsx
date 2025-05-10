import Header from "@/components/Header";
import { getAllTags, locations, Hotel, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";
import CanonicalUrl from "@/components/CanonicalUrl";
import HotelList from "@/components/HotelList";

interface PageProps {
  params: { location: string; q: string };
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await searchHotels(qDecoded, locationDecoded);

  return {
    title: `Top ${results.length} hotels in ${locationDecoded}`,
    description: `Find the best hotels in ${locationDecoded}`,
  };
}

export default function Page({ params }: PageProps) {
  const { q, location } = params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  return (
    <div>
      <CanonicalUrl location={location} q={q} />
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top hotels in {locationDecoded}
        </h1>
        <HotelList q={qDecoded} location={locationDecoded} />
      </main>
    </div>
  );
}
