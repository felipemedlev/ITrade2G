import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Enable static site generation
  images: {
    domains: [],
    unoptimized: true  // Required for static export
  },
  trailingSlash: true,
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true
  },
  // Prevent 404 errors for missing /_next/static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : ''
};

export default nextConfig;
