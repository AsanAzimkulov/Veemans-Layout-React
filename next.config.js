/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  swcMinify: true,
  experimental: {
    workerThreads: true,
    images: {
      unoptimized: true
    }
  }
}


module.exports = nextConfig
