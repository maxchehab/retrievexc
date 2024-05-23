
/** @type {import('next').NextConfig} */
/** @type {import('next-pwa')} */

const production = process.env.NODE_ENV === "production"

const withPWA = require('next-pwa')({
  disable: !production,
  dest: 'public',
  fallbacks: {
    image: '/static/images/fallback.png'
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  }
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com']
  }
})
