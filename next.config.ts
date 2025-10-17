import type { NextConfig } from "next";
import { redirect } from "next/navigation";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/public/assets/images/**',
      }
    ],
  },
  transpilePackages: [
    "react-syntax-highlighter",
    "ui",
  ],
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/maintenance',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
