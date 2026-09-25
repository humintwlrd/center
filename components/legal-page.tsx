import Link from "next/link"
import type { ReactNode } from "react"
import { PageHeader } from "@/components/site/page-header"

const DOCUMENTS = [
  { label: "Termos de uso", href: "/termos" },
  { label: "Política de privacidade", href: "/privacidade" },
  { label: "Privacidade do site editorial", href: "/politica-de-privacidade" },
  { label: "Princípios editoriais", href: "/principios-editoriais" },
]

/** Documento legal dentro do layout do site. */
export function LegalPage({
  title,
  updatedAt,
  path,
  children,
}: {
  title: string
  updatedAt: string
  path?: string
  children: ReactNode
}) {
  return (
    <>
      <PageHeader title={title} lede={`Última atualização: ${updatedAt}.`} breadcrumbs={path ? [{ label: title, href: path }] : undefined} />
      <div className="border-t border-line bg-snow text-ink">
        <div className="container-site grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-3" aria-label="Documentos">
            <nav className="lg:sticky lg:top-28">
              <p className="mb-3 font-bold">Documentos</p>
              <ul className="border-t-2 border-ink">
                {DOCUMENTS.map((doc) => {
                  const active = doc.href === path
                  return (
                    <li key={doc.href} className="border-b border-line">
                      <Link
                        href={doc.href}
                        aria-current={active ? "page" : undefined}
                        className={active ? "block py-3 font-semibold text-signal" : "block py-3 text-ink-2 transition-colors hover:text-ink"}
                      >
                        {doc.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>
          <article className="prose-read min-w-0 lg:col-span-8 lg:col-start-5">{children}</article>
        </div>
      </div>
    </>
  )
}
