import type { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
  title: "Suporte · Mundo da HUMINT",
  description:
    "Precisa de ajuda com o Acervo Tático HUMINT? Fale com nosso suporte por e-mail ou diretamente pelo WhatsApp.",
}

const SUPPORT_EMAIL = "mundodahumint@pm.me"
const WHATSAPP_NUMBER = "551131641004"
const WHATSAPP_DISPLAY = "+55 11 3164-1004"
const WHATSAPP_MESSAGE = "Ola! Preciso de ajuda com o Acervo Tatico HUMINT."
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-humint-charcoal text-humint-bone flex flex-col">
      {/* Top bar */}
      <header className="border-b border-humint-bone/10">
        <div className="mx-auto max-w-3xl px-5 md:px-8 py-5 flex items-center justify-center">
          <img
            src="/logo-mundo-humint.png"
            alt="Mundo da HUMINT"
            className="h-8 w-auto object-contain opacity-90"
          />
        </div>
      </header>

      {/* Content */}
      <section className="flex-1 mx-auto w-full max-w-3xl px-5 md:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        <h1 className="font-serif text-3xl md:text-5xl leading-[1.08] tracking-tight text-humint-bone text-balance">
          Como podemos ajudar?
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-humint-bone/70 font-light text-pretty">
          Dúvidas sobre acesso ao acervo, pagamento, garantia ou conteúdo? Nosso time responde por dois
          canais. Escolha o que for mais prático para você.
        </p>

        {/* Channels */}
        <div className="mt-10 md:mt-12 grid w-full gap-5 sm:grid-cols-2">
          {/* WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center rounded-2xl border border-humint-bone/10 bg-humint-graphite/60 p-7 transition-all duration-300 hover:border-humint-amber/40 hover:bg-humint-graphite"
          >
            <div className="flex h-12 w-12 items-center justify-center">
              <img src="/icon-whatsapp.png" alt="WhatsApp" className="h-11 w-11 object-contain" />
            </div>
            <h2 className="mt-5 font-serif text-2xl leading-tight text-humint-bone">Suporte por WhatsApp</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-humint-bone/60 font-light">
              Atendimento direto e mais rápido para resolver sua solicitação.
            </p>
            <span className="mt-4 font-mono text-[12px] tracking-[0.12em] text-humint-bone/75">
              {WHATSAPP_DISPLAY}
            </span>
            <span className="mt-6 inline-flex items-center justify-center rounded-lg border border-humint-bone/20 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase font-bold text-humint-bone transition-colors group-hover:border-humint-amber/50 group-hover:text-humint-amber">
              Falar no WhatsApp
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="group flex flex-col items-center text-center rounded-2xl border border-humint-bone/10 bg-humint-graphite/60 p-7 transition-all duration-300 hover:border-humint-amber/40 hover:bg-humint-graphite"
          >
            <div className="flex h-12 w-12 items-center justify-center">
              <img src="/icon-gmail.png" alt="Gmail" className="h-11 w-11 object-contain" />
            </div>
            <h2 className="mt-5 font-serif text-2xl leading-tight text-humint-bone">Suporte por e-mail</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-humint-bone/60 font-light">
              Ideal para anexos, comprovantes e solicitações mais detalhadas.
            </p>
            <span className="mt-4 font-mono text-[12px] tracking-[0.12em] text-humint-bone/75 break-all">
              {SUPPORT_EMAIL}
            </span>
            <span className="mt-6 inline-flex items-center justify-center rounded-lg border border-humint-bone/20 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase font-bold text-humint-bone transition-colors group-hover:border-humint-amber/50 group-hover:text-humint-amber">
              Enviar e-mail
            </span>
          </a>
        </div>
      </section>

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
            <Link href="/suporte" className="hover:text-humint-amber transition-colors">
              Suporte
            </Link>
          </div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-humint-bone/35">
            © 2026 Mundo da HUMINT
          </div>
        </div>
      </footer>
    </main>
  )
}
