
import { Metadata } from "next";
import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { searchHotels } from "@/data/hotels";
import { getCountryBySlug, getCityBySlug, getAllCategoryCombinations } from "@/data/categories";
import { cache } from "react";
import { notFound } from "next/navigation";

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

const getHotels = cache(searchHotels);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country, city } = params;
  
  const countryData = getCountryBySlug(country);
  const cityData = getCityBySlug(country, city);
  
  if (!countryData || !cityData) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found",
    };
  }

  const results = await getHotels("Hotel", cityData.name);

  return {
    title: `Top ${results.length} Hotels in ${cityData.name}, ${countryData.name} - Updated ${new Date().getFullYear()}`,
    description: `Find the best hotels in ${cityData.name}, ${countryData.name}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { country, city } = params;
  
  const countryData = getCountryBySlug(country);
  const cityData = getCityBySlug(country, city);
  
  if (!countryData || !cityData) {
    notFound();
  }

  const results = await getHotels("Hotel", cityData.name);

  return (
    <div>
      <Header q="Hotels" location={cityData.name} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} Hotels in {cityData.name}, {countryData.name}
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
