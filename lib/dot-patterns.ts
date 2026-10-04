/**
 * Padrões das ilustrações em matriz de pontos (linguagem visual da referência).
 * Cada padrão é uma grade de níveis: 0 vazio, 1 claro, 2 médio, 3 tinta.
 * Desenhados aqui a partir dos nossos temas (olho, lente, escudo); nenhum asset de terceiros.
 */
export type DotGrid = number[][]

function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Olho que emerge da grade cheia: a "inteligência humana" do hero. */
export function eyePattern(cols = 34, rows = 28): DotGrid {
  const grid: DotGrid = []
  for (let y = 0; y < rows; y++) {
    const row: number[] = []
    for (let x = 0; x < cols; x++) {
      const u = ((x + 0.5) / cols) * 2 - 1
      const v = (((y + 0.5) / rows) * 2 - 1) * (rows / cols)
      const lid = 0.42 * Math.max(0, 1 - u * u) ** 0.9
      const d = Math.hypot(u, v)
      let level: number
      if (Math.abs(v) >= lid) {
        level = Math.abs(v) < lid + 0.06 && Math.abs(u) < 1 ? 0 : 3
      } else if (Math.hypot(u - 0.11, v + 0.09) < 0.06) {
        level = 0
      } else if (d < 0.15) {
        level = 3
      } else if (d < 0.31) {
        const a = Math.atan2(v, u)
        level = Math.cos(a * 9) > 0.15 ? 2 : 1
      } else if (d < 0.37) {
        level = 3
      } else {
        level = 0
      }
      row.push(level)
    }
    grid.push(row)
  }
  return grid
}

/** Relevo de quadrados que sobe para a direita (faixa escura de chamada). */
export function terrainPattern(cols = 64, rows = 22, seed = 7): DotGrid {
  const rand = mulberry32(seed)
  const grid: DotGrid = Array.from({ length: rows }, () => Array(cols).fill(0))
  for (let x = 0; x < cols; x++) {
    const t = x / (cols - 1)
    const h =
      rows *
      (0.06 + 0.86 * t ** 1.5 + 0.07 * Math.sin(x * 0.45) + 0.05 * Math.sin(x * 0.17 + 1.3) + 0.04 * Math.sin(x * 1.1))
    const top = rows - Math.max(1, Math.round(h))
    for (let y = Math.max(0, top); y < rows; y++) {
      const depth = y - top
      // borda de cima rarefeita, miolo cheio
      const keep = depth > 2 ? 0.97 : depth > 0 ? 0.7 : 0.45
      if (rand() < keep) grid[y][x] = depth > 5 && rand() < 0.35 ? 2 : 1
    }
  }
  return grid
}

/** Converte desenho em texto ("#" tinta, "+" médio, "." claro, espaço vazio) em grade. */
function art(lines: string[]): DotGrid {
  const width = Math.max(...lines.map((l) => l.length))
  return lines.map((line) =>
    Array.from(line.padEnd(width, " ")).map((ch) => (ch === "#" ? 3 : ch === "+" ? 2 : ch === "." ? 1 : 0)),
  )
}

/** Perceber: o olho. */
export const ICON_EYE = art([
  "               ",
  "               ",
  "               ",
  "     #####     ",
  "   ##+++++##   ",
  "  #++  #  ++#  ",
  " #+   ###   +# ",
  "#+   ## ##   +#",
  " #+   ###   +# ",
  "  #++  #  ++#  ",
  "   ##+++++##   ",
  "     #####     ",
  "               ",
  "               ",
  "               ",
])

/** Avaliar: a lente. */
export const ICON_LENS = art([
  "               ",
  "    #####      ",
  "  ##+++++##    ",
  "  #+     +#    ",
  " #+   .   +#   ",
  " #+  ...  +#   ",
  " #+   .   +#   ",
  "  #+     +#    ",
  "  ##+++++##    ",
  "    ######     ",
  "        ###    ",
  "         ###   ",
  "          ###  ",
  "           ### ",
  "            #  ",
])

/** Proteger: o escudo. */
export const ICON_SHIELD = art([
  "       #       ",
  "     ##+##     ",
  "   ##+++++##   ",
  " ##+++++++++## ",
  " #+++++++++++# ",
  " #+++++#+++++# ",
  " #++++###++++# ",
  " #++++###++++# ",
  " #+++++#+++++# ",
  " #+++++#+++++# ",
  "  #++++#++++#  ",
  "  ##+++++++##  ",
  "   ##+++++##   ",
  "    ##+++##    ",
  "      ###      ",
])

/** Anel elíptico de pontos (hero central da referência, V2): mais grosso nas laterais. */
export function ringPattern(cols = 64, rows = 40): DotGrid {
  const grid: DotGrid = []
  for (let y = 0; y < rows; y++) {
    const row: number[] = []
    for (let x = 0; x < cols; x++) {
      const u = ((x + 0.5) / cols) * 2 - 1
      const v = ((y + 0.5) / rows) * 2 - 1
      const r = Math.hypot(u, v)
      const a = Math.atan2(v, u)
      // espessura maior nas laterais, mínima no topo e na base
      const thickness = 0.1 + 0.12 * Math.abs(Math.cos(a))
      const inner = 1 - thickness
      // falha suave no topo e na base, como um anel que "gira"
      const gap = Math.abs(Math.sin(a)) > 0.985 && Math.abs(r - (1 + inner) / 2) < 0.03
      row.push(r <= 0.995 && r >= inner && !gap ? 3 : 0)
    }
    grid.push(row)
  }
  return grid
}
