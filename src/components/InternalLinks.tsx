import Link from "next/link";
import { getValidLocationTagPairs } from "@/data/hotels";
import { Search, MapPin } from "lucide-react";
import { slugify } from "@/lib/utils";

interface InternalLinksProps {
    currentQ: string;
    currentLocation: string;
}

export default async function InternalLinks({ currentQ, currentLocation }: InternalLinksProps) {
    const validPairs = await getValidLocationTagPairs();

    // Get valid tags for the current location (that are not the current tag)
    const validTagsForLocation = Array.from(
        new Set(
            validPairs
                .filter(p => p.location === currentLocation && p.tag !== currentQ)
                .map(p => p.tag)
        )
    ).slice(0, 4);

    // Get valid locations for the current tag (that are not the current location)
    const validLocationsForTag = Array.from(
        new Set(
            validPairs
                .filter(p => p.tag === currentQ && p.location !== currentLocation)
                .map(p => p.location)
        )
    ).slice(0, 4);

    if (validTagsForLocation.length === 0 && validLocationsForTag.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t border-gray-100 pt-16">
            {/* Category Cross-Links */}
            {validTagsForLocation.length > 0 && (
                <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Search className="h-5 w-5 text-blue-600" />
                        More Romantic Options in {currentLocation}
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {validTagsForLocation.map((tag) => (
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
            )}

            {/* Location Cross-Links */}
            {validLocationsForTag.length > 0 && (
                <section>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-500" />
                        {currentQ} in Other Cities
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                        {validLocationsForTag.map((loc) => (
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
            )}
        </div>
    );
}
