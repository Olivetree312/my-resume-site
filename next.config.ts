// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/isbn/**',
      },
      {
        protocol: 'https',
        hostname: 'beetlejuicebroadway.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'sweeneytoddbroadway.com',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'sixthemusical.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.teamstarkid.com',
        pathname: '/img/shows/**',
      }
    ]
  }
};

export default nextConfig;
