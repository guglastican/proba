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

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);
  

  console.log(`Canonical URL: ${protocol}://${host}/${encodeURIComponent(location)}/${encodeURIComponent(q)}`);
  return {
    title: `Top ${qDecoded} near ${locationDecoded}`,
    description: `Find the best ${qDecoded} near ${locationDecoded}`,
    metadataBase: new URL(`${protocol}://${host}`),
    alternates: {
      canonical: `${protocol}://${host}/${locationDecoded}/${qDecoded}`,
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
        <p className="font-regular">Discover the best {results.length} {qDecoded} in {locationDecoded} with our expertly curated list of top-rated accommodations. Whether you&apos;re planning a romantic escape, a rejuvenating weekend, or a luxurious getaway, we&apos;ve got the perfect stay waiting for you. Our platform is designed to make your search seamless—filter effortlessly and find exactly what you need, from cozy rooms with private Jacuzzis to upscale hotels featuring relaxing hot tub suites.</p>
         <p>
If you&apos;ve been tirelessly googling &quot;{qDecoded} near me&quot; and happen to be in the {locationDecoded} area, your search ends here. These hand-picked properties aren&apos;t just good—they&apos;re exceptional, offering comfort, privacy, and that extra touch of indulgence that turns an ordinary trip into an unforgettable experience.
         </p>
         <p>
Right now, our listings highlight {results.length} standout options that meet your exact search for {qDecoded} in {locationDecoded}. Let us help you find the perfect place to unwind and soak the stress away.
          </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
