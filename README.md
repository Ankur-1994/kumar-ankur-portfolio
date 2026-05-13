# Kumar Ankur — Portfolio

Personal single-page portfolio for a senior frontend engineer: dark UI, strong typography, and content driven from typed data files rather than scattered JSX.

**Stack:** [Next.js](https://nextjs.org/) 16 (App Router) · React 19 · TypeScript · [Tailwind CSS](https://tailwindcss.com/) v4 · [Framer Motion](https://www.framer.com/motion/)

---

## Features

- **Sections:** About, Experience (timeline with employer logos), Impact, Skills, Writing, Featured project, Recommendations, “This site” craft notes, Contact.
- **Command palette:** `⌘K` / `Ctrl+K` for in-page navigation and quick actions (see `src/components/command-palette.tsx`).
- **Toasts:** Feedback for clipboard and resume actions (`src/components/toast.tsx`).
- **Motion & polish:** Optional splash screen, scroll-linked parallax, section reveals, reading progress bar at the top of the viewport.
- **Accessibility:** Skip link, visible focus styles, `prefers-reduced-motion` respected for motion-heavy UI.
- **SEO & sharing:** Metadata from `layout.tsx`, Person JSON-LD, dynamic **Open Graph** image (`src/app/opengraph-image.tsx` — name, role, years, chips, host from `NEXT_PUBLIC_SITE_URL`), `sitemap.xml`, `robots.txt`, web app manifest.
- **Print / PDF:** Light palette and hidden chrome when printing or using “Save as PDF”. Use **Contact → Print / Save as PDF**, or **⌘K / Ctrl+K** → “Print page”, or the browser’s print shortcut — then pick “Save as PDF” in the dialog if your browser offers it (`@media print` in `src/app/globals.css`).

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script        | Purpose                |
| ------------- | ---------------------- |
| `npm run dev` | Development server     |
| `npm run build` | Production build       |
| `npm run start` | Serve production build |
| `npm run lint`  | ESLint                 |

---

## Customizing content

| What | Where |
| ---- | ----- |
| Bio, experience, skills, links, availability, impact blocks, site craft copy | `src/data/profile.ts` |
| In-page nav + command palette section order | `src/data/site-nav.ts` |
| Live “years of experience” / `{{years}}` substitution | `profile.careerStartISO` + `src/lib/career-years.ts` |
| Resume PDF (download button) | `public/` — paths in `profile.assets` |
| Company marks in Experience | `public/logos/*.svg` — `logoSrc` on each `ExperienceItem` (optional `logoWide` behavior is keyed off `company === "MakeMyTrip"` in `portfolio.tsx`) |

Main layout and section composition: `src/components/portfolio.tsx`. App shell (palette, splash, toasts): `src/components/client-home.tsx`.

---

## Environment variables

Copy `.env.example` to `.env.local` for local use.

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin **without** a trailing slash (e.g. `https://your-domain.com`). Used for `metadataBase`, Open Graph, and absolute URLs in metadata. Defaults to `http://localhost:3000` when unset. |

---

## Deployment

A typical production setup is **Vercel**:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL in the project environment variables.
4. Deploy (build command: `npm run build`, output: Next.js default).

---

## Agent / Next.js note

This repo pins a recent Next.js major. If you use AI or older docs, prefer the in-repo guides under `node_modules/next/dist/docs/` and the official Next.js site for your installed version.

---

## License

Private project (`"private": true` in `package.json`). All rights reserved unless you choose to add an explicit license.
