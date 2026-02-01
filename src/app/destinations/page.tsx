import Link from "next/link";
import { locations, getValidLocationTagPairs } from "@/data/hotels";
import { slugify } from "@/lib/utils";
import Header from "@/components/Header";
import { MapPin, Search } from "lucide-react";

export const metadata = {
    title: "All Destinations - HotTubFinder",
    description: "Browse all cities and categories of hotels with hot tubs across our site.",
    alternates: {
        canonical: "https://www.romantic-vacations-destinations.com/destinations",
    },
};

export default async function DestinationsPage() {
    const validPairs = await getValidLocationTagPairs();

    // Group tags by location
    const locationGroups = locations.reduce((acc, loc) => {
        const cityTags = validPairs
            .filter(p => p.location === loc)
            .map(p => p.tag)
            .sort();

        if (cityTags.length > 0) {
            acc[loc] = cityTags;
        }
        return acc;
    }, {} as Record<string, string[]>);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Destinations Directory</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive guide to luxury hotels.
                        Browse by city and specific features to find your perfect stay.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(locationGroups).map(([location, tags]) => (
                        <section key={location} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <MapPin className="text-red-500 h-6 w-6" />
                                {location}
                            </h2>
                            <ul className="space-y-2 flex-grow">
                                {tags.map((tag) => (
                                    <li key={tag}>
                                        <Link
                                            href={`/${slugify(location)}/${slugify(tag)}`}
                                            className="group flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all text-sm font-medium text-gray-700 hover:text-blue-700"
                                        >
                                            <span className="flex items-center gap-2">
                                                <Search className="h-3 w-3 text-gray-400 group-hover:text-blue-500" />
                                                {tag}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
