import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import CategoryCard from "@/components/CategoryCard";
import PropertyCard from "@/components/PropertyCard";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ExpertTips from "@/components/ExpertTips";
import FAQSection from "@/components/FAQSection";
import { locationGEOData } from "@/data/location-geo-data";
import { categories, getLocationCount, getLocationImage } from "@/data/directory";
import { locations, hotels } from "@/data/hotels";
import { slugify } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Hot Tub Finder: Find Your Perfect Hotels With Hot Tub",
  description:
    "Find the perfect hotel with a hot tub across the United States. Browse by stay type — in-room Jacuzzis, spa retreats, romantic getaways, pet-friendly stays and more.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com",
  },
  openGraph: {
    title: "Hot Tub Finder: Find Your Perfect Hot Tub Escape",
    description:
      "Discover the most relaxing hotels with hot tubs across the USA. Browse by stay type and destination.",
    type: "website",
    images: [{ url: "/hotels-with-hot-tub.jpg", width: 1200, height: 630, alt: "Hotel with hot tub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tub Finder: Find Your Perfect Hot Tub Escape",
    description:
      "Discover the most relaxing hotels with hot tubs across the USA.",
    images: ["/hotels-with-hot-tub.jpg"],
  },
};

export default function Home() {
  const featuredStays = [...hotels].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const popularLocations = locations.map((location) => ({
    name: location,
    count: getLocationCount(location),
    image: getLocationImage(location),
    href: `/destinations/${slugify(location.split(",")[0])}`,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[520px] items-center justify-center bg-cover bg-center py-20"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(8,20,20,0.72), rgba(8,20,20,0.55)), url('/hotels-with-hot-tub.jpg')",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Hot Tub Finder
            </p>
            <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Find Your Hot Tub Heaven
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Browse hundreds of hotels with hot tubs across the U.S. — in-room Jacuzzis,
              spa retreats, romantic getaways and more.
            </p>
            <HeroSearch />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
              <span>Popular:</span>
              {[
                { label: "In-Room Hot Tubs", href: "/categories/in-room-hot-tubs" },
                { label: "Spa Retreats", href: "/categories/spa-retreats" },
                { label: "Romantic Getaways", href: "/categories/romantic-getaways" },
                { label: "Pet-Friendly", href: "/categories/pet-friendly" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Browse by stay type</h2>
            <p className="mt-3 text-lg text-gray-600">
              Whatever kind of hot tub escape you&apos;re after, we&apos;ve got a list for it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </section>

        {/* Popular locations */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Popular hot tub destinations
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Discover the best hotels with hot tubs in our most-loved cities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {popularLocations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="group relative h-40 overflow-hidden rounded-xl bg-gray-900 shadow-sm ring-1 ring-black/5"
                >
                  <Image
                    src={location.image}
                    alt={`Hotels with hot tubs in ${location.name}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="flex items-center gap-1 text-sm font-bold text-white">
                      <MapPin className="size-3.5 shrink-0 text-emerald-300" />
                      {location.name}
                    </h3>
                    <p className="text-xs text-white/80">{location.count} stays</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured stays */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured hot tub stays</h2>
            <p className="mt-3 text-lg text-gray-600">
              A hand-picked selection of our top-rated hotels with hot tubs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStays.map((hotel) => (
              <PropertyCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Blog */}
        <div className="bg-gray-50">
          <BlogSection />
        </div>

        {/* Tips & FAQ */}
        <section className="container mx-auto px-4 py-16">
          <ExpertTips tips={locationGEOData["General"].expertTips} location="your next hot tub escape" />
          <FAQSection faqs={locationGEOData["General"].faqs} location="Hot Tub Finder" />
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hot Tub Finder",
            url: "https://www.romantic-vacations-destinations.com/",
            description:
              "Find the perfect hotel with hot tubs across the United States. Browse by stay type and destination.",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.romantic-vacations-destinations.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </div>
  );
}
