# Client Build Prompt Index

The full client-side Site OS prompt catalog for the Corporate Haven repo. Each entry lists the prompt path, its purpose, when to use it, and what it produces.

## Build Prompts (`docs/site-os/prompts/build/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `batch-2-core-brand-pages-prompt.md` | Build Tier 1 brand pages (About, Contact, FAQ, Check Availability, Thank You, legal, hubs, 404) | After Batch 1 (Next.js scaffold + homepage) is committed | New route files under `app/`, metadata, internal links, schema, implementation log entry | Build |
| `batch-3-service-pages-prompt.md` | Build the 5 priority service pages (Mid-Term, Corporate Housing, Travel Nurse, Medical Professional, Insurance Relocation) | After Batch 2 | 5 new `app/services/<slug>/page.tsx` files with split hero + form, related-services card grid, FAQ, schema. **3 audience-critical pages should route to the individual high-value workflow, not the batch prompt.** | Build |
| `batch-4-city-location-pages-prompt.md` | Build Tier 3 city/area pages | After Batch 3 (Phase 2 — only `/cleveland-ohio` ships in Phase 1, via individual high-value location workflow) | City-level `app/locations/<city>/page.tsx` files with service card grids, local FAQ, LocalBusiness schema (no streetAddress) | Build |
| `batch-5-neighborhood-pages-prompt.md` | Build Tier 3 Cleveland neighborhood pages (Phase 2 deferred) | After Batch 4, when owner confirms neighborhood-level coverage | Nested neighborhood pages with parent-city linking, neighborhood-specific local context | Build |
| `batch-6-service-city-matrix-prompt.md` | Build Tier 4 service+city pages programmatically (Phase 2 deferred) | After Batch 5, when owner confirms expanded service area | Routes at `/services/<service>/<city>` with per-page content variation | Build |

## Content Prompts (`docs/site-os/prompts/content/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `seo-aeo-content-generation-prompt.md` | Generate optimized copy for any page | During build, or when refreshing copy | H1, meta title, meta description, direct-answer paragraph, H2/H3 body, FAQs, CTA copy, internal-link plan | Content |
| `content-strengthening-prompt.md` | Improve thin or weak content on existing pages | After QA flags content issues or owner supplies new facts | Before/after diffs per section, new TODOs, validation | Content |

## SEO/AEO Prompts (`docs/site-os/prompts/seo-aeo/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `serp-analysis-prompt.md` | Analyze SERP and competitor patterns for a target keyword | Before creating or strengthening a page | Intent classification, competitor patterns, topic / heading / FAQ gaps, schema opportunities | SEO/AEO |
| `aeo-gap-analysis-prompt.md` | Audit answer-engine readiness on a built page | After build, or when a page isn't ranking in AI results | Per-category PASS/NEEDS WORK/FAIL with recommended fixes | SEO/AEO |

## QA Prompts (`docs/site-os/prompts/qa/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `page-qa-prompt.md` | Structural / design / accessibility QA on a built page | After every page build | Per-category checklist, top issues, ready-for-commit verdict | QA |
| `seo-aeo-qa-prompt.md` | SEO/AEO QA on a built page | After build, paired with `page-qa-prompt.md` | Per-category score, top 3 leverage fixes, recommended next prompt | QA |
| `pre-commit-qa-prompt.md` | Final safety check before staging and committing | Immediately before `git add` | Validation results, safety checks, scope review, GO/WAIT/STOP | QA |

## Update Prompts (`docs/site-os/prompts/updates/`)

| Prompt | Purpose | When to Use | Expected Output | Workflow |
|---|---|---|---|---|
| `content-gap-fix-prompt.md` | Apply targeted fixes from a gap analysis report | After AEO or SEO QA flags specific gaps | Section-level before/after diffs, validation, log entry | Update |
| `content-update-prompt.md` | Safely update data-driven content (phone, email, service area, services, CTAs, legal copy) | When verified business details change (e.g., when phone / email launch blockers resolve) | Updated constants and pages, log entry, validation | Update |

