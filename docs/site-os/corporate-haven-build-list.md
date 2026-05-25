# Corporate Haven — Build List & Launch-to-Scale Roadmap

**Status**: APPROVED PLAN — documentation only, no source code in this artifact.
**Last updated**: 2026-05-24
**Companion docs**: `docs/site-os/corporate-haven-build-context.md` · `docs/site-os/implementation-log.md` · `docs/site-os/changelog/project-changelog.md` · `docs/brand-guide.md`

---

## A. Project Overview

This file is the master roadmap for Corporate Haven's launch and scale content architecture.

The build list organizes every page and supporting asset on the site — present and planned — into a phased rollout that takes the project from a minimum-viable launch through full topical-authority scale across SEO, GEO, AEO, local-intent SERP visibility, LLM search, and conversion. It is the single document a future Claude Code or Site OS Master run can read to understand: which pages exist, which pages are next, which slugs are final, which schema applies to each page type, how pages link to one another, what conversion modules live on each revenue page, and which search platforms each phase is aligned with.

It supersedes ad-hoc page plans scattered across earlier batches. When new pages are approved, they are added here. When pages launch, their status is updated here. This file is the **first** doc to read before starting any new page batch and the **first** doc to update when scope changes.

The build list does not write code. It does not generate copy. It does not author schema. It points to the Site OS Master prompts that do those things and tells those prompts which page is up next.

---

## B. Business and Search Goals

The roadmap is engineered to advance every one of the following goals on every phase:

- **SEO visibility** — rank for commercial-investigation, transactional, and informational mid-term housing queries in Cleveland and the surrounding service area.
- **GEO and local-intent targeting** — be the unambiguous local answer for furnished mid-term housing in Cleveland, Ohio and Cuyahoga County, including neighborhood-level and hospital-proximity intent.
- **AEO and voice-search readiness** — every page opens with a direct-answer sentence and exposes scannable, voice-friendly Q&A that AI overview, voice-search, and assistant systems can extract verbatim.
- **Local SERP visibility** — match Google's local pack, map pack, and "near me" intent through consistent NAP signals, location pages, and hospital-proximity pages.
- **GSC and Bing Webmaster indexing clarity** — clean sitemap, clean robots, valid schema, unambiguous canonicals, no soft-404s, no duplicate clusters.
- **Apple Search and Apple Maps support** — alignment between site, Apple Business Connect, and the Apple Maps card; consistent location, hours, service-area, and contact data when those launch blockers resolve.
- **Rich snippet eligibility** — FAQPage, BreadcrumbList, LocalBusiness, Service, Article, and DefinedTerm schema appear only where they match visible content, character-for-character.
- **Topical authority** — comprehensive coverage of mid-term housing, corporate housing, healthcare/medical housing, insurance relocation, student housing, and family transitional housing, with hub-and-spoke internal linking and consistent entity language.
- **GBP / GMB alignment** — every business signal on the site mirrors what is filed in Google Business Profile (name, category, service area, services list, hours, contact); no on-site claim is published until GBP can match it.
- **Featured snippets** — answer-first paragraphs, definition blocks, comparison tables, and structured lists positioned for paragraph, list, and table SERP features.
- **People Also Ask visibility** — FAQ clusters and FAQ sections written in the same answer-first form Google reuses in PAA accordion blocks.
- **Knowledge panel / entity clarity** — Organization + LocalBusiness + WebSite schema, consistent NAP, branded mentions, and entity-anchored copy on every page so search engines and LLMs can resolve "Corporate Haven" as a single, locatable entity in Cleveland, Ohio.
- **LLM search visibility in ChatGPT, Perplexity, and similar tools** — answer-first structure, named entities, explicit location, explicit audience, explicit included amenities, and citation-friendly self-contained paragraphs.
- **Customer engagement** — guides, checklists, glossary, comparison content, and audience-specific FAQ clusters that hold attention beyond the conversion path.
- **Customer conversion** — every revenue page funnels to **Check Availability** with above-the-fold and section-level CTAs and a consistent conversion module set.

Each phase below cites which goals it primarily moves.

---

## C. Approved Navigation

Primary navigation must contain exactly these items in this order:

- Home
- Services
- Properties
- Cleveland
- About
- FAQ
- Contact
- **Header CTA: Check Availability**

**Excluded from primary navigation** (per owner decision, `docs/site-os/corporate-haven-build-context.md §17.5`):

- Tenant Portal
- Tenant Requests
- Leasing Survey

These items also do not appear prominently in the public footer. A future low-priority "Existing Tenants" footer section may be added only with explicit owner approval. The exclusion exists to prevent unwanted requests from non-tenants and to keep the public site funnel pointed at **Check Availability**.

---

## D. Approved Homepage Hub Cards

The homepage surfaces six **hub** cards, not five individual service cards. These hubs are conversion pathways and topical hubs, not merely service cards. Each card should guide users into a deeper hub or high-intent service cluster.

| # | Card | URL |
|---|---|---|
| 1 | Mid-Term Rentals | `/services/mid-term-rentals-cleveland/` |
| 2 | Corporate Housing | `/services/corporate-housing-cleveland/` |
| 3 | Travel Nurse & Medical Housing | `/services/healthcare-housing-cleveland/` |
| 4 | Student & Medical Student Housing | `/services/student-housing-cleveland/` |
| 5 | Insurance Relocation Housing | `/services/insurance-relocation-housing-cleveland/` |
| 6 | Family & Transitional Housing | `/services/temporary-family-housing-cleveland/` |

