# Corporate Haven — Brand Guide

**Status (2026-05-23)**: APPROVED PLACEHOLDER direction landed. Visual assets are partially APPROVED PLACEHOLDER (palette + typography direction below); logo + photography remain MISSING — FLAGGED.

Per `docs/site-os/no-fake-data-policy.md §8 Image and Media` and `§7 Schema Markup`, the build must not invent a logo or imagery. Owner-supplied verified assets only.

When real assets land, update this file in place and append an entry to `docs/site-os/implementation-log.md`. Transition each field below from MISSING — FLAGGED or APPROVED PLACEHOLDER to CONFIRMED.

---

## 0. Approved Brand and Navigation Direction (2026-05-23)

### Approved Direction

Use the current new build structure as the foundation.

**Keep:**
- Clean modern layout
- Two-column hero with form on the right
- Simple top navigation
- Check Availability as the primary CTA
- Black CTA button style
- Existing Corporate Haven logo and teal brand accent
- Professional housing with a hospitality layer positioning

### Approved Primary Navigation

- Home
- Services
- Properties
- Cleveland
- About
- FAQ
- Contact

### Primary Header CTA

- Check Availability

### Removed From Primary Navigation

- Tenant Portal
- Tenant Requests
- Leasing Survey

### Footer Rule

Tenant Portal and Tenant Requests should not appear prominently in the public footer because they can create unwanted requests from non-tenants.

If needed later, add a small low-priority footer section only after explicit approval:

> **Existing Tenants**
> - Tenant Portal
> - Tenant Requests

### Brand Feel

Corporate Haven should feel clean, professional, trustworthy, local, and welcoming. The site should not feel like a vacation rental site, generic apartment management site, hotel booking engine, or tenant support portal.

### Visual Direction

Use the clean current build as the foundation. Add the existing Corporate Haven logo mark, teal brand accent, black CTAs, soft neutral section backgrounds, polished cards, verified imagery or safe placeholders, and strong two-column conversion sections.

### Approved Placeholder Palette

| Token | Hex |
|---|---|
| Primary Ink | `#111827` |
| Corporate Haven Deep Teal | `#0B3440` |
| Logo Teal / Blue-Gray | `#5F7F83` |
| Mist Background | `#EAF1F1` |
| Warm White | `#FAF8F3` |
| Soft Gray | `#F5F6F6` |
| Border Gray | `#D9DEDE` |
| Primary Button | `#000000` |
| Primary Button Hover | `#0B3440` |
| Button Text | `#FFFFFF` |
| Warm Accent | `#C9A46A` |

These hex values are APPROVED PLACEHOLDER. They may be wired into `tailwind.config.ts` + `app/globals.css` in a follow-up batch (Tailwind token batch — separate approval). Until then, the existing neutral placeholder tokens remain.

### Typography Direction

Use a clean modern sans-serif for headings such as Manrope, Poppins, or Montserrat. Use a readable sans-serif for body copy such as Source Sans 3 or Inter. Do not finalize paid fonts or external font loading unless approved.

### Image Direction

Use verified property photos, Cleveland imagery, and professional lifestyle imagery. Do not use fake property photos, AI-generated property photos as real property images, or images with readable logos or text.

### Motion Direction

Use subtle Framer Motion effects only when approved: fade-up, fade-in, staggered cards, hover lift, and smooth FAQ transitions. Motion must respect reduced-motion preferences.

---

## 1. Visual Assets

| Asset | Status | Notes |
|---|---|---|
| Logo (SVG primary) | 🔴 MISSING — FLAGGED | Owner to supply. Do not generate or invent. |
| Logo (PNG fallback) | 🔴 MISSING — FLAGGED | Derived from SVG when supplied. |
| Logo (favicon set: 16, 32, 180, 192, 512) | 🔴 MISSING — FLAGGED | Derived from supplied logo. |
| Apple touch icon | 🔴 MISSING — FLAGGED | |
| Open Graph default image (1200×630) | 🔴 MISSING — FLAGGED | Must include real brand wordmark + property imagery — not stock. |

## 2. Color System

| Token | Status | Notes |
|---|---|---|
| Primary brand color (hex) | 🔴 MISSING — FLAGGED | |
| Secondary brand color (hex) | 🔴 MISSING — FLAGGED | |
| Accent color (hex) | 🔴 MISSING — FLAGGED | |
| Neutral / surface ramp (50–900) | 🔴 MISSING — FLAGGED | |
| Semantic — success / warning / error / info | 🔴 MISSING — FLAGGED | |
| Text on dark | 🔴 MISSING — FLAGGED | WCAG AA contrast minimum required per `docs/site-os/service-business-conversion-layout.md`. |
| Text on light | 🔴 MISSING — FLAGGED | |

Until colors land, the Site OS prompt system should NOT emit any hex value as authoritative brand color. Tailwind theme tokens stay un-instantiated; placeholder neutral grays may be used in scaffolding with a `// TODO-COLOR:` comment.

