import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
    location: string;
    q: string;
}

export default function Breadcrumbs({ location, q }: BreadcrumbsProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.romantic-vacations-destinations.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": location,
                "item": `https://www.romantic-vacations-destinations.com/search?location=${encodeURIComponent(location)}&q=Hotels+With+Hot+Tub+in+Room`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": q,
                "item": `https://www.romantic-vacations-destinations.com/search?location=${encodeURIComponent(location)}&q=${encodeURIComponent(q)}`
            }
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <Link
                        href={`/search?location=${encodeURIComponent(location)}&q=Hotels+With+Hot+Tub+in+Room`}
                        className="hover:text-primary transition-colors whitespace-nowrap"
                    >
                        {location}
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span className="font-medium text-gray-900 truncate max-w-[150px] md:max-w-none" aria-current="page">
                        {q}
                    </span>
                </li>
            </ol>
        </nav>
    );
}
