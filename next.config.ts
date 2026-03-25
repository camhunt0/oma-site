import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      // Legacy .html redirects from old Weebly site
      {
        source: "/muscleactivationtechniques.html",
        destination: "/muscleactivationtechniques",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
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
      // Legacy bare paths
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
