import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io', 'grupo-chavon2.odoo.com'],
  },
  reactStrictMode: true,
};

export default nextConfig;
