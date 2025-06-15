// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/isbn/**',
      }
    ],
    domains: [
      "res.cloudinary.com",
      "deadline.com",
      "i.ytimg.com",
      "upload.wikimedia.org",
      "i.imgur.com",
      "static.wikia.nocookie.net",
      "m.media-amazon.com",
      "asianwiki.com",
      "pbs.twimg.com",
      "sixthemusical.com",
      "beetlejuicebroadway.com",
      "usishield.com",
      "64.media.tumblr.com",
      "i1.sndcdn.com",
      "hazbinhotel.fandom.com",
      "tadc.fandom.com",
      "gemini-home-entertainment.fandom.com",
      "mandela-catalogue.fandom.com"
    ]
  }
};

export default nextConfig;
