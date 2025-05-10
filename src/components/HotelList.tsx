"use client";

import HotelItem from "@/components/HotelItem";
import { searchHotels, Hotel } from "@/data/hotels";
import { useEffect, useState } from "react";

interface HotelListProps {
  q: string;
  location: string;
}

export default function HotelList({ q, location }: HotelListProps) {
  const [results, setResults] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await searchHotels(q, location);
      setResults(hotels || []);
    };
    fetchData();
  }, [q, location]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {results.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
