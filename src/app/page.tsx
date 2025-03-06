import banner from "@/assets/restaurant-banner.jpg";
import Header from "@/components/Header";
import Image from "next/image";
import { Metadata } from "next";
import { categoriesByCountry, locationCategories } from "@/data/categories";
import Link from "next/link";

// Add the metadata for Google Search Console verification
export const metadata: Metadata = {
  other: {
    "google-site-verification": "zlqSpO2H6dGPLVmzbIAwNzFr5tvkdRQaI_syLVkZXEI",
  },
};

export default async function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <div className="relative h-96 w-full">
          <Image
            src={banner}
            alt="Hotel With Hot Tubs"
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <h1 className="text-center text-3xl font-bold xl:text-4xl">
              Find the Best Hotels Near You
            </h1>
            <p className="text-center text-lg">
              Search for your favorite hotels with hot tubs
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <section className="py-12">
          <h2 className="mb-8 text-3xl font-bold">Explore Hotels by Location</h2>
          
          {/* Display categories by country */}
          {Object.entries(categoriesByCountry).map(([country, categories]) => (
            <div key={country} className="mb-12">
              <h3 className="mb-4 text-2xl font-semibold">{country}</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <Link 
                    href={`/search?q=hot tub&location=${category.slug}`} 
                    key={category.id}
                    className="group block overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md"
                  >
                    <div className="flex h-full flex-col p-6">
                      <div className="mb-4 text-4xl">{category.icon}</div>
                      <h4 className="mb-2 text-xl font-medium group-hover:text-blue-600">
                        {category.name}
                      </h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {/* View All Destinations Button */}
          <div className="mt-8 text-center">
            <Link 
              href="/destinations" 
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              View All Destinations
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
