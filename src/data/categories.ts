export interface LocationCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug: string;
  country: string;
}

export const locationCategories: LocationCategory[] = [
  // United States
  {
    id: "san-francisco",
    name: "San Francisco",
    icon: "🌉",
    description: "Discover luxury hotels with hot tubs in the City by the Bay",
    slug: "san-francisco",
    country: "United States"
  },
  {
    id: "chicago",
    name: "Chicago",
    icon: "🏙️",
    description: "Experience the Windy City with premium accommodations featuring hot tubs",
    slug: "chicago",
    country: "United States"
  },
  {
    id: "miami",
    name: "Miami",
    icon: "🏖️",
    description: "Enjoy beachfront luxury and vibrant nightlife with in-room hot tubs",
    slug: "miami",
    country: "United States"
  },
  {
    id: "new-york",
    name: "New York",
    icon: "🗽",
    description: "Find the perfect hot tub suite in the city that never sleeps",
    slug: "new-york",
    country: "United States"
  },
  {
    id: "las-vegas",
    name: "Las Vegas",
    icon: "🎰",
    description: "Luxury casino resorts with premium hot tub suites on the Strip",
    slug: "las-vegas",
    country: "United States"
  },
  
  // Europe
  {
    id: "london",
    name: "London",
    icon: "🇬🇧",
    description: "Discover elegant hotels with hot tubs in the heart of England",
    slug: "london",
    country: "United Kingdom"
  },
  {
    id: "paris",
    name: "Paris",
    icon: "🇫🇷",
    description: "Romantic getaways with private jacuzzis in the City of Light",
    slug: "paris",
    country: "France"
  },
  {
    id: "rome",
    name: "Rome",
    icon: "🇮🇹",
    description: "Historic luxury with modern amenities including private hot tubs",
    slug: "rome",
    country: "Italy"
  },
  
  // Asia
  {
    id: "tokyo",
    name: "Tokyo",
    icon: "🇯🇵",
    description: "Urban luxury with traditional onsen and modern hot tub experiences",
    slug: "tokyo",
    country: "Japan"
  },
  {
    id: "bangkok",
    name: "Bangkok",
    icon: "🇹🇭",
    description: "Exotic retreats with premium spa facilities and private hot tubs",
    slug: "bangkok",
    country: "Thailand"
  },
  {
    id: "dubai",
    name: "Dubai",
    icon: "🇦🇪",
    description: "Opulent desert oasis with world-class hot tub suites and amenities",
    slug: "dubai",
    country: "United Arab Emirates"
  },
  
  // Australia & Oceania
  {
    id: "sydney",
    name: "Sydney",
    icon: "🇦🇺",
    description: "Harbourside luxury with stunning views and premium hot tub suites",
    slug: "sydney",
    country: "Australia"
  }
];

// Group categories by country for easier display
export const categoriesByCountry = locationCategories.reduce((acc, category) => {
  if (!acc[category.country]) {
    acc[category.country] = [];
  }
  acc[category.country].push(category);
  return acc;
}, {} as Record<string, LocationCategory[]>);
