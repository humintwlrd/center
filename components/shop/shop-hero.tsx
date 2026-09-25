import { Zap, CreditCard, Target } from "lucide-react"

type Props = {
  courses: number
  ebooks: number
}

const TRUST = [
  { icon: Zap, title: "Acesso imediato", desc: "Material liberado na hora da compra." },
  { icon: CreditCard, title: "Cartão · Pix", desc: "À vista no Pix ou parcelado no cartão." },
  { icon: Target, title: "Para aplicar", desc: "Método prático, do comportamento à operação." },
]

/** Abertura da Academy: fundo escuro, alinhada à esquerda, com números reais do catálogo. */
export function ShopHero({ courses, ebooks }: Props) {
  return (
    <header className="surface-deep border-b border-line-dark">
      <div className="container-editorial grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="kicker">Mundo da HUMINT Academy</p>
          <h1 className="mt-6 font-display text-display-2xl font-medium text-fog">
            Inteligência humana, do estudo à operação.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lede text-fog-muted">
            Cursos e materiais operacionais para sair da teoria e aplicar de verdade: comportamento,
            comunicação, elicitação, contrainteligência e fontes.
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <dt className="eyebrow">Cursos</dt>
              <dd className="mt-1 font-display text-4xl font-medium text-fog">{courses}</dd>
            </div>
            <div>
              <dt className="eyebrow">Dossiês</dt>
              <dd className="mt-1 font-display text-4xl font-medium text-fog">{ebooks}</dd>
            </div>
            <div>
              <dt className="eyebrow">Garantia</dt>
              <dd className="mt-1 font-display text-4xl font-medium text-fog">7 dias</dd>
            </div>
          </dl>
        </div>

        <ul className="self-end border-t border-line-dark lg:col-span-4 lg:col-start-9">
          {TRUST.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="flex items-start gap-4 border-b border-line-dark py-5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-bright" aria-hidden />
              <div>
                <p className="font-medium text-fog">{title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-fog-muted">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
