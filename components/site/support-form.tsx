"use client"

import { useState } from "react"
import { track } from "@/lib/analytics"

const CATEGORIES = [
  { value: "acesso", label: "Acesso e login" },
  { value: "conteudo", label: "Conteúdo e artigos" },
  { value: "pagamento", label: "Pagamentos e assinatura" },
  { value: "tecnico", label: "Problema técnico" },
  { value: "outro", label: "Outro assunto" },
] as const

type Status = "idle" | "loading" | "success" | "error"

export function SupportForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    categoria: "acesso",
    assunto: "",
    mensagem: "",
    consent: false,
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!form.consent) {
      setError("É necessário concordar com o tratamento dos dados.")
      return
    }
    if (form.assunto.trim().length < 3) {
      setError("Descreva o assunto da sua solicitação.")
      return
    }
    if (form.mensagem.trim().length < 10) {
      setError("Detalhe um pouco mais o que precisa (mínimo 10 caracteres).")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/suporte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erro ao enviar.")
      track("support_submit", { category: form.categoria })
      setStatus("success")
      setForm({ nome: "", email: "", categoria: "acesso", assunto: "", mensagem: "", consent: false })
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Erro desconhecido.")
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="bg-paper-strong border border-gold p-6 sm:p-8">
        <p className="eyebrow-gold mb-2">Recebido</p>
        <h3 className="font-display text-2xl font-semibold text-ink">
          Sua solicitação foi enviada.
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed">
          Nossa equipe responderá no e-mail informado. Solicitações urgentes
          costumam ter prioridade quando o assunto está claro.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sp-nome" className="text-sm font-medium text-ink">
            Nome <span aria-hidden className="text-gold-active">*</span>
          </label>
          <input
            id="sp-nome"
            type="text"
            required
            value={form.nome}
            onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
            className="bg-paper-strong border border-line px-3 py-2.5 text-ink focus:outline-none focus:border-gold"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sp-email" className="text-sm font-medium text-ink">
            E-mail <span aria-hidden className="text-gold-active">*</span>
          </label>
          <input
            id="sp-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="bg-paper-strong border border-line px-3 py-2.5 text-ink focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sp-categoria" className="text-sm font-medium text-ink">
            Categoria
          </label>
          <select
            id="sp-categoria"
            value={form.categoria}
            onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
            className="bg-paper-strong border border-line px-3 py-2.5 text-ink focus:outline-none focus:border-gold"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="sp-assunto" className="text-sm font-medium text-ink">
            Assunto <span aria-hidden className="text-gold-active">*</span>
          </label>
          <input
            id="sp-assunto"
            type="text"
            required
            value={form.assunto}
            onChange={(e) => setForm((f) => ({ ...f, assunto: e.target.value }))}
            className="bg-paper-strong border border-line px-3 py-2.5 text-ink focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="sp-msg" className="text-sm font-medium text-ink">
          Descreva sua solicitação <span aria-hidden className="text-gold-active">*</span>
        </label>
        <textarea
          id="sp-msg"
          required
          rows={6}
          value={form.mensagem}
          onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
          className="bg-paper-strong border border-line px-3 py-2.5 text-ink focus:outline-none focus:border-gold resize-y"
        />
      </div>

      <label htmlFor="sp-consent" className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed cursor-pointer">
        <input
          id="sp-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-1 h-4 w-4 accent-[var(--color-gold)] shrink-0"
        />
        <span>
          Concordo com o uso dos meus dados para responder a esta solicitação,
          conforme nossa Política de Privacidade.
        </span>
      </label>

      {error && (
        <p role="alert" className="text-sm text-alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start bg-gold hover:bg-[var(--color-gold-hover)] disabled:bg-[var(--color-gold-disabled)] px-6 py-3 text-sm font-medium transition-colors"
        style={{ color: "var(--color-on-gold)" }}
      >
        {status === "loading" ? "Enviando…" : "Enviar solicitação"}
      </button>
    </form>
  )
}
