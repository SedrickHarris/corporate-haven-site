# Corporate Haven — STEP 10B: Homepage Content Package + Claude Code Build Prompt
**Site OS Master | Phase D | STEP 10B — Homepage Implementation**
**AI Depth: Level 5 Beyond-Elite**
**Status: Final locked content + build prompt**
**Date produced: 2026-05-23**
**Source of truth: `docs/site-os/outputs/homepage-research.md`**

---

## Part 1 — Final Homepage Strategy Summary

The Corporate Haven homepage is the primary brand anchor, audience router, lead-capture surface, SEO entry point, AEO answer hub, and trust builder for the site. It must feel like professional housing infrastructure with a hospitality layer — clean, polished, welcoming, locally rooted in Cleveland, and immediately conversion-focused.

**Primary keyword:** `corporate housing Cleveland Ohio`
**Secondary:** `mid-term rentals Cleveland Ohio`, `furnished housing Cleveland`, `furnished rentals Cleveland Ohio`
**Search intent:** Commercial investigation (primary), AEO/informational (secondary), transactional (tertiary)
**Conversion goal:** Capture a qualified housing inquiry via the Check Availability form above the fold
**Brand feel:** Professional, welcoming, trustworthy, locally rooted — NOT vacation rental, NOT apartment management, NOT hotel booking

---

## Part 2 — Final Keyword Type Research Summary

**Primary keyword:** `corporate housing Cleveland Ohio`

**Top secondary:** mid-term rentals Cleveland Ohio · furnished housing Cleveland · fully furnished mid-term rentals Cleveland · corporate rentals Cleveland · furnished apartments Cleveland Ohio

**Top long-tail:** fully furnished mid-term rentals Cleveland Ohio · move-in ready housing Cleveland Ohio · furnished housing with utilities included Cleveland · furnished corporate housing near Cleveland Clinic · all-inclusive furnished housing Cleveland Ohio

**Local:** corporate housing Cleveland OH · furnished rentals Cuyahoga County · mid-term housing near Cleveland Clinic · corporate housing University Circle Cleveland

**Transactional:** check availability corporate housing Cleveland · book furnished rental Cleveland Ohio · rent furnished apartment Cleveland 30 days

**AEO questions:** What is mid-term housing? · What is corporate housing in Cleveland? · What is included in furnished corporate housing? · How long can I stay in a mid-term rental? · Is Corporate Haven right for travel nurses?

**Voice search:** "Where can I find furnished housing in Cleveland for three months?" · "Is there corporate housing near Cleveland Clinic?" · "What does all-inclusive furnished housing include?"

**Semantic cluster:** furnished · all-inclusive · move-in ready · flexible lease · utilities included · WiFi included · monthly rental · transition housing · professional housing

---

## Part 3 — Final Keyword Mapping Summary

| Element | Keyword Target |
|---|---|
| URL | `/` (root — no slug) |
| Meta title | `corporate housing Cleveland Ohio` + `furnished` + brand |
| Meta description | `mid-term rentals Cleveland` + `fully furnished` + `professionals` + `check availability` |
| H1 | `mid-term rentals` + `corporate housing` + `Cleveland, Ohio` |
| H2 — Services | `furnished housing Cleveland` + `professionals` |
| H2 — What Is Mid-Term Housing | `mid-term housing` definition + informational intent |
| H2 — What's Included | `all-inclusive furnished housing` + `utilities included` |
| H2 — Who We Serve | audience segments + `corporate housing Cleveland` |
| H2 — Somerset | `The Somerset` + `furnished rental Cleveland 44108` |
| H2 — Cleveland | `corporate housing Cleveland Ohio` (local anchor) |
| H2 — FAQ | FAQ + AEO + People Also Ask queries |
| H2 — Final CTA | `Check Availability` + transactional intent |
| Internal links | Service slugs + `/cleveland-ohio` + `/properties/somerset` + `/check-availability` |
| FAQ | mid-term housing definition · what's included · audiences · Somerset · pricing · Cleveland context |
| Schema | Organization · LocalBusiness (areaServed Cleveland + Cuyahoga County) · WebSite · FAQPage |

---

## Part 4 — Final SEO/AEO/GEO Direction

### SEO
- H1 includes primary keyword + Cleveland, Ohio
- Meta title: 62 chars, keyword-safe, brand-present
- Meta description: 157 chars, keyword + city + audience + CTA
- Self-referencing canonical on `/`
- Minimum 8 internal outbound links to service, location, property, and conversion pages
- `index, follow`; sitemap priority `1.0`
- Open Graph fields complete except `og:image` (MISSING — FLAGGED — owner-supplied only)

### AEO
- Hero sub-headline answers "What is Corporate Haven and who is it for?" in one sentence
- Every major section opens with a direct-answer sentence
- 10 visible FAQ items with answer-first format
- All FAQ answers self-contained and voice-search-readable
- `FAQPage` JSON-LD matches visible FAQ text exactly
- Entity clarity: Corporate Haven, The Somerset, Cleveland Ohio, mid-term rental, corporate housing all named explicitly

### GEO / Local SEO
- "Cleveland, Ohio" in H1, meta title, meta description, hero, Cleveland section, LocalBusiness schema
- `areaServed`: Cleveland + Cuyahoga County (CONFIRMED + APPROVED PLACEHOLDER)
- No invented adjacent-city claims on homepage
- No `streetAddress` in schema (decision MISSING — FLAGGED)
- No `telephone` in schema (MISSING — FLAGGED)

---

## Part 5 — Final Homepage H1

> **Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio**

---

## Part 6 — Final Meta Title

> Furnished Corporate Housing in Cleveland, OH | Corporate Haven

*(62 chars — within acceptable range; primary keyword + local qualifier + brand)*

---

## Part 7 — Final Meta Description

> Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.

*(157 chars — keyword + city + audiences + CTA; phone omitted until confirmed)*

---

## Part 8 — Final Open Graph Title and Description

**og:title:**
> Furnished Corporate Housing in Cleveland, OH | Corporate Haven

**og:description:**
> Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio. Move-in-ready housing for professionals, travel nurses, and relocating guests.

**og:image:** `TODO: Owner-supplied 1200×630 — MISSING — FLAGGED. Do not emit og:image tag until real asset is confirmed.`

---

## Part 9 — Final Homepage Section Order

| # | Section | H2 | Purpose |
|---|---|---|---|
| 1 | Hero — Two-Column Split | H1 only | Primary lead capture |
| 2 | Services Preview Grid | Housing built for the people who book it | Audience router |
| 3 | What Is Mid-Term Housing | What is mid-term housing? | AEO + informational anchor |
| 4 | What's Included | Everything ready when you arrive | Trust + qualification |
| 5 | Who We Serve | Who stays with Corporate Haven? | Audience recognition |
| 6 | Featured Property — Somerset | The Somerset — Cleveland's featured furnished rental | Property proof point |
| 7 | Cleveland Context | Mid-term and corporate housing in Cleveland, Ohio | Local SEO anchor |
| 8 | FAQ | Common questions about furnished housing in Cleveland | AEO hub |
| 9 | Final CTA | Ready to check availability? | Transactional close |

---

## Part 10 — Final Hero Copy

**Eyebrow label:** Cleveland, Ohio

**H1:**
> Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio

**Sub-headline:**
> Corporate Haven provides fully furnished, all-inclusive mid-term rentals and corporate housing in Cleveland — built for traveling professionals, travel nurses, medical staff, and relocating guests who need move-in-ready housing for stays longer than a hotel and shorter than a lease.

**Trust bullets (verified only — render as a short bullet list):**
- ✓ Fully furnished — move in with nothing
- ✓ Utilities, WiFi, kitchen, and workspace included
- ✓ Flexible lease terms — designed for the mid-term gap
- ✓ Cleveland, Ohio — locally operated
- ✓ Digital lock access — arrive when you need to
- ✓ Cleaning services included

**Primary CTA:** Check Availability → `/check-availability`
**Secondary CTA:** View Available Rentals → `/properties`

**Form panel (right column):**
- Form heading: Check Availability
- Fields: Name, Email, Move-In Date, Length of Stay, Type of Stay (dropdown: Traveling Professional / Travel Nurse / Medical Professional / Insurance Relocation / Relocating Family / Student or Intern / Other)
- Submit button: Check Availability
- Form note: `<QuoteFormPlaceholder />` — endpoint MISSING — FLAGGED

---

## Part 11 — Final CTA Hierarchy

