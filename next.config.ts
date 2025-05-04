import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production'
  },
  trailingSlash: true,
  // Ignore ESLint errors during build on Netlify
  eslint: {
    // Don't fail the build for ESLint errors
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
