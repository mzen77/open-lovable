import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Optimize for production build
  typescript: {
    // Skip type checking during build to speed up deployment
    ignoreBuildErrors: false,
  },
  eslint: {
    // Skip ESLint during build to speed up deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
