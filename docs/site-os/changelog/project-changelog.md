# Corporate Haven — Project Changelog

Rolling changelog for the Corporate Haven website build. Per-tier and per-launch-event entries below in reverse chronological order.

---

## 2026-05-23 — Batch 1: Foundation Scaffold

**Workflow phase**: Phase D (Strategy and Build) — Batch 1 (Foundation Scaffold)
**Workflow mode**: Fast Build Batch under standing approval (Phase C invocation)

### Context

Phase C policy invocation cleared the way for foundation work. STEP 7 produced the Gate 1 inspection + Gate 2 file scope plan; the project owner bundled the 7 Hard Stops (package.json, npm install, next.config.mjs, app routes, metadata, schema helpers, Cloudflare-config-equivalent static export config) into a single STEP 8 approval. Approved sub-decisions: Tailwind v3.4, Next.js 15.x, `reactStrictMode: true`, `app/page.tsx` Option A (homepage shell with placeholder-safe sections).

### Files Created (24 new)

**Root (7)**: `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `README.md` (NEW); `.gitignore` (MODIFIED, +`node_modules/`, `.next/`, `out/`, `.env*`, etc.)

**App (4)**: `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/globals.css`

**Lib (4)**: `lib/constants/site.ts`, `lib/constants/routes.ts`, `lib/constants/seo.ts`, `lib/utils.ts`

**Components (9)**: `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `components/sections/HeroSection.tsx`, `components/sections/CTASection.tsx`, `components/sections/SectionHeader.tsx`, `components/sections/FAQSection.tsx`, `components/forms/QuoteFormPlaceholder.tsx`, `components/cards/ServiceCard.tsx`, `components/media/ServiceImagePlaceholder.tsx`

**Docs (1 new + 2 modified)**: `docs/site-os/qa/batch-1-foundation-gate-plan.md` (NEW Gate 2 source-of-truth artifact); `docs/site-os/changelog/project-changelog.md` (this update); `docs/site-os/implementation-log.md` (Batch 1 entry appended)

### Dependencies Installed

5 runtime + 10 dev = 15 top-level packages. See `docs/site-os/qa/batch-1-foundation-gate-plan.md` §4. No external UI library, no analytics SDK, no form library, no state library — deliberate minimalism so brand identity decisions are not pre-empted.

### Static Export Configuration

`next.config.mjs` sets `output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`, `reactStrictMode: true`. Build emits `out/` for Cloudflare Pages publish.

### Placeholder Strategy Preserved

All MISSING — FLAGGED items use safe placeholders. Phone, email, address, hours, social, brand colors, brand fonts, logo, photography all remain unresolved with no invented values. Helpers in `lib/constants/seo.ts` OMIT unverified schema fields entirely rather than emitting placeholder values. `QuoteFormPlaceholder` does not submit anywhere; `ServiceImagePlaceholder` is a neutral surface with no text or fake imagery.

### Launch Blockers Carry Forward

All 12 launch blockers from `corporate-haven-build-context.md §12` remain. Resolution path: `prompts/updates/content-update-prompt.md`.

### No Final Copy Written

Every customer-facing string on the homepage carries a `TODO-COPY:` comment. Final homepage copy comes from `site-os-master/prompts/individual-homepage-research-prompt.md` + `individual-homepage-implementation-prompt.md` in a subsequent batch. The 5 placeholder FAQs are written from CONFIRMED facts only and exist to exercise the FAQPage JSON-LD path.

### Validation

(Recorded after Gate 3 run — see `docs/site-os/implementation-log.md` 2026-05-23 Batch 1 entry.)

### Cross-Repo

Site OS Master remained at HEAD `36f9092` with clean working tree throughout Batch 1.

### Commit

STEP 8 commit pending review.

### Next Step

STEP 9 — review the staged scope, run `pre-commit-qa-prompt.md`, and create the Batch 1 commit (`feat(batch-1): foundation scaffold` or similar). Then proceed to first high-value page work (homepage research prompt or another Phase D start per owner direction).

---

## 2026-05-23 — STEP 5A: Root Site OS Substrate Added

**Workflow phase**: New-client startup — Phase B step 12a preconditions

### Context

The client-side Site OS prompt system setup prompt (`site-os-master/prompts/client-repo-prompt-system-setup-prompt.md` lines 61–73) declares 9 required preconditions and hard-stops if any are missing (line 240). After STEP 4B the client repo had only 3 of the 9: `site-os/README.md`, `site-os/inputs/page-list.md`, and `site-os/changelog/project-changelog.md`. STEP 5A fills the remaining 6 + adds 1 brand-guide and 1 site-build-plan at the `docs/` root, plus this changelog update.

### Policy Docs Copied Verbatim from Site OS Master

