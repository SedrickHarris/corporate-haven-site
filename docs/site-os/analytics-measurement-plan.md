# Corporate Haven — Analytics & Measurement Plan

**Status**: APPROVED PLAN — documentation only. No analytics code in the repo yet.
**Last updated**: 2026-05-24
**Companion doc**: `docs/site-os/gtm-ga4-event-taxonomy.md`
**Implementation phase**: `docs/site-os/corporate-haven-build-list.md §F Phase 12`

---

## A. Purpose

This plan defines how Corporate Haven will measure traffic, user engagement, content performance, housing intent, local intent, and conversions across the website.

It is the strategic measurement document. The companion `gtm-ga4-event-taxonomy.md` is the implementation contract — exact event names, parameters, payloads, and QA checklists. Together they describe what Corporate Haven will observe, how it will be tagged, and how reporting will roll up to the search-platform and conversion goals from `docs/site-os/corporate-haven-build-list.md §B`.

This plan does not write code. It does not install GTM. It does not install GA4. It does not add scripts to `app/layout.tsx`. It is the precondition that must be in place before any of those moves are approved.

---

## B. Measurement Goals

- **Understand how users find the site** — split between organic search (Google, Bing), local profile traffic (GBP/GMB, Bing Places, Apple Business Connect), referral, direct, paid, and LLM/AI assistants.
- **Track homepage hub card engagement** — which of the 6 hubs (Mid-Term Rentals, Corporate Housing, Travel Nurse & Medical Housing, Student & Medical Student Housing, Insurance Relocation Housing, Family & Transitional Housing) routes the most qualified traffic.
- **Track service, hospital, location, comparison, property, FAQ, guide, checklist, and glossary engagement** — page-type-level depth, scroll depth, and CTA click rates.
- **Track Check Availability clicks** — the primary conversion event across every page that surfaces the CTA.
- **Track form starts and submit attempts** — first interaction, step views, field completes, submit attempts, success, and error. Submit-success only goes live when the form endpoint is implemented and verified.
- **Track contact and email clicks** — `mailto:` clicks, contact-page interactions, and (when phone is confirmed) `tel:` clicks.
- **Track content paths that support SEO, AEO, GEO, topical authority, and LLM visibility** — the resource center, FAQ clusters, comparison pages, glossary pages, hospital pages, and location pages each have an authority + visibility role and must be measurable.
- **Create clean reporting** for GA4, GSC, Bing Webmaster, GBP/GMB campaigns, and future marketing decisions — every event names a stable identifier, every page has a `page_type` parameter, and every UTM-tagged channel rolls up into a recognizable source/medium/campaign report.

---

## C. Recommended Tracking Stack

- **Google Tag Manager (GTM)** — primary tag manager. All third-party tags and event triggers route through a single GTM container. GTM container ID lives in an environment variable, never in source.
- **Google Analytics 4 (GA4)** — primary analytics platform. GA4 is configured through GTM unless the owner explicitly approves a direct install in a separate decision.
- **Google Search Console (GSC)** — search queries, indexing status, impressions, CTR, page performance. Verified at the property level; sitemap submitted from Phase 11 sitemap work.
- **Bing Webmaster Tools** — Bing indexing, Microsoft search visibility, and Bing-side query data. NAP and sitemap parity with GSC required.
- **Google Business Profile / Google My Business UTM strategy** — every outbound link from the GBP profile (website, services, posts) carries UTM tags so local-profile traffic can be attributed cleanly in GA4 (`utm_source=google` / `utm_medium=organic-profile` / `utm_campaign=gbp`).
- **Apple Business Connect / Apple Maps** — consistency tracking is a future checklist item. When the Apple Maps card launches, UTMs on the website link follow the `utm_source=apple` / `utm_medium=maps-profile` / `utm_campaign=apple-business-connect` pattern. Apple does not provide direct profile analytics in the same form as GBP, so on-site attribution + GA4 acquisition reporting is the substitute.
- **Cloudflare Pages** — hosting and deployment platform. The static export must serve GTM correctly; Cloudflare's transforms must not strip the GTM bootstrap. Validate after each deploy.

