# Batch 3 — Service Pages Build Prompt

## Purpose

Build all 5 priority Tier 2 service pages for Corporate Haven per `docs/site-build-plan.md` and `docs/site-os/inputs/page-list.md`.

## When to Use

After Batch 2 (core brand pages) is committed and pushed.

## Workflow

Fast Build Batch for the standard (Level 3) pages. **The 3 audience-critical pages (Travel Nurse, Medical Professional, Insurance Relocation) are Level 5 Beyond-Elite per `docs/site-os/corporate-haven-build-context.md §4`** — those should each use the individual high-value service-page workflow (research → implementation) per `docs/site-os/reference/prompt-router-and-ai-depth-standard.md`, not the batch prompt. The batch prompt below handles the structural scaffolding for the lower-depth services.

Reference `docs/site-os/fast-build-batch-workflow.md`.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/inputs/page-list.md`
- `docs/site-os/corporate-haven-build-context.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/service-business-conversion-layout.md`
- `docs/site-os/service-card-image-placeholder-standard.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/routes.ts` — `SERVICES` contains slug, name, href, `shortDescription` for each service

## Services to Build (5 priority + 2 optional)

| # | Service | Route | Primary Keyword (placeholder — confirm via SERP analysis) | AI Depth |
|---|---|---|---|---|
| 1 | Mid-Term Rentals | `/services/mid-term-rentals` | mid-term rentals cleveland | Level 3 (batch) |
| 2 | Corporate Housing | `/services/corporate-housing` | corporate housing cleveland ohio | Level 3 (batch) |
| 3 | Travel Nurse Housing | `/services/travel-nurse-housing` | travel nurse housing cleveland | **Level 5 — use individual high-value workflow** |
| 4 | Medical Professional Housing | `/services/medical-professional-housing` | medical professional housing cleveland | **Level 5 — use individual high-value workflow** |
| 5 | Insurance Relocation Housing | `/services/insurance-relocation-housing` | insurance relocation housing cleveland | **Level 5 — use individual high-value workflow** |

Phase 2 candidates: `/services/family-relocation-housing`, `/services/student-intern-housing`.

## Reusable Service Page Template

For Level 3 (batch) services, render the same section structure:

1. **Hero (split, with form)** — `<HeroSection formSlot={<QuoteFormPlaceholder />} ... />`. H1 per service + location ("Mid-Term Rentals in Cleveland, OH"). Eyebrow = service category ("Furnished Housing"). Two CTAs: Check Availability + Call.
2. **Quick Answer** — One-paragraph direct definition of the service for a mid-term housing seeker.
3. **Who this service is for** — Customer segments per `docs/site-os/corporate-haven-build-context.md §5` (relevant subset per service).
4. **What's included** — Owner-confirmed amenities: fully furnished, all-inclusive pricing, utilities, high-speed WiFi, dedicated workspace, digital locks, tenant support, etc. Do not invent amenities not in `corporate-haven-build-context.md §4`.
5. **Why Corporate Haven** — Verified differentiators only (Cleveland-local focus, hospitality + professional housing infrastructure feel, all-inclusive vs. raw rental). No fake credentials.
6. **Process** — Step-by-step from inquiry → leasing survey → move-in. `HowTo` schema only if the steps are visible verbatim.
7. **Service areas** — Internal links to Tier 3 location pages (when those land) and Tier 4 service+city matrix (Phase 2).
8. **Related services** — `ServiceCard` grid (image placeholders) showing the other services.
9. **FAQ section** — 5–8 service-specific FAQs. `FAQPage` JSON-LD matching visible content.
10. **Final CTA section** — `<CTASection />` (no duplicate form; hero carries it).

## Component Reuse

- `<HeroSection formSlot={...} />` (split layout from Batch 1)
- `<QuoteFormPlaceholder />`
- `<SectionHeader />`
- `<FAQSection />`
- `<CTASection />`
- `<ServiceCard />` + `<ServiceImagePlaceholder />` (for Related Services grid)

Extract a `<ServicePageLayout>` only if the structure is duplicated 3+ times. Otherwise inline so per-service tuning stays straightforward.

## SEO/AEO Requirements

- H1 includes service name + primary location ("in Cleveland, OH").
- Meta title: "<Service Name> in Cleveland, OH | Corporate Haven".
- Meta description: 140–160 chars, includes service, service area, contact path (phone TODO until confirmed).
- Direct-answer paragraph in the first 100 words of body.
- FAQ section with 5–8 items, each answered in 1–3 sentences.
- Internal links: at least 6 (locations + related services + check availability + Somerset + contact).
- `Service` JSON-LD: name, serviceType, provider (Organization), areaServed (Cuyahoga County + Cleveland + adjacent areas — only those confirmed via owner or APPROVED PLACEHOLDER from build-context §6).
- `FAQPage` JSON-LD — exact text match.
- `BreadcrumbList` JSON-LD reflecting `/services` → `/services/<slug>`.

## Service Card Image Placeholders (Related Services)

Use the `<ServiceCard>` component from Batch 1. Each card on the Related Services grid renders with the `<ServiceImagePlaceholder>` at the top (16:10 aspect, brand-token gradient, `aria-hidden`) per `docs/site-os/service-card-image-placeholder-standard.md`.

## No-Fake-Data Rules

- No reviews, ratings, testimonials.
- No license numbers, insurance carriers, rental-registration completion claims (registration in progress per disk PDFs; do not claim completion).
- No years-in-business, properties-served counts, or tenant-stay counts.
- No awards, certifications, accreditations.
- No pricing claims beyond the APPROVED PLACEHOLDER "all-inclusive monthly pricing — exact rates on request".
- No same-day move-in, 24/7 tenant-support, or emergency availability claims unless owner-verified.
- No invented case studies, named tenants, or "we housed 50+ travel nurses last year"-style claims.
- Where service-specific scope would benefit from a customer-story example, write generically and add `// TODO-VERIFY:` for owner-supplied examples.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Then manually navigate `/services/<each-slug>` in `npm run dev` to confirm:
- Page renders, hero form visible
- Internal links resolve (some Tier 3/4 targets may 404 until those batches ship)
- Related services grid shows the others with image placeholders

For Cloudflare Pages static export, also confirm `out/services/<slug>/index.html` exists after `npm run build` + `next export`.

## Implementation Log Update

Append `### Batch 3 — Service Pages` entry: files, validation, internal-link summary, schema coverage, TODOs.

## Final Report Format

1. Files Created (5 page files + any extracted layout)
2. Files Updated
3. SEO/AEO Coverage per route (H1, meta title, meta description, FAQ count)
4. Schema Coverage per route (Service, FAQPage, BreadcrumbList)
5. Internal Links Added (per page)
6. Service Card Image Placeholders Confirmed on Related Services grids
7. Two-Column Hero with Form Confirmed on All 5 Pages
8. No-Fake-Data Compliance
9. Validation Results
10. Remaining TODOs
11. Git Status
12. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Do not invent service-area cities outside the APPROVED PLACEHOLDER list in `corporate-haven-build-context.md §6` (Cleveland confirmed; adjacent areas placeholder-only).
- Do not promise turnaround times, response times, or availability windows that haven't been owner-confirmed.
- If a service requires significantly more depth (Travel Nurse, Medical Professional, Insurance Relocation), route to the individual high-value service-page workflow instead of this batch prompt.
