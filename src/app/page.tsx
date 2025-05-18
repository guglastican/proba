import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";
import { Search, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Hot Tub Finder: Discover Luxurious Hotels with Hot Tub",
  description: "Find the perfect hotel with hot tubs across the United States. Explore romantic getaways, spa experiences, and luxury accommodations with private hot tubs.",
  keywords: [
    "hotels with hot tub", 
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
  const featuredLocations = [
    { 
      name: "San Francisco CA", 
      hotels: 42, 
      description: "Discover stunning hot tub hotels with Bay Area views",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=San+Francisco%2C+CA" 
    },
    { 
      name: "Miami, FL", 
      hotels: 35, 
      description: "Tropical hot tub escapes in the Sunshine State",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=Miami%2C+FL" 
    },
    { 
      name: "Las Vegas, NV", 
      hotels: 50, 
      description: "Luxurious hot tub experiences in the Entertainment Capital",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=Las+Vegas%2C+NV" 
    },
    { 
      name: "New York, NY", 
      hotels: 28, 
      description: "Luxurious hot tub getaways in the iconic city that never sleeps",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=New+York%2C+NY" 
    },
    { 
      name: "Chicago, IL", 
      hotels: 28, 
      description: "Experience pure bliss and unwind completely in our luxurious hot tub.",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=Chicago%2C+IL" 
    },
    { 
      name: "London", 
      hotels: 28, 
      description: "Urban hot tub getaways in a timeless, bustling cosmopolitan hub",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=London" 
    },
    { 
      name: "Atlanta, GA", 
      hotels: 8, 
      description: "Indulge in ultimate relaxation with a soothing hot tub experience. ",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=Atlanta%2C+GA" 
    },
    { 
      name: "Indianapolis, IN", 
      hotels: 3, 
      description: "Sink into tranquility and let the stresses melt away in the warm, bubbling hot tub.",
      url: "/search?q=Hotels+With+Hot+Tub+in+Room&location=Indianapolis%2C+IN" 
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Easy Search",
      description: "Find your perfect hot tub hotel with our intuitive search"
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Explore hot tub hotels across the United States"
    },
    {
      icon: Star,
      title: "Curated Selection",
      description: "Handpicked hotels with the best hot tub experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Hotels With Hot Tub 
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Discover luxurious hotels with private hot tubs across the United States. 
            Relax, unwind, and create unforgettable memories.
          </p>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels With Hot Tub</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredLocations.map((location) => (
                <Link 
                  key={location.name} 
                  href={location.url}
                  className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition-colors group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{location.hotels} Hot Tub Hotels</p>
                  <p className="text-sm text-gray-500 italic">{location.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hot Tub Finder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Hot Tub Finder",
            "url": "https://www.romantic-vacations-destinations.com/",
            "description": "Find the perfect hotel with hot tubs across the United States",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.romantic-vacations-destinations.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} 
      />
    </div>
  );
}