Other channels (Bing Places, social profiles, email, paid) follow the UTM pattern in Section J.

---

## D. Implementation Decision

- **GTM should be implemented through a public environment variable** such as `NEXT_PUBLIC_GTM_ID` when the GTM container ID is available. The variable is consumed at build time and read by a small client-side analytics provider; it never lives in source.
- **GA4 should be managed through GTM** unless the owner explicitly approves a direct GA4 install in a separate decision. Routing GA4 through GTM means one bootstrap, one consent gate, and one place to add/disable measurement tags.
- **Do not hardcode the GTM ID or GA4 ID** into source files. Do not commit `.env.local` or production tokens. `.env.example` documents the variable name only.
- **Do not add analytics code until** the GTM container ID is available AND the GA4 measurement plan is approved AND the form endpoint decision has been made AND the privacy/consent posture has been reviewed (see Section L).

---

## E. Event Groups

Five logical groups. Every event names a clean role in the funnel so reports can roll up by group.

### 1. Core Engagement Events

- `page_view`
- `navigation_click`
- `footer_click`
- `internal_link_click`
- `scroll_depth`
- `faq_open`
- `section_view`

### 2. Conversion Events

- `check_availability_click`
- `form_start`
- `form_step_view`
- `form_field_complete`
- `form_submit_attempt`
- `form_submit_success`
- `form_submit_error`
- `contact_click`
- `email_click`
- `phone_click` *(only when phone is confirmed — phone is currently MISSING — FLAGGED)*

### 3. Housing Intent Events

- `housing_card_click`
- `service_page_click`
- `property_page_click`
- `somerset_cta_click`
- `view_property_details`
- `view_housing_type`

### 4. Local Intent Events

- `cleveland_page_click`
- `hospital_page_click`
- `location_page_click`
- `near_hospital_cta_click`
- `directions_click` *(only when address is confirmed — address is currently MISSING — FLAGGED)*

### 5. Content Authority Events

- `resource_click`
- `guide_click`
- `checklist_click`
- `faq_cluster_click`
- `glossary_click`
- `comparison_click`

---

## F. Recommended GA4 Conversion Events

Mark these as conversions in GA4:

- `check_availability_click`
- `form_start`
- `form_submit_success`
- `contact_click`
- `email_click`
- `phone_click` *(when phone is confirmed)*

**Note**: Because the final form endpoint is MISSING — FLAGGED, track `form_submit_attempt` first. Do not mark `form_submit_success` as active until the real form endpoint is implemented and verified end-to-end (submission reaches a real destination, success state is reliably distinguishable from error). Until then, `form_submit_attempt` is the most reliable proxy for "user tried to convert."

---

## G. Standard Event Parameters

Every event ships with a subset of these. Field names are stable and shared across GTM, GA4, and source code.

- `event` — the event name (e.g. `check_availability_click`)
- `event_category` — high-level grouping (e.g. `conversion`, `engagement`, `housing_intent`)
- `event_action` — verb-noun action (e.g. `click_cta`, `open_faq`)
- `event_label` — human-readable label (e.g. `header_check_availability`)
- `page_path` — current path (e.g. `/cleveland-ohio/`)
- `page_title` — current document title
- `page_type` — page-type taxonomy (`homepage`, `services_hub`, `hub_card`, `service`, `property`, `hospital`, `comparison`, `location`, `resource_hub`, `guide`, `checklist`, `glossary`, `faq`, `faq_cluster`, `contact`, `check_availability`, `legal`, `not_found`)
- `section_name` — page section the interaction occurred in (e.g. `hero`, `housing_options`, `somerset`, `final_cta`)
- `cta_text` — verbatim CTA label that was clicked
- `cta_location` — where the CTA lived (e.g. `header`, `hero`, `section_inline`, `footer`)
- `link_url` — outbound or internal URL
- `housing_type` — controlled vocabulary (`mid_term_rentals`, `corporate_housing`, `healthcare_housing`, `student_housing`, `insurance_relocation_housing`, `family_transitional_housing`)
- `audience_type` — controlled vocabulary (`general_mid_term`, `business_professionals`, `healthcare`, `students_medical_students`, `insurance_relocation`, `families_in_transition`)
- `property_name` — e.g. `somerset`
- `location_name` — e.g. `cleveland`, `university_circle`, `lakewood`, `cleveland_heights`, `shaker_heights`
- `hospital_name` — e.g. `cleveland_clinic`, `university_hospitals`, `metrohealth`, `va_medical_center`, `case_western_reserve`
- `content_type` — `guide`, `checklist`, `glossary`, `faq_cluster`, `comparison`, `article`
- `form_name` — e.g. `check_availability`
- `form_step` — numeric step for multi-step forms; `1` for single-step

