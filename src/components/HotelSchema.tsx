import { Hotel } from "@/data/hotels";

interface HotelSchemaProps {
    hotels: Hotel[];
    locationName: string;
}

export default function HotelSchema({ hotels, locationName }: HotelSchemaProps) {
    if (!hotels || hotels.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Best Hotels with Hot Tub in ${locationName}`,
        "description": `A curated list of the top-rated hotels featuring private hot tubs and luxury spa amenities in ${locationName}.`,
        "numberOfItems": hotels.length,
        "url": typeof window !== "undefined" ? window.location.href : "",
        "itemListElement": hotels.map((hotel, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Hotel",
                "@id": `https://www.romantic-vacations-destinations.com/hotel/${hotel.id}`,
                "url": hotel.link,
                "name": hotel.name,
                "image": hotel.image,
                "description": hotel.description,
                "priceRange": `$$ - $$$`,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": hotel.address,
                    "addressLocality": locationName.split(",")[0].trim(),
                    "addressRegion": locationName.split(",")[1]?.trim() || "",
                    "addressCountry": "US"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": hotel.rating,
                    "reviewCount": hotel.reviews,
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "offers": {
                    "@type": "Offer",
                    "price": hotel.price.replace(/[^0-9.]/g, ""),
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": hotel.link
                }
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
