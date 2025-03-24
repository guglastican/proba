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

interface HotelItemProps {
  hotel: Hotel;
}

export default function HotelItem({ hotel }: HotelItemProps) {
  return (
    <Card 
      className="overflow-hidden border border-gray-200 rounded-lg shadow-sm"
      itemScope 
      itemType="https://schema.org/Hotel"
    >
      <div className="relative">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={1200}
          height={600}
          className="h-64 w-full object-cover"
          itemProp="image"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          ${hotel.price}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-1" itemProp="name">{hotel.name}</h3>
        
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate" itemProp="address">{hotel.address}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <StarRating rating={hotel.rating} />
            <meta itemProp="ratingValue" content={hotel.rating.toString()} />
            <meta itemProp="reviewCount" content={hotel.reviews.toString()} />
          </div>
          <span className="text-sm text-gray-500">
            {hotel.rating} ({hotel.reviews} reviews)
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-4" itemProp="description">
          {hotel.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.tags.slice(0, 7).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 7).map((amenity) => (
            <Badge 
              key={amenity} 
              variant="secondary"
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0"
            >
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0">
        <Link 
          href={hotel.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full"
        >
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            View Details
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
