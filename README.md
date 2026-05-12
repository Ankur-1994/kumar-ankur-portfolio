# Kumar Ankur — Portfolio

Single-page portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content updates

Most copy lives in:

- `src/data/profile.ts`

UI composition lives in:

- `src/components/portfolio.tsx`

## Production metadata (recommended)

Set `NEXT_PUBLIC_SITE_URL` to your deployed origin (no trailing slash), for example:

- `https://kumar-ankur-portfolio.vercel.app`

See `.env.example`.

## Deploy (free + fast)

The simplest path is **Vercel**:

1. Push this repo to GitHub (`Ankur-1994/kumar-ankur-portfolio`).
2. Import the repo in Vercel.
3. Add environment variable `NEXT_PUBLIC_SITE_URL` with your production URL.

## Connect this codebase to your GitHub repo

If you generated the project locally (not via `git clone`), run:

```bash
cd /path/to/kumar-ankur-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Ankur-1994/kumar-ankur-portfolio.git
git push -u origin main
```

If GitHub shows a non-empty default branch already, follow GitHub’s instructions to reconcile histories (or force-push only if you intend to replace remote history).
