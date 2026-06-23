/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/shop", destination: "/academy", permanent: true },
      { source: "/shop/:slug", destination: "/academy/:slug", permanent: true },
    ]
  },
}

export default nextConfig
