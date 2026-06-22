/**
 * Catálogo de produtos digitais — Loja "Mundo da HUMINT".
 * Dados tipados e renderizados pelo grid em /shop e nas páginas /shop/[slug].
 * Ordem: por destaque (carro-chefe primeiro).
 */

export interface Product {
  /** Identificador estável e slug da página (/shop/[id]). */
  id: string
  /** Nome comercial do produto. */
  nome: string
  /** Tipo do entregável, exibido como tag (ex.: "Curso completo", "Curso", "Ebook"). */
  tipo: string
  /** Selo de destaque opcional (ex.: "Mais vendido"). */
  badge?: string
  /** Preço atual em destaque. */
  preco: string
  /** Preço "de" (ancoragem). Opcional. */
  precoDe?: string | null
  /** Descrição curta (1–2 linhas no card). */
  descricao: string
  /** Destaques curtos exibidos como chips no card. */
  destaques?: string[]
  /** Ementa / currículo completo (exibido na página do produto). */
  ementa?: string[]
  /** Capa do produto. */
  image: string
  /** Texto alternativo da capa. */
  imageAlt: string
  /** Link de checkout (HeroSpark). Abre em nova aba. Aceita Cartão e Pix. */
  checkoutUrl: string
  /** Marca o produto carro-chefe em destaque. */
  destaque?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "acervo-tatico",
    nome: "Acervo Tático de Inteligência Humana",
    tipo: "Curso completo",
    badge: "Mais vendido",
    preco: "R$ 900,00",
    descricao:
      "O acervo definitivo de HUMINT: 9 módulos cobrindo mecânicas do comportamento, comunicação e influência, linguagem não verbal, elicitação, contrainteligência e OPSEC, fontes de informação e ferramentas operacionais.",
    destaques: [
      "Mecânicas do Comportamento",
      "Comunicação e Influência",
      "Linguagem Não Verbal",
      "Elicitação",
      "Contrainteligência e OPSEC",
    ],
    ementa: [
      "Comece por aqui",
      "01 · Mecânicas do Comportamento",
      "02 · Comunicação e Influência",
      "03 · Linguagem Não Verbal",
      "04 · Guia de Observação de Linguagem Corporal",
      "05 · Elicitação (inclui as “36 perguntas de Aron”)",
      "06 · Contrainteligência e OPSEC",
      "07 · Fontes de Informação",
      "08 · Ferramentas Operacionais",
    ],
    image: "/images/shop/acervo-tatico.png",
    imageAlt:
      "Dossiê de inteligência organizado: pastas confidenciais empilhadas, ficha de caso e gráficos de análise comportamental.",
    checkoutUrl:
      "https://pay.herospark.com/acervo-tatico-de-inteligencia-humana-525712",
    destaque: true,
  },
  {
    id: "engenharia-social",
    nome: "Fundamentos de Engenharia Social: Princípios de Campo",
    tipo: "Curso",
    preco: "R$ 120,00",
    descricao:
      "Curso de campo sobre engenharia social: os fundamentos, pentest físico e estratégias de defesa.",
    destaques: ["Os Fundamentos", "Pentest Físico", "Defesa"],
    ementa: [
      "Parte 1 · Os Fundamentos",
      "Parte 2 · Pentest Físico",
      "Parte 3 · Defesa",
    ],
    image: "/images/shop/engenharia-social.png",
    imageAlt:
      "Corredor corporativo à noite visto por uma porta de vidro, com crachá de acesso sobre uma mesa.",
    checkoutUrl:
      "https://pay.herospark.com/fundamentos-de-engenharia-social-principios-de-campo-525751",
  },
  {
    id: "osint-playbook",
    nome: "OSINT Playbook (guia prático)",
    tipo: "Ebook",
    preco: "R$ 70,00",
    descricao:
      "Guia prático de OSINT: técnicas e fluxo de trabalho para investigação de fontes abertas, em formato ebook (PDF).",
    image: "/images/shop/osint-playbook.png",
    imageAlt:
      "Mesa de investigação com caderno de anotações, lupa sobre documentos e linhas de conexão entre alfinetes.",
    checkoutUrl:
      "https://pay.herospark.com/osint-playbook-guia-pratico-by-mundo-da-humint-525745",
  },
]

/** Busca um produto pelo slug (id). */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === slug)
}

export interface Combo {
  id: string
  titulo: string
  /** Frase curta de valor. */
  texto: string
  /** Produto que entra com desconto. */
  itemComDesconto: string
  precoDe: string
  preco: string
  desconto: string
  /** Checkout aponta para o produto âncora (Acervo Tático), onde a oferta aparece. */
  checkoutUrl: string
}

export const COMBOS: Combo[] = [
  {
    id: "acervo-eng-social",
    titulo: "Acervo Tático + Fundamentos de Eng. Social",
    texto: "Some leitura de pessoas com princípios de campo.",
    itemComDesconto: "Fundamentos de Engenharia Social",
    precoDe: "R$ 199,00",
    preco: "R$ 70,00",
    desconto: "65% OFF",
    checkoutUrl: "https://pay.herospark.com/acervo-tatico-de-inteligencia-humana-525712",
  },
  {
    id: "acervo-osint",
    titulo: "Acervo Tático + OSINT Playbook",
    texto: "Inteligência humana + investigação em fontes abertas.",
    itemComDesconto: "OSINT Playbook",
    precoDe: "R$ 199,00",
    preco: "R$ 119,00",
    desconto: "40% OFF",
    checkoutUrl: "https://pay.herospark.com/acervo-tatico-de-inteligencia-humana-525712",
  },
]
