import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { ACERVO } from "@/lib/products"

export const alt = "Acervo Tático de Inteligência Humana: o primeiro e único acervo tático de HUMINT do Brasil"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  const [display, text, cover] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/archivo-800-expanded.ttf")),
    readFile(join(process.cwd(), "assets/og/archivo-400.ttf")),
    readFile(join(process.cwd(), "assets/og/acervo-tatico-cover.jpg")),
  ])
  const coverSrc = `data:image/jpeg;base64,${cover.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0b0b0c", color: "#ffffff" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            padding: "64px 0 64px 72px",
            fontFamily: "Archivo",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Archivo Display", fontSize: 24 }}>Mundo da HUMINT</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Archivo Display",
              fontSize: 60,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            <span>O primeiro e único acervo tático de Inteligência Humana do&nbsp;</span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span>Brasil.</span>
              <span style={{ height: 7, marginTop: 3, background: "#e5252a" }} />
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#b6b6ba" }}>
            {ACERVO.parcelado} · 7 dias de garantia
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", padding: 48 }}>
          <img src={coverSrc} width={396} height={528} alt="" style={{ objectFit: "cover" }} />
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
