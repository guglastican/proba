import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { locations } from "@/data/hotels";
import { getLocationCount, getLocationImage } from "@/data/directory";
import { slugify } from "@/lib/utils";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "All Destinations - Hot Tub Finder",
  description:
    "Browse every destination with hotels that feature hot tubs — compare stays by city and find your perfect soak.",
  alternates: {
    canonical: "https://www.romantic-vacations-destinations.com/destinations",
  },
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Destinations directory</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore hotels with hot tubs across every destination we cover. Pick a city to see its
            top-rated stays.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => {
            const count = getLocationCount(location);
            const image = getLocationImage(location);
            const href = `/destinations/${slugify(location.split(",")[0])}`;

            return (
              <Link
                key={location}
                href={href}
                className="group relative h-52 overflow-hidden rounded-2xl bg-gray-900 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Hotels with hot tubs in ${location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                    <MapPin className="size-5 shrink-0 text-emerald-300" />
                    {location}
                  </h2>
                  <p className="text-sm text-white/80">{count} hot tub stays</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
