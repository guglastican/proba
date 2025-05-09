import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";
import Image from "next/image";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const allTags = await getAllTags({});
  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location: location.toLowerCase(),
        q: tag.toLowerCase(),
      })),
    )
    .flat();
}

const getHotels = cache(searchHotels);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { q, location } = await params;
  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);
  const results = await getHotels(qDecoded, locationDecoded);

  // For canonical URL, use lowercase versions before encoding
  const canonicalLocationDecoded = locationDecoded.toLowerCase();
  const canonicalQDecoded = qDecoded.toLowerCase();

  const formattedCanonicalLocation = encodeURIComponent(canonicalLocationDecoded);
  const formattedCanonicalQ = encodeURIComponent(canonicalQDecoded);

  // Generate canonical URL with correct encoding
  const canonicalUrl = `https://www.romantic-vacations-destinations.com/${formattedCanonicalLocation}/${formattedCanonicalQ}`;

  return {
    title: `Best ${results.length} ${qDecoded} near ${locationDecoded}`,
    description: `Find the best hotels with ${qDecoded} near ${locationDecoded}. Book your stay today and enjoy the ultimate getaway experience.`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Function to generate a related link based on location
function generateRelatedLinks(location: string) {
  // Choose a popular tag for the related link
  const popularTag = "Spa";
  
  // Create the URL-friendly versions of the location and tag
  // Using encodeURIComponent to ensure consistency with canonical URLs
  const formattedLocation = encodeURIComponent(location); // location is already lowercased from params
  const formattedTag = encodeURIComponent(popularTag.toLowerCase()); // Ensure popularTag is lowercased
  
  // Return the JSX for the link with the #overview anchor
  return (
    <a
      href={`/${formattedLocation}/${formattedTag}#overview`}
      className="text-blue-600 hover:underline"
    >
      {popularTag}
    </a>
  );
}

export default async function Page({ params }: PageProps) {
  const { q, location } = await params;
  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);
  const results = await getHotels(qDecoded, locationDecoded);

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} in {locationDecoded}
        </h1>
        <p id="overview" className="text-center text-lg text-gray-600 mt-4">
        Experience the best of {locationDecoded} by staying at one of our top {results.length} hotels featuring private balconies. Discover other amazing options like {generateRelatedLinks(locationDecoded)}. Enjoy breathtaking ocean views, vibrant cityscapes, or serene retreats, all while indulging in the ultimate comfort and scenic beauty. Book your dream getaway today and discover why these hotels are the perfect choice for travelers seeking unforgettable experiences.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center md:flex-row gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/Emma-Caldwell.jpg"
              alt="Emma Caldwell"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">About the Author</h2>
            <p className="text-gray-600">
              Emma Caldwell is a travel writer specializing in romantic getaways and luxury hotels. 
              With over 10 years of experience, she helps couples find the perfect destinations 
              for their dream vacations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