Cards 3, 4, and 6 are **new aggregating hubs** introduced in this roadmap. Cards 1, 2, and 5 keep their existing Cleveland-specific slugs.

**Important rule**: Homepage cards are conversion pathways and topical hubs. They are not merely service cards. Each card should guide users into a deeper hub or high-intent service cluster (supporting service SEO pages, hospital pages, comparison pages, FAQ clusters, and resource articles).

**Current source-of-truth note** (`lib/constants/routes.ts` `SERVICES`): the constant currently exposes 5 service entries (Mid-Term Rentals, Corporate Housing, Travel Nurse Housing, Medical Professional Housing, Insurance Relocation Housing), all on the Cleveland-specific slug pattern set in the prior batch. Migration to the 6-hub structure happens at the start of Phase 2 — driven by an explicit routes.ts batch (out of scope for this documentation update).

---

## E. Final Slug Strategy

Authoritative list of every approved final slug grouped by content layer. Once a page is built, its slug must match this list exactly. No short-slug variants. No `/services/{name}/` without the `-cleveland` suffix unless listed below.

### Core Pages

- `/`
- `/about/`
- `/faq/`
- `/contact/`
- `/check-availability/`
- `/privacy-policy/`
- `/terms/`

### Main Hub Pages

- `/services/`
- `/properties/`
- `/compare/`
- `/locations/`
- `/housing-near-hospitals/`
- `/resources/`

### Homepage Card Hub Pages

- `/services/mid-term-rentals-cleveland/`
- `/services/corporate-housing-cleveland/`
- `/services/healthcare-housing-cleveland/`
- `/services/student-housing-cleveland/`
- `/services/insurance-relocation-housing-cleveland/`
- `/services/temporary-family-housing-cleveland/`

### Supporting Service SEO Pages

- `/services/travel-nurse-housing-cleveland/`
- `/services/medical-professional-housing-cleveland/`
- `/services/medical-student-housing-cleveland/`
- `/services/contract-worker-housing-cleveland/`

### Property Pages

- `/properties/somerset/`

### Hospital Pages

- `/housing-near-cleveland-clinic/`
- `/housing-near-university-hospitals-cleveland/`
- `/housing-near-metrohealth-cleveland/`
- `/housing-near-va-medical-center-cleveland/`
- `/housing-near-case-western-reserve/`

### Comparison Pages

- `/compare/corporate-housing-vs-hotels/`
- `/compare/corporate-housing-vs-airbnb/`
- `/compare/mid-term-rentals-vs-apartments/`
- `/compare/travel-nurse-housing-vs-hotels/`
- `/compare/insurance-housing-vs-hotels/`

### Location Pages

- `/cleveland-ohio/`
- `/locations/mid-term-rentals-cleveland/`
- `/locations/mid-term-rentals-university-circle/`
- `/locations/mid-term-rentals-lakewood/`
- `/locations/mid-term-rentals-cleveland-heights/`
- `/locations/mid-term-rentals-shaker-heights/`

### Resource Center Pages

- `/resources/`
- `/resources/guides/`
- `/resources/checklists/`
- `/resources/glossary/`

### FAQ Cluster Pages

- `/faqs/travel-nurse-housing-cleveland/`
- `/faqs/corporate-housing-cleveland/`
- `/faqs/insurance-relocation-housing-cleveland/`
- `/faqs/student-housing-cleveland/`
- `/faqs/mid-term-rentals-cleveland/`

### Hospital Area Guide Pages

- `/resources/guides/housing-near-cleveland-clinic-guide/`
- `/resources/guides/housing-near-university-hospitals-guide/`
- `/resources/guides/housing-near-metrohealth-guide/`
- `/resources/guides/housing-near-case-western-reserve-guide/`

### Checklist / Lead Magnet Pages

- `/resources/checklists/travel-nurse-housing-checklist-cleveland/`
- `/resources/checklists/corporate-housing-checklist-cleveland/`
- `/resources/checklists/insurance-relocation-housing-checklist-cleveland/`
- `/resources/checklists/furnished-housing-checklist-cleveland/`

### Glossary Pages

- `/resources/glossary/mid-term-housing/`
- `/resources/glossary/corporate-housing/`
- `/resources/glossary/furnished-rental/`
- `/resources/glossary/insurance-relocation-housing/`
- `/resources/glossary/travel-nurse-housing/`
- `/resources/glossary/temporary-housing/`

See `docs/site-os/corporate-haven-build-context.md §18` for the broader slug rules, redirect policy, and homepage internal-link decision.

---

## F. Launch-to-Scale Build Phases

This phase plan replaces and supersedes any older phase plan. Phases run roughly sequentially but later phases can interleave once Phase 1 and Phase 2 are live.

### PHASE 0 — Foundation and Governance

**Purpose**: Lock brand, navigation, slug strategy, data rules, design tokens, schema rules, and no-fake-data rules before scaling content.

**Pages / tasks**:

- Homepage foundation
- Brand guide (`docs/brand-guide.md`)
- Build context (`docs/site-os/corporate-haven-build-context.md`)
- Final slug strategy (`docs/site-os/corporate-haven-build-context.md §18`)
- Final build list (this file)
- Route planning (`lib/constants/routes.ts`)
- Schema rules (`lib/constants/seo.ts` + locked JSON-LD blocks on homepage)
- Internal linking rules (Section H below)
- Missing-data tracker (`docs/site-os/corporate-haven-build-context.md §12-13`)

