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
import { Clock, MapPin, Star, StarHalf, Building } from "lucide-react";
import Image from "next/image";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium shadow-sm">
          ${hotel.price}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1 text-xl">{hotel.name}</CardTitle>
        <CardDescription className="flex items-center space-x-1">
          <MapPin className="h-3.5 w-3.5" />
          <span className="line-clamp-1 text-xs">{hotel.address}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hotel.rating}</span>
            <span className="text-sm text-gray-500">
              ({hotel.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Clock className="h-4 w-4" />
            <span>{hotel.hours}</span>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-gray-600">
          {hotel.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {hotel.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="pt-2">
          <Button
            className="w-full"
            size="sm"
            asChild
          >
            <a href={hotel.link} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}