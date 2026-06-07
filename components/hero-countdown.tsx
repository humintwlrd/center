export function HeroCountdown() {
  return (
    <div className="md:hidden flex justify-center mb-3 reveal">
      <div className="inline-flex items-center gap-2.5 border border-humint-blood/40 bg-humint-blood/[0.07] px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-humint-blood animate-pulse" aria-hidden />
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-humint-blood/80">Encerra 06/06</span>
      </div>
    </div>
  )
}
