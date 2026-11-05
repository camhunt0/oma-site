import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Consolidate the public production alias on the existing canonical host.
      // Match only this alias so localhost and Vercel previews remain usable.
      // Next.js preserves the path and query string and emits a permanent 308.
      {
        source: "/:path*",
        has: [{ type: "host", value: "oma-site-zeta\\.vercel\\.app" }],
        destination: "https://www.ohiomuscleactivation.com/:path*",
        permanent: true,
      },
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
