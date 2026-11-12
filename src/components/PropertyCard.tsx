import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { type Hotel } from "@/data/hotels";
import { sanitizeUrl } from "@/lib/utils";

export default function PropertyCard({ hotel }: { hotel: Hotel }) {
  const location = hotel.address.split(",").slice(-3, -1).join(",").trim() || hotel.address;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={sanitizeUrl(hotel.image)}
          alt={hotel.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-gray-900 shadow">
          ${hotel.price}
          <span className="font-normal text-gray-500"> / night</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-center gap-1 text-sm text-gray-500">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-gray-900">{hotel.rating}</span>
          <span className="text-gray-400">({hotel.reviews})</span>
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900">{hotel.name}</h3>
        <p className="mb-4 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="size-4 shrink-0 text-red-500" />
          {location}
        </p>
        <div className="mt-auto">
          <Link
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}
