# Ideographers

Ideographers is a React, TypeScript, and Vite website for engineering, architecture, branding, and IT services.

## Requirements

- Node.js 20 or later
- npm 10 or later

## Local development

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Quality checks

```bash
cd frontend
npm run lint
npm run build
```

The production build is generated in `frontend/dist`.

## Hostinger deployment

1. Run `npm run build` from the `frontend` directory.
2. Upload the **contents** of `frontend/dist` to your domain document root, typically `public_html`.
3. Confirm that `.htaccess` is uploaded. It is emitted automatically from `frontend/public/.htaccess` during the Vite build.
4. Open the home page and test a direct visit to a nested route such as `/services/it-services`.

The included Apache rewrite rule sends unknown application paths to `index.html`, which is required because the site uses `BrowserRouter`.

## Environment variables

Before a production build, create `frontend/.env` from `frontend/.env.example` and set `VITE_WEB3FORMS_ACCESS_KEY` with the access key from Web3Forms. Do not commit `.env` files.

## Deployment checklist

- `npm run build` passes.
- Upload the contents of `frontend/dist`, including `.htaccess`.
- Confirm the custom 404 page for invalid application routes.
- Confirm a live Web3Forms contact-form submission is delivered successfully.
- Validate deployed canonical URLs and JSON-LD using the production domain.
