# Corporate Haven — Site Build Plan

This document is a **thin pointer**. The canonical Phase 1 page plan lives at:

**`docs/site-os/inputs/page-list.md`**

Treat that file as the source of truth for route inventory, page type, AI depth, launch tier, priority, primary keyword (placeholder), user intent, status, and notes. This pointer exists so the Site OS prompt system has the `docs/site-build-plan.md` precondition it expects per `site-os-master/prompts/client-repo-prompt-system-setup-prompt.md` (line 65) without duplicating the page list.

## Phase 1 Summary

- **Project type**: Local service business (mid-term / corporate furnished housing in Cleveland, OH)
- **Stack**: Next.js (App Router) + TypeScript + Tailwind CSS → Cloudflare Pages static export
- **Total Phase 1 pages**: **20** (see canonical list)
- **High-value pages** (AI depth Level 4 or 5): 8 — homepage, 3 audience-critical service pages (Travel Nurse, Medical Professional, Insurance Relocation), Cleveland location, FAQ hub, Contact, Check-Availability, Somerset property
- **Standard pages** (Level 3): 6 — services hub, properties hub, 4 standard service pages, About
- **Utility pages** (Level 1): 4 — `/privacy-policy`, `/terms`, `/thank-you`, `/404`

## Current State

- ✅ Phase A intake CLEARED WITH FLAGS (2026-05-23)
- ✅ Phase B scaffold (Site OS doc structure + initial commit `68f79ab`)
- ✅ Phase B step 12a preconditions in place (this file is one of them)
- ⏳ **No Next.js scaffold yet** — `package.json`, `app/`, `components/`, `lib/`, `next.config.*`, `tailwind.config.*` do not exist
- ⏳ **No dependencies installed** — no `node_modules/`
- ⏳ **No website source code or final copy**
- ⏳ Client-side Site OS prompt system not yet installed (next step — STEP 5B)

## What Final Architecture Will Look Like

The final architecture (folder layout, components, routing patterns, content collections, image handling, font hosting, sitemap, robots.txt, OG image generation, redirect rules, schema strategy) is **pending downstream Site OS prompts**:

- **Prompts 01–04** (per page or batched) produce keyword strategy → page outline → 10-metric analysis → gap fix
- **Prompt 05** (developer build brief) declares the implementation contract: folder structure, components, routing, metadata pattern, schema pattern, validation surface
- **Prompt 06** (Claude Code build) executes Prompt 05's brief under Gate 1 → Gate 2 → Gate 3 discipline
- **Prompt 07** (QA review) validates outcome

Until those prompts run, this plan defers all implementation choices.

## Open Architectural Decisions (carry-forward to Prompt 05)

These will be decided in the developer build brief, not here:

- Route slug pattern: `/cleveland-ohio` (flat) vs `/locations/cleveland-oh` (nested)
- Properties hub treatment: single-property landing vs. ready-for-expansion grid
- Image strategy on Cloudflare Pages static export (Next.js Image vs. `<img>` with manual `srcset`, given `next export` constraints)
- Font hosting: self-host vs. Google Fonts (self-host preferred for static-export performance + privacy; pending font choice)
- Sitemap and robots.txt generation: build-time script vs. static files
- OG image generation: build-time static vs. dynamic edge function (the latter requires a Cloudflare Worker, which deviates from "static export only")
- Form vendor and embed strategy (depends on launch blocker resolution — leasing survey vendor MISSING — FLAGGED)
- Analytics injection (GA4 + GTM IDs MISSING — FLAGGED)
- Schema strategy: per-page JSON-LD vs. centralized schema library

## Cross-References

- **Canonical page list**: `docs/site-os/inputs/page-list.md`
- **Client-specific facts**: `docs/site-os/corporate-haven-build-context.md`
- **Brand asset status**: `docs/brand-guide.md`
- **Stack rationale**: `docs/site-os/changelog/project-changelog.md` (entry 2026-05-23)
- **Site OS workflow**: `site-os-master/docs/new-client-startup-workflow.md`
- **Prompt routing**: `site-os-master/docs/prompt-router-and-ai-depth-standard.md`

---

Corporate Haven — Site Build Plan v1.0 (pointer doc)
Last updated: 2026-05-23 (STEP 5A)
