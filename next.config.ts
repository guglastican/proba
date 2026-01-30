/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.trvl-media.com',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/new-york',
        destination: '/new-york-ny/hotels-with-hot-tub-in-room',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-of-service.html',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/romantic-getaways-in-eureka-springs-arkansas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hotels-with-jacuzzi-in-room-tucson',
        destination: '/',
        permanent: true,
      },
      {
        source: '/romantic-getaways-in-georgia-with-hot-tub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/romantic-getaways-ontario',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/page/2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yankee-stadium',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tips-to-spend-your-leisure-in-summer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hotel-with-jacuzzi-in-room-tulsa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/traverse-city-hotels-with-jacuzzi-in-room',
        destination: '/',
        permanent: true,
      },
      {
        source: '/romantic-getaways-in-washington',
        destination: '/',
        permanent: true,
      },
      {
        source: '/romantic-picnic-ideas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/safety-tips-for-travellers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/oklahoma',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bronx-zoo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hotels-in-detroit-with-jacuzzi-in-room',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ruidoso-cabins-with-hot-tub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/best-romantic-getaways-in-georgia',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hotels-in-the-bronx-with-jacuzzi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/new-mexico',
        destination: '/',
        permanent: true,
      },
      {
        source: '/honeymoon-spots.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/reasons-to-elope.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elope-in-europe.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/colorado-train.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/maui-vacations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/elope-ideas.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-elope.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/romantic-honeymoon-destinations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/costa-rica-vacations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/us-travel-destinations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mexico-vacations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/european-vacations.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/costa-rica-wedding-destination.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/caribbean-romantic-vacation.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/maine',
        destination: '/',
        permanent: true,
      },
      {
        source: '/indiana',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cabins-in-tennessee-with-hot-tub',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hotels-with-private-jacuzzi-in-room-indianapolis',
        destination: '/search?q=Hotels+With+Hot+Tub+in+Room&location=Indianapolis%2C+IN',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        // Wildcard path matching
        source: '/docs/:path*',
        destination: '/documentation/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