Per `docs/client-repo-prompt-system-standard.md §Required Folder Structure`, these policy docs are copied (not referenced) so the client repo is self-sufficient. Source: `site-os-master/docs/`.

- `docs/site-os/fast-build-batch-workflow.md` (11,904 bytes)
- `docs/site-os/no-fake-data-policy.md` (18,431 bytes)
- `docs/site-os/file-scope-and-git-safety-policy.md` (10,999 bytes)
- `docs/site-os/service-business-conversion-layout.md` (18,026 bytes)
- `docs/site-os/service-card-image-placeholder-standard.md` (19,192 bytes)

This deliberately deviates from `docs/client-repo-doc-structure.md §Source-of-Truth Rule` (which says "do not duplicate Site OS Master prompts, skills, routing, token-control, schemas, page templates, evals, benchmarks, workflow tests, versions, or checklists into the client repo"). Policies are the deliberate carve-out: the standard requires their copy so QA, design, and content prompts can reference local paths.

### Client-Specific Docs Authored

- `docs/site-os/corporate-haven-build-context.md` — single-source-of-truth for client facts (identity, gate status, stack, services, audiences, service area, CTAs, brand voice, Phase 1 page list, Somerset property, 14 approved placeholders, 12 launch blockers, 12 content blockers, no-fake-data reminders, do-not-invent list)
- `docs/site-os/implementation-log.md` — running build log with entry template + baseline entry covering STEP 4 + STEP 4B + STEP 5A
- `docs/brand-guide.md` — placeholder document. All visual assets (logo, colors, fonts, photography, icons, design references) marked MISSING — FLAGGED. Brand voice direction APPROVED PLACEHOLDER (professional, welcoming, trustworthy, locally rooted, hospitality + professional housing feel; explicitly not vacation rental, not generic property management, not transient short-stay)
- `docs/site-build-plan.md` — thin pointer (Option A per owner decision) referencing `docs/site-os/inputs/page-list.md` as canonical Phase 1 page plan; notes no Next.js scaffold exists, architecture pending Prompts 01–05

### Phase B Step 12a Precondition Status (now complete)

| # | Required File | Status |
|---|---|---|
| 1 | `docs/brand-guide.md` | ✅ Placeholder document |
| 2 | `docs/site-build-plan.md` | ✅ Pointer to `page-list.md` |
| 3 | `docs/site-os/corporate-haven-build-context.md` | ✅ Authored |
| 4 | `docs/site-os/fast-build-batch-workflow.md` | ✅ Copied verbatim |
| 5 | `docs/site-os/no-fake-data-policy.md` | ✅ Copied verbatim |
| 6 | `docs/site-os/file-scope-and-git-safety-policy.md` | ✅ Copied verbatim |
| 7 | `docs/site-os/service-business-conversion-layout.md` | ✅ Copied verbatim |
| 8 | `docs/site-os/service-card-image-placeholder-standard.md` | ✅ Copied verbatim |
| 9 | `docs/site-os/implementation-log.md` | ✅ Authored |

### What's NOT in this STEP 5A (intentional)

- No Next.js scaffold
- No `app/`, `components/`, `lib/`, `package.json`, `next.config.*`, `tailwind.config.*`
- No source files
- No dependencies installed
- No final website copy
- No commit yet
- Site OS Master untouched (verify with `cd "C:\Users\Welcome\Desktop\site-os-master"; git status`)
- Client-side prompt system not yet installed — that's STEP 5B

### Recommended Next Step

**STEP 5B** — re-attempt the client-side prompt system install per `site-os-master/prompts/client-repo-prompt-system-setup-prompt.md`. Preconditions are now satisfied. The setup prompt will create 10 folders, 14 prompt files, 3 reference docs, 3 checklists, 1 decision doc, and append one entry to `docs/site-os/implementation-log.md`.

---

## 2026-05-23 — Phase A Intake Complete + Phase B Scaffold Initiated

**Workflow phase**: New-client startup (`site-os-master/docs/new-client-startup-workflow.md` Phase A → Phase B steps 8–11)

### Phase A — Pre-Build (complete)

- **Client Intake Gate** (`efficiency-governor/client-intake-gate.md` v1.2) pre-filled and reviewed
- **Project brief** (`docs/project-brief-template.md`) pre-filled
- **Project type selected**: Local service business
- **Workflow mode plan**: Per page-type — Beyond-Elite (L5) for homepage, primary Cleveland location, FAQ hub, and 3 audience-critical service pages (Travel Nurse, Medical Professional, Insurance Relocation); Conversion (L4) for contact, check-availability, Somerset property; Core (L3) for remaining service pages and About; Utility (L1) for legal, thank-you, 404
- **Phase 1 launch pages**: 20 routes — see `docs/site-os/inputs/page-list.md`

### Gate Decision

