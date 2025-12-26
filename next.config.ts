import type { NextConfig } from "next";

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
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [ '@svgr/webpack' ],
        as: '*.js',
      },
    }
  },
};

export default nextConfig;
