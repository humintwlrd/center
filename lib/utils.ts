import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Ensina ao tailwind-merge a escala tipográfica do design system
// (app/globals.css). Sem isso, `text-display-xl` é tratado como cor e
// descartado quando combinado com `text-ink`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display-2xl', 'display-xl', 'display-lg', 'display-md', 'display-sm', 'lede'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
