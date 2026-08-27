import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: {
  eyebrow: string
  title: string
  updatedAt: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-humint-charcoal text-humint-bone">
      {/* Top bar */}
      <header className="border-b border-humint-bone/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-humint-bone/60 hover:text-humint-amber transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao site
          </Link>
          <img
            src="/logo-mundo-humint.png"
            alt="Mundo da HUMINT"
            className="h-8 w-auto object-contain opacity-90"
          />
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-20">
        <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-humint-amber/80 mb-4">
          {eyebrow}
        </div>
        <h1 className="font-serif text-3xl md:text-5xl leading-[1.08] tracking-tight text-humint-bone text-balance">
          {title}
        </h1>
        <p className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-humint-bone/40">
          Última atualização: {updatedAt}
        </p>

        <div
          className={[
            "mt-10 md:mt-14 text-[15px] leading-relaxed text-humint-bone/70",
            "[&>*+*]:mt-4",
            "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-humint-bone [&_h2]:mt-10 [&_h2]:mb-1 [&_h2:first-child]:mt-0",
            "[&_h3]:font-sans [&_h3]:font-semibold [&_h3]:text-base [&_h3]:text-humint-bone/90 [&_h3]:mt-6",
            "[&_p]:font-light",
            "[&_strong]:font-semibold [&_strong]:text-humint-bone",
            "[&_a]:text-humint-amber [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:opacity-80",
            "[&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-5 [&_ol]:pl-5 [&_ul]:font-light [&_ol]:font-light",
            "[&_li]:mt-2 [&_li]:pl-1 [&_li]:marker:text-humint-amber",
          ].join(" ")}
        >
          {children}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-humint-bone/10 py-10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase text-humint-bone/45">
            <Link href="/termos" className="hover:text-humint-amber transition-colors">
              Termos
            </Link>
            <Link href="/privacidade" className="hover:text-humint-amber transition-colors">
              Privacidade
            </Link>
            <a href="mailto:contato@humint.click" className="hover:text-humint-amber transition-colors">
              Contato
            </a>
          </div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-humint-bone/35">
            © 2026 Mundo da HUMINT
          </div>
        </div>
      </footer>
    </main>
  )
}
