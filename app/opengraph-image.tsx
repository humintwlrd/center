import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { SITE } from "@/lib/site"

export const alt = "Mundo da HUMINT: inteligência humana aplicada, com método"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  const [display, text] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/archivo-800-expanded.ttf")),
    readFile(join(process.cwd(), "assets/og/archivo-400.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0c",
          color: "#ffffff",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Archivo Display", fontSize: 26 }}>{SITE.name}</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Archivo Display",
              fontSize: 84,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: 1040,
            }}
          >
            <span>Inteligência humana aplicada,&nbsp;</span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span>com método.</span>
              <span style={{ height: 9, marginTop: 4, background: "#e5252a" }} />
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 30, lineHeight: 1.4, color: "#b6b6ba", maxWidth: 880 }}>
            Casos reais de espionagem dissecados em método para negociar, avaliar pessoas e proteger informação.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2e2e31",
            paddingTop: 24,
            fontSize: 22,
            color: "#8c8c92",
          }}
        >
          <span>{new URL(SITE.url).host.replace(/^www\./, "")}</span>
          <span>Academy · Acervo Tático</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo Display", data: display, weight: 800, style: "normal" },
        { name: "Archivo", data: text, weight: 400, style: "normal" },
      ],
    },
  )
}
