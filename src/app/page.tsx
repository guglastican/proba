import Header from "@/components/Header";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import { locationGEOData } from "@/data/location-geo-data";
import SentimentSummary from "@/components/SentimentSummary";
import AISummaryBlock from "@/components/AISummaryBlock";
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
      name: "San Francisco, CA",
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
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(16,185,129,0.08)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="standard-container text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Elevate Your Escape with <br />
              <span className="text-transparent bg-clip-text premium-gradient">Private Hot Tubs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              We've curated the most luxurious hotel experiences across the USA,
              specifically designed for those who value privacy and relaxation.
            </p>
          </div>
        </section>

        {/* Dynamic Sentiment Block */}
        <section className="standard-container mb-24">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Search className="w-32 h-32 text-primary" />
            </div>
            <AISummaryBlock locationName="Hot Tub Finder" summary={locationGEOData["General"].sentimentSummary!} />
            <div className="max-w-4xl mx-auto mt-8">
              <SentimentSummary summary={locationGEOData["General"].sentimentSummary!} />
            </div>
          </div>
        </section>

        {/* Featured Locations - Improved Dimensions */}
        <section className="bg-gray-50/50 py-24 border-y border-gray-100">
          <div className="standard-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Top Destinations</h2>
                <p className="text-gray-600">Explore our most popular cities for romantic spa getaways.</p>
              </div>
              <Link href="/destinations" className="text-primary font-bold hover:underline">
                View All Destinations →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredLocations.map((location) => (
                <Link
                  key={location.name}
                  href={location.url}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full active:scale-95"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-primary transition-colors">NEW</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {location.name}
                  </h3>
                  <p className="text-primary font-bold text-sm mb-4">{location.hotels} Verified Hotels</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">"{location.description}"</p>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Explore Now
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section - Premium Polish */}
        <section className="standard-container py-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Redefining Your Search</h2>
            <p className="text-gray-600 text-lg">We obsess over the details so you can focus on the bubbles. Here's why travelers trust us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group p-4"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <div className="relative z-10 text-center">
                  <div className="mx-auto h-20 w-20 rounded-2xl premium-gradient flex items-center justify-center text-white shadow-xl mb-8 group-hover:rotate-6 transition-transform">
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="bg-gray-900 text-white py-24">
          <div className="standard-container">
            <ExpertTips
              tips={locationGEOData["General"].expertTips}
              location="your next escape"
              className="text-white"
            />
            <div className="mt-20 border-t border-white/10 pt-20">
              <FAQSection
                faqs={locationGEOData["General"].faqs}
                location="Hot Tub Finder"
                className="text-white"
              />
            </div>
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
