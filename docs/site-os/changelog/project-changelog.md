# Corporate Haven — Project Changelog

Rolling changelog for the Corporate Haven website build. Per-tier and per-launch-event entries below in reverse chronological order.

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
