import type { Metadata } from "next"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: `Assinar · ${SITE.name}`,
  description: "Em breve.",
}

export default function AssinarPage() {
  return (
    <main className="bg-paper min-h-[70vh] flex items-center justify-center">
      <div className="container-editorial py-20 md:py-28 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-active mb-4">
          Assinatura
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-ink text-balance">
          Em breve
        </h1>
      </div>
    </main>
  )
}
