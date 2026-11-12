import { Hotel, hotels, locations } from "./hotels";

/* ------------------------------------------------------------------ */
/*  Directory data for the "Hot Tub Finder" browse experience          */
/*  (mirrors the concept of hottubhideaways.com: browse by stay type   */
/*  and by destination, plus trust/editorial content)                  */
/* ------------------------------------------------------------------ */

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  match: (hotel: Hotel) => boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
}

/* ----------------------------- helpers ----------------------------- */

function parsePrice(price: string): number {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 9999;
}

function hasAnyText(text: string, pattern: RegExp): boolean {
  return pattern.test(text);
}

function tagsInclude(hotel: Hotel, pattern: RegExp): boolean {
  return hotel.tags.some((tag) => pattern.test(tag));
}

/* ---------------------------- categories --------------------------- */

export const categories: Category[] = [
  {
    slug: "in-room-hot-tubs",
    name: "In-Room Hot Tubs",
    tagline: "Private jacuzzi & whirlpool suites",
    description:
      "Skip the shared spa queue and soak in your own private whirlpool. These stays put a jetted tub right in your room.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/32/16/38/king-jacuzzi-guestroom.jpg?w=900&h=500&s=1",
    match: (hotel) =>
      hasAnyText(hotel.description, /jacuzzi|whirlpool|in-room|in room|soaking tub|jetted tub/i) ||
      tagsInclude(hotel, /jacuzzi|in room|in-room/i),
  },
  {
    slug: "spa-retreats",
    name: "Spa & Wellness",
    tagline: "Resorts with full-service spas",
    description:
      "Steam rooms, saunas, and full-service spas paired with hot tubs for a proper wellness escape.",
    image:
      "https://images.trvl-media.com/lodging/1000000/10000/500/465/07b98e73.jpg",
    match: (hotel) =>
      tagsInclude(hotel, /spa/i) ||
      hasAnyText(hotel.description, /spa|wellness|sauna|steam room/i),
  },
  {
    slug: "romantic-getaways",
    name: "Romantic Getaways",
    tagline: "Couples escapes & honeymoon stays",
    description:
      "Fireplaces, skyline views, and candle-lit tubs — the most romantic hot tub stays for two.",
    image:
      "https://images.trvl-media.com/lodging/4000000/3290000/3281000/3280948/54fa9f25.jpg",
    match: (hotel) =>
      hasAnyText(hotel.description, /romantic|couples|honeymoon|romance/i) ||
      hasAnyText(hotel.vibe || "", /romanc/i),
  },
  {
    slug: "luxury-five-star",
    name: "Luxury 5-Star",
    tagline: "Prestige suites & world-class service",
    description:
      "Top-rated five-star properties with the most indulgent hot tubs, spas, and skyline views.",
    image:
      "https://images.trvl-media.com/lodging/3000000/2720000/2717600/2717582/e3e2799f.jpg",
    match: (hotel) => hotel.rating >= 4.5,
  },
  {
    slug: "budget-friendly",
    name: "Budget-Friendly",
    tagline: "Hot tub stays under $300",
    description:
      "Relax in a hot tub without breaking the bank. Well-reviewed stays at a fraction of the price.",
    image:
      "https://images.trvl-media.com/lodging/43000000/42580000/42574400/42574390/a038fcc5.jpg",
    match: (hotel) => parsePrice(hotel.price) < 300,
  },
  {
    slug: "pet-friendly",
    name: "Pet-Friendly",
    tagline: "Bring your best friend along",
    description:
      "Hotels that welcome pets, so nobody gets left behind on your hot tub getaway.",
    image:
      "https://images.trvl-media.com/lodging/3000000/2240000/2237200/2237168/a946703d.jpg",
    match: (hotel) =>
      tagsInclude(hotel, /pet friendly/i) ||
      hasAnyText(hotel.description, /pet-friendly|pet friendly/i),
  },
  {
    slug: "rooftop-views",
    name: "Rooftop & City Views",
    tagline: "Hot tubs above the skyline",
    description:
      "Panoramic rooftop pools and Jacuzzis overlooking glittering city skylines.",
    image:
      "https://images.trvl-media.com/lodging/19000000/18620000/18614200/18614145/w5117h2880x0y0-157a40d3.jpg",
    match: (hotel) =>
      hasAnyText(hotel.description, /rooftop|skyline|city views|views of|panoramic/i),
  },
  {
    slug: "waterfront-coastal",
    name: "Waterfront & Coastal",
    tagline: "Ocean, bay & harbor escapes",
    description:
      "Wake up to water views with hot tubs steps from the beach, bay, or harbor.",
    image:
      "https://images.trvl-media.com/lodging/2000000/1120000/1113200/1113163/c2040b63.jpg",
    match: (hotel) =>
      hasAnyText(hotel.description, /waterfront|ocean|beach|bay|sound|harbor|coast/i),
  },
];

