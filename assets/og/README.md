# Fontes da imagem social (OG)

O `app/opengraph-image.tsx` (home e páginas sem OG próprio) usa a **Inter Tight**
(Copyright 2022 The Inter Tight Project Authors, https://github.com/googlefonts/inter-tight),
licenciada sob a SIL Open Font License 1.1 (https://openfontlicense.org). Instâncias estáticas
baixadas do Google Fonts, porque o `ImageResponse` não aceita fontes variáveis nem woff2.

- `inter-tight-500.ttf`: wght 500 (títulos)
- `inter-tight-400.ttf`: wght 400 (texto)

A `/pv` continua no visual anterior (`.world-legacy`) e o `app/pv/opengraph-image.tsx` segue com a
**Archivo** (Copyright 2020 The Archivo Project Authors, https://github.com/Omnibus-Type/Archivo, OFL 1.1):

- `archivo-800-expanded.ttf`: wght 800, wdth 125 (títulos)
- `archivo-400.ttf`: wght 400, wdth 100 (texto)
- `acervo-tatico-cover.jpg`: capa do Acervo (de `public/images/shop/acervo-tatico.webp`) para o OG da /pv
