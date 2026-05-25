# Corporate Haven — GTM / GA4 Event Taxonomy

**Status**: APPROVED PLAN — documentation only. No analytics code in the repo yet.
**Last updated**: 2026-05-24
**Companion doc**: `docs/site-os/analytics-measurement-plan.md`
**Implementation phase**: `docs/site-os/corporate-haven-build-list.md §F Phase 12`

This document is the implementation contract for Phase 12 analytics. The companion `analytics-measurement-plan.md` covers strategy, goals, and the implementation hold. This file defines the exact event names, parameters, payloads, and QA checklists that GTM, GA4, and source code must agree on.

---

## A. Event Naming Rules

- **Use lowercase `snake_case` event names.** Example: `check_availability_click`, not `CheckAvailabilityClick` or `check-availability-click`.
- **Keep event names stable.** Once an event ships, it does not get renamed. Renaming breaks historical reporting and any GTM/GA4 audiences/funnels built on the old name. If the meaning changes, add a new event and document the deprecation of the old one.
- **Do not include private user data in event names or parameters.** Names like `email_click_sedrick_at_gmail` or `form_field_complete_phone_555_0100` are forbidden. The event records the *act* (`email_click`, `form_field_complete`), never the value.
- **Use the same event names across code, GTM, and GA4.** The event name that source pushes to `dataLayer` is exactly the event name configured in GTM and exactly the event name visible in GA4 reporting. No translation layer.
- **Prefer recommended GA4 event names where they fit, but use custom events for Corporate Haven-specific behavior.** `page_view` and `form_start` align with GA4 recommendations. `housing_card_click`, `near_hospital_cta_click`, `somerset_cta_click`, and similar custom events have no GA4 equivalent and exist to give Corporate Haven its own measurable surface.

---

## B. Master Event Taxonomy Table

| Event name | Trigger | Primary parameters | GA4 conversion? | Notes |
|---|---|---|---|---|
| `page_view` | Page load / SPA navigation | `page_path`, `page_title`, `page_type` | No (baseline) | GA4 fires automatically; ensure SPA navigation pushes manually if needed |
| `navigation_click` | Click on primary nav `<a>` | `link_url`, `cta_text`, `cta_location: header` | No | Excludes the header Check Availability CTA (use `check_availability_click`) |
| `footer_click` | Click on any footer `<a>` | `link_url`, `cta_text`, `cta_location: footer`, `section_name` | No | `section_name` = `company` / `housing` / `get_started` / `contact` / `legal` |
| `internal_link_click` | Click on any in-content internal `<a>` | `link_url`, `cta_text`, `page_path`, `section_name` | No | Excludes navigation, footer, and tracked CTAs |
| `check_availability_click` | Click on any Check Availability CTA | `cta_text`, `cta_location`, `page_path`, `page_type` | **Yes** | Highest-priority conversion event |
| `housing_card_click` | Click on a homepage hub card | `housing_type`, `audience_type`, `card_title`, `link_url`, `cta_location: homepage_hub` | No | One per card — see Section D for the 6 controlled-vocabulary triples |
| `service_page_click` | Click on a service link from any surface | `link_url`, `cta_text`, `housing_type`, `page_path` | No | Surface-agnostic |
| `property_page_click` | Click on a property link | `link_url`, `property_name`, `cta_text` | No | Currently only `somerset` |
| `somerset_cta_click` | Click on the Somerset "Learn more" CTA | `cta_text`, `cta_location`, `property_name: somerset` | No | Tracked separately from generic property link clicks |
| `faq_open` | Click on a FAQ accordion item / `<details>` toggle | `cta_text` (the question text), `section_name`, `page_path`, `page_type` | No | Fires only on open, not close |
| `contact_click` | Click on any Contact link (button, footer, body copy) | `cta_text`, `cta_location`, `link_url` | **Yes** | |
| `email_click` | Click on `mailto:` href | `cta_text`, `cta_location`, `link_url` | **Yes** | `link_url` may contain `mailto:contact@inbox.corporatehaven.net`; do not log values entered by the user |
| `phone_click` | Click on `tel:` href | `cta_text`, `cta_location`, `link_url` | **Yes** (when phone confirmed) | Phone is currently MISSING — FLAGGED; do not emit until confirmed |
| `form_start` | First user interaction with any field on the form | `form_name`, `form_step: 1`, `page_path` | **Yes** | Fires once per session per form |
| `form_step_view` | Step rendered (multi-step forms) | `form_name`, `form_step` | No | For single-step forms emit once on view |
| `form_field_complete` | Field loses focus with non-empty valid value | `form_name`, `form_step`, `form_field_name` (no value) | No | Never log the value entered |
| `form_submit_attempt` | User clicks submit | `form_name`, `form_step` | No | Until endpoint live this is the most reliable proxy for "tried to convert" |
| `form_submit_success` | Form endpoint returns success | `form_name`, `form_step` | **Yes** (when endpoint live) | Hold conversion marking until endpoint is verified |
| `form_submit_error` | Form endpoint returns error / validation rejects | `form_name`, `form_step`, `error_code` | No | `error_code` is a coarse category, not a raw message |
| `hospital_page_click` | Click on a `/housing-near-{hospital}/` link | `hospital_name`, `link_url`, `cta_text` | No | |
| `location_page_click` | Click on a `/cleveland-ohio/` or `/locations/...` link | `location_name`, `link_url`, `cta_text` | No | |
| `comparison_click` | Click on a `/compare/...` link | `link_url`, `cta_text`, `content_type: comparison` | No | |
| `resource_click` | Click on a `/resources/...` link from any surface | `link_url`, `cta_text`, `content_type` | No | `content_type` = `guide` / `checklist` / `glossary` / `resource_hub` |
| `guide_click` | Click on a `/resources/guides/...` link | `link_url`, `cta_text`, `content_type: guide` | No | |
| `checklist_click` | Click on a `/resources/checklists/...` link | `link_url`, `cta_text`, `content_type: checklist` | No | |
| `faq_cluster_click` | Click on a `/faqs/{topic}-cleveland/` link | `link_url`, `cta_text`, `content_type: faq_cluster` | No | Different from `faq_open` (which is intra-page accordion) |
| `glossary_click` | Click on a `/resources/glossary/{term}/` link | `link_url`, `cta_text`, `content_type: glossary` | No | |
| `scroll_depth` | User reaches 25 / 50 / 75 / 100% page depth | `page_path`, `page_type`, `scroll_threshold` | No | GTM built-in trigger |
| `section_view` | Section enters viewport (IntersectionObserver) | `section_name`, `page_path`, `page_type` | No | Use sparingly; one per significant section |

