import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  // Optimize for production build
  typescript: {
    // Don't skip type checking - ensure quality
    ignoreBuildErrors: false,
  },
  eslint: {
    // Skip ESLint during build to speed up deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
