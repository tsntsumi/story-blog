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
  },
  redirects: async () => [
    {
      source: "/profitable-content-workshop",
      destination:
        "https://line.me/ti/g2/hOJfDvVnlS__vqm7_fp1wihHq98ENswlddz9iQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
      permanent: true
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "alizza-ideal.com" }],
      destination: "https://www.alizza-ideal.com/:path*",
      permanent: true
    }
  ]
}
module.exports = nextConfig
