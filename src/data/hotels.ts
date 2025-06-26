

export interface Hotel {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  address: string;
  hours: string;
  reviews: number;
  tags: string[];
  amenities: string[];
  link: string;
  googlePlaceId?: string; // Google Place ID for fetching review
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "1 Hotel San Francisco",
    image: "https://images.trvl-media.com/lodging/2000000/1140000/1138300/1138217/e156f5e7.jpg",
    rating: 4.2,
    price: "931",
    address: "8 Mission St, San Francisco, CA 94105",
    description: "Luxury San Francisco hotel in Downtown San Francisco with a full-service spa. Enjoy modern amenities, eco-friendly design, and stunning waterfront views. Offers couples treatment rooms, hydrotherapy, and premium bedding in sophisticated suites.",
    hours: "24/7",
    reviews: 367,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    amenities: ["Spa", "Hot Tub", "Terrace/Patio"],
    link: "https://expedia.com/affiliates/san-francisco-hotels-1-hotel-san-francisco.nmthOWh",
    googlePlaceId: "ChIJg7PyJ3GBhYARO29J0nraSd0" // Google Place ID for 1 Hotel San Francisco
  },
  {
    id: 2,
  name: "InterContinental by IHG",
  image: "https://images.trvl-media.com/lodging/2000000/1770000/1766700/1766605/ed96eb5c.jpg",
  rating: 4.0,
  price: "450",
  address: "888 Howard Street, San Francisco, CA 94103",
  description: "4-star hotel in Downtown San Francisco featuring 2 restaurants and walking distance to Moscone Convention Center. Offers modern rooms with premium bedding, city views, and convenient access to cultural attractions.",
  hours: "24/7",
  reviews: 1006,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: ["Indoor Pool", "24-Hour Gym", "Hot Tub"],
  link: "https://expedia.com/affiliates/san-francisco-hotels-intercontinental-san-francisco.XFQqP4Y",
  googlePlaceId: "ChIJF1lX2oaAhYARuyWPqjE12Oo" // Google Place ID for InterContinental San Francisco
  },
  {
    id: 3,
      name: "Inn San Francisco",
      image: "https://images.trvl-media.com/lodging/2000000/1150000/1145300/1145267/3ae7ddd9.jpg",
      rating: 2.5,
      price: "200",
      address: "943 South Van Ness Avenue, San Francisco, CA 94110",
      description: "Charming Mission District bed & breakfast featuring a rooftop terrace and Victorian-era charm. Offers individually decorated rooms with historic character, free breakfast, and easy access to Castro Street attractions.",
      hours: "24/7",
      reviews: 514,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      amenities: [
        "Daily Breakfast",
        "Outdoor Spa Tub",
        "Rooftop Terrace",
        "Free WiFi",
        "Parking Available",
        "Laundry Facilities",
        "Pet-Friendly Rooms",
        "Individually Decorated Rooms"
      ],
      link: "https://expedia.com/affiliates/san-francisco-hotels-inn-san-francisco.DCgJfcE",
  googlePlaceId: "ChIJyZqebzl-j4ARQNJ9IscV_JU" // Google Place ID for Inn San Francisco 
  },
  {
  id: 4,
  name: "Holiday Inn Express by IHG",
  image: "https://images.trvl-media.com/lodging/1000000/860000/856900/856888/4142bdb2.jpg",
  rating: 3.8,
  price: "217",
  address: "373 S Airport Blvd, South San Francisco, CA, 94080",
  description: "Hotel in South San Francisco with free breakfast and airport shuttle service.",
  hours: "24/7",  // Added the 'hours' property
  amenities: ["Breakfast included", "Free airport shuttle", "Hot Tub", "Gym", "Parking available", "Housekeeping"],
  reviews: 1005,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  link: "https://expedia.com/affiliates/san-francisco-hotels-holiday-inn-express-san-francisco-airport-north.AhfYCnR",
    googlePlaceId: "ChIJvVXXhYKBhYARwPBM-Dw1P2s" // Google Place ID for Holiday Inn Express SFO
},
  {
    id: 5,
    name: "Fairmont Sonoma Mission Inn & Spa",
    image: "https://images.trvl-media.com/lodging/1000000/10000/500/465/07b98e73.jpg",
    rating: 4.6,
    price: "550",
    address: "100 Boyes Boulevard, North San Francisco, CA, 95416",
    description: "Discover the finest of California Wine Country at Fairmont Sonoma Mission Inn & Spa, a top luxury resort in Sonoma. Just an hour north of San Francisco, it offers an unforgettable experience.",
    hours: "24/7",  // Added the 'hours' property
    amenities: ["Spa", "Pool", "Hot Tub", "Restaurant", "Hotels in San Francisco With Hot Tub in Room", "Bar"],
    reviews: 1000,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/sonoma-hotels-fairmont-sonoma-mission-inn-spa.on9UmAB",
    googlePlaceId: "ChIJfayGP1CshYARn_G8bmSC2BQ" // Google Place ID for Fairmont Sonoma Mission Inn & Spa
  },
  {
    id: 6,
        name: "Farmhouse Inn",
        image: "https://images.trvl-media.com/lodging/4000000/3290000/3281000/3280948/54fa9f25.jpg",
        rating: 4.9,
        price: "1000",
        address: "7871 River Road, San Francisco, CA, 95436",
        description: "The Farmhouse in San Francisco Sonoma County's Russian River Valley offers a luxurious, intimate wine country retreat with 25 rooms, a Michelin-starred restaurant, and a Farm-to-Table Spa, surrounded by vineyards, redwood forests, and the stunning Sonoma Coast.",
        hours: "24/7",
        amenities: ["Hotels in San Francisco With Hot Tub in Room", "Pool", "Room service", "Spa", "24/7 front desk", "Housekeeping"],
        reviews: 60,
        tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
        link: "https://expedia.com/affiliates/forestville-hotels-farmhouse-inn.gQ3yQdB",
        googlePlaceId: "ChIJVVVVhYKBhYARwPBM-Dw1P2s" // Google Place ID for Farmhouse Inn
      },
  // Chicago
  {
    id: 7,
    name: "Renaissance Schaumburg Convention Center Hotel",
    image: "https://images.trvl-media.com/lodging/2000000/1490000/1485600/1485559/8a986951.jpg",
    rating: 4.0,
    price: "239",
    address: "1551 Thoreau Dr N, Schaumburg Chicago, IL, 60173",
    description: "Hotel connected to the convention center in Chicago Schaumburg with 2 restaurants, pool, hot tub, and parking included.",
    hours: "24/7",
    amenities: ["Pool", "Hot Tub", "Restaurant", "Parking available", "Bar"],
    reviews: 1002,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/chicago-hotels-renaissance-schaumburg-convention-center-hotel.Q08el92",
    googlePlaceId: "ChIJZ3QZ-oevD4gRxc0-8O37cQ0" // Google Place ID for Renaissance Schaumburg
  },
  {
      id: 8,
      name: "The Langham, Chicago",
      image: "https://images.trvl-media.com/lodging/7000000/6310000/6309400/6309326/d780b32f.jpg",
      rating: 4.8,
      price: "1100",
      address: "330 North Wabash Avenue, Chicago, IL, 60611",
      description: "Luxury hotel in Downtown Chicago with a full-service spa, indoor pool, restaurant, and gym. The on-site spa has 7 treatment rooms including couples treatment rooms. The hotel's spa offers deep-tissue massages, hot stone massages, prenatal massages, and sports massages.",
      hours: "24/7",
      amenities: ["Spa", "Pool", "Restaurant", "Gym", "Hot Tub", "Free Wi-Fi"],
      reviews: 998,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/chicago-hotels-the-langham.TLKl1W3",
      googlePlaceId: "ChIJa8l-R64sDogREysrVzDMWTQ" // Google Place ID for The Langham, Chicago
  },
  {
      id: 9,
      name: "JW Marriott Chicago",
      image: "https://images.trvl-media.com/lodging/4000000/3540000/3538400/3538327/4a42f611.jpg",
      rating: 4.2,
      price: "380",
      address: "151 West Adams Street, Chicago, IL, 60603",
      description: "Luxury hotel in Downtown Chicago with a full-service spa, indoor pool, restaurant, and fitness center. SPA AT JW CHICAGO has 14 treatment rooms including couples treatment rooms.",
      hours: "24/7",
      amenities: ["Spa", "Pool", "Restaurant", "Gym", "Hot Tub", "Housekeeping", "Free Wi-Fi"],
      reviews: 1001,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/chicago-hotels-jw-marriott-chicago.ctu0tPJ",
      googlePlaceId: "ChIJESf9FrwsDogRg9RZOPtiZp8" // Google Place ID for JW Marriott Chicago, Chicago
  },
  {
      id: 10,
      name: "Park Hyatt Chicago",
      image: "https://images.trvl-media.com/lodging/1000000/30000/20700/20695/e0b506df.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      rating: 4.6,
      price: "428",
      address: "800 N Michigan Ave, Chicago, IL, 60611",
      description: "Luxury Chicago hotel connected to a shopping center, steps from Chicago Water Tower, with a full-service spa, pool, and pet-friendly options.",
      hours: "24/7",
      amenities: ["Pool", "Hot Tub", "Bar", "Spa", "Breakfast Available", "Pet Friendly"],
      reviews: 1000,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/chicago-hotels-park-hyatt-chicago.fLsb72J",
      googlePlaceId: "ChIJeQOqg1PTD4gRc2VKeAYbq1M" // Google Place ID for Park Hyatt Chicago, Chicago
  },
  {
      id: 11,
      name: "Waldorf Astoria Chicago",
      image: "https://images.trvl-media.com/lodging/3000000/2720000/2717600/2717582/e3e2799f.jpg",
      rating: 4.2,
      price: "475",
      address: "11 E. Walton Street, Chicago, IL, 60611",
      description: "Luxury Chicago hotel, steps from Oak Street and Michigan Avenue, offering a range of luxurious amenities including a full-service spa, indoor pool, and fine dining.",
      hours: "24/7",
      amenities: ["Pool", "Parking Available", "Room Service", "Bar", "Housekeeping", "Laundry"],
      reviews: 1000,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/chicago-hotels-waldorf-astoria-chicago.5y1tbwo",
      googlePlaceId: "ChIJ6wr9GlLTD4gRQ_i8UgKu6W0" // Google Place ID for Waldorf Astoria Chicago, Chicago
  },
  {
      id: 12,
      name: "Viceroy Chicago",
      image: "https://images.trvl-media.com/lodging/19000000/18620000/18614200/18614145/w5117h2880x0y0-157a40d3.jpg",
      rating: 4.4,
      price: "455",
      address: "1118 North State Street, Chicago, IL, 60610",
      description: "Luxury Chicago hotel in Downtown Chicago offering 2 restaurants, a seasonal outdoor pool, a fitness center, and chic accommodations near Michigan Avenue and Lake Michigan.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Gym", "Room Service", "Housekeeping", "Breakfast Available"],
      reviews: 1011,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/chicago-hotels-viceroy-chicago.j3TIKar",
      googlePlaceId: "ChIJh_G21VHTD4gRoxM2FR9qB-I" // Google Place ID for Viceroy Chicago, Chicago
  },
  {
      id: 13,
      name: "The Grayson Miami Downtown",
      image: "https://images.trvl-media.com/lodging/1000000/10000/6600/6535/63418b0f.jpg",
      rating: 3.4,
      price: "314",
      address: "1100 Biscayne Blvd, Miami, FL, 33132",
      description: "A luxury hotel in Downtown Miami offering two outdoor swimming pools, a hot tub, a gym, a restaurant, and pet-friendly accommodations near popular attractions like the Phillip and Patricia Frost Museum of Science.",
      hours: "24/7",
      amenities: ["2 Outdoor Swimming Pools", "Restaurant", "Gym", "Hot Tub", "Breakfast Available", "Pet Friendly"],
      reviews: 1000,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-the-gabriel-miami.bcBMhFf",
      googlePlaceId: "ChIJH3sx21u32YgR4AFUjoHgRIQ" // Google Place ID for The Grayson Miami Downtown, Chicago
  },
  {
      id: 14,
      name: "Acqualina Resort & Residences On The Miami Beach",
      image: "https://images.trvl-media.com/lodging/2000000/1120000/1113200/1113163/c2040b63.jpg",
      rating: 4.6,
      price: "2125",
      address: "17875 Collins Ave, Miami Sunny Isles Beach Miami, FL, 33160",
      description: "A luxurious beachfront resort offering 3 outdoor pools, a spa, multiple dining options, and stunning ocean views, located in Sunny Isles Beach near various local attractions.",
      hours: "24/7",
      amenities: ["3 Outdoor Pools", "Spa", "Restaurant", "Bar", "Hot Tub", "Parking Available", "Housekeeping"],
      reviews: 531,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-acqualina-resort-residences-on-the-beach.4dr761K",
      googlePlaceId: "ChIJXbbXCuCs2YgRzbV-thyE3NA" // Google Place ID for Acqualina Resort & Residences On The Miami Beach, Chicago
  },
  {
      id: 15,
      name: "EAST Miami",
      image: "https://images.trvl-media.com/lodging/13000000/12080000/12079000/12078999/24a0e0a8.jpg",
      rating: 4.0,
      price: "1719",
      address: "788 Brickell Plaza, Miami, FL, 33131",
      description: "A luxurious hotel in the heart of Miami's Brickell neighborhood, connected to a shopping center and offering an exceptional rooftop terrace, pool, gym, restaurant, and more.",
      hours: "24/7",
      amenities: ["Restaurant", "Pool", "Gym", "Hot Tub", "Bar", "Pet Friendly"],
      reviews: 2962,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-east-miami.oKqd8tm",
      googlePlaceId: "ChIJMUSwboO22YgRDFlX6qQGxrE" // Google Place ID for EAST Miami,
      
  },
  {
      id: 16,
      name: "Hampton Inn & Suites Miami/Brickell-Downtown",
      image: "https://images.trvl-media.com/lodging/5000000/4510000/4500600/4500520/2927a162.jpg",
      rating: 4.4,
      price: "568",
      address: "50 Sw 12th Street, Miami, FL, 33130",
      description: "A convenient hotel located a short walk from Brickell City Centre, offering a range of amenities including 3 restaurants, breakfast, hot tub, gym, and a bar.",
      hours: "24/7",
      amenities: ["Breakfast Included", "Restaurant", "Hot Tub", "Gym", "Bar", "Housekeeping"],
      reviews: 4231,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-hampton-inn-suites-miamibrickell-downtown.THG9rMr",
      googlePlaceId: "ChIJn-2Oo4a22YgR-fOW2Yuryjo" // Google Place ID for Hampton Inn & Suites Miami/Brickell-Downtown, Chicago
  },
  {
      id: 17,
      name: "Kimpton EPIC Hotel by IHG",
      image: "https://images.trvl-media.com/lodging/3000000/2240000/2237200/2237168/a946703d.jpg",
      rating: 4.8,
      price: "450",
      address: "270 Biscayne Blvd Way, Miami, FL, 33131",
      description: "Luxury hotel in Downtown Miami with 2 restaurants, offering an outdoor pool, spa, and pet-friendly accommodations. Ideal for relaxation and enjoyment.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Pet Friendly", "Spa", "Bar", "Breakfast Available"],
      reviews: 1709,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-kimpton-epic-hotel.ZNrsbxq",
      googlePlaceId: "ChIJlWF1Gp222YgRkg_v_MAt_Sc" // Google Place ID for Kimpton EPIC Hotel by IHG, Chicago
  },
  {
      id: 18,
      name: "Hotel Beaux Arts, Autograph Collection",
      image: "https://images.trvl-media.com/lodging/4000000/3780000/3779000/3778960/b467decb.jpg",
      rating: 4.0,
      price: "560",
      address: "255 Biscayne Boulevard Way, Miami, FL, 33131",
      description: "Luxury hotel in Downtown Miami with 3 restaurants, a spa, and a rooftop pool, offering premium rooms and exceptional service.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Bar", "Spa", "Room Service", "Breakfast Available", "Hot Tub"],
      reviews: 282,
      tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
      link: "https://expedia.com/affiliates/miami-hotels-hotel-beaux-arts.s9Nwwe8",
      googlePlaceId: "ChIJx0AED5222YgRzaTCEcXOqQ8" // Google Place ID for Hotel Beaux Arts, Autograph Collection, Chicago
  },
  {
    id: 19,
    name: "The Londoner",
    image: "https://images.trvl-media.com/lodging/46000000/45870000/45864400/45864335/5bc17f32.jpg",
    rating: 4.7,
    price: "497",
    address: "38 Leicester Square, London, England, WC2H 7LL",
    description: `Luxury hotel in the heart of London offering a full-service spa, fitness center, indoor pool, and multiple dining options. Ideal for both relaxation and exploration.`,
    hours: "24/7",
    amenities: ["Spa", "Gym", "Pool", "Restaurant", "Breakfast Available", "Hot Tub"],
    reviews: 728,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/london-hotels-the-londoner.Ga1bnEj"
  },
  {
    id: 20,
    name: "Jumeirah Carlton Tower London",
    image: "https://images.trvl-media.com/lodging/1000000/860000/858400/858368/4fbefee1.jpg",
    rating: 4.7,
    price: "662",
    address: "On Cadogan Place, London, England, SW1X 9PY",
    description: "Luxury hotel in Knightsbridge offering a full-service spa, health club, indoor pool, and multiple dining options. Perfect for relaxation and exploring nearby attractions like Harrods and Hyde Park.",
    hours: "24/7",
    amenities: ["Pool", "Hot Tub", "Spa", "Bar", "Parking available", "Pet friendly"],
    reviews: 26,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/london-hotels-the-carlton-tower-jumeirah.uwgkESe"
  },
  {
  id: 21,
  name: "Four Seasons Hotel London at Park Lane",
  image: "https://images.trvl-media.com/lodging/1000000/30000/20100/20098/d4a07b84.jpg",
  rating: 5.0,
  price: "662",
  address: "Hamilton Place, Park Lane, London, England, W1J 7DR",
  description: "Luxury hotel in Park Lane featuring a full-service spa with couples treatment rooms, hot tub, sauna, and steam room. Offers premium accommodations with minibar, in-room safe, and terrace options. Ideally located steps from Hyde Park and Buckingham Palace.",
  hours: "24/7",
  amenities: ["Hot Tub", "Spa", "Bar", "Parking available", "Gym", "Room service"],
  reviews: 302,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  link: "https://expedia.com/affiliates/london-hotels-four-seasons-hotel-london-at-park-lane.U6FEqCw"
  },
  {
  id: 22,
  name: "St. James' Court, A Taj Hotel, London",
  image: "https://images.trvl-media.com/lodging/1000000/590000/582600/582514/9fc6e34e.jpg",
  rating: 4.0,
  price: "662",
  address: "54 Buckingham Gate, London, England, SW1E 6AF",
  description: "Luxury hotel in London City Centre featuring 4 restaurants, a full-service spa with couples treatment rooms, sauna, and steam room. Situated steps from Buckingham Palace and Westminster Abbey, it offers a serene garden, courtyard, and 24/7 front desk. Perfect for exploring landmarks like Big Ben and the London Eye.",
  hours: "24/7",
  amenities: ["Breakfast available", "Spa", "Restaurant", "Gym", "Housekeeping", "Parking available"],
  reviews: 1475,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  link: "https://expedia.com/affiliates/london-hotels-st-james-court.0REEqRe"
  },
  {
    id: 23,
    name: "The Landmark London",
    image: "https://images.trvl-media.com/lodging/1000000/440000/438700/438653/fd3b7326.jpg",
    rating: 5.0,
    price: "662",
    address: "222 Marylebone Road, London, England, NW1 6JQ",
    description: "Luxury 5-star hotel in London's historical district featuring 2 restaurants, a full-service spa, indoor pool, and hot tub. Ideally located near Hyde Park, Marble Arch, and Baker Street. Offers family-friendly amenities including a children's pool and cribs.",
    hours: "24/7",
    amenities: ["Breakfast available", "Spa", "Pool", "Hot Tub", "Bar", "Gym"],
    reviews: 1002,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/london-hotels-the-landmark-london.EDafs2W"
  },
  {
    id: 24,
    name: "Jumeirah Carlton Tower London",
    image: "https://images.trvl-media.com/lodging/1000000/860000/858400/858368/4fbefee1.jpg",
    rating: 5.0,
    price: "662",
    address: "On Cadogan Place, London, England, SW1X 9PY",
    description: "Luxury 5-star hotel in Knightsbridge featuring a full-service spa with Ayurvedic treatments, steam room, and hot tub. Boasts a health club, indoor pool, and pet-friendly accommodations. Steps from Hyde Park and Buckingham Palace, with fine dining options and premium suites.",
    hours: "24/7",
    amenities: ["Pool", "Hot Tub", "Spa", "Bar", "Parking available", "Pet friendly"],
    reviews: 26,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/london-hotels-the-carlton-tower-jumeirah.DMngRTI"
  },
  {
    id: 25,
    name: "The Westin London City",
    image: "https://images.trvl-media.com/lodging/70000000/69280000/69271800/69271708/81cb7c17.jpg",
    rating: 5.0,
    price: "662",
    address: "60 Upper Thames Street, London, England",
    description: "Luxury 5-star hotel connected to a convention center, featuring a full-service spa with hot stone massages, aromatherapy treatments, steam room, and sauna. Offers an indoor pool, pet-friendly accommodations, and local cuisine dining. Prime location near Tower of London and Tower Bridge.",
    hours: "24/7",
    amenities: ["Spa", "Breakfast available", "Gym", "Pool", "Bar", "Pet friendly"],
    reviews: 267,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/london-hotels-the-westin-london-city.fk015eR"
  },
  {
    id: 26,
    name: "Hotel Cafe Royal, London",
    image: "https://images.trvl-media.com/lodging/6000000/5350000/5349200/5349114/0f747a14.jpg",
    rating: 5.0,
    price: "662",
    address: "68 Regent Street, London, England, W1B 4DY",
    description: "Luxury 5-star hotel in London's historic district featuring 4 restaurants, a full-service spa with Ayurvedic treatments, indoor pool, and rooftop terrace. Offers pet-friendly accommodations with premium bedding and Egyptian cotton sheets. Steps from Piccadilly Circus and Trafalgar Square.",
    hours: "24/7",
    amenities: ["Pool", "Spa", "Bar", "Parking available", "Pet friendly", "Gym"],
    reviews: 506,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://images.trvl-media.com/lodging/6000000/5350000/5349200/5349114/bc3fede3.jpg"
  },
  {
    id: 27,
    name: "Karma Sanctum Soho",
    image: "https://images.trvl-media.com/lodging/3000000/2550000/2543900/2543847/744dea60.jpg",
    rating: 4.5,
    price: "662",
    address: "20 Warwick Street, Soho, London, England, W1B 5NF",
    description: "Experience luxury at this boutique hotel in the heart of London City Centre. Enjoy a rooftop terrace, a relaxing hot tub, and a 24/7 front desk for seamless service. This pet-friendly retreat features plush Egyptian cotton sheets and hypoallergenic bedding for ultimate comfort. Ideally situated near Piccadilly Circus and The British Museum, it also offers all-day dining options for a delightful culinary experience.",
    hours: "24/7",
    amenities: ["Breakfast available", "Restaurant", "Hot Tub", "Bar", "Pet friendly", "24/7 front desk"],
    reviews: 1000,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-hampton-inn-suites-las-vegas-convention-center.vqRL5D8"
  },
  {
    id: 28,
    name: "Hampton Inn & Suites Las Vegas - No Resort Fee",
    image: "https://images.trvl-media.com/lodging/43000000/42580000/42574400/42574390/a038fcc5.jpg",
    rating: 4.3,
    price: "175",
    address: "Cnvention Center, Las Vegas, NV, 89109",
    description: "Enjoy a stress-free stay at this convenient hotel with no resort fees. Perfect for convention attendees, it features a hot tub, outdoor terrace, and modern rooms with 50-inch LCD TVs. Includes free hot breakfast and WiFi. Just minutes from the Las Vegas Strip and Harry Reid International Airport.",
    hours: "24/7",
    amenities: ["Free Breakfast", "Bar", "Hot Tub", "Terrace/Patio", "Free WiFi", "LCD TV"],
    reviews: 31,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://www.expedia.com/Las-Vegas-Hotels-Hampton-Inn-Suites-Las-Vegas-Convention-Center.h42574390.Hotel-Information"
  },
  {
    id: 29,
    name: "Jet Luxury at the Vdara Condo Hotel",
    image: "https://images.trvl-media.com/lodging/8000000/7860000/7859700/7859638/07b7dccb.jpg",
    rating: 4.5,
    price: "109",
    address: "2600A West Harmon Ave, Las Vegas, NV, 89109",
    description: "Indulge in a sophisticated retreat at this 4.5-star Las Vegas Strip oasis, offering smoke-free luxury suites with floor-to-ceiling windows and modern kitchens. Enjoy VIP treatment with a full-service spa, year-round hot tub, and seasonal rooftop pool. Perfect for both relaxation and entertainment - steps from Bellagio Fountains and Cosmopolitan Casino.",
    hours: "24/7",
    amenities: [ "Full-Service Spa", "Seasonal Outdoor Pool", "Hot Tub", "Pet Friendly", "Free Valet Parking", "Bar (On Property)","Wheelchair Accessible Facilities"],
    reviews: 1000,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-jet-luxury-at-the-vdara-condo-hotel.qp48dgq"
  },
  {
    id: 30,
    name: "Hilton Club Elara Las Vegas",
    image: "https://images.trvl-media.com/lodging/97000000/96310000/96306100/96306046/a3e79e8e.jpg",
    rating: 4.0,
    price: "$275",
    address: "80 East Harmon Avenue, Las Vegas, NV 89109",
    description: "Experience Art Deco elegance at this smoke-free urban retreat, offering direct access to Miracle Mile Shops and panoramic Strip views from modern suites. Perfect for families and discerning travelers, the property features two year-round hot tubs and a seasonal rooftop pool (March-October).",
    hours: "24/7",
    amenities: ["Dual Hot Tubs", "Seasonal Rooftop Pool", "Art Deco Design", "Direct Shopping Access", "55-inch Smart TVs", "24/7 Concierge", "Wheelchair Accessible Facilities"],
    reviews: 210,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-hilton-club-elara-las-vegas.Tb6WRKQ"
  },
  {
    id: 31,
    name: "Secret Suites at Vdara",
    image: "https://images.trvl-media.com/lodging/36000000/35490000/35480200/35480186/e1bf164e.jpg",
    rating: 5.0,
    price: "667",
    address: "2600 W Harmon Ave, Las Vegas, NV 89158",
    description: "Experience contemporary elegance at this smoke-free urban sanctuary, featuring panoramic Bellagio fountain views from sleek suites with floor-to-ceiling windows. Indulge in curated luxury with dual year-round hot tubs, a seasonal rooftop pool (March-October), and gourmet dining at two on-site restaurants. ",
    hours: "24/7",
    amenities: ["Two Hot Tubs", "Outdoor Pool", "Bellagio Fountain Views", "24/7 Room Service", "Two Restaurants", "Complimentary Parking", "Pet-Friendly Accommodations"],
    reviews: 94,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-secret-suites-at-vdara.PrNpGng"
  },
  {
    id: 32,
    name: "Nobu Hotel at Caesars Palace",
    image: "https://images.trvl-media.com/lodging/7000000/6140000/6133900/6133862/fed3f7b4.jpg",
    rating: 5.0,
    price: "1215",
    address: "3570 Las Vegas Boulevard South, Las Vegas, NV 89109",
    description: "Immerse in Roman-inspired opulence at this sophisticated retreat, offering exclusive access to Caesars Palace's luxury boutiques and Qua Baths & Spa's therapeutic wonders - including Arctic Ice Rooms and Roman baths. Seasonal poolside cabanas (March-October) complement expansive suites featuring marble bathrooms, 75-inch smart mirrors, and private balconies with Strip vistas.",
    hours: "24/7",
    amenities: ["Luxury Spa", "Seasonal Outdoor Pool", "24/7 Room Service", "Pet-Friendly Rooms", "On-Site Dining", "Steam Room", "Hot Stone Massages", "Concierge Services"],
    reviews: 1001,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-nobu-hotel-at-caesars-palace.zqz0dJv"
  },
  {
    id: 33,
    name: "The Signature at MGM Grand (All Suites)",
    image: "https://images.trvl-media.com/lodging/2000000/1420000/1418800/1418701/841c9a90.jpg",
    rating: 4.5,
    price: "329",
    address: "145 East Harmon Avenue, Las Vegas, NV 89109",
    description: "Experience Art Deco grandeur at this smoke-free urban retreat, featuring direct access to Miracle Mile Shops and panoramic Strip views from contemporary suites with kitchenettes and 55-inch smart TVs. Enjoy dual year-round hot tubs, a seasonal rooftop pool (March-October), and upscale American cuisine at on-site brasseries.",
    hours: "24/7",
    amenities: ["Luxury Suites", "Two Hot Tubs", "Free Valet Parking", "On-Site Dining", "Pool", "24/7 Housekeeping", "Pillowtop Beds", "Business Center"],
    reviews: 1755,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-the-signature-at-mgm-grand.4VBZyGv"
  },
  {
    id: 34,
    name: "Westgate Flamingo Bay Resort",
    image: "https://images.trvl-media.com/lodging/1000000/810000/802800/802737/bca98962.jpg",
    rating: 4.0,
    price: "149",
    address: "5625 W Flamingo Rd, Las Vegas, NV 89103",
    description: "A suburban retreat featuring spacious villas equipped with full kitchens, a pool, hot tub, and BBQ amenities. Ideally situated near major casinos, this pet-friendly resort offers 24/7 services for your convenience.",
    hours: "24/7",
    amenities: ["Private Kitchen Villas", "Outdoor Pool", "Hot Tub", "BBQ/Picnic Area", "Pet-Friendly Rooms", "24-Hour Front Desk", "Laundry Facilities", "Air Conditioning", "Flat-Screen TV", "Fitness Center"],
    reviews: 1003,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-westgate-flamingo-bay-resort.zITcLDW"
  },
  {
    id: 35,
    name: "ARIA Sky Suites",
    image: "https://images.trvl-media.com/lodging/7000000/6420000/6417200/6417182/87a8c2d4.jpg",
    rating: 5.0,
    price: "800",
    address: "3730 Las Vegas Boulevard South, Las Vegas, NV 89158",
    description: "Connected to Aria Casino, this elegant 5-star hotel offers three outdoor pools, a full-service spa, and 14 dining venues. Guests can enjoy Sky Suites with premium features and direct access to the vibrant attractions of the Las Vegas Strip.",
    hours: "24/7",
    amenities: ["Luxury Sky Suites", "Three Outdoor Pools", "Full-Service Spa", "14 Restaurants", "24/7 Room Service", "Hot Tub", "Italian Cuisine", "Concierge Services", "In-Room Minibar"],
    reviews: 11,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-aria-sky-suites.RrIWyk7"
  },
  {
    id: 36,
    name: "Green Valley Ranch Resort and Spa",
    image: "https://images.trvl-media.com/lodging/1000000/850000/846100/846020/6da1ca31.jpg",
    rating: 5.0,
    price: "404",
    address: "2300 Paseo Verde Parkway, Henderson Las Vegas, NV 89052",
    description: "Luxury suburban resort featuring 10 restaurants, a full-service spa, and outdoor pool complex. Offers casino access, 6 bars/lounges, and family-friendly amenities near Green Valley Ranch attractions.",
    hours: "24/7",
    amenities: ["Full-Service Spa", "10 Restaurants", "Outdoor Pool", "Hot Tub", "6 Bars/Lounges", "Free Parking", "Fitness Center", "Poolside Bar", "Casino Access", "24/7 Front Desk"],
    reviews: 1659,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/las-vegas-hotels-green-valley-ranch-resort-and-spa.nKkr0EB"
  },
  {
    id: 37,
    name: "The Hotel Chelsea",
    image: "https://images.trvl-media.com/lodging/2000000/1560000/1551400/1551375/7292230e.jpg",
    rating: 4.5,
    price: "459",
    address: "222 West 23rd Street, New York, NY 10011",
    description: "A historic luxury hotel offering a full-service spa with six treatment rooms, a Spanish cuisine restaurant, and pet-friendly accommodations. Situated near iconic NYC landmarks, it provides a vibrant cultural atmosphere.",
    hours: "24/7",
    amenities: ["Full-Service Spa", "24/7 Room Service", "Spanish Restaurant", "Pet-Friendly Rooms", "Free WiFi", "Hot Tub", "Steam Room", "Mud Baths", "Hydrotherapy", "Fitness Center"],
    reviews: 992,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-hotel-chelsea.xxMoztw"
  },
  {
    id: 38,
    name: "The Peninsula New York",
    image: "https://images.trvl-media.com/lodging/1000000/30000/23900/23855/1564c089.jpg",
    rating: 5.0,
    price: "2595",
    address: "700 Fifth Avenue, New York, NY 10019",
    description: "A landmark Beaux Arts hotel boasting a spa with 10 treatment rooms, a rooftop bar, and upscale amenities. Ideally located on 5th Avenue, just moments from Rockefeller Center and Times Square, it features premium bedding and round-the-clock services.",
    hours: "24/7",
    amenities: ["Luxury Spa", "Rooftop Bar", "Indoor Pool", "24/7 Room Service", "Premium Bedding", "Minibar", "Valet Parking", "3 Bars/Lounges", "Steam Room", "Couples Treatments"],
    reviews: 1002,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-the-peninsula-new-york.hHCJwUk"
  },
  {
    id: 39,
    name: "Park Hyatt New York",
    image: "https://images.trvl-media.com/lodging/8000000/7660000/7651000/7650971/18960f90.jpg",
    rating: 5.0,
    price: "1665",
    address: "153 West 57th Street, New York, NY 10019",
    description: "Experience upscale elegance at a prestigious Midtown hotel, featuring elevated sky terrace suites, a rejuvenating spa with dedicated couples' therapies, and a serene indoor pool staffed with attentive lifeguards. Perfectly positioned in the heart of Manhattan, this retreat places you moments from iconic attractions like Broadway’s vibrant theaters and the timeless Rockefeller Center.",
    hours: "24/7",
    amenities: ["Indoor Pool", "Luxury Spa", "24-Hour Fitness", "Sky Terrace Suites", "Couples Treatments", "Deep Soaking Tubs", "Steam Room", "24/7 Room Service", "On-Site Dining", "Valet Parking"],
    reviews: 315,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-park-hyatt-new-york.3iiDYqE"
  },
  {
    id: 40,
    name: "Equinox Hotel New York",
    image: "https://images.trvl-media.com/lodging/32000000/31170000/31160400/31160305/f0881b13.jpg",
    rating: 5.0,
    price: "1166",
    address: "33 Hudson Yards, New York, NY 10001",
    description: "Discover a sanctuary of luxury well-being at this elevated retreat, boasting a six-treatment-room spa, serene seasonal pools, and a chic rooftop terrace with sweeping views. Nestled in the dynamic Hudson Yards district, the hotel sits moments from the iconic High Line and offers cutting-edge fitness amenities, complemented by stylish, pet-welcoming stays for discerning travelers.",
    hours: "24/7",
    amenities: ["Luxury Spa", "Seasonal Pools", "Rooftop Terrace", "24/7 Fitness Center", "Pet-Friendly Rooms", "Valet Parking", "Steam Room", "Couples Treatments", "On-Site Dining", "Ayurvedic Therapies"],
    reviews: 619,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-equinox-hotel-new-york.u2PoxKA"
  },
  {
    id: 41,
    name: "Ramada by Wyndham Bronx",
    image: "https://images.trvl-media.com/lodging/1000000/470000/462500/462463/cc8ba431.jpg",
    rating: 3.0,
    price: "218",
    address: "1000 Baychester Avenue, New York, NY 10475",
    description: "Affordable hotel with free breakfast and whirlpool tub suites. Ideally located in the Bronx near Yankee Stadium and the Bronx Zoo, featuring 24-hour amenities and complimentary parking.",
    hours: "24/7",
    amenities: ["Free Breakfast", "Jetted Tub Suites", "Free Parking", "24/7 Front Desk", "Air Conditioning", "Free WiFi", "Housekeeping", "On-Site Dining", "Elevator Access"],
    reviews: 1008,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-ramada-by-wyndham-bronx.mI1iqjg"
  },
  {
    id: 42,
    name: "Hyatt Centric Wall Street New York",
    image: "https://images.trvl-media.com/lodging/3000000/2830000/2822300/2822237/7cca33ca.jpg",
    rating: 4.5,
    price: "626",
    address: "75 Wall Street, New York, NY 10005",
    description: "Luxury hotel in the Financial District featuring premium bedding, 24/7 services, and prime proximity to Wall Street attractions. Offers pet-friendly accommodations and modern business amenities.",
    hours: "24/7",
    amenities: ["Premium Bedding", "24-Hour Fitness Center", "On-Site Bar", "Pet-Friendly Rooms", "Hot Tub", "24/7 Front Desk", "Business Center", "Down Comforters", "Pillowtop Beds"],
    reviews: 1004,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/new-york-hotels-hyatt-centric-wall-street-new-york.jDCsGAV"
  },
  {
    id: 43, // Extracted from the URL fragment ".h3348."
    name: "Hilton Suites Atlanta Perimeter",
    image: "https://images.trvl-media.com/lodging/1000000/10000/3400/3348/8fc8030f.jpg?impolicy=resizecrop&rw=1200&ra=fit", // Using the first image provided (Reception)
    rating: 3.5, // Explicitly stated as "3.5 star property"
    price: "139", 
    address: "6120 Peachtree Dunwoody Rd Ne, Atlanta, GA, 30328",
    description: "The Hilton Atlanta Perimeter Suites, located in Atlanta’s premier business district near Perimeter Mall and Dunwoody MARTA station, offers spacious two-room suites with modern amenities, an Executive Lounge, and easy access to major highways, downtown, and the airport. Guests can enjoy an outdoor pool, fitness center, on-site dining, and a complimentary shuttle, with nearby attractions including Stone Mountain Park, the Georgia Aquarium, and Buckhead shopping.", // Summarized from "About this property"
    hours: "24/7", // Assuming standard hotel front desk hours, though not explicitly stated
    amenities: ["Restaurant", "Parking included", "Breakfast available", "Pool", "Bar", "Room service", "Premium bedding"], // Listed under "About this property" and inferred from image captions
    reviews: 1261, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-hilton-suites-atlanta-perimeter.9z7rbAh" // Base URL for the hotel on Expedia
  },
  {
    id: 44, // Extracted from the URL fragment ".h78356405."
    name: "Kimpton Shane Hotel by IHG",
    image: "https://images.trvl-media.com/lodging/79000000/78360000/78356500/78356405/f3dfe341.jpg", // Using the first image provided (Room)
    rating: 4.0, // Explicitly stated as "4.0 star property"
    price: "294", // Price information was not available in the provided text for the specified dates
    address: "1340 W.Peachtree Street NW., Atlanta, GA, 30309",
    description: "Immerse yourself in the vibrant culture of Midtown Atlanta at the brand-new Kimpton Shane Hotel. This stylish boutique hotel, nestled in the energetic Midtown Union neighborhood, captures the city's artistic spirit with its modern design and thoughtful details.", // Summarized from "About this property" and features
    hours: "24/7", // Explicitly mentioned "24/7 front desk"
    amenities: ["Restaurant", "Bars", "Breakfast available", "Pet friendly", "Gym", "Room service", "24/7 front desk", "Frette Italian sheets", "Premium bedding", "Pillowtop beds", "Minibar"], // Combined from "About this property" and image captions
    reviews: 1100, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-kimpton-shane-hotel.E2njhtz" // Base URL for the hotel on Expedia
  },
  {
    id: 45, // Extracted from the URL fragment ".h1889141."
    name: "Waldorf Astoria Atlanta Buckhead",
    image: "https://images.trvl-media.com/lodging/2000000/1890000/1889200/1889141/c01b8764.jpg", // Using the first image provided (Indoor pool)
    rating: 5.0, // Explicitly stated as "5.0 star property"
    price: "500", // Price information was not available in the provided text for the specified dates
    address: "3376 Peachtree Rd Ne, Atlanta, GA, 30326",
    description: "Indulge in tranquility at our on-site spa, featuring 13 treatment rooms, some designed for couples. 1  Experience a variety of massages including deep-tissue and hot stone, or enjoy in-room and prenatal options. Choose from aromatherapy, body scrubs, and detox wraps for ultimate rejuvenation. Enhance your relaxation with our steam room and sauna facilities", // Summarized from "About this property" and Spa details
    hours: "24/7", // Assuming standard hotel hours; fitness center confirmed 24-hour
    amenities: ["Full-service spa", "Indoor pool", "Restaurant", "Free WiFi", "24-hour fitness center", "Cooked-to-order breakfast available", "Valet parking available", "Sauna", "Steam room", "Hot tub", "Couples treatment rooms", "Meeting facility", "Lounge"], // Combined from "About this property", Spa details, and image captions
    reviews: 751, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-waldorf-astoria-atlanta-buckhead.EUuglQO" // Base URL for the hotel on Expedia
  },
  {
    id: 46, // Extracted from the URL fragment ".h3412214."
    name: "Loews Atlanta Hotel", // Name from heading and photo gallery title
    image: "https://images.trvl-media.com/lodging/4000000/3420000/3412300/3412214/9fc2914b.jpg", // Using the first image provided (Exterior)
    rating: 4.5, // Explicitly stated as "4.5 star property"
    price: "280", // Price information was not available in the provided text for the specified dates (June 18-21, 2025)
    address: "1065 Peachtree St NE, Atlanta, GA, 30309",
    description: "Unwind and rejuvenate at the renowned Exhale Spa, located within the Loews Atlanta Hotel. While the hotel itself doesn't explicitly mention a hot tub, the Exhale Spa offers a comprehensive wellness experience. Guests can also enjoy the modern fitness center and yoga classes for a holistic approach to well-being. While a traditional hot tub might not be on-site, the extensive spa facilities at Loews Atlanta Hotel provide ample opportunities for warm, soothing relaxation.", // Summarized from "About this property" and location info
    hours: "24/7", // Explicitly mentioned "24/7 front desk"
    amenities: ["Full-service spa", "Health club", "Bar", "Room service", "Pet friendly", "Parking available", "24/7 front desk", "Egyptian cotton sheets", "Premium bedding", "Pillowtop beds", "Minibar"], // Combined from "About this property" and image captions
    reviews: 1000, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-loews-atlanta-hotel.N8Dmvij" // Base URL for the hotel on Expedia
  },
  {
    id: 47, // Extracted from the URL fragment ".h2452497."
    name: "The St. Regis Atlanta", // Name from heading and photo gallery title
    image: "https://images.trvl-media.com/lodging/3000000/2460000/2452500/2452497/3067f41c.jpg", // Using the first image provided (Exterior)
    rating: 5.0, // Explicitly stated as "5.0 star property"
    price: "732", // Price information was not available in the provided text for the specified dates (June 18-21, 2025)
    address: "Eighty-Eight West Paces Ferry Road, Atlanta, GA, 30305",
    description: "The St. Regis Atlanta offers both a dedicated, full-service luxury spa for treatments and pampering, and a beautiful outdoor Pool Piazza featuring a large swimming pool and an accompanying hot tub/whirlpool for guests to relax and enjoy. Access to the pool and hot tub is generally complimentary for hotel guests, while spa treatments require advance booking and are charged separately.", // Summarized from "About this property" and location info
    hours: "24/7", // Assuming standard hotel hours; health club confirmed 24-hour
    amenities: ["Full-service spa", "Outdoor pool", "American restaurant", "Free WiFi", "24-hour health club", "Continental breakfast available", "Self-parking available", "Couples spa treatment rooms", "Hot stone massages", "Manicures and pedicures", "Frette Italian sheets", "Premium bedding", "Pillowtop beds", "Minibar"], // Combined from "About this property", Spa details, and image captions
    reviews: 205, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-the-st-regis-atlanta.z3Zi7rW" // Base URL for the hotel on Expedia
  },
  {
    id: 48, // Extracted from the URL fragment ".h20315."
    name: "Hyatt Centric Midtown Atlanta", // Name from heading and photo gallery title
    image: "https://images.trvl-media.com/lodging/1000000/30000/20400/20315/a2d7e43f.jpg", // Using the first image provided (Reception)
    rating: 4.0, // Explicitly stated as "4.0 star property"
    price: "1087", // Price information was not available in the provided text for the specified dates (June 18-21, 2025)
    address: "125 10th Street NE, Atlanta, GA, 30309",
    description: "Discover the vibrant energy of Atlanta from the perfect home base at Hyatt Centric Midtown Atlanta. Located in the city's cultural epicenter, this modern hotel places you steps away from world-class attractions, thriving nightlife, beautiful green spaces, and dynamic business hubs.", // Summarized from "About this property" and location info
    hours: "24/7", // Explicitly mentioned "24/7 front desk" and "24-hour fitness center"
    amenities: ["Indoor pool", "Restaurant", "Breakfast available", "Bar", "24/7 front desk", "Parking available", "24-hour fitness center", "Premium bedding", "Pillowtop beds", "In-room safe"], // Combined from "About this property" and image captions
    reviews: 1001, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-hyatt-centric-midtown-atlanta.Qm8NYZi" // Base URL for the hotel on Expedia
  },
  {
    id: 49, // Extracted from the URL fragment ".h3219."
    name: "Grand Hyatt Atlanta in Buckhead",
    image: "https://images.trvl-media.com/lodging/1000000/10000/3300/3219/b616be33.jpg", // Using the first image provided (Exterior)
    rating: 4.5, // Explicitly stated as "4.5 star property"
    price: "389", // Price information was not available in the provided text for the specified dates (June 18-21, 2025)
    address: "3300 Peachtree Road NE, Atlanta, GA, 30305",
    description: "4.5-star luxury VIP Access hotel in Buckhead offering 2 restaurants, a seasonal outdoor pool, spa, bar, and area shuttle service. Situated within walking distance of Lenox Square.", // Summarized from "About this property" and location info
    hours: "24/7", // Assuming standard hotel front desk hours, although not explicitly stated
    amenities: ["2 Restaurants", "Seasonal outdoor pool", "Spa", "Bar", "Area shuttle service", "Breakfast available", "Housekeeping", "Premium bedding", "Down comforters", "Pillowtop beds", "In-room safe"], // Combined from "About this property" and image captions
    reviews: 1002, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-grand-hyatt-atlanta-in-buckhead.2cZB6Mb" // Base URL for the hotel on Expedia
  },
  {
    id: 50, // Extracted from the URL fragment ".h1152203."
    name: "InterContinental Buckhead Atlanta by IHG", // Name from heading and photo gallery title
    image: "https://images.trvl-media.com/lodging/2000000/1160000/1152300/1152203/b4d295cf.jpg", // Using the first image provided (View from room)
    rating: 5.0, // Explicitly stated as "5.0 star property"
    price: "340", // Price information was not available in the provided text for the specified dates (June 18-21, 2025)
    address: "3315 Peachtree Rd Ne, Atlanta, GA, 30326",
    description: "Indulge in ultimate relaxation at the InterContinental Buckhead Atlanta with a soothing hot tub experience. Located on the hotel’s stunning rooftop, the heated saltwater whirlpool offers a serene escape with breathtaking views of the Buckhead skyline. Whether unwinding after a day of exploring Atlanta or easing tired muscles from business meetings, the hot tub provides the perfect retreat. Open seasonally, the rooftop pool and whirlpool area features plush lounge seating, cabanas, and attentive poolside service—making it an ideal spot for both intimate moments and leisurely afternoons.", // Summarized from "About this property", Spa details, and location info
    hours: "24/7", // Assuming standard hotel hours; health club confirmed 24-hour
    amenities: ["Full-service spa", "Hot Tub", "Pool", "Bar", "24-hour health club", "Breakfast available", "Pet friendly", "In-room massages", "Body treatments", "Body scrubs", "Body wraps", "Facials", "Egyptian cotton sheets", "Premium bedding", "Minibar", "In-room safe"], // Combined from "About this property", Spa details, and image captions
    reviews: 1001, // Number of reviews provided
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    link: "https://expedia.com/affiliates/atlanta-hotels-intercontinental-buckhead-atlanta.nnzWgd9" // Base URL for the hotel on Expedia
  },
  {
    id: 51,
    name: "Conrad Indianapolis",
    image: "https://images.trvl-media.com/lodging/2000000/1290000/1287500/1287480/00318f88.jpg",
    rating: 5.0,
    price: "512",
    address: "50 W Washington St, Indianapolis, IN 46204",
    description: "Experience unparalleled luxury in the heart of downtown Indianapolis at the Conrad Indianapolis, seamlessly connected via skywalk to the city's key attractions. Immerse yourself in an art-inspired ambiance featuring a curated gallery, alongside refined amenities including a full-service spa and indoor pool. Indulge in exquisite dining and sophisticated surroundings for a truly memorable stay.",
    hours: "Not specified",
    reviews: 1001,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    amenities: ["Indoor pool", "Full-service spa", "Hot Tub", "Fine-dining restaurant", "Free WiFi"],
    link: "https://expedia.com/affiliates/indianapolis-hotels-conrad-indianapolis.hR9ux4X"
   },
   {
    id: 52,
    name: "Fairfield Inn and Suites by Marriott Indianapolis East",
    image: "https://images.trvl-media.com/lodging/1000000/790000/789200/789172/4610326d.jpg",
    rating: 3.5,
    price: "211",
    address: "7110 E 21st St, Indianapolis, IN 46219",
    description: "Conveniently located off I-70 with easy access to downtown Indianapolis attractions, the Fairfield Inn & Suites Indianapolis East offers a comfortable stay. Guests can enjoy complimentary breakfast, an indoor pool, and a fitness center. The hotel provides a welcoming atmosphere with helpful staff and essential amenities for both business and leisure travelers.",
    hours: "Not specified",
    reviews: 797,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    amenities: ["Indoor pool", "Hot tub", "Free WiFi", "Free breakfast", "Fitness center"],
    link: "https://expedia.com/affiliates/indianapolis-hotels-fairfield-inn-and-suites-by-marriott-indianapolis-east.E9YkYf5"
   },
   {
    id: 53,
    name: "Drury Inn & Suites Indianapolis Northeast",
    image: "https://images.trvl-media.com/lodging/3000000/2010000/2005100/2005046/69295b69.jpg",
    rating: 3.0,
    price: "211",
    address: "8180 N Shadeland Ave, Indianapolis, IN 46250",
    description: "Enjoy a convenient stay at the Drury Inn & Suites Indianapolis Northeast, offering easy access to the interstate and local attractions. Guests can take advantage of generous free amenities including a hot breakfast and the evening 5:30 Kickback with hot food and cold beverages. Relax and unwind in the indoor/outdoor pools and hot tub or utilize the 24-hour fitness center.",
    hours: "Not specified",
    reviews: 1002,
    tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
    amenities: ["Hot Tub", "Indoor pool", "Outdoor pool", "Spa"],
    link: "https://expedia.com/affiliates/indianapolis-hotels-drury-inn-suites-indianapolis-northeast.g3PZW86"
   },
   {
  id: 54,
  name: "Mayflower Park Hotel",
  image: "https://images.trvl-media.com/lodging/1000000/30000/26900/26893/2eb8afe2.jpg",
  rating: 4.5,
  price: "211",
  address: "405 Olive Way Westlake Center, Seattle, WA 98101",
  description: "Built in 1927, the Mayflower Park Hotel is a refined, European-influenced hotel located in downtown Seattle, just blocks from Pike Place Market and near the Space Needle via monorail. Guests enjoy elegant rooms with soaking tubs, a popular breakfast spot, Andaluca Restaurant, and classic cocktails at Oliver’s Lounge.",
  hours: "Check-in: 3 PM, Check-out: 12 PM",
  reviews: 2992,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free WiFi",
    "Fitness Center",
    "Restaurant",
    "Bar / Lounge",
    "Valet Parking",
    "Meeting Rooms"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-mayflower-park-hotel.S25cDBs"
},
{
  id: 55,
  name: "Silver Cloud Hotel - Seattle Lake Union",
  image: "https://images.trvl-media.com/lodging/1000000/160000/151500/151459/6940f6dc.jpg",
  rating: 4.5,
  price: "199",
  address: "1150 Fairview Avenue North, Seattle, WA 98109",
  description: "Located on the scenic south end of Lake Union, this top-rated hotel offers stunning waterfront views, a complimentary breakfast, and modern amenities just minutes from downtown Seattle and the University of Washington.",
  hours: "Check-in: 3:00 PM | Check-out: 12:00 PM",
  reviews: 2053,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Lakefront views",
    "Free breakfast",
    "Fitness Center",
    "Free WiFi",
    "Microwave",
    "Refrigerator",
    "Shuttle Service",
    "Laundry Service",
    "Business Center"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-silver-cloud-inn-seattle-lake-union.JndsOYk"
},
{
  id: 56,
  name: "Silver Cloud Hotel - Seattle Stadium",
  image: "https://images.trvl-media.com/lodging/1000000/160000/151500/151459/6940f6dc.jpg",
  rating: 4.4,
  price: "239",
  address: "1046 1st Avenue South, Seattle, WA 98134",
  description: "Located across from T-Mobile Park and next to Lumen Field, this hotel is perfect for sports fans and city explorers alike. Enjoy the rooftop pool and hot tub, dine at Jimmy's On First, and walk to Pioneer Square, the Seattle Waterfront, and top attractions. All rooms were completely renovated in 2023.",
  hours: "24-hour front desk",
  reviews: 2055,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: ["Rooftop pool", "Hot tub", "Fitness Center", "Restaurant", "Free WiFi", "Valet Parking", "Meeting rooms"],
  link: "https://expedia.com/affiliates/seattle-hotels-silver-cloud-inn-seattle-lake-union.IXZSU6J"
},
{
  id: 57,
  name: "Silver Cloud Hotel - Mukilteo Waterfront",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/32/16/38/king-jacuzzi-guestroom.jpg?w=900&h=500&s=1",
  rating: 4.7,
  price: "199",
  address: "718 Front St, , Seattle, WA 98275",
  description: "Located adjacent to the Mukilteo-Clinton Ferry, this is Mukilteo's only waterfront hotel. Most guestrooms feature panoramic waterfront views overlooking Possession Sound and Whidbey Island. Close to Boeing Everett Factory tours. Includes complimentary breakfast, microwaves, refrigerators, Aveda bath products, 55\" flat-screen TVs, and free WiFi.",
  hours: "24-hour front desk",
  reviews: 805,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free parking",
    "Free High Speed Internet (WiFi)",
    "Free breakfast",
    "Beach access",
    "Business Center",
    "Laundry service",
    "Waterfront views",
    "Jacuzzi suites"
  ],
  link: "https://www.tripadvisor.com/Hotel_Review-g58625-d126094-Reviews-Silver_Cloud_Hotel_Mukilteo_Waterfront-Mukilteo_Washington.html"
},
{
  id: 58,
  name: "Willows Lodge",
  image: "https://images.trvl-media.com/lodging/1000000/540000/536600/536525/c0126cb2.jpg",
  rating: 4.7,
  price: "362",
  address: "14580 NE 145th Street, , Seattle WA 98072",
  description: "Upscale Pacific Northwest lodge located 30 minutes from Seattle surrounded by 130+ wineries and tasting rooms. Features acclaimed restaurants (Barking Frog and The Herbfarm), full-service spa, 5.5 acres of landscaped grounds, and 5,000 sq ft event space. Ideal for wine enthusiasts and luxury travelers.",
  hours: "24-hour front desk",
  reviews: 1625,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free parking",
    "Free High Speed Internet (WiFi)",
    "Fitness Center",
    "Hot tub",
    "Full-service spa",
    "Pet Friendly",
    "Two restaurants",
    "Event space"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-willows-lodge.cp5RONo"
},
{
  id: 59,
  name: "Eastgate Hotel, BW Signature Collection",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/27/3c/63/eastgate-hotel-best-western.jpg?w=900&h=500&s=1",
  rating: 4.3,
  price: "160",
  address: "14632 SE Eastgate Way, Seattle, WA 98007",
  description: "Located near the I-90 tech corridor and minutes from Bellevue Square, Eastgate Hotel offers modern rooms with 55” HDTVs, free WiFi, and convenient access to both Microsoft HQ and downtown Seattle. Ideal for business travelers and families.",
  hours: "24-hour front desk",
  reviews: 244,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free parking",
    "Free High Speed Internet (WiFi)",
    "Fitness Center with Gym / Workout Room",
    "Conference facilities",
    "Banquet room",
    "Breakfast available",
    "Kids stay free",
    "Meeting rooms",
    "Laundry service",
    "Non-smoking hotel"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-eastgate-hotel.JJZFyo2"
},
{
  id: 60,
  name: "Executive Residency By Best Western Navigator Inn & Suites",
  image: "https://images.trvl-media.com/lodging/1000000/330000/327300/327201/aa7bf7f0.jpg",
  rating: 4.2,
  price: "110",
  address: "10210 Evergreen Way, Seattle WA 98204",
  description: "Executive Residency By Best Western in Everett blends extended-stay comfort with hotel convenience. Enjoy kitchenettes, free breakfast, a heated indoor pool, and a fitness room—perfect for business and family travelers alike.",
  hours: "24-hour front desk",
  reviews: 1008,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free parking",
    "Free High Speed Internet (WiFi)",
    "Fitness Center with Gym / Workout Room",
    "Indoor pool",
    "Heated pool",
    "Hot tub",
    "Free breakfast",
    "Kids stay free",
    "Pets Allowed (Dog / Pet Friendly)",
    "Laundry service",
    "Kitchenette",
    "Refrigerator",
    "Microwave",
    "Stovetop",
    "Air conditioning",
    "Flatscreen TV"
  ],
  link: "https://expedia.com/affiliates/everett-hotels-best-western-plus-navigator-inn-suites.4q7Jlag"
},
{
  id: 61,
  name: "Camano Island Inn",
  image: "https://images.trvl-media.com/lodging/2000000/1580000/1573400/1573306/3acae794.jpg",
  rating: 4.1,
  price: "236",
  address: "1054 SW Camano Dr, Seattle, WA 98282-8480",
  description: "Camano Island Inn offers a unique lodging experience with a serene ambiance, perfect for relaxation. This romantic bed and breakfast features ocean views, a hot tub, and complimentary breakfast, ideal for couples and travelers seeking a peaceful retreat.",
  hours: "Not specified",
  reviews: 250,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Free parking",
    "Free High Speed Internet (WiFi)",
    "Hot tub",
    "Free breakfast",
    "Beach",
    "Board games / puzzles",
    "Meeting rooms",
    "Non-smoking hotel",
    "Breakfast buffet",
    "Complimentary Instant Coffee",
    "Complimentary tea",
    "Special diet menus",
    "Wine / champagne",
    "Outdoor fireplace",
    "Shared kitchen",
    "Sun terrace",
    "Blackout curtains",
    "Bathrobes",
    "Housekeeping",
    "Private balcony",
    "VIP room facilities",
    "Private bathrooms",
    "Flatscreen TV",
    "Whirlpool bathtub",
    "Bath / shower",
    "Complimentary toiletries",
    "Hair dryer"
  ],
  link: "https://expedia.com/affiliates/camano-island-hotels-camano-island-inn.ChJFwNr"
},
{
  id: 65,
  name: "Embassy Suites by Hilton Seattle Downtown Pioneer Square",
  image: "https://images.trvl-media.com/lodging/21000000/20130000/20123400/20123320/c6f7327a.jpg",
  rating: 4.7,
  price: "349", // Requires date input for pricing
  address: "255 South King Street, Seattle, WA 98104", // Typical address (exact not provided)
  description: "Modern all-suite hotel in historic Pioneer Square featuring complimentary made-to-order breakfast, evening receptions, and panoramic city views. Conveniently located near downtown attractions and public transportation.",
  hours: "Check-in: 3 PM | Check-out: 12 PM",
  reviews: 1932,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Indoor pool",
    "Fitness center",
    "Restaurant",
    "Bar/Lounge",
    "Free WiFi",
    "Business center",
    "24-hour front desk",
    "Meeting rooms",
    "Accessible facilities"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-embassy-suites-by-hilton-seattle-downtown-pioneer-square.3PI1fFt"
},
{
  id: 66,
  name: "Four Seasons Hotel Seattle",
  image: "https://images.trvl-media.com/lodging/3000000/2170000/2163100/2163007/db4ea702.jpg",
  rating: 5.0,
  price: "659", // Requires date input for pricing
  address: "99 Union Street, Seattle, WA 98101", // Typical address
  description: "Luxury bayside hotel with a full-service spa, infinity pool, and panoramic views of Elliott Bay and Puget Sound. Features sophisticated accommodations near Pike Place Market.",
  hours: "Check-in: 3 PM | Check-out: 12 PM | Pool: 6:00 AM to 10:00 PM",
  reviews: 850,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Full-service spa",
    "Infinity pool",
    "24-hour fitness center",
    "Restaurant",
    "Bar",
    "Hot tub",
    "Room service",
    "Valet parking",
    "Business center",
    "Meeting rooms",
    "Concierge services"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-four-seasons-hotel-seattle.TZaAuTs"
},
{
  id: 67,
  name: "Kimpton Hotel Monaco Seattle by IHG",
  image: "/public/hotels with tub in seattle.jpg",
  rating: 4.5,
  price: "500", // Requires date input for pricing
  address: "1101 4th Ave, Seattle, WA 98101",
  description: "Boutique luxury hotel in downtown Seattle featuring stylish accommodations, a restaurant and bar. Offers pet-friendly services and a 24-hour fitness center. Steps from top attractions including Pike Place Market.",
  hours: "24-hour front desk | Check-in: 3 PM | Check-out: 12 PM",
  reviews: 1001,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "24-hour fitness center",
    "Restaurant",
    "Bar",
    "Pet friendly",
    "Room service",
    "Housekeeping",
    "Breakfast available",
    "24-hour front desk",
    "Business center",
    "Meeting rooms",
    "Concierge services"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-kimpton-hotel-monaco-seattle.4q7Jlag"
},
{
  id: 68,
  name: "Warwick Seattle",
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fe/64/48/photo5jpg.jpg",
  rating: 4.0,
  price: "234", // From highlighted deal price
  address: "401 Lenora Street, Seattle, WA 98121",
  description: "Classic hotel in Seattle's vibrant Belltown district featuring newly refurbished Premier Floors with sophisticated ambiance. Offers sweeping city skyline views from Juliet balconies, steps from iconic landmarks like Space Needle and Pike Place Market.",
  hours: "24-hour front desk | Check-in: 3 PM | Check-out: 12 PM",
  reviews: 2313,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Indoor pool",
    "Heated pool",
    "Hot tub",
    "Fitness Center with Gym / Workout Room",
    "Restaurant",
    "Bar / lounge",
    "Free High Speed Internet (WiFi)",
    "Valet parking",
    "24-hour front desk",
    "Business Center",
    "Room service",
    "Air conditioning",
    "Flatscreen TV",
    "Refrigerator",
    "Coffee / tea maker"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-warwick-seattle.akBeQTx"
},
{
  id: 69,
  name: "Grand Hyatt Seattle",
  image: "https://images.trvl-media.com/lodging/1000000/550000/546500/546475/w3837h2557x0y0-f5ee441f.jpg",
  rating: 4.5,
  price: "369", // Requires date input for pricing
  address: "721 Pine Street, Seattle, WA 98101", // Typical address
  description: "Luxury downtown hotel featuring 4 restaurants, a 24-hour fitness center, and sophisticated accommodations. Offers premium bedding and city views near Seattle's top attractions.",
  hours: "24-hour front desk | Check-in: 3 PM | Check-out: 12 PM",
  reviews: 1799,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "4 restaurants",
    "24-hour fitness center",
    "Hot tub",
    "Room service",
    "Bar",
    "Breakfast available",
    "Premium bedding",
    "Pillowtop beds",
    "In-room safe",
    "Desk",
    "Business center",
    "Concierge services",
    "Valet parking"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-grand-hyatt-seattle.JT8QGaK"
},
{
  id: 70,
  name: "Hyatt At Olive 8",
  image: "https://images.trvl-media.com/lodging/3000000/2310000/2309400/2309333/27c549f8.jpg",
  rating: 4.0,
  price: "359", // Requires date input for pricing
  address: "1635 8th Ave, Seattle, WA 98101", // Typical address
  description: "Eco-certified hotel featuring a full-service spa, indoor pool, and 24-hour fitness center. Offers premium bedding and wellness amenities in a sustainable downtown setting near Seattle attractions.",
  hours: "24-hour front desk | Check-in: 3 PM | Check-out: 12 PM | Spa hours: Vary",
  reviews: 1623,
  tags: ["Hot Tub", "Spa Hotel", "Hotels With Hot Tub in Room", "Hotels With Jacuzzi In Room"],
  amenities: [
    "Full-service spa",
    "Indoor pool",
    "24-hour fitness center",
    "Hot tub",
    "Sauna",
    "Steam room",
    "Body treatments",
    "Hydrotherapy",
    "Aromatherapy",
    "Restaurant",
    "Breakfast available",
    "Premium bedding",
    "Pillowtop beds",
    "In-room safe",
    "Desk"
  ],
  link: "https://expedia.com/affiliates/seattle-hotels-hyatt-at-olive-8.DzFrifo"
},
];

export async function searchHotels(q: string, location: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const searchWords = q?.split(" ").filter(Boolean) || [];

  return hotels
    .filter((hotel) =>
      searchWords.every(
        (word) =>
          hotel.name.toLowerCase().includes(word.toLowerCase()) ||
          hotel.description.toLowerCase().includes(word.toLowerCase()) ||
          hotel.tags.some((tag) =>
            tag.toLowerCase().includes(word.toLowerCase())
          )
      )
    )
    .filter((hotel) =>
      hotel.address.toLowerCase().includes(location.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);
}

export const locations = ["San Francisco, CA", "Chicago, IL", "Las Vegas, NV", "Miami, FL", "New York, NY", "London", "Atlanta, GA", "Indianapolis, IN","Seattle, WA"];

export async function getAllTags({ limit }: { limit?: number } = {}) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return hotels
    .slice(0, limit)
    .reduce<string[]>(function (acc, hotel) {
      return acc.concat(hotel.tags);
    }, []);
}
