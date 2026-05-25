# Corporate Haven — Project Changelog

Rolling changelog for the Corporate Haven website build. Per-tier and per-launch-event entries below in reverse chronological order.

---

## 2026-05-24 — Final SEO Slug Strategy Approved and Documented

**Workflow phase**: Phase D — documentation and route planning decision batch (between STEP 10B-Implement homepage and Batch 2 page work)

### Summary

Final SEO slug strategy approved and documented. Documentation update + route constants migration only — no new pages built in this step. Future pages, sitemap entries, internal links, and build prompts will use the final Cleveland-specific slugs from the start. Redirects are no longer the primary strategy for future page creation.

### Final Service Slug Pattern

`/services/{service-name}-cleveland/` — e.g. `/services/mid-term-rentals-cleveland/`, `/services/corporate-housing-cleveland/`, `/services/travel-nurse-housing-cleveland/`, `/services/medical-professional-housing-cleveland/`, `/services/medical-student-housing-cleveland/`, `/services/insurance-relocation-housing-cleveland/`, `/services/temporary-family-housing-cleveland/`.

### Final Comparison Slug Pattern

`/compare/{option-a}-vs-{option-b}/` under a `/compare/` hub — e.g. `/compare/corporate-housing-vs-hotels/`, `/compare/corporate-housing-vs-airbnb/`, `/compare/mid-term-rentals-vs-apartments/`, `/compare/travel-nurse-housing-vs-hotels/`, `/compare/insurance-housing-vs-hotels/`.

### Final Hospital Slug Pattern

`/housing-near-{hospital-name}/` at the site root (no `/locations/` prefix) — e.g. `/housing-near-cleveland-clinic/`, `/housing-near-university-hospitals-cleveland/`, `/housing-near-metrohealth-cleveland/`, `/housing-near-va-medical-center-cleveland/`, `/housing-near-case-western-reserve/`.

### Final Location Slug Pattern

`/locations/mid-term-rentals-{location}/` under a `/locations/` hub. `/cleveland-ohio/` is retained as the main Cleveland service-area page; `/locations/mid-term-rentals-cleveland/` is the keyword-focused complement. Additional location pages: `/locations/mid-term-rentals-university-circle/`, `/locations/mid-term-rentals-lakewood/`, `/locations/mid-term-rentals-cleveland-heights/`, `/locations/mid-term-rentals-shaker-heights/`.

### Final Property Slug Pattern

`/properties/{property-name}/` — currently `/properties/somerset/`. Property hub at `/properties/`.

### Redirect Policy Update

Redirects are NOT the primary strategy for future page creation. Final SEO slugs are used from the start. Redirects will only be added later when an old, published, indexed, or conflicting URL must be preserved.

### No Pages Built in This Step

- ❌ No new pages created
- ❌ No homepage final copy changed
- ❌ No `app/page.tsx` edits
- ❌ No component changes
- ❌ No navigation changes (Home · Services · Properties · Cleveland · About · FAQ · Contact + Check Availability CTA stays locked)
- ❌ No email changes
- ❌ No schema changes
- ❌ No redirects added in this step
- ❌ No Site OS Master changes
- ❌ No `lib/constants/site.ts`, `lib/constants/seo.ts`, `app/globals.css`, `tailwind.config.ts`, `package.json`, `public/` changes

### Files Changed (4)

- `docs/site-os/corporate-haven-build-context.md` (new §18 + version bump to v1.2)
- `lib/constants/routes.ts` (`SERVICES` array: 5 entries migrated from short slugs to Cleveland-specific final slugs — both `slug` and `href` fields updated)
- `docs/site-os/implementation-log.md` (new top entry)
- `docs/site-os/changelog/project-changelog.md` (this entry)

### Carry-Forward Consequence

The `SERVICES` href update means the homepage `ServiceCard` grid (which iterates `SERVICES.map((s) => ...)`) automatically renders the new Cleveland-specific slugs. The 4 hardcoded inline `<Link href="/services/...">` references inside `app/page.tsx` body copy (sections 3, 5, 7) remain on the short slugs and will be migrated in the next homepage or architecture implementation batch. Both old and new slugs currently resolve to non-existent pages (service pages have not been built), so no live link breakage is introduced.

### Cross-Repo

Site OS Master untouched.

### Commit

Pending — `docs(strategy): lock Corporate Haven SEO slug strategy`.

### Next Step

