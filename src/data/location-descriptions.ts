export interface LocationDescription {
  overview: string;
  attractions: { title: string, description: string }[];
  dining: { title: string, description: string }[];
  hotTubHotels: { title: string, description: string }[];
  nearbyDestinations: string;
}

export const locationDescriptions: { [key: string]: LocationDescription } = {
  "San Francisco": {
    overview: "Discover San Francisco: A Premier Destination for Relaxation and Adventure",
    attractions: [
      {
        title: "Golden Gate Bridge",
        description: "An iconic landmark offering breathtaking views of the bay. Walking or biking across provides a memorable experience with stunning panoramic vistas."
      },
      {
        title: "Fisherman's Wharf",
        description: "A vibrant waterfront area perfect for enjoying fresh seafood, watching sea lions at Pier 39, and exploring unique souvenir shops."
      },
      {
        title: "Alcatraz Island",
        description: "A historic site offering fascinating guided tours of the legendary former prison, providing deep insights into San Francisco's rich history."
      }
    ],
    dining: [
      {
        title: "Gary Danko",
        description: "An award-winning fine-dining restaurant perfect for a romantic evening, offering exquisite cuisine and an unforgettable culinary experience."
      },
      {
        title: "Tadich Grill",
        description: "One of the oldest seafood restaurants in the city, serving incredible flavors and traditional San Francisco dining."
      },
      {
        title: "Bourbon & Branch",
        description: "A hidden speakeasy with expertly crafted cocktails, ideal for those seeking a unique and intimate night out."
      }
    ],
    hotTubHotels: [
      {
        title: "Fairmont San Francisco",
        description: "A romantic escape featuring elegant suites with private hot tubs and stunning city views."
      },
      {
        title: "Travelodge by Wyndham",
        description: "A budget-friendly option offering comfortable accommodations with in-room hot tub options."
      },
      {
        title: "The Donatello",
        description: "A family-friendly choice with spacious rooms, a relaxing hot tub, and a prime downtown location."
      }
    ],
    nearbyDestinations: "Explore beyond San Francisco with nearby hot tub destinations like Oakland and San Jose, each offering unique experiences and luxurious accommodations."
  },
  "San Francisco, CA": {
    overview: "Discover San Francisco: A Premier Destination for Relaxation and Adventure",
    attractions: [
      {
        title: "Golden Gate Bridge",
        description: "An iconic landmark offering breathtaking views of the bay. Walking or biking across provides a memorable experience with stunning panoramic vistas."
      },
      {
        title: "Fisherman's Wharf",
        description: "A vibrant waterfront area perfect for enjoying fresh seafood, watching sea lions at Pier 39, and exploring unique souvenir shops."
      },
      {
        title: "Alcatraz Island",
        description: "A historic site offering fascinating guided tours of the legendary former prison, providing deep insights into San Francisco's rich history."
      }
    ],
    dining: [
      {
        title: "Gary Danko",
        description: "An award-winning fine-dining restaurant perfect for a romantic evening, offering exquisite cuisine and an unforgettable culinary experience."
      },
      {
        title: "Tadich Grill",
        description: "One of the oldest seafood restaurants in the city, serving incredible flavors and traditional San Francisco dining."
      },
      {
        title: "Bourbon & Branch",
        description: "A hidden speakeasy with expertly crafted cocktails, ideal for those seeking a unique and intimate night out."
      }
    ],
    hotTubHotels: [
      {
        title: "Fairmont San Francisco",
        description: "A romantic escape featuring elegant suites with private hot tubs and stunning city views."
      },
      {
        title: "Travelodge by Wyndham",
        description: "A budget-friendly option offering comfortable accommodations with in-room hot tub options."
      },
      {
        title: "The Donatello",
        description: "A family-friendly choice with spacious rooms, a relaxing hot tub, and a prime downtown location."
      }
    ],
    nearbyDestinations: "Explore beyond San Francisco with nearby hot tub destinations like Oakland and San Jose, each offering unique experiences and luxurious accommodations."
  },
  "Chicago": {
    overview: "Discover Chicago: A Premier Destination for Relaxation and Adventure",
    attractions: [
      {
        title: "Millennium Park",
        description: "A must-see urban oasis. Take a selfie at Cloud Gate (The Bean) and enjoy the beautiful green space that defines Chicago's modern landscape."
      },
      {
        title: "Navy Pier",
        description: "A lively waterfront destination perfect for entertainment. Ride the Ferris wheel, catch live performances, and explore diverse waterfront dining options."
      },
      {
        title: "Willis Tower Skydeck",
        description: "Offers breathtaking city views from 1,353 feet up. Step onto The Ledge for a thrilling, glass-floored perspective of Chicago's stunning skyline."
      }
    ],
    dining: [
      {
        title: "Alinea",
        description: "A world-renowned dining experience that pushes the boundaries of culinary art, perfect for a special and unforgettable night out."
      },
      {
        title: "Lou Malnati's",
        description: "Famous for its legendary deep-dish pizza, this restaurant is a must-visit for any food lover exploring Chicago's culinary scene."
      },
      {
        title: "The Aviary",
        description: "A high-end cocktail bar offering creative and innovative drinks in a sleek, modern setting that epitomizes Chicago's sophisticated nightlife."
      }
    ],
    hotTubHotels: [
      {
        title: "The Peninsula Chicago",
        description: "A luxurious romantic escape featuring elegant suites with private hot tubs and breathtaking skyline views."
      },
      {
        title: "Comfort Suites Michigan Avenue",
        description: "A budget-friendly option offering comfortable accommodations with convenient in-room hot tub options."
      },
      {
        title: "The Langham",
        description: "A family-friendly choice with spacious rooms, a relaxing hot tub, and a prime location near top Chicago attractions."
      }
    ],
    nearbyDestinations: "Explore beyond Chicago with nearby hot tub destinations like Evanston and Oak Brook, each offering unique experiences and luxurious accommodations."
  },
  "Chicago, IL": {
    overview: "Discover Chicago: A Premier Destination for Relaxation and Adventure",
    attractions: [
      {
        title: "Millennium Park",
        description: "A must-see urban oasis. Take a selfie at Cloud Gate (The Bean) and enjoy the beautiful green space that defines Chicago's modern landscape."
      },
      {
        title: "Navy Pier",
        description: "A lively waterfront destination perfect for entertainment. Ride the Ferris wheel, catch live performances, and explore diverse waterfront dining options."
      },
      {
        title: "Willis Tower Skydeck",
        description: "Offers breathtaking city views from 1,353 feet up. Step onto The Ledge for a thrilling, glass-floored perspective of Chicago's stunning skyline."
      }
    ],
    dining: [
      {
        title: "Alinea",
        description: "A world-renowned dining experience that pushes the boundaries of culinary art, perfect for a special and unforgettable night out."
      },
      {
        title: "Lou Malnati's",
        description: "Famous for its legendary deep-dish pizza, this restaurant is a must-visit for any food lover exploring Chicago's culinary scene."
      },
      {
        title: "The Aviary",
        description: "A high-end cocktail bar offering creative and innovative drinks in a sleek, modern setting that epitomizes Chicago's sophisticated nightlife."
      }
    ],
    hotTubHotels: [
      {
        title: "The Peninsula Chicago",
        description: "A luxurious romantic escape featuring elegant suites with private hot tubs and breathtaking skyline views."
      },
      {
        title: "Comfort Suites Michigan Avenue",
        description: "A budget-friendly option offering comfortable accommodations with convenient in-room hot tub options."
      },
      {
        title: "The Langham",
        description: "A family-friendly choice with spacious rooms, a relaxing hot tub, and a prime location near top Chicago attractions."
      }
    ],
    nearbyDestinations: "Explore beyond Chicago with nearby hot tub destinations like Evanston and Oak Brook, each offering unique experiences and luxurious accommodations."
  }
};
