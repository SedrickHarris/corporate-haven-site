# Batch 2 — Core Brand Pages Build Prompt

## Purpose

Build the Tier 1 core brand pages for the Corporate Haven website per `docs/site-build-plan.md` (canonical Phase 1 page list lives at `docs/site-os/inputs/page-list.md`).

## When to Use

After Batch 1 (project foundation: Next.js App Router scaffold, Tailwind, lib/constants, shared components, homepage) is committed and the homepage is verified. Run once for the whole batch; do not split per page unless a page is blocked.

## Workflow

Fast Build Batch. No Gate 1/2/3 ceremony for normal page / copy / style / component / metadata work. Reference: `docs/site-os/fast-build-batch-workflow.md`.

## Source-of-Truth Docs

- `docs/brand-guide.md` (all visual assets currently MISSING — FLAGGED)
- `docs/site-build-plan.md`
- `docs/site-os/inputs/page-list.md`
- `docs/site-os/corporate-haven-build-context.md`
- `docs/site-os/no-fake-data-policy.md`
- `docs/site-os/file-scope-and-git-safety-policy.md`
- `docs/site-os/service-business-conversion-layout.md`
- `docs/site-os/service-card-image-placeholder-standard.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`

## Pages to Build

| Page | Route | Notes |
|---|---|---|
| About | `/about` | Brand story, locally rooted in Cleveland, accommodating hospitality + professional housing infrastructure feel. Owner / founder story MISSING — FLAGGED. No fake years in business, awards, certifications. |
| Contact | `/contact` | Phone (`// TODO-PHASE-F-LAUNCH: phone (tel:)` + display), email (`// TODO-PHASE-F-LAUNCH: email`), service area, placeholder lead form, hours `// TODO-PHASE-F-LAUNCH: hours` if not confirmed. |
| FAQ Hub | `/faq` | Tier 1 entry — full Level 5 AEO Hub build (30+ FAQs across 9 categories) is a higher-value standalone batch; this Batch 2 entry creates the route and minimum 5–8 brand-level FAQs across services, locations, billing, leasing process, stay length, tenant support. |
| Check Availability | `/check-availability` | Full-page lead-intent. Reuse `QuoteFormPlaceholder` in split layout. Primary CTA target across the site. |
| Thank You | `/thank-you` | Post-submit confirmation page (used when leasing-survey form goes live). `noindex`. |
| Privacy Policy | `/privacy-policy` | Owner-supplied or boilerplate clearly labeled "Draft — pending legal review". MISSING — FLAGGED. |
| Terms of Service | `/terms` | Same legal-review flag. MISSING — FLAGGED. |
| Services Hub | `/services` | Lists 7 services using `ServiceCard` grid (image placeholders + descriptions from `lib/constants/routes.ts`). |
| Properties Hub | `/properties` | Lists confirmed properties (currently 1: Somerset). Ready for expansion grid. Do not invent additional properties. |
| 404 | `/not-found` | Standard 404 with return-to-home + popular routes. |

Deferred to Phase 2 / post-launch: blog hub, per-audience landing pages (travel nurses, insurance), Cleveland neighborhood pages, service+city matrix, accessibility statement (add when copy supplied).

## Design Rules (Service Business Defaults)

- **Hero on `/check-availability`:** two-column split per `docs/site-os/service-business-conversion-layout.md` — content left, `QuoteFormPlaceholder` right.
- **Hero on `/contact`:** two-column split — contact methods + service area left, form placeholder right.
- **Hero on `/about`, `/faq`, legal pages:** standard single-column hero (informational, not primary conversion surfaces).
- **Final CTA on `/about`, `/services`, `/properties`, `/locations`:** standard CTA section, no duplicate form (hero or `/check-availability` carries the form).
- **`/services` and `/properties` hubs:** use `<ServiceCard>` (or `PropertyCard` if extracted) with image placeholders per `docs/site-os/service-card-image-placeholder-standard.md`.

## SEO/AEO Requirements

