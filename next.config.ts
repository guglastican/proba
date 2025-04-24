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
        source: '/romantic-getaways-in-washington/',
        destination: '',
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