| Zone | Primary CTA | Secondary CTA | Target |
|---|---|---|---|
| Hero | Check Availability | View Available Rentals | `/check-availability` · `/properties` |
| Services grid | Learn more about [service name] | — | Per service slug |
| Somerset section | Learn more about the Somerset | — | `/properties/somerset` |
| FAQ footer | See all frequently asked questions | — | `/faq` |
| Final CTA | Check Availability | Contact Corporate Haven | `/check-availability` · `/contact` |

---

## Part 12 — Final Service Card Copy

Five service cards in a responsive grid (1-col mobile · 2-col tablet · 3-col desktop). Each card: image placeholder top, H3 name, one-sentence description, Learn more link.

**Card 1:**
- Name: Mid-Term Rentals
- Description: Fully furnished, all-inclusive housing for stays between a hotel and an annual lease — with everything in place when you arrive.
- Link: `/services/mid-term-rentals`
- Link text: Learn more about mid-term rentals

**Card 2:**
- Name: Corporate Housing
- Description: Move-in-ready furnished housing for corporate assignments, business relocations, and project teams in Cleveland, Ohio.
- Link: `/services/corporate-housing`
- Link text: Learn more about corporate housing

**Card 3:**
- Name: Travel Nurse Housing
- Description: Flexible furnished housing in Cleveland close to major hospital systems — designed around travel nurse assignment lengths and schedules.
- Link: `/services/travel-nurse-housing`
- Link text: Learn more about travel nurse housing

**Card 4:**
- Name: Medical Professional Housing
- Description: Professional-grade furnished housing for resident physicians, healthcare support staff, and medical professionals on rotation or assignment in Cleveland.
- Link: `/services/medical-professional-housing`
- Link text: Learn more about medical professional housing

**Card 5:**
- Name: Insurance Relocation Housing
- Description: Move-in-ready furnished housing for guests displaced from their primary residence and requiring insurer-supported relocation in Cleveland, Ohio.
- Link: `/services/insurance-relocation-housing`
- Link text: Learn more about insurance relocation housing

---

## Part 13 — Final "What Is Mid-Term Housing?" Section Copy

**H2:** What is mid-term housing?

> Mid-term housing covers furnished stays that are longer than a hotel and shorter than an annual apartment lease — typically 30 days to several months — with utilities, WiFi, and furnishings already in place from the day you arrive.

> Corporate Haven provides fully furnished, all-inclusive mid-term rentals in Cleveland, Ohio with utilities, high-speed WiFi, a fully equipped kitchen, a dedicated workspace, and everything you need from move-in day forward. If you are a traveling professional, travel nurse, relocating family, insurance relocation guest, or anyone who needs flexible, move-in-ready housing in Cleveland, mid-term housing is built for exactly your situation.

> Mid-term housing fills the gap that hotels and annual leases leave open — and Corporate Haven is Cleveland's furnished housing provider built to fill it.

**Internal link:** anchor "mid-term rentals in Cleveland" → `/services/mid-term-rentals`

---

## Part 14 — Final "What's Included" Section Copy

**H2:** Everything ready when you arrive

> Every Corporate Haven rental comes fully furnished and all-inclusive. You bring your bags. Everything else is already in place.

**Amenity list (CONFIRMED — render as two-column grid or clean icon list):**
- Fully furnished throughout
- Utilities included
- High-speed WiFi
- Fully equipped kitchen
- Dedicated workspace
- Digital lock access
- Cleaning services
- Parking
- Welcome essentials

> No furniture to buy. No utility accounts to set up. No WiFi to activate. Move in and start your stay.

---

## Part 15 — Final "Who We Serve" Section Copy

**H2:** Who stays with Corporate Haven?

> Corporate Haven serves the guests who need more than a hotel and less than a year. Our furnished housing in Cleveland is built for:

**Audience list (CONFIRMED — render as two-column card grid or clean list with brief descriptor per row):**
- **Traveling professionals** — on assignment, project, or business relocation in Cleveland
- **Travel nurses** — on short or mid-length assignments at Cleveland hospital systems
- **Medical professionals** — resident physicians, attending staff, and healthcare workers on training or rotation
- **Healthcare support staff** — administrative, technical, and support staff on fixed-term placements
- **Relocating families** — bridging the gap between leaving one home and settling into the next
- **Insurance relocation guests** — displaced guests requiring furnished, move-in-ready housing with insurer coordination
- **Students and interns** — program or assignment durations that don't fit a hotel or an annual lease
- **Families in transition** — going through a move, renovation, or life change that needs a stable furnished base
- **Contract workers** — project-based assignments of one to six months that require professional housing
- **Consultants** — extended engagements that need reliable WiFi, a workspace, and a professional environment

> If your timeline is longer than a hotel stay and shorter than an annual lease, Corporate Haven is built for you.

**Internal link:** anchor "furnished housing for travel nurses" → `/services/travel-nurse-housing`
**Internal link:** anchor "insurance relocation housing" → `/services/insurance-relocation-housing`

---

## Part 16 — Final Somerset Section Copy

**H2:** The Somerset — Cleveland's featured furnished rental

> The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, and a shared bath and entrance — fully furnished, move-in ready, and equipped for professional mid-term stays.

**Property details list (CONFIRMED — render as two-column detail grid):**
- Location: Cleveland, Ohio — ZIP 44108
- Size: Approximately 1,836 sq. ft.
- Bedrooms: 3 (4th planned)
- Bathrooms: 1.5 — shared bath and entrance
- Furnishings: Modern throughout
- Kitchen: Fully equipped
- Workspace: Dedicated
- WiFi: High-speed included
- Utilities: Included
- Locks: Digital lock access
- Cleaning: Cleaning services included
- Parking: Yes
- Welcome essentials: Included

> **Note:** The Somerset has a shared bath and entrance. We disclose this clearly so you can make an informed decision before reaching out.

**Image slot:** `<ServiceImagePlaceholder aspect="aspect-[4/3]" />` — MISSING — FLAGGED (owner-supplied photography only)

**CTA:** Learn more about the Somerset → `/properties/somerset`

---

## Part 17 — Final Cleveland Local Section Copy

**H2:** Mid-term and corporate housing in Cleveland, Ohio

> Cleveland, Ohio is home to major hospital systems, growing business and medical districts, and one of the Midwest's most active professional relocation markets. Traveling professionals, medical staff, corporate teams, and relocating guests arrive in Cleveland every month needing housing that is furnished, flexible, and ready on arrival.

> Corporate Haven provides furnished mid-term rentals and corporate housing for the professionals and guests who need that kind of housing in this city. We are Cleveland-based, locally operated, and focused entirely on the mid-term housing gap — the space between a hotel stay and a year-long lease that most housing options ignore.

> Whether you are coming for a medical rotation, a corporate assignment, an insurance relocation, or a professional move, Cleveland's furnished housing is here when you need it.

**Internal link:** anchor "Cleveland, Ohio" → `/cleveland-ohio`
**Internal link:** anchor "furnished mid-term rentals" → `/services/mid-term-rentals`

---

## Part 18 — Final Homepage FAQ Section

**H2:** Common questions about furnished housing in Cleveland

**Render as visible accordion or stacked FAQ list. All 10 items below are exact visible text. FAQPage JSON-LD must match this text character-for-character.**

---

**Q1: What is mid-term housing?**
> Mid-term housing covers furnished stays longer than a hotel and shorter than an annual lease — typically 30 days to several months — with utilities, WiFi, and furnishings already in place.

---

**Q2: What is included in Corporate Haven's furnished housing?**
> Fully furnished throughout, utilities included, high-speed WiFi, fully equipped kitchen, dedicated workspace, digital lock access, cleaning services, parking, and welcome essentials.

---

**Q3: Who uses mid-term rentals in Cleveland?**
> Traveling professionals, travel nurses, medical professionals, resident physicians, relocating families, insurance relocation guests, students, interns, contract workers, and consultants — anyone who needs furnished, flexible housing for more than a hotel stay but less than a year.

---

**Q4: Is Corporate Haven right for travel nurses?**
> Yes. Corporate Haven provides furnished, flexible housing in Cleveland suited to travel nurse assignment lengths, with high-speed WiFi, a dedicated workspace, and all utilities included so you can focus on your assignment from day one.

---

**Q5: How do I check availability at Corporate Haven?**
> Use the Check Availability form on this site to share your dates, stay type, and number of guests. We will respond with what is available for your timeline.

---

**Q6: What is the Somerset?**
> The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, a shared bath and entrance, modern furnishings, a fully equipped kitchen, a dedicated workspace, high-speed WiFi, utilities, parking, digital locks, and cleaning services.

---

