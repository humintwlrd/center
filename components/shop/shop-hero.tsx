/** Abertura da Academy: escura, título estendido, condições de compra numa linha de texto. */
export function ShopHero() {
  return (
    <header className="night border-b border-line-night">
      <div className="container-site pt-16 pb-16 md:pt-24 md:pb-24">
        <h1 className="max-w-[16ch] font-expanded text-mega font-extrabold">
          O método inteiro, em cursos e <span className="redact">dossiês.</span>
        </h1>
        <p className="mt-8 max-w-[52ch] text-lede text-mist">
          Comportamento, comunicação, linguagem não verbal, elicitação, contrainteligência e fontes. Material
          operacional para sair da teoria e aplicar de verdade.
        </p>
        <p className="mt-10 text-mist-2">Acesso imediato · Cartão ou Pix · 7 dias de garantia</p>
      </div>
    </header>
  )
}
