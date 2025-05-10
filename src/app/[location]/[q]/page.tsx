import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";
import { headers } from 'next/headers'

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

  const host = (await headers()).get('host');
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const results = await getHotels(q, location);

  console.log(`Canonical URL: ${protocol}://${host}/${encodeURIComponent(location)}/${encodeURIComponent(q)}`);
  return {
    title: `Top ${results.length} ${q} in ${location}`,
    description: `Find the best ${q} in ${location}`,
    metadataBase: new URL(`${protocol}://${host}`),
    alternates: {
      canonical: `${protocol}://${host}/${encodeURIComponent(location)}/${encodeURIComponent(q)}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} in {locationDecoded}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