/* --------------------------- selectors ---------------------------- */

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getHotelsForCategory(slug: string): Hotel[] {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  return hotels.filter(category.match).sort((a, b) => b.rating - a.rating);
}

function locationKey(location: string): string {
  return location.split(",")[0].trim().toLowerCase();
}

export function getHotelsForLocation(location: string): Hotel[] {
  const key = locationKey(location);
  return hotels
    .filter((hotel) => hotel.address.toLowerCase().includes(key))
    .sort((a, b) => b.rating - a.rating);
}

export function getLocationBySlug(slug: string): string | undefined {
  return locations.find((location) => {
    return (
      location
        .toLowerCase()
        .split(",")[0]
        .trim()
        .replace(/\s+/g, "-") === slug
    );
  });
}

export function getLocationImage(location: string): string {
  const hotel = hotels.find(
    (hotel) => hotel.address.toLowerCase().includes(locationKey(location)) && hotel.image
  );
  return hotel?.image || "/hotels-with-hot-tub.jpg";
}

export function getLocationCount(location: string): number {
  return getHotelsForLocation(location).length;
}

/* -------------------------- testimonials -------------------------- */

export const testimonials: Testimonial[] = [
  {
    quote:
      "Found the perfect in-room Jacuzzi suite in minutes. The photos matched the room exactly and booking was seamless.",
    name: "Sarah & James",
    location: "San Francisco, CA",
    rating: 5,
  },
  {
    quote:
      "We planned our whole anniversary trip around the spa hotel list. The rooftop hot tub with skyline views was unforgettable.",
    name: "Danielle M.",
    location: "Chicago, IL",
    rating: 5,
  },
  {
    quote:
      "As a pet owner it's usually a struggle, but the pet-friendly filter found us a gem. Our pup was as welcome as we were.",
    name: "Marcus T.",
    location: "Miami, FL",
    rating: 5,
  },
  {
    quote:
      "Clean, well-researched recommendations. We booked a budget hot tub stay that felt way more expensive than it was.",
    name: "Priya K.",
    location: "Las Vegas, NV",
    rating: 4,
  },
];

/* ---------------------------- blog data --------------------------- */

export const blogPosts: BlogPost[] = [
  {
    title: "The 8 Best Romantic Hot Tub Getaways in the U.S.",
    excerpt:
      "From wine-country inns to oceanfront resorts, these are the most romantic stays with private tubs for two.",
    image:
      "https://images.trvl-media.com/lodging/4000000/3290000/3281000/3280948/54fa9f25.jpg",
    href: "/categories/romantic-getaways",
    category: "Romantic",
  },
  {
    title: "In-Room Jacuzzi vs. Spa Hot Tub: How to Choose",
    excerpt:
      "Private whirlpool or shared spa? We break down the trade-offs so you book the right soak for your trip.",
    image:
      "https://images.trvl-media.com/lodging/1000000/30000/21500/21431/4cd89708.jpg",
    href: "/categories/in-room-hot-tubs",
    category: "Tips",
  },
  {
    title: "The Best Waterfront Hot Tub Stays for a Coastal Escape",
    excerpt:
      "Bay views, beachfront pools, and harbor-side hot tubs — our pick of the best coastal stays.",
    image:
      "https://images.trvl-media.com/lodging/2000000/1120000/1113200/1113163/c2040b63.jpg",
    href: "/categories/waterfront-coastal",
    category: "Coastal",
  },
];
