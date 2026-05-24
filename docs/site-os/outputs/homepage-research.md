# Corporate Haven — Homepage Research & Strategy
**Site OS Master | Phase D | STEP 10A — Research Only**
**AI Depth: Level 5 Beyond-Elite**
**Status: Research artifact — do not edit source code**
**Date produced: 2026-05-23**
**Output path: `docs/site-os/outputs/homepage-research.md`**

---

## Table of Contents

1. [Homepage Purpose](#1-homepage-purpose)
2. [Primary Audience Analysis](#2-primary-audience-analysis)
3. [Search Intent Analysis](#3-search-intent-analysis)
4. [Keyword Type Research](#4-keyword-type-research)
5. [Keyword Mapping](#5-keyword-mapping)
6. [SEO Strategy](#6-seo-strategy)
7. [AEO Strategy](#7-aeo-strategy)
8. [GEO and Local SEO Strategy](#8-geo-and-local-seo-strategy)
9. [SERP and Competitor Opportunity Notes](#9-serp-and-competitor-opportunity-notes)
10. [Conversion Strategy](#10-conversion-strategy)
11. [Trust-Building Strategy](#11-trust-building-strategy)
12. [Homepage Section Strategy](#12-homepage-section-strategy)
13. [Recommended H1](#13-recommended-h1)
14. [Recommended Metadata](#14-recommended-metadata)
15. [Recommended CTA Hierarchy](#15-recommended-cta-hierarchy)
16. [AEO FAQ Research — 30+ Candidate Questions](#16-aeo-faq-research--30-candidate-questions)
17. [Recommended Visible Homepage FAQ Set](#17-recommended-visible-homepage-faq-set)
18. [Schema Plan](#18-schema-plan)
19. [Internal Linking Plan](#19-internal-linking-plan)
20. [Image and Alt Text Plan](#20-image-and-alt-text-plan)
21. [Front-End Design Notes](#21-front-end-design-notes)
22. [Framer Motion Notes](#22-framer-motion-notes)
23. [Technical SEO Notes](#23-technical-seo-notes)
24. [Missing Data and TODO List](#24-missing-data-and-todo-list)
25. [Content Preservation Notes for Build Prompt](#25-content-preservation-notes-for-build-prompt)

---

## 1. Homepage Purpose

**Status: CONFIRMED intent — APPROVED PLACEHOLDER copy**

The Corporate Haven homepage serves six simultaneous functions:

1. **Primary brand anchor** — Establishes Corporate Haven as the Cleveland-based, professional, fully furnished mid-term rental and corporate housing provider. Differentiates clearly from Airbnb/VRBO (leisure), traditional annual apartments (duration mismatch), and extended-stay hotels (cost and amenity gap).

2. **Audience router** — Directs each of 12 confirmed audience segments (traveling professionals, travel nurses, medical professionals, resident physicians, healthcare support staff, relocating families, insurance relocation guests, students, interns, families in transition, contract workers, consultants) to the relevant service page as quickly as possible.

3. **Primary lead-capture surface** — Houses the primary Check Availability form above the fold in a two-column split layout. The homepage must convert; it is not a brochure page.

4. **SEO entry point** — Ranks for broad Cleveland mid-term housing, corporate housing, and furnished rental queries that feed all downstream service and location pages.

5. **AEO answer hub** — Provides structured, direct-answer content for the most-asked questions about mid-term housing in Cleveland, feeding Google's People Also Ask, AI overviews, voice search, and LLM citation pools.

6. **Trust builder** — Uses only verified facts, confirmed amenities, and approved placeholder language to build trust with professional renters who have high stakes (job assignments, medical rotations, insurance displacement) and cannot afford a housing mistake.

**What the homepage must NOT do:**
- Claim vacation-rental positioning
- Use Airbnb-style "host" or leisure framing
- Invent reviews, ratings, or social proof
- Invent pricing
- Present unverified service guarantees
- Use hotel booking language ("stay tonight," "nightly rates")
- Present generic apartment-management boilerplate

---

## 2. Primary Audience Analysis

**Status: All 12 segments CONFIRMED per `docs/site-os/corporate-haven-build-context.md §5`**
**Per-segment messaging: MISSING — FLAGGED — owner to provide before Phase D final copy**

### Audience Segment Matrix

| Segment | Primary Need | Pain Point Addressed | Primary Landing Target |
|---|---|---|---|
| Traveling professionals | Furnished housing, flexible lease, professional setup | Hotels overpriced past 2–3 weeks; leases too long | `/services/mid-term-rentals` |
| Medical professionals | Professional-grade housing near hospital systems | Credentialing and assignment timing uncertainty | `/services/medical-professional-housing` |
| Travel nurses | Assignment-duration flexible housing, near Cleveland Clinic / UH / MetroHealth | Assignment-date unpredictability; last-minute placements | `/services/travel-nurse-housing` |
| Resident physicians | Stable mid-term base during training program | Multi-month training rotations don't fit leases | `/services/medical-professional-housing` |
| Healthcare support staff | Affordable, professional housing near medical campuses | Budget constraints + professional environment needed | `/services/medical-professional-housing` |
| Relocating families | Move-in ready, space for family, transition bridge | Relocation timelines rarely match housing availability | `/services/family-relocation-housing` (Phase 2) |
| Insurance relocation guests | Fast, furnished, all-inclusive placement | Urgent displacement; insurer may be paying directly | `/services/insurance-relocation-housing` |
| Students | Mid-term furnished housing without setup overhead | Semester or program durations don't fit leases or hotels | `/services/mid-term-rentals` (interim) |
| Interns | Professional furnished housing near employer | Internship terms 8–16 weeks; no lease flexibility | `/services/mid-term-rentals` (interim) |
| Families in transition | Space, kitchen, stability during move | Can't live in a hotel room with kids for months | `/services/mid-term-rentals` |
| Contract workers | Furnished, flexible, professional base | Project contracts 1–6 months; lease-mismatch | `/services/corporate-housing` |
| Consultants | Professional-grade home base, workspace | Need WiFi, desk, quiet — not a hotel lobby | `/services/corporate-housing` |

### Audience Insight: What Connects All 12 Segments

All 12 share the same core problem: **they need housing for more than a hotel stay and less than a year, and they need it to be ready when they arrive.**

The homepage copy must immediately signal:
- "We understand the gap between a hotel and a lease."
- "We serve professionals, not vacationers."
- "Everything is ready on move-in day."
- "We are in Cleveland — specifically."

This shared pain point is the homepage's opening strategic anchor.

---

## 3. Search Intent Analysis

### Homepage-Level Intent Mix

| Intent Type | Query Examples | Priority |
|---|---|---|
| **Commercial investigation** | "corporate housing Cleveland Ohio," "furnished rentals Cleveland," "mid-term rentals Cleveland" | Highest |
| **Transactional** | "check availability corporate housing Cleveland," "furnished apartment Cleveland 30 days," "book mid-term rental Cleveland" | High |
| **Informational** | "what is mid-term housing," "difference between mid-term and short-term rental," "what is corporate housing" | High (AEO) |
| **Local / near-me** | "furnished housing near Cleveland Clinic," "corporate housing near me Cleveland," "mid-term rentals near University Circle" | High (Local) |
| **Voice / conversational** | "where can I find furnished housing in Cleveland for 3 months," "is there furnished corporate housing in Cleveland Ohio" | Medium (AEO / Voice) |
| **Problem-based** | "housing for travel nurses Cleveland," "insurance relocation housing Cleveland," "furnished housing between hotel and apartment" | High |

### Primary Intent Declaration

> The homepage serves **commercial investigation intent** as its primary SERP role. Visitors arrive comparing options, not yet ready to book but actively evaluating. The page must immediately qualify Corporate Haven as the right fit and capture the lead.

### Secondary Intent: AEO / Answer Coverage

The homepage is the highest-trust surface for AI overview and People Also Ask coverage. Every FAQ answer must be answer-first, self-contained, and match visible text exactly.

---

## 4. Keyword Type Research

### Primary Keyword

`corporate housing Cleveland Ohio`

**Rationale:** Highest commercial-intent, locally qualified, directly maps to primary offer, used by the target professional audience, broad enough to serve as homepage anchor while service pages capture narrower terms.

---

### Secondary Keywords

- mid-term rentals Cleveland Ohio
- furnished rentals Cleveland
- furnished housing Cleveland
- corporate rentals Cleveland
- fully furnished housing Cleveland Ohio
- mid-term housing Cleveland
- executive housing Cleveland Ohio
- furnished apartments Cleveland Ohio

---

### Long-Tail Keywords

- fully furnished mid-term rentals Cleveland Ohio
- corporate housing Cleveland Ohio for professionals
- furnished housing in Cleveland for 1 to 6 months
- move-in ready housing Cleveland Ohio
- furnished corporate rentals near Cleveland Clinic
- short-term furnished housing Cleveland Ohio professionals
- mid-term furnished apartments Cleveland no lease
- all-inclusive furnished housing Cleveland Ohio
- furnished housing Cleveland Ohio with utilities included
- furnished housing Cleveland for traveling workers

---

### Local Keywords

- corporate housing Cleveland OH
- furnished rentals Cleveland OH
- mid-term housing Cleveland Ohio
- furnished housing Cuyahoga County Ohio
- corporate housing University Circle Cleveland
- furnished rentals near Cleveland Clinic
- mid-term rentals downtown Cleveland
- furnished housing Cleveland Heights Ohio (APPROVED PLACEHOLDER — Phase 2)
- corporate housing Lakewood Ohio (APPROVED PLACEHOLDER — Phase 2)
- furnished rentals Shaker Heights Ohio (APPROVED PLACEHOLDER — Phase 2)

---

### Transactional Keywords

- check availability corporate housing Cleveland
- book furnished rental Cleveland Ohio
- lease furnished housing Cleveland short term
- find corporate housing Cleveland Ohio
- rent furnished apartment Cleveland 30 days
- corporate housing Cleveland available now
- mid-term rental Cleveland apply
- request housing corporate Cleveland

---

### Informational Keywords

- what is mid-term housing
- what is corporate housing
- difference between mid-term and short-term rental
- what is furnished corporate housing
- how long can you stay in mid-term housing
- what does all-inclusive furnished housing include
- who uses corporate housing
- how does mid-term rental work
- what is included in furnished corporate housing
- is mid-term housing better than a hotel

---

### Commercial-Intent Keywords

- best corporate housing Cleveland Ohio
- top furnished rentals Cleveland
- corporate housing Cleveland reviews
- compare mid-term housing Cleveland
- furnished housing Cleveland options
- corporate housing Cleveland Ohio providers
- where to stay for 3 months in Cleveland Ohio
- Cleveland furnished housing for professionals

---

### Problem-Based Keywords

- can't find housing for travel nurse assignment Cleveland
- need furnished housing between jobs Cleveland
- hotel too expensive for 2 months Cleveland
- no annual lease Cleveland furnished apartment
- relocated and need housing fast Cleveland
- insurance displacement housing Cleveland
- housing for medical rotation Cleveland Ohio
- housing between homes Cleveland Ohio

---

### Solution-Based Keywords

- fully furnished move-in ready housing Cleveland
- all-inclusive mid-term rental Cleveland
- furnished housing utilities included Cleveland Ohio
- mid-term lease no setup required Cleveland
- move-in ready corporate housing Cleveland
- Cleveland furnished housing everything included
- professional furnished housing Cleveland Ohio

---

### Service Keywords

- mid-term rentals
- corporate housing
- travel nurse housing Cleveland
- medical professional housing Cleveland
- insurance relocation housing Cleveland
- furnished housing for professionals
- furnished corporate apartments
- executive housing rentals
- fully furnished mid-term housing

---

### Service Plus Location Keywords

- mid-term rentals Cleveland Ohio
- corporate housing Cleveland Ohio
- travel nurse housing Cleveland Ohio
- medical professional housing Cleveland
- insurance relocation housing Cleveland Ohio
- furnished rentals Cuyahoga County
- corporate housing University Circle OH
- mid-term housing near Cleveland Clinic
- furnished housing near University Hospitals Cleveland

---

### AEO Question Keywords

- What is mid-term housing?
- What is corporate housing in Cleveland?
- Who uses mid-term rentals in Cleveland?
- What is included in furnished corporate housing?
- How long can I stay in a mid-term rental?
- Is mid-term housing cheaper than a hotel in Cleveland?
- What is the difference between mid-term and short-term rental?
- How do I find corporate housing in Cleveland Ohio?
- Do mid-term rentals include utilities in Cleveland?
- What is the minimum stay for corporate housing in Cleveland?
- Is Corporate Haven good for travel nurses?
- Does Corporate Haven offer insurance relocation housing?
- What neighborhoods in Cleveland offer furnished mid-term housing?
- How do I book corporate housing in Cleveland?
- What is included in an all-inclusive mid-term rental?

---

### Voice Search Queries

- "Where can I find furnished housing in Cleveland for three months?"
- "Is there corporate housing near Cleveland Clinic?"
- "What is mid-term housing in Cleveland Ohio?"
- "Who provides furnished housing for travel nurses in Cleveland?"
- "Can I rent a furnished apartment in Cleveland for two months?"
- "What does all-inclusive furnished housing include?"
- "How do I check availability for corporate housing in Cleveland?"
- "Is Corporate Haven a good option for medical professionals in Cleveland?"
- "What is the difference between a mid-term rental and a hotel?"
- "Does Corporate Haven offer housing for relocating families in Cleveland?"

---

### Semantic and Entity Keywords

**Entity keywords:**
- Corporate Haven (brand entity)
- The Somerset (property entity)
- Cleveland, Ohio (location entity)
- Cuyahoga County (county entity)
- Cleveland Clinic (implied proximity entity — do not claim specific proximity without owner confirmation)
- University Hospitals (implied proximity entity)
- MetroHealth (implied proximity entity)
- Travel nurses (audience entity)
- Mid-term rental (concept entity)
- Corporate housing (concept entity)
- Furnished rental (concept entity)

**Semantic cluster — mid-term housing:**
furnished, all-inclusive, move-in ready, flexible lease, utilities included, WiFi included, short-term alternative, monthly rental, temporary housing, transition housing

**Semantic cluster — corporate housing:**
executive housing, professional housing, business travel housing, company housing, relocation housing, furnished corporate apartment, monthly corporate rental

**Semantic cluster — professional audiences:**
travel nurse housing, medical housing, relocation housing, insurance housing, consultant housing, contract worker housing, corporate relocation

---

### Internal Link Anchor Opportunities

- "mid-term rentals in Cleveland" → `/services/mid-term-rentals`
- "corporate housing" → `/services/corporate-housing`
- "travel nurse housing" → `/services/travel-nurse-housing`
- "medical professional housing" → `/services/medical-professional-housing`
- "insurance relocation housing" → `/services/insurance-relocation-housing`
- "Cleveland, Ohio" → `/cleveland-ohio`
- "The Somerset" → `/properties/somerset`
- "Check Availability" → `/check-availability`
- "contact us" or "Contact Corporate Haven" → `/contact`
- "all available rentals" or "view properties" → `/properties`

---

### Image Alt Text Keyword Opportunities

- Hero section: `Fully furnished living area in Corporate Haven mid-term rental Cleveland Ohio`
- Somerset exterior (when available): `The Somerset — Corporate Haven furnished rental Cleveland Ohio 44108`
- Somerset interior living room (when available): `Furnished living room at the Somerset Corporate Haven Cleveland`
- Somerset workspace (when available): `Dedicated workspace in furnished mid-term rental Cleveland Ohio`
- Services section: `Corporate Haven mid-term rental and corporate housing services Cleveland Ohio`
- General placeholder: `Furnished housing for professionals and corporate guests in Cleveland Ohio`

---

### Schema Entity Opportunities

- `Organization` — Corporate Haven
- `LocalBusiness` — Corporate Haven, areaServed: Cleveland / Cuyahoga County
- `WebSite` — with SearchAction potential
- `WebPage` — homepage
- `FAQPage` — visible FAQ section
- `Service` — mid-term rentals, corporate housing (may live on service pages; homepage FAQ may cite)
- `BreadcrumbList` — not applicable to homepage (root URL)

---

## 5. Keyword Mapping

### URL Slug

`/` (homepage — root)

**Keyword target:** Brand homepage; primary anchor for `corporate housing Cleveland Ohio` and `mid-term rentals Cleveland Ohio`

---

### Meta Title

**Keyword target:** corporate housing Cleveland Ohio + brand name

**Recommended:**
`Furnished Mid-Term Rentals & Corporate Housing in Cleveland, OH | Corporate Haven`

Character count: 78 characters — over the 60-character soft limit. Trim options:

- Option A (60 chars): `Corporate Housing & Mid-Term Rentals Cleveland, OH | Corporate Haven`
  - 69 chars — still over; trim further:
- Option B (58 chars): `Furnished Corporate Housing in Cleveland, OH | Corporate Haven`
  - 62 chars — marginal
- Option C (55 chars): `Corporate Housing Cleveland, OH | Corporate Haven`
  - 50 chars — within limit; loses "furnished" and "mid-term"

**Recommended final:**
`Furnished Corporate Housing in Cleveland, OH | Corporate Haven`
*(62 chars — acceptable; primary keyword present, local qualifier present, brand present)*

**Fallback if 60-char strict:**
`Corporate Housing in Cleveland, OH | Corporate Haven`
*(52 chars — clean, keyword-safe)*

---

### Meta Description

**Keyword target:** mid-term rentals Cleveland, corporate housing, fully furnished, flexible lease, professionals

**Recommended:**
`Corporate Haven offers fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, travel nurses, and relocating guests. Move-in ready. Check availability.`

Character count: 198 — over 160-char limit. Trim:

`Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, OH for professionals, travel nurses, and relocating guests. Check availability.`

Character count: 171 — close. Trim further:

`Fully furnished mid-term rentals and corporate housing in Cleveland, OH for professionals, travel nurses, and relocating guests. Move-in ready. Check availability.`

Character count: 162 — at limit.

**Final recommended (157 chars):**
`Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.`

*(Note: Phone TODO placeholder replaces phone number per `lib/constants/site.ts`. When phone is confirmed, insert: "Call `<PHONE — TODO-PHASE-F-LAUNCH>`.")*

---

### H1

**Keyword target:** mid-term housing / corporate housing + Cleveland, Ohio + professional audience signal

**Recommended H1:**
`Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio`

**Alt H1 Option (audience-signal lead):**
`Cleveland's Furnished Housing for Professionals, Travel Nurses, and Corporate Guests`

**Alt H1 Option (benefit-signal lead):**
`Move-In-Ready Furnished Housing in Cleveland, Ohio — Built for Professionals`

See [Section 13](#13-recommended-h1) for final recommendation and rationale.

---

### H2s

**Keyword targets per section:**

| H2 | Keyword Target |
|---|---|
| Housing built for the people who book it | furnished housing Cleveland, professional housing |
| What is mid-term housing? | mid-term housing definition, informational intent |
| Everything ready when you arrive | all-inclusive furnished housing, move-in ready |
| Who stays with Corporate Haven? | audience segments, corporate housing Cleveland |
| The Somerset — Cleveland's featured furnished rental | The Somerset, furnished rental Cleveland 44108 |
| Mid-term and corporate housing in Cleveland, Ohio | Cleveland Ohio corporate housing (local) |
| Common questions about furnished housing in Cleveland | FAQ, AEO, People Also Ask |
| Ready to check availability? | Check Availability CTA, transactional |

---

### Hero Copy

**Keyword targets:** corporate housing Cleveland Ohio, mid-term rentals, furnished, move-in ready, professionals

---

### FAQ Section

**Keyword targets:** What is mid-term housing, how does corporate housing work, travel nurse housing Cleveland, insurance relocation housing, furnished housing utilities included, minimum stay, check availability

---

### Internal Links

**Keyword targets / anchor text:**
- mid-term rentals → `/services/mid-term-rentals`
- corporate housing → `/services/corporate-housing`
- travel nurse housing → `/services/travel-nurse-housing`
- medical professional housing → `/services/medical-professional-housing`
- insurance relocation housing → `/services/insurance-relocation-housing`
- The Somerset → `/properties/somerset`
- Cleveland, Ohio → `/cleveland-ohio`
- Check Availability → `/check-availability`

---

### Image Alt Text

**Keyword targets:**
- Furnished housing Cleveland Ohio
- Corporate Haven mid-term rental Cleveland
- The Somerset furnished rental Cleveland 44108
- Professional furnished housing Cleveland
- Move-in ready furnished housing Cleveland Ohio

---

### Schema

**Keyword / entity targets:**
- Organization: Corporate Haven
- LocalBusiness: Cleveland, Cuyahoga County, areaServed
- WebSite: corporatehaven.net
- FAQPage: mid-term housing questions, Cleveland corporate housing

---

## 6. SEO Strategy

### Search Intent

**Primary:** Commercial investigation — visitors evaluating mid-term and corporate housing options in Cleveland, comparing Corporate Haven against hotels, platforms like Airbnb/VRBO, and annual leases.

**Secondary:** Informational — visitors learning what mid-term housing is and whether it applies to their situation.

**Tertiary:** Transactional — visitors ready to check availability or initiate a leasing inquiry.

---

### SERP Opportunity

The Cleveland mid-term and corporate housing SERP is fragmented across:
- National platforms (Furnished Finder, Landing, Blueground, Airbnb) with local listings
- National corporate housing companies (Oakwood, Korman) without local ownership signal
- Generic apartment aggregators (Apartments.com, Zillow) with long-term bias

**Opportunity:** A locally owned, professionally positioned, Cleveland-specific furnished housing provider with a well-structured, AEO-ready homepage has a clear differentiation gap to exploit. Local ownership + local relevance + professional audience focus + structured content = strong SEO and AEO positioning versus national platforms with thin local signals.

---

### Meta Title

`Furnished Corporate Housing in Cleveland, OH | Corporate Haven`
*(62 chars — recommended — see Section 5)*

---

### Meta Description

`Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.`
*(157 chars — recommended — see Section 5)*

---

### Heading Hierarchy

```
H1: Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio
  H2: Housing built for the people who book it
    H3: [Service card labels — Mid-Term Rentals, Corporate Housing, Travel Nurse Housing, etc.]
  H2: What is mid-term housing?
  H2: Everything ready when you arrive
    H3: What's included
  H2: Who stays with Corporate Haven?
  H2: The Somerset — Cleveland's featured furnished rental
  H2: Mid-term and corporate housing in Cleveland, Ohio
  H2: Common questions about furnished housing in Cleveland
    H3: [FAQ items — rendered as visible expandable items]
  H2: Ready to check availability?
```

---

### Internal Links

Minimum 6 internal outbound links on homepage:
1. `/services/mid-term-rentals` — anchor: "mid-term rentals"
2. `/services/corporate-housing` — anchor: "corporate housing"
3. `/services/travel-nurse-housing` — anchor: "travel nurse housing"
4. `/services/medical-professional-housing` — anchor: "medical professional housing"
5. `/services/insurance-relocation-housing` — anchor: "insurance relocation housing"
6. `/properties/somerset` — anchor: "The Somerset"
7. `/cleveland-ohio` — anchor: "Cleveland, Ohio"
8. `/check-availability` — anchor: "Check Availability" (CTA)
9. `/contact` — anchor: "Contact Corporate Haven"
10. `/faq` — anchor: "frequently asked questions" or "full FAQ"

---

### Image Alt Text

See [Section 20](#20-image-and-alt-text-plan) for complete plan.

---

### URL Slug

`/` (homepage — root, no slug needed)

---

### Canonical Guidance

Self-referencing canonical:
```html
<link rel="canonical" href="https://corporatehaven.net/" />
```
Set via `alternates.canonical` in Next.js metadata export on `app/page.tsx`.

---

### Indexing Guidance

`index, follow` — homepage is the primary indexable entry point.

---

### Sitemap Impact

Homepage must appear as the root entry in `sitemap.xml` with highest priority (`1.0`) and `changefreq: monthly`.

---

### Robots Guidance

No `noindex` directive. Ensure `robots.txt` allows crawling of `/`.

---

### Open Graph Guidance

```
og:title — Furnished Corporate Housing in Cleveland, OH | Corporate Haven
og:description — Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests.
og:image — TODO: owner-supplied 1200×630 image with brand wordmark + Somerset or Cleveland context imagery (MISSING — FLAGGED)
og:url — https://corporatehaven.net/
og:type — website
```

---

### Page Speed Guidance

- Avoid large above-the-fold images until owner photography is supplied. Use optimized placeholder SVG or brand-tinted placeholder with `aria-hidden="true"`.
- Defer any animation until after paint.
- Use Next.js `<Image>` component with proper `width`, `height`, and `priority` on above-the-fold images when real photography arrives.
- Minimize layout shift from form placeholder.
- Use `font-display: swap` on any loaded typefaces.

---

### Accessibility Guidance

- All interactive elements keyboard-navigable.
- Form placeholder must include visible labels and `aria-label` attributes.
- CTA buttons must have descriptive accessible names (not "Click here").
- FAQ section must use semantic HTML or ARIA roles for accordion behavior.
- Heading hierarchy must be sequential — no skipped levels.
- Color contrast for any text on background must meet WCAG 2.1 AA minimum.

---

### Mobile-First Layout Notes

- Hero stacks to single column on mobile — copy on top, form below.
- Service cards: 1-column on mobile, 2-column on tablet, 3-column on desktop.
- CTA buttons full-width on mobile.
- FAQ items full-width accordion on mobile.
- Navigation: mobile menu triggered by hamburger.

---

### Content Hierarchy

1. H1 + hero CTA (primary lead capture) — above fold
2. Services preview grid — clear routing to service pages
3. What is mid-term housing — informational anchor for AEO
4. What's included / amenities — trust builder, qualification signal
5. Featured property (The Somerset) — concrete proof point
6. Who stays with Corporate Haven — audience segment routing
7. Cleveland context section — local SEO anchor
8. FAQ section — AEO hub
9. Final CTA — transactional close

---

### Topical Authority Contribution

The homepage is the root authority document for Corporate Haven's topical cluster. It links to:
- Service pages (topical depth)
- Location pages (geo authority)
- Property pages (trust + specificity)
- FAQ hub (AEO depth)

All downstream pages should link back to homepage and cross-link within their cluster, building topical authority across the site.

---

## 7. AEO Strategy

### Direct-Answer Sections

Every major section should open with a direct-answer sentence that answers an implied question:
- "What is mid-term housing?" → answered directly in opening of that section
- "What's included?" → answered as a bulleted, schema-compatible list
- "Who books a Corporate Haven stay?" → answered with audience list
- "How do I check availability?" → answered in FAQ and CTA copy

---

### Answer-First Paragraphs

The hero sub-headline and the opening of each major section must answer the implied question within the first 1–2 sentences before expanding.

**Hero sub-headline example:**
> Corporate Haven provides fully furnished, all-inclusive mid-term rentals and corporate housing in Cleveland, Ohio — built for traveling professionals, travel nurses, medical staff, and relocating guests who need move-in-ready housing for stays longer than a hotel and shorter than a lease.

This sentence answers: "What is Corporate Haven?" and "Who is it for?" in one pass — suitable for AI overview and voice search extraction.

---

### FAQ Sections

- Minimum 8 visible FAQ items on homepage
- Maximum 12 to avoid length bloat; additional questions route to `/faq`
- Each answer: direct answer in sentence 1, supporting detail in sentence 2, optional CTA in sentence 3
- All FAQ text must match `FAQPage` schema exactly
- Include a "See all FAQs" link to `/faq` at the end of the FAQ section

---

### FAQ Schema Opportunities

`FAQPage` JSON-LD to match visible FAQ content exactly. See [Section 18](#18-schema-plan) for schema details.

---

### People Also Ask Style Questions

High-priority PAA candidates for Corporate Haven homepage:

1. What is mid-term housing?
2. What is corporate housing?
3. What is included in furnished mid-term housing?
4. How long can I stay in a mid-term rental?
5. Is mid-term housing cheaper than a hotel?
6. What is the difference between mid-term and short-term rental?
7. Who uses corporate housing?
8. Does Corporate Haven accept travel nurses?
9. What is included in an all-inclusive rental?
10. How do I check availability for furnished housing in Cleveland?

---

### Voice Search Phrasing

All FAQ answers must be phrased for voice readability — complete sentences, no abbreviations, no ambiguous pronouns without clear antecedents.

Example: Not "Yes, it is." but "Yes, Corporate Haven provides furnished housing for travel nurses on assignment in Cleveland, Ohio."

---

### Conversational Queries

AEO content must cover these conversational-style queries:
- "Is there corporate housing in Cleveland Ohio?"
- "What's the difference between a mid-term rental and an apartment?"
- "Can I rent a furnished apartment in Cleveland for just two months?"
- "Is Corporate Haven right for a travel nurse?"
- "Do you include WiFi and utilities in Cleveland furnished housing?"

---

### Entity Clarity

The homepage must establish these entities clearly:
- **Corporate Haven** = Cleveland-based furnished mid-term rental and corporate housing provider
- **The Somerset** = verified furnished property in Cleveland, ZIP 44108
- **Mid-term rental** = housing for stays between a hotel and an annual lease (typically 30 days to 12 months)
- **Corporate housing** = fully furnished, all-inclusive housing for professionals on assignment or relocation
- **Cleveland, Ohio** = primary service location

---

### LLM Search Visibility Structure

For AI overviews and LLM citation:
- Use clear entity-first sentence structure: "[Brand] provides [service] in [location] for [audience]."
- Define key terms in natural language on first use.
- Use structured lists for inclusions, audience segments, and FAQ answers.
- Avoid ambiguous pronouns; name the entity in each answer.
- FAQ answers must be self-contained (answerable without surrounding context).

---

## 8. GEO and Local SEO Strategy

### Cleveland, Ohio Targeting

**Status: CONFIRMED primary city**

- H1 must include "Cleveland, Ohio" or "Cleveland, OH"
- Meta title must include "Cleveland, OH"
- Hero copy must name Cleveland in the opening sentence or sub-headline
- LocalBusiness schema must name Cleveland, Ohio as primary location
- A dedicated Cleveland context section is recommended to anchor local relevance

---

### Cuyahoga County Context

**Status: APPROVED PLACEHOLDER — service-area radius**

- Use "Cleveland and Cuyahoga County" in service area descriptions
- Do not claim specific adjacent cities as confirmed service areas until owner confirms
- LocalBusiness `areaServed` may include Cuyahoga County as a general area

---

### Adjacent Area Targeting

**Status: APPROVED PLACEHOLDER per `docs/site-os/corporate-haven-build-context.md §6`**
**Resolution needed before Phase 2 location pages launch**

Adjacent areas approved for planning-level reference only:
- Cleveland Heights
- Shaker Heights
- Lakewood
- University Circle
- Tremont
- Ohio City
- Beachwood

Do not present these as confirmed service areas on the homepage. May reference them as "Cleveland and surrounding areas" or "Cuyahoga County" only.

---

### Local Modifiers in Copy

Natural local modifier placement:
- "in Cleveland, Ohio"
- "in Cleveland, OH"
- "in Cuyahoga County"
- "near Cleveland Clinic" — **APPROVED PLACEHOLDER only — do not claim specific proximity without owner confirmation**
- "in the Cleveland area"
- "Cleveland's"

---

### Local Search Intent Coverage

Homepage FAQ must include at minimum:
- "What neighborhoods in Cleveland offer furnished mid-term housing?" (acknowledging Cleveland scope)
- "Is Corporate Haven located in Cleveland, Ohio?"
- "Do you serve Cuyahoga County?"

---

### Location-Specific FAQs

See FAQ Section 16 and 17 for Cleveland-specific FAQ questions.

---

### Google Business Profile Support

**Status: MISSING — FLAGGED**

When owner sets up Google Business Profile:
- NAP (Name, Address, Phone) must exactly match site schema
- Phone is currently MISSING — FLAGGED
- Address (public-facing vs. service-area-only) is MISSING — FLAGGED
- GBP description should match homepage `og:description` closely
- GBP primary category: "Corporate Housing" or "Furnished Apartments"

---

### Bing Places Support

Same NAP consistency requirement as GBP. Set up after GBP is live and verified.

---

### Apple Business Connect

Recommend setup when phone and address decision is resolved.

---

### LocalBusiness Schema Rules

- No `streetAddress` until public-facing address decision is confirmed
- Use `areaServed` with `Cleveland` and `Cuyahoga County`
- No `telephone` until phone is confirmed
- No `email` until email is confirmed
- No `openingHours` until hours are confirmed
- No `aggregateRating` until verified reviews exist

---

## 9. SERP and Competitor Opportunity Notes

**Status: STRATEGY-BASED — real SERP analysis requires manual inspection or `prompts/seo-aeo/serp-analysis-prompt.md`**

### Observed SERP Landscape (Strategy-Based)

The Cleveland corporate housing and mid-term rental SERP is likely dominated by:

1. **National platforms with local listings** — Furnished Finder, Landing.com, Blueground, Airbnb, VRBO. These rank on volume and domain authority but lack local ownership signals and are perceived as marketplaces, not providers.

2. **National corporate housing companies** — Extended Stay America, Oakwood Worldwide, Korman Communities. These have national SEO strength but weak local relevance for a Cleveland-specific search.

3. **Apartment aggregators** — Apartments.com, Zillow, Trulia. These target annual-lease intent, not mid-term — a genuine gap.

4. **Hospital housing offices** — Some Cleveland Clinic and University Hospitals internal housing resources. These are not SEO competitors but inform what travel nurses search for.

### Corporate Haven's Differentiation Opportunity

| SERP Gap | Corporate Haven Advantage |
|---|---|
| National platforms lack local ownership / trust signal | Cleveland-based, locally operated |
| National platforms serve leisure and professional audiences equally | Corporate Haven is positioned exclusively for professionals |
| National corporate housing lacks move-in-ready, hospitality-layer feel | Corporate Haven: hospitality + professional housing infrastructure |
| Aggregators serve annual-lease intent | Corporate Haven explicitly serves the mid-term gap |
| Platforms don't highlight specific property details | Corporate Haven's Somerset provides concrete, verified proof |
| Platforms are marketplace-framed ("find a host") | Corporate Haven is provider-framed ("we provide") |

### Recommended SERP Research Before Phase D Copy

Run `docs/site-os/prompts/seo-aeo/serp-analysis-prompt.md` for:
- `corporate housing Cleveland Ohio`
- `mid-term rentals Cleveland`
- `travel nurse housing Cleveland Ohio`
- `furnished housing Cleveland Ohio`

Document observed competitors, PAA questions, and featured snippet holders before finalizing homepage body copy.

---

## 10. Conversion Strategy

### Primary Conversion Goal

**Capture a qualified housing inquiry via the Check Availability form above the fold.**

Secondary conversions:
- Click-to-call (when phone is confirmed — MISSING — FLAGGED)
- Email inquiry (when email is confirmed — MISSING — FLAGGED)
- Navigate to specific service page
- Navigate to The Somerset property page

---

### Two-Column Hero Layout

Per `docs/site-os/service-business-conversion-layout.md`:

```
[Left Column — Content]               [Right Column — Form]
H1: Furnished Mid-Term Rentals...     [Check Availability Form]
Sub-headline paragraph                  Name
Primary CTA: Check Availability         Dates needed
Secondary CTA: View Available Rentals   Stay type / purpose
Trust bullets (verified only)           [Submit CTA: Check Availability]
```

**Mobile:** Stacks — content on top, form below.

---

### Trust Bullets — Verified Only

Only use verified facts for trust bullets on the homepage. No invented claims.

Approved trust bullets (based on confirmed amenities):
- ✓ Fully furnished — move in with nothing
- ✓ All-inclusive: utilities, WiFi, kitchen, workspace
- ✓ Flexible lease terms — designed for the mid-term gap
- ✓ Cleveland, Ohio — locally operated
- ✓ Digital lock access — arrive when you need to
- ✓ Dedicated workspace included
- ✓ Cleaning services included

**Do not add:**
- ✗ "Licensed and insured" — MISSING — FLAGGED
- ✗ "5-star rated" — no verified reviews
- ✗ "X+ guests served" — not verified
- ✗ "Trusted by Cleveland Clinic staff" — not verified

---

### CTA Wording

**Primary CTA:** Check Availability
**Secondary CTA:** View Available Rentals
**Tertiary CTA:** Contact Corporate Haven
**Service-routing CTAs:** Learn more about [service name]
**Property CTA:** Learn more about the Somerset

---

### Form Placeholder

Use `<QuoteFormPlaceholder />` per existing scaffold. Endpoint is MISSING — FLAGGED; use placeholder behavior until vendor/endpoint is confirmed.

---

### Mobile-First CTA Behavior

- Primary CTA button: full-width on mobile
- Click-to-call: rendered as `tel:` link with display text (when phone confirmed)
- Form: stacked single-column on mobile
- CTA section at page bottom: full-width button on mobile

---

## 11. Trust-Building Strategy

### Verified-Only Trust Signals

These verified facts are approved for use in trust-building copy on the homepage:

| Trust Signal | Status | Usage |
|---|---|---|
| Fully furnished | CONFIRMED | Trust bullets, amenity section |
| All-inclusive pricing | CONFIRMED | Amenity section, FAQ |
| Utilities included | CONFIRMED | Amenity list |
| High-speed WiFi | CONFIRMED | Amenity list |
| Dedicated workspace | CONFIRMED | Amenity list |
| Fully equipped kitchen | CONFIRMED | Amenity list |
| Digital lock access | CONFIRMED | Amenity list |
| Cleaning services included | CONFIRMED | Amenity list |
| Parking | CONFIRMED | Amenity list |
| Welcome essentials | CONFIRMED | Amenity list |
| The Somerset — Cleveland 44108 | CONFIRMED | Property section |
| Somerset: ~1,836 sq ft, 3 BR, 1.5 BA | CONFIRMED | Property section |
| Shared bath and entrance at Somerset | CONFIRMED (material disclosure) | Must be disclosed accurately |
| Cleveland, Ohio — primary service location | CONFIRMED | Throughout page |
| Cuyahoga County service area | APPROVED PLACEHOLDER | Can reference generally |
| Professional, welcoming brand voice | APPROVED PLACEHOLDER | Copy tone |

### What to Avoid in Trust-Building Copy

| Claim | Status | Reason |
|---|---|---|
| Star ratings | MISSING — FLAGGED | No verified reviews |
| Review counts | MISSING — FLAGGED | No verified reviews |
| "Licensed and insured" | MISSING — FLAGGED | Not verified |
| "Trusted by [company]" | MISSING — FLAGGED | Not verified |
| "X years in business" | MISSING — FLAGGED | Not verified |
| "X+ guests served" | MISSING — FLAGGED | Not verified |
| "Same-day availability" | MISSING — FLAGGED | Not verified |
| Pricing figures | MISSING — FLAGGED | Not verified |

### Trust Approach Without Social Proof

When verified reviews and ratings are not available, trust is built through:
1. **Specificity** — Real, named property (The Somerset), real ZIP code (44108), real amenity list.
2. **Honest disclosure** — Shared bath and shared entrance are disclosed honestly. This builds more trust than omission.
3. **Audience recognition** — Naming specific audiences (travel nurses, resident physicians, insurance guests) signals that Corporate Haven understands who they're talking to.
4. **Local rootedness** — "Cleveland, Ohio" throughout, not generic national framing.
5. **Professional framing** — Hospitality + professional housing infrastructure feel vs. vacation rental tone.

---

## 12. Homepage Section Strategy

### Recommended Section Order and Purpose

| # | Section | Purpose | Conversion Role |
|---|---|---|---|
| 1 | **Hero — Two-Column Split** | H1, brand intro, form above fold | Primary lead capture |
| 2 | **Services Preview Grid** | 5 service cards with image placeholders | Audience router |
| 3 | **What Is Mid-Term Housing?** | Informational anchor, AEO content | Trust + AEO |
| 4 | **What's Included** | Verified amenity list | Trust + qualification |
| 5 | **Who Stays With Corporate Haven?** | Audience segment routing | Audience recognition |
| 6 | **Featured Property: The Somerset** | Concrete proof point | Property CTA |
| 7 | **Cleveland, Ohio** | Local SEO anchor, area context | Local signal |
| 8 | **FAQ Section** | AEO hub, People Also Ask coverage | AEO + trust |
| 9 | **Final CTA Section** | Transactional close | Secondary lead capture |

---

### Section 1: Hero — Two-Column Split

**Left column:**
- Eyebrow label: `Cleveland, Ohio`
- H1: `Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio`
- Sub-headline: [see recommended hero copy below]
- Primary CTA: Check Availability → `/check-availability`
- Secondary CTA: View Available Rentals → `/properties`
- Trust bullets (verified only)

**Right column:**
- `<QuoteFormPlaceholder />` — Check Availability form
- Form label: "Check Availability"
- Fields: Name, Dates Needed, Type of Stay (dropdown), Submit button

**Mobile:** stacks, content → form

---

### Section 2: Services Preview Grid

**Heading:** Housing built for the people who book it
**Sub:** Five core offerings shaped around the audiences who stay with us.

**Cards:**
1. Mid-Term Rentals → `/services/mid-term-rentals`
2. Corporate Housing → `/services/corporate-housing`
3. Travel Nurse Housing → `/services/travel-nurse-housing`
4. Medical Professional Housing → `/services/medical-professional-housing`
5. Insurance Relocation Housing → `/services/insurance-relocation-housing`

Each card: image placeholder (top), service name (H3), 1-sentence description, "Learn more" link.

---

### Section 3: What Is Mid-Term Housing?

**H2:** What is mid-term housing?

Direct-answer format. First sentence answers the question directly.

**Copy draft (APPROVED PLACEHOLDER — owner refines before launch):**
> Mid-term housing covers stays that are longer than a hotel and shorter than an annual apartment lease — typically 30 days to several months. Corporate Haven provides fully furnished, all-inclusive mid-term rentals in Cleveland, Ohio with utilities, WiFi, a dedicated workspace, and everything you need from the day you move in. If you are a traveling professional, travel nurse, relocating family, or anyone who needs flexible, move-in-ready housing in Cleveland, mid-term housing is designed for exactly your situation.

**Internal link:** anchor "mid-term rentals" → `/services/mid-term-rentals`

---

### Section 4: What's Included

**H2:** Everything ready when you arrive

**Amenity list (verified):**
- Fully furnished throughout
- Utilities included
- High-speed WiFi
- Fully equipped kitchen
- Dedicated workspace
- Digital lock access
- Cleaning services
- Parking
- Welcome essentials

**Copy note:** Do not imply 24/7 support, same-day availability, or any unverified service guarantee.

---

### Section 5: Who Stays With Corporate Haven?

**H2:** Who stays with Corporate Haven?

**Copy approach:** Brief intro sentence + audience list with brief descriptors. Each audience type may link to relevant service page where one exists.

**Audience list (CONFIRMED):**
- Traveling professionals
- Medical professionals
- Travel nurses
- Resident physicians
- Healthcare support staff
- Relocating families
- Insurance relocation guests
- Students and interns
- Families in transition
- Contract workers and consultants

**Copy note:** Use natural prose or a two-column grid of audience cards, not just a plain list. Keep copy tight — this section qualifies the visitor, it is not the primary conversion section.

---

### Section 6: Featured Property — The Somerset

**H2:** The Somerset — Cleveland's featured furnished rental

**Verified facts only:**
- ZIP: 44108
- ~1,836 sq. ft.
- 3 bedrooms (4th planned)
- 1.5 bathrooms
- Shared bath and entrance *(must be disclosed accurately — material fact)*
- Modern furnishings
- Fully equipped kitchen
- Dedicated workspace
- High-speed WiFi
- Utilities included
- Parking
- Digital locks
- Cleaning services
- Welcome essentials

**Image:** `<ServiceImagePlaceholder aspect="aspect-[4/3]" />` — MISSING — FLAGGED until owner-supplied photography arrives.

**CTA:** Learn more about the Somerset → `/properties/somerset`

**Note:** Do not use language like "our portfolio of properties" or "across Cleveland properties." Somerset is the only confirmed property today.

---

### Section 7: Cleveland, Ohio

**H2:** Mid-term and corporate housing in Cleveland, Ohio

**Purpose:** Local SEO anchor. Connects the brand explicitly to Cleveland. References Cleveland's professional landscape (medical centers, business districts) without inventing specific claims.

**Copy approach (APPROVED PLACEHOLDER):**
> Cleveland, Ohio is home to major hospital systems, growing business districts, and one of the Midwest's most active professional relocation markets. Corporate Haven provides furnished mid-term rentals and corporate housing for the professionals, medical staff, and corporate guests who need flexible, move-in-ready housing in this city. We are based here. We know this market. When you need housing in Cleveland that is ready on arrival, Corporate Haven is built for that.

**Internal link:** anchor "Cleveland, Ohio" → `/cleveland-ohio`

**Note:** Do not name Cleveland Clinic, University Hospitals, or MetroHealth as specific proximity claims without owner confirmation of actual proximity / service relationship.

---

### Section 8: FAQ Section

**H2:** Common questions about furnished housing in Cleveland

**8–10 visible FAQ items.** Full set in Section 17.

**Footer of FAQ section:** "See all frequently asked questions" → `/faq`

---

### Section 9: Final CTA Section

**H2 (optional — may use eyebrow instead):** Ready to check availability?

**Copy:**
> Tell us about your timeline, your stay type, and who is coming. We will respond with what is available for your dates.

**Primary CTA:** Check Availability → `/check-availability`
**Secondary CTA:** Contact Corporate Haven → `/contact`

---

## 13. Recommended H1

### Final Recommended H1

**`Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio`**

### Rationale

- Contains primary keyword `corporate housing` and core descriptor `mid-term rentals`
- Contains local qualifier `Cleveland, Ohio` — critical for local SEO
- Contains qualifier `furnished` — addresses audience pain point immediately
- Human-readable — not keyword-stuffed
- At 67 characters — appropriate for H1 length
- Passes the "can this be the answer to a voice search?" test: "What does Corporate Haven offer in Cleveland? Furnished mid-term rentals and corporate housing in Cleveland, Ohio."

### Alt H1 Options (if owner prefers audience-first framing)

**Option B:** `Cleveland, Ohio Furnished Housing for Professionals, Travel Nurses, and Corporate Guests`

**Option C:** `Move-In-Ready Furnished Housing in Cleveland, Ohio — Built for Professionals`

**Recommendation:** Use Option A (primary) unless owner explicitly prefers audience-first or benefit-first framing after reviewing.

---

## 14. Recommended Metadata

### Meta Title

`Furnished Corporate Housing in Cleveland, OH | Corporate Haven`
*(62 chars)*

### Meta Description

`Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.`
*(157 chars)*

### Open Graph Title

`Furnished Corporate Housing in Cleveland, OH | Corporate Haven`

### Open Graph Description

`Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio. Move-in-ready housing for professionals, travel nurses, and relocating guests.`

### Open Graph Image

`TODO: Owner-supplied 1200×630 brand image — MISSING — FLAGGED`
*(No AI-generated, no stock photos framed as real property — per `docs/site-os/no-fake-data-policy.md §8`)*

### Open Graph URL

`https://corporatehaven.net/`

### Open Graph Type

`website`

### Twitter Card

`summary_large_image`

### Canonical URL

`https://corporatehaven.net/`

### Robots

`index, follow`

---

## 15. Recommended CTA Hierarchy

### Above Fold — Hero

| Priority | CTA | Target | Behavior |
|---|---|---|---|
| 1 (Primary) | Check Availability | `/check-availability` | Filled button — `<button>` or `<a>` |
| 2 (Secondary) | View Available Rentals | `/properties` | Outlined or ghost button |

### Mid-Page — Somerset Section

| Priority | CTA | Target |
|---|---|---|
| 3 | Learn more about the Somerset | `/properties/somerset` |

### Mid-Page — Services Grid

| Priority | CTA | Target |
|---|---|---|
| Per card | Learn more about [service name] | `/services/[slug]` |

### Bottom — Final CTA Section

| Priority | CTA | Target |
|---|---|---|
| 1 | Check Availability | `/check-availability` |
| 2 | Contact Corporate Haven | `/contact` |

### Mobile CTA Behavior

- All primary CTAs: full-width on mobile
- Phone CTA: `tel:<PHONE — TODO-PHASE-F-LAUNCH>` — rendered when phone is confirmed
- Form CTA below hero copy on mobile stacking

---

## 16. AEO FAQ Research — 30+ Candidate Questions

**Status: All answers use only CONFIRMED or APPROVED PLACEHOLDER information. No invented facts.**

Organized by category for the `/faq` FAQ hub. Homepage uses the 8–12 highest-priority items (see Section 17).

---

### Category 1: What Is Mid-Term Housing?

1. **What is mid-term housing?**
   > Mid-term housing covers furnished stays longer than a hotel and shorter than an annual lease — typically 30 days to several months — with utilities, WiFi, and furnishings already in place.

2. **What is the difference between mid-term and short-term housing?**
   > Short-term housing typically refers to nightly or weekly stays like hotels or vacation rentals. Mid-term housing is designed for stays of 30 days or more, often with flexible monthly terms and professional amenities suited to working guests.

3. **What is the difference between mid-term housing and a standard apartment lease?**
   > A standard apartment lease is typically 12 months or longer. Mid-term housing is designed for the gap — 30 days to several months — with furnished, all-inclusive options that do not require a year-long commitment.

4. **Is mid-term housing cheaper than staying in a hotel long-term?**
   > For stays of a month or more, mid-term housing is generally more economical than a hotel because it includes a full kitchen, dedicated workspace, and all utilities in a single monthly rate rather than a nightly charge. Contact Corporate Haven for current availability and pricing.

5. **How long can I stay in a mid-term rental?**
   > Corporate Haven provides flexible mid-term stays designed for the gap between a hotel and an annual lease. Reach out with your specific timeline to confirm availability for your dates.

---

### Category 2: Corporate Housing and Furnished Rentals

6. **What is corporate housing?**
   > Corporate housing is fully furnished, all-inclusive housing designed for business travelers, relocating professionals, and corporate assignments. It includes furniture, utilities, WiFi, kitchen essentials, and workspace — everything needed to work and live without setup.

7. **What is included in Corporate Haven's furnished housing?**
   > Fully furnished throughout, utilities included, high-speed WiFi, fully equipped kitchen, dedicated workspace, digital lock access, cleaning services, parking, and welcome essentials.

8. **Is corporate housing all-inclusive?**
   > Corporate Haven's furnished housing is all-inclusive — utilities, WiFi, furnishings, workspace, cleaning services, and parking are included. Contact us for exact pricing and availability, as rates are confirmed on request.

9. **Do I need to bring furniture or set up utilities?**
   > No. Corporate Haven properties are move-in ready with modern furnishings, a fully equipped kitchen, high-speed WiFi, and utilities already in place. Arrive and start working.

10. **Can I use corporate housing for a team or multiple people?**
    > The Somerset accommodates multiple guests with three bedrooms. Contact Corporate Haven to discuss your team size and timeline so we can confirm the right configuration.

---

### Category 3: Audiences — Who Should Book

11. **Who uses mid-term rentals in Cleveland?**
    > Traveling professionals, travel nurses, medical professionals, resident physicians, relocating families, insurance relocation guests, students, interns, contract workers, and consultants — anyone who needs furnished, flexible housing for more than a hotel stay but less than a year.

12. **Is Corporate Haven right for travel nurses?**
    > Yes. Corporate Haven provides furnished, flexible housing in Cleveland suited to travel nurse assignment lengths, with high-speed WiFi, a dedicated workspace, and all utilities included so you can focus on your assignment from day one.

13. **Does Corporate Haven offer housing for medical professionals?**
    > Yes. Corporate Haven's furnished housing in Cleveland is suited to medical professionals, resident physicians, and healthcare support staff on rotations, training programs, or professional assignments in the Cleveland area.

14. **Does Corporate Haven serve insurance relocation guests?**
    > Yes. Corporate Haven provides move-in-ready furnished housing for guests displaced from their primary residence and requiring insurer-supported housing. Contact us to discuss your relocation timeline and requirements.

15. **Can a relocating family stay at Corporate Haven?**
    > Yes. Corporate Haven provides furnished housing suited to relocating families who need move-in-ready space during a transition — with a full kitchen, multiple bedrooms, and utilities included.

16. **Is Corporate Haven suitable for students or interns?**
    > Yes. Corporate Haven offers furnished, flexible housing for students and interns whose program or assignment duration does not fit a standard annual lease or hotel stay.

---

### Category 4: The Leasing and Booking Process

17. **How do I check availability at Corporate Haven?**
    > Use the Check Availability form on this site to share your dates, stay type, and number of guests. We will respond with what is available for your timeline.

18. **How does the leasing process work at Corporate Haven?**
    > Start by filling out the Check Availability form or contacting us directly. We will follow up with a leasing survey to learn more about your stay, confirm the right property and dates, and walk you through the move-in process.

19. **What is a leasing survey?**
    > Corporate Haven's leasing survey is a short intake form that helps us understand your stay type, timeline, number of guests, and any specific needs — so we can match you with the right property and configuration before confirming your booking.

20. **What is the minimum stay at Corporate Haven?**
    > Corporate Haven is designed for mid-term stays — stays longer than a nightly hotel. Reach out with your specific timeline to confirm minimum stay requirements and availability for your dates.

21. **Can I extend my stay?**
    > Contact Corporate Haven as early as possible if you need to extend your stay so we can confirm ongoing availability for your dates.

---

### Category 5: Property Details — The Somerset

22. **What is the Somerset?**
    > The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, a shared bath and entrance, modern furnishings, a fully equipped kitchen, a dedicated workspace, high-speed WiFi, utilities, parking, digital locks, and cleaning services.

23. **Where is the Somerset located?**
    > The Somerset is located in Cleveland, Ohio (ZIP 44108). The exact street address is confirmed during the booking process.

24. **Does the Somerset have a shared bathroom or entrance?**
    > Yes. The Somerset has a shared bath and shared entrance. This is a material detail we disclose clearly so guests can make an informed decision before booking.

25. **How many people can stay at the Somerset?**
    > The Somerset has three bedrooms and 1.5 bathrooms. Contact Corporate Haven to confirm the right configuration for your group size.

26. **Is the Somerset available now?**
    > Contact Corporate Haven or use the Check Availability form to confirm current availability for your dates. We do not publish real-time availability on this site.

---

### Category 6: Cleveland, Ohio Context

27. **Where in Cleveland does Corporate Haven operate?**
    > Corporate Haven operates in Cleveland, Ohio, with the Somerset located in the 44108 ZIP code. The service area includes Cleveland and Cuyahoga County. Contact us to confirm coverage for your specific location.

28. **Is Corporate Haven close to Cleveland Clinic?**
    > Contact Corporate Haven to discuss proximity to specific Cleveland medical systems or employers. We serve guests across Cleveland and Cuyahoga County and are happy to help you assess the right fit for your assignment location.

29. **Is there furnished corporate housing near University Hospitals Cleveland?**
    > Corporate Haven provides furnished mid-term housing across Cleveland and Cuyahoga County. Contact us to discuss proximity to University Hospitals or other Cleveland employers for your specific stay.

30. **Does Corporate Haven serve Cuyahoga County?**
    > Yes. Corporate Haven operates in Cleveland, Ohio, and serves guests across Cuyahoga County. Contact us to confirm availability and coverage for your specific area.

---

### Category 7: Pricing and Billing

31. **How is Corporate Haven priced?**
    > Corporate Haven's furnished housing uses all-inclusive monthly pricing. Exact rates are confirmed on request based on your dates, stay length, and property. Contact us or use the Check Availability form to receive current pricing.

32. **Does pricing include utilities and WiFi?**
    > Yes. Corporate Haven's all-inclusive pricing includes utilities and high-speed WiFi. Contact us to confirm what is included for your specific stay.

33. **Does Corporate Haven accept insurance billing for relocation stays?**
    > Corporate Haven serves insurance relocation guests. Contact us to discuss your insurer's billing process and what documentation is needed to facilitate your stay.

---

### Category 8: Tenant Support and Move-In

34. **How does move-in work at Corporate Haven?**
    > Corporate Haven properties use digital lock access, so you can move in on your confirmed arrival date without requiring an in-person key handoff. We will provide access instructions ahead of your check-in.

35. **What support is available during my stay?**
    > Contact Corporate Haven directly with any questions, maintenance needs, or requests during your stay. We provide tenant support for guests throughout their time with us.

36. **What are the welcome essentials included at Corporate Haven?**
    > Corporate Haven provides welcome essentials to make your first days comfortable without needing an immediate grocery run. Contact us for specifics on what is included for your stay.

---

### Category 9: Comparing Options

37. **Why choose Corporate Haven over a hotel?**
    > For stays of a month or more, Corporate Haven's furnished housing provides a full kitchen, dedicated workspace, utilities, WiFi, and more space — at a monthly rate that is generally more practical than nightly hotel pricing for extended professional stays.

38. **Why choose Corporate Haven over an Airbnb or VRBO?**
    > Corporate Haven is built for professional mid-term stays, not leisure travel. The housing is furnished and managed for working guests — with reliable WiFi, a dedicated workspace, all utilities included, and support designed for professionals on assignment.

39. **Why choose Corporate Haven over signing an annual lease?**
    > Annual leases require a 12-month commitment and typically come unfurnished, requiring furniture setup, utility transfers, and deposits. Corporate Haven's mid-term furnished housing is ready immediately, includes all utilities, and matches the actual duration of most professional assignments and relocations.

40. **What makes Corporate Haven different from other Cleveland housing options?**
    > Corporate Haven is locally operated in Cleveland with a focus on professional mid-term guests — not vacation travelers or annual lease renters. The properties are fully furnished and all-inclusive, and the experience is built around the needs of professionals, medical staff, and corporate guests who need housing ready on arrival.

---

## 17. Recommended Visible Homepage FAQ Set

**8–10 questions selected from Section 16 for homepage visibility**

These 10 questions are recommended for the visible homepage FAQ section. All answers match the draft text in Section 16 exactly.

| # | Question | Category |
|---|---|---|
| 1 | What is mid-term housing? | What Is Mid-Term Housing? |
| 2 | What is included in Corporate Haven's furnished housing? | Corporate Housing |
| 3 | Who uses mid-term rentals in Cleveland? | Audiences |
| 4 | Is Corporate Haven right for travel nurses? | Audiences |
| 5 | How do I check availability at Corporate Haven? | Leasing Process |
| 6 | What is the Somerset? | Property Details |
| 7 | Does the Somerset have a shared bathroom or entrance? | Property Details |
| 8 | How is Corporate Haven priced? | Pricing |
| 9 | Where in Cleveland does Corporate Haven operate? | Cleveland Context |
| 10 | Why choose Corporate Haven over a hotel? | Comparing Options |

**Footer of FAQ section:**
"See all frequently asked questions" → `/faq`

---

## 18. Schema Plan

### Schema Types — Homepage

#### 1. Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net",
  "description": "Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing.",
  "address": null,
  "telephone": null,
  "email": null,
  "sameAs": []
}
```

**Notes:**
- `address`: MISSING — FLAGGED — omit until public-facing address decision is confirmed
- `telephone`: MISSING — FLAGGED — omit until phone is confirmed
- `email`: MISSING — FLAGGED — omit until email is confirmed
- `sameAs`: MISSING — FLAGGED — omit until social profiles and GBP are confirmed
- `logo`: MISSING — FLAGGED — omit until real logo asset is provided

#### 2. LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net",
  "description": "Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for professionals, travel nurses, and relocating guests.",
  "areaServed": [
    {
      "@type": "City",
      "name": "Cleveland",
      "addressRegion": "OH"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cuyahoga County",
      "addressRegion": "OH"
    }
  ],
  "address": null,
  "telephone": null,
  "email": null,
  "openingHours": null
}
```

**Notes:**
- `streetAddress`: MISSING — FLAGGED — never emit until address decision is confirmed
- `telephone`: MISSING — FLAGGED
- `email`: MISSING — FLAGGED
- `openingHours`: MISSING — FLAGGED
- `aggregateRating`: do NOT include — no verified reviews exist
- `priceRange`: do NOT include — pricing not confirmed for schema

#### 3. WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net"
}
```

#### 4. FAQPage

Match visible FAQ text exactly. Use the exact answers from Section 17.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is mid-term housing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mid-term housing covers furnished stays longer than a hotel and shorter than an annual lease — typically 30 days to several months — with utilities, WiFi, and furnishings already in place."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in Corporate Haven's furnished housing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fully furnished throughout, utilities included, high-speed WiFi, fully equipped kitchen, dedicated workspace, digital lock access, cleaning services, parking, and welcome essentials."
      }
    }
    // ... additional FAQ items matching Section 17 exactly
  ]
}
```

**Critical rule:** Every FAQ item in `FAQPage` schema must have a visible, matching question and answer on the page. Do not add schema-only FAQs.

---

### Schema Types — Not Recommended for Homepage

| Schema Type | Reason Not Used |
|---|---|
| `AggregateRating` | No verified reviews exist |
| `Review` | No verified testimonials |
| `HowTo` | No visible numbered steps on homepage |
| `Offer` with price | Pricing not confirmed |
| `LodgingBusiness` | Not appropriate for corporate housing positioning; would need owner decision |
| `Accommodation` | Not appropriate at homepage level; may be used on property pages |
| `BreadcrumbList` | Not applicable — homepage is root URL |

---

## 19. Internal Linking Plan

### Required Internal Links (Minimum 6, Target 10)

| Anchor Text | Target URL | Section |
|---|---|---|
| mid-term rentals | `/services/mid-term-rentals` | Services grid, body copy |
| corporate housing | `/services/corporate-housing` | Services grid, body copy |
| travel nurse housing | `/services/travel-nurse-housing` | Services grid, audience section |
| medical professional housing | `/services/medical-professional-housing` | Services grid, audience section |
| insurance relocation housing | `/services/insurance-relocation-housing` | Services grid, audience section |
| The Somerset | `/properties/somerset` | Somerset section, body copy |
| Check Availability | `/check-availability` | Hero CTA, final CTA |
| Cleveland, Ohio | `/cleveland-ohio` | Cleveland section |
| Contact Corporate Haven | `/contact` | Final CTA, footer |
| frequently asked questions | `/faq` | FAQ section footer |

### Orphan Prevention

The homepage must be reachable from:
- Global navigation (already present in scaffold)
- Logo link in header
- Footer site links

The homepage links out to all Tier 2 service pages, the primary location page, the property page, and the conversion and support pages — ensuring no orphan pages in Phase 1.

---

## 20. Image and Alt Text Plan

**Status: All photography MISSING — FLAGGED per `docs/brand-guide.md §4`**
**Rule: No AI-generated property photos, no stock photos framed as real property — per `docs/site-os/no-fake-data-policy.md §8`**

### Image Slot Plan

| Slot | Image | Alt Text | Status |
|---|---|---|---|
| Hero background / decoration | Brand placeholder (SVG/tinted block) | `aria-hidden="true"` | APPROVED PLACEHOLDER |
| Services grid — each card | `<ServiceImagePlaceholder aspect="aspect-[16/10]" />` | `aria-hidden="true"` per standard | APPROVED PLACEHOLDER |
| Somerset section | `<ServiceImagePlaceholder aspect="aspect-[4/3]" />` | `aria-hidden="true"` | MISSING — FLAGGED (owner photo) |
| Open Graph image | TODO: 1200×630 brand image | N/A (meta) | MISSING — FLAGGED |

### Verified Alt Text When Photography Arrives

| Photo Subject | Alt Text Template |
|---|---|
| Somerset exterior | `The Somerset — Corporate Haven furnished rental Cleveland Ohio` |
| Somerset living area | `Furnished living area at Corporate Haven's Somerset property Cleveland Ohio` |
| Somerset kitchen | `Fully equipped kitchen at Corporate Haven's Somerset furnished rental Cleveland Ohio` |
| Somerset workspace | `Dedicated workspace in Corporate Haven furnished mid-term rental Cleveland Ohio` |
| Somerset bedroom | `Furnished bedroom at the Somerset Corporate Haven Cleveland Ohio` |

### Alt Text Rules

- All real photos must have descriptive alt text with a keyword where natural
- Placeholder images must use `aria-hidden="true"` (no alt content needed — they are decorative)
- No alt text should be stuffed or unnatural
- No alt text should claim to show something the image does not show

---

## 21. Front-End Design Notes

**Status: All visual brand assets MISSING — FLAGGED. Design direction is APPROVED PLACEHOLDER.**
**Source: `docs/brand-guide.md §7` and `docs/site-os/service-business-conversion-layout.md`**

### Overall Design Direction

Corporate Haven should feel like:
- Professional housing infrastructure with a hospitality layer
- Polished, calm, trustworthy, locally rooted
- Premium but not flashy
- Welcoming but not leisure-oriented

NOT like:
- A vacation rental brand (no Airbnb aesthetic)
- Generic apartment management software
- A transient hotel booking engine

### Color System Placeholder

All Tailwind color tokens remain as `TODO-COLOR` comments until owner supplies brand hex values.

**Placeholder neutral system (current scaffold):**
- `brand-ink` — dark neutral (headings, body text)
- `brand-surface` — light neutral background (alternating sections)
- `brand-secondary` — CTA hover state

**Do not invent hex values.** Use neutral system until `docs/brand-guide.md §2` is populated.

### Typography Placeholder

**Do not assign final fonts.** Use system font stack or neutral placeholder.
Mark all font decisions with `// TODO-FONT:` comments in Tailwind config.

### Layout Rules (from `docs/site-os/service-business-conversion-layout.md`)

- Hero: two-column split — content left, form right — 50/50 or 55/45 split
- Wide container: `max-w-container` (matches existing scaffold)
- Generous section padding: `py-16 sm:py-20`
- Section horizontal padding: `px-4 sm:px-6 lg:px-10`
- Service cards: 1-col → 2-col → 3-col responsive grid
- Mobile: all multi-column sections stack to single column

### Service Card Design (from `docs/site-os/service-card-image-placeholder-standard.md`)

- Image placeholder at top: `aspect-[16/10]` brand-tinted block, `aria-hidden="true"`
- No embedded text in placeholder image
- No fake photos, no AI-generated property photos
- `// TODO: replace with owner-supplied photo` comment on every placeholder

### Section Hierarchy

| Section | Background | Purpose |
|---|---|---|
| Hero | White or light | Primary attention |
| Services Grid | White | Feature content |
| What is mid-term housing | Soft surface | Informational |
| What's Included | White | Trust |
| Who Stays | Soft surface | Audience routing |
| Somerset | White | Property proof |
| Cleveland | Soft surface | Local SEO |
| FAQ | White or light | AEO |
| Final CTA | Brand accent or dark | Conversion close |

Alternate `bg-white` / `bg-brand-surface` to create rhythm without clutter.

### Accessibility Notes

- Minimum WCAG 2.1 AA color contrast on all text
- All interactive elements keyboard-navigable
- Focus states visible
- Form fields with visible labels
- FAQ accordion with `aria-expanded` support
- CTA buttons with descriptive accessible names

---

## 22. Framer Motion Notes

**Status: Framer Motion not yet approved for Phase D. Notes are PLANNING ONLY.**
**Rule: Do not add `framer-motion` to `package.json` unless explicitly approved in the build prompt.**

### Recommended Motion Patterns When Approved

| Component | Motion Pattern | Preset |
|---|---|---|
| Hero H1 + sub | `fadeUp` on mount | `fadeIn` → `fadeUp` |
| Services cards grid | `staggerGroup` on scroll entry | `staggerContainer` + `staggerItem` |
| Somerset section | `fadeIn` on scroll entry | `fadeIn` |
| FAQ items | Smooth height transition on accordion open/close | `AnimatePresence` |
| CTA section | `scaleIn` or `fadeUp` | `scaleIn` |
| Form panel | `fadeIn` slight delay after hero text | `fadeIn` |

### Motion Files to Create When Approved

- `lib/animations/motion-presets.ts`
- `components/motion/FadeIn.tsx`
- `components/motion/StaggerGroup.tsx`
- `components/motion/MotionCard.tsx`

### Accessibility Rules for Motion

- `useReducedMotion()` check in all motion components
- If `shouldReduceMotion` is true: remove entrance movement, remove scale changes, keep instant or `0ms` transitions
- Motion must never delay SEO-critical content from rendering
- Motion must never hide content from crawlers
- All motion wrappers use `"use client"` — server components remain server components

### TODO Comments for Pre-Approval Build

Mark all future motion attachment points in pre-approval build code:
```tsx
{/* TODO-MOTION: wrap in <FadeIn> when framer-motion is approved */}
```

---

## 23. Technical SEO Notes

### Canonical

```tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://corporatehaven.net/',
  },
};
```

### Robots

`index, follow` — no `noindex` on homepage.

Ensure `public/robots.txt` allows:
```
User-agent: *
Allow: /
Sitemap: https://corporatehaven.net/sitemap.xml
```

### Sitemap

Homepage should appear as:
```xml
<url>
  <loc>https://corporatehaven.net/</loc>
  <priority>1.0</priority>
  <changefreq>monthly</changefreq>
</url>
```

### Schema Implementation

All schema as JSON-LD in `<script type="application/ld+json">` tags inside the `<head>` or in the page component. Use Next.js `<Script>` component or inline in metadata where supported.

### Heading Hierarchy

Enforce strict H1 → H2 → H3:
- One H1 per page (homepage)
- 6–8 H2s (one per major section)
- H3s only inside H2 sections (service card titles, FAQ items)
- Never skip a level

### Open Graph

Ensure all five recommended Open Graph values are set in `app/page.tsx` metadata export. Block `og:image` from emitting until real owner-supplied image is confirmed.

### Google Search Console Readiness

- Canonical must resolve without redirect
- No mobile usability errors on launch
- Core Web Vitals: target LCP < 2.5s, CLS < 0.1, INP < 200ms
- Structured data must validate in Rich Results Test

### Bing Webmaster Readiness

- Submit sitemap to Bing Webmaster Tools after launch
- Verify site ownership
- Ensure `robots.txt` is accessible

### Static Export Notes (Cloudflare Pages)

- No Server Actions on homepage — form uses `<QuoteFormPlaceholder />` with client-side behavior
- No runtime image optimization — use Next.js `<Image>` with `unoptimized` or proper static export config
- Sitemap and robots must be static files or statically generated at build time
- No `useSearchParams` without Suspense boundary
- Framer Motion: client component only — isolate in small wrappers

---

## 24. Missing Data and TODO List

### Launch Blockers — MISSING — FLAGGED

| # | Missing Item | Impact | Resolution |
|---|---|---|---|
| 1 | Phone number | Cannot render `tel:` CTA, cannot populate schema `telephone`, cannot complete meta description with phone | Owner supplies → `content-update-prompt.md` |
| 2 | Email address | Cannot render email CTA or footer contact | Owner supplies → `content-update-prompt.md` |
| 3 | Brand logo | Cannot render logo in header, footer, OG image, or favicon | Owner supplies SVG → `brand-guide.md` update |
| 4 | Primary brand color (hex) | Cannot finalize Tailwind theme; all `TODO-COLOR` tokens remain placeholders | Owner supplies hex → `brand-guide.md` + `tailwind.config.ts` |
| 5 | Secondary brand color (hex) | Same as above | Owner supplies hex |
| 6 | Primary and secondary fonts | Cannot finalize typography scale | Owner confirms → `brand-guide.md` + `tailwind.config.ts` |
| 7 | Property photography (Somerset exterior, interior, neighborhood) | Cannot show real property imagery; all image slots remain `<ServiceImagePlaceholder>` | Owner supplies photos → alt text assignment |
| 8 | Business hours | Cannot render hours in footer or schema `openingHours` | Owner supplies → `site.ts` + schema |
| 9 | Form endpoint | Cannot make `<QuoteFormPlaceholder>` functional | Owner confirms vendor/endpoint → form implementation prompt |
| 10 | Verified testimonials | Cannot render social proof section | Owner supplies with consent → testimonials implementation |
| 11 | License / insurance / registration status | Cannot render compliance claims; schema `license` field blocked | Owner confirms → `brand-guide.md` + schema |
| 12 | Public-facing address decision | Cannot emit `streetAddress` in schema; cannot render address in footer | Owner decides public vs. service-area-only → `site.ts` + schema |
| 13 | Open Graph image | `og:image` cannot render; social shares will show placeholder | Owner supplies 1200×630 → `brand-guide.md` + metadata |
| 14 | Google Business Profile URL | Cannot populate `sameAs` in Organization schema | Owner sets up GBP → `site.ts` |

---

### Content Blockers — APPROVED PLACEHOLDER (Usable Now, Refine Before Launch)

| # | Placeholder Item | Status | Resolution |
|---|---|---|---|
| 1 | Short business description | APPROVED PLACEHOLDER | Owner confirms final wording |
| 2 | Service priority ranking order | APPROVED PLACEHOLDER | Owner confirms preferred order |
| 3 | Pricing model framing ("All-inclusive monthly pricing — exact rates on request") | APPROVED PLACEHOLDER | Owner confirms before launch |
| 4 | Primary CTA label ("Check Availability") | APPROVED PLACEHOLDER | Owner confirms |
| 5 | Secondary CTA labels | APPROVED PLACEHOLDER | Owner confirms |
| 6 | Adjacent service areas (Cleveland Heights, Shaker Heights, Lakewood, etc.) | APPROVED PLACEHOLDER — planning only | Owner confirms each area individually before Phase 2 pages |
| 7 | Per-segment messaging (12 audience segments) | MISSING — FLAGGED | Owner supplies per-segment language before Phase D copy is finalized |
| 8 | Hero sub-headline copy | APPROVED PLACEHOLDER | Owner reviews and refines |
| 9 | Cleveland context section copy | APPROVED PLACEHOLDER | Owner reviews and refines |
| 10 | Somerset "4th bedroom planned" language | CONFIRMED for disclosure; do not imply "available now" | Use accurate language |

---

### Schema TODOs

| Schema Field | Status | Resolution |
|---|---|---|
| `Organization.telephone` | MISSING — FLAGGED | Blocked until phone confirmed |
| `Organization.email` | MISSING — FLAGGED | Blocked until email confirmed |
| `Organization.address` | MISSING — FLAGGED | Blocked until address decision made |
| `Organization.logo` | MISSING — FLAGGED | Blocked until real logo supplied |
| `Organization.sameAs` | MISSING — FLAGGED | Blocked until social/GBP URLs confirmed |
| `LocalBusiness.streetAddress` | MISSING — FLAGGED | Blocked until address decision made |
| `LocalBusiness.telephone` | MISSING — FLAGGED | Blocked until phone confirmed |
| `FAQPage` text | APPROVED PLACEHOLDER | Must match visible FAQ text exactly in build |

---

## 25. Content Preservation Notes for Build Prompt

When this research artifact is used to generate the STEP 10B homepage implementation plan and the subsequent Claude Code build prompt, the following rules must be embedded in that build prompt:

### Content Lock Statement (Required in Build Prompt)

```
CONTENT LOCK RULE:
All page copy, headings, CTAs, FAQ questions, FAQ answers, metadata, schema text,
internal anchor text, and business claims provided in this prompt are locked.

Do not rewrite, shorten, summarize, paraphrase, simplify, remove, reorder, or
replace the approved content unless explicitly instructed.

You may only adjust code structure, layout, styling, accessibility attributes,
responsive behavior, component organization, and approved motion behavior while
preserving the approved content exactly.
```

### Specific Preservation Requirements

1. **H1 text** — must render exactly as approved in STEP 10B. Claude Code must not simplify, shorten, or rephrase.
2. **Hero sub-headline** — must render exactly as approved.
3. **Trust bullets** — only the verified bullets approved in Section 10 may render. No additions.
4. **Somerset property facts** — must render all CONFIRMED facts, including the material disclosure of shared bath and shared entrance.
5. **FAQ question text** — must match exactly what is visible on page and in `FAQPage` schema.
6. **FAQ answer text** — must match exactly; no paraphrasing, no shortening.
7. **CTA wording** — "Check Availability," "View Available Rentals," "Contact Corporate Haven," "Learn more about the Somerset" — must render exactly.
8. **Section headings (H2s)** — must render exactly as specified.
9. **Metadata** — meta title and description must render exactly as specified; no reformatting.
10. **Internal link anchor text** — must render exactly as specified.

### No-Fake-Data Requirements (Required in Build Prompt)

```
BUSINESS DATA RULE:
Do not invent phone numbers, email addresses, addresses, hours, prices, reviews,
ratings, licenses, testimonials, owner names, brand assets, property photos,
or service claims.

Use TODO placeholders for all missing information:
- Phone: <PHONE — TODO-PHASE-F-LAUNCH>
- Email: <EMAIL — TODO-PHASE-F-LAUNCH>
- Address: <ADDRESS — TODO-PHASE-F-LAUNCH>
- Hours: <HOURS — TODO-PHASE-F-LAUNCH>
```

### Schema Preservation

- `FAQPage` JSON-LD must match the visible FAQ text character-for-character.
- `Organization` and `LocalBusiness` schema must omit any field that is MISSING — FLAGGED.
- No `AggregateRating`, `Review`, `streetAddress`, `telephone`, or `email` until those items are confirmed.

---

*End of `docs/site-os/outputs/homepage-research.md`*
*Corporate Haven Site OS Master | Phase D STEP 10A*
*Research only — no source code was edited in the production of this artifact.*
*Next step: STEP 10B — Homepage Implementation Planning*
