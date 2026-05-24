# Batch 5 — Priority Neighborhood Pages Build Prompt

## Purpose

Build the priority Tier 3 Cleveland neighborhood pages per `docs/site-build-plan.md` Batch 5 (Phase 2 deferred — Phase 1 launch does not include neighborhood pages).

## When to Use

After Batch 4 (city location pages) is committed and pushed and owner has confirmed neighborhood-level service coverage. **In the current Phase 1 plan (`docs/site-os/inputs/page-list.md`), neighborhood pages are deferred to Phase 2.** Run this batch only when Phase 2 is greenlit.

## Workflow

Fast Build Batch.

## Source-of-Truth Docs

- `docs/brand-guide.md`
- `docs/site-build-plan.md`
- `docs/site-os/inputs/page-list.md`
- `docs/site-os/corporate-haven-build-context.md`
- `docs/site-os/reference/seo-aeo-content-standards.md`
- `docs/site-os/reference/service-business-design-standards.md`
- `docs/site-os/no-fake-data-policy.md`
- `lib/constants/site.ts`

## Candidate Cleveland Neighborhoods (Phase 2 — pending owner confirmation)

| Neighborhood | Route | Notes |
|---|---|---|
| University Circle | `/cleveland-ohio/university-circle` | Cleveland Clinic / UH catchment — high travel-nurse + medical-professional relevance |
| Tremont | `/cleveland-ohio/tremont` | Near downtown, residential character |
| Ohio City | `/cleveland-ohio/ohio-city` | Adjacent to downtown, mixed-use |
| Cleveland Clinic area | `/cleveland-ohio/cleveland-clinic-area` | Hospital catchment if owner confirms broader area than University Circle |
| Downtown Cleveland | `/cleveland-ohio/downtown` | Business district |

Per `corporate-haven-build-context.md §6`, the neighborhood inventory is APPROVED PLACEHOLDER for *planning* only. Owner must confirm each neighborhood as a verified service area before page build.

## Neighborhood Page Section Structure

1. **Hero (split, with form)** — H1 includes neighborhood + Cleveland. Sub references housing or character (medical district, downtown business district, residential, mixed-use) using only generic, publicly-known characteristics.
2. **Quick neighborhood answer** — One paragraph defining what Corporate Haven offers in this specific area.
3. **Local context** — Real, generic, public-knowledge characteristics of the neighborhood (e.g., "adjacent to Cleveland Clinic's main campus", "mixed-use historic district"). Never invent population numbers, dates, or named developments unless verified.
4. **Popular services in this neighborhood** — `<ServiceCard>` grid with image placeholders, reordered by neighborhood character (Travel Nurse / Medical Professional Housing first near hospital catchments; Corporate Housing first near business districts).
5. **Why guests in [neighborhood] choose Corporate Haven** — Verified brand attributes only (hospitality + professional housing infrastructure, all-inclusive, locally rooted). No fake counts or testimonials.
6. **Parent city link** — Back-link to `/cleveland-ohio` per `docs/site-build-plan.md` internal-linking architecture.
7. **FAQ section** — 3–5 neighborhood-specific FAQs.
8. **Final CTA section** — `<CTASection />`.

## Avoid Doorway-Page Content

A doorway page is a thin neighborhood-swap of another page. To avoid:

- Each page must contain at least 200 words of neighborhood-specific content beyond the boilerplate sections.
- Local context section must reference something specific to the neighborhood (hospital adjacency, downtown character, historic district, etc.).
- FAQs must include at least 1 question whose answer is meaningfully different from the parent city's FAQs.
- Do not literally swap the neighborhood name in identical paragraphs — rewrite at least the local context and the differentiator phrasing per neighborhood.
- Service ordering in the Popular Services grid should reflect neighborhood character.

## Unique Local Relevance Rules

- Acceptable claims: hospital / employer / landmark adjacency where publicly known (Cleveland Clinic Main Campus, University Hospitals, Case Western Reserve, downtown Public Square), neighborhood character (historic, business district, residential, mixed-use), public infrastructure references (RTA stops, highway access — only if accurate).
- Not acceptable without owner verification: tenant counts, named past tenants, partnerships with named local businesses, neighborhood-specific certifications, exclusive contracts.

## SEO / AEO Requirements

- H1 includes neighborhood + Cleveland.
- Meta title: "[Neighborhood] Mid-Term Housing in Cleveland, OH | Corporate Haven".
- Meta description: 140–160 chars, references neighborhood, Cleveland, contact path.
- Direct-answer in first 100 words.
- 3–5 FAQs with `FAQPage` JSON-LD matching visible content exactly.
- `LocalBusiness` JSON-LD with `areaServed = [neighborhood + Cleveland + Cuyahoga County]`. **No `streetAddress`** until owner resolves public-address vs. service-area-only decision.
- `BreadcrumbList`: `/cleveland-ohio` → `/cleveland-ohio/<neighborhood>` (or `/locations` → `/locations/<city>` → `/locations/<city>/<neighborhood>` if a flat neighborhood URL pattern is used — confirm in Prompt 05 developer brief).

## Component Reuse

Same components as Batch 4. No new components required.

## No-Fake-Data Rules

- Do not invent neighborhood populations, household income, or demographic stats.
- Do not name employers, hospitals, businesses as past clients unless owner-confirmed.
- Do not invent local awards, "Best of [neighborhood]" mentions, or partnerships.
- Do not invent emergency or same-day service claims specific to the neighborhood.
- Do not mention specific Corporate Haven properties (e.g., the Somerset) as "in" a neighborhood unless the property's actual location is in that neighborhood — Somerset's neighborhood-of-Cleveland mapping is currently MISSING — FLAGGED (ZIP 44108 only).

## Validation Commands

```
npm run lint
npm run type-check
npm run build
```

For Cloudflare Pages static export, confirm route inventory in `out/`.

## Implementation Log Update

Append `### Batch 5 — Priority Neighborhood Pages` entry.

## Final Report Format

1. Files Created
2. Routes Live
3. Per-Neighborhood Content Differentiation (1–2 sentence summary per page of what makes it not a doorway page)
4. SEO/AEO Coverage
5. Schema Coverage
6. Internal Links Added
7. Service Card Image Placeholders Confirmed
8. Two-Column Hero with Form Confirmed on All Pages
9. No-Fake-Data Compliance
10. Validation Results
11. Remaining TODOs
12. Git Status
13. Ready for Review?

## Stop Conditions

- Do not commit until review.
- Do not deploy.
- Reject any draft where neighborhood pages read like literal name-swaps. Rewrite local context until each page reads as written for that neighborhood.
- Do not build a neighborhood page until owner confirms the neighborhood as a verified service area.
