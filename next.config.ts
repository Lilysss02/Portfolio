import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "images.microcms-assets.io",
      }
    ],
  },
};

export default nextConfig;
