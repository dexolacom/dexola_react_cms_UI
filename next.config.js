/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: [process.env.BASE_URL, "localhost"],
    domains: [
      'strapi.devenvironment.pro',
      'dexola-api.us-west-1.elasticbeanstalk.com',
      'localhost',
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = {
  ...nextConfig,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
