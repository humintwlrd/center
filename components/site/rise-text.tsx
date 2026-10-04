import { Fragment } from "react"

type RiseTextProps = {
  text: string
  /** Atraso inicial em ms. */
  delay?: number
}

/**
 * Manchete cujas palavras sobem de uma máscara ao carregar (interação da referência).
 * Só CSS: sem JS o texto aparece igual; com movimento reduzido, aparece parado.
 */
export function RiseText({ text, delay = 0 }: RiseTextProps) {
  const words = text.split(" ")
  return (
    <span className="words-rise" style={{ ["--d" as string]: `${delay}ms` }}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span style={{ ["--i" as string]: i }}>{word}</span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  )
}
