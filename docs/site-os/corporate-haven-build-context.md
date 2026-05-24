# Corporate Haven — Build Context

Client-specific facts and decisions for the Corporate Haven website build. Sourced from Phase A intake (2026-05-23) per `site-os-master/docs/new-client-startup-workflow.md`. This is the single source of truth that downstream Site OS prompts (build batches, content generation, SEO/AEO, QA, updates) reference.

Update this file when an APPROVED PLACEHOLDER transitions to CONFIRMED or when a MISSING — FLAGGED item is resolved. Record every transition in `docs/site-os/changelog/project-changelog.md`.

---

## 1. Client Identity

- **Client name**: Corporate Haven *(public-facing — CONFIRMED)*
- **Legal entity**: MISSING — FLAGGED *(possibly Corporate Haven LLC — owner to confirm)*
- **Current website**: https://corporatehaven.net/
- **Production domain (assumed)**: corporatehaven.net *(APPROVED PLACEHOLDER — owner to explicitly confirm replacement of existing site)*
- **Business model**: Fully furnished mid-term rentals and corporate housing
- **Primary location / market**: Cleveland, Ohio
- **Approved project type**: **Local service business** *(re-evaluate to Directory/marketplace only if property inventory grows past ~8–10 listings)*

## 2. Phase A Gate Status

