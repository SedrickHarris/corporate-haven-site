# Client Repo Prompt Standard — Corporate Haven Adoption

**Status:** Adopted 2026-05-23
**Repo:** `C:\Users\Welcome\Desktop\client-sites\corporate-haven-site`
**GitHub:** https://github.com/SedrickHarris/corporate-haven-site.git
**Scope:** Corporate Haven website build and ongoing maintenance.
**Source standard:** `site-os-master/docs/client-repo-prompt-system-standard.md`

## Standard

The Corporate Haven client repo includes the client-side Site OS prompt and documentation system under `docs/site-os/` per the universal Site OS Master standard. This system makes the repo self-contained for ongoing build, content, SEO/AEO, QA, and update workflows — no reliance on Claude Project memory, no reliance on the master repo as the only source of prompts.

## Adopted Folder Structure

```
docs/site-os/
├── prompts/
│   ├── build/                    # Per-batch build prompts (Batch 2–6)
│   ├── content/                  # Content generation + strengthening
│   ├── seo-aeo/                  # SERP analysis + AEO gap analysis
│   ├── qa/                       # Page QA + SEO/AEO QA + pre-commit QA
│   └── updates/                  # Content gap fixes + content updates
├── reference/                    # Standards and indexes
├── checklists/                   # Pre-build, post-build, content quality
├── outputs/                      # Per-batch deliverable outputs (gitkeep'd)
├── qa/                           # QA reports (per-page, per-batch)
├── decisions/                    # Decision docs (this file lives here)
├── changelog/                    # Project changelog (Phase / tier entries)
└── inputs/                       # Page list, intake, source material
```

Already-required workflow / policy docs at `docs/site-os/` root (copied from Site OS Master in STEP 5A):

- `fast-build-batch-workflow.md`
- `file-scope-and-git-safety-policy.md`
- `no-fake-data-policy.md`
- `service-business-conversion-layout.md`
- `service-card-image-placeholder-standard.md`
- `corporate-haven-build-context.md` (client-specific facts)
- `implementation-log.md` (running build log)

## Reason

The Corporate Haven engagement must be able to continue website builds, content creation, SEO/AEO improvement, gap fixing, content updating, and QA without relying only on Claude Project memory or the master repo. Specifically:

1. **Continuity across sessions.** Claude Project memory is session-scoped and may not persist across machines, projects, or weeks. The Corporate Haven repo carries its own playbooks.
2. **Continuity across operators.** A contractor or teammate joining the Corporate Haven engagement should be able to read the repo and run a batch build without separate onboarding.
3. **Continuity if Site OS Master diverges.** Master may evolve (new standards, prompt revisions). The Corporate Haven copy of the relevant prompts is a known-good baseline that won't silently shift under the build's feet.
4. **Audit trail.** Every build, content change, QA pass, and data update produces an entry in `implementation-log.md` and (optionally) `outputs/`. The repo tells the story of how the Corporate Haven site got built.

## Installed Prompt Set (this STEP 5B install)

The minimum standard prompt set installed in this repo:

### Build prompts (`docs/site-os/prompts/build/`)

- `batch-2-core-brand-pages-prompt.md` — adapted for Corporate Haven's Phase 1 brand routes
- `batch-3-service-pages-prompt.md` — adapted for Corporate Haven's 5 priority services
- `batch-4-city-location-pages-prompt.md` — adapted for Cleveland + Phase 2 candidate adjacent areas
- `batch-5-neighborhood-pages-prompt.md` — adapted for Cleveland neighborhoods (Phase 2)
- `batch-6-service-city-matrix-prompt.md` — adapted for Cleveland + adjacent areas (Phase 2)

(Page lists and slugs adapted per `docs/site-os/corporate-haven-build-context.md` and `docs/site-os/inputs/page-list.md`.)

### Content prompts (`docs/site-os/prompts/content/`)

- `seo-aeo-content-generation-prompt.md` — verbatim from reference impl
- `content-strengthening-prompt.md` — verbatim

### SEO/AEO prompts (`docs/site-os/prompts/seo-aeo/`)

- `serp-analysis-prompt.md` — verbatim
- `aeo-gap-analysis-prompt.md` — verbatim

### QA prompts (`docs/site-os/prompts/qa/`)

- `page-qa-prompt.md` — verbatim
- `seo-aeo-qa-prompt.md` — verbatim
- `pre-commit-qa-prompt.md` — verbatim

### Update prompts (`docs/site-os/prompts/updates/`)

- `content-gap-fix-prompt.md` — verbatim
- `content-update-prompt.md` — verbatim (the prompt that will handle phone/email launch-blocker resolution when those values land)

### Reference docs (`docs/site-os/reference/`)

- `client-build-prompt-index.md` — adapted (lists installed Corporate Haven prompts only)
- `seo-aeo-content-standards.md` — verbatim
- `service-business-design-standards.md` — verbatim

### Checklists (`docs/site-os/checklists/`)

- `page-before-build-checklist.md` — verbatim
- `page-after-build-checklist.md` — verbatim
- `content-quality-checklist.md` — verbatim

### Decisions (`docs/site-os/decisions/`)

- `client-repo-prompt-standard.md` (this file)

## Phase A Carry-Forward (must remain honored across this prompt system)

Per `docs/site-os/corporate-haven-build-context.md`:

- **14 APPROVED PLACEHOLDER items** — every prompt that uses these must transition them to CONFIRMED before launch
- **12 launch blockers** — phone, email, production domain, address decision, hours, form endpoint, privacy policy URL, form consent, index/noindex per-page, license/registration status, GSC + Bing tokens, GA4 / GTM IDs — every prompt must use `// TODO-PHASE-F-LAUNCH:` placeholders, never invent values
- **12 content blockers** — brand voice, per-service descriptions, per-audience messaging, etc. — must be owner-confirmed before final-copy ship

## Content Rules

All prompt files in the Corporate Haven repo must:

- Be **specific enough to be useful** (mention Corporate Haven's services, Cleveland, contact info path where applicable).
- Not be **bloated** (each prompt fits one focused read; cross-references handle depth).
- Reference Corporate Haven's own facts via `corporate-haven-build-context.md` and `lib/constants/site.ts` — not via hardcoded values.
- Use **markdown** with clear headings.
- Include **copy-paste-ready Claude Code instructions** where relevant.
- **Avoid raw citations or external links** to volatile sources.
- **Do not invent business information.** All references to verified client facts come from `corporate-haven-build-context.md` and `lib/constants/site.ts`.

## Maintenance

When Site OS Master ships a new layout standard, content standard, or workflow improvement:

1. The change lands in Site OS Master.
2. This Corporate Haven repo does NOT auto-update — its copy of the prompts is intentionally a baseline.
3. When this repo opens its next major batch, the operator reviews Site OS Master changes since the last sync and pulls relevant updates via a `chore(site-os): sync prompts from master` commit.
4. The sync is opt-in. Master can move forward without forcing this repo to follow.

Conversely, when a Corporate Haven prompt evolves usefully, the operator considers promoting the improvement back upstream into Site OS Master.

## Related Files

- `docs/site-os/fast-build-batch-workflow.md` — default workflow mode for the prompts in this system
- `docs/site-os/file-scope-and-git-safety-policy.md` — staging discipline that applies inside every prompt
- `docs/site-os/no-fake-data-policy.md` — content safety that applies inside every prompt
- `docs/site-os/reference/client-build-prompt-index.md` — full catalog of the prompts this standard requires
- `docs/site-os/corporate-haven-build-context.md` — client-specific facts the prompts reference
