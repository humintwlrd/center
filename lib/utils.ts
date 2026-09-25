import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Ensina ao tailwind-merge os papéis tipográficos do design system
// (app/globals.css). Sem isso, `text-display` é tratado como cor e
// descartado quando combinado com uma classe de cor.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['mega', 'display', 'title', 'heading', 'lede'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
