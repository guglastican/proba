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
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-in-eureka-springs-arkansas/
        source: '/romantic-getaways-in-eureka-springs-arkansas/',
        destination: '/romantic-getaways-in-eureka-springs-arkansas/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/hotels-with-jacuzzi-in-room-tucson/
        source: '/hotels-with-jacuzzi-in-room-tucson/',
        destination: '/hotels-with-jacuzzi-in-room-tucson/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-in-georgia-with-hot-tub/
        source: '/romantic-getaways-in-georgia-with-hot-tub/',
        destination: '/romantic-getaways-in-georgia-with-hot-tub/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-ontario/
        source: '/romantic-getaways-ontario/',
        destination: '/romantic-getaways-ontario/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/search/{search_term_string}/feed/rss2/
        source: '/search/{search_term_string}/feed/rss2/',
        destination: '/search/{search_term_string}/feed/rss2/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/blog/page/2/
        source: '/blog/page/2/',
        destination: '/blog/page/2/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/yankee-stadium
        source: '/yankee-stadium',
        destination: '/yankee-stadium', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/tips-to-spend-your-leisure-in-summer/
        source: '/tips-to-spend-your-leisure-in-summer/',
        destination: '/tips-to-spend-your-leisure-in-summer/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/hotel-with-jacuzzi-in-room-tulsa/
        source: '/hotel-with-jacuzzi-in-room-tulsa/',
        destination: '/hotel-with-jacuzzi-in-room-tulsa/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/traverse-city-hotels-with-jacuzzi-in-room/
        source: '/traverse-city-hotels-with-jacuzzi-in-room/',
        destination: '/traverse-city-hotels-with-jacuzzi-in-room/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-getaways-in-washington/
        source: '/romantic-getaways-in-washington/',
        destination: '/romantic-getaways-in-washington/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/romantic-picnic-ideas/
        source: '/romantic-picnic-ideas/',
        destination: '/romantic-picnic-ideas/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/safety-tips-for-travellers/
        source: '/safety-tips-for-travellers/',
        destination: '/safety-tips-for-travellers/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/oklahoma/
        source: '/oklahoma/',
        destination: '/oklahoma/', // Modify destination path as required
        permanent: true,
      },
      {
        // Source: https://romantic-vacations-destinations.com/bronx-zoo
        source: '/bronx-zoo',
        destination: '/bronx-zoo', // Modify destination path as required
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
