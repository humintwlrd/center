import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { ACERVO } from "@/lib/products"

export const alt = "Acervo Tático HUMINT: toda decisão importante passa por uma pessoa"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  const [title, text, cover] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/inter-tight-500.ttf")),
    readFile(join(process.cwd(), "assets/og/inter-tight-400.ttf")),
    readFile(join(process.cwd(), "assets/og/acervo-tatico-cover.jpg")),
  ])
  const coverSrc = `data:image/jpeg;base64,${cover.toString("base64")}`

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", color: "#161616", fontFamily: "Inter Tight" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 740,
            padding: "60px 0 56px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#ababab", letterSpacing: "-0.03em", textTransform: "uppercase" }}>
            Acervo Tático HUMINT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Inter Tight Medium", fontSize: 62, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Toda decisão importante passa por uma pessoa.
            </div>
            <div style={{ display: "flex", marginTop: 22, fontSize: 30, lineHeight: 1.35, color: "#505050", letterSpacing: "-0.03em" }}>
              Aprenda a avaliá-la com método.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #e3e3e3",
              paddingTop: 20,
              fontSize: 22,
              color: "#505050",
              letterSpacing: "-0.03em",
            }}
          >
            {ACERVO.parcelado} · 7 dias de garantia
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            margin: "40px 40px 40px 24px",
            background: "#fbfbfb",
            border: "1px solid #e3e3e3",
          }}
        >
          <img src={coverSrc} width={330} height={440} alt="" style={{ objectFit: "cover" }} />
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
