import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.icons8.com',
      },
      {
        hostname: 'example.com',
      }
    ],
  },
};

export default nextConfig;