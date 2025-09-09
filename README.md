# Clínica Grand House

Site institucional da clínica de saúde mental **Clínica Grand House**. O projeto foi desenvolvido com [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/) e estilizado com [Tailwind CSS 4](https://tailwindcss.com/), permitindo uma landing page rápida e responsiva.

## Tecnologias
- [Next.js](https://nextjs.org/) 15 com a pasta `app/`
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) para padronização do código

## Estrutura do projeto
Principais arquivos e diretórios:

```
.
├── next.config.ts        # Configurações do Next.js
├── postcss.config.mjs    # Configuração do Tailwind/PostCSS
├── public/               # Arquivos estáticos
├── src/
│   └── app/
│       ├── layout.tsx    # Layout global e metadados
│       ├── page.tsx      # Composição da página inicial
│       └── components/
│           ├── Header.tsx
│           ├── Footer.tsx
│           └── sections/ # Hero, Sobre, Tratamentos, Equipe, etc.
└── tsconfig.json         # Configuração TypeScript
```

O repositório também contém um arquivo `boilerplate.html` em `src/app` que serviu como protótipo estático.

## Como começar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts úteis
- `npm run dev` – inicia o servidor de desenvolvimento com Turbopack
- `npm run build` – gera a build de produção
- `npm run start` – executa a versão compilada
- `npm run lint` – roda o ESLint para verificar o código

## Deploy
O projeto pode ser publicado facilmente na [Vercel](https://vercel.com/). Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para outros provedores.

## Contribuição
Contribuições são bem-vindas! Abra uma issue ou pull request com sugestões e melhorias.
