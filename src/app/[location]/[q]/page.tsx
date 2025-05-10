"use client";

import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels, Hotel } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageProps {
  params: { location: string; q: string };
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const allTags = await getAllTags({
    // If you have very many pages, you can only render a subset at compile-time. The rest will be rendered & cached at first access.
    // limit: 10
  });

  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location,
        q: tag,
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

  return {
    title: `Top ${results.length} ${qDecoded} in ${locationDecoded}`,
    description: `Find the best ${qDecoded} in ${locationDecoded}`,
  };
}

export default function Page({ params }: PageProps) {
  const { q, location } = params;
  const searchParams = useSearchParams();

  useEffect(() => {
    const removeUtmParams = (url: string) => {
      const urlObj = new URL(url);
      urlObj.searchParams.delete('utm_source');
      urlObj.searchParams.delete('utm_medium');
      urlObj.searchParams.delete('utm_campaign');
      urlObj.searchParams.delete('utm_term');
      urlObj.searchParams.delete('utm_content');
      return urlObj.toString();
    };

    const baseUrl = `${location}/${q}`;
    const canonicalUrl = removeUtmParams(`${baseUrl}?${searchParams.toString()}`);
    console.log("Canonical URL:", canonicalUrl);
  }, [q, location, searchParams]);

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);
  const [results, setResults] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await getHotels(qDecoded, locationDecoded);
      setResults(hotels || []);
    };
    fetchData();
  }, [qDecoded, locationDecoded]);

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} in {locationDecoded}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
