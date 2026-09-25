import Link from "next/link"
import type { ReactNode } from "react"
import { PageHeader } from "@/components/site/page-header"

const DOCUMENTS = [
  { label: "Termos de uso", href: "/termos" },
  { label: "Política de privacidade", href: "/privacidade" },
  { label: "Privacidade do site editorial", href: "/politica-de-privacidade" },
  { label: "Princípios editoriais", href: "/principios-editoriais" },
]

/**
 * Documento legal renderizado dentro do layout do site
 * (sem header/footer próprios): abertura padrão + texto em doc-prose.
 */
export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  path,
  children,
}: {
  eyebrow: string
  title: string
  updatedAt: string
  /** Caminho da página, para a trilha e o índice lateral. */
  path?: string
  children: ReactNode
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow.replace(/^\/\s*/, "")}
        title={title}
        breadcrumbs={path ? [{ label: title, href: path }] : undefined}
      >
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted">
          Última atualização: {updatedAt}
        </p>
      </PageHeader>

      <div className="bg-paper">
        <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3" aria-label="Documentos">
            <nav className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Documentos</p>
              <ul className="border-t border-ink">
                {DOCUMENTS.map((doc) => {
                  const active = doc.href === path
                  return (
                    <li key={doc.href} className="border-b border-line">
                      <Link
                        href={doc.href}
                        aria-current={active ? "page" : undefined}
                        className={
                          active
                            ? "flex items-center justify-between py-3 text-sm font-medium text-ink"
                            : "flex items-center justify-between py-3 text-sm text-ink-muted transition-colors hover:text-ink"
                        }
                      >
                        {doc.label}
                        {active && <span aria-hidden className="h-1.5 w-1.5 bg-brand" />}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>

          <article className="doc-prose min-w-0 max-w-[70ch] lg:col-span-8 lg:col-start-5">{children}</article>
        </div>
      </div>
    </>
  )
}
