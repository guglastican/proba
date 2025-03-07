
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getAllCategoryCombinations, getCityDetails } from "@/data/categories";
import HotelCard from "@/components/HotelCard";
import Link from "next/link";

interface PageProps {
  params: {
    country: string;
    city: string;
  };
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const combinations = getAllCategoryCombinations();
  
  return combinations.map(combo => ({
    country: combo.country,
    city: combo.city,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default async function CategoryCityPage({ params }: PageProps) {
  const { country, city } = params;
  const cityDetails = getCityDetails(country, city);
  
  if (!cityDetails) {
    notFound();
  }
  
  const hotels = await cityDetails.getHotels();

  return (
    <div>
      <Header q={cityDetails.name} location={cityDetails.name} />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Hotels in {cityDetails.name}</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover the best places to stay in {cityDetails.name}. Browse our selection of top-rated hotels,
            from luxury accommodations to cozy boutique stays.
          </p>
        </section>
        
        {hotels.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold mb-4">No hotels found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any hotels in {cityDetails.name} matching your criteria.
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
