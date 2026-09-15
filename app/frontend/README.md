# frontend

The challengercoding.org site: a Next.js app exported to static files and
served by GitHub Pages.

## Develop

Use the Node version in `.nvmrc`.

```bash
npm install
npm run dev
```

Lesson pages read their content from the lesson API (`app/backend`). Set its
URL in `.env.local` — the production value is in
`.github/workflows/frontend_deploy.yml`:

```
NEXT_PUBLIC_EXECUTION_API_URL=https://…
```

## Build

`npm run build` writes the site to `out/`, and the postbuild step adds
`llms.txt` and `llms-full.txt` to it. Preview it with any static file server
pointed at `out/`.

## Deploy

`.github/workflows/frontend_deploy.yml` builds and publishes the site on every
push to `main` that touches `app/frontend/`. Lesson content lives in the API
rather than this repo, so the workflow also rebuilds daily; run it from the
Actions tab to publish a content change sooner.
