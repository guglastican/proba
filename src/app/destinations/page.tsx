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
        <div className="min-h-screen bg-white">
            <Header />
            <main className="standard-container py-20">
                <header className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                        Our Curated <br />
                        <span className="text-transparent bg-clip-text premium-gradient">Destinations</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        A comprehensive directory of the finest hotel experiences. Discover secluded escapes,
                        urban sanctuaries, and romantic suites tailored to your location.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {Object.entries(locationGroups).map(([location, tags]) => (
                        <section key={location} className="flex flex-col group">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:premium-gradient group-hover:text-white transition-all shadow-sm">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                                    {location}
                                </h2>
                            </div>
                            <ul className="space-y-3">
                                {tags.map((tag) => (
                                    <li key={tag}>
                                        <Link
                                            href={`/${slugify(location)}/${slugify(tag)}`}
                                            className="group/link flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-white border border-gray-100 group-hover/link:border-primary/20 transition-all">
                                                    <Search className="h-3 w-3 text-primary" />
                                                </div>
                                                <span className="text-sm font-bold text-gray-700 group-hover/link:text-primary transition-colors">
                                                    {tag}
                                                </span>
                                            </div>
                                            <div className="opacity-0 group-hover/link:opacity-100 translate-x-4 group-hover/link:translate-x-0 transition-all text-primary font-bold text-xs uppercase tracking-widest">
                                                GO
                                            </div>
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