**Q7: Does the Somerset have a shared bathroom or entrance?**
> Yes. The Somerset has a shared bath and shared entrance. We disclose this clearly so guests can make an informed decision before reaching out.

---

**Q8: How is Corporate Haven priced?**
> Corporate Haven's furnished housing uses all-inclusive monthly pricing. Exact rates are confirmed on request based on your dates, stay length, and property. Contact us or use the Check Availability form to receive current pricing.

---

**Q9: Where in Cleveland does Corporate Haven operate?**
> Corporate Haven operates in Cleveland, Ohio, with the Somerset located in the 44108 ZIP code. The service area includes Cleveland and Cuyahoga County. Contact us to confirm coverage for your specific location.

---

**Q10: Why choose Corporate Haven over a hotel for a longer stay?**
> For stays of a month or more, Corporate Haven's furnished housing provides a full kitchen, dedicated workspace, utilities, and WiFi — at a monthly rate that is generally more practical than nightly hotel pricing for extended professional stays.

---

**FAQ section footer:**
"See all frequently asked questions" → `/faq`

---

## Part 19 — Final Schema Plan

### JSON-LD Block 1: Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net",
  "description": "Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing."
}
```

**Omit (MISSING — FLAGGED):** `telephone`, `email`, `address`, `logo`, `sameAs`

---

### JSON-LD Block 2: LocalBusiness

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
      "addressRegion": "OH",
      "addressCountry": "US"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cuyahoga County",
      "addressRegion": "OH",
      "addressCountry": "US"
    }
  ],
  "email": "contact@corporatehaven.net"
}
```

**Omit (MISSING — FLAGGED):** `streetAddress`, `telephone`, `openingHours`, `logo`, `aggregateRating`

**Email:** CONFIRMED as `contact@corporatehaven.net` — include in schema.

---

### JSON-LD Block 3: WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net"
}
```

---

### JSON-LD Block 4: FAQPage

Must match visible FAQ text from Part 18 exactly — character-for-character. Do not paraphrase or shorten.

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
    },
    {
      "@type": "Question",
      "name": "Who uses mid-term rentals in Cleveland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traveling professionals, travel nurses, medical professionals, resident physicians, relocating families, insurance relocation guests, students, interns, contract workers, and consultants — anyone who needs furnished, flexible housing for more than a hotel stay but less than a year."
      }
    },
    {
      "@type": "Question",
      "name": "Is Corporate Haven right for travel nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Corporate Haven provides furnished, flexible housing in Cleveland suited to travel nurse assignment lengths, with high-speed WiFi, a dedicated workspace, and all utilities included so you can focus on your assignment from day one."
      }
    },
    {
      "@type": "Question",
      "name": "How do I check availability at Corporate Haven?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the Check Availability form on this site to share your dates, stay type, and number of guests. We will respond with what is available for your timeline."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Somerset?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, a shared bath and entrance, modern furnishings, a fully equipped kitchen, a dedicated workspace, high-speed WiFi, utilities, parking, digital locks, and cleaning services."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Somerset have a shared bathroom or entrance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Somerset has a shared bath and shared entrance. We disclose this clearly so guests can make an informed decision before reaching out."
      }
    },
    {
      "@type": "Question",
      "name": "How is Corporate Haven priced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corporate Haven's furnished housing uses all-inclusive monthly pricing. Exact rates are confirmed on request based on your dates, stay length, and property. Contact us or use the Check Availability form to receive current pricing.",
      }
    },
    {
      "@type": "Question",
      "name": "Where in Cleveland does Corporate Haven operate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corporate Haven operates in Cleveland, Ohio, with the Somerset located in the 44108 ZIP code. The service area includes Cleveland and Cuyahoga County. Contact us to confirm coverage for your specific location."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Corporate Haven over a hotel for a longer stay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For stays of a month or more, Corporate Haven's furnished housing provides a full kitchen, dedicated workspace, utilities, and WiFi — at a monthly rate that is generally more practical than nightly hotel pricing for extended professional stays."
      }
    }
  ]
}
```

---

## Part 20 — Final Internal Link Plan

| Anchor Text | Target URL | Section |
|---|---|---|
| mid-term rentals in Cleveland | `/services/mid-term-rentals` | What Is Mid-Term Housing, Services grid |
| corporate housing | `/services/corporate-housing` | Services grid |
| travel nurse housing | `/services/travel-nurse-housing` | Services grid, Who We Serve |
| medical professional housing | `/services/medical-professional-housing` | Services grid |
| insurance relocation housing | `/services/insurance-relocation-housing` | Services grid, Who We Serve |
| The Somerset | `/properties/somerset` | Somerset section |
| Cleveland, Ohio | `/cleveland-ohio` | Cleveland section |
| Check Availability | `/check-availability` | Hero CTA, Final CTA |
| Contact Corporate Haven | `/contact` | Final CTA |
| See all frequently asked questions | `/faq` | FAQ section footer |

**Minimum 8 internal outbound links. All 10 above must render on the page.**

---

## Part 21 — Final Image and Alt Text Plan

All photography is MISSING — FLAGGED. All image slots use `<ServiceImagePlaceholder>` until owner-supplied photography arrives. No AI-generated property photos. No stock photos framed as real property.

| Slot | Component | Behavior | Alt / ARIA |
|---|---|---|---|
| Hero decoration | Optional SVG or CSS only — no real photo needed | Decorative or omit | `aria-hidden="true"` |
| Services grid — each card (5 total) | `<ServiceImagePlaceholder aspect="aspect-[16/10]" />` | Brand-tinted block, `aria-hidden="true"` | Decorative — no alt text needed |
| Somerset section | `<ServiceImagePlaceholder aspect="aspect-[4/3]" />` | Brand-tinted block, `aria-hidden="true"` | Decorative — owner photo replaces this |
| Who We Serve | No image needed — audience grid is text/card layout | — | — |

**When owner-supplied photos arrive, use these alt text templates:**
- Somerset exterior: `The Somerset — Corporate Haven furnished rental Cleveland Ohio`
- Somerset living area: `Furnished living area at Corporate Haven's Somerset property Cleveland Ohio`
- Somerset kitchen: `Fully equipped kitchen at Corporate Haven's Somerset furnished rental Cleveland Ohio`
- Somerset workspace: `Dedicated workspace in Corporate Haven furnished mid-term rental Cleveland Ohio`
- Somerset bedroom: `Furnished bedroom at the Somerset Corporate Haven Cleveland Ohio`

---

## Part 22 — Final Front-End Design Notes

**Brand palette (APPROVED PLACEHOLDER — already wired in `tailwind.config.ts` + `app/globals.css`):**

```
Primary Ink         #111827   → text-brand-ink / bg-brand-ink
Deep Teal           #0B3440   → text-brand-primary / bg-brand-primary / bg-brand-primary-hover / hover:bg-brand-secondary
Logo Teal           #5F7F83   → text-brand-logo-teal / bg-brand-logo-teal
Mist Background    #EAF1F1   → bg-brand-mist
Warm White          #FAF8F3   → bg-brand-warm / bg-brand-surface
Soft Gray           #F5F6F6   → bg-brand-soft-gray
Border Gray         #D9DEDE   → border-brand-border
Primary Button      #000000   → bg-brand-button
Button Text         #FFFFFF   → text-brand-button-text
Warm Accent         #C9A46A   → text-brand-accent / bg-brand-accent
```

**Typography (APPROVED PLACEHOLDER — system fallbacks until owner confirms):**
- Headings: Manrope, Poppins, or Montserrat (owner confirms final choice)
- Body: Source Sans 3 or Inter (owner confirms final choice)
- Mark all font-family references with `// TODO-FONT:` comment in Tailwind config

