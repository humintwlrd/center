# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Seguidor do Instagram (primário):** chega pelo perfil @mundodahumint, curioso por espionagem e inteligência humana, e quer aplicar leitura de pessoas no dia a dia (negociação, influência, proteção contra manipulação). Compra o Acervo Tático ou dossiês avulsos.
- **Profissional que investiga (primário):** investigador, analista de compliance, jornalista, segurança corporativa, advogado. Precisa de método para avaliar pessoas e fontes no trabalho.

As duas audiências têm o mesmo peso. *(Inferido, não confirmado: por virem do Instagram, a maioria acessa pelo celular.)*

## Product Purpose

Mundo da HUMINT é uma publicação e uma escola de inteligência humana aplicada, em português. O trabalho número 1 do site é **vender a Academy** (Acervo Tático e dossiês). Os artigos, casos e métodos existem para gerar confiança e conduzir à compra. Sucesso é conversão em compra no checkout HeroSpark.

## Positioning

Método de inteligência humana extraído de práticas e documentos de serviços de inteligência, traduzido para decisões civis (negociação, avaliação de pessoas, proteção de informação), com limites éticos explícitos: não ensina coação, fraude ou manipulação. O enquadramento é o de um acervo confidencial, rastreável e entregue por etapas.

## Operating Context

- Tráfego vem do Instagram (344 posts convertidos em artigos pelo pipeline `data/instagram-export.json` → `lib/content/instagram-articles.generated.ts`).
- Compra acontece fora do site, no checkout HeroSpark, aberto em nova aba; Cartão e Pix.
- Acesso ao produto é por e-mail, em área de membros externa; `/comoaproveitar` é aberto de dentro dela.
- `/pv` é a página de vendas do Acervo usada em campanhas pagas (pixel Utmify/Meta).

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS v4, pnpm; deploy automático na Vercel a partir da `main`.
- Catálogo em `lib/products.ts`: Acervo Tático (12x R$ 93,09), Engenharia Social (12x R$ 12,41), Dossiês 01–06 (12x R$ 19,65 cada). Cards mostram só o valor parcelado com selo Cartão · Pix.
- `/lp` ("Como Avaliar Pessoas", R$ 49) ainda não tem checkout real. O link entra pela variável `NEXT_PUBLIC_LP_CHECKOUT_URL` na Vercel; sem ela, a página fica `noindex` e os botões levam à oferta.
- Preço e checkout da `/pv` vêm do catálogo (`ACERVO` em `lib/products.ts`), a mesma fonte da loja. Antes a `/pv` anunciava 12x R$ 99,30 / R$ 960; se o HeroSpark cobrar outro valor, corrija só o catálogo.
- Domínio: `mundodahumint.com` e `mundodahumint.com.br` apontam para o mesmo projeto na Vercel. O canônico sai de `NEXT_PUBLIC_SITE_URL` (padrão `https://www.mundodahumint.com.br`), e o pixel da Utmify dispara nos dois.

## Brand Commitments

- **Logo atual** "Mundo da HUMINT" com o ícone de cérebro (`public/images/brand/`), mantido como está.
- **Capas dos produtos** em estilo dossiê sépia (`public/images/shop/*.webp`), mantidas como estão.
- O enquadramento **"acervo confidencial / material catalogado e rastreável"** faz parte da identidade.
- **Não citar o instrutor nem o anonimato dele** no site (decisão do dono em 2026-09-25): nada de "instrutor anônimo" ou "o foco está no método, não em quem ensina". Nome e rosto também não aparecem.
- Paleta: não há compromisso (a escolha anterior de preto/branco + verde foi liberada).
- **Preferência permanente (escolhida pelo usuário):** o padrão da categoria, feito a sério e sem ironia, no nível de acabamento das melhores referências internacionais do nicho, pesquisadas em set/2026:
  - **MasterClass, "The Art of Intelligence"**: página de curso guiada por credencial, cinematográfica, com lista de capítulos. É a régua de estrutura de venda.
  - **CIA.gov (rebrand 2021)**: monocromático com um acento vermelho, grotesca estendida pesada (GT America Expanded) e serifada só para citações. É a régua de identidade e escala tipográfica.
  - **SPYSCAPE (identidade da SomeOne)**: a tarja como sistema tipográfico, com letras parcialmente ocultas, e "question everything". É a régua para expressar o "confidencial" sem clichê de carimbo.
  - **Bletchley Park (Rose Design)**: identidade derivada de um artefato real (a fita de telegrama interceptada). É a régua de motivo gráfico com origem verdadeira.
  - Consultadas também: International Spy Museum, EverydaySpy, Black Swan Group, NCI University (anti-referência de tom: "weapons-grade", hype), Bellingcat e as exposições "Top Secret" (Science Museum) e "Spies, Lies and Deception" (IWM).

## Evidence on Hand

- 7 depoimentos reais em captura de DM (`public/images/pv/testimonials/1–7.webp`), com nomes borrados.
- 9 artigos editoriais longos com fontes citadas e 344 artigos curtos vindos do Instagram (capas verticais 9:16 com texto sobreposto).
- Imagens editoriais quadradas (`public/images/editorial/`, `public/images/cases/`) e mockup da área de membros (`public/images/pv/members-area-mockup-v2.webp`).
- **Ausentes (não inventar):** nome ou rosto do instrutor, número de alunos, imprensa, certificações, métricas de resultado.

## Product Principles

1. Toda página serve à compra: o conteúdo prova método, a Academy entrega o método.
2. Provar, não prometer: casos reais, fontes, depoimentos reais; nenhuma alegação que os dados não sustentem.
3. Discrição é parte do produto: tom confidencial, sem expor nem comentar quem ensina, sem sensacionalismo.
4. Ética explícita: leitura e proteção, nunca manipulação.
5. Celular primeiro *(inferido do tráfego do Instagram)*: o visitante chega de um post e decide em poucos segundos.