**Goal**: Prevent rework before pages are built.

**Goal targets**: SEO foundation · GEO entity setup · AEO scaffolding · GSC/Bing readiness · no-fake-data discipline.

**Status**: ✅ Substantially complete. Homepage shipped (commit `5d1910f`), slug strategy locked (commit `f8856a2`), brand and email decisions wired, navigation locked.

---

### PHASE 1 — Launch Core and Conversion Foundation

**Purpose**: Create the minimum launch-ready site structure for trust, conversion, and indexability.

**Pages**:

1. `/` — Homepage
2. `/services/` — Services Hub
3. `/properties/` — Properties Hub
4. `/properties/somerset/` — The Somerset
5. `/cleveland-ohio/` — Cleveland Service Area Page
6. `/about/` — About
7. `/faq/` — Main FAQ
8. `/contact/` — Contact
9. `/check-availability/` — Check Availability
10. `/privacy-policy/`
11. `/terms/`

**Why this phase matters**: This phase supports launch, trust, lead capture, internal links, and baseline entity clarity. Without all 11 of these, the site cannot ship a credible launch — every navigation link must resolve, every footer link must resolve, every CTA must land, and basic legal pages must exist before any indexable rollout.

**Goal targets**: SEO baseline · GEO baseline · AEO foundation (FAQ + homepage) · GSC/Bing indexing readiness · conversion baseline · entity clarity.

**Status**: 1/11 live (`/` only). 10 pages remaining.

---

### PHASE 2 — Homepage Hub Card Pages

**Purpose**: Build the six primary user pathways linked from the homepage. These pages create the first layer of topical authority and guide users by intent.

**Pages**:

1. `/services/mid-term-rentals-cleveland/`
2. `/services/corporate-housing-cleveland/`
3. `/services/healthcare-housing-cleveland/`
4. `/services/student-housing-cleveland/`
5. `/services/insurance-relocation-housing-cleveland/`
6. `/services/temporary-family-housing-cleveland/`

**Why this phase matters**: This phase turns the homepage into a structured conversion and topical hub system. Each page is the canonical landing surface for its audience and the parent that anchors its supporting service, hospital, comparison, resource, and FAQ children.

**Goal targets**: SEO topical authority · AEO hub depth · LLM entity clarity · conversion routing · internal linking foundation.

**Routes prerequisite**: this phase begins with a small `lib/constants/routes.ts` edit batch that updates `SERVICES` to the 6-hub structure (Section D). That edit is out of scope for the current documentation batch.

---

### PHASE 3 — Fastest ROI Search Pages

**Purpose**: Capture high-intent users actively searching for Cleveland housing now.

**Pages**:

1. `/services/travel-nurse-housing-cleveland/`
2. `/housing-near-cleveland-clinic/`
3. `/services/medical-professional-housing-cleveland/`
4. `/housing-near-university-hospitals-cleveland/`
5. `/services/medical-student-housing-cleveland/`

**Why this phase matters**: This phase targets travel nurses, healthcare workers, hospital proximity searches, and medical/student housing demand. These are some of the highest-conversion, most time-sensitive housing queries Corporate Haven can serve — the assignment dates and rotation start dates are typically firm.

**Goal targets**: SEO local-intent · GEO hospital proximity · AEO PAA · LLM citation · conversion of urgent-intent audiences · featured snippets for "housing near {hospital}" queries.

---

### PHASE 4: Core Service Expansion

**Purpose**: Strengthen and complete the core service surface that supports Cleveland mid-term housing demand. This phase introduces Contract Worker Housing as a dedicated supporting service SEO page and revisits four service pages whose canonical implementation lives in earlier phases.

**Pages**:

1. `/services/mid-term-rentals-cleveland/` (canonical build in Phase 2; Phase 4 may expand or strengthen rather than duplicate)
2. `/services/medical-professional-housing-cleveland/` (canonical build in Phase 3; Phase 4 may expand or strengthen rather than duplicate)
3. `/services/medical-student-housing-cleveland/` (canonical build in Phase 3; Phase 4 may expand or strengthen rather than duplicate)
4. `/services/temporary-family-housing-cleveland/` (canonical build in Phase 2; Phase 4 may expand or strengthen rather than duplicate)
5. `/services/contract-worker-housing-cleveland/` (NEW supporting service page; parent hub is `/services/corporate-housing-cleveland/`)

**Why this phase matters**: This phase rounds out the core service surface so every primary audience identified in `docs/site-os/corporate-haven-build-context.md §5` has a dedicated landing page using the final Cleveland-specific slug pattern. Contract Worker Housing is the most underserved audience in the prior phase plan; this phase makes it explicit.

**Phase 4 vs Phase 2 / Phase 3 note**: Four of the five listed pages already have canonical build slots in Phase 2 (homepage hub cards) or Phase 3 (fastest ROI search pages). Do not rebuild those pages in Phase 4. Phase 4 enriches them with content depth, FAQ expansion, internal-link tightening, and any cross-cluster linking that becomes obvious once the hub-and-spoke structure is live. Phase 4 originates Contract Worker Housing as a brand-new page.

**Goal targets**: SEO supporting-page depth, AEO audience-specific Q&A surface, conversion routing for contract worker / consultant / project-team audiences, internal linking density across the Corporate Housing cluster (Section Q below).

---

### PHASE 5 — Comparison and Decision Pages

**Purpose**: Capture decision-stage visitors comparing housing options and remove objections before conversion.

