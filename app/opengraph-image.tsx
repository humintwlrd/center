import { ImageResponse } from "next/og"
import { SITE } from "@/lib/site"

export const alt = "Mundo da HUMINT: inteligência humana aplicada, com método"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#ededea",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#ededea",
            letterSpacing: 0,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "#4ade80",
            }}
          />
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            A inteligência humana aplicada, com método.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a3a39c",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Artigos, dossiês e fundamentos para quem investiga, verifica e decide.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#a3a39c",
            fontFamily: "monospace",
            letterSpacing: 0,
            borderTop: "1px solid #2a2a28",
            paddingTop: 24,
          }}
        >
          <span>{new URL(SITE.url).host.replace(/^www\./, "")}</span>
          <span>pt-BR · publicação editorial</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
