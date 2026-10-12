# Multilingual Education Administration Dashboard

A **Next.js 14 / React** administration interface with French and Arabic localization, RTL support, sidebar navigation, and education-related screens.

> This is a code showcase, not a claim of production readiness or complete business workflows.

## Technologies
- Next.js, React, Tailwind CSS, JavaScript.
- `next-intl` for locale-based pages and French/Arabic message catalogs.
- Axios, React Hook Form, Zod, and reusable UI components.
- Firebase dependency is present; integrations and deployment status must be verified before describing them as active.

## Project structure
- `src/app/[locale]/`: localized pages and shared layout.
- `src/app/[locale]/(Formation)/`: education and driving-permit-related views.
- `src/components/`: reusable elements, sections, and UI components.
- `messages/ar.json` and `messages/fr.json`: UI translations.

## Run locally
```bash
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000). Configure required environment variables for external services before testing integrations.

## Portfolio context
This repository illustrates administration interface structure, reusable React components and multilingual UX. The current dashboard contains sample figures; do not interpret them as real user analytics.

**Maintainer:** [zakibox](https://github.com/zakibox) · [Freelance portfolio and projects](https://github.com/zakibox/project-take).
