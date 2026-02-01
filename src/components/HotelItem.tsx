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
}

export default function HotelItem({ hotel }: HotelItemProps) {
  return (
    <Card
      className="group overflow-hidden border-0 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={sanitizeUrl(hotel.image)}
          alt={hotel.name}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          {hotel.rating >= 4.5 && (
            <Badge className="premium-gradient border-0 text-white shadow-lg px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              Premium Choice
            </Badge>
          )}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-lg font-black shadow-xl text-primary border border-white/20">
          ${hotel.price}<span className="text-xs font-normal text-gray-500 ml-1">/night</span>
        </div>
      </div>

      <CardContent className="p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4 text-primary font-bold text-xs uppercase tracking-[0.2em]">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{hotel.address.split(',')[1] || hotel.address}</span>
        </div>

        <h2 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-primary transition-colors leading-tight">{hotel.name}</h2>

        <div className="flex items-center mb-6 gap-3">
          <div className="flex bg-yellow-400/10 px-2 py-1 rounded-lg">
            <StarRating rating={hotel.rating} />
          </div>
          <span className="text-sm font-bold text-gray-500">
            {hotel.rating} <span className="font-normal text-gray-400">({hotel.reviews} reviews)</span>
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-8 line-clamp-3 leading-relaxed italic">
          "{hotel.description}"
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {hotel.tags.slice(0, 5).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-50 text-gray-500 hover:bg-primary hover:text-white transition-colors border-0 rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-8 pb-8 pt-0">
        <Link
          href={hotel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            className="w-full h-14 premium-gradient hover:opacity-90 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg group-hover:shadow-primary/20 transition-all"
          >
            Check Availability
          </Button>
        </Link>
      </CardFooter>
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