Parameter naming rule: lowercase `snake_case`, stable across releases, no PII. See Section I.

---

## H. Page Type Measurement Rules

Tracking priorities per page type. Every page includes `page_view` and the standard parameters; the entries below describe **what specifically matters** on top of that.

| Page type | `page_type` | Tracking priorities |
|---|---|---|
| Homepage | `homepage` | All 6 `housing_card_click` events, `check_availability_click` (hero + final CTA), `faq_open` for each visible FAQ, `email_click` from footer, `form_start`, `form_submit_attempt`, `scroll_depth` to validate fold visibility |
| Services hub | `services_hub` | `service_page_click` (each card), `internal_link_click` to comparison and resource pages, `check_availability_click` |
| Six homepage hub card pages | `hub_card` | `service_page_click` to supporting Phase 3 service pages, `near_hospital_cta_click`, `comparison_click`, `faq_open`, `check_availability_click`, `view_housing_type` |
| Supporting service SEO pages | `service` | `check_availability_click`, `faq_open`, `comparison_click`, `near_hospital_cta_click`, `internal_link_click` to parent hub, `view_housing_type` |
| Property pages | `property` | `somerset_cta_click`, `view_property_details`, `check_availability_click`, `email_click`, `faq_open`, `internal_link_click` to `/properties/` hub |
| Hospital pages | `hospital` | `near_hospital_cta_click`, `check_availability_click`, `faq_open`, `internal_link_click` to parent hospital hub and healthcare service hub, `hospital_page_click` from other surfaces |
| Comparison pages | `comparison` | `comparison_click` from referring pages, `check_availability_click`, `internal_link_click` to compared service pages, `faq_open` |
| Location pages | `location` | `location_page_click`, `check_availability_click`, `internal_link_click` to relevant service hubs, `faq_open` |
| Resource center | `resource_hub` | `resource_click` (each child), `guide_click`, `checklist_click`, `glossary_click`, `faq_cluster_click` |
| FAQ clusters | `faq_cluster` | `faq_open` per question, `internal_link_click` to relevant hub/service, `check_availability_click`, `faq_cluster_click` from referring pages |
| Checklists | `checklist` | `checklist_click` from referring pages, `check_availability_click`, `internal_link_click` to parent hub, `contact_click`, `email_click` |
| Glossary pages | `glossary` | `glossary_click` from referring pages, `internal_link_click` to related concept pages and service pages |
| Contact page | `contact` | `contact_click`, `email_click`, `phone_click` (when confirmed), `directions_click` (when address confirmed), `form_start`, `form_submit_attempt` |
| Check Availability page | `check_availability` | `form_start`, `form_step_view`, `form_field_complete`, `form_submit_attempt`, `form_submit_success` (when endpoint live), `form_submit_error`, `email_click`, `phone_click` (when confirmed) |

---

## I. Privacy and Consent Notes

