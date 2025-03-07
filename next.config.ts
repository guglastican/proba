
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com", "images.trvl-media.com", "lh3.googleusercontent.com", "developers.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "developers.google.com",
      },
    ],
    unoptimized: true,
  },
  // Add hostname configuration for Replit
  hostname: "0.0.0.0",
  port: 3000,
};

export default nextConfig;
