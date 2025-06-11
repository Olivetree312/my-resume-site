import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com',
      },
      {
        protocol: 'https',
        hostname: 'books.googleusercontent.com',
      },
      {
        protocol: 'http',
        hostname: 'books.google.com',
      },
    ],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
