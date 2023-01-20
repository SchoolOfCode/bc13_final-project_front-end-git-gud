/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// next.config.js
const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;

const withNextEnv = require("next-env");
module.exports = withNextEnv();