---

## C. Homepage Event Details

Exact event specs for the homepage. These are the top-priority events to validate first when Phase 12 implementation begins.

### `check_availability_click`

```json
{
  "event": "check_availability_click",
  "event_category": "conversion",
  "event_action": "click_cta",
  "event_label": "header_check_availability",
  "cta_text": "Check Availability",
  "cta_location": "header",
  "page_path": "/",
  "page_title": "Furnished Corporate Housing in Cleveland, OH | Corporate Haven",
  "page_type": "homepage"
}
```

`cta_location` varies by surface: `header`, `hero`, `final_cta`, `section_inline`.

### `housing_card_click`

```json
{
  "event": "housing_card_click",
  "event_category": "housing_intent",
  "event_action": "click_card",
  "event_label": "homepage_hub_mid_term_rentals",
  "cta_text": "Explore mid-term rentals",
  "cta_location": "homepage_hub",
  "card_title": "Mid-Term Rentals",
  "housing_type": "mid_term_rentals",
  "audience_type": "general_mid_term",
  "link_url": "/services/mid-term-rentals-cleveland/",
  "page_path": "/",
  "page_type": "homepage"
}
```

See Section D for all 6 cards' controlled-vocabulary values.

### `faq_open`

```json
{
  "event": "faq_open",
  "event_category": "engagement",
  "event_action": "open_faq",
  "event_label": "homepage_what_is_mid_term_housing",
  "cta_text": "What is mid-term housing?",
  "section_name": "homepage_faq",
  "page_path": "/",
  "page_type": "homepage"
}
```

`event_label` uses a stable slug of the question, not the full question text. The full question lives in `cta_text` for human-readable reports.

### `property_page_click`

```json
{
  "event": "property_page_click",
  "event_category": "housing_intent",
  "event_action": "click_property",
  "event_label": "somerset",
  "cta_text": "Learn more about the Somerset",
  "cta_location": "somerset_section",
  "link_url": "/properties/somerset/",
  "property_name": "somerset",
  "page_path": "/",
  "page_type": "homepage"
}
```

### `email_click`

```json
{
  "event": "email_click",
  "event_category": "conversion",
  "event_action": "click_email",
  "event_label": "footer_email",
  "cta_text": "contact@corporatehaven.net",
  "cta_location": "footer_contact",
  "link_url": "mailto:contact@inbox.corporatehaven.net",
  "page_path": "/",
  "page_type": "homepage"
}
```

`cta_text` carries the visible display address. `link_url` carries the routing mailto target. Never log values typed by the user in any form field.

### `form_start`

