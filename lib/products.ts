/**
 * Catálogo de produtos digitais — Loja "Mundo da HUMINT".
 * Dados tipados e renderizados pelo grid em /shop.
 * Ordem: do mais acessível ao mais premium.
 */

export interface Product {
  /** Identificador estável (usado como key). */
  id: string
  /** Nome comercial do produto. */
  nome: string
  /** Tipo do entregável, exibido como badge. */
  tipo: "EBOOK" | "CURSO ONLINE"
  /** Preço "de" (ancoragem). Use null quando não houver. */
  precoDe: string | null
  /** Preço atual em destaque. */
  preco: string
  /** Texto de parcelamento. */
  parcelamento: string
  /** Descrição curta (line-clamp na UI). */
  descricao: string
  /** Lista opcional de destaques/módulos. */
  destaques?: string[]
  /** Capa do produto. <!-- trocar pela capa real quando disponível --> */
  image: string
  /** Texto alternativo da capa. */
  imageAlt: string
  /** Link de checkout (HeroSpark). Abre em nova aba. */
  checkoutUrl: string
  /** Página de vendas (detalhes). */
  detalhesUrl: string
  /** Marca o produto premium em destaque. */
  destaque?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "osint-playbook",
    nome: "OSINT Playbook (guia prático)",
    tipo: "EBOOK",
    precoDe: "R$ 250,00",
    preco: "R$ 199,00",
    parcelamento: "ou 12x de R$ 20,60",
    descricao:
      "O ponto de partida para investigar fontes abertas com método. Guia prático para conduzir investigações OSINT com critério, fluxo de raciocínio definido e um arsenal de ferramentas para localizar pessoas, bens e vínculos.",
    image: "/images/shop/osint-playbook.png",
    imageAlt:
      "Mesa de investigação com caderno de anotações, lupa sobre documentos e linhas de conexão entre alfinetes.",
    checkoutUrl:
      "https://pay.herospark.com/osint-playbook-guia-pratico-by-mundo-da-humint-525745",
    detalhesUrl:
      "https://mundodahumint.herospark.co/osint-playbook-guia-pratico-by-mundo-da-humint",
  },
  {
    id: "engenharia-social",
    nome: "Fundamentos de Engenharia Social: Princípios de Campo",
    tipo: "CURSO ONLINE",
    precoDe: null,
    preco: "R$ 199,00",
    parcelamento: "ou 12x de R$ 20,60",
    descricao:
      "Enxergue o 'jogo' social e domine as técnicas que mais importam. Curso direto ao ponto em três frentes: os fundamentos da persuasão, a aplicação prática em pentest físico e a defesa contra tentativas de manipulação.",
    destaques: ["Parte 1 — Os Fundamentos", "Parte 2 — Pentest Físico", "Parte 3 — Defesa"],
    image: "/images/shop/engenharia-social.png",
    imageAlt:
      "Corredor corporativo à noite visto por uma porta de vidro, com crachá de acesso sobre uma mesa.",
    checkoutUrl:
      "https://pay.herospark.com/fundamentos-de-engenharia-social-principios-de-campo-525751",
    detalhesUrl:
      "https://mundodahumint.herospark.co/fundamentos-de-engenharia-social-principios-de-campo",
  },
  {
    id: "acervo-tatico",
    nome: "Acervo Tático de Inteligência Humana",
    tipo: "CURSO ONLINE",
    precoDe: "R$ 1.290,00",
    preco: "R$ 960,00",
    parcelamento: "ou 12x de R$ 99,30",
    descricao:
      "O programa completo de HUMINT — da leitura de pessoas à operação real. 9 módulos que percorrem toda a cadeia da inteligência humana, do comportamento às ferramentas operacionais.",
    destaques: [
      "Mecânicas do Comportamento",
      "Comunicação e Influência",
      "Linguagem Não Verbal",
      "Guia de Observação Corporal",
      "Elicitação",
      "Contrainteligência e OPSEC",
      "Fontes de Informação",
      "Ferramentas Operacionais",
    ],
    image: "/images/shop/acervo-tatico.png",
    imageAlt:
      "Dossiê de inteligência organizado: pastas confidenciais empilhadas, ficha de caso e gráficos de análise comportamental.",
    checkoutUrl: "https://pay.herospark.com/acervo-tatico-de-inteligencia-humana-525712",
    detalhesUrl: "https://mundodahumint.herospark.co/acervo-tatico-de-inteligencia-humana",
    destaque: true,
  },
]

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
