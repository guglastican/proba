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
        source: 'https://romantic-vacations-destinations.com/new-york/',
        destination: 'https://www.romantic-vacations-destinations.com/New%20York%2C%20NY/hot%20tub', 
        permanent: true, // 301 redirect (permanent)
        // use false for 307 (temporary) redirects
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