Every page gets:
- Unique `<title>` and meta description (use the `titleTemplate` in `lib/constants/seo.ts`).
- Single H1, sequential H2/H3.
- Direct-answer opening paragraph (1–2 sentences) addressing the page's intent.
- Natural keyword placement — no stuffing.
- FAQ section (3–6 items) on `/about`, `/faq`, `/check-availability`, `/services`, `/properties` minimum.
- Internal links to relevant Tier 2 / Tier 3 pages.
- `BreadcrumbList` JSON-LD where hierarchy exists (`/services` is parent of future `/services/<slug>`).
- `Organization` JSON-LD on `/about` (omit `logo` until real logo lands per `docs/brand-guide.md`).
- `FAQPage` JSON-LD that **exactly matches** visible FAQ text — no schema-only Q&A.

Do not add `AggregateRating` / `Review` schema until owner-verified reviews land.
Do not add `LocalBusiness` `streetAddress` — Corporate Haven's address public-facing vs. service-area-only decision is MISSING — FLAGGED (per `docs/site-os/corporate-haven-build-context.md §6`).

## No-Fake-Data Rules

Per `docs/site-os/no-fake-data-policy.md` and `docs/site-os/corporate-haven-build-context.md §15`, do not invent:

- Reviews, ratings, testimonials, review counts, AggregateRating
- License numbers, rental-registration completion claims (Cleveland Rental Registration is in progress, not confirmed)
- Insurance carriers, policy numbers, "licensed and insured" claims
- Years in business, properties served counts, tenant stay counts
- Awards, certifications, accreditations
- Pricing claims, satisfaction guarantees
- Owner / team details beyond what Phase A intake confirms
- Tenant photos, team photos, before/after images
- Response-time, same-day, 24/7, or emergency availability claims
- Adjacent cities/neighborhoods as confirmed service areas (Cleveland Heights, Shaker Heights, etc. are APPROVED PLACEHOLDER for planning only)
- Additional properties beyond Somerset

Where any of the above would normally appear, leave a `// TODO-VERIFY:` or `// TODO-PHASE-F-LAUNCH:` comment and omit the claim.

## Implementation Sequence

1. Read source-of-truth docs above.
2. Create new route files under `app/<route>/page.tsx` (App Router, server components by default; static export–compatible only).
3. Reuse existing shared components from Batch 1 (`HeroSection`, `CTASection`, `SectionHeader`, `FAQSection`, `QuoteFormPlaceholder`, `ServiceCard`, `ServiceImagePlaceholder`).
4. Add per-page metadata via `export const metadata: Metadata = { ... }` in each `page.tsx`.
5. Add internal links to / from existing pages (verify the links resolve after creating pages).
6. For `Privacy Policy` / `Terms`: placeholder copy clearly labeled "Draft — pending legal review", `noindex` until owner-approved.
7. For `/thank-you`: `noindex` always.

## Validation Commands

Run after implementation:

```
npm run lint
npm run type-check
npm run build
```

All three must pass clean before reporting. Since the stack is Cloudflare Pages static export, also confirm `next export` produces the expected route inventory in `out/`.

## Implementation Log Update

Append a `### Batch 2 — Core Brand Pages` entry to `docs/site-os/implementation-log.md` per the template at the top of that file.

## Final Report Format

Return a markdown report with:

1. Files Created
2. Files Updated
3. Routes Now Live (with route → page.tsx mapping)
4. Reused Components
5. New Components (if any)
6. Metadata Coverage (per-page title + description)
7. Schema Added (per page)
8. SEO/AEO Coverage (direct answers, FAQ count, internal link count per page)
9. Design-Standard Compliance (two-column on `/check-availability` + `/contact`; single-column elsewhere; service cards with image placeholders on `/services` and `/properties`)
10. No-Fake-Data Compliance
11. Validation Results (lint / type-check / build / static-export route inventory)
12. Remaining TODOs
13. Git Status
14. Ready for Review?

## Stop Conditions

- Do not commit until the report is approved.
- Do not deploy.
- Do not install new packages unless explicitly approved.
- If a page would require unverified business data (license number, years in business, reviews, owner name) to feel complete, surface the gap as a `// TODO-VERIFY:` and ship the page without the claim.
- If `docs/brand-guide.md` is still all MISSING — FLAGGED (no logo, colors, fonts), pause and surface before shipping any page that would visibly need them.
