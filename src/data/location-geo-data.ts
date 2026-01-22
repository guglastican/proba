export interface ExpertTip {
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface SentimentSummary {
    bestFor: string;
    topHighlight: string;
    bestTime: string;
}

export interface LocationGEO {
    expertTips: ExpertTip[];
    faqs: FAQ[];
    sentimentSummary?: SentimentSummary;
}

export const locationGEOData: Record<string, LocationGEO> = {
    "San Francisco, CA": {
        expertTips: [
            {
                title: "Check the Room Names",
                description: "Many hotels use the term 'Soaking Tub' vs. 'Whirlpool/Jacuzzi.' If you want jets, specifically look for the word 'whirlpool' or 'Jacuzzi.'"
            },
            {
                title: "San Francisco Ordinances",
                description: "Note that some historic B&Bs have specific hours for tub usage due to noise; always check the house rules if staying at a boutique inn."
            }
        ],
        faqs: [
            {
                question: "Which hotels in San Francisco have a Jacuzzi in the room?",
                answer: "The InterContinental San Francisco, Queen Anne Hotel, and Inn San Francisco are the primary properties offering private in-room hot tubs or whirlpools."
            },
            {
                question: "Are there romantic hotels with hot tubs near Union Square?",
                answer: "Yes, Hotel Nikko and The Donatello offer suites with deep soaking tubs and proximity to Union Square's shopping district."
            }
        ],
        sentimentSummary: {
            bestFor: "Couples seeking historic charm & secluded luxury",
            topHighlight: "Victorian soaking tubs with San Francisco skyline views",
            bestTime: "Late September for Indian Summer warmth and smaller crowds"
        }
    },
    "Chicago, IL": {
        expertTips: [
            {
                title: "Winter Bookings",
                description: "Chicago hotels with indoor hot tubs are especially popular during winter months. Book early for the best rates and availability during November through March."
            },
            {
                title: "Spa vs. In-Room Hot Tubs",
                description: "Many luxury Chicago hotels offer spa facilities with hot tubs rather than in-room options. Clarify whether you want private in-room access or shared spa amenities when booking."
            },
            {
                title: "Downtown vs. Suburbs",
                description: "Suburban Chicago hotels often have more spacious rooms with in-room hot tubs at lower prices than downtown properties, but you'll sacrifice walkability to attractions."
            }
        ],
        faqs: [
            {
                question: "Which Chicago hotels have private hot tubs in the room?",
                answer: "The Langham Chicago, JW Marriott Chicago, and Park Hyatt Chicago offer luxurious suites with private hot tubs and spa amenities."
            },
            {
                question: "Are there affordable hotels with hot tubs near downtown Chicago?",
                answer: "Renaissance Schaumburg Convention Center Hotel offers hot tub facilities at more affordable rates, located just outside downtown with easy access via public transit."
            },
            {
                question: "Do Chicago hotels with hot tubs have skyline views?",
                answer: "Yes, many downtown Chicago hotels like The Langham and Park Hyatt offer rooms with hot tubs and stunning skyline views of the city and Lake Michigan."
            }
        ],
        sentimentSummary: {
            bestFor: "Urban explorers & luxury seekers",
            topHighlight: "Indoor sky-high hot tubs with Michigan Avenue views",
            bestTime: "December for festive vibes or June for pleasant lakefront weather"
        }
    },
    "Miami, FL": {
        expertTips: [
            {
                title: "Beach vs. Downtown",
                description: "Miami Beach properties typically offer oceanfront hot tubs, while downtown Miami hotels focus on rooftop pools with hot tubs and city views. Choose based on your preference."
            },
            {
                title: "Hurricane Season Considerations",
                description: "Book with flexible cancellation policies during hurricane season (June-November). Many hotels offer special rates during this period."
            },
            {
                title: "Art Deco District",
                description: "For a unique experience, consider boutique hotels in the Art Deco District that combine vintage charm with modern hot tub amenities."
            }
        ],
        faqs: [
            {
                question: "Which Miami hotels have beachfront hot tubs?",
                answer: "Acqualina Resort & Residences and other luxury Miami Beach properties offer beachfront access with hot tub facilities and ocean views."
            },
            {
                question: "Are there pet-friendly Miami hotels with hot tubs?",
                answer: "Yes, several Miami hotels including EAST Miami and Kimpton EPIC Hotel offer pet-friendly accommodations with hot tub access."
            },
            {
                question: "What's the best area in Miami for hotels with hot tubs?",
                answer: "Brickell and Miami Beach are the top areas, offering luxury hotels with hot tubs, easy beach access, and proximity to dining and entertainment."
            }
        ],
        sentimentSummary: {
            bestFor: "Beach lovers & nightlife enthusiasts",
            topHighlight: "Oceanfront rooftop Jacuzzis at sunset",
            bestTime: "March to May for optimal weather and lower humidity"
        }
    },
    "Las Vegas, NV": {
        expertTips: [
            {
                title: "Strip vs. Off-Strip",
                description: "Strip hotels offer convenience and entertainment but at premium prices. Off-strip properties often have larger rooms with hot tubs at better rates."
            },
            {
                title: "Resort Fees",
                description: "Most Las Vegas hotels charge daily resort fees ($20-$45) that cover hot tub and pool access. Factor this into your total cost when comparing prices."
            },
            {
                title: "Weekday vs. Weekend Rates",
                description: "Book Sunday through Thursday for significantly lower rates on hot tub suites. Weekend prices can be 2-3x higher, especially during major events."
            }
        ],
        faqs: [
            {
                question: "Which Las Vegas hotels have private hot tubs on the balcony?",
                answer: "Nobu Hotel at Caesars Palace, ARIA Sky Suites, and Secret Suites at Vdara offer premium suites with private balcony hot tubs and Strip views."
            },
            {
                question: "Are there budget-friendly Las Vegas hotels with hot tubs?",
                answer: "Westgate Flamingo Bay Resort and Hampton Inn & Suites Las Vegas offer hot tub access at more affordable rates compared to Strip properties."
            },
            {
                question: "Do Las Vegas hot tub hotels include spa access?",
                answer: "Many luxury Las Vegas hotels include spa access with hot tub bookings, though some charge additional fees. Always verify what's included in your room rate."
            }
        ],
        sentimentSummary: {
            bestFor: "High rollers & entertainment seekers",
            topHighlight: "Private balcony hot tubs overlooking the Las Vegas Strip",
            bestTime: "April and October for comfortable outdoor temperatures"
        }
    },
    "New York, NY": {
        expertTips: [
            {
                title: "Space is Premium",
                description: "NYC hotel rooms are typically smaller than other cities. Hot tub suites command premium prices due to limited space. Book well in advance for the best options."
            },
            {
                title: "Rooftop vs. In-Room",
                description: "Many NYC hotels offer rooftop hot tubs with city views rather than in-room options. Decide if you prefer privacy or panoramic views."
            },
            {
                title: "Neighborhood Matters",
                description: "Midtown hotels offer convenience to attractions but at higher prices. Consider Brooklyn or Queens for more spacious hot tub suites at better rates."
            }
        ],
        faqs: [
            {
                question: "Which New York hotels have hot tubs with city views?",
                answer: "The Peninsula New York, Park Hyatt New York, and Equinox Hotel New York offer hot tub facilities with stunning Manhattan skyline views."
            },
            {
                question: "Are there affordable NYC hotels with hot tubs?",
                answer: "Ramada by Wyndham Bronx offers jetted tub suites at more budget-friendly rates, with easy access to Manhattan via subway."
            },
            {
                question: "Do NYC hotels with hot tubs offer 24/7 access?",
                answer: "Most luxury NYC hotels provide 24/7 access to spa facilities and hot tubs, though some boutique properties may have limited hours. Always confirm when booking."
            }
        ],
        sentimentSummary: {
            bestFor: "Honeymooners & city sleekers",
            topHighlight: "Manhattan skyline views from deep soaking tubs",
            bestTime: "October for fall foliage or May for spring blossoms"
        }
    },
    "London": {
        expertTips: [
            {
                title: "Central vs. Outer London",
                description: "Central London hotels charge premium rates for hot tub suites. Consider hotels in Richmond or Greenwich for more space and lower prices with good transport links."
            },
            {
                title: "Historic Properties",
                description: "Many historic London hotels have added modern spa facilities. Ask about the age and maintenance of hot tub facilities when booking older properties."
            },
            {
                title: "Booking During Events",
                description: "London hotel prices spike during major events (Fashion Week, Wimbledon, etc.). Book 6+ months ahead or avoid these periods for better rates on hot tub suites."
            }
        ],
        faqs: [
            {
                question: "Which London hotels have private hot tubs in the room?",
                answer: "The Shangri-La at The Shard, The Exhibitionist Hotel, and select suites at Jumeirah Carlton Tower offer private in-room hot tubs with luxury amenities."
            },
            {
                question: "Are there London hotels with outdoor hot tubs?",
                answer: "Richmond Harbour Hotel features outdoor hot tubs in a secret garden spa setting, offering a unique wellness experience just outside central London."
            },
            {
                question: "What's the best area in London for hotels with hot tubs?",
                answer: "Knightsbridge and South Kensington offer the highest concentration of luxury hotels with hot tub facilities, plus easy access to museums and shopping."
            }
        ],
        sentimentSummary: {
            bestFor: "Historic charm & sophisticated relaxation",
            topHighlight: "Secret garden outdoor hot tubs in Richmond",
            bestTime: "May to July during the height of the English garden season"
        }
    },
    "Atlanta, GA": {
        expertTips: [
            {
                title: "Buckhead vs. Downtown",
                description: "Buckhead hotels typically offer more spacious hot tub suites with upscale amenities, while downtown properties provide better access to attractions and convention centers."
            },
            {
                title: "Airport Proximity",
                description: "Atlanta's airport hotels often have excellent hot tub facilities at lower rates. Consider these if you have an early flight or are just passing through."
            },
            {
                title: "Summer Heat",
                description: "Indoor hot tub facilities are more comfortable during Atlanta's hot, humid summers. Outdoor options are ideal for spring and fall visits."
            }
        ],
        faqs: [
            {
                question: "Which Atlanta hotels have the best spa and hot tub facilities?",
                answer: "Waldorf Astoria Atlanta Buckhead and The St. Regis Atlanta offer award-winning spas with luxurious hot tub facilities and couples treatment rooms."
            },
            {
                question: "Are there pet-friendly Atlanta hotels with hot tubs?",
                answer: "Yes, Kimpton Shane Hotel and Loews Atlanta Hotel offer pet-friendly accommodations with access to hot tub and spa facilities."
            },
            {
                question: "What's the average cost for an Atlanta hotel with a hot tub?",
                answer: "Prices range from $139-$732 per night depending on location and luxury level. Buckhead properties tend to be more expensive than suburban options."
            }
        ],
        sentimentSummary: {
            bestFor: "Southern hospitality & spa enthusiasts",
            topHighlight: "Luxury spa suites in the heart of Buckhead",
            bestTime: "September to November for mild Georgia autumns"
        }
    },
    "Indianapolis, IN": {
        expertTips: [
            {
                title: "Convention Center Access",
                description: "Many Indianapolis hotels with hot tubs are connected to the convention center via skywalks. This is ideal for business travelers but can mean higher rates during major events."
            },
            {
                title: "Race Weekend Premiums",
                description: "Hotel rates spike dramatically during the Indianapolis 500 (late May). Book 6-12 months ahead or avoid this weekend if you want reasonable rates."
            },
            {
                title: "Downtown vs. Suburbs",
                description: "Suburban Indianapolis hotels often offer larger hot tub suites with free parking at lower rates than downtown properties."
            }
        ],
        faqs: [
            {
                question: "Which Indianapolis hotels have hot tubs in the room?",
                answer: "Conrad Indianapolis and Fairfield Inn Indianapolis East offer rooms with hot tub access and modern amenities in convenient locations."
            },
            {
                question: "Are there budget-friendly Indianapolis hotels with hot tubs?",
                answer: "Drury Inn & Suites Indianapolis Northeast offers hot tub facilities, free breakfast, and evening kickback at affordable rates."
            },
            {
                question: "Do Indianapolis hotels with hot tubs offer free parking?",
                answer: "Many suburban Indianapolis hotels include free parking, while downtown properties typically charge $20-$35 per day. Always verify parking costs when booking."
            }
        ],
        sentimentSummary: {
            bestFor: "Business travelers & weekend getaways",
            topHighlight: "Downtown hot tub suites with skywalk access",
            bestTime: "May (avoid race weekends) or September for pleasant strolls"
        }
    },
    "Seattle, WA": {
        expertTips: [
            {
                title: "Rain Season Planning",
                description: "Seattle's rainy season (October-April) makes indoor hot tub facilities especially appealing. Book properties with covered or indoor options for year-round comfort."
            },
            {
                title: "Waterfront vs. Downtown",
                description: "Waterfront hotels offer stunning Puget Sound views with hot tubs, while downtown properties provide better walkability to Pike Place Market and attractions."
            },
            {
                title: "Tech Hub Rates",
                description: "Hotel rates can be higher during tech conferences and Amazon events. Check the Seattle convention calendar and book early to avoid premium pricing."
            }
        ],
        faqs: [
            {
                question: "Which Seattle hotels have waterfront hot tubs?",
                answer: "Silver Cloud Hotel Mukilteo Waterfront and Four Seasons Hotel Seattle offer hot tub facilities with stunning water views of Puget Sound and Elliott Bay."
            },
            {
                question: "Are there Seattle hotels with rooftop hot tubs?",
                answer: "Yes, Silver Cloud Hotel Seattle Stadium features a rooftop pool and hot tub with views of the city skyline and nearby sports stadiums."
            },
            {
                question: "What's the best area in Seattle for hotels with hot tubs?",
                answer: "Downtown Seattle and Lake Union offer the best selection of hotels with hot tubs, providing easy access to attractions, dining, and waterfront activities."
            }
        ],
        sentimentSummary: {
            bestFor: "Pacific Northwest adventurers & nature lovers",
            topHighlight: "Rooftop pools with views of Elliott Bay & stadiums",
            bestTime: "July and August for Seattle's best sunshine"
        }
    },
    "General": {
        expertTips: [
            {
                title: "In-Room Jacuzzi vs. Spa Access",
                description: "Always verify if 'hot tub' refers to a private in-room Jacuzzi or access to the hotel's public spa facilities to avoid disappointment upon arrival."
            },
            {
                title: "Best Booking Times",
                description: "Luxury hotels with private hot tubs often have limited specialty suites. Book at least 4-6 weeks in advance for popular metropolitan areas."
            },
            {
                title: "Check Maintenance Reviews",
                description: "Specific mentions of 'hot tub cleanliness' or 'jacuzzi maintenance' in recent guest reviews are the best indicator of a quality experience."
            }
        ],
        faqs: [
            {
                question: "What is the difference between a soaking tub and a Jacuzzi?",
                answer: "A soaking tub is typically a deep, large bathtub without jets, while a Jacuzzi or whirlpool tub includes mechanical jets for a massaging water flow."
            },
            {
                question: "Do hotels charge extra for rooms with hot tubs?",
                answer: "Yes, rooms with private in-room hot tubs are usually classified as suites or premium rooms and carry a higher nightly rate than standard rooms."
            },
            {
                question: "Are in-room hot tubs sanitized between guests?",
                answer: "Reputable hotels follow strict cleaning protocols for jetted tubs, including flushing the lines with sanitizer between every stay."
            }
        ],
        sentimentSummary: {
            bestFor: "Generic travelers & relaxation seekers",
            topHighlight: "Standardized cleaning protocols & luxury extras",
            bestTime: "Year-round for indoor relaxation"
        }
    }
};