**Section rhythm (alternate backgrounds):**
- Hero: white
- Services grid: white
- What Is Mid-Term Housing: Mist (#EAF1F1)
- What's Included: white
- Who We Serve: Mist (#EAF1F1)
- Somerset: white
- Cleveland: Mist (#EAF1F1)
- FAQ: white
- Final CTA: Deep Teal (#0B3440) dark section with white text

**Hero layout:**
- Two-column split: content left (55%), form right (45%)
- Max container width: `max-w-container` per scaffold
- Section padding: `py-16 sm:py-20`
- Mobile: stack content → form (single column)

**Service cards:**
- Image placeholder `aspect-[16/10]` at top — `aria-hidden="true"` — no text, no fake images
- Card background: `bg-brand-soft-gray` with `border-brand-border` border
- Hover: subtle lift or border accent (see TODO-MOTION below)
- 1-col mobile → 2-col tablet → 3-col desktop grid

**CTA buttons:**
- Primary: `bg-brand-button` (#000000), `text-brand-button-text` (#FFFFFF), `hover:bg-brand-primary-hover` (#0B3440)
- Secondary/outline: `border-brand-ink`, transparent background

**Navigation (LOCKED — see Navigation Lock Rule):**
- Home · Services · Properties · Cleveland · About · FAQ · Contact
- Header CTA: Check Availability (primary black button)
- NO Tenant Portal, Tenant Requests, or Leasing Survey in primary nav

**Footer:**
- Do NOT place Tenant Portal or Tenant Requests prominently in the footer
- Only add them as small, low-priority links under an "Existing Tenants" section if explicitly approved later

**Email display:**
- Visible: `contact@corporatehaven.net`
- Href: `mailto:contact@inbox.corporatehaven.net`

---

## Part 23 — Final Framer Motion Notes

**Status: NOT yet approved for this build prompt. Do not install or import framer-motion.**

Mark all future motion attachment points with `{/* TODO-MOTION: ... */}` comments.

**Planned patterns when approved:**
- Hero H1 + sub: `fadeUp` on mount
- Services cards: `staggerGroup` on scroll entry
- Somerset section: `fadeIn` on scroll
- FAQ accordion: smooth `AnimatePresence` height transition
- Final CTA: `scaleIn` or `fadeUp`

**Files to create when approved:**
- `lib/animations/motion-presets.ts`
- `components/motion/FadeIn.tsx`
- `components/motion/StaggerGroup.tsx`
- `components/motion/MotionCard.tsx`

**All motion must:** use `useReducedMotion()`, never delay SEO content, never hide content from crawlers, never cause layout shift, and wrap only client components.

---

## Part 24 — Missing Data TODO List

| # | Item | Impact | Status |
|---|---|---|---|
| 1 | Phone number | No tel: CTA, no schema telephone | MISSING — FLAGGED |
| 2 | Street address (public vs. service-area decision) | No streetAddress in schema or footer | MISSING — FLAGGED |
| 3 | Business hours | No openingHours in schema or footer | MISSING — FLAGGED |
| 4 | Brand logo (SVG) | No logo in header, favicon, OG image | MISSING — FLAGGED |
| 5 | Open Graph image (1200×630) | No og:image until owner-supplied | MISSING — FLAGGED |
| 6 | Somerset photography | All image slots remain placeholders | MISSING — FLAGGED |
| 7 | Form endpoint / vendor | QuoteFormPlaceholder remains non-functional | MISSING — FLAGGED |
| 8 | Verified testimonials | No social proof section | MISSING — FLAGGED |
| 9 | License / insurance / registration status | No compliance claims in copy or schema | MISSING — FLAGGED |
| 10 | Google Business Profile URL | No sameAs in Organization schema | MISSING — FLAGGED |
| 11 | Social profile URLs | No sameAs in schema | MISSING — FLAGGED |
| 12 | Font final decision | TODO-FONT comments remain in Tailwind config | APPROVED PLACEHOLDER |
| 13 | Per-segment messaging (12 audience segments) | Homepage uses generalized audience language | MISSING — FLAGGED |
| 14 | Owner/founder name | Not used on homepage; blocks About page | MISSING — FLAGGED |

**CONFIRMED new data (from prior decision batches):**
- Email: `contact@corporatehaven.net` — CONFIRMED
- Email href: `mailto:contact@inbox.corporatehaven.net` — CONFIRMED
- Brand palette (placeholder): APPROVED PLACEHOLDER — see Part 22

---

## Part 25 — One Complete Claude Code Build Prompt

The full self-contained Claude Code build prompt for pasting into a fresh Claude Code session is reproduced at the bottom of this document and again in the implementation log. The prompt incorporates: project name, repo path, current status, latest known commit `ac42c5f`, approved file scope, content lock rule, no-fake-data rule, navigation lock rule, footer lock rule, email lock rule, all approved homepage content, all approved metadata, all FAQ Q+A, schema instructions, internal link instructions, image requirements, front-end design requirements, motion notes (planning only), QA requirements, validation commands, Git rules, and final report requirements.

See bottom of file.

---

*End of `docs/site-os/outputs/homepage-step10b-build-prompt.md`*
*Corporate Haven Site OS Master | Phase D STEP 10B*
*Content locked — build prompt below is ready for paste into VS Code / Claude Code*
*Next step: Paste the build prompt below into Claude Code, run QA, commit with explicit staging*

---

# COMPLETE CLAUDE CODE BUILD PROMPT (paste-ready)

```
PROJECT:
Corporate Haven Site OS Master Build

REPO PATH:
C:\Users\Welcome\Desktop\client-sites\corporate-haven-site

TASK:
Implement the final Corporate Haven homepage (app/page.tsx) using the locked content
package from STEP 10B. Update site constants with confirmed email (already done in prior
batch — verify and add SITE.emailHref alias if not present). Update lib/constants/seo.ts
to support the four required JSON-LD blocks. Produce a fully polished, conversion-focused,
SEO-ready, AEO-ready, schema-safe, static-export-compatible homepage.

CURRENT STATUS:
- Phase A: CLEARED WITH FLAGS
- Phase B: complete
- Phase C: policy invocation active
- Phase D Batch 1 foundation scaffold: complete (commit 5520d34)
- Phase D brand/nav/email decision batch: complete (commit d41c3ef)
- Phase D Tailwind token batch: complete (commit ac42c5f)
- Latest known commit: ac42c5f
- Branch: main
- Working tree: clean (verify before starting)
- Foundation stack: Next.js 15 + TypeScript + Tailwind 3 + Cloudflare Pages static export
- Approved brand palette tokens wired in tailwind.config.ts and app/globals.css
- Header.tsx, Footer.tsx, lib/constants/routes.ts already match approved
  navigation and footer rules (verify only — no changes expected)
- lib/constants/site.ts already has SITE.email = 'contact@corporatehaven.net' and
  SITE.emailMailto = 'mailto:contact@inbox.corporatehaven.net' from a prior batch.
  If the homepage / schema helpers reference SITE.emailHref, add an alias export
  emailHref = SITE.emailMailto to satisfy that reference without breaking existing
  Footer behavior. Otherwise leave site.ts alone.
- Homepage: placeholder shell in app/page.tsx — ready for final content replacement
- STEP 10A research artifact: docs/site-os/outputs/homepage-research.md (complete)
- STEP 10B content package: docs/site-os/outputs/homepage-step10b-build-prompt.md (complete)
- Phone: MISSING — FLAGGED — do not invent
- Address: MISSING — FLAGGED — do not invent
- Hours: MISSING — FLAGGED — do not invent
- Brand logo: MISSING — FLAGGED — do not invent
- Property photography: MISSING — FLAGGED — use placeholders
- Form endpoint: MISSING — FLAGGED — use QuoteFormPlaceholder

─────────────────────────────────────────────
APPROVED FILE SCOPE
─────────────────────────────────────────────

Files to READ before starting:
- docs/site-os/outputs/homepage-research.md
- docs/site-os/outputs/homepage-step10b-build-prompt.md   (this file)
- docs/site-os/corporate-haven-build-context.md
- docs/brand-guide.md
- docs/site-os/no-fake-data-policy.md
- docs/site-os/service-business-conversion-layout.md
- docs/site-os/service-card-image-placeholder-standard.md
- lib/constants/site.ts
- lib/constants/routes.ts
- lib/constants/seo.ts
- components/layout/Header.tsx
- components/layout/Footer.tsx
- components/sections/HeroSection.tsx
- components/sections/CTASection.tsx
- components/sections/FAQSection.tsx
- components/cards/ServiceCard.tsx
- components/forms/QuoteFormPlaceholder.tsx
- components/media/ServiceImagePlaceholder.tsx
- app/page.tsx

Files to EDIT:
- app/page.tsx              (full homepage implementation with locked content)
- lib/constants/seo.ts      (add buildLocalBusinessJsonLd email parameterization
                             if not present; add WebSite JSON-LD helper if missing)
- docs/site-os/implementation-log.md     (append STEP 10B-Implement entry)
- docs/site-os/changelog/project-changelog.md (append new top entry)

Files OPTIONAL (only if inspection reveals a blocking gap — explain in final report):
- components/sections/HeroSection.tsx
- components/sections/CTASection.tsx
- components/sections/FAQSection.tsx
- components/cards/ServiceCard.tsx
- components/media/ServiceImagePlaceholder.tsx
- lib/constants/routes.ts
- lib/constants/site.ts (only to add emailHref alias if needed for backwards-compat)

Files NOT to touch:
- app/layout.tsx
- app/not-found.tsx
- app/globals.css
- next.config.mjs
- tailwind.config.ts
- tsconfig.json
- postcss.config.mjs
- package.json
- package-lock.json
- public/  (no asset changes — photography is MISSING — FLAGGED)
- Header.tsx and Footer.tsx (already correct from prior batch — only touch if a
  blocking issue is found and explain in final report)
- docs/brand-guide.md
- docs/site-os/corporate-haven-build-context.md
- docs/site-os/outputs/homepage-research.md
- docs/site-os/outputs/homepage-step10b-build-prompt.md
- Site OS Master at C:\Users\Welcome\Desktop\site-os-master (never touch)
- .claude/, node_modules/, .next/, out/

─────────────────────────────────────────────
CONTENT LOCK RULE
─────────────────────────────────────────────

All page copy, headings, CTAs, FAQ questions, FAQ answers, metadata, schema text,
internal anchor text, and business claims provided in this prompt are locked.

Do not rewrite, shorten, summarize, paraphrase, simplify, remove, reorder, or replace
the approved content unless explicitly instructed.

You may only adjust code structure, layout, styling, accessibility attributes, responsive
behavior, component organization, technical SEO implementation, schema formatting, and
approved motion behavior while preserving the approved content exactly.

Specific preservation requirements:
1.  H1 text renders exactly: "Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio"
2.  Hero sub-headline renders exactly as provided in APPROVED CONTENT below
3.  Trust bullets render the exact 6 bullets — no additions, no removals
4.  Somerset shared bath and entrance disclosure renders unaltered
5.  All 10 FAQ questions render exactly as provided — no paraphrasing
6.  All 10 FAQ answers render exactly as provided — no shortening
7.  FAQ section footer link text: "See all frequently asked questions" → /faq
8.  Section headings (H2s) render exactly as specified
9.  Service card names and descriptions render exactly as specified
10. Who We Serve audience names and descriptors render exactly as specified
11. All internal link anchor text matches exactly
12. Meta title and description render exactly as specified
13. FAQPage JSON-LD matches visible FAQ text character-for-character
14. CTA labels ("Check Availability", "View Available Rentals", "Contact Corporate Haven",
    "Learn more about the Somerset", "See all frequently asked questions") render exactly

─────────────────────────────────────────────
BUSINESS DATA RULE
─────────────────────────────────────────────

Do not invent:
- Phone numbers (MISSING — FLAGGED → no tel: link)
- Street address (MISSING — FLAGGED → omit from schema and footer)
- Business hours (MISSING — FLAGGED → omit from schema and footer)
- Pricing figures (not verified)
- Review counts or star ratings (no verified reviews exist)
- License or insurance claims (not verified)
- Testimonials (no verified testimonials)
- Owner or staff names (not verified)
- Property photos (MISSING — FLAGGED → use ServiceImagePlaceholder)
- Third-party affiliations or hospital partnerships (not verified)
- Same-day or emergency availability claims (not verified)

CONFIRMED data to use:
- Business name: Corporate Haven
- Primary city: Cleveland, Ohio
- Service area: Cleveland + Cuyahoga County (Cuyahoga is APPROVED PLACEHOLDER)
- Email display: contact@corporatehaven.net
- Email href: mailto:contact@inbox.corporatehaven.net
- Base URL: https://corporatehaven.net
- Property: The Somerset — ZIP 44108 — ~1,836 sq ft — 3 BR — 1.5 BA — shared bath and
  entrance — modern furnishings — fully equipped kitchen — dedicated workspace —
  high-speed WiFi — utilities included — parking — digital locks — cleaning services —
  welcome essentials

─────────────────────────────────────────────
NAVIGATION LOCK RULE
─────────────────────────────────────────────

Primary navigation must contain exactly these items in this order:
- Home
- Services
- Properties
- Cleveland
- About
- FAQ
- Contact
- Header CTA: Check Availability (primary black button → /check-availability)

Do NOT add to primary navigation:
- Tenant Portal
- Tenant Requests
- Leasing Survey

(Header.tsx + routes.ts already enforce this — verify no regression.)

─────────────────────────────────────────────
FOOTER LOCK RULE
─────────────────────────────────────────────

Do not place Tenant Portal or Tenant Requests prominently in the public footer.

The footer must include:
- Email display: contact@corporatehaven.net (rendered as visible text)
- Email link: mailto:contact@inbox.corporatehaven.net (href value)
- Service area: Cleveland, Ohio and Cuyahoga County
- Navigation columns: Company · Housing · Get Started · Contact
- Bottom row: © [current year] Corporate Haven. All rights reserved. + Legal links

(Footer.tsx already enforces this — verify no regression.)

─────────────────────────────────────────────
EMAIL LOCK RULE
─────────────────────────────────────────────

Use ONLY these values for email:
- Visible / display email: contact@corporatehaven.net
- Clickable href:         mailto:contact@inbox.corporatehaven.net

lib/constants/site.ts:
- SITE.email = 'contact@corporatehaven.net'
- SITE.emailMailto = 'mailto:contact@inbox.corporatehaven.net'  (existing)
- If homepage or schema helpers reference SITE.emailHref, add an alias export
  emailHref = SITE.emailMailto. Otherwise leave site.ts alone.

Do not use any other email format or address.

─────────────────────────────────────────────
FRONT-END DESIGN
─────────────────────────────────────────────

Apply approved brand palette tokens (already wired):

  Tailwind class                       → Approved color
  text-brand-ink / bg-brand-ink        → Primary Ink #111827
  text-brand-primary / bg-brand-primary → Deep Teal #0B3440
  bg-brand-primary-hover               → Deep Teal #0B3440
  hover:bg-brand-secondary             → Deep Teal #0B3440 (legacy alias)
  text-brand-logo-teal                 → Logo Teal #5F7F83
  bg-brand-mist                        → Mist #EAF1F1
  bg-brand-warm / bg-brand-surface     → Warm White #FAF8F3
  bg-brand-soft-gray                   → Soft Gray #F5F6F6
  border-brand-border                  → Border Gray #D9DEDE
  bg-brand-button                      → Primary Button #000000
  text-brand-button-text               → Button Text #FFFFFF
  text-brand-accent / bg-brand-accent  → Warm Accent #C9A46A

SECTION BACKGROUNDS (alternate for visual rhythm):
- Hero: bg-white (or bg-brand-surface for warm-white cue)
- Services grid: bg-white
- What Is Mid-Term Housing: bg-brand-mist
- What's Included: bg-white
- Who We Serve: bg-brand-mist
- Somerset: bg-white
- Cleveland: bg-brand-mist
- FAQ: bg-white
- Final CTA: bg-brand-primary (Deep Teal) with text-white

HERO LAYOUT:
- Two-column split via existing <HeroSection layout="split" formSlot={...} />
- Max container: max-w-container
- Padding: py-16 sm:py-20 lg:py-24, px-4 sm:px-6 lg:px-10
- Mobile: stack vertically (content top, form bottom)

SERVICE CARDS:
- Use existing <ServiceCard /> component
- Each card wraps <ServiceImagePlaceholder aspect="aspect-[16/10]" /> at top
- Grid: 1-col mobile → 2-col tablet → 3-col desktop

CTA BUTTONS:
- Primary: bg-brand-button text-brand-button-text hover:bg-brand-primary-hover
- Secondary / outlined: border border-brand-ink text-brand-ink hover:border-brand-primary

ACCESSIBILITY REQUIREMENTS:
- All interactive elements keyboard-navigable
- Visible focus states on all interactive elements
- WCAG 2.1 AA minimum contrast on all text
- FAQ accordion uses aria-expanded (or native <details>)
- Form fields have visible labels and aria-label attributes
- CTA buttons have descriptive accessible names
- Heading hierarchy: one H1, sequential H2/H3, no skipped levels
- Image placeholders: aria-hidden="true" (decorative)

─────────────────────────────────────────────
FRAMER MOTION
─────────────────────────────────────────────

Framer Motion is NOT approved for this build.
Do not add framer-motion to package.json. Do not import framer-motion in any file.

Mark all future motion attachment points with TODO-MOTION comments:
  {/* TODO-MOTION: wrap in <FadeIn> when framer-motion is approved */}

─────────────────────────────────────────────
BUILD REQUIREMENTS
─────────────────────────────────────────────

1.  VERIFY lib/constants/site.ts already has email + emailMailto set. If the homepage
    or schema helpers will reference SITE.emailHref, add `export const emailHref =
    SITE.emailMailto` or expand SITE with an emailHref field that mirrors emailMailto.
    Do not change phone, address, or hours.

2.  UPDATE lib/constants/seo.ts:
    - Confirm buildOrganizationJsonLd() omits telephone, email, address, logo, sameAs
      (correct as-shipped — verify only)
    - Confirm buildLocalBusinessJsonLd() emits email from SITE.email when set
      (currently optional via `if (SITE.email) schema.email = SITE.email`) — verify
      that this now resolves to "contact@corporatehaven.net"
    - Add buildWebSiteJsonLd() helper if not present, returning the WebSite block
      from APPROVED CONTENT below
    - buildFaqPageJsonLd() already exists — confirm it produces the FAQPage block
      with exact answer text match
    - buildBreadcrumbJsonLd() exists — not used on homepage

3.  IMPLEMENT app/page.tsx — full homepage with 9 sections in order:

    SECTION 1 — HERO
    - Use <HeroSection layout="split" formSlot={<QuoteFormPlaceholder />} ...>
    - Eyebrow: "Cleveland, Ohio"
    - Title: "Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio"
    - Subtitle: see APPROVED CONTENT (Sub-headline) below
    - Bullets: 6 trust bullets verbatim from APPROVED CONTENT
    - Primary CTA: PRIMARY_CTA ("Check Availability" → /check-availability)
    - Secondary CTA: SECONDARY_CTA ("View Available Rentals" → /properties)

    SECTION 2 — SERVICES PREVIEW GRID
    - Wrapper bg: bg-white
    - <SectionHeader eyebrow="What we offer"
                      title="Housing built for the people who book it"
                      description="Five core offerings shaped around the audiences who stay with us." />
    - Grid of 5 <ServiceCard> components — names + descriptions verbatim from APPROVED CONTENT
    - Grid: 1-col → 2-col → 3-col

    SECTION 3 — WHAT IS MID-TERM HOUSING
    - Wrapper bg: bg-brand-mist
    - H2: "What is mid-term housing?"
    - 3 paragraphs verbatim from APPROVED CONTENT
    - Internal link: anchor "mid-term rentals in Cleveland" → /services/mid-term-rentals

    SECTION 4 — WHAT'S INCLUDED
    - Wrapper bg: bg-white
    - H2: "Everything ready when you arrive"
    - Opening paragraph + 9-item amenity list (two-column on lg) + closing paragraph
      verbatim from APPROVED CONTENT

    SECTION 5 — WHO WE SERVE
    - Wrapper bg: bg-brand-mist
    - H2: "Who stays with Corporate Haven?"
    - Opening paragraph + 10-item audience list (two-column card grid) + closing paragraph
      verbatim from APPROVED CONTENT
    - Internal link 1: anchor "furnished housing for travel nurses" → /services/travel-nurse-housing
    - Internal link 2: anchor "insurance relocation housing" → /services/insurance-relocation-housing

    SECTION 6 — THE SOMERSET
    - Wrapper bg: bg-white
    - H2: "The Somerset — Cleveland's featured furnished rental"
    - Opening paragraph + 13-item property details list + shared-bath disclosure note
      verbatim from APPROVED CONTENT
    - Image slot: <ServiceImagePlaceholder aspect="aspect-[4/3]" />
    - CTA: "Learn more about the Somerset" → /properties/somerset

    SECTION 7 — CLEVELAND CONTEXT
    - Wrapper bg: bg-brand-mist
    - H2: "Mid-term and corporate housing in Cleveland, Ohio"
    - 3 paragraphs verbatim from APPROVED CONTENT
    - Internal link 1: anchor "Cleveland, Ohio" → /cleveland-ohio
    - Internal link 2: anchor "furnished mid-term rentals" → /services/mid-term-rentals

    SECTION 8 — FAQ
    - Wrapper bg: bg-white
    - Use <FAQSection eyebrow="Common questions"
                     title="Common questions about furnished housing in Cleveland"
                     items={FAQS} />
    - 10 FAQs verbatim from APPROVED CONTENT (Q + A)
    - Footer link below FAQSection: "See all frequently asked questions" → /faq
    - FAQPage JSON-LD generated by FAQSection from the same items array — exact match
      guaranteed structurally

    SECTION 9 — FINAL CTA
    - Wrapper bg: handled by <CTASection> internal bg-brand-ink (or bg-brand-primary
      for Deep Teal per design notes) with white text — confirm the section reads
      visually as a dark Deep Teal block
    - <CTASection eyebrow="Ready to plan your stay?"
                  title="Ready to check availability?"
                  body="Tell us about your timeline, your stay type, and who is coming. We will respond with what is available for your dates."
                  primaryCta={PRIMARY_CTA}
                  secondaryCta={{ label: 'Contact Corporate Haven', href: '/contact' }} />

4.  IMPLEMENT METADATA in app/page.tsx (Next.js export const metadata):
    title: "Furnished Corporate Housing in Cleveland, OH | Corporate Haven"
    description: "Fully furnished mid-term rentals and corporate housing in Cleveland, OH.
      Move-in-ready housing for professionals, travel nurses, and relocating guests.
      Check availability."
    alternates.canonical: "https://corporatehaven.net/"
    robots: { index: true, follow: true }
    openGraph.title: same as title
    openGraph.description: see APPROVED CONTENT OG description
    openGraph.url: "https://corporatehaven.net/"
    openGraph.type: "website"
    DO NOT emit openGraph.images — property photography is MISSING — FLAGGED
    twitter.card: "summary_large_image"

5.  IMPLEMENT JSON-LD SCHEMA
    Embed in app/page.tsx as <script type="application/ld+json"> blocks rendered via
    dangerouslySetInnerHTML. Use four separate JSON-LD blocks:

    Block 1 — Organization: from buildOrganizationJsonLd()
    Block 2 — LocalBusiness: from buildLocalBusinessJsonLd() — will include email
              "contact@corporatehaven.net" automatically; areaServed Cleveland +
              Cuyahoga County; omits streetAddress, telephone, openingHours,
              aggregateRating, logo
    Block 3 — WebSite: from buildWebSiteJsonLd() — add this helper if not present
    Block 4 — FAQPage: from buildFaqPageJsonLd(FAQS) — same FAQS array as visible

    Verify all four blocks emit valid JSON-LD and match the APPROVED CONTENT schema
    text exactly.

─────────────────────────────────────────────
APPROVED CONTENT (verbatim — do not modify)
─────────────────────────────────────────────

=== METADATA ===

Meta title:
Furnished Corporate Housing in Cleveland, OH | Corporate Haven

Meta description:
Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready
housing for professionals, travel nurses, and relocating guests. Check availability.

OG title:
Furnished Corporate Housing in Cleveland, OH | Corporate Haven

OG description:
Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio. Move-in-ready
housing for professionals, travel nurses, and relocating guests.

Canonical: https://corporatehaven.net/

=== HERO ===

Eyebrow: Cleveland, Ohio
H1: Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio
Sub-headline:
Corporate Haven provides fully furnished, all-inclusive mid-term rentals and corporate
housing in Cleveland — built for traveling professionals, travel nurses, medical staff,
and relocating guests who need move-in-ready housing for stays longer than a hotel and
shorter than a lease.

Trust bullets (6 — render with checkmarks):
- Fully furnished — move in with nothing
- Utilities, WiFi, kitchen, and workspace included
- Flexible lease terms — designed for the mid-term gap
- Cleveland, Ohio — locally operated
- Digital lock access — arrive when you need to
- Cleaning services included

Primary CTA label: Check Availability
Primary CTA href: /check-availability
Secondary CTA label: View Available Rentals
Secondary CTA href: /properties

Form panel heading: Check Availability
Form fields: Name · Email · Move-In Date · Length of Stay · Type of Stay (dropdown)
Type of Stay options: Traveling Professional / Travel Nurse / Medical Professional /
  Insurance Relocation / Relocating Family / Student or Intern / Other
Form submit label: Check Availability

=== SERVICES GRID ===

Section H2: Housing built for the people who book it
Section sub: Five core offerings shaped around the audiences who stay with us.

Card 1: Mid-Term Rentals — Fully furnished, all-inclusive housing for stays between a
  hotel and an annual lease — with everything in place when you arrive.
  → /services/mid-term-rentals  ·  "Learn more about mid-term rentals"
Card 2: Corporate Housing — Move-in-ready furnished housing for corporate assignments,
  business relocations, and project teams in Cleveland, Ohio.
  → /services/corporate-housing  ·  "Learn more about corporate housing"
Card 3: Travel Nurse Housing — Flexible furnished housing in Cleveland close to major
  hospital systems — designed around travel nurse assignment lengths and schedules.
  → /services/travel-nurse-housing  ·  "Learn more about travel nurse housing"
Card 4: Medical Professional Housing — Professional-grade furnished housing for resident
  physicians, healthcare support staff, and medical professionals on rotation or
  assignment in Cleveland.
  → /services/medical-professional-housing  ·  "Learn more about medical professional housing"
Card 5: Insurance Relocation Housing — Move-in-ready furnished housing for guests
  displaced from their primary residence and requiring insurer-supported relocation in
  Cleveland, Ohio.
  → /services/insurance-relocation-housing  ·  "Learn more about insurance relocation housing"

=== WHAT IS MID-TERM HOUSING ===

H2: What is mid-term housing?
P1: Mid-term housing covers furnished stays that are longer than a hotel and shorter than
an annual apartment lease — typically 30 days to several months — with utilities, WiFi,
and furnishings already in place from the day you arrive.
P2: Corporate Haven provides fully furnished, all-inclusive mid-term rentals in Cleveland,
Ohio with utilities, high-speed WiFi, a fully equipped kitchen, a dedicated workspace,
and everything you need from move-in day forward. If you are a traveling professional,
travel nurse, relocating family, insurance relocation guest, or anyone who needs flexible,
move-in-ready housing in Cleveland, mid-term housing is built for exactly your situation.
P3: Mid-term housing fills the gap that hotels and annual leases leave open — and
Corporate Haven is Cleveland's furnished housing provider built to fill it.
Internal link: "mid-term rentals in Cleveland" → /services/mid-term-rentals

=== WHAT'S INCLUDED ===

H2: Everything ready when you arrive
Opening: Every Corporate Haven rental comes fully furnished and all-inclusive. You bring
your bags. Everything else is already in place.
Amenities (9):
- Fully furnished throughout
- Utilities included
- High-speed WiFi
- Fully equipped kitchen
- Dedicated workspace
- Digital lock access
- Cleaning services
- Parking
- Welcome essentials
Closing: No furniture to buy. No utility accounts to set up. No WiFi to activate. Move in
and start your stay.

=== WHO WE SERVE ===

H2: Who stays with Corporate Haven?
Opening: Corporate Haven serves the guests who need more than a hotel and less than a year.
Our furnished housing in Cleveland is built for:
Audience list (10):
- Traveling professionals — on assignment, project, or business relocation in Cleveland
- Travel nurses — on short or mid-length assignments at Cleveland hospital systems
- Medical professionals — resident physicians, attending staff, and healthcare workers on training or rotation
- Healthcare support staff — administrative, technical, and support staff on fixed-term placements
- Relocating families — bridging the gap between leaving one home and settling into the next
- Insurance relocation guests — displaced guests requiring furnished, move-in-ready housing with insurer coordination
- Students and interns — program or assignment durations that don't fit a hotel or an annual lease
- Families in transition — going through a move, renovation, or life change that needs a stable furnished base
- Contract workers — project-based assignments of one to six months that require professional housing
- Consultants — extended engagements that need reliable WiFi, a workspace, and a professional environment
Closing: If your timeline is longer than a hotel stay and shorter than an annual lease,
Corporate Haven is built for you.
Internal links:
- "furnished housing for travel nurses" → /services/travel-nurse-housing
- "insurance relocation housing" → /services/insurance-relocation-housing

=== SOMERSET ===

H2: The Somerset — Cleveland's featured furnished rental
Opening: The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio
(ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms,
and a shared bath and entrance — fully furnished, move-in ready, and equipped for
professional mid-term stays.
Details (13):
- Location: Cleveland, Ohio — ZIP 44108
- Size: Approximately 1,836 sq. ft.
- Bedrooms: 3 (4th planned)
- Bathrooms: 1.5 — shared bath and entrance
- Furnishings: Modern throughout
- Kitchen: Fully equipped
- Workspace: Dedicated
- WiFi: High-speed included
- Utilities: Included
- Locks: Digital lock access
- Cleaning: Cleaning services included
- Parking: Yes
- Welcome essentials: Included
Disclosure note (do NOT omit): Note: The Somerset has a shared bath and entrance. We
disclose this clearly so you can make an informed decision before reaching out.
CTA: "Learn more about the Somerset" → /properties/somerset

=== CLEVELAND CONTEXT ===

H2: Mid-term and corporate housing in Cleveland, Ohio
P1: Cleveland, Ohio is home to major hospital systems, growing business and medical
districts, and one of the Midwest's most active professional relocation markets.
Traveling professionals, medical staff, corporate teams, and relocating guests arrive in
Cleveland every month needing housing that is furnished, flexible, and ready on arrival.
P2: Corporate Haven provides furnished mid-term rentals and corporate housing for the
professionals and guests who need that kind of housing in this city. We are
Cleveland-based, locally operated, and focused entirely on the mid-term housing gap —
the space between a hotel stay and a year-long lease that most housing options ignore.
P3: Whether you are coming for a medical rotation, a corporate assignment, an insurance
relocation, or a professional move, Cleveland's furnished housing is here when you need it.
Internal links:
- "Cleveland, Ohio" → /cleveland-ohio
- "furnished mid-term rentals" → /services/mid-term-rentals

=== FAQ (10 Q+A — exact text — render visibly AND in FAQPage JSON-LD) ===

Q1: What is mid-term housing?
A1: Mid-term housing covers furnished stays longer than a hotel and shorter than an annual
lease — typically 30 days to several months — with utilities, WiFi, and furnishings already
in place.

Q2: What is included in Corporate Haven's furnished housing?
A2: Fully furnished throughout, utilities included, high-speed WiFi, fully equipped
kitchen, dedicated workspace, digital lock access, cleaning services, parking, and welcome
essentials.

Q3: Who uses mid-term rentals in Cleveland?
A3: Traveling professionals, travel nurses, medical professionals, resident physicians,
relocating families, insurance relocation guests, students, interns, contract workers, and
consultants — anyone who needs furnished, flexible housing for more than a hotel stay but
less than a year.

Q4: Is Corporate Haven right for travel nurses?
A4: Yes. Corporate Haven provides furnished, flexible housing in Cleveland suited to travel
nurse assignment lengths, with high-speed WiFi, a dedicated workspace, and all utilities
included so you can focus on your assignment from day one.

Q5: How do I check availability at Corporate Haven?
A5: Use the Check Availability form on this site to share your dates, stay type, and number
of guests. We will respond with what is available for your timeline.

Q6: What is the Somerset?
A6: The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio
(ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, a
shared bath and entrance, modern furnishings, a fully equipped kitchen, a dedicated
workspace, high-speed WiFi, utilities, parking, digital locks, and cleaning services.

Q7: Does the Somerset have a shared bathroom or entrance?
A7: Yes. The Somerset has a shared bath and shared entrance. We disclose this clearly so
guests can make an informed decision before reaching out.

Q8: How is Corporate Haven priced?
A8: Corporate Haven's furnished housing uses all-inclusive monthly pricing. Exact rates are
confirmed on request based on your dates, stay length, and property. Contact us or use the
Check Availability form to receive current pricing.

Q9: Where in Cleveland does Corporate Haven operate?
A9: Corporate Haven operates in Cleveland, Ohio, with the Somerset located in the 44108
ZIP code. The service area includes Cleveland and Cuyahoga County. Contact us to confirm
coverage for your specific location.

Q10: Why choose Corporate Haven over a hotel for a longer stay?
A10: For stays of a month or more, Corporate Haven's furnished housing provides a full
kitchen, dedicated workspace, utilities, and WiFi — at a monthly rate that is generally
more practical than nightly hotel pricing for extended professional stays.

FAQ footer link: "See all frequently asked questions" → /faq

=== FINAL CTA ===

Eyebrow: Ready to plan your stay?
H2:     Ready to check availability?
Body:   Tell us about your timeline, your stay type, and who is coming. We will respond
        with what is available for your dates.
Primary CTA:   Check Availability → /check-availability
Secondary CTA: Contact Corporate Haven → /contact
Background:    Deep Teal — white text

=== SCHEMA JSON-LD ===

Block 1 — Organization (omit telephone, email, address, logo, sameAs):
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net",
  "description": "Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing."
}

Block 2 — LocalBusiness (include email; omit streetAddress, telephone, openingHours,
                         aggregateRating, logo):
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net",
  "description": "Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for professionals, travel nurses, and relocating guests.",
  "email": "contact@corporatehaven.net",
  "areaServed": [
    { "@type": "City", "name": "Cleveland", "addressRegion": "OH", "addressCountry": "US" },
    { "@type": "AdministrativeArea", "name": "Cuyahoga County", "addressRegion": "OH", "addressCountry": "US" }
  ]
}

Block 3 — WebSite:
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Corporate Haven",
  "url": "https://corporatehaven.net"
}

Block 4 — FAQPage (all 10 Q+A from above — text must match visible answers exactly):
Generated by buildFaqPageJsonLd(FAQS) where FAQS is the same array used by the
visible <FAQSection>. The component already enforces character-for-character match.

=== INTERNAL LINKS (minimum 10 must render and resolve) ===

1.  "mid-term rentals in Cleveland" → /services/mid-term-rentals
2.  "corporate housing" → /services/corporate-housing
3.  "travel nurse housing" → /services/travel-nurse-housing
4.  "furnished housing for travel nurses" → /services/travel-nurse-housing
5.  "medical professional housing" → /services/medical-professional-housing
6.  "insurance relocation housing" → /services/insurance-relocation-housing (Services grid)
7.  "insurance relocation housing" → /services/insurance-relocation-housing (Who We Serve)
8.  "The Somerset" / "Learn more about the Somerset" → /properties/somerset
9.  "Cleveland, Ohio" → /cleveland-ohio
10. "furnished mid-term rentals" → /services/mid-term-rentals
11. "Check Availability" → /check-availability (Hero + Final CTA)
12. "Contact Corporate Haven" → /contact
13. "See all frequently asked questions" → /faq

─────────────────────────────────────────────
TECHNICAL SEO
─────────────────────────────────────────────

1.  Canonical: alternates.canonical = "https://corporatehaven.net/"
2.  Robots: { index: true, follow: true }
3.  Heading hierarchy: 1× H1, 8× H2 (services / what-is / what's-included / who-we-serve /
    somerset / cleveland / faq / final-CTA), H3 only inside H2 sections (service card titles,
    FAQ question titles via <details><summary>)
4.  Open Graph: implement all five values; OMIT og:image (MISSING — FLAGGED)
5.  Twitter card: summary_large_image
6.  Static export safety: no Server Actions on homepage; form uses QuoteFormPlaceholder
    (no submit); no useSearchParams
7.  Sitemap and robots.txt: NOT this batch (separate future batch)
8.  Schema validation: confirm all four JSON-LD blocks emit valid JSON; FAQPage matches
    visible FAQ character-for-character

─────────────────────────────────────────────
IMAGE REQUIREMENTS
─────────────────────────────────────────────

ALL PHOTOGRAPHY IS MISSING — FLAGGED.

- Services grid: 5× <ServiceImagePlaceholder aspect="aspect-[16/10]" />
- Somerset section: 1× <ServiceImagePlaceholder aspect="aspect-[4/3]" />
- Hero: no real photo — CSS surfaces only
- No AI-generated property photos
- No stock photos framed as real property
- No images with readable logos or text
- All placeholders: aria-hidden="true"

─────────────────────────────────────────────
QA REQUIREMENTS (must all be YES before commit)
─────────────────────────────────────────────

Content QA:
[ ] H1 exact: "Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio"
[ ] Hero sub-headline exact
[ ] 6 trust bullets exact — no additions, no removals
[ ] Somerset shared bath and entrance disclosure present and unaltered
[ ] All 10 FAQ questions exact
[ ] All 10 FAQ answers exact — not shortened
[ ] FAQ footer link: "See all frequently asked questions" → /faq
[ ] All section H2s exact
[ ] All service card names + descriptions exact
[ ] Who We Serve audience list (10 items) exact
[ ] All CTA labels exact
[ ] No invented facts, phone, address, reviews, ratings, pricing, testimonials

Navigation QA:
[ ] Primary nav: Home · Services · Properties · Cleveland · About · FAQ · Contact
[ ] Header CTA: "Check Availability" → /check-availability
[ ] No Tenant Portal / Tenant Requests / Leasing Survey in primary nav
[ ] No Tenant Portal / Tenant Requests prominent in footer

Email QA:
[ ] Visible email: contact@corporatehaven.net (footer + LocalBusiness schema)
[ ] Email href: mailto:contact@inbox.corporatehaven.net (footer link)
[ ] No other email address used anywhere

SEO/AEO QA:
[ ] Meta title: "Furnished Corporate Housing in Cleveland, OH | Corporate Haven"
[ ] Meta description exact (157 chars)
[ ] Canonical: https://corporatehaven.net/
[ ] Robots: index, follow
[ ] OG title + description set; og:image OMITTED
[ ] Heading hierarchy: 1 H1, sequential H2s, no skipped levels
[ ] Minimum 10 internal outbound links render

Schema QA:
[ ] Organization JSON-LD present; telephone/email/address/logo/sameAs omitted
[ ] LocalBusiness JSON-LD present; email="contact@corporatehaven.net";
    streetAddress/telephone/openingHours/aggregateRating/logo omitted
[ ] WebSite JSON-LD present
[ ] FAQPage JSON-LD present; all 10 Q+A match visible text character-for-character

Design QA:
[ ] Two-column hero on desktop; stacks correctly on mobile
[ ] Service card grid: 1-col mobile / 2-col tablet / 3-col desktop
[ ] All image placeholders aria-hidden, no text inside
[ ] Final CTA renders deep teal (Deep Teal #0B3440) with white text
[ ] Primary CTA buttons: bg-brand-button (#000000), hover bg-brand-primary-hover (#0B3440)
[ ] Visible focus states on all interactive elements
[ ] No layout shift from form placeholder
[ ] Section background rhythm matches plan (Mist / Warm White / Deep Teal final)

Static Export QA:
[ ] npm run type-check passes
[ ] npm run lint passes
[ ] npm run build passes; out/index.html regenerated; out/404.html present

─────────────────────────────────────────────
VALIDATION COMMANDS
─────────────────────────────────────────────

cd "C:\Users\Welcome\Desktop\client-sites\corporate-haven-site"; npm run type-check
cd "C:\Users\Welcome\Desktop\client-sites\corporate-haven-site"; npm run lint
cd "C:\Users\Welcome\Desktop\client-sites\corporate-haven-site"; npm run build

After build, confirm out/index.html exists and was regenerated this session.

─────────────────────────────────────────────
GIT RULES
─────────────────────────────────────────────

- Do NOT use git add .
- Do NOT use git add -A
- Do NOT force-push
- Do NOT stage .claude/, node_modules/, .next/, or out/
- Stage only the specific files changed, by explicit path:

  cd "C:\Users\Welcome\Desktop\client-sites\corporate-haven-site"
  git add app/page.tsx `
          lib/constants/seo.ts `
          docs/site-os/implementation-log.md `
          docs/site-os/changelog/project-changelog.md
  (Add lib/constants/site.ts only if emailHref alias was added.)
  (Add any component file only if a blocking issue forced an edit — explain.)

- Run git status before and after changes.
- Do not commit if QA checklist has unchecked items.
- After commit, verify:
  - working tree clean
  - branch up-to-date with origin/main
  - Site OS Master (C:\Users\Welcome\Desktop\site-os-master) HEAD unchanged at 36f9092
    and working tree clean
- Recommended commit message:
  feat(homepage): implement Phase D STEP 10B homepage — locked content and schema
- Push: git push origin main

─────────────────────────────────────────────
FINAL REPORT REQUIREMENTS
─────────────────────────────────────────────

After completing all work, report:

1.  Files changed (list each by path)
2.  Files created (list each by path; expected: none)
3.  Section-by-section build summary
4.  Content preservation (YES/NO each): H1, sub-headline, trust bullets, Somerset
    disclosure, all 10 FAQs, all CTAs, all section H2s
5.  Navigation confirmation (YES/NO): primary nav matches; Tenant Portal/Requests/Survey
    excluded from nav; Footer Tenant exclusion confirmed
6.  Email confirmation (YES/NO): display = contact@corporatehaven.net; href =
    mailto:contact@inbox.corporatehaven.net
7.  SEO/AEO confirmation (YES/NO): meta title, meta description, canonical, robots,
    OG (image omitted), heading hierarchy, ≥10 internal links resolve
8.  Schema confirmation (YES/NO): 4 JSON-LD blocks present; FAQPage exact match;
    no blocked schema fields emitted
9.  Design confirmation (YES/NO): 2-col hero, mobile stacking, deep teal final CTA,
    placeholders correct, palette applied
10. Validation results: type-check / lint / build
11. Static export result: out/index.html present + regenerated
12. QA checklist: all items YES
13. Git status before / git status after / commit hash / push result
14. Site OS Master cross-repo confirmation (unchanged at 36f9092, clean)
15. Missing data carried forward (confirm placeholders still in place)
```