## Reference Docs (`docs/site-os/reference/`)

| Doc | Purpose |
|---|---|
| `client-build-prompt-index.md` | This file. Catalog of all client-side prompts. |
| `seo-aeo-content-standards.md` | Client-side SEO/AEO content standards (page-level rules, FAQ standards, no-doorway, no-stuffing). |
| `service-business-design-standards.md` | Client-side design standards (two-column hero/CTA, service card image placeholder, wide containers, motion). |

## Checklists (`docs/site-os/checklists/`)

| Checklist | Purpose |
|---|---|
| `page-before-build-checklist.md` | Confirm page strategy is ready before sending to Claude Code |
| `page-after-build-checklist.md` | Confirm a built page meets standards |
| `content-quality-checklist.md` | Confirm page content is optimized and conversion-focused |

## Decisions (`docs/site-os/decisions/`)

| Decision | Purpose |
|---|---|
| `client-repo-prompt-standard.md` | Documents the standard that every client repo must include a client-side Site OS prompt system; Corporate Haven adoption record |

## Workflow & Policy Docs (already present in `docs/site-os/`)

| Doc | Purpose |
|---|---|
| `fast-build-batch-workflow.md` | Default workflow — reduces approval friction for low-risk work |
| `file-scope-and-git-safety-policy.md` | Explicit-staging, chained-cd, force-push rules |
| `no-fake-data-policy.md` | Fabrication-prevention rules across content, schema, images, listings |
| `service-business-conversion-layout.md` | Two-column hero/CTA layout standard |
| `service-card-image-placeholder-standard.md` | Service card image-placeholder rule |
| `corporate-haven-build-context.md` | Corporate Haven-specific facts (contact, services, locations, audiences, do-not-invent list) |
| `implementation-log.md` | Running build log |

## How to Use This Catalog

1. **Routing first.** For any page work, classify page type and AI depth per Site OS Master `docs/prompt-router-and-ai-depth-standard.md` before picking a prompt.
2. **High-value pages?** Use the individual high-value prompts in Site OS Master (`prompts/individual-homepage-*`, `conversion-page-*`, `seo-aeo-service-page-*`, `local-seo-location-page-*`, `aeo-faq-hub-prompt.md`). The 8 high-value Phase 1 pages — homepage, /cleveland-ohio, /faq, /services/travel-nurse-housing, /services/medical-professional-housing, /services/insurance-relocation-housing, /check-availability, /contact, /properties/somerset — must use these individual workflows, not the batch prompts.
3. **Batch / scaffold / legal / utility pages?** Pick the relevant batch build prompt under `prompts/build/batch-N-...-prompt.md`.
4. **Drafting copy?** Use `prompts/content/seo-aeo-content-generation-prompt.md`.
5. **Improving live content?** Run `prompts/seo-aeo/aeo-gap-analysis-prompt.md` first, then `prompts/content/content-strengthening-prompt.md` or `prompts/updates/content-gap-fix-prompt.md`.
6. **Updating business data (phone, services, etc.)?** Use `prompts/updates/content-update-prompt.md`. This is the prompt that handles phone/email launch-blocker resolution.
7. **About to commit a high-value page?** Run `prompts/qa/page-qa-prompt.md` + `prompts/qa/seo-aeo-qa-prompt.md` + Site OS Master's high-value page QA + `prompts/qa/pre-commit-qa-prompt.md` in sequence.
8. **About to commit a non-high-value page?** Run `prompts/qa/page-qa-prompt.md` + `prompts/qa/pre-commit-qa-prompt.md`.

## Maintenance

When Site OS Master ships a new layout standard, content standard, or workflow improvement, the client repo does NOT auto-update. To sync, the operator reviews master changes and pulls relevant updates into this repo via a `chore(site-os): sync prompts from master` commit. The sync is opt-in per client.
