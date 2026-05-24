# Batch 4 — City Location Pages Build Prompt

## Purpose

Build the priority Tier 3 city/area location pages for Corporate Haven per `docs/site-build-plan.md` and `docs/site-os/inputs/page-list.md`.

## When to Use

After Batch 3 (service pages) is committed and pushed. **Phase 1 launches with only `/cleveland-ohio` (the primary GEO target at Level 5 Beyond-Elite — use the individual location-page workflow, not this batch prompt).** The other locations below are Phase 2 / deferred until owner-confirmed expansion.

## Workflow

Fast Build Batch for the Phase 2 city pages once owner confirms expansion service area. Reference `docs/site-os/fast-build-batch-workflow.md`.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/inputs/page-list.md`
- `docs/site-os/corporate-haven-build-context.md` (§6 — service area)
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/site.ts` — verified service area constants
- `lib/constants/routes.ts` — services list

## Locations (Phase 1 + Phase 2)

| Page | Route | Tier | Notes |
|---|---|---|---|
| Cleveland, OH (primary) | `/cleveland-ohio` | **Phase 1 — Level 5** | Use individual high-value location-page workflow; do NOT build via this batch prompt |
| Cleveland Heights | `/locations/cleveland-heights` | Phase 2 | Build only when owner confirms service area extends here |
| Shaker Heights | `/locations/shaker-heights` | Phase 2 | Build only when owner confirms |
| Lakewood | `/locations/lakewood` | Phase 2 | Build only when owner confirms |
| Beachwood | `/locations/beachwood` | Phase 2 | Build only when owner confirms |
| Cuyahoga County | `/locations/cuyahoga-county` | Phase 2 | County hub if owner confirms broader area |

Until owner confirms adjacent areas as production service area, **do not build these pages**. The adjacent-area list is APPROVED PLACEHOLDER per `corporate-haven-build-context.md §6` for *planning* only.

## Location Page Section Structure

1. **Hero (split, with form)** — H1: "Mid-Term Rentals & Corporate Housing in [City], OH" (or service-led variant per city). Sub mentions local context (proximity to Cleveland Clinic / University Hospitals / MetroHealth, business corridors, neighborhood character). Form on right.
2. **Quick local answer** — One paragraph defining what Corporate Haven offers in this specific area.
3. **Local housing needs** — Real housing stock, employer catchment, traveler segments (which audiences from `corporate-haven-build-context.md §5` are most relevant locally). Each claim factually defensible (general public knowledge OK; specific occupancy / tenant counts require owner verification).
4. **Popular services in this area** — `<ServiceCard>` grid linking to Tier 2 service pages, with image placeholders. May reorder cards by local relevance (e.g., Travel Nurse Housing first near hospital catchments).
5. **Why Corporate Haven serves this area well** — Brand-aligned, no invented claims (no "we've housed 100+ travel nurses here").
6. **Nearby neighborhoods** — Internal links to Tier 3 neighborhood pages (Batch 5; if no neighborhoods exist for this area, omit the section).
7. **FAQ section** — 4–6 FAQs about housing in this city.
8. **Final CTA section** — `<CTASection />`.

## Component Reuse

Use existing components from earlier batches. No new components required. If a `LocationCard` is needed for Nearby Neighborhoods, extract during Batch 5 — Batch 4 can use simple `<Link>` chips.

## Local SEO / AEO Requirements

- H1 includes city/area name + "OH".
- Meta title: "Mid-Term Rentals & Corporate Housing in [City], OH | Corporate Haven".
- Meta description references city, Cuyahoga County, contact path (phone TODO until confirmed), and 1 differentiator (hospitality + professional housing infrastructure; never invented credentials).
- Direct-answer paragraph in the first 100 words including the city name.
- 4–6 FAQs, each with city-specific context where natural.
- `LocalBusiness` JSON-LD with `areaServed` matching the city + Cuyahoga County. **Do not** include `streetAddress` — Corporate Haven's address public-facing vs. service-area-only decision is MISSING — FLAGGED (per `docs/site-os/no-fake-data-policy.md §2` service-area-only businesses must not display or schema-mark a street address until that decision is resolved).
- `Service` JSON-LD per service mentioned, with `areaServed = [city]`.
- `FAQPage` JSON-LD — exact match.
- `BreadcrumbList` reflecting `/locations` → `/locations/<city>` (or top-level `/cleveland-ohio` for the primary page).

## No Fake Location Claims

- Do not invent neighborhoods, ZIP codes, or sub-areas that aren't in `docs/site-build-plan.md` or `corporate-haven-build-context.md`.
- Do not claim Corporate Haven has served a specific number of tenants in a city.
- Do not name specific employers, hospitals, HOAs, or developments as past clients unless owner-confirmed.
- Do not invent local awards, chamber memberships, or partnerships.
- General factual public knowledge about the city (population scale, hospital systems, neighborhood character) is acceptable when phrased generically.

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

Verify in `npm run dev`:
- All built routes render.
- Service card grids show image placeholders.
- Internal links resolve (some Tier 3 neighborhood links will 404 until Batch 5).

For Cloudflare Pages static export, confirm `out/locations/<city>/index.html` (or `out/cleveland-ohio/index.html`) exists after build + export.

## Implementation Log Update

Append `### Batch 4 — City Location Pages` entry.

## Final Report Format

1. Files Created
2. Routes Live
3. SEO/AEO Coverage per city
4. Schema Coverage per city (especially absence of `streetAddress` in `LocalBusiness`)
5. Internal Links Added
6. Service Card Image Placeholders Confirmed
7. Two-Column Hero with Form Confirmed on All Pages
8. No-Fake-Data Compliance
9. Validation Results
10. Remaining TODOs
11. Git Status
12. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Do not display or schema-mark a `streetAddress` for any `LocalBusiness` entity — Corporate Haven's service-area / public-address decision is MISSING — FLAGGED.
- Do not invent local tenant stories, named clients, or specific occupancy counts.
- Do not build Phase 2 area pages without explicit owner confirmation that the area is a verified production service area.
