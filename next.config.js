/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    workerThreads: true,
    images: {
      unoptimized: true
    }
  }
}


module.exports = nextConfig
