interface HotelData {
  [key: string]: {
    overview: string;
    attractions: { title: string; text: string }[];
    tips: string[];
    neighborhoods: { name: string; description: string }[];
    conclusion: string;
  };
}

const hotels: HotelData = {
  London: {
    overview: "Discover the best hotels with hot tubs in London, blending luxury, comfort, and relaxation.",
    attractions: [
      {
        title: "London Eye",
        text: "Below, we've categorized the best hotels based on luxury, privacy, and unique features like rooftop hot tubs. Each entry includes location, price range, and standout amenities to help you choose the perfect stay."
      }
    ],
    tips: [
      "Private vs. Shared: Confirm if the hot tub is in-room or part of a communal spa. Private hot tubs offer exclusivity, while spa facilities often include extras like saunas.",
      "Availability: Book spa hot tubs in advance, especially during peak seasons like winter or holidays.",
      "Guest Reviews: Check feedback for cleanliness and maintenance of hot tubs.",
      "Hidden Costs: Ask if spa access or hot tub use incurs extra fees.",
      "Packages: Look for romantic or spa packages that bundle hot tub access with other perks."
    ],
    neighborhoods: [
      {
        name: "Central London",
        description: "Proximity to landmarks like Big Ben"
      },
      {
        name: "Kensington",
        description: "Upscale and near cultural hubs"
      },
      {
        name: "South Bank",
        description: "Scenic views and modern amenities"
      },
      {
        name: "Covent Garden",
        description: "Lively and central for nightlife"
      },
      {
        name: "King's Cross",
        description: "Trendy and well-connected"
      }
    ],
    conclusion: "Hotels with hot tubs in London elevate your visit with a perfect mix of relaxation and luxury. From the sky-high suites of The Shangri-La to the intimate jacuzzis at The Exhibitionist, there's an option for every traveler. Whether you crave a rooftop hot tub with panoramic views or a private jacuzzi for a romantic escape, these hotels deliver. Book your stay now and treat yourself to a soothing soak in the heart of London!"
  }
};

export default hotels;