```json
{
  "event": "form_start",
  "event_category": "conversion",
  "event_action": "form_start",
  "event_label": "check_availability_form",
  "form_name": "check_availability",
  "form_step": 1,
  "page_path": "/",
  "page_type": "homepage"
}
```

Fires on the first user interaction with any field (focus + keystroke). Fires once per session per `form_name`.

### `form_submit_attempt`

```json
{
  "event": "form_submit_attempt",
  "event_category": "conversion",
  "event_action": "form_submit_attempt",
  "event_label": "check_availability_form",
  "form_name": "check_availability",
  "form_step": 1,
  "page_path": "/",
  "page_type": "homepage"
}
```

Fires on submit click, regardless of outcome. Until the form endpoint is implemented and verified, this is the most reliable proxy for "user tried to convert."

---

## D. Six Homepage Hub Card Events

The 6 cards on the homepage emit `housing_card_click` with the following controlled-vocabulary triples. These values are **stable identifiers** for reporting and must not be paraphrased per card across releases.

### 1. Mid-Term Rentals

- `housing_type`: `mid_term_rentals`
- `audience_type`: `general_mid_term`
- `card_title`: `Mid-Term Rentals`
- `link_url`: `/services/mid-term-rentals-cleveland/`

### 2. Corporate Housing

- `housing_type`: `corporate_housing`
- `audience_type`: `business_professionals`
- `card_title`: `Corporate Housing`
- `link_url`: `/services/corporate-housing-cleveland/`

### 3. Travel Nurse & Medical Housing

- `housing_type`: `healthcare_housing`
- `audience_type`: `healthcare`
- `card_title`: `Travel Nurse & Medical Housing`
- `link_url`: `/services/healthcare-housing-cleveland/`

### 4. Student & Medical Student Housing

- `housing_type`: `student_housing`
- `audience_type`: `students_medical_students`
- `card_title`: `Student & Medical Student Housing`
- `link_url`: `/services/student-housing-cleveland/`

### 5. Insurance Relocation Housing

- `housing_type`: `insurance_relocation_housing`
- `audience_type`: `insurance_relocation`
- `card_title`: `Insurance Relocation Housing`
- `link_url`: `/services/insurance-relocation-housing-cleveland/`

### 6. Family & Transitional Housing

- `housing_type`: `family_transitional_housing`
- `audience_type`: `families_in_transition`
- `card_title`: `Family & Transitional Housing`
- `link_url`: `/services/temporary-family-housing-cleveland/`

---

## E. Example dataLayer Payloads

These are the exact JSON shapes that `window.dataLayer.push(...)` will emit at implementation time. Use them as fixtures in GTM Preview and GA4 DebugView.

### `check_availability_click`

```javascript
window.dataLayer.push({
  event: 'check_availability_click',
  event_category: 'conversion',
  event_action: 'click_cta',
  event_label: 'hero_check_availability',
  cta_text: 'Check Availability',
  cta_location: 'hero',
  page_path: '/',
  page_title: document.title,
  page_type: 'homepage',
});
```

### `housing_card_click`

```javascript
window.dataLayer.push({
  event: 'housing_card_click',
  event_category: 'housing_intent',
  event_action: 'click_card',
  event_label: 'homepage_hub_healthcare_housing',
  cta_text: 'Explore healthcare housing',
  cta_location: 'homepage_hub',
  card_title: 'Travel Nurse & Medical Housing',
  housing_type: 'healthcare_housing',
  audience_type: 'healthcare',
  link_url: '/services/healthcare-housing-cleveland/',
  page_path: '/',
  page_type: 'homepage',
});
```

### `faq_open`

```javascript
window.dataLayer.push({
  event: 'faq_open',
  event_category: 'engagement',
  event_action: 'open_faq',
  event_label: 'homepage_who_uses_mid_term_rentals',
  cta_text: 'Who uses mid-term rentals in Cleveland?',
  section_name: 'homepage_faq',
  page_path: '/',
  page_type: 'homepage',
});
```

### `form_start`

```javascript
window.dataLayer.push({
  event: 'form_start',
  event_category: 'conversion',
  event_action: 'form_start',
  event_label: 'check_availability_form',
  form_name: 'check_availability',
  form_step: 1,
  page_path: '/',
  page_type: 'homepage',
});
```

### `form_submit_attempt`

```javascript
window.dataLayer.push({
  event: 'form_submit_attempt',
  event_category: 'conversion',
  event_action: 'form_submit_attempt',
  event_label: 'check_availability_form',
  form_name: 'check_availability',
  form_step: 1,
  page_path: '/',
  page_type: 'homepage',
});
```

### `email_click`

