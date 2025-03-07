import Link from "next/link";
import { Metadata } from "next";
import { getAllCountries } from "@/data/categories";
import Header from "@/components/Header";
import FallbackImage from "@/components/FallbackImage";

export const metadata: Metadata = {
  title: "Hotel Directory - Find Top Hotels Worldwide",
  description: "Browse our comprehensive directory of hotels by location and category",
};

export default function HomePage() {
  const countries = getAllCountries();

  return (
    <div>
      <Header q="Home" location="All Locations" />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Hotel</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse our extensive collection of hotels around the world by location or category.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Browse by Location</h2>
            <Link href="/categories" className="text-blue-600 hover:underline">
              View all locations
            </Link>
          </div>

          <div className="space-y-8">
            {countries.map((country) => (
              <div key={country.slug} className="border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{country.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {country.cities.slice(0, 4).map((city) => (
                    <Link 
                      href={`/category/${country.slug}/${city.slug}`} 
                      key={city.slug}
                      className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                          <FallbackImage 
                            src={`https://source.unsplash.com/featured/?${city.name},travel,city`}
                            alt={city.name}
                            className="w-full h-full object-cover"
                            fallbackSrc={`https://source.unsplash.com/random/?${city.name},landmark`}
                          />
                        </div>
                        <span>{city.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                {country.cities.length > 4 && (
                  <div className="mt-4 text-right">
                    <Link 
                      href={`/categories#${country.slug}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View all {country.name} cities
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Link 
            href="/categories"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Explore All Categories
          </Link>
        </section>
      </main>
    </div>
  );
}