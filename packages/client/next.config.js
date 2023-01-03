/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: [ "tsx" ],
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
