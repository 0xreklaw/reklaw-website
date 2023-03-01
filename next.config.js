/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.google.com', 
      'assets.stickpng.com', 
      'theme.zdassets.com', 
      'www.freeiconspng.com',
      'media.licdn.com',,
      'res.cloudinary.com',
      'media-cdn.grubhub.com',
      'pbs.twimg.com',
      'upload.wikimedia.org'
    ],
  },
}

module.exports = nextConfig
