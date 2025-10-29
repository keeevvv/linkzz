import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // 👈 tambahkan domain ini
  },
  allowedDevOrigins: [
    "https://linkzz-six.vercel.app",
    "https://linkzz-git-main-kevz12s-projects.vercel.app",
    "https://linkzz-lwtcx62ks-kevz12s-projects.vercel.app",
  ],

  async headers() {
    return [
      {
        // Mencocokkan semua rute API
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://linkzz-git-main-kevz12s-projects.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
