import Link from "next/link";
import { locations } from "@/data/hotels";
import { Search, MapPin } from "lucide-react";
import { slugify } from "@/lib/utils";

interface InternalLinksProps {
    currentQ: string;
    currentLocation: string;
}

const POPULAR_TAGS = [
    "Hotels With Hot Tub in Room",
    "Spa Hotel",
    "Hotels With Jacuzzi In Room",
    "Luxury Romantic Suites",
    "Boutique Hotels with Tubs"
];

export default function InternalLinks({ currentQ, currentLocation }: InternalLinksProps) {
    // Related categories in the same location
    const relatedTags = POPULAR_TAGS.filter(tag => tag !== currentQ).slice(0, 4);

    // Same category in other cities
    const relatedLocations = locations.filter(loc => loc !== currentLocation).slice(0, 4);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t border-gray-100 pt-16">
            {/* Category Cross-Links */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    More Romantic Options in {currentLocation}
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                    {relatedTags.map((tag) => (
                        <li key={tag}>
                            <Link
                                href={`/${slugify(currentLocation)}/${slugify(tag)}`}
                                className="block p-4 rounded-lg bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
                            >
                                <span className="text-gray-700 group-hover:text-blue-600 font-medium">{tag}</span>
                                <span className="text-gray-400 text-sm block mt-1">Explore {tag} near {currentLocation}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Location Cross-Links */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red-500" />
                    {currentQ} in Other Cities
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                    {relatedLocations.map((loc) => (
                        <li key={loc}>
                            <Link
                                href={`/${slugify(loc)}/${slugify(currentQ)}`}
                                className="block p-4 rounded-lg bg-white border border-gray-200 hover:border-red-400 hover:shadow-md transition-all group"
                            >
                                <span className="text-gray-700 group-hover:text-red-600 font-medium">{loc}</span>
                                <span className="text-gray-400 text-sm block mt-1">Find {currentQ} in {loc}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
