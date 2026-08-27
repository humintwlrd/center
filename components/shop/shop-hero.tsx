/**
 * Hero curto da loja. Identidade editorial dramática (fundo escuro + filete dourado),
 * coerente com as seções escuras do site (bg-deep / gold).
 */
export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-deep">
      {/* Detalhe geométrico sutil: grade de pontos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Filete diagonal de destaque */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-px rotate-12 bg-gold/30"
      />

      <div className="container-editorial relative py-16 sm:py-20 lg:py-24">
        <p className="eyebrow-gold mb-4">Loja · Mundo da HUMINT</p>
        <h1 className="max-w-3xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-paper text-balance sm:text-5xl lg:text-6xl">
          Arsenal do Mundo da HUMINT
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-warm sm:text-lg">
          Cursos e guias práticos de inteligência humana, OSINT e engenharia social.
          Escolha seu próximo nível.
        </p>
      </div>

      {/* Filete dourado de base */}
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
    </section>
  )
}
