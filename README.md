# challengercodingweb

```
app/
  frontend/   Next.js site (challengercoding.org) — see app/frontend/README.md
  backend/    execution engine: lesson content API + code-run sandbox — see app/backend/README.md
```

Deploys are independent: `app/frontend` → GitHub Pages (via
`.github/workflows/frontend_deploy.yml`), `app/backend` → AWS Lambda (via
`.github/workflows/execution_engine_deploy.yml`, gated on `app/backend/**`
changes).
