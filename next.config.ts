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
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
        {
          source: '/hotels-with-jacuzzi-in-room-tucson',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-getaways-in-georgia-with-hot-tub',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-getaways-ontario',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/search/{search_term_string}/feed/rss2',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/blog/page/2',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/yankee-stadium',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/tips-to-spend-your-leisure-in-summer',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/hotel-with-jacuzzi-in-room-tulsa',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/traverse-city-hotels-with-jacuzzi-in-room',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-getaways-in-washington',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-picnic-ideas',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/safety-tips-for-travellers',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/oklahoma',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/bronx-zoo',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },      
        {
          source: '/hotels-in-detroit-with-jacuzzi-in-room',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/ruidoso-cabins-with-hot-tub',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-getaways/romantic-getaways-georgia',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/best-romantic-getaways-in-georgia',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/romantic-getaways/feed',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/author/romantic-vacations-destinations-com/feed',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
        {
          source: '/blog/feed',
          destination: 'https://www.romantic-vacations-destinations.com',
          permanent: true,
        },
      {
        source: '/romantic-getaways-in-washington/',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/hotels-in-the-bronx-with-jacuzzi',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/new-mexico',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/search/%7Bsearch_term_string%7D/feed/rss2',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/arizona/hotels-with-jacuzzi-in-room-tucson/',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/michigan/traverse-city-hotels-with-jacuzzi-in-room/',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/romantic-getaways-in-eureka-springs-arkansas/',
        destination: 'https://www.romantic-vacations-destinations.com',
        permanent: true,
      },
      {
        source: '/indiana/hotel-with-jacuzzi-in-room-south-bend/',
        destination: 'https://www.romantic-vacations-destinations.com',
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