**Pages**:

1. `/compare/` — Comparison Hub
2. `/compare/corporate-housing-vs-hotels/`
3. `/compare/travel-nurse-housing-vs-hotels/`
4. `/compare/corporate-housing-vs-airbnb/`
5. `/compare/mid-term-rentals-vs-apartments/`
6. `/compare/insurance-housing-vs-hotels/`

**Why this phase matters**: Comparison pages support featured snippets, PAA, AEO, LLM answers, and decision-stage conversions. They convert the visitor who already knows Corporate Haven is an option and is deciding between alternatives — typically the highest commercial-intent traffic on the site.

**Goal targets**: Featured snippets (table + paragraph) · PAA · AEO · LLM comparison citations · decision-stage conversion · objection handling.

---

### PHASE 6 — Hospital Housing Expansion

**Purpose**: Expand high-intent local healthcare housing reach without implying official hospital partnerships.

**Pages**:

1. `/housing-near-hospitals/` — Hospital Housing Hub
2. `/housing-near-metrohealth-cleveland/`
3. `/housing-near-va-medical-center-cleveland/`
4. `/housing-near-case-western-reserve/`

**Already targeted in earlier phases (link here from the hub)**:

- `/housing-near-cleveland-clinic/` (Phase 3)
- `/housing-near-university-hospitals-cleveland/` (Phase 3)

**Why this phase matters**: Hospital pages are local-intent SEO pages that match urgent, high-conversion housing searches. Cleveland's hospital ecosystem (Cleveland Clinic, University Hospitals, MetroHealth, VA Medical Center, Case Western Reserve teaching network) defines a significant share of the mid-term housing demand in the city.

**Goal targets**: SEO local-intent · GEO hospital-anchored entity clarity · AEO PAA · LLM citation for "where to stay near {hospital}" queries.

**Hospital language caution applies**: see Section M.

---

### PHASE 7 — Location and Neighborhood Cluster

**Purpose**: Expand Cleveland-area GEO visibility and neighborhood-level topical coverage.

**Pages**:

1. `/locations/` — Locations Hub
2. `/locations/mid-term-rentals-cleveland/`
3. `/locations/mid-term-rentals-university-circle/`
4. `/locations/mid-term-rentals-lakewood/`
5. `/locations/mid-term-rentals-cleveland-heights/`
6. `/locations/mid-term-rentals-shaker-heights/`

**Why this phase matters**: This phase supports local SERP visibility, neighborhood relevance, Apple Search, GBP alignment, and GEO expansion. `/cleveland-ohio/` remains the main Cleveland service-area page; `/locations/mid-term-rentals-cleveland/` is the keyword-focused complement.

**Goal targets**: GEO neighborhood depth · local SERP coverage · Apple Maps support · GBP / Bing Places consistency · long-tail "mid-term rentals {neighborhood}" capture.

---

### PHASE 8 — Resource Center and Guides

**Purpose**: Build AEO, featured snippet, PAA, and LLM-friendly educational content.

**Pages**:

1. `/resources/` — Resource Center Hub
2. `/resources/guides/`
3. `/resources/guides/what-is-mid-term-housing/`
4. `/resources/guides/corporate-housing-vs-hotels-cleveland/`
5. `/resources/guides/how-to-find-furnished-housing-near-cleveland-clinic/`
6. `/resources/guides/insurance-relocation-housing-guide-cleveland/`
7. `/resources/guides/housing-near-cleveland-clinic-guide/`
8. `/resources/guides/housing-near-university-hospitals-guide/`
9. `/resources/guides/housing-near-metrohealth-guide/`
10. `/resources/guides/housing-near-case-western-reserve-guide/`

**Why this phase matters**: Resource content supports LLM citations, answer engines, featured snippets, PAA, long-tail search, and user education. Guides are long-form, citation-friendly, and rank for informational queries that conversion pages do not.

**Goal targets**: AEO depth · LLM citation pool · featured snippets · long-tail SEO · informational-intent coverage · topical authority depth.

---

### PHASE 9 — FAQ Clusters and Answer Engine Content

**Purpose**: Create focused FAQ pages that answer user questions by audience and intent.

**Pages**:

1. `/faqs/travel-nurse-housing-cleveland/`
2. `/faqs/corporate-housing-cleveland/`
3. `/faqs/insurance-relocation-housing-cleveland/`
4. `/faqs/student-housing-cleveland/`
5. `/faqs/mid-term-rentals-cleveland/`

**Why this phase matters**: FAQ clusters support FAQ schema, PAA visibility, AEO, voice search, and LLM extraction. Each cluster lives under `/faqs/` and complements (does not replace) the main `/faq/` hub.

**Goal targets**: PAA dominance per cluster · FAQPage schema · voice-search readiness · LLM answer-extraction depth · audience-specific AEO.

---

### PHASE 10 — Checklists and Conversion Assets

**Purpose**: Create practical conversion assets that help users take action and support lead capture.

**Pages**:

1. `/resources/checklists/`
2. `/resources/checklists/travel-nurse-housing-checklist-cleveland/`
3. `/resources/checklists/corporate-housing-checklist-cleveland/`
4. `/resources/checklists/insurance-relocation-housing-checklist-cleveland/`
5. `/resources/checklists/furnished-housing-checklist-cleveland/`

**Why this phase matters**: Checklist pages support engagement, downloadable lead magnets, email follow-up, sales enablement, and conversion. They are revenue assets disguised as helpful content.

