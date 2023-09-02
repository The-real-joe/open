/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "src/.next",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
