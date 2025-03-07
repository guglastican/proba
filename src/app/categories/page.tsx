
import { Metadata } from "next";
import Link from "next/link";
import { getAllCountries } from "@/data/categories";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Hotel Categories by Location",
  description: "Browse hotels by country and city",
};

export default function CategoriesPage() {
  const countries = getAllCountries();

  return (
    <div>
      <Header q="Categories" location="All Locations" />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Browse Hotels by Location
        </h1>
        
        <div className="space-y-8">
          {countries.map((country) => (
            <div key={country.slug} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {country.cities.map((city) => (
                  <Link 
                    href={`/category/${country.slug}/${city.slug}`} 
                    key={city.slug}
                    className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