- **Gate status**: **CLEARED WITH FLAGS**
- **Approved by**: Project owner (2026-05-23)
- CONFIRMED fields: 10
- APPROVED PLACEHOLDER fields: 14 (owner-approved for build with carry-forward to launch)
- MISSING — FLAGGED fields: 38

### Stack Decision

- **Stack**: **Cloudflare Pages static export** (`next export` → `out/` → Cloudflare Pages)
- Deviates from Site OS Master reference stack (Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers SSR)
- Per `checklists/deploy-workflow-checklist.md` §5, a new deploy subsection will be authored when Phase E lands
- Build stack confirmed: Next.js (App Router) + TypeScript + Tailwind CSS + GitHub + Claude Code + VS Code

### Approved Placeholders (carry forward)

1. Short business description draft
2. Priority service ranking: Mid-Term Rentals → Corporate Housing → Travel Nurse Housing → Medical Professional Housing → Insurance Relocation Housing
3. Pricing model framing ("All-inclusive monthly pricing — exact rates on request")
4. Primary CTA label: "Check Availability"
5. Secondary CTA labels: "View Available Rentals", "Start Leasing Survey"
6. Contact route: `/contact`
7. Thank-you route: `/thank-you`
8. Brand voice: professional, welcoming, trustworthy, locally rooted, accommodating
9. Index/noindex baseline: index primary pages; noindex `/thank-you` and unapproved legal placeholders
10. Adjacent service cities/neighborhoods for planning only: Cleveland Heights, Shaker Heights, Lakewood, University Circle, Tremont, Ohio City, Beachwood
11. Service-area radius: Cuyahoga County implied
12. Production domain assumption: corporatehaven.net
13. Preferred lead capture: "Both" (form + call)
14. Customer pain points list (per project brief)

### Launch Blockers (must resolve before Prompt 09 Final Launch QA)

1. Primary phone number
2. Primary email
3. Production domain confirmation (corporatehaven.net replacement of existing site)
4. Address vs. service-area-only configuration (drives LocalBusiness schema)
5. Business hours
6. Form endpoint (leasing survey vendor + URL)
7. Privacy policy URL (required by form PII collection)
8. Form consent language
9. Index/noindex per-page decision (per-page confirmation)
10. License / insurance / rental-registration status confirmation
11. Google Search Console verification access and token
12. Bing Webmaster Tools verification access and token
13. GA4 measurement ID and GTM container ID

### Content Blockers (must resolve before Phase D final copy)

1. Brand voice owner confirmation
2. Per-service descriptions (12 services)
3. Per-audience messaging (travel nurses, medical pros, insurance guests, families, students, etc.)
4. Verified customer pain points per segment
5. Owner/founder story for About page
6. Top 3 competitor names + URLs
7. Property inventory beyond Somerset
8. Pricing model details (per-month / quote / minimum stay)
9. Logo, primary/secondary brand colors (hex), primary/secondary fonts
10. Property photography (Somerset interiors, exteriors, neighborhood at minimum)
11. Tenant testimonials with consent — or explicit "launch without testimonials" decision
12. Site map / navigation structure approval

### Phase B — Repo Scaffold (in progress)

- ✅ `git init` in `C:\Users\Welcome\Desktop\client-sites\corporate-haven-site`
- ✅ Created `docs/site-os/{inputs,outputs,qa,changelog}/` with `.gitkeep` placeholders
- ✅ Created `docs/site-os/README.md` per `site-os-master/docs/client-repo-doc-structure.md` § Sample
- ✅ Created `docs/site-os/inputs/page-list.md` with 20 Phase 1 routes
- ✅ Created `docs/site-os/changelog/project-changelog.md` (this file)
- ⏳ GitHub remote not yet added (pending owner — repo URL / org / visibility decision)
- ⏳ Step 12a — client-side prompt and documentation system not yet installed
- ⏳ Standing approval rule not yet invoked for this session
- ⏳ Next.js scaffolding not initiated (correctly — happens in Phase D Gate 3)

### Not Yet Done (intentional)

- Next.js scaffolding (`package.json`, `app/`, `next.config.*`, `tailwind.config.*`, source files) — deferred to Phase D Gate 3 per Site OS workflow
- Final website copy — deferred to Phase D after upstream strategy prompts
- Initial commit — deferred until owner reviews this scaffold and GitHub remote is decided

### Next Recommended Step

**STEP 5 / Phase B step 12a** — install the client-side Site OS prompt and documentation system per `site-os-master/docs/client-repo-prompt-system-standard.md` using the copy-paste-ready setup prompt at `site-os-master/prompts/client-repo-prompt-system-setup-prompt.md`. This installs the 14 client-side prompts, 3 reference docs, 3 checklists, 1 decision doc, and 8 root workflow/policy docs that make the client repo self-sufficient.
