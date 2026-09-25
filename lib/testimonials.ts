/**
 * Depoimentos reais: capturas de mensagens diretas de alunos, com os nomes
 * borrados na própria imagem. Os trechos em `quote` são transcrições literais
 * das capturas (grafia original mantida); não edite o texto.
 */
export type Testimonial = {
  src: string
  alt: string
  quote?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    src: "/images/pv/testimonials/6.webp",
    alt: "Mensagem de aluno dizendo que o material valeu cada centavo e serve para consulta contínua",
    quote:
      "Valeu cada centavo! Pode ser usado para todas as áreas da vida! O desenvolvimento cognitivo, perceptivo, analítico..... é certo. Não é um material para ler uma única vez, porém, para ser consultado sempre.",
  },
  {
    src: "/images/pv/testimonials/4.webp",
    alt: "Mensagem de aluno que comprou no primeiro lote e compraria de novo",
    quote: "Eu comprei no primeiro lote e te digo. Compraria de novo tranquilamente e vou comprar próximos lançamentos.",
  },
  {
    src: "/images/pv/testimonials/5.webp",
    alt: "Mensagem de aluno afirmando que o material vale a pena e abre vários insights",
    quote:
      "Ah, com certeza vale a pena. Mesmo sendo interessado em assuntos semelhantes há mais tempo, o material abre vários insights",
  },
  {
    src: "/images/pv/testimonials/3.webp",
    alt: "Mensagem de aluno elogiando a escrita e dizendo que é algo que não se acha em português",
    quote: "conteúdo bem escrito, leitura interessante e é algo que não se acha em pt-br.",
  },
  {
    src: "/images/pv/testimonials/7.webp",
    alt: "Mensagem de aluno destacando a profundidade técnica e o olhar prático dos dossiês",
    quote: "O material vale muito a pena.",
  },
  {
    src: "/images/pv/testimonials/2.webp",
    alt: "Mensagem de aluno contando a sequência de dossiês que está estudando e o que já percebeu no dia a dia",
  },
  {
    src: "/images/pv/testimonials/1.webp",
    alt: "Mensagem de aluno elogiando o dossiê de Engenharia Social pelas dicas para atuação em campo",
  },
]
