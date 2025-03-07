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
                        <div className="w-48 h-32 rounded-lg overflow-hidden shadow-md">
                          {city.name === "San Francisco" && (
                            <FallbackImage 
                              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=300&fit=crop&q=80"
                              alt={city.name}
                              className="w-full h-full object-cover"
                              fallbackSrc="https://images.unsplash.com/photo-1534050359320-02900022671e?w=500&h=300&fit=crop&q=80"
                            />
                          )}
                          {city.name === "Chicago" && (
                            <FallbackImage 
                              src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=500&h=300&fit=crop&q=80"
                              alt={city.name}
                              className="w-full h-full object-cover"
                              fallbackSrc="https://images.unsplash.com/photo-1581373449483-37449f962b6c?w=500&h=300&fit=crop&q=80"
                            />
                          )}
                          {city.name === "Miami" && (
                            <FallbackImage 
                              src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=500&h=300&fit=crop&q=80"
                              alt={city.name}
                              className="w-full h-full object-cover"
                              fallbackSrc="https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=500&h=300&fit=crop&q=80"
                            />
                          )}
                        </div>
                        <span className="font-medium">{city.name}</span>
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