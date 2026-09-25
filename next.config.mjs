/** Domínio canônico do site. O .com.br (com ou sem www) redireciona para cá. */
const CANONICAL_ORIGIN = "https://mundodahumint.com"

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:www\\.)?mundodahumint\\.com\\.br" }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      { source: "/shop", destination: "/academy", permanent: true },
      { source: "/shop/:slug", destination: "/academy/:slug", permanent: true },
      { source: "/assinar", destination: "/academy", permanent: true },
    ]
  },
}

export default nextConfig
