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
  redirects: async function () {
    return [
      {
        source: "/profitable-content-workshop",
        destination:
          "https://line.me/ti/g2/hOJfDvVnlS__vqm7_fp1wihHq98ENswlddz9iQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
        permanent: true
      }
    ]
  }
}
module.exports = nextConfig
