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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 border-t border-gray-200 pt-16">
            {/* Category Cross-Links */}
            {validTagsForLocation.length > 0 && (
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Search className="h-6 w-6 text-indigo-600" />
                        Explore the Neighbourhood
                    </h3>
                    <p className="text-gray-500 mb-6">Discover more romantic experiences and top-rated stays near {currentLocation}.</p>
                    <ul className="space-y-4">
                        {validTagsForLocation.map((tag) => (
                            <li key={tag}>
                                <Link
                                    href={`/${slugify(currentLocation)}/${slugify(tag)}`}
                                    className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all"
                                >
                                    <div>
                                        <span className="text-gray-900 group-hover:text-indigo-700 font-semibold text-lg block">{tag}</span>
                                        <span className="text-gray-500 text-sm mt-1">in {currentLocation}</span>
                                    </div>
                                    <span className="text-indigo-400 group-hover:text-indigo-600">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Location Cross-Links */}
            {validLocationsForTag.length > 0 && (
                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-rose-500" />
                        Similar Getaways
                    </h3>
                    <p className="text-gray-500 mb-6">Looking for {currentQ} elsewhere? Explore our curated lists for other top destinations.</p>
                    <ul className="space-y-4">
                        {validLocationsForTag.map((loc) => (
                            <li key={loc}>
                                <Link
                                    href={`/${slugify(loc)}/${slugify(currentQ)}`}
                                    className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-all"
                                >
                                    <div>
                                        <span className="text-gray-900 group-hover:text-rose-700 font-semibold text-lg block">{loc}</span>
                                        <span className="text-gray-500 text-sm mt-1">{currentQ}</span>
                                    </div>
                                    <span className="text-rose-400 group-hover:text-rose-600">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}
