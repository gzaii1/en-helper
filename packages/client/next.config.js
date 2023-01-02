/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: [ "tsx" ],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
