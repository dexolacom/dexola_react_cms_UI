/** @type {import('next').NextConfig} */

const BASE_URL = "http://localhost:1337";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

module.exports = {
  ...nextConfig,
  env: {
    BASE_URL,
  },
};