Batch 2 page work using the final slugs from `corporate-haven-build-context.md §18`. Recommended order: `/about/`, `/contact/`, `/check-availability/`, `/faq/` hub at Level 5 AEO, `/services/` hub, `/properties/` hub, `/properties/somerset/`, `/cleveland-ohio/` at Level 5 location, then the seven Cleveland-specific service pages. Optional small follow-up batch: migrate the 4 hardcoded inline `<Link>` calls inside `app/page.tsx` body copy to the new Cleveland-specific slugs.

---

## 2026-05-23 — STEP 10B-Implement: Homepage Live with Locked Content

**Workflow phase**: Phase D — STEP 10B-Implement (homepage build per locked content package)

### Summary

Replaced the Batch 1 placeholder homepage shell with the full Level 5 Beyond-Elite homepage from `docs/site-os/outputs/homepage-step10b-build-prompt.md`. All 9 sections render the locked content character-for-character (H1, hero sub-headline, 6 trust bullets, 5 service cards, 9 amenities, 10 audience descriptors, 13 Somerset detail rows, all 3-paragraph long-form sections, 10 FAQs, all CTA labels). 4 JSON-LD blocks emit on the page (Organization, LocalBusiness, WebSite, FAQPage). Static export regenerates cleanly.

### Files Changed (5)

- `app/page.tsx` (full rewrite — locked content + metadata + JSON-LD)
- `components/sections/CTASection.tsx` (1-line change: `bg-brand-ink` → `bg-brand-primary` so the Final CTA renders in Deep Teal `#0B3440`)
- `lib/constants/seo.ts` (added `buildWebSiteJsonLd()` helper)
- `docs/site-os/implementation-log.md` (new top entry)
- `docs/site-os/changelog/project-changelog.md` (this entry)

### Files NOT Touched (per scope)

`app/layout.tsx`, `app/not-found.tsx`, `app/globals.css`, `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `package.json`, `package-lock.json`, `public/`, `Header.tsx`, `Footer.tsx`, `routes.ts`, `site.ts`, `HeroSection.tsx`, `SectionHeader.tsx`, `FAQSection.tsx`, `ServiceCard.tsx`, `ServiceImagePlaceholder.tsx`, `QuoteFormPlaceholder.tsx`. Site OS Master untouched.

### Content Lock Preservation

Verified via grep on built `out/index.html`:
- H1 exact ✓
- Hero sub-headline exact ✓
- 6 trust bullets exact ✓
- Somerset shared-bath disclosure preserved unaltered ✓
- All 10 FAQ Q+A exact (visible + JSON-LD) ✓
- All section H2s exact ✓
- All CTA labels exact ✓
- All 10 service card / audience / Somerset detail lists exact ✓

### Navigation + Footer + Email

No changes to nav/footer/email — already correct from prior batches (`d41c3ef` brand decision + `ac42c5f` token wiring). Verified `Tenant Portal` / `Tenant Requests` / `Leasing Survey` strings ABSENT from rendered HTML.

### SEO/AEO/GEO/Schema

- Meta title (62 chars) + meta description (157 chars) exact ✓
- Canonical `https://corporatehaven.net/` ✓
- Robots `index, follow` ✓
- Open Graph (title, description, url, type, siteName, locale) set; `og:image` OMITTED (MISSING — FLAGGED) ✓
- Twitter card `summary_large_image` ✓
- Heading hierarchy: 1 H1 + 8 H2 + 5 H3 (service card titles); no skipped levels ✓
- 4 JSON-LD blocks present, exactly 1 of each type (Org / LB / WebSite / FAQPage) ✓
- LocalBusiness emits `email: contact@corporatehaven.net` + `areaServed` with Cleveland + Cuyahoga County (flat 2-entry structure per locked spec) ✓
- All MISSING — FLAGGED schema fields properly omitted (no invented streetAddress, telephone, openingHours, logo, aggregateRating) ✓
- Internal outbound links: 10+ render and resolve ✓

### Design

