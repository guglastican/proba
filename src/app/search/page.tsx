import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { Skeleton } from "@/components/ui/skeleton";
import { locations, searchHotels } from "@/data/hotels";
import { locationDescriptions } from "@/data/location-descriptions";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

type Props = {
  searchParams: { q?: string; location?: string };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const q = searchParams.q || '';
  const location = searchParams.location || locations[0];

  return {
    title: `${q ? `Hotels With ${q}` : 'Hotels With'} in ${location}`,
    description: `Discover the best ${q}  hotels in ${location}. Luxurious accommodations with private ${q} for a relaxing getaway.`,
    openGraph: {
      title: `${q ? `Hotels With ${q}` : 'Hotels With'} in ${location}`,
      description: `Discover the best ${q}  hotels in ${location}. Luxurious accommodations with private ${q} for a relaxing getaway.`,
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const q = searchParams.q || '';
  const location = searchParams.location || locations[0];

  if (!q) redirect("/");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header q={q} location={location} />
      <Suspense fallback={<ResultsLoadingSkeleton />} key={`${q}-${location}`}>
        <Results q={q} location={location} />
      </Suspense>
    </div>
  );
}

interface ResultsProps {
  q: string;
  location: string;
}

function LocationDescription({ location }: { location: string }) {
  const locationData = locationDescriptions[location];
  
  return locationData ? (
    <section className="container mx-auto px-4 py-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{locationData.overview}</h2>
        
        <article>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Must-Visit Attractions</h3>
          <ul className="space-y-4 text-gray-600">
            {locationData.attractions.map((attraction, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">{attraction.title}</span>
                <p>{attraction.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Culinary Experiences</h3>
          <ul className="space-y-4 text-gray-600">
            {locationData.dining.map((restaurant, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">{restaurant.title}</span>
                <p>{restaurant.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hot Tub Hotel Recommendations</h3>
          <ul className="space-y-4 text-gray-600">
            {locationData.hotTubHotels.map((hotel, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">{hotel.title}</span>
                <p>{hotel.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Explore Nearby</h3>
          <p className="text-gray-600">{locationData.nearbyDestinations}</p>
        </article>
      </div>
    </section>
  ) : null;
}

async function Results({ q, location }: ResultsProps) {
  const results = await searchHotels(q, location);

  return (
    <>
      <main className="container mx-auto space-y-8 px-4 py-8">
        <p className="text-center font-semibold">
          Showing {results.length} results for {`"${q}"`} near {location}
        </p>
        <h1 className="text-center text-3xl font-bold mt-4 mb-6">
          Hotels With {`"${q}"`} in {location}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
      <LocationDescription location={location} />
    </>
  );
}

function ResultsLoadingSkeleton() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <Skeleton className="mx-auto h-7 w-[380px]" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[420px] w-full" />
        ))}
      </div>
    </div>
  );
}
