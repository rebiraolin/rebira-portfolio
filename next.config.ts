import type { NextConfig } from "next";

/* ─── Next.js Configuration ──────────────────────────────────────── */
const nextConfig: NextConfig = {
  // Enable strict mode for React best practices
  reactStrictMode: true,

  // Vercel-ready: no further configuration needed for deployment
  // Just push to GitHub and connect to Vercel

  // If you add external image domains in the future, add them here:
  // images: {
  //   remotePatterns: [{ hostname: "example.com" }],
  // },
};

export default nextConfig;
