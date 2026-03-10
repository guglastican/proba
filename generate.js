import fs from 'fs';

const rawText = `https://www.romantic-vacations-destinations.com/Miami,%20FL/Hotels%20With%20Hot
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/City%20View
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Shopping
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Business%20Hotel
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Spa
https://www.romantic-vacations-destinations.com/Atlanta/hotel%20with%20tub
https://www.romantic-vacations-destinations.com/Chicago,%20IL/hotels%20with
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/hot%20tub
https://www.romantic-vacations-destinations.com/las-vegas-nv/27
https://www.romantic-vacations-destinations.com/Miami,%20FL/Museum%20Island
https://www.romantic-vacations-destinations.com/Atlanta/hot%20tub
https://www.romantic-vacations-destinations.com/Miami,%20FL/Hot%20Tub
https://www.romantic-vacations-destinations.com/Atlanta/rooftop%20pool
https://www.romantic-vacations-destinations.com/New%20York,%20NY/hotel
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Sauna
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Cathedral%20View
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/City%20View
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Aparthotel
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Museum%20Island
https://www.romantic-vacations-destinations.com/Berlin,%20DE/hot%20tub
https://www.romantic-vacations-destinations.com/London/Hotels%20With%20Jacuzzi
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Riverside%20View
https://www.romantic-vacations-destinations.com/Miami,%20FL/Full%20Kitchen
https://www.romantic-vacations-destinations.com/Miami,%20FL/Cathedral%20View
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Shopping%20District
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Sauna
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Luxury%20Suites
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Luxury
https://www.romantic-vacations-destinations.com/New%20York,%20NY/spa%20hotel
https://www.romantic-vacations-destinations.com/san-francisco,%20CA/hotels
https://www.romantic-vacations-destinations.com/New%20York,%20NY/hot%20tub
https://www.romantic-vacations-destinations.com/las-vegas-nv/57
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/hotels
https://www.romantic-vacations-destinations.com/san-francisco-ca/40
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Spa
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Michelin%20Star
https://www.romantic-vacations-destinations.com/London/Aparthotel
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/spa%20hotel
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Hotels
https://www.romantic-vacations-destinations.com/new-york-ny/18
https://www.romantic-vacations-destinations.com/las-vegas-nv/30
https://www.romantic-vacations-destinations.com/new-york-ny/19
https://www.romantic-vacations-destinations.com/new-york-ny/28
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Michelin
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Hotels%20With
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Hotels%20With
https://www.romantic-vacations-destinations.com/Seattle,%20WA/hot%20tub
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Full%20Kitchen
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Extended
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/hotels
https://www.romantic-vacations-destinations.com/las-vegas-nv/13
https://www.romantic-vacations-destinations.com/Chicago,%20IL/hotel%20with%20tub
https://www.romantic-vacations-destinations.com/las-vegas-nv/19
https://www.romantic-vacations-destinations.com/las-vegas-nv/59
https://www.romantic-vacations-destinations.com/Chicago,%20IL/hotel%20with%20tub
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Hotels%20With%20Hot
https://www.romantic-vacations-destinations.com/New%20York,%20NY/hot%20tub
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Spa%20Hotel
https://www.romantic-vacations-destinations.com/Atlanta/hotels%20with%20jetted
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Hotels%20With
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Aparthotel
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Riverside%20View
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Balcony%20Rooms
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Shopping
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Sauna
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Aparthotel
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Michelin%20Star
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Museum%20Island
https://www.romantic-vacations-destinations.com/London/Riverside%20View
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Sauna
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/hot%20tub
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Aparthotel
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Michelin%20Star
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Hotels%20With
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Michelin%20Star
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Michelin
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Spa
https://www.romantic-vacations-destinations.com/Miami,%20FL/Luxury%20Suites
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/hotels
https://www.romantic-vacations-destinations.com/New%20York,%20NY/City%20View
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Shopping
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/City%20View
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Spa
https://www.romantic-vacations-destinations.com/London/Sauna
https://www.romantic-vacations-destinations.com/Miami,%20FL/Aparthotel
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/City%20View
https://www.romantic-vacations-destinations.com/Seattle,%20WA/City%20View
https://www.romantic-vacations-destinations.com/London/Shopping%20District
https://www.romantic-vacations-destinations.com/Miami,%20FL/Shopping%20District
https://www.romantic-vacations-destinations.com/Atlanta/hotels%20with%20jetted
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Cathedral
https://www.romantic-vacations-destinations.com/London/Full-Service%20Spa
https://www.romantic-vacations-destinations.com/hotel/25
https://www.romantic-vacations-destinations.com/hotel/24
https://www.romantic-vacations-destinations.com/London/Luxury%20Suites
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Cathedral%20View
https://www.romantic-vacations-destinations.com/Miami,%20FL/Luxury%20Spa
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Full-Service
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Sauna
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Business%20Hotel
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Balcony
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Sauna
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Shopping
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Museum%20Island
https://www.romantic-vacations-destinations.com/New%20York,%20NY/Full%20Kitchen
https://www.romantic-vacations-destinations.com/Miami,%20FL/Sauna
https://www.romantic-vacations-destinations.com/London/Michelin%20Star%20Dining
https://www.romantic-vacations-destinations.com/Las%20Vegas,%20NV/Cathedral%20View
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Sauna
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Luxury%20Suites
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Cathedral%20View
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Indoor%20Pool
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Museum
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Indoor%20Pool
https://www.romantic-vacations-destinations.com/Indianapolis,%20IN/Cathedral
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Shopping
https://www.romantic-vacations-destinations.com/Seattle,%20WA/Business%20Hotel
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Full-Service%20Spa
https://www.romantic-vacations-destinations.com/Miami,%20FL/Business%20Hotel
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Luxury
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Business%20Hotel
https://www.romantic-vacations-destinations.com/Atlanta,%20GA/Balcony%20Rooms
https://www.romantic-vacations-destinations.com/London/Cathedral%20View
https://www.romantic-vacations-destinations.com/Berlin,%20DE/Spa%20Hotel
https://www.romantic-vacations-destinations.com/san%20francisco,
https://www.romantic-vacations-destinations.com/Chicago,%20IL/Full-Service%20Spa
https://www.romantic-vacations-destinations.com/Miami,%20FL/Full-Service%20Spa
https://www.romantic-vacations-destinations.com/San%20Francisco,%20CA/Balcony
https://www.romantic-vacations-destinations.com/London/Museum%20Island
https://www.romantic-vacations-destinations.com/destination-weddings-in-oregon.html
http://www.romantic-vacations-destinations.com/caribbean-sailing-cruise-vacation.html`;

