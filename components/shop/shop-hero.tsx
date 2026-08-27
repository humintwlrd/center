/**
 * Hero da Academy — estilo editorial "/[Nome] Academy".
 * Fundo escuro (bg-deep) + filete dourado, coerente com as seções premium do site.
 */
export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-full w-px rotate-12 bg-gold/30"
      />
      <div className="container-editorial relative py-16 sm:py-20 lg:py-24">
        <p className="eyebrow-gold mb-4">Academy</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper text-balance sm:text-5xl lg:text-6xl">
          <span className="text-gold">/</span>Mundo da HUMINT Academy
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-warm sm:text-lg">
          Inteligência humana aplicada. Cursos e materiais operacionais para sair da teoria
          e aplicar de verdade.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-warm">
          <span>2 cursos</span>
          <span className="text-gold" aria-hidden>·</span>
          <span>6 dossiês</span>
          <span className="text-gold" aria-hidden>·</span>
          <span>acesso imediato</span>
        </div>
      </div>
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
    </section>
  )
}
