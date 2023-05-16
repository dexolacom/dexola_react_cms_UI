/** @type {import('next').NextConfig} */

const BASE_URL = "http://localhost:1337";

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["localhost"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = {
  ...nextConfig,
  env: {
    BASE_URL,
  },
};
