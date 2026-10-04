import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { SITE } from "@/lib/site"
import { eyePattern } from "@/lib/dot-patterns"

export const alt = "Mundo da HUMINT: inteligência humana aplicada, com método"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Olho em matriz de quadrados (mesmo padrão do hero), um path por tom. */
function eyePaths() {
  const grid = eyePattern()
  const pitch = 10
  const s = 6.2
  const o = (pitch - s) / 2
  const paths = ["", "", ""]
  grid.forEach((row, y) =>
    row.forEach((level, x) => {
      if (level) paths[level - 1] += `M${x * pitch + o} ${y * pitch + o}h${s}v${s}h-${s}z`
    }),
  )
  return { paths, w: grid[0].length * pitch, h: grid.length * pitch }
}

export default async function OG() {
  const [title, text] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/inter-tight-500.ttf")),
    readFile(join(process.cwd(), "assets/og/inter-tight-400.ttf")),
  ])
  const eye = eyePaths()
  const fills = ["#e3e3e3", "#ababab", "#161616"]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#161616",
          fontFamily: "Inter Tight",
          padding: "56px 64px",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
            <div style={{ display: "flex", fontSize: 22, color: "#ababab", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
              {SITE.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontFamily: "Inter Tight Medium",
                fontSize: 68,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Inteligência humana aplicada, com método.
            </div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 27, lineHeight: 1.45, color: "#505050", letterSpacing: "-0.03em" }}>
              Casos reais de espionagem dissecados em método para negociar, avaliar pessoas e proteger informação.
            </div>
          </div>
          <svg width={420} height={(420 * eye.h) / eye.w} viewBox={`0 0 ${eye.w} ${eye.h}`}>
            {eye.paths.map((d, i) => (d ? <path key={i} d={d} fill={fills[i]} /> : null))}
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e3e3e3",
            paddingTop: 22,
            fontSize: 22,
            color: "#505050",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
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
        { name: "Inter Tight Medium", data: title, weight: 500, style: "normal" },
        { name: "Inter Tight", data: text, weight: 400, style: "normal" },
      ],
    },
  )
}
