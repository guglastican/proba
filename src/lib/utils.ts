
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a utility function to sanitize URLs
export function sanitizeUrl(url: string | undefined): string {
  if (!url) return '';

  // Remove any whitespace, tabs, and newlines
  const cleanUrl = url.replace(/\s/g, '');

  // Ensure the URL has a protocol
  if (!cleanUrl.match(/^https?:\/\//)) {
    return `https://${cleanUrl}`;
  }

  return cleanUrl;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

export function getSeoPhrasing(q: string, location: string, count: number) {
  const lowerQ = q.toLowerCase();

  if (lowerQ === 'spa hotel' || lowerQ === 'spa hotels') {
    return {
      title: `Top ${count} Spa Hotels in ${location} (2025)`,
      h1: `Top ${count} Spa Hotels in ${location}`,
      description: `Discover the ${count} best spa hotels in ${location}. Compare prices, luxury wellness amenities, and read expert reviews to book your perfect retreat.`,
      intro: `Compare the highest-rated spa resorts and wellness retreats to find your perfect stay in ${location}.`
    };
  }

  if (lowerQ.includes('hotels with') || lowerQ.includes('hotel with')) {
    const amenity = q.replace(/Hotels With /i, '').replace(/Hotel With /i, '').trim();
    return {
      title: `Top ${count} Hotels with ${amenity} in ${location} (2025)`,
      h1: `Top ${count} Hotels with ${amenity} in ${location}`,
      description: `Discover the ${count} best hotels with ${amenity.toLowerCase()} in ${location}. Compare prices, amenities, and read expert reviews to book your perfect stay.`,
      intro: `Compare the highest-rated accommodations featuring ${amenity.toLowerCase()} to find your perfect stay in ${location}.`
    };
  }

  if (lowerQ === 'luxury romantic suites') {
    return {
      title: `Top ${count} Luxury Romantic Suites in ${location} (2025)`,
      h1: `Top ${count} Luxury Romantic Suites in ${location}`,
      description: `Discover the ${count} best luxury romantic suites in ${location}. Compare prices, amenities, and read expert reviews to book your perfect stay.`,
      intro: `Compare the highest-rated luxury romantic suites to find your perfect stay in ${location}.`
    };
  }

  // Fallback for amenities like "Michelin Star Dining", "Indoor Pool", "Hot tub"
  return {
    title: `Top ${count} Hotels with ${q} in ${location} (2025)`,
    h1: `Top ${count} Hotels with ${q} in ${location}`,
    description: `Discover the ${count} best hotels offering ${q} in ${location}. Compare prices, amenities, and read expert reviews to book your perfect stay.`,
    intro: `Compare the highest-rated accommodations featuring ${q.toLowerCase()} to find your perfect stay in ${location}.`
  };
}
