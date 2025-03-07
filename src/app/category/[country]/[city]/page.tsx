
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getAllCategoryCombinations, getCityDetails } from "@/data/categories";
import Link from "next/link";

type PageParams = {
  country: string;
  city: string;
};

type Props = {
  params: PageParams;
};

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

  return (
    <div>
      <Header q={cityDetails.name} location="All Locations" />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hotels in {cityDetails.name}</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse our selection of the best hotels in {cityDetails.name}. Perfect accommodations for your trip.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* We'll need to update this once you create the HotelCard component */}
          {/* {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))} */}
          <div className="p-4 border rounded-lg shadow-md">
            <p className="text-lg font-semibold">Hotel listings coming soon</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href={`/`}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg group"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
