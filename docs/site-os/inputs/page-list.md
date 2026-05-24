# Corporate Haven — Phase 1 Launch Page List

Canonical page-list inventory for the Corporate Haven build. Source of truth referenced by Prompts 01 through 05, Prompt 10, and Prompt 20 for page inventory and build-sequencing.

## Project Metadata

- **Client**: Corporate Haven
- **Current site**: https://corporatehaven.net/
- **Production domain (assumed)**: corporatehaven.net (APPROVED PLACEHOLDER — owner to confirm replacement of existing site)
- **Project type**: Local service business (fully furnished mid-term rentals and corporate housing)
- **Primary market**: Cleveland, Ohio
- **Stack**: Next.js (App Router) + TypeScript + Tailwind CSS → Cloudflare Pages static export
- **Phase A intake**: CLEARED WITH FLAGS (2026-05-23)

## Page-List Conventions

| Status | Meaning |
|---|---|
| **planned** | Approved for Phase 1, build not started |
| **in-progress** | Active build (Gate 1/2/3 underway) |
| **built** | Code committed, awaiting QA |
| **qa-passed** | Prompt 07 QA APPROVED or CONDITIONALLY APPROVED |
| **shipped** | Deployed to production and verified |

Launch tiers:

| Tier | Meaning |
|---|---|
| **MVP** | Required for Phase 1 launch |
| **deferred** | Phase 2 candidate |
| **post-launch** | Add after first production verification |

## Phase 1 Launch Pages (20)

| # | Route | Page Type | AI Depth | Tier | Priority | Primary Keyword (placeholder — confirm in Prompt 01) | User Intent | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | Homepage | L5 Beyond-Elite | MVP | P0 | corporate housing cleveland ohio | Discovery / brand entry | planned | 12-audience funnel; entity/knowledge-panel target |
| 2 | `/about` | Trust + Brand Story | L3 Core Trust | MVP | P1 | corporate haven cleveland | Trust / verification | planned | Owner story MISSING — FLAGGED |
| 3 | `/contact` | Conversion + Trust | L4 Conversion | MVP | P0 | contact corporate haven | Contact intent | planned | Phone/email MISSING — FLAGGED |
| 4 | `/check-availability` | Conversion | L4 Conversion | MVP | P0 | check availability corporate housing cleveland | Transactional | planned | Main lead form host; vendor MISSING — FLAGGED |
| 5 | `/services` | Services Hub | L3 Core SEO/AEO | MVP | P1 | corporate housing services cleveland | Service taxonomy | planned | |
| 6 | `/services/mid-term-rentals` | Service | L3 | MVP | P1 | mid-term rentals cleveland | Service intent | planned | |
| 7 | `/services/corporate-housing` | Service | L3 | MVP | P1 | corporate housing cleveland ohio | Service intent | planned | |
| 8 | `/services/travel-nurse-housing` | Service | **L5 Beyond-Elite** | MVP | P0 | travel nurse housing cleveland | Audience-critical service intent | planned | Highest-leverage audience segment |
| 9 | `/services/medical-professional-housing` | Service | **L5 Beyond-Elite** | MVP | P0 | medical professional housing cleveland | Audience-critical service intent | planned | Cleveland Clinic / UH / MetroHealth catchment |
| 10 | `/services/insurance-relocation-housing` | Service | **L5 Beyond-Elite** | MVP | P0 | insurance relocation housing cleveland | Audience-critical service intent | planned | Displaced-guest segment |
| 11 | `/services/family-relocation-housing` | Service | L3 | MVP | P2 | family relocation housing cleveland | Service intent | planned | |
| 12 | `/services/student-intern-housing` | Service | L3 | MVP | P2 | student intern housing cleveland | Service intent | planned | |
| 13 | `/cleveland-ohio` | Primary Location | **L5 Beyond-Elite** | MVP | P0 | corporate housing cleveland ohio | Local intent / GEO | planned | Primary GEO target; final slug to confirm (`/cleveland-ohio` vs `/locations/cleveland-oh`) |
| 14 | `/properties` | Properties Hub | L3 | MVP | P1 | corporate haven properties cleveland | Browse / inventory | planned | Single-property today; ready for expansion |
| 15 | `/properties/somerset` | Featured Property | L4 Conversion | MVP | P0 | somerset furnished rental cleveland 44108 | Property-specific transactional | planned | Only verified property; shared bath/entrance must be disclosed |
| 16 | `/faq` | AEO FAQ Hub | **L5 AEO Hub** | MVP | P0 | corporate housing faq cleveland | Informational / AEO | planned | 30+ FAQs across 9 categories per FAQ-hub prompt |
| 17 | `/privacy-policy` | Legal | L1 Utility | MVP | P0 | — | Compliance | planned | Required for form consent; copy MISSING — FLAGGED |
| 18 | `/terms` | Legal | L1 Utility | MVP | P0 | — | Compliance | planned | Copy MISSING — FLAGGED |
| 19 | `/thank-you` | Utility Confirmation | L1 | MVP | P1 | — | Post-conversion | planned | noindex |
| 20 | `/404` | Utility | L1 | MVP | P1 | — | Error | planned | |

## Phase 2 Candidates (deferred)

- **Service + City matrix** — e.g., `/services/travel-nurse-housing-cleveland-oh`, `/services/medical-professional-housing-shaker-heights`, etc. Build only after services × cities are owner-confirmed and anti-doorway safeguards are in place per `docs/prompt-router-and-ai-depth-standard.md`.
- **Neighborhood pages** — e.g., `/locations/university-circle`, `/locations/cleveland-clinic-area`, `/locations/cleveland-heights`, `/locations/shaker-heights`, `/locations/lakewood`, `/locations/tremont`, `/locations/ohio-city`, `/locations/beachwood`.
- **Blog / resources** — educational content for travel nurses, insurance relocation guests, and families relocating to Cleveland; topical-authority support.
- **Per-property pages** — as inventory grows beyond Somerset.

## Cross-References

- Phase A intake summary: `docs/site-os/changelog/project-changelog.md`
- Project type & workflow mode rationale: see Phase A report
- Page-type routing standard: Site OS Master `docs/prompt-router-and-ai-depth-standard.md`
- Page quality gate: Site OS Master `docs/pass-fail-page-quality-gates.md`

## Open Decisions (must resolve before page build)

1. Production domain (corporatehaven.net assumed — owner explicit confirmation pending)
2. Form vendor for leasing survey (GHL / Typeform / Tally / native / other)
3. Primary location slug pattern: `/cleveland-ohio` (flat) vs `/locations/cleveland-oh` (nested)
4. Properties hub pattern: single-property landing vs. ready-for-expansion grid
5. Final CTA wording per audience segment
