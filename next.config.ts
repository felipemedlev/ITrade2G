import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production'
  },
  trailingSlash: true,
};

export default nextConfig;
