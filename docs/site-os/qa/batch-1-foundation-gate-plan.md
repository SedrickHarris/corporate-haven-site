# Batch 1 — Foundation Scaffold Gate Plan

The source-of-truth artifact for Batch 1 Gate 2. Records the inspection results (Gate 1), the approved file scope, the dependency set, the hard-stop approvals granted, the static-export constraints, the placeholder strategy, and the validation outcome. Gate 3 implementation must conform to this plan; QA gates audit against it.

**Date**: 2026-05-23
**Phase**: D
**Batch**: 1 (Foundation Scaffold)
**Workflow**: Fast Build Batch (per `docs/site-os/fast-build-batch-workflow.md`) under standing approval (per Phase C invocation)
**Prerequisite phases**: B complete (commit `2a12e2e`), C invoked

---

## 1. Gate 1 — Inspection Results

| Surface | Expected | Actual |
|---|---|---|
| `package.json`, `next.config.*`, `tsconfig.json`, `tailwind.config.*`, `postcss.config.*` | absent | ✅ absent |
| `app/`, `src/app/`, `pages/`, `src/`, `components/`, `lib/`, `public/` | absent | ✅ absent |
| Build artifacts (`.next/`, `out/`, `node_modules/`) | absent | ✅ absent |
| Phase B + C substrate (12 paths) | present | ✅ all present |
| `.claude/` ignored | yes | ✅ `.gitignore:2:.claude/` |
| Branch / tracking | `main` synced to `origin/main` | ✅ HEAD `2a12e2e` |
| Working tree | clean | ✅ `nothing to commit` |
| Site OS Master cross-repo | untouched | ✅ HEAD `36f9092`, clean |

**Verdict**: PASS.

---

## 2. Gate 2 — Approved File Scope

27 paths: 24 new + 3 modifications. Authorized by project owner before Gate 3.

### Root (7)

| Path | New/Modified | Purpose |
|---|---|---|
| `package.json` | NEW | Deps + scripts + inline `eslintConfig` |
| `next.config.mjs` | NEW | `output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`, `reactStrictMode: true` |
| `tsconfig.json` | NEW | Strict TS, `@/*` path alias, Next.js plugin |
| `tailwind.config.ts` | NEW | Content paths, brand color tokens via CSS vars (placeholders), font families, `maxWidth.container = 1440px` |
| `postcss.config.mjs` | NEW | `tailwindcss` + `autoprefixer` |
| `.gitignore` | MODIFIED | Adds `node_modules/`, `.next/`, `out/`, `.env*`, `next-env.d.ts`, `*.tsbuildinfo`, `.vercel/`, `.DS_Store`, `Thumbs.db`, `*.swp`, `*.swo`, `*.pem`. Keeps `.claude/` |
| `README.md` | NEW | Project overview + scripts + Site OS pointers + no-fake-data notice |

### App (4)

| Path | New/Modified | Notes |
|---|---|---|
| `app/layout.tsx` | NEW | Root layout, metadata template, Header + Footer mount, globals.css import. No JSON-LD at root. |
| `app/page.tsx` | NEW | Homepage shell (Option A) using `HeroSection` split, `SectionHeader`, `ServiceCard` grid (5 services), `LOCATIONS` pill, `Somerset` featured property card, `FAQSection` (5 placeholder FAQs), `CTASection`. All copy `TODO-COPY:` flagged. |
| `app/not-found.tsx` | NEW | 404 with `robots: noindex`, link back to home and primary CTA, popular routes chips. |
| `app/globals.css` | NEW | Tailwind directives + `:root` CSS variables for brand color tokens (placeholders) + base resets. |

### Lib (4)

| Path | New/Modified | Notes |
|---|---|---|
| `lib/constants/site.ts` | NEW | `SITE` constant. Phone, phoneTel, email, address, hours all `null` with TODO comments. `serviceArea` confirmed (Cleveland, OH, Cuyahoga County); `adjacentPlaceholders` listed as APPROVED PLACEHOLDER for planning only. |
| `lib/constants/routes.ts` | NEW | `SERVICES` (5 entries from Phase A), `LOCATIONS` (Cleveland only, CONFIRMED), `PROPERTIES` (Somerset only, CONFIRMED), `NAV_PRIMARY` / `NAV_FOOTER_*`, `PRIMARY_CTA`, `SECONDARY_CTA`. |
| `lib/constants/seo.ts` | NEW | `TITLE_TEMPLATE`, `DEFAULT_TITLE`, `DEFAULT_DESCRIPTION`, `DEFAULT_OG` (no image). Helpers: `buildOrganizationJsonLd`, `buildLocalBusinessJsonLd`, `buildFaqPageJsonLd`, `buildBreadcrumbJsonLd`. All helpers OMIT unverified fields rather than emitting placeholder values. |
| `lib/utils.ts` | NEW | `cn(...inputs)` = `twMerge(clsx(inputs))`. |