**Goal targets**: Engagement depth · lead capture · email list growth · sales-enablement asset library · long-tail informational SEO.

---

### PHASE 11 — Glossary and Topical Authority Expansion

**Purpose**: Create definition-based content that improves topical authority and LLM/entity understanding.

**Pages**:

1. `/resources/glossary/`
2. `/resources/glossary/mid-term-housing/`
3. `/resources/glossary/corporate-housing/`
4. `/resources/glossary/furnished-rental/`
5. `/resources/glossary/insurance-relocation-housing/`
6. `/resources/glossary/travel-nurse-housing/`
7. `/resources/glossary/temporary-housing/`

**Why this phase matters**: Glossary pages support definition queries, featured snippets, LLM search, semantic SEO, and internal linking. Definitions are the single highest-density source of "What is X?" PAA and AI-overview citations.

**Goal targets**: Featured snippet (definition format) · LLM definition citations · semantic SEO · entity-cluster anchoring · internal linking depth.

---

### PHASE 12 — Technical SEO, Indexing, and Entity Reinforcement

**Purpose**: Strengthen crawlability, structured data, tracking readiness, and search engine submission workflows.

**Tasks**:

- `app/sitemap.ts`
- `app/robots.ts`
- Canonical verification
- Schema validation
- Metadata QA
- Internal link QA
- Google Search Console readiness
- Bing Webmaster readiness
- Apple Business Connect / Apple Maps consistency checklist
- GBP / GMB alignment checklist
- Knowledge panel / entity consistency checklist
- Final redirect review only if needed for old or conflicting URLs

**Why this phase matters**: This phase makes the content easier for search engines, maps platforms, and LLMs to discover, understand, and cite. It can begin in parallel with Phase 1–2 (sitemap and robots can be wired the moment Phase 1 routes exist) but its full checklist completes at scale.

**Goal targets**: GSC clarity · Bing Webmaster clarity · Apple Search / Apple Maps consistency · GBP / GMB parity · knowledge panel reinforcement · sitemap + robots correctness · canonical hygiene · rich-snippet eligibility · LLM crawl-friendliness.

---

### PHASE 13 — Analytics, GTM, GA4, and Measurement System

**Purpose**: Implement a structured analytics system that tracks user engagement, housing intent, local intent, content authority, and conversion behavior across the Corporate Haven website.

**Tasks**:

1. Create measurement strategy document. *(✅ `docs/site-os/analytics-measurement-plan.md`, 2026-05-24)*
2. Create GTM/GA4 event taxonomy. *(✅ `docs/site-os/gtm-ga4-event-taxonomy.md`, 2026-05-24)*
3. Add GTM container support through an environment variable (`NEXT_PUBLIC_GTM_ID`).
4. Manage GA4 through GTM unless direct GA4 installation is explicitly approved.
5. Create dataLayer utility (`lib/analytics/data-layer.ts`).
6. Create event tracking helper (`lib/analytics/events.ts`).
7. Track CTA clicks (`check_availability_click`, `contact_click`, `email_click`, `phone_click` when phone is confirmed).
8. Track homepage hub card clicks (`housing_card_click` × 6 — controlled-vocabulary `housing_type` / `audience_type` per `gtm-ga4-event-taxonomy.md §D`).
9. Track form starts and submit attempts (`form_start`, `form_step_view`, `form_field_complete`, `form_submit_attempt`, `form_submit_success`, `form_submit_error`).
10. Track FAQ opens (`faq_open`).
11. Track email clicks (`email_click` from footer, contact page, anywhere `mailto:` appears).
12. Track service, property, hospital, location, comparison, resource, checklist, glossary, and FAQ cluster clicks (`service_page_click`, `property_page_click`, `hospital_page_click`, `location_page_click`, `comparison_click`, `resource_click`, `guide_click`, `checklist_click`, `glossary_click`, `faq_cluster_click`).
13. Define GA4 conversions (`check_availability_click`, `form_start`, `form_submit_success` once endpoint is verified, `contact_click`, `email_click`, `phone_click` when phone is confirmed).
14. Add GTM testing checklist (Preview mode validation per `gtm-ga4-event-taxonomy.md §G`).
15. Add GA4 DebugView checklist (event firing verification per `gtm-ga4-event-taxonomy.md §H`).
16. Add GSC, Bing Webmaster, GBP/GMB, and Apple Business Connect UTM alignment notes (`analytics-measurement-plan.md §J`).

**Why this phase matters**: This phase turns the website into a measurable growth system. It allows Corporate Haven to understand what content drives traffic, what pages create housing intent, what CTAs produce leads, and what topics support SEO, AEO, GEO, LLM visibility, and conversion.

**Goal targets**: GA4 measurability for every conversion event · clean GSC + Bing Webmaster + GBP/GMB + Apple Business Connect attribution via UTM strategy · LLM/AI-assistant traffic visibility through acquisition reports · housing-intent and content-authority depth measurement · privacy-safe tracking with no PII in any event parameter.

**References**:

- `docs/site-os/analytics-measurement-plan.md` (strategy, goals, event groups, page-type rules, privacy notes, UTM strategy, implementation hold)
- `docs/site-os/gtm-ga4-event-taxonomy.md` (event naming rules, master taxonomy table, homepage event specs, 6 hub card triples, dataLayer payload examples, GA4 conversion list, GTM + DebugView checklists)

