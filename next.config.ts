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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
};

export default nextConfig;