### Components (9)

| Path | New/Modified | Notes |
|---|---|---|
| `components/layout/Header.tsx` | NEW | Sticky header. Wordmark text fallback (no SVG yet). Phone CTA conditionally rendered (`SITE.phone &&`). Primary CTA link. |
| `components/layout/Footer.tsx` | NEW | 4-col grid: brand, services, company, contact. Phone / email / address render only when set; address omitted while decision pending. |
| `components/sections/HeroSection.tsx` | NEW | Implements `service-business-conversion-layout.md`. `layout: 'single' \| 'split'` prop; split renders form on right at lg+. Container `max-w-container`, progressive padding. |
| `components/sections/CTASection.tsx` | NEW | Final CTA on dark surface. Optional `formSlot` promotes to two-column. |
| `components/sections/SectionHeader.tsx` | NEW | Eyebrow + title + description; `align` prop. |
| `components/sections/FAQSection.tsx` | NEW | Visible FAQ via `<details>` + JSON-LD whose `acceptedAnswer.text` exactly matches each visible answer (Schema Quality Gate requirement). |
| `components/forms/QuoteFormPlaceholder.tsx` | NEW | Non-submitting placeholder. All inputs `disabled` + `aria-disabled`, button `type="button"` + `aria-disabled`, visible "Form vendor pending" amber notice. |
| `components/cards/ServiceCard.tsx` | NEW | Whole card is a `Link`. Renders `<ServiceImagePlaceholder>` top, H3 title, description, "Learn more" affordance. |
| `components/media/ServiceImagePlaceholder.tsx` | NEW | `aspect-[16/10]` default (configurable). `aria-hidden`. Neutral gradient surface. TODO comment for owner-supplied photo. |

### Docs (3)

| Path | New/Modified | Notes |
|---|---|---|
| `docs/site-os/changelog/project-changelog.md` | MODIFIED | New top entry: "Batch 1 Foundation Scaffold" |
| `docs/site-os/implementation-log.md` | MODIFIED | Append: "2026-05-23 — Batch 1 Foundation Scaffold" |
| `docs/site-os/qa/batch-1-foundation-gate-plan.md` | NEW | This file (source-of-truth artifact) |

---

## 3. Hard-Stop Approvals Granted

Bundled into STEP 8 single approval per session-scoped owner direction:

1. Create `package.json`
2. Run `npm install` (once)
3. Create `next.config.mjs` (Cloudflare-config-equivalent)
4. Create app routes (`layout.tsx`, `page.tsx`, `not-found.tsx`)
5. Set up metadata in `app/layout.tsx` + `app/page.tsx` + `app/not-found.tsx` + `lib/constants/seo.ts`
6. Set up JSON-LD schema helpers in `lib/constants/seo.ts` + `FAQPage` emission in `FAQSection.tsx`
7. Cloudflare Pages static export config (`output: 'export'`, `images.unoptimized`, `trailingSlash`)

**Approvals NOT granted** (remain Hard Stops for future batches): deploy, additional image assets in `public/`, API integrations, analytics injection, sitemap / robots / canonical logic.

---

## 4. Dependency Set Installed

### Runtime (`dependencies`)

| Package | Version range | Why |
|---|---|---|
| `next` | `^15.0.0` | App Router + static export |
| `react` | `^18.3.0` | RSC + client components |
| `react-dom` | `^18.3.0` | |
| `clsx` | `^2.1.1` | Conditional class composition |
| `tailwind-merge` | `^2.5.0` | Tailwind conflict resolution |

### Dev (`devDependencies`)

