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
        hostname: 'books.google.com', // just in case some links use http
      },
    ],
  },
};

export default nextConfig;