const slugify = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const redirects = [];
const lines = rawText.split('\\n').map(l => l.trim()).filter(Boolean);

for (const line of lines) {
    try {
        const parsed = new URL(line);
        const source = decodeURIComponent(parsed.pathname);

        // Ignore root or simple paths we might not want to redirect here if it's too risky
        if (source === '/' || source.length < 2) continue;

        const segments = source.split('/').filter(Boolean);
        let destination = '/';

        if (segments.length === 1) {
            // Legacy 1 segment
            destination = '/';
            if (segments[0] === 'cas-vegas-nv') {
                destination = '/las-vegas-nv/hotels-with-hot-tub-in-room';
            }
        } else if (segments.length === 2) {
            let cleanLoc = slugify(segments[0]);
            let cleanTag = slugify(segments[1]);

            // Fallback logic from middleware
            if (/^\\d+$/.test(cleanTag)) {
                cleanTag = 'hotels-with-hot-tub-in-room';
            }
            if (cleanTag === 'hotels-with-hot' || cleanTag === 'hotels-with-jacuzzi' || cleanTag === 'spa') {
                cleanTag = 'hotels-with-hot-tub-in-room';
            }

            // We only want to output a redirect if the source is different from destination
            destination = \`/\${cleanLoc}/\${cleanTag}\`;
    }

    if (source !== destination) {
       redirects.push({
         source: source.replace(/ /g, '%20'), // Next.js next.config.ts requires encoded spaces or we just pass the raw path
         destination,
         permanent: true
       });
    }

  } catch(e) {
    console.log("Error parsing", line, e.message);
  }
}

// Remove duplicates
const uniqueRedirects = Array.from(new Map(redirects.map(r => [r.source, r])).values());

const output = \`
/** @type {import('next/dist/lib/load-custom-routes').Redirect[]} */
export const legacyRedirects = \${JSON.stringify(uniqueRedirects, null, 2)};
\`;

fs.writeFileSync('src/data/legacy-redirects.ts', output);
console.log(\`Generated \${uniqueRedirects.length} legacy redirects to src/data/legacy-redirects.ts\`);
