import Header from "@/components/Header";
import { Metadata } from "next";
import { categoriesByCountry, locationCategories } from "@/data/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Destinations | Luxury Hotels with Hot Tubs",
  description: "Explore our complete list of destinations featuring luxury hotels with hot tubs and jacuzzis around the world.",
};

export default function DestinationsPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-4xl font-bold">All Destinations</h1>
          <p className="mb-12 text-lg text-gray-700">
            Discover luxury hotels with hot tubs in these popular destinations around the world. 
            Click on any location to find the perfect accommodation for your next getaway.
          </p>
          
          {/* Display all destinations by country */}
          {Object.entries(categoriesByCountry).map(([country, categories]) => (
            <div key={country} className="mb-16">
              <div className="mb-6 flex items-center">
                <h2 className="text-3xl font-semibold">{country}</h2>
                <div className="ml-4 h-0.5 flex-1 bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((category) => (
                  <Link 
                    href={`/search?q=hot tub&location=${category.slug}`} 
                    key={category.id}
                    className="group flex flex-col rounded-lg border border-gray-200 p-6 transition-all hover:border-blue-500 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center">
                      <span className="mr-3 text-4xl">{category.icon}</span>
                      <h3 className="text-xl font-medium group-hover:text-blue-600">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                    <div className="mt-4 flex items-center text-blue-600">
                      <span className="text-sm font-medium">View Hotels</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-16 text-center">
            <Link href="/" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