**Implementation hold**: Phase 12 implementation is held until GTM container ID is available, GA4 property is created, GTM event taxonomy is approved, form endpoint/provider decision is confirmed, and privacy/consent requirements are reviewed (`analytics-measurement-plan.md §L`).

**Status**: 2/16 tasks complete (planning documents authored). 14 tasks pending until implementation hold lifts.

---

## G. Page Type Schema Map

Recommended JSON-LD schema by page type. All schema must match visible content character-for-character. Do not emit any schema for fields not visible on the page.

### Homepage

- `Organization`
- `LocalBusiness`
- `WebSite`
- `FAQPage`

### Hub Pages (Services, Properties, Compare, Locations, Housing-Near-Hospitals, Resources)

- `CollectionPage`
- `Service` where relevant
- `FAQPage` if visible FAQs exist
- `BreadcrumbList`

### Service Pages (Cleveland-specific homepage hub cards + supporting service SEO pages)

- `Service`
- `FAQPage`
- `BreadcrumbList`

### Hospital Pages

- `WebPage`
- `Service`
- `FAQPage`
- `BreadcrumbList`

### Comparison Pages

- `WebPage`
- `FAQPage`
- `BreadcrumbList`

### Property Pages

- `Accommodation` or `LodgingBusiness` **only if verified** (do not emit until property is owner-verified end-to-end including photography, address decision, amenity list, and rental-registration status)
- `FAQPage` if visible FAQs exist
- `BreadcrumbList`

### Resource Articles (Guides, Checklists)

- `Article`
- `FAQPage` if visible FAQ exists
- `BreadcrumbList`

### Glossary Pages

- `DefinedTerm` or `WebPage`
- `BreadcrumbList`
- `FAQPage` if visible FAQs exist

### Schema Hard Rules

- Do **not** use `AggregateRating`, `Review`, `price`, `offer`, `availability`, `partner`, or `endorsement` schema unless verified.
- Do **not** emit `telephone`, `email`, `streetAddress`, `openingHours`, `logo`, or `sameAs` until the underlying field is CONFIRMED.
- `LocalBusiness.areaServed` may include Cleveland (City) + Cuyahoga County (AdministrativeArea) per the locked homepage spec.

---

## H. Internal Linking Rules

- Homepage links to the 6 homepage hub cards.
- `/services/` links to all 6 homepage hub pages and all supporting service pages.
- Each homepage card hub links to relevant child SEO pages, hospital pages, resource pages, comparison pages, FAQ pages, and **Check Availability**.
- Hospital hub (`/housing-near-hospitals/`) links to all hospital pages and the relevant healthcare service pages.
- Comparison hub (`/compare/`) links to all comparison pages and related service pages.
- Location hub (`/locations/`) links to all location pages and relevant service pages.
- Resource center (`/resources/`) links to guides, checklists, FAQs, glossary, and conversion pages.
- Child pages link back to their parent hub.
- **Every revenue page must include links to Check Availability and Contact.**

Hub-and-spoke linking is the structural backbone of topical authority for this build. Avoid orphan pages. Avoid one-way hub-to-child links without the child linking back. Avoid burying CTAs below the fold on revenue pages.

---

## I. Conversion Module Rules

Every revenue page must include all of the following modules:

- Above-the-fold CTA
- **Check Availability** CTA (header + body + footer level on every revenue page)
- Trust bullets (verified facts only — see `docs/site-os/no-fake-data-policy.md`)
- "Who this is for" section
- "What is included" section
- "Best-fit" section (when this option fits — and when it does not)
- FAQ section (matches FAQPage schema)
- Related pages block (parent hub + 2–4 sibling pages + 1 comparison page when applicable)
- Contact or availability CTA block (closing module)

Revenue pages = homepage, every service page, every hospital page, every comparison page, every location page, `/properties/somerset/`, `/check-availability/`, `/contact/`. Resource pages (guides, checklists, glossary) include a subset of the above, scaled to their informational role.

---

## J. AEO / Featured Snippet / PAA Rules

Every page should include the applicable subset of:

- Direct-answer intro (answer the implied question in sentence 1, expand in sentence 2)
- Scannable H2 questions where appropriate
- Short definition section if relevant (`<dl>` or `<p>` with the term in bold)
- FAQ section
- Comparison table where relevant
- Bulleted summary
- Schema matching visible content (character-for-character)

Voice-search rule: every FAQ answer must read as a complete sentence with no ambiguous pronouns ("Yes, Corporate Haven provides…" rather than "Yes, we do.").

PAA rule: every FAQ question should be phrased exactly as the user types or speaks it ("What is mid-term housing?" not "Mid-term housing definition").

Featured snippet rule: pages that target a snippet feature must include the snippet-shaped element early in the page — a 40–60-word paragraph for paragraph snippets, a numbered ordered list of 4–8 items for list snippets, a 3+ row HTML table for table snippets.

---

## K. LLM Search and Entity Rules

Every major page should clearly state:

- Who Corporate Haven is
- What Corporate Haven provides
- Where Corporate Haven operates
- Who the page serves
- What makes the housing option useful
- What next step the visitor should take

Entity language must be consistent across the site:

- **Brand name**: Corporate Haven (no abbreviations, no alternate capitalizations)
- **Location**: Cleveland, Ohio (and Cuyahoga County for service-area framing)
- **Service category**: furnished mid-term rentals and corporate housing
- **Audience**: name the audience explicitly when the page targets one (travel nurses, medical professionals, insurance relocation guests, students, families in transition)
- **Property**: The Somerset (when referenced)