| Package | Version range | Why |
|---|---|---|
| `typescript` | `^5.6.0` | Strict mode |
| `@types/node` | `^22.0.0` | Required for TS |
| `@types/react` | `^18.3.0` | Required for TS |
| `@types/react-dom` | `^18.3.0` | Required for TS |
| `tailwindcss` | `^3.4.0` | Tailwind v3 (per owner decision) |
| `postcss` | `^8.4.0` | Tailwind + autoprefixer host |
| `autoprefixer` | `^10.4.0` | CSS prefixing |
| `eslint` | `^8.57.0` | Last v8 stable for next-config compat |
| `eslint-config-next` | `^15.0.0` | Next.js rule pack |

### Not installed (deliberate)

- No external UI library (no shadcn/ui, Radix, Headless UI, Lucide, Framer Motion)
- No analytics SDK
- No form library
- No state library

Rationale: brand identity is undefined; importing a UI kit now commits to its visual defaults. Static export keeps the bundle small and avoids surprise client-runtime dependencies. Future additions require explicit approval.

---

## 5. Static Export Constraints Baked In

`next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
```

Constraints respected from Batch 1:

- No Server Actions (none used; forms are non-submitting placeholders)
- No middleware (none used)
- No `revalidate` / ISR (all build-time)
- Dynamic routes need `generateStaticParams` (none yet; applies to future `[slug]` routes)
- No `cookies()`, `headers()`, `request.url` in server components (none used)
- No `app/api/*` routes (none planned; forms post to external vendor when wired)
- Images via `<img>` or `<Image unoptimized>` (only placeholder `<div>`s used today)
- `next/font` works (build-time) — deferred until font choice resolves
- Sitemap / robots / canonical logic deferred (separate future batch)
- OG image: pre-rendered static `public/og.png` (deferred until brand asset lands)

Cloudflare Pages publish target: `out/`.

---

## 6. Placeholder Strategy

| Pattern | Applied to | Example |
|---|---|---|
| `null` in constants + guard at render | Phone, email, address, hours, social | `{SITE.phone && SITE.phoneTel && <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>}` |
| Neutral CSS variable + `TODO-COLOR` comment | `app/globals.css`, `tailwind.config.ts` | `--brand-primary: 31 41 55;` (neutral slate) |
| Text wordmark fallback | `Header` logo slot | `<span>Corporate Haven</span>` (no SVG until brand-guide.md §1) |
| `TODO-COPY` comments on placeholder text | `app/page.tsx` sections | `// TODO-COPY: final hero copy from prompts/individual-homepage-research-prompt.md` |
| Schema fields OMITTED entirely | `buildOrganizationJsonLd`, `buildLocalBusinessJsonLd` | `address`, `logo`, `aggregateRating`, `priceRange` not emitted |
| `noindex` metadata on placeholder pages | `app/not-found.tsx` | `robots: { index: false, follow: false }` |
| Form placeholder doesn't submit | `QuoteFormPlaceholder` | No `action`, no `onSubmit`, `button type="button"`, visible amber "vendor pending" notice |
| Image placeholder is not a photo | `ServiceImagePlaceholder` | `aria-hidden`, neutral gradient, no embedded text |

**Zero invented business data anywhere.** No phone, email, address, hours, prices, reviews, ratings, licenses, certifications, awards, testimonials, owner names, or brand assets appear in code, copy, schema, or metadata.

---

## 7. Validation Outcome

(Recorded by Gate 3 implementation after running.)

- `npm run lint` — TBD by Gate 3
- `npm run type-check` — TBD by Gate 3
- `npm run build` — TBD by Gate 3 (must emit `out/index.html`, `out/404.html` or equivalent)

---

## 8. Cross-Repo Discipline

Site OS Master (`C:\Users\Welcome\Desktop\site-os-master`) must remain at HEAD `36f9092` with a clean working tree throughout STEP 8. Verified at Gate 1 start and re-verified before final report.

---

## 9. Related Files

- `docs/site-os/corporate-haven-build-context.md` — client-specific facts driving constants
- `docs/site-os/inputs/page-list.md` — canonical Phase 1 page inventory driving routes.ts
- `docs/site-os/no-fake-data-policy.md` — fabrication-prevention rules
- `docs/site-os/service-business-conversion-layout.md` — two-column hero/CTA standard
- `docs/site-os/service-card-image-placeholder-standard.md` — service card image rule
- `docs/site-os/file-scope-and-git-safety-policy.md` — explicit staging discipline for the eventual commit
- `docs/brand-guide.md` — visual identity MISSING — FLAGGED
- `docs/site-build-plan.md` — pointer to canonical page plan
