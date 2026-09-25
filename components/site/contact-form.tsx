"use client"

import { useState } from "react"
import { track } from "@/lib/analytics"

const INTENTS = [
  { value: "imprensa", label: "Imprensa" },
  { value: "parcerias", label: "Parcerias" },
  { value: "convites", label: "Convites e palestras" },
  { value: "formacao", label: "Treinamento futuro" },
  { value: "duvidas", label: "Dúvidas gerais" },
] as const

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    intencao: "duvidas",
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
    if (form.mensagem.trim().length < 10) {
      setError("Conte um pouco mais sobre o que precisa (mínimo 10 caracteres).")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erro ao enviar.")
      track("contact_submit", { intent: form.intencao })
      setStatus("success")
      setForm({ nome: "", email: "", intencao: "duvidas", mensagem: "", consent: false })
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Erro desconhecido.")
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="bg-snow-2 p-6 text-ink sm:p-8">
                <h3 className="font-expanded text-heading font-extrabold text-ink">
          Sua mensagem chegou aqui.
        </h3>
        <p className="mt-3 text-ink-2 leading-relaxed">
          Responderemos no e-mail informado. Para imprensa e prazos curtos,
          inclua isso no assunto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ct-nome" className="field-label">
            Nome <span aria-hidden className="text-tone-3">*</span>
          </label>
          <input
            id="ct-nome"
            type="text"
            required
            value={form.nome}
            onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
            className="field"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ct-email" className="field-label">
            E-mail <span aria-hidden className="text-tone-3">*</span>
          </label>
          <input
            id="ct-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="field"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ct-intencao" className="field-label">
          Sobre o que é?
        </label>
        <select
          id="ct-intencao"
          value={form.intencao}
          onChange={(e) => setForm((f) => ({ ...f, intencao: e.target.value }))}
          className="field"
        >
          {INTENTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ct-msg" className="field-label">
          Mensagem <span aria-hidden className="text-tone-3">*</span>
        </label>
        <textarea
          id="ct-msg"
          required
          rows={6}
          value={form.mensagem}
          onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))}
          className="field min-h-36 resize-y"
        />
      </div>

      <label htmlFor="ct-consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-tone-2">
        <input
          id="ct-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-1 h-4 w-4 shrink-0 accent-signal"
        />
        <span>
          Concordo com o uso dos meus dados para responder a esta solicitação,
          conforme nossa Política de Privacidade.
        </span>
      </label>

      {error && (
        <p role="alert" className="text-sm text-signal">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-signal btn-lg self-start"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  )
}
