import Link from "next/link";
import { Metadata } from "next";
import { getAllCountries } from "@/data/categories";
import Header from "@/components/Header";
import FallbackImage from "@/components/FallbackImage";

export const metadata: Metadata = {
  title: "Hotel Directory - Find Top Hotels Worldwide",
  description: "Browse our comprehensive directory of hotels by location and category",
};

import Canonical from '@/components/Canonical';

export default function HomePage() {
  const countries = getAllCountries();

  return (
    <div>
      <Canonical />
      <Header q="Home" location="All Locations" />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Hotel</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse our extensive collection of hotels around the world by location or category.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Location</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-800 flex items-center group">
              <span>View all locations</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="space-y-8">
            {countries.map((country) => (
              <div key={country.slug} className="border rounded-lg p-6 shadow-sm bg-white">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  {country.name}
                  <div className="h-1 w-12 bg-blue-600 ml-4 rounded-full"></div>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {country.cities.slice(0, 4).map((city) => (
                    <Link 
                      href={`/category/${country.slug}/${city.slug}`} 
                      key={city.slug}
                      className="block overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg group"
                    >
                      <div className="relative w-full h-48">
                        {city.name === "San Francisco" && (
                          <FallbackImage 
                            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&q=80"
                            alt={city.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            fallbackSrc="https://images.unsplash.com/photo-1534050359320-02900022671e?w=800&h=600&fit=crop&q=80"
                          />
                        )}
                        {city.name === "Chicago" && (
                          <FallbackImage 
                            src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=600&fit=crop&q=80"
                            alt={city.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            fallbackSrc="https://images.unsplash.com/photo-1581373449483-37449f962b6c?w=800&h=600&fit=crop&q=80"
                          />
                        )}
                        {city.name === "Miami" && (
                          <FallbackImage 
                            src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=600&fit=crop&q=80"
                            alt={city.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            fallbackSrc="https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&h=600&fit=crop&q=80"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-3 left-3 text-white font-semibold text-xl drop-shadow-md">
                          {city.name}
                        </h3>
                        <div className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                          View Hotels
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {country.cities.length > 4 && (
                  <div className="mt-6 text-right">
                    <Link 
                      href={`/categories#${country.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-end group"
                    >
                      <span>View all {country.name} cities</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-16">
          <Link 
            href="/categories"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore All Categories</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}