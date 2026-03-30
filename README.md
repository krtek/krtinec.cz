# krtinec.cz

Personal website and blog for [krtinec.cz](https://krtinec.cz), built with SvelteKit 5 and Tailwind CSS v4. Deployed to Vercel.

## Stack

- **[SvelteKit 5](https://kit.svelte.dev/)** — framework (Svelte 5 rune syntax)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Vite 7](https://vite.dev/)** — build tool
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** — YAML frontmatter parsing
- **[marked](https://marked.js.org/)** — Markdown to HTML rendering
- **[Vercel Analytics](https://vercel.com/analytics)** — traffic analytics

## Development

```sh
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
```

## Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start Vite dev server            |
| `npm run build`   | Production build                 |
| `npm run preview` | Preview production build locally |
| `npm run check`   | Type-check with svelte-check     |
| `npm run lint`    | Prettier check + ESLint          |
| `npm run format`  | Format all files with Prettier   |

## Blog Posts

Posts live in `src/posts/` as Markdown files with YAML frontmatter:

```yaml
---
title: Post title
date: 2024-01-01
lang: cs # 'cs' (Czech) or 'en' (English)
tags: [foo, bar]
---
Post content here...
```

## Deployment

Deployed automatically to [Vercel](https://vercel.com) on push to `main` via `@sveltejs/adapter-auto`.
