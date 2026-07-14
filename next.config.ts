import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy .html redirects from old Weebly site
      {
        source: "/muscleactivationtechniques.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/muscleactivationtechniques",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bemertherapy.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/personaltraining",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