- Two-column hero with form on right (mobile stacks content → form) ✓
- Service card grid 1/2/3-col responsive ✓
- All image slots use `<ServiceImagePlaceholder>` (5× services + 1× Somerset) ✓
- Section background rhythm: white / mist / white / mist / white / mist / white / Deep Teal final CTA ✓
- Final CTA in Deep Teal #0B3440 with white text ✓
- Somerset "Learn more" CTA uses approved `bg-brand-button` (#000000) + `hover:bg-brand-primary-hover` (#0B3440) ✓
- Brand palette tokens (from prior Tailwind batch) flowing through naturally ✓

### Validation

- `npm run type-check`: PASS
- `npm run lint`: PASS (`✔ No ESLint warnings or errors`)
- `npm run build`: PASS (`Compiled successfully in 1732ms`, 4 static pages, Exporting 2/2)
- Static export: `out/index.html` regenerated — 115,135 bytes (was 64,908 bytes placeholder)

### No-Fake-Data

Zero invented business claims. All 14 MISSING — FLAGGED items from prior batches remain unchanged (phone, public address, hours, brand logo SVG, OG image, Somerset photography, form endpoint, testimonials, license/insurance/registration, GBP URL, social profiles, final font choice, per-segment messaging, owner/founder name). Brand palette continues as APPROVED PLACEHOLDER.

### Self-Caught Issue Resolved Mid-Batch

Initial implementation had duplicate FAQPage JSON-LD (both `<FAQSection>` and `app/page.tsx` emitted it). Detected via post-build grep count showing 2 FAQPage blocks instead of 1. Resolved by removing the redundant inline `FAQ_JSON_LD` script from `app/page.tsx` — FAQSection's internal emission is canonical and guarantees match with visible accordion via shared FAQS array. Build re-validated clean after fix.

### Cross-Repo

Site OS Master untouched (HEAD `36f9092`, clean tree).

### Commit

Pending — `feat(homepage): implement Phase D STEP 10B homepage — locked content and schema`.

### Next Step

Phase D Batch 2 — core brand pages (`/about`, `/contact`, `/check-availability`, `/faq` hub at Level 5 AEO, `/services` hub, `/properties` hub, `/properties/somerset`, `/cleveland-ohio` at Level 5 location, legal placeholders, thank-you, 404). Or: owner-supplied logo wiring batch when SVG arrives. Or: small polish batch to migrate remaining `bg-brand-ink` button usages to `bg-brand-button` for pure `#000000` primary buttons across Header + HeroSection.

---

## 2026-05-23 — STEP 10B: Homepage Content Package + Build Prompt Locked

**Workflow phase**: Phase D — content lock (between Tailwind token batch and STEP 10B-Implement)

### Summary

Claude Project authored the final Corporate Haven homepage content package + complete Claude Code build prompt. Persisted in this Claude Code session as the canonical STEP 10B artifact at `docs/site-os/outputs/homepage-step10b-build-prompt.md`. No source code changed — this is a documentation-only commit that locks the content for the next batch (STEP 10B-Implement).

### What's Locked

- **H1**: Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio
- **Meta title** (62 chars): Furnished Corporate Housing in Cleveland, OH | Corporate Haven
- **Meta description** (157 chars): Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.
- **9-section page order**: Hero (split) · Services grid (5 cards) · What Is Mid-Term Housing · What's Included · Who We Serve (10 audiences) · The Somerset (with shared-bath disclosure) · Cleveland context · FAQ (10 Q+A) · Final CTA (Deep Teal background)
- **6 trust bullets**, **10 FAQ questions and answers**, **5 service card descriptions**, **10 audience descriptors**, **13 Somerset property facts**, and **all CTA labels** locked verbatim
- **4 JSON-LD blocks** specified: Organization (omits telephone/email/address/logo/sameAs) · LocalBusiness (emits `email: contact@corporatehaven.net` + `areaServed` Cleveland + Cuyahoga County, omits streetAddress/telephone/openingHours/aggregateRating/logo) · WebSite · FAQPage (matches visible FAQ character-for-character)
- **13 internal links** (minimum 10 must render on the homepage)

### Content Preservation Rule (embedded in build prompt)

> All page copy, headings, CTAs, FAQ questions and answers, metadata, schema text, internal anchor text, and business claims are locked. Claude Code may adjust code structure, layout, styling, accessibility, responsive behavior, schema formatting, and approved motion behavior — but may not rewrite, shorten, summarize, paraphrase, simplify, remove, reorder, or replace the approved content.

### Files Changed (3)

- `docs/site-os/outputs/homepage-step10b-build-prompt.md` (NEW — 27-part content package + complete paste-ready build prompt)
- `docs/site-os/implementation-log.md` (new top entry)
- `docs/site-os/changelog/project-changelog.md` (this entry)

### Not Changed

- ❌ No `app/page.tsx` changes — homepage shell from Batch 1 still in place
- ❌ No component changes
- ❌ No `lib/` changes
- ❌ No `package.json` / dependency changes
- ❌ No deploy
- ❌ No images
- ❌ Site OS Master untouched (HEAD `36f9092`, clean)

### Carry-Forward (MISSING — FLAGGED, unchanged)

- Phone, public address, business hours, brand logo SVG, Open Graph image, Somerset property photography, form endpoint vendor, verified testimonials, license/insurance/registration status, GBP URL, social profile URLs, final font selection, per-segment messaging, owner/founder name

### Validation

No build run — documentation-only change. Lint/type-check/build to be run by STEP 10B-Implement after `app/page.tsx` is replaced.

### Cross-Repo

Site OS Master untouched (HEAD `36f9092`, clean).

### Commit

Pending.

### Next Step

**STEP 10B-Implement** — paste the build prompt from Part 25 of `docs/site-os/outputs/homepage-step10b-build-prompt.md` into a Claude Code session opened in the client repo. Execute Gate 1 → Gate 2 → Gate 3 under standing approval. Validate `npm run type-check` + `npm run lint` + `npm run build`; confirm `out/index.html` regenerates. Then stage explicit files + commit `feat(homepage): implement Phase D STEP 10B homepage — locked content and schema` + push to `origin main`.

---

## 2026-05-23 — Tailwind Token Batch: Corporate Haven Brand Palette Wired

**Workflow phase**: Phase D token-wiring batch (between brand-decision update and STEP 10B homepage implementation)

### Summary

The 11-token APPROVED PLACEHOLDER palette from `docs/brand-guide.md §0` is now wired into `app/globals.css` (as RGB channel CSS variables) and exposed through `tailwind.config.ts` (as `theme.colors.brand.*` utility classes). Existing component class names automatically pick up the new approved colors via the CSS variable system — no component edits required.

### Token Values Applied

| Token | Hex | Tailwind class |
|---|---|---|
| Primary Ink | `#111827` | `text-brand-ink`, `bg-brand-ink` |
| Corporate Haven Deep Teal | `#0B3440` | `text-brand-primary`, `bg-brand-primary` |
| Primary Button Hover | `#0B3440` | `bg-brand-primary-hover`, `hover:bg-brand-secondary` (legacy alias) |
| Logo Teal / Blue-Gray | `#5F7F83` | `text-brand-logo-teal`, `bg-brand-logo-teal` |
| Mist Background | `#EAF1F1` | `bg-brand-mist` |
| Warm White | `#FAF8F3` | `bg-brand-warm`, `bg-brand-surface` (legacy alias) |
| Soft Gray | `#F5F6F6` | `bg-brand-soft-gray` |
| Border Gray | `#D9DEDE` | `border-brand-border` |
| Primary Button | `#000000` | `bg-brand-button` |
| Button Text | `#FFFFFF` | `text-brand-button-text` |
| Warm Accent | `#C9A46A` | `text-brand-accent`, `bg-brand-accent` |

### Visible Changes (no component edits required)

- **Eyebrow + accent text + outlines**: any `text-brand-primary` / `outline-brand-primary` / `bg-brand-primary` usage now renders in Deep Teal (was neutral slate)
- **Button hover states**: `hover:bg-brand-secondary` (Header CTA, Hero primary CTA, 404 page CTA, etc.) now hovers to Deep Teal (was neutral gray)
- **Alternating section backgrounds**: `bg-brand-surface` (used in app/page.tsx Locations section and HeroSection wrapper) now renders in Warm White (was cool gray)

### Files Changed (4)

- `app/globals.css` (replaced 5 placeholder CSS variables with 13 approved RGB channel triples — 11 user-required + 2 legacy aliases)
- `tailwind.config.ts` (extended `theme.colors.brand` to expose all 13 tokens to Tailwind utilities)
- `docs/site-os/implementation-log.md` (new top entry)
- `docs/site-os/changelog/project-changelog.md` (this entry)

### Not Changed

- ❌ No page copy changed
- ❌ No navigation changed
- ❌ No dependencies added
- ❌ No deploy attempted
- ❌ No components edited (per scope rule)
- ❌ No fonts loaded (typography direction stays APPROVED PLACEHOLDER with system fallbacks until owner confirms Manrope/Poppins/Montserrat + Source Sans 3/Inter and licenses)
- ❌ No images added
- ❌ No Framer Motion
- ❌ No API integrations
- ❌ No analytics
- ❌ No schema changed

### Carry-Forward

- Owner-supplied logo asset still MISSING — FLAGGED (Header still uses text wordmark)
- Property + Cleveland + lifestyle photography still MISSING — FLAGGED
- Phone, address, hours, license, insurance, registration status still MISSING — FLAGGED
- Brand fonts not yet wired (Tailwind `fontFamily.sans/display` still system fallbacks)
- `bg-brand-ink` buttons render in Primary Ink `#111827` rather than `bg-brand-button` `#000000` — owner-deferred decision whether to migrate button class usages

### Validation

Lint, type-check, and build re-run after these edits land (recorded in implementation log).

### Cross-Repo

Site OS Master untouched (HEAD `36f9092`, clean).

### Commit

Pending.

### Next Step

Two reasonable paths:
1. **Logo wiring batch** when owner-supplied SVG is available — drop into `public/logo.svg`, replace text wordmark in `Header.tsx` + `Footer.tsx`, add favicon set, optionally add `Organization.logo` to JSON-LD helper.
2. **Return to STEP 10B** (homepage research → implementation) with the approved palette now rendering in the foundation.

---

## 2026-05-23 — Brand, Navigation, and Email Decisions Applied

**Workflow phase**: Phase D decision-application batch (between STEP 10A research and STEP 10B homepage implementation)

### Approved Navigation

Primary nav locked at: **Home · Services · Properties · Cleveland · About · FAQ · Contact**.
Primary CTA: **Check Availability** → `/check-availability`.
Tenant Portal, Tenant Requests, and Leasing Survey are deliberately excluded from primary navigation and prominent footer placement per owner decision (they would create unwanted requests from non-tenants).

### Email Update — CONFIRMED

Email transitions from **MISSING — FLAGGED** to **CONFIRMED**:

- Public display: **`contact@corporatehaven.net`**
- Clickable `mailto:` URL: **`mailto:contact@inbox.corporatehaven.net`**

The split-inbox pattern (display address vs. routing address) is wired in `lib/constants/site.ts` as `SITE.email` (display) and `SITE.emailMailto` (href). Footer renders display text wrapped in the mailto href.

### Footer Rule

Footer restructured to 5 priority sections: Company · Housing · Get Started · Contact · Legal. Tenant Portal and Tenant Requests are not prominently placed in the public footer. An empty `EXISTING_TENANT_LINKS` constant is reserved in `lib/constants/routes.ts` for a future low-priority "Existing Tenants" section if owner explicitly approves.

### Brand Direction (APPROVED PLACEHOLDER)

`docs/brand-guide.md` gained a new §0 "Approved Brand and Navigation Direction (2026-05-23)" recording the approved direction:

- Keep current clean modern build structure
- Bring back existing Corporate Haven logo and teal brand accent
- Black CTA button style, warm white backgrounds, soft neutral sections
- 11-token APPROVED PLACEHOLDER color palette (Primary Ink `#111827`, Deep Teal `#0B3440`, Logo Teal `#5F7F83`, Mist `#EAF1F1`, Warm White `#FAF8F3`, Soft Gray `#F5F6F6`, Border Gray `#D9DEDE`, Primary Button `#000000`, Hover `#0B3440`, Button Text `#FFFFFF`, Warm Accent `#C9A46A`)
- Typography direction: clean modern sans-serif (Manrope / Poppins / Montserrat for headings; Source Sans 3 / Inter for body) — APPROVED PLACEHOLDER, not finalized
- Imagery rule: verified property + Cleveland photos only; no AI-generated property images
- Motion: Framer Motion deferred to a future batch with explicit approval

The hex tokens are not yet wired into `tailwind.config.ts` or `app/globals.css` — a separate "Tailwind token batch" can surface them when owner is ready.

### Files Changed (8)

- `docs/brand-guide.md` (new §0 + version bump to v0.2)
- `docs/site-os/corporate-haven-build-context.md` (gate count update + email CONFIRMED + new §17, version bump to v1.1)
- `docs/site-os/implementation-log.md` (new entry)
- `docs/site-os/changelog/project-changelog.md` (this entry)
- `lib/constants/site.ts` (email + emailMailto added)
- `lib/constants/routes.ts` (NAV_PRIMARY comment + footer restructure + EXISTING_TENANT_LINKS reserved)
- `components/layout/Header.tsx` (TODO-BRAND comment tweak)
- `components/layout/Footer.tsx` (rewrite — 5-column priority layout + split-inbox email rendering)

`app/page.tsx` inspected but not edited (no hardcoded tenant links or wrong email present).

### Confirmed

- ✅ Approved navigation
- ✅ Email update (split-inbox pattern wired)
- ✅ Footer rule (tenant links omitted from prominent placement)
- ✅ No homepage final copy implementation completed (deferred to STEP 10B)
- ✅ Unresolved items carried forward: phone, address, hours, prices, reviews, ratings, licenses, testimonials, owner names, logo + photography all remain MISSING — FLAGGED

### Validation

Lint, type-check, and build will be re-run after these edits land (see implementation log entry).

### Cross-Repo

Site OS Master untouched (HEAD `36f9092`, clean).

### Commit

Pending.

### Next Step

Return to STEP 10B (homepage content + build prompt planning) using the approved brand direction. Optional intermediate step: a Tailwind token batch to surface the APPROVED PLACEHOLDER palette in `tailwind.config.ts` + `app/globals.css` before homepage copy lands.

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