- **Gate decision**: **CLEARED WITH FLAGS** *(approved by project owner 2026-05-23)*
- **CONFIRMED fields**: 11 *(was 10; +1 for email confirmation 2026-05-23 — see §12 launch blocker #2 and §17 below)*
- **APPROVED PLACEHOLDER fields**: 14
- **MISSING — FLAGGED fields**: 37 *(was 38; -1 for email)*
- **Standing approval**: Session-scoped per `docs/site-os/file-scope-and-git-safety-policy.md` and `site-os-master/docs/standing-approval-rule-template.md` — re-invoke per session

## 3. Stack Decision

- **Stack**: **Cloudflare Pages static export** (`next export` → `out/` → Cloudflare Pages)
- **Framework**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Source control**: GitHub — https://github.com/SedrickHarris/corporate-haven-site.git
- **Editor**: VS Code + Claude Code
- **Deploy note**: Deviates from Site OS Master reference stack (Next.js 14 + `@opennextjs/cloudflare` + Cloudflare Workers SSR). Per `site-os-master/checklists/deploy-workflow-checklist.md §5`, a new deploy subsection will be authored when Phase E lands.

## 4. Primary Services *(CONFIRMED list — owner-ranked priority order is APPROVED PLACEHOLDER)*

| Rank (APPROVED PLACEHOLDER) | Service | AI Depth for build |
|---|---|---|
| 1 | Mid-Term Rentals | Level 3 Core SEO/AEO |
| 2 | Corporate Housing | Level 3 Core SEO/AEO |
| 3 | Travel Nurse Housing | **Level 5 Beyond-Elite** (audience-critical) |
| 4 | Medical Professional Housing | **Level 5 Beyond-Elite** (audience-critical) |
| 5 | Insurance Relocation Housing | **Level 5 Beyond-Elite** (audience-critical) |
| 6 | Family Relocation Housing | Level 3 |
| 7 | Student / Intern Housing | Level 3 |

**Additional offers / amenities** *(CONFIRMED — feed Phase D content writing)*:

- Fully furnished
- Flexible lease terms (mid-term — between nightly and annual)
- All-inclusive pricing
- Utilities included
- High-speed WiFi
- Move-in-ready housing
- Digital lock access
- Tenant support
- Leasing survey
- Tenant request support
- Housing assistance for relocating / displaced guests
- Featured property: **The Somerset** (see §10)

## 5. Primary Audiences *(12 segments — all CONFIRMED)*

Per-segment messaging required before Phase D final copy (currently MISSING — FLAGGED).

- Traveling professionals
- Medical professionals
- Travel nurses
- Resident physicians
- Healthcare support staff
- Relocating families
- Insurance relocation guests
- Students
- Interns
- Families in transition
- Contract workers
- Consultants

## 6. Service Area

- **Primary city (homepage + LocalBusiness schema)**: Cleveland, OH *(CONFIRMED)*
- **State**: Ohio *(CONFIRMED)*
- **Country**: United States *(CONFIRMED)*
- **Adjacent areas for Phase 1 planning** *(APPROVED PLACEHOLDER — owner refines)*:
  - Cleveland Heights
  - Shaker Heights
  - Lakewood
  - University Circle
  - Tremont
  - Ohio City
  - Beachwood
- **Service-area radius** *(APPROVED PLACEHOLDER)*: Cuyahoga County implied
- **Address public-facing or service-area only?**: **MISSING — FLAGGED** — drives LocalBusiness schema shape. Per `docs/site-os/no-fake-data-policy.md §2`, service-area-only businesses must NOT display a street address.

## 7. Primary CTAs

- **Primary CTA label** *(APPROVED PLACEHOLDER)*: **Check Availability**
- **Secondary CTAs**:
  - View Available Rentals
  - Ask About the Somerset
  - Start Leasing Survey
  - Submit Tenant Request
  - Contact Corporate Haven / Request Housing Assistance
- **Preferred lead capture** *(APPROVED PLACEHOLDER)*: Both — form + call

## 8. Brand Voice

*(APPROVED PLACEHOLDER — owner to confirm before Phase D copy)*

- Professional
- Welcoming
- Trustworthy
- Locally rooted
- Accommodating
- Signals: hospitality + professional housing infrastructure
- **Not**: vacation rental, generic property management, transient short-stay

Full brand asset status is in `docs/brand-guide.md`.

## 9. Phase 1 Page List

Canonical inventory: **`docs/site-os/inputs/page-list.md`** (20 routes, MVP launch).

Site build plan pointer: `docs/site-build-plan.md`.

Page-type AI-depth mix per `site-os-master/docs/prompt-router-and-ai-depth-standard.md`:

- 1× Homepage at **Level 5 Beyond-Elite**
- 1× Primary location (Cleveland) at **Level 5 Beyond-Elite**
- 1× FAQ hub at **Level 5 AEO Hub** (30+ FAQs, 9 categories)
- 3× Audience-critical service pages at **Level 5 Beyond-Elite**
- 3× Conversion pages (Contact, Check-Availability, Somerset property) at **Level 4 Conversion**
- 6× Standard service pages, services hub, properties hub, About at **Level 3 Core**
- 4× Utility (legal, thank-you, 404) at **Level 1 Utility**

## 10. Featured Property — The Somerset *(only verified property today)*

| Field | Value | Status |
|---|---|---|
| ZIP | 44108 | CONFIRMED |
| Approximate square footage | ~1,836 sq. ft. | CONFIRMED |
| Bedrooms | 3 BR (4th planned) | CONFIRMED |
| Bathrooms | 1.5 BA | CONFIRMED |
| Bath / entrance | **Shared** | CONFIRMED *(material disclosure — must appear honestly in copy)* |
| Furnishings | Modern furnishings | CONFIRMED |
| WiFi | High-speed | CONFIRMED |
| Utilities | Included | CONFIRMED |
| Kitchen | Fully equipped | CONFIRMED |
| Workspace | Dedicated | CONFIRMED |
| Locks | Digital | CONFIRMED |
| Cleaning | Cleaning services | CONFIRMED |
| Parking | Yes | CONFIRMED |
| Welcome essentials | Yes | CONFIRMED |
| Street address | MISSING — FLAGGED | Public-facing decision pending |
| Photography | **MISSING — FLAGGED** | Interior, exterior, neighborhood — none on disk |

Multi-property language ("our portfolio", "across Cleveland") must wait for owner inventory beyond Somerset.

## 11. Approved Placeholders (14 — usable during build, must transition before launch)

1. Short business description (see §13)
2. Priority service ranking (see §4)
3. Pricing model framing: "All-inclusive monthly pricing — exact rates on request"
4. Primary CTA label: "Check Availability"
5. Secondary CTA labels
6. Contact route: `/contact`
7. Thank-you route: `/thank-you`
8. Brand voice (see §8)
9. Index/noindex baseline: index primary pages; noindex `/thank-you` + unapproved legal placeholders
10. Adjacent service cities/neighborhoods for planning only (see §6)
11. Service-area radius: Cuyahoga County implied
12. Production domain assumption: corporatehaven.net
13. Preferred lead capture: "Both" (form + call)
14. Customer pain points list (see §14)

## 12. Launch Blockers (must resolve before Prompt 09 Final Launch QA)

Per `docs/site-os/no-fake-data-policy.md` and `site-os-master/efficiency-governor/client-intake-gate.md § Launch Blocker Reference`:

1. **Primary phone number** — MISSING — FLAGGED. Use `// TODO-PHASE-F-LAUNCH: phone` placeholder. **Do not invent a phone number.**
2. **Primary email** — ✅ **CONFIRMED 2026-05-23.** Public display: `contact@corporatehaven.net`. Clickable mailto URL: `mailto:contact@inbox.corporatehaven.net`. Wired in `lib/constants/site.ts` as `SITE.email` (display) + `SITE.emailMailto` (href). Resolved — no longer a launch blocker.
3. **Production domain confirmation** — APPROVED PLACEHOLDER assumes corporatehaven.net replacement
4. **Address vs. service-area-only decision** — drives LocalBusiness schema
5. **Business hours** — LocalBusiness schema + GBP alignment
6. **Form endpoint** (leasing survey vendor + URL) — conversion path
7. **Privacy policy URL** — required since leasing survey collects PII
8. **Form consent language**
9. **Index/noindex per-page decision** — per-page confirmation
10. **License / insurance / rental-registration status** — Cleveland Rental Registration SOP and Designation of Local Agent in Charge PDFs exist on disk; do not publish license claims until owner confirms exact status
11. **GSC + Bing verification access and tokens**
12. **GA4 / GTM IDs**

## 13. Content Blockers (must resolve before Phase D final copy)

1. Brand voice owner confirmation
2. Per-service descriptions (7 services — 1–3 sentences each, owner-verified)
3. Per-audience messaging (12 segments — different copy angles)
4. Verified customer pain points per segment (current list is APPROVED PLACEHOLDER inference)
5. Owner / founder story for About page
6. Top 3 competitor names + URLs
7. Property inventory beyond Somerset
8. Pricing model details (per-month / per-night / quote / minimum stay)
9. **Logo, primary/secondary brand colors (hex), primary/secondary fonts** — see `docs/brand-guide.md`
10. **Property photography** — Somerset minimum (interior, exterior, neighborhood)
11. Tenant testimonials (with consent) — or explicit "launch without testimonials" decision
12. Site map / navigation structure approval

## 14. APPROVED PLACEHOLDER Drafts (use during build; refine before launch)

### Short business description
> Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing.

### Customer pain points (inference — owner refines)
- Hotels become uneconomical past 2–3 weeks
- Annual leases too long for assignments measured in months
- Standard short-term rentals lack professional amenities (reliable WiFi, workspace, tenant support)
- Furniture / utilities / WiFi setup takes weeks vs. a furnished, move-in-ready option
- Insurance and relocation displacement require move-in-ready housing fast, often with insurer paying
- Travel nurses and contract medical staff face unpredictable assignment dates — flexibility matters
- Newcomers to Cleveland don't know which neighborhoods are safe, well-located, and close to major hospitals (Cleveland Clinic, University Hospitals, MetroHealth) or major employers
- Furnished options on Airbnb / VRBO are oriented to vacation guests, not professional mid-term stays

## 15. No-Fake-Data Reminders

Per `docs/site-os/no-fake-data-policy.md` (full 12 categories live there — this is the high-frequency subset for Corporate Haven specifically):

### Do NOT invent under any circumstances

- **Phone numbers, email addresses** — both MISSING — FLAGGED. Always use TODO placeholders.
- **Reviews, ratings, testimonials, AggregateRating, review counts** — none verified; no `AggregateRating` or `Review` schema until owner-supplied + visible match.
- **Licenses, insurance status, rental-registration completion, certifications, awards, years in business** — Cleveland Rental Registration SOP is on disk but registration completion is **not confirmed**. Do not publish any license, insurance, or registration claim.
- **Pricing claims, response-time claims, "same-day", "24/7", "emergency"** — none verified.
- **Tenant counts, occupancy claims, "X+ stays completed"** — none verified.
- **Street address for LocalBusiness schema** — public-facing vs. service-area-only decision pending; until then, no `streetAddress` emitted.
- **Property photos** — no AI-generated photos of the Somerset, no stock interiors framed as Somerset, no fake before/after.
- **Customer / team / tenant photos** — none until owner-supplied with consent.
- **Competitor claims** — top 3 competitors not identified by owner; do not invent competitor names, weaknesses, or comparisons.
- **Adjacent neighborhoods as service areas in copy** — Cleveland Heights, Shaker Heights, etc. are APPROVED PLACEHOLDER for *planning only*. Do not write "we serve [neighborhood]" in production copy until owner confirms.
- **Properties beyond Somerset** — do not write "our portfolio of homes" until inventory is owner-confirmed.

### Status framework reminder

Every fact in code or copy gets one of three statuses:

- **CONFIRMED** — verified by owner; safe to use
- **APPROVED PLACEHOLDER** — owner-approved draft for build; transitions to CONFIRMED before launch
- **MISSING — FLAGGED** — no value, no placeholder approval; appears as `// TODO-PHASE-F-LAUNCH:` in code and as a carry-forward in QA reports

## 16. Cross-References

- `docs/site-os/README.md` — what each Site OS subfolder is for
- `docs/site-os/inputs/page-list.md` — canonical Phase 1 page inventory
- `docs/site-os/changelog/project-changelog.md` — build history and decision trail
- `docs/site-os/fast-build-batch-workflow.md` — workflow for low-risk batch builds
- `docs/site-os/no-fake-data-policy.md` — 12 categories of fabrication prevention
- `docs/site-os/file-scope-and-git-safety-policy.md` — Git discipline
- `docs/site-os/service-business-conversion-layout.md` — hero/CTA two-column standard
- `docs/site-os/service-card-image-placeholder-standard.md` — service card image rule
- `docs/site-os/implementation-log.md` — running build log
- `docs/brand-guide.md` — brand asset status (mostly MISSING — FLAGGED)
- `docs/site-build-plan.md` — pointer to canonical page plan

Site OS Master root: `C:\Users\Welcome\Desktop\site-os-master`

---

## 17. Brand, Navigation, and Email Decisions (2026-05-23)

Owner-approved decisions applied to the build. Source of truth for these decisions is `docs/brand-guide.md §0 Approved Brand and Navigation Direction (2026-05-23)`.

### 17.1 Email — CONFIRMED

- Public display: **`contact@corporatehaven.net`**
- Clickable `mailto:` URL: **`mailto:contact@inbox.corporatehaven.net`**
- Why split: the display address routes through the public-facing inbox; the clickable mailto routes through the inbox subdomain
- Wired in `lib/constants/site.ts` as `SITE.email` (display) + `SITE.emailMailto` (href)
- Footer renders display text wrapped in `<a href={SITE.emailMailto}>` — pattern documented in `components/layout/Footer.tsx`

### 17.2 Phone — STILL MISSING — FLAGGED

Phone is not confirmed in this update. `SITE.phone` and `SITE.phoneTel` remain `null`. Continue to use `// TODO-PHASE-F-LAUNCH:` placeholders. Do not invent a phone number.

### 17.3 Approved Primary Navigation

- Home
- Services
- Properties
- Cleveland
- About
- FAQ
- Contact

Source of truth: `lib/constants/routes.ts` → `NAV_PRIMARY`.

### 17.4 Primary Header CTA

- **Check Availability** → `/check-availability`

Source: `lib/constants/routes.ts` → `PRIMARY_CTA`.

### 17.5 Removed From Primary Navigation

- Tenant Portal
- Tenant Requests
- Leasing Survey

These do not appear in `NAV_PRIMARY` and must not appear in `Header.tsx`.

### 17.6 Footer Rule — Tenant Portal and Tenant Requests

Tenant Portal and Tenant Requests should NOT appear prominently in the public footer. They can create unwanted requests from non-tenants. If needed later, add a small low-priority footer section ("Existing Tenants") only after explicit approval — do NOT add it unilaterally.

### 17.7 Footer Priority Sections

The footer should prioritize:

- Company (About, Contact)
- Housing (Services hub + 5 services, Properties hub, Cleveland)
- Get Started (Check Availability, FAQ)
- Contact (city/state, email visible)
- Legal (Privacy Policy, Terms — bottom row alongside copyright)

Source: `lib/constants/routes.ts` → `NAV_FOOTER_COMPANY`, `NAV_FOOTER_HOUSING`, `NAV_FOOTER_GET_STARTED`, `NAV_FOOTER_LEGAL`. Footer contact column reads from `SITE` constants directly.

### 17.8 Address, Hours, Testimonials, Pricing, Licenses, Insurance, Brand Assets

All remain MISSING — FLAGGED unless already CONFIRMED elsewhere in this document. No change in this update.

### 17.9 Brand Direction (APPROVED PLACEHOLDER)

Per `docs/brand-guide.md §0`:

- Logo + teal accent: APPROVED direction; wire in when owner-supplied logo asset lands
- Color palette: APPROVED PLACEHOLDER hex values defined in brand-guide; Tailwind token wiring deferred to a separate batch
- Typography: APPROVED PLACEHOLDER direction (modern sans-serif headings + readable sans-serif body)
- Imagery: only verified property photos, Cleveland imagery, professional lifestyle imagery — no AI-generated property photos
- Motion: subtle Framer Motion only when approved (not in current scaffold)

---

Corporate Haven — Build Context v1.1
Last updated: 2026-05-23 (Brand/Nav/Email decision update)
Authored from: Phase A intake report (2026-05-23, CLEARED WITH FLAGS) + Brand/Nav/Email decisions (2026-05-23)