Avoid pronouns ("we", "us", "our") in answer-first paragraphs and FAQ answers where an LLM would need to resolve the antecedent without context.

---

## L. GBP / GMB and Apple Search Alignment

- Keep business name consistent as **Corporate Haven**.
- Use **Cleveland, Ohio** and **Cuyahoga County** consistently.
- Do not add phone / address / hours to the site until confirmed; do not file conflicting data to GBP, Bing Places, or Apple Business Connect.
- Use **contact@corporatehaven.net** as visible email (clickable href `mailto:contact@inbox.corporatehaven.net` per the split-inbox decision).
- Align GBP service categories and website service pages once GBP work begins (primary category candidate: Corporate Housing or Furnished Apartments).
- Use location and service-area consistency across site, GBP, Bing Places, and Apple Business Connect.

When the launch blockers (`docs/site-os/corporate-haven-build-context.md §12`) for phone, public address, and hours resolve, update this section, the LocalBusiness schema helper, and the relevant external profiles in the same batch to keep parity.

---

## M. Hospital Language Caution

Hospital pages may target searches for housing near Cleveland hospitals, but content must not imply official partnerships, preferred vendor status, affiliation, endorsement, or approval unless explicitly verified.

**Approved phrasing**:

- Housing near Cleveland Clinic
- Furnished housing near University Hospitals Cleveland
- Mid-term housing for medical professionals working near Cleveland hospitals

**Avoid**:

- Official Cleveland Clinic housing
- Cleveland Clinic approved housing
- Partner housing for University Hospitals
- Preferred housing provider for MetroHealth

The same caution applies to insurance carriers, employers, and academic institutions named on any page. Mention proximity and audience fit; do not claim status, affiliation, or endorsement.

---

## N. Redirect Policy

Redirects are deferred. The build should use final SEO slugs from the start (Section E). Redirects should only be added later if an old published URL, indexed URL, or conflicting internal URL must be preserved.

This is restated in `docs/site-os/corporate-haven-build-context.md §18.9` and was the central decision of commit `f8856a2` (2026-05-24).

---

## O. Missing Data and No-Fake-Data Rules

Carry forward, unchanged:

- Phone missing
- Public address missing
- Hours missing
- Final logo asset missing
- Property photography missing
- Testimonials missing
- Ratings / reviews missing
- Pricing missing
- Licenses / insurance missing
- Form endpoint missing

**Do not invent any of these.** Schema must omit any field tied to an unverified fact. Copy must not include any claim tied to an unverified fact. Each item above lives as a launch blocker in `docs/site-os/corporate-haven-build-context.md §12` and a content blocker in `§13`. See `docs/site-os/no-fake-data-policy.md` for the full 12-category fabrication-prevention spec.

---

## P. Future Page Workflow Rule

Every new page must follow the Site OS Master workflow:

1. Research
2. Keyword type research
3. SEO / AEO / GEO strategy
4. Page outline
5. Final locked copy
6. Schema plan
7. Internal link plan
8. Image plan
9. Claude Code build prompt
10. QA
11. Validation (type-check + lint + build + static-export)
12. Commit and push (with explicit file staging — no `git add .` or `git add -A`)

This roadmap is the input to step 1. Steps 2–9 produce the content lock for the page. Step 10 is `prompts/qa/pre-commit-qa-prompt.md`. Steps 11–12 are non-negotiable.

---

## Q. Cluster Internal-Linking Structure and Contract Worker Housing Page Plan (2026-05-24)

This section adds the cluster-level internal-linking structure introduced when Contract Worker Housing Cleveland joined the build plan, plus the homepage audience grid link mapping, plus the detailed planning block for the Contract Worker page itself. Read alongside Sections D, E, F, and H.

### Q.1 Homepage Hub Card Strategy (clarification)

The homepage uses 6 hub or pathway cards, not simple service cards. Each homepage card links to a hub or high-intent parent page. Supporting SEO pages sit beneath or connect from those hubs through internal links.

The 6 approved homepage hub cards (unchanged from Section D):

1. Mid-Term Rentals: `/services/mid-term-rentals-cleveland/`
2. Corporate Housing: `/services/corporate-housing-cleveland/`
3. Travel Nurse & Medical Housing: `/services/healthcare-housing-cleveland/`
4. Student & Medical Student Housing: `/services/student-housing-cleveland/`
5. Insurance Relocation Housing: `/services/insurance-relocation-housing-cleveland/`
6. Family & Transitional Housing: `/services/temporary-family-housing-cleveland/`

Rule: homepage cards are conversion pathways and topical hubs. Each homepage card links to a hub or high-intent parent page. Supporting SEO pages sit beneath or connect from those hubs through internal links, not from the homepage card grid directly.

### Q.2 Updated Supporting Service SEO Pages

Adds `/services/contract-worker-housing-cleveland/` to the supporting service SEO page list (mirrored in Section E):

- `/services/travel-nurse-housing-cleveland/`
- `/services/medical-professional-housing-cleveland/`
- `/services/medical-student-housing-cleveland/`
- `/services/contract-worker-housing-cleveland/`

### Q.3 Corporate Housing Cluster

**Parent hub**: `/services/corporate-housing-cleveland/`

**Supporting pages**:

- `/services/contract-worker-housing-cleveland/`

**Potential future pages, not approved for build yet**:

- `/services/corporate-relocation-housing-cleveland/`
- `/services/project-team-housing-cleveland/`
- `/services/workforce-housing-cleveland/`

**Internal links**:

