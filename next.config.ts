import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds (Vercel)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow builds to succeed even with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
