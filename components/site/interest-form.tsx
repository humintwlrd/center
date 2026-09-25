"use client"

import Link from "next/link"
import { useState } from "react"
import { track } from "@/lib/analytics"

type Status = "idle" | "loading" | "success" | "error"

export function InterestForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    perfil: "",
    interesse: "fundamentos",
    consent: false,
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!form.consent) {
      setError("É necessário concordar com o tratamento dos dados.")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "formacao" }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erro ao enviar.")
      track("course_interest_submit", { area: form.interesse })
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Erro desconhecido.")
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="bg-snow-2 p-6 text-ink sm:p-8">
                <h3 className="font-expanded text-heading font-extrabold text-ink">
          Você está na lista de interesse.
        </h3>
        <p className="mt-3 text-ink-2 leading-relaxed">
          Vamos avisar com antecedência sobre aulas abertas, workshops e abertura de turmas.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="if-nome" className="field-label">
            Nome <span aria-hidden className="text-signal">*</span>
          </label>
          <input
            id="if-nome"
            required
            value={form.nome}
            onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
            className="field"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="if-email" className="field-label">
            E-mail <span aria-hidden className="text-signal">*</span>
          </label>
          <input
            id="if-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="field"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="if-perfil" className="field-label">
          Sua atuação
        </label>
        <input
          id="if-perfil"
          value={form.perfil}
          onChange={(e) => setForm((f) => ({ ...f, perfil: e.target.value }))}
          placeholder="Ex.: compliance, jornalismo, pesquisa, segurança"
          className="field"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="if-interesse" className="field-label">
          Tema de maior interesse
        </label>
        <select
          id="if-interesse"
          value={form.interesse}
          onChange={(e) => setForm((f) => ({ ...f, interesse: e.target.value }))}
          className="field"
        >
          <option value="fundamentos">Fundamentos de HUMINT</option>
          <option value="entrevista">Entrevista e elicitação</option>
          <option value="validacao">Validação de fontes</option>
          <option value="contexto">Leitura de contexto</option>
          <option value="osint">HUMINT e OSINT</option>
        </select>
      </div>

      <label htmlFor="if-consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-tone-2">
        <input
          id="if-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className="mt-1 h-4 w-4 shrink-0 accent-signal"
        />
        <span>
          Concordo em receber comunicações sobre a formação do Mundo da HUMINT.
          Posso revogar a qualquer momento. Li a{" "}
          <Link href="/politica-de-privacidade" className="text-tone underline decoration-signal underline-offset-2 hover:decoration-2">
            Política de Privacidade
          </Link>
          .
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
        {status === "loading" ? "Enviando…" : "Entrar na lista de interesse"}
      </button>
    </form>
  )
}
