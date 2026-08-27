import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

/**
 * Estratégia robots: queremos ser indexados por TODOS os crawlers tradicionais
 * e — explicitamente — por todos os crawlers de IAs generativas (OpenAI, Anthropic,
 * Perplexity, Common Crawl, Google-Extended, Applebot-Extended, etc.).
 *
 * Regras separadas por user-agent permitem ajustes futuros sem afetar os outros bots.
 */

const DISALLOW_PATHS = ["/api/"]

const TRADITIONAL_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Bingbot",
  "DuckDuckBot",
  "Slurp",
  "YandexBot",
  "Baiduspider",
  "Applebot",
]

const AI_BOTS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  // Google AI (Gemini, Vertex AI training)
  "Google-Extended",
  // Apple AI (Apple Intelligence)
  "Applebot-Extended",
  // Common Crawl (alimenta a maioria dos LLMs)
  "CCBot",
  // Meta AI
  "FacebookBot",
  "meta-externalagent",
  // Cohere
  "cohere-ai",
  // ByteDance
  "Bytespider",
  // Diffbot, Mistral, etc.
  "Diffbot",
  "MistralAI-User",
  "Timpibot",
  "ImagesiftBot",
  "PetalBot",
]

const SOCIAL_BOTS = [
  "FacebookExternalHit",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "WhatsApp",
  "TelegramBot",
  "Discordbot",
  "SkypeUriPreview",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: TRADITIONAL_BOTS,
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: AI_BOTS,
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: SOCIAL_BOTS,
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
