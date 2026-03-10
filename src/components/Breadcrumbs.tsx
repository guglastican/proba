import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { slugify } from "@/lib/utils";

interface BreadcrumbsProps {
    location: string;
    q: string;
    variant?: "default" | "dark";
}

export default function Breadcrumbs({ location, q, variant = "default" }: BreadcrumbsProps) {
    const baseUrl = "https://www.romantic-vacations-destinations.com";
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": location,
                "item": `${baseUrl}/${slugify(location)}/${slugify("Hotels With Hot Tub in Room")}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": q,
                "item": `${baseUrl}/${slugify(location)}/${slugify(q)}`
            }
        ]
    };

    const textClass = variant === "dark" ? "text-gray-300" : "text-gray-500";
    const hoverClass = variant === "dark" ? "hover:text-white" : "hover:text-primary";
    const activeClass = variant === "dark" ? "text-white" : "text-gray-900";

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ol className={`flex items-center space-x-2 text-sm ${textClass}`}>
                <li className="flex items-center">
                    <Link href="/" className={`${hoverClass} flex items-center gap-1 transition-colors`}>
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 shrink-0 opacity-70" />
                    <Link
                        href={`/${slugify(location)}/${slugify("Hotels With Hot Tub in Room")}`}
                        className={`${hoverClass} transition-colors whitespace-nowrap`}
                    >
                        {location}
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 shrink-0 opacity-70" />
                    <span className={`font-medium ${activeClass} truncate max-w-[150px] md:max-w-none`} aria-current="page">
                        {q}
                    </span>
                </li>
            </ol>
        </nav>
    );
}
