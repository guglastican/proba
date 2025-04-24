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
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/new-york',
        destination: '/New%20York%2C%20NY/hot%20tub', 
        permanent: true,
      },
      {
        source: '/romantic-getaways-in-eureka-springs-arkansas',
        destination: '',
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/hotels-with-jacuzzi-in-room-tucson/
        source: '/hotels-with-jacuzzi-in-room-tucson/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-in-georgia-with-hot-tub/
        source: '/romantic-getaways-in-georgia-with-hot-tub/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-ontario/
        source: '/romantic-getaways-ontario/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/search/{search_term_string}/feed/rss2/
        source: '/search/{search_term_string}/feed/rss2/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/blog/page/2/
        source: '/blog/page/2/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/yankee-stadium
        source: '/yankee-stadium',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/tips-to-spend-your-leisure-in-summer/
        source: '/tips-to-spend-your-leisure-in-summer/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/hotel-with-jacuzzi-in-room-tulsa/
        source: '/hotel-with-jacuzzi-in-room-tulsa/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/traverse-city-hotels-with-jacuzzi-in-room/
        source: '/traverse-city-hotels-with-jacuzzi-in-room/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-in-washington/
        source: '/romantic-getaways-in-washington/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-picnic-ideas/
        source: '/romantic-picnic-ideas/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/safety-tips-for-travellers/
        source: '/safety-tips-for-travellers/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/oklahoma/
        source: '/oklahoma/',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/bronx-zoo
        source: '/bronx-zoo',
        destination: '/', // Redirecting to homepage
        permanent: true,
      },
      {
        // Using path matching parameters
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
