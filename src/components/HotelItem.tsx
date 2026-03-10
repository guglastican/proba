"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Hotel } from "@/data/hotels";
import { MapPin, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sanitizeUrl } from "@/lib/utils";

interface HotelItemProps {
  hotel: Hotel;
  index?: number;
}

export default function HotelItem({ hotel, index = 0 }: HotelItemProps) {
  const isEven = index % 2 === 0;

  return (
    <Card className="overflow-hidden border-0 shadow-none mb-12 flex flex-col md:flex-row gap-8 lg:gap-16 bg-transparent">
      {/* Image Container */}
      <div className={`relative w-full md:w-1/2 h-[350px] md:h-[450px] rounded-3xl overflow-hidden shrink-0 ${!isEven ? 'md:order-2' : ''}`}>
        <Image
          src={sanitizeUrl(hotel.image)}
          alt={`Photo of ${hotel.name}, a romantic luxury hotel in ${hotel.address.split(',')[hotel.address.split(',').length - 2]?.trim() || 'the area'} offering ${hotel.tags[0] || 'great amenities'}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-base font-bold shadow-lg text-gray-900">
          ${hotel.price} <span className="text-sm font-normal text-gray-600">/ night</span>
        </div>
      </div>

      {/* Editor Content Container */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 leading-tight">{hotel.name}</h2>

        {/* Rating & Address */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 text-gray-600">
          <div className="flex items-center">
            <div className="flex mr-2">
              <StarRating rating={hotel.rating} />
            </div>
            <span className="font-medium text-gray-900">{hotel.rating} <span className="text-gray-500 font-normal">({hotel.reviews} reviews)</span></span>
          </div>
          <div className="hidden sm:block text-gray-300">•</div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1 text-red-500" />
            {hotel.address.split(',').slice(-3, -1).join(',').trim() || hotel.address}
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {hotel.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {hotel.tags.slice(0, 5).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white rounded-full px-10 py-6 text-lg tracking-wide font-semibold shadow-md hover:shadow-xl transition-all">
              Check Availability
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={`star-${i}`}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          );
        }
        if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key="half-star"
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          );
        }
        return (
          <Star
            key={`empty-star-${i}`}
            className="h-4 w-4 text-gray-300"
          />
        );
      })}
    </div>
  );
}
