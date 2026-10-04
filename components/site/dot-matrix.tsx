import type { DotGrid } from "@/lib/dot-patterns"
import { cn } from "@/lib/utils"

type Palette = [string, string, string]

const PALETTES: Record<"light" | "dark" | "soft" | "inverse", Palette> = {
  light: ["#e3e3e3", "#ababab", "#161616"],
  soft: ["#f3f3f3", "#e3e3e3", "#cfcfcf"],
  dark: ["#262626", "#323232", "#505050"],
  inverse: ["#3a3a3a", "#6b6b6b", "#ffffff"],
}

type DotMatrixProps = {
  grid: DotGrid
  tone?: keyof typeof PALETTES
  /** Lado do quadrado em relação ao passo da grade. */
  fill?: number
  /** Pontos que piscam devagar (determinístico). */
  twinkle?: number
  /** Revela a grade linha a linha ao carregar. */
  wipe?: boolean
  className?: string
  title?: string
}

/**
 * Ilustração em matriz de quadrados (assinatura visual da referência), em SVG:
 * um path por tom, sem imagem. Decorativa por padrão (aria-hidden).
 */
export function DotMatrix({ grid, tone = "light", fill = 0.62, twinkle = 0, wipe = false, className, title }: DotMatrixProps) {
  const rows = grid.length
  const cols = grid[0]?.length ?? 0
  const pitch = 10
  const size = +(pitch * fill).toFixed(2)
  const inset = +((pitch - size) / 2).toFixed(2)
  const palette = PALETTES[tone]
  const paths: string[] = ["", "", ""]
  const cells: [number, number][] = []

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const level = grid[y][x]
      if (!level) continue
      paths[level - 1] += `M${x * pitch + inset} ${y * pitch + inset}h${size}v${size}h-${size}z`
      cells.push([x, y])
    }
  }

  // escolhe pontos de brilho espalhados, sempre os mesmos
  const sparks: [number, number][] = []
  if (twinkle > 0 && cells.length) {
    const step = Math.max(1, Math.floor(cells.length / twinkle))
    for (let i = 0; i < twinkle; i++) sparks.push(cells[(i * step + ((i * 7919) % step)) % cells.length])
  }

  return (
    <svg
      viewBox={`0 0 ${cols * pitch} ${rows * pitch}`}
      className={cn("block h-auto w-full", wipe && "dot-wipe", className)}
      style={wipe ? { ["--rows" as string]: rows } : undefined}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      shapeRendering="crispEdges"
    >
      {paths.map((d, i) => (d ? <path key={i} d={d} fill={palette[i]} /> : null))}
      {sparks.map(([x, y], i) => (
        <rect
          key={`s${i}`}
          x={x * pitch + inset}
          y={y * pitch + inset}
          width={size}
          height={size}
          fill={i % 3 === 0 ? "#ffffff" : "#ababab"}
          className="dot-spark"
          style={{ ["--o" as string]: i % 3 === 0 ? 1 : 0.8, animationDelay: `${(i * 613) % 4000}ms` }}
        />
      ))}
    </svg>
  )
}
