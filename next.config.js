/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'en-US'
  }
}

// eslint-disable-next-line no-undef
module.exports = { nextConfig }
