# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Project Overview

Personal website / blog for krtinec.cz, built with **SvelteKit 5** and **Tailwind CSS v4**.
Static content is served via Vercel. Blog posts are Markdown files with YAML frontmatter,
parsed at request time with `gray-matter` and `marked`.

---

## Package Manager

Use **npm** exclusively. A `package-lock.json` lockfile v3 is committed.

```sh
npm install          # install dependencies
npm ci               # clean install (CI / after pulling changes)
```

---

## Commands

| Task                     | Command               |
| ------------------------ | --------------------- |
| Dev server               | `npm run dev`         |
| Production build         | `npm run build`       |
| Preview production build | `npm run preview`     |
| Type-check               | `npm run check`       |
| Type-check (watch)       | `npm run check:watch` |
| Format (write)           | `npm run format`      |
| Lint + format check      | `npm run lint`        |
| Sync SvelteKit types     | `npm run prepare`     |

### Lint and type-check before committing

```sh
npm run lint && npm run check
```

`npm run lint` runs `prettier --check .` followed by `eslint .`.  
`npm run check` runs `svelte-kit sync` then `svelte-check --tsconfig ./tsconfig.json`.

### Tests

There is currently **no test suite** in this project. No `test` script, no test framework,
no test files. If you add tests, use **Vitest** (already compatible with the Vite setup).
To run a single Vitest test file once one is configured:

```sh
npx vitest run src/path/to/file.test.ts
```

---

## Code Style

### Formatting — Prettier

Config is in `.prettierrc`. All formatting is enforced by Prettier; do not fight it.

- **Indentation**: tabs (not spaces)
- **Quotes**: single quotes (`'`) for JS/TS; double quotes used inside Svelte HTML attributes
- **Trailing commas**: none
- **Print width**: 100 characters
- **Plugins**: `prettier-plugin-svelte` (Svelte files), `prettier-plugin-tailwindcss` (auto-sorts
  Tailwind classes against `./src/app.css`)
- **Svelte parser** is applied automatically for `*.svelte` files

Always run `npm run format` after making changes, or configure your editor to format on save.

### Linting — ESLint

Config is in `eslint.config.js` (ESLint 9 flat config format).

- Uses `@eslint/js` recommended + `typescript-eslint` recommended + `eslint-plugin-svelte` recommended
- `eslint-config-prettier` disables all rules that conflict with Prettier
- `no-undef` is turned off (TypeScript handles this)
- Ignored files are read from `.gitignore` automatically

---

## TypeScript

`tsconfig.json` extends the generated `.svelte-kit/tsconfig.json` and adds:

```json
{
	"strict": true,
	"allowJs": true,
	"checkJs": true,
	"esModuleInterop": true,
	"forceConsistentCasingInFileNames": true,
	"resolveJsonModule": true,
	"skipLibCheck": true,
	"sourceMap": true
}
```

Additional constraints from the generated config (do not override these):

- `"verbatimModuleSyntax": true` — use `import type` for type-only imports
- `"isolatedModules": true` — each file must be independently compilable
- `"moduleResolution": "bundler"` — Vite-style resolution
- Target: `esnext`

### Import style

- Use `import type { Foo }` (not `import { type Foo }`) for type-only imports
- SvelteKit path alias `$lib` maps to `src/lib/`
- No enforced import ordering rule; keep imports grouped logically:
  1. Framework / third-party
  2. `$lib/` aliases
  3. Relative imports

---

## Naming Conventions

| Construct                   | Convention                    | Example                              |
| --------------------------- | ----------------------------- | ------------------------------------ |
| Variables and functions     | `camelCase`                   | `formatDate`, `helvetiPosts`         |
| TypeScript interfaces/types | `PascalCase`                  | `PostMeta`, `PageData`               |
| SvelteKit route files       | SvelteKit convention          | `+page.svelte`, `+page.server.ts`    |
| Dynamic route segments      | bracket notation              | `[slug]/`                            |
| Blog post files             | `YYYY-MM-DD-kebab-slug.md`    | `2018-05-01-hello.md`                |
| Config files                | `camelCase`                   | `svelte.config.js`, `vite.config.ts` |
| CSS                         | Tailwind utility classes only | no custom class names in components  |

---

## Error Handling

- Use SvelteKit's `error()` helper from `@sveltejs/kit` to throw typed HTTP errors in server
  load functions:
  ```ts
  import { error } from '@sveltejs/kit';
  if (!raw) throw error(404, 'Post not found');
  ```
- Prefer **nullish coalescing** and **guard clauses** over try/catch for optional data:
  ```ts
  title: data.title ?? slug,
  date: data.date ? String(data.date).slice(0, 10) : '',
  ```
- Use non-null assertions (`!`) sparingly and only when the type is genuinely certain.
- No try/catch in application code — prevent errors via defaults or surface them via `error()`.
- No custom `+error.svelte` page is defined; SvelteKit's default error boundary is used.

---

## Svelte 5 Specifics

This project uses **Svelte 5 rune syntax**. Do not use legacy Svelte 4 APIs.

- Props: `let { data } = $props();`
- Slots replaced by snippets: `{@render children?.()}`
- Reactivity: `$state`, `$derived`, `$effect` (use only when needed)
- Component script blocks: `<script lang="ts">` always

---

## Styling

- All styling is done with **Tailwind CSS v4** utility classes directly in markup.
- Global CSS and theme tokens are in `src/app.css` using `@import 'tailwindcss'` and `@theme {}`.
- Do not add component-level `<style>` blocks unless absolutely necessary.
- The Ubuntu font is loaded via Google Fonts in `app.css`.

---

## Project Structure

```
src/
  app.css              # Global styles, Tailwind import, theme tokens
  app.d.ts             # SvelteKit ambient type declarations
  app.html             # Root HTML shell
  lib/
    index.ts           # $lib entry point
  posts/               # Markdown blog posts (YYYY-MM-DD-slug.md)
  routes/
    +layout.svelte     # Root layout
    +page.svelte       # Homepage
    blog/
      +page.server.ts  # Blog index loader
      +page.svelte     # Blog index
      [slug]/
        +page.server.ts  # Post loader
        +page.svelte     # Post page
static/                # Static assets (favicon, images, manifest)
```

---

## Blog Posts

Posts live in `src/posts/` as Markdown files with YAML frontmatter:

```yaml
---
title: Post title
date: 2018-05-01
lang: cs # 'cs' (Czech, default) or 'en'
tags: [foo, bar]
---
```

Frontmatter is parsed with `gray-matter`; body HTML is rendered with `marked`.
The `PostMeta` type is defined in `src/routes/blog/+page.server.ts`.

---

## Deployment

- Deployed to **Vercel** via `@sveltejs/adapter-auto`
- `@vercel/analytics` is injected in `+layout.svelte`
- Do not commit `.vercel/` or `.svelte-kit/` — both are gitignored