```javascript
window.dataLayer.push({
  event: 'email_click',
  event_category: 'conversion',
  event_action: 'click_email',
  event_label: 'footer_email',
  cta_text: 'contact@corporatehaven.net',
  cta_location: 'footer_contact',
  link_url: 'mailto:contact@inbox.corporatehaven.net',
  page_path: '/',
  page_type: 'homepage',
});
```

### `comparison_click`

```javascript
window.dataLayer.push({
  event: 'comparison_click',
  event_category: 'content_authority',
  event_action: 'click_comparison',
  event_label: 'corporate_housing_vs_hotels',
  cta_text: 'Corporate housing vs hotels',
  cta_location: 'related_pages',
  link_url: '/compare/corporate-housing-vs-hotels/',
  content_type: 'comparison',
  page_path: '/services/corporate-housing-cleveland/',
  page_type: 'hub_card',
});
```

### `guide_click`

```javascript
window.dataLayer.push({
  event: 'guide_click',
  event_category: 'content_authority',
  event_action: 'click_guide',
  event_label: 'what_is_mid_term_housing',
  cta_text: 'What is mid-term housing?',
  cta_location: 'resource_hub_grid',
  link_url: '/resources/guides/what-is-mid-term-housing/',
  content_type: 'guide',
  page_path: '/resources/',
  page_type: 'resource_hub',
});
```

---

## F. GA4 Recommended Conversions

Mark these events as conversions in GA4 (Admin → Conversions):

- `check_availability_click`
- `form_start`
- `form_submit_success` *(when form endpoint is implemented and verified)*
- `contact_click`
- `email_click`
- `phone_click` *(when phone is confirmed)*

Conversions outside this list (e.g. `housing_card_click`, `comparison_click`) are tracked but reported as engagement metrics, not conversions. Promoting more events to conversion status dilutes the signal — keep the list narrow.

---

## G. GTM Testing Checklist

Run this checklist in GTM Preview mode before publishing any container version.

- [ ] **GTM Preview mode** active for `corporatehaven.net`
- [ ] **Confirm dataLayer event appears** in the GTM Preview timeline for every event in Section B that the test page surfaces (header CTA click → `check_availability_click` appears; card click → `housing_card_click` appears; FAQ click → `faq_open` appears; etc.)
- [ ] **Confirm GA4 event fires** — Preview shows the GA4 tag firing with the expected event name
- [ ] **Confirm parameters arrive in DebugView** — GA4 DebugView shows the event with all expected `event_*`, `page_*`, `cta_*`, `housing_type`, `audience_type`, etc. parameters
- [ ] **Confirm conversion events only fire on intended actions** (e.g. `form_submit_success` does NOT fire on `form_submit_attempt`; `phone_click` does NOT fire until phone is configured)
- [ ] **Confirm no private user data is sent** — inspect each event payload; no field values, no email-address strings beyond the `mailto:` href, no names, no medical/insurance/relocation details
- [ ] **Confirm events work on mobile and desktop** — test in Chrome desktop, Safari iOS, Chrome Android at minimum
- [ ] **Confirm Cloudflare Pages deploy does not strip or block GTM** — after deploy, view-source on `https://corporatehaven.net/` confirms the GTM bootstrap script is present and uses the expected container ID
- [ ] **Confirm consent gate** (if consent tools exist) — events suppressed correctly when consent is denied; resume when granted

---

## H. GA4 DebugView Checklist

Within GA4 DebugView (Admin → DebugView), confirm:

- [ ] `page_view` fires on homepage load
- [ ] `check_availability_click` fires from header, hero, final CTA, and any other Check Availability button
- [ ] `housing_card_click` fires for all six cards (one event per card click) with the correct `housing_type` / `audience_type` / `card_title` / `link_url` triple per Section D
- [ ] `faq_open` fires when a homepage FAQ accordion item is opened (and not when it is closed)
- [ ] `form_start` fires on first form interaction (focus + keystroke on any field) — only once per session per `form_name`
- [ ] `form_submit_attempt` fires only when user attempts form submission — not on incidental Enter-key keystrokes inside text fields that should not submit
- [ ] `email_click` fires on every `mailto:` click (footer, contact page body, anywhere)
- [ ] No blocked or malformed event names — GA4 DebugView does not surface "event blocked: reserved name" or "parameter rejected: invalid format" warnings
- [ ] `page_type` parameter present on every event and uses the controlled vocabulary from `analytics-measurement-plan.md §G`
- [ ] No PII visible anywhere in DebugView event payloads

When all checks pass in Preview + DebugView, publish the GTM container version with a versioned description (e.g. `v1 — initial Phase 12 baseline`).

---

Corporate Haven — GTM/GA4 Event Taxonomy v1.0
Last updated: 2026-05-24
Authored from: Analytics, GTM, GA4, and Measurement Phase Planning decision (2026-05-24)
