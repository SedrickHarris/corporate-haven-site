# Corporate Haven Site

Production website for Corporate Haven, providing fully furnished mid-term rentals and corporate housing in Cleveland, OH.

> Brand voice direction is APPROVED PLACEHOLDER pending owner sign-off. Visual identity (logo, brand colors, photography, fonts) is MISSING — FLAGGED. See `docs/brand-guide.md`.

## Stack

- Next.js 15 (App Router) with static export
- TypeScript 5
- Tailwind CSS 3
- Cloudflare Pages (deploy target)

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server on http://localhost:3000 |
| `npm run lint` | ESLint via `next lint` |
| `npm run type-check` | `tsc --noEmit` strict type check |
| `npm run build` | `next build` emits the static site to `out/` (because `next.config.mjs` sets `output: 'export'`) |
| `npm start` | Serve a non-static production build (not used in the static-export workflow) |

## Site OS

This repo follows the Site OS Master workflow. Start here:

- `docs/site-os/README.md` — docs structure
- `docs/site-os/inputs/page-list.md` — Phase 1 page plan
- `docs/site-os/corporate-haven-build-context.md` — client-specific facts (services, locations, audiences, blockers)
- `docs/site-os/reference/client-build-prompt-index.md` — client-side prompt catalog
- `docs/site-os/changelog/project-changelog.md` — phase-by-phase history
- `docs/site-os/implementation-log.md` — build log
- `docs/site-os/qa/batch-1-foundation-gate-plan.md` — Batch 1 Gate 2 plan and source-of-truth artifact

## No-fake-data policy

This repo enforces `docs/site-os/no-fake-data-policy.md`. Phone, email, address, business hours, owner names, license / insurance claims, reviews, ratings, testimonials, brand assets, and property inventory beyond the Somerset are MISSING — FLAGGED or APPROVED PLACEHOLDER and must NOT be invented in code, copy, schema, or metadata. `lib/constants/site.ts` keeps every unverified field as `null`; components guard rendering so nothing fabricated reaches the page.

## Status

Phase A intake CLEARED WITH FLAGS. Phase B repo scaffold complete. Phase C policy invocation active for the current session. Batch 1 foundation scaffold is the current phase.
