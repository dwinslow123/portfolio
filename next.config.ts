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
  // experimental: {
  //   authInterrupts: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/posts',
  //       destination: '/maintenance',
  //       permanent: false,
  //     }
  //   ]
  // }
};

export default nextConfig;
