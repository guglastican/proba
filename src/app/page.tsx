import banner from "@/assets/restaurant-banner.jpg";
import Header from "@/components/Header";
import Image from "next/image";
import { Metadata } from "next";

// Add the metadata for Google Search Console verification
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3002'),
  title: "Best Hotels with Hot Tubs | Luxury Accommodations",
  description: "Discover top-rated hotels with private hot tubs. Book luxury accommodations with verified reviews and best price guarantee.",
  keywords: ["hotels with hot tubs", "luxury hotels", "private jacuzzi rooms"],
  openGraph: {
    type: "website",
    url: "/",
    title: "Best Hotels with Hot Tubs | Luxury Accommodations",
    description: "Discover top-rated hotels with private hot tubs. Book luxury accommodations with verified reviews and best price guarantee.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Luxury Hotel Collection",
    }]
  },
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
              alt="Luxury hotel room with private hot tub"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="rounded-lg object-cover"
              priority
              placeholder="blur"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-end space-y-2 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
            <h1 className="text-center text-3xl font-bold xl:text-4xl" itemProp="name">
              Find the Best Hotels Near You
            </h1>
            <p className="text-center text-lg" itemProp="description">
              Search for hotels with private hot tubs and luxury amenities
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