- Corporate Housing hub should link to Contract Worker Housing.
- Contract Worker Housing should link back to Corporate Housing hub.
- Contract Worker Housing should link to Mid-Term Rentals where relevant.
- Contract Worker Housing should link to Check Availability.
- Contract Worker Housing may link to Corporate Housing vs Hotels when the comparison page exists.
- Contract Worker Housing may link to furnished housing checklist when the checklist page exists.

### Q.4 Healthcare Housing Cluster

**Parent hub**: `/services/healthcare-housing-cleveland/`

**Supporting pages**:

- `/services/travel-nurse-housing-cleveland/`
- `/services/medical-professional-housing-cleveland/`
- `/housing-near-hospitals/`
- `/housing-near-cleveland-clinic/`
- `/housing-near-university-hospitals-cleveland/`

### Q.5 Student Housing Cluster

**Parent hub**: `/services/student-housing-cleveland/`

**Supporting pages**:

- `/services/medical-student-housing-cleveland/`
- `/housing-near-case-western-reserve/`
- `/locations/mid-term-rentals-university-circle/`

### Q.6 Homepage Audience Grid Link Strategy

The homepage Audience grid (Section 5 of `app/page.tsx`, "Who stays with Corporate Haven?") should use the following audience-to-page link mapping. Audience grid cards should use subtle contextual links. They should not compete with the 6 homepage hub cards as the primary conversion pathway.

| Audience | Link target |
|---|---|
| Traveling professionals | `/services/corporate-housing-cleveland/` |
| Travel nurses | `/services/travel-nurse-housing-cleveland/` |
| Medical professionals | `/services/medical-professional-housing-cleveland/` |
| Healthcare support staff | `/services/healthcare-housing-cleveland/` |
| Relocating families | `/services/temporary-family-housing-cleveland/` |
| Insurance relocation guests | `/services/insurance-relocation-housing-cleveland/` |
| Students and interns | `/services/student-housing-cleveland/` |
| Families in transition | `/services/temporary-family-housing-cleveland/` |
| Contract workers | `/services/contract-worker-housing-cleveland/` |
| Consultants | `/services/corporate-housing-cleveland/` |

Rule (restated): Audience grid cards should use subtle contextual links. They should not compete with the 6 homepage hub cards as the primary conversion pathway. The hub cards are the primary conversion surface; the audience grid is a secondary recognition surface that routes by audience identity.

Implementation note: as of 2026-05-24, the homepage audience grid in `app/page.tsx` does not yet carry per-audience link wrappers. Implementing the per-audience links is a future homepage refinement batch and is out of scope for this documentation update.

### Q.7 Contract Worker Housing Page Plan

**Page**: Contract Worker Housing Cleveland

**URL**: `/services/contract-worker-housing-cleveland/`

**Parent hub**: `/services/corporate-housing-cleveland/`

**Primary audience**: Contract workers, project-based workers, consultants, traveling crews, technical contractors, trade professionals, temporary assignment workers, and field teams.

**Primary intent**: Furnished housing in Cleveland for temporary work assignments, project stays, contract roles, and professional work placements.

**Suggested H1**: Contract Worker Housing in Cleveland, Ohio

**Suggested positioning**: Furnished mid-term housing for project-based workers, trade professionals, consultants, traveling crews, and contract employees who need flexible housing in Cleveland for one to six months.

**Suggested internal links** (matches Q.3 above with the addition of Contact):

- `/services/corporate-housing-cleveland/`
- `/services/mid-term-rentals-cleveland/`
- `/compare/corporate-housing-vs-hotels/`
- `/resources/checklists/furnished-housing-checklist-cleveland/`
- `/check-availability/`
- `/contact/`

**No-fake-data cautions**: Do not claim employer partnerships, crew discounts, union affiliation, specific jobsite proximity, guaranteed availability, negotiated workforce rates, or bulk housing options unless verified. See `docs/site-os/no-fake-data-policy.md` for the broader prohibition list.

### Q.8 Final Slug Strategy (additive)

The final slug strategy now includes `/services/contract-worker-housing-cleveland/` (also mirrored in Section E Supporting Service SEO Pages).

Do not add root-level `/contract-worker-housing-cleveland/`.

Do not add short `/services/contract-worker-housing/`.

The redirect policy in Section N continues to apply: redirects are deferred. Final SEO slugs are used from the start. Redirects are only added later if an old published URL, indexed URL, or conflicting internal URL must be preserved.

### Q.9 Analytics Planning Note

The companion `docs/site-os/gtm-ga4-event-taxonomy.md` defines the Phase 13 event taxonomy. When the Homepage Audience Grid Link Strategy in Q.6 is implemented, the audience grid link clicks should be tracked with a dedicated event.

Recommended event for the Contract Workers audience grid card:

- `event`: `audience_grid_click`
- `audience_type`: `contract_workers`
- `link_url`: `/services/contract-worker-housing-cleveland/`

The `audience_grid_click` event is not yet defined in the Phase 13 event taxonomy table. Add it (with one entry per audience row in Q.6) when the audience grid implementation batch begins. This planning note does not modify the analytics docs.

---

Corporate Haven Build List v1.1
Last updated: 2026-05-24 (Contract Worker Housing added, Section Q added, Phase 4 inserted, Phases 4-12 renumbered to 5-13)
Authored from: Build List Expansion and Launch-to-Scale Phase Plan decision (2026-05-24) + Contract Worker Housing Build List Update (2026-05-24)