- **Do not collect sensitive personal information** in analytics events. Tracking observes interaction patterns, not the content of those interactions.
- **Do not pass names, emails, phone numbers, medical status, insurance details, or private relocation details** into GTM or GA4 event parameters. The `form_field_complete` event records which field was completed by field name (e.g. `email`), never the value entered.
- **Only track user behavior and page interaction metadata** — page paths, page types, section names, CTA text, link URLs, controlled-vocabulary categorical attributes.
- **If consent tools are added later, analytics should respect the approved consent configuration.** GTM consent mode v2 (or its successor) is the expected integration point; events fire only with the appropriate consent signal.
- **Form values are off-limits**. Form submission tracking records the act of submission (`form_submit_attempt` / `form_submit_success` / `form_submit_error`) and which fields were completed, never the values.

---

## J. UTM Strategy

Use UTMs for GBP/GMB, Bing Places, Apple Business Connect, social profiles, email campaigns, and paid campaigns where applicable. The goal is a clean GA4 acquisition report where every channel's contribution is unambiguous.

**Recommended UTM examples**:

- `utm_source=google`
- `utm_medium=organic-profile`
- `utm_campaign=gbp`
- `utm_content=check-availability`
- `utm_source=apple`
- `utm_medium=maps-profile`
- `utm_campaign=apple-business-connect`
- `utm_source=bing`
- `utm_medium=places-profile`
- `utm_campaign=bing-places`

**UTM rules**:

- All UTM values lowercase, hyphen-delimited.
- `utm_source` names the platform (`google`, `bing`, `apple`, `facebook`, `linkedin`, etc.).
- `utm_medium` describes the channel type (`organic-profile`, `maps-profile`, `places-profile`, `social`, `email`, `cpc`, `display`).
- `utm_campaign` names the program or profile (`gbp`, `apple-business-connect`, `bing-places`, `relaunch-2026`).
- `utm_content` (optional) names the surface or destination CTA (`check-availability`, `services`, `somerset`).
- `utm_term` (optional) reserved for paid keyword tracking.
- Never use UTMs on internal links — they reset GA4 sessions and pollute attribution.

---

## K. Future Implementation Files

These files do not exist yet. They are the planned home for the future analytics implementation. Do not pre-create empty files; they appear together when Phase 12 implementation begins.

- `lib/analytics/data-layer.ts` — typed `dataLayer` initialization and `pushEvent` helper.
- `lib/analytics/events.ts` — exported event-builder functions per event in `gtm-ga4-event-taxonomy.md §B`.
- `components/analytics/AnalyticsProvider.tsx` — client component that loads GTM via the env-var ID and exposes a context-free `pushEvent` for downstream components.
- `app/layout.tsx` — single inline `<Script>` block that bootstraps GTM with `NEXT_PUBLIC_GTM_ID` (only when set). No raw GTM ID in source.
- `.env.example` — documents `NEXT_PUBLIC_GTM_ID` (placeholder value, never a real ID).

---

## L. Analytics Implementation Hold

Analytics implementation is held until **all** of the following resolve:

- **GTM container ID is available** (currently MISSING — FLAGGED; owner provides via `NEXT_PUBLIC_GTM_ID` in deploy environment)
- **GA4 property is created** (currently MISSING — FLAGGED; measurement ID provisioned and linked through GTM)
- **GTM event taxonomy is approved** (`docs/site-os/gtm-ga4-event-taxonomy.md` reviewed and signed off by owner)
- **Form endpoint / provider decision is confirmed** (currently MISSING — FLAGGED; required before `form_submit_success` can be marked a conversion)
- **Homepage 6-card structure is implemented** (✅ DONE — commit `eea4d87`)
- **Privacy / consent requirements are reviewed** (consent mode posture, cookie banner if any, regional rules)

Until every item resolves, no analytics code lands. `app/layout.tsx` stays unchanged. No GTM bootstrap, no GA4 inline tag, no event-tracking imports in components. The plan stays a plan.

---

Corporate Haven — Analytics & Measurement Plan v1.0
Last updated: 2026-05-24
Authored from: Analytics, GTM, GA4, and Measurement Phase Planning decision (2026-05-24)
