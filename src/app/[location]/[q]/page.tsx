import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
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
  
   // Create canonical URL - use custom encoding to preserve commas
  const baseUrl = 'https://www.romantic-vacations-destinations.com';
  const encodeWithCommas = (str: string) => {
    return encodeURIComponent(str).replace(/%2C/g, ',');
  };
  const canonicalUrl = `${baseUrl}/${encodeWithCommas(locationDecoded)}/${encodeWithCommas(qDecoded)}`;

  return {
    title: `Top ${results.length}  ${qDecoded} in ${locationDecoded}`,
    description: `Find the best ${qDecoded} near ${locationDecoded}. Imagine stepping onto your private balcony in the heart of ${locationDecoded}.`,
    robots: 'index, follow, noarchive, max-image-preview:large',
    metadataBase: new URL(baseUrl),
    alternates: {    
      canonical: canonicalUrl,
    },
    other: {
      'robots': 'index, follow, noarchive, max-image-preview:large',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);

  return (
    <>
      <meta name="robots" content="index, follow, noarchive, max-image-preview:large" />
      <div>
        <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Best {results.length} {locationDecoded} with {qDecoded} 
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
    </>
  );
}
