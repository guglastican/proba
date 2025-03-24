import Head from "next/head";
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Tub Finder: Discover Luxurious Hotels with Hot Tubs",
  description: "Find the perfect hotel with hot tubs across the United States. Explore romantic getaways, spa experiences, and luxury accommodations with private hot tubs.",
  keywords: [
    "hot tub hotels", 
    "luxury accommodations", 
    "romantic getaways", 
    "spa hotels", 
    "private hot tubs"
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'
  },
  openGraph: {
    title: "Hot Tub Finder: Luxurious Hotels with Hot Tubs",
    description: "Discover the most relaxing and romantic hotels with hot tubs across the USA.",
    type: "website",
    images: [
      {
        url: "/hotels-with-hot-tub.jpg",
        width: 1200,
        height: 630,
        alt: "Luxurious hotel with hot tub"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HotTubFinder: Luxurious Hotels with Hot Tubs",
    description: "Discover the most relaxing and romantic hotels with hot tubs across the USA.",
    images: ["/hotels-with-hot-tub.jpg"]
  }
};

export default function Home() {
  const canonicalUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com';

  const featuredLocations = [
    { name: "San Francisco, CA", hotels: 42, description: "Discover stunning hot tub hotels with Bay Area views" },
    { name: "Miami, FL", hotels: 35, description: "Tropical hot tub escapes in the Sunshine State" },
    { name: "Las Vegas, NV", hotels: 50, description: "Luxurious hot tub experiences in the Entertainment Capital" },
    { name: "New York, NY", hotels: 28, description: "Luxurious hot tub getaways in the iconic city that never sleeps" },
    { name: "Chicago, IL", hotels: 28, description: "Urban hot tub getaways in a timeless, bustling cosmopolitan hub" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      
      <Header />
      
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Hot Tub Getaway
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Discover luxurious hotels with private hot tubs across the United States. 
            Relax, unwind, and create unforgettable memories.
          </p>
          <Link 
            href="/search" 
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary-dark transition-colors"
          >
            Start Searching
          </Link>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Hot Tub Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location) => (
              <div key={location.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <p className="text-primary font-medium">
                  {location.hotels}+ hotels available
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
