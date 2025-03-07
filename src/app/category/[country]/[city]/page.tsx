
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getAllCategoryCombinations, getCityDetails } from "@/data/categories";
import HotelCard from "@/components/HotelCard";
import Link from "next/link";

type PageParams = {
  country: string;
  city: string;
};

interface Props {
  params: PageParams;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const combinations = getAllCategoryCombinations();
  return combinations.map(combo => ({
    country: combo.country,
    city: combo.city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, city } = params;
  const cityDetails = getCityDetails(country, city);

  if (!cityDetails) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.'
    };
  }

  return {
    title: `${cityDetails.name} Hotels - Find Top Places to Stay`,
    description: `Browse the best hotels in ${cityDetails.name}. Find the perfect place to stay for your trip.`,
  };
}

export default function Page({ params }: Props) {
  const { country, city } = params;
  const cityDetails = getCityDetails(country, city);

  if (!cityDetails) {
    notFound();
  }

  // Use hotels from city details
  const hotels = cityDetails.getHotels ? cityDetails.getHotels() : [];

  return (
    <div>
      <Header q={cityDetails.name} location={country} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">
            Hotels in {cityDetails.name}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of the best hotels in {cityDetails.name}.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(hotels) && hotels.length > 0 ? (
            hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No hotels found for this city.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to all locations
          </Link>
        </div>
      </main>
    </div>
  );
}
