import banner from "@/assets/hotels-with-hot-tub.jpg";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// Add the metadata for Google Search Console verification
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3002'),
  title: "Top Hotels with Private Hot Tubs in Room | 2025 Luxury Stays",
  description: "Book 4+ star hotels with private jacuzzis near you ✅ Verified guest reviews ✅ Best price guarantee ✅ 24/7 customer support. Find perfect romantic getaways or family suites with in-room hot tubs.",
  keywords: [
    "hotels with private hot tubs in room",
    "luxury jacuzzi suites near me",
    "romantic hotels with hot tub 2025",
    "best in-room jacuzzi hotels",
    "5 star hotels with private hot tubs",
    "honeymoon hotels with jacuzzi",
    "family suites with hot tub",
    "pet friendly hotels with jacuzzi",
    "all inclusive resorts with private hot tubs",
    "luxury spa hotels with in-room jacuzzi"
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "#1 Rated Hotels with In-Room Hot Tubs [2025 Updated List]",
    description: "Expert-curated selection of luxury hotels & resorts featuring private jacuzzis. Compare prices, read verified reviews, and book direct for best deals on romantic escapes and family vacations.",
    images: [{
      url: "https://source.unsplash.com/random/1200x630/?luxury-hotel,hot-tub,jacuzzi",
      width: 1200,
      height: 630,
      alt: "Luxury Hotel Suite with Private Outdoor Hot Tub",
    }],
    siteName: "Luxury Hot Tub Hotels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hotels with Private Jacuzzis | 2025's Top Rated Stays",
    description: "Compare prices & amenities at 4+ star hotels featuring in-room hot tubs. Exclusive deals, verified photos, and instant confirmation available.",
    images: ["https://source.unsplash.com/random/1200x630/?luxury-resort,spa,hot-tub"]
  },
  alternates: {
    canonical: "/"
  },
  other: {
    "google-site-verification": "zlqSpO2H6dGPLVmzbIAwNzFr5tvkdRQaI_syLVkZXEI",
    "og:locale": "en_US",
    "og:type": "website",
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
              alt="Luxury hotel room with private hot tub"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="rounded-lg object-cover"
              priority
              placeholder="blur"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <h1 className="text-center text-3xl font-bold xl:text-4xl" itemProp="name">
              Best Hotels with Private Hot Tubs Near You | 2025 Luxury Stays
            </h1>
            <p className="text-center text-lg" itemProp="description">
              Discover 500+ luxury hotels & resorts with in-room jacuzzis across 50+ destinations. Compare prices, read 10,000+ verified reviews, and book with our price match guarantee.
            </p>
            {/* Structured Data for SEO */}
            {/* Enhanced Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify([
                  {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Luxury Hot Tub Hotels",
                    "url": "http://localhost:3002",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "http://localhost:3002/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Luxury Hot Tub Hotels",
                    "image": "https://source.unsplash.com/random/800x600/?luxury-hotel",
                    "priceRange": "$$$$",
                    "telephone": "+1-800-555-1234",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "456 Premium Suites Blvd",
                      "addressLocality": "Beverly Hills",
                      "addressRegion": "CA",
                      "postalCode": "90210",
                      "addressCountry": "USA"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "reviewCount": "2534"
                    }
                  }
                ])
              }}
            />
            
            {/* Featured Locations Section for SEO */}
            <div className="hidden" itemScope itemType="https://schema.org/ItemList">
              <h2 itemProp="name">Popular Hot Tub Hotel Locations</h2>
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/search?location=London" itemProp="url">
                  <span itemProp="name">London Hotels with Hot Tubs</span>
                </Link>
                <meta itemProp="position" content="1" />
              </div>
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/search?location=Paris" itemProp="url">
                  <span itemProp="name">Paris Hotels with Private Jacuzzis</span>
                </Link>
                <meta itemProp="position" content="2" />
              </div>
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/search?location=New+York" itemProp="url">
                  <span itemProp="name">New York Jacuzzi Suites</span>
                </Link>
                <meta itemProp="position" content="3" />
              </div>
            </div>

            {/* FAQ Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [{
                    "@type": "Question",
                    "name": "What amenities come with hotels featuring private hot tubs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our luxury hotels with in-room jacuzzis typically include premium bedding, 24/7 room service, spa access, and high-end bathroom amenities. Many offer complimentary champagne and romantic packages."
                    }
                  }, {
                    "@type": "Question",
                    "name": "How do I find hotels with hot tubs near me?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use our location search feature or enable browser geolocation to discover top-rated hotels with private hot tubs within 50 miles of your current location."
                    }
                  }]
                })
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
import { Metadata } from "next";
import Link from "next/link";
import { getAllCountries } from "@/data/categories";
import Header from "@/components/Header";

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
                      {city.name}
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
