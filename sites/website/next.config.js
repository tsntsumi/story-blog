/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qr-official.line.me"
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com"
      }
    ]
  }
}
module.exports = nextConfig
