"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hotel } from "@/data/hotels";
import { Clock, MapPin, Star, StarHalf, Building, Type } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

interface HotelItemProps {
  hotel: Hotel;
}

export default function HotelItem({ hotel }: HotelItemProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <Image
        src={hotel.image}
        alt={hotel.name}
        width={1200}
        height={600}
        className="h-64 w-full object-cover"
      />
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{hotel.name}</CardTitle>
            <CardDescription>
              {hotel.name} • {hotel.price}
            </CardDescription>
          </div>
          <div className="flex items-center">
            <div className="mr-2 flex">
              <StarRating rating={hotel.rating} />
            </div>
            <span className="text-sm text-muted-foreground">
              ({hotel.reviews})
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="text-sm">{hotel.address}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
           <Type className="mr-2 h-4 w-4" /> {/* Text icon */}
           <span className="text-sm">{hotel.description}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span className="text-sm">{hotel.hours}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {hotel.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4">
            <a href={hotel.link} target="_blank" rel="noopener noreferrer">
              <Button className="w-full" variant="default">
                <Building />
                Book Hotel
              </Button>
            </a>
          </div>
        </div>
        
      </CardContent>
      
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
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          key="half-star"
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      )}
    </div>
  );
}