## 3. Typography

| Token | Status | Notes |
|---|---|---|
| Primary font (display / headings) | 🔴 MISSING — FLAGGED | Self-host preferred for Cloudflare Pages static export. |
| Secondary font (body) | 🔴 MISSING — FLAGGED | |
| Mono font (code / metadata) | 🔴 MISSING — FLAGGED | Optional. |
| Font license confirmation | 🔴 MISSING — FLAGGED | Required before commit of any font file. |
| Fluid type scale | 🔴 MISSING — FLAGGED | Standard rem-based scale acceptable as placeholder. |

## 4. Photography

| Subject | Status | Notes |
|---|---|---|
| The Somerset — exterior | 🔴 MISSING — FLAGGED | Owner-supplied only. No stock substitutions per `no-fake-data-policy.md §8`. |
| The Somerset — interior (living, kitchen, bedrooms, workspace) | 🔴 MISSING — FLAGGED | Disclose shared bath / shared entrance accurately. |
| The Somerset — neighborhood / context | 🔴 MISSING — FLAGGED | |
| Cleveland market / hospital catchment imagery | 🔴 MISSING — FLAGGED | Owner-supplied; do not use AI-generated cityscapes framed as real. |
| Tenant / customer photos | 🔴 MISSING — FLAGGED | Only with explicit written consent. |
| Team / owner photos | 🔴 MISSING — FLAGGED | Owner-supplied only. |
| Before / after | ⚪ N/A | Not applicable to furnished rentals. |

## 5. Iconography and Imagery System

| Asset | Status | Notes |
|---|---|---|
| Icon style decision (line / solid / duotone / branded) | 🔴 MISSING — FLAGGED | |
| Icon library reference (lucide / heroicons / custom) | 🔴 MISSING — FLAGGED | |
| Service-card image placeholder treatment | 🟡 APPROVED PLACEHOLDER | Use the standard at `docs/site-os/service-card-image-placeholder-standard.md` — `aspect-[16/10]` brand-tinted block, `aria-hidden="true"`, no embedded text, `// TODO: replace with owner-supplied photo`. |

## 6. Design References / Inspiration

| Item | Status | Notes |
|---|---|---|
| Reference sites the owner likes | 🔴 MISSING — FLAGGED | |
| Reference sites the owner dislikes | 🔴 MISSING — FLAGGED | |
| Mood board / Pinterest / Figma source | 🔴 MISSING — FLAGGED | |

---

## 7. Brand Direction *(APPROVED PLACEHOLDER — voice only, no visual identity)*

While the visual system is missing, the owner has approved the following directional voice and feel as the working hypothesis for Phase 1 strategy and copy planning:

- **Professional**
- **Welcoming**
- **Trustworthy**
- **Locally rooted** (Cleveland-specific, not generic national)
- **Hospitality + professional housing infrastructure feel** (think extended-stay concierge meets relocation services)

### Explicitly NOT

- **Not vacation rental** — avoid Airbnb-style copy, "host" framing, leisure imagery, party-friendly tone
- **Not generic property management** — avoid PM-software boilerplate ("submit a maintenance ticket"), commodity tone, lease-form heaviness
- **Not transient short-stay** — avoid hotel marketing tone, "nightly rates", "stay tonight" CTAs

This direction informs copy decisions today; it does not authorize design or visual asset creation. Visual identity blocks Phase D copy ship.

---

## 8. Hand-off Behaviors

- **Cross-reference** — every page build prompt and content prompt that touches visible-to-user surfaces must reference this file and check that the asset it needs is CONFIRMED before using it.
- **Pre-commit QA** — `docs/site-os/prompts/qa/pre-commit-qa-prompt.md` (installed in STEP 5B) greps the staged diff for hardcoded hex colors, embedded font URLs, image paths not in `docs/brand-guide.md`, and known stock-imagery filename patterns; failures block commit.
- **Schema discipline** — `Organization` and `LocalBusiness` JSON-LD must not emit `logo` until the real logo is committed; must not emit `image` until owner-supplied imagery exists.

---

## 9. Cross-References

- `docs/site-os/no-fake-data-policy.md` §7 Schema, §8 Image and Media
- `docs/site-os/service-card-image-placeholder-standard.md`
- `docs/site-os/corporate-haven-build-context.md §13` (content blockers)
- `docs/site-os/changelog/project-changelog.md` (record asset transitions here)
- `docs/site-os/implementation-log.md` (append entry when a real asset lands)

---

Corporate Haven — Brand Guide v0.2
Last updated: 2026-05-23 (Brand/Nav decision update)
Status: Brand direction APPROVED PLACEHOLDER (palette + typography + motion). Logo + photography MISSING — FLAGGED. Navigation decision APPROVED. Do not invent any field still marked MISSING — FLAGGED.
