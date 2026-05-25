import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceImagePlaceholder } from '@/components/media/ServiceImagePlaceholder';
import { QuoteFormPlaceholder } from '@/components/forms/QuoteFormPlaceholder';
import {
  PROPERTIES,
  PRIMARY_CTA,
  SECONDARY_CTA,
} from '@/lib/constants/routes';
import { buildWebSiteJsonLd, type FaqItem } from '@/lib/constants/seo';

// ============================================================================
// METADATA
// Source: docs/site-os/outputs/homepage-step10b-build-prompt.md §Part 6, 7, 8
// og:image OMITTED — MISSING — FLAGGED per docs/brand-guide.md §1
// ============================================================================

export const metadata: Metadata = {
  title: 'Furnished Corporate Housing in Cleveland, OH | Corporate Haven',
  description:
    'Fully furnished mid-term rentals and corporate housing in Cleveland, OH. Move-in-ready housing for professionals, travel nurses, and relocating guests. Check availability.',
  alternates: { canonical: 'https://corporatehaven.net/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Furnished Corporate Housing in Cleveland, OH | Corporate Haven',
    description:
      'Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio. Move-in-ready housing for professionals, travel nurses, and relocating guests.',
    url: 'https://corporatehaven.net/',
    type: 'website',
    siteName: 'Corporate Haven',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

// ============================================================================
// LOCKED CONTENT — DO NOT REWRITE
// Source of truth: docs/site-os/outputs/homepage-step10b-build-prompt.md
// CONTENT LOCK RULE: any change to text below requires a new content-lock batch.
// ============================================================================

// 6 homepage hub cards per docs/site-os/corporate-haven-build-list.md §D.
// Titles, descriptions, CTA labels, and CTA URLs are LOCKED. Do not paraphrase.
const HUB_CARDS = [
  {
    title: 'Mid-Term Rentals',
    description:
      'Fully furnished, all-inclusive housing for stays longer than a hotel and shorter than a yearly lease.',
    ctaLabel: 'Explore mid-term rentals',
    href: '/services/mid-term-rentals-cleveland',
  },
  {
    title: 'Corporate Housing',
    description:
      'Move-in-ready furnished housing for business assignments, project teams, contractors, and relocating professionals in Cleveland.',
    ctaLabel: 'Explore corporate housing',
    href: '/services/corporate-housing-cleveland',
  },
  {
    title: 'Travel Nurse & Medical Housing',
    description:
      'Flexible furnished housing for travel nurses, healthcare workers, resident physicians, and medical professionals on assignment in Cleveland.',
    ctaLabel: 'Explore healthcare housing',
    href: '/services/healthcare-housing-cleveland',
  },
  {
    title: 'Student & Medical Student Housing',
    description:
      'Furnished housing for students, interns, medical students, and program-based stays that do not fit a hotel or annual lease.',
    ctaLabel: 'Explore student housing',
    href: '/services/student-housing-cleveland',
  },
  {
    title: 'Insurance Relocation Housing',
    description:
      'Furnished housing for guests displaced from their primary home who need a stable, move-in-ready place to stay.',
    ctaLabel: 'Explore insurance relocation housing',
    href: '/services/insurance-relocation-housing-cleveland',
  },
  {
    title: 'Family & Transitional Housing',
    description:
      'Flexible furnished housing for relocating families, families in transition, renovations, life changes, and temporary housing needs.',
    ctaLabel: 'Explore family housing',
    href: '/services/temporary-family-housing-cleveland',
  },
] as const;

const HERO_BULLETS = [
  'Fully furnished — move in with nothing',
  'Utilities, WiFi, kitchen, and workspace included',
  'Flexible lease terms — designed for the mid-term gap',
  'Cleveland, Ohio — locally operated',
  'Digital lock access — arrive when you need to',
  'Cleaning services included',
] as const;

const AMENITIES = [
  'Fully furnished throughout',
  'Utilities included',
  'High-speed WiFi',
  'Fully equipped kitchen',
  'Dedicated workspace',
  'Digital lock access',
  'Cleaning services',
  'Parking',
  'Welcome essentials',
] as const;

const AUDIENCES = [
  ['Traveling professionals', 'on assignment, project, or business relocation in Cleveland'],
  ['Travel nurses', 'on short or mid-length assignments at Cleveland hospital systems'],
  ['Medical professionals', 'resident physicians, attending staff, and healthcare workers on training or rotation'],
  ['Healthcare support staff', 'administrative, technical, and support staff on fixed-term placements'],
  ['Relocating families', 'bridging the gap between leaving one home and settling into the next'],
  ['Insurance relocation guests', 'displaced guests requiring furnished, move-in-ready housing with insurer coordination'],
  ['Students and interns', "program or assignment durations that don't fit a hotel or an annual lease"],
  ['Families in transition', 'going through a move, renovation, or life change that needs a stable furnished base'],
  ['Contract workers', 'project-based assignments of one to six months that require professional housing'],
  ['Consultants', 'extended engagements that need reliable WiFi, a workspace, and a professional environment'],
] as const;

const SOMERSET_DETAILS: ReadonlyArray<readonly [string, string]> = [
  ['Location', 'Cleveland, Ohio — ZIP 44108'],
  ['Size', 'Approximately 1,836 sq. ft.'],
  ['Bedrooms', '3 (4th planned)'],
  ['Bathrooms', '1.5 — shared bath and entrance'],
  ['Furnishings', 'Modern throughout'],
  ['Kitchen', 'Fully equipped'],
  ['Workspace', 'Dedicated'],
  ['WiFi', 'High-speed included'],
  ['Utilities', 'Included'],
  ['Locks', 'Digital lock access'],
  ['Cleaning', 'Cleaning services included'],
  ['Parking', 'Yes'],
  ['Welcome essentials', 'Included'],
];

const FAQS: readonly FaqItem[] = [
  {
    question: 'What is mid-term housing?',
    answer:
      'Mid-term housing covers furnished stays longer than a hotel and shorter than an annual lease — typically 30 days to several months — with utilities, WiFi, and furnishings already in place.',
  },
  {
    question: "What is included in Corporate Haven's furnished housing?",
    answer:
      'Fully furnished throughout, utilities included, high-speed WiFi, fully equipped kitchen, dedicated workspace, digital lock access, cleaning services, parking, and welcome essentials.',
  },
  {
    question: 'Who uses mid-term rentals in Cleveland?',
    answer:
      'Traveling professionals, travel nurses, medical professionals, resident physicians, relocating families, insurance relocation guests, students, interns, contract workers, and consultants — anyone who needs furnished, flexible housing for more than a hotel stay but less than a year.',
  },
  {
    question: 'Is Corporate Haven right for travel nurses?',
    answer:
      'Yes. Corporate Haven provides furnished, flexible housing in Cleveland suited to travel nurse assignment lengths, with high-speed WiFi, a dedicated workspace, and all utilities included so you can focus on your assignment from day one.',
  },
  {
    question: 'How do I check availability at Corporate Haven?',
    answer:
      'Use the Check Availability form on this site to share your dates, stay type, and number of guests. We will respond with what is available for your timeline.',
  },
  {
    question: 'What is the Somerset?',
    answer:
      "The Somerset is Corporate Haven's featured furnished property in Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with three bedrooms, 1.5 bathrooms, a shared bath and entrance, modern furnishings, a fully equipped kitchen, a dedicated workspace, high-speed WiFi, utilities, parking, digital locks, and cleaning services.",
  },
  {
    question: 'Does the Somerset have a shared bathroom or entrance?',
    answer:
      'Yes. The Somerset has a shared bath and shared entrance. We disclose this clearly so guests can make an informed decision before reaching out.',
  },
  {
    question: 'How is Corporate Haven priced?',
    answer:
      "Corporate Haven's furnished housing uses all-inclusive monthly pricing. Exact rates are confirmed on request based on your dates, stay length, and property. Contact us or use the Check Availability form to receive current pricing.",
  },
  {
    question: 'Where in Cleveland does Corporate Haven operate?',
    answer:
      'Corporate Haven operates in Cleveland, Ohio, with the Somerset located in the 44108 ZIP code. The service area includes Cleveland and Cuyahoga County. Contact us to confirm coverage for your specific location.',
  },
  {
    question: 'Why choose Corporate Haven over a hotel for a longer stay?',
    answer:
      "For stays of a month or more, Corporate Haven's furnished housing provides a full kitchen, dedicated workspace, utilities, and WiFi — at a monthly rate that is generally more practical than nightly hotel pricing for extended professional stays.",
  },
] as const;

const CONTACT_CTA = {
  label: 'Contact Corporate Haven',
  href: '/contact',
} as const;

// ============================================================================
// JSON-LD — matches locked spec from STEP 10B Part 19 character-for-character.
// MISSING — FLAGGED fields explicitly omitted (see comments per block).
// ============================================================================

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Corporate Haven',
  url: 'https://corporatehaven.net',
  description:
    'Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing.',
  // OMITTED (MISSING — FLAGGED): telephone, email, address, logo, sameAs
} as const;

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Corporate Haven',
  url: 'https://corporatehaven.net',
  description:
    'Fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for professionals, travel nurses, and relocating guests.',
  email: 'contact@corporatehaven.net',
  areaServed: [
    { '@type': 'City', name: 'Cleveland', addressRegion: 'OH', addressCountry: 'US' },
    { '@type': 'AdministrativeArea', name: 'Cuyahoga County', addressRegion: 'OH', addressCountry: 'US' },
  ],
  // OMITTED (MISSING — FLAGGED): streetAddress, telephone, openingHours, aggregateRating, logo
} as const;

const WEBSITE_JSON_LD = buildWebSiteJsonLd();
// NOTE: FAQPage JSON-LD is emitted by <FAQSection> from the same FAQS array,
// guaranteeing character-for-character match. Do NOT duplicate it here.

// ============================================================================
// PAGE
// ============================================================================

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO (two-column split) */}
      <HeroSection
        eyebrow="Cleveland, Ohio"
        title="Furnished Mid-Term Rentals and Corporate Housing in Cleveland, Ohio"
        subtitle="Corporate Haven provides fully furnished, all-inclusive mid-term rentals and corporate housing in Cleveland — built for traveling professionals, travel nurses, medical staff, and relocating guests who need move-in-ready housing for stays longer than a hotel and shorter than a lease."
        bullets={HERO_BULLETS}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
        formSlot={<QuoteFormPlaceholder />}
        layout="split"
      />

      {/* SECTION 2 — HOUSING OPTIONS HUB CARDS (6 cards per build list §D) */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            title="Housing options built around your stay"
            description="Choose the path that best matches your stay, then check availability when you are ready. Corporate Haven organizes furnished housing around the people who need it most."
          />
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {HUB_CARDS.map((card) => (
              <li key={card.href} className="flex">
                <Link
                  href={card.href}
                  className="group flex w-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition-all hover:-translate-y-0.5 hover:border-brand-primary hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  {/* TODO: Replace with owner-supplied property or service photography */}
                  <ServiceImagePlaceholder aspect="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-brand-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray-600">
                      {card.description}
                    </p>
                    <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary transition-all group-hover:gap-2">
                      {card.ctaLabel}
                      <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3 — WHAT IS MID-TERM HOUSING */}
      <section className="bg-brand-mist">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader title="What is mid-term housing?" />
          <div className="mt-6 max-w-3xl space-y-4 text-base text-gray-700 sm:text-lg">
            <p>
              Mid-term housing covers furnished stays that are longer than a hotel and shorter
              than an annual apartment lease — typically 30 days to several months — with
              utilities, WiFi, and furnishings already in place from the day you arrive.
            </p>
            <p>
              Corporate Haven provides fully furnished, all-inclusive{' '}
              <Link
                href="/services/mid-term-rentals-cleveland"
                className="font-medium text-brand-primary underline-offset-4 hover:underline"
              >
                mid-term rentals in Cleveland
              </Link>
              , Ohio with utilities, high-speed WiFi, a fully equipped kitchen, a dedicated
              workspace, and everything you need from move-in day forward. If you are a
              traveling professional, travel nurse, relocating family, insurance relocation
              guest, or anyone who needs flexible, move-in-ready housing in Cleveland,
              mid-term housing is built for exactly your situation.
            </p>
            <p>
              Mid-term housing fills the gap that hotels and annual leases leave open — and
              Corporate Haven is Cleveland&apos;s furnished housing provider built to fill it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            title="Everything ready when you arrive"
            description="Every Corporate Haven rental comes fully furnished and all-inclusive. You bring your bags. Everything else is already in place."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <li
                key={amenity}
                className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-soft-gray px-4 py-3 text-base text-brand-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base text-gray-700 sm:text-lg">
            No furniture to buy. No utility accounts to set up. No WiFi to activate. Move in
            and start your stay.
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHO WE SERVE */}
      <section className="bg-brand-mist">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            title="Who stays with Corporate Haven?"
            description="Corporate Haven serves the guests who need more than a hotel and less than a year. Our furnished housing in Cleveland is built for:"
          />
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {AUDIENCES.map(([name, descriptor]) => (
              <li
                key={name}
                className="rounded-xl border border-brand-border bg-white p-5"
              >
                <p className="font-display text-base font-semibold text-brand-ink">{name}</p>
                <p className="mt-1 text-sm text-gray-600">{descriptor}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base text-gray-700 sm:text-lg">
            If your timeline is longer than a hotel stay and shorter than an annual lease,
            Corporate Haven is built for you.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-gray-700">
            Explore{' '}
            <Link
              href="/services/travel-nurse-housing-cleveland"
              className="font-medium text-brand-primary underline-offset-4 hover:underline"
            >
              furnished housing for travel nurses
            </Link>{' '}
            or{' '}
            <Link
              href="/services/insurance-relocation-housing-cleveland"
              className="font-medium text-brand-primary underline-offset-4 hover:underline"
            >
              insurance relocation housing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* SECTION 6 — THE SOMERSET */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            eyebrow="Featured property"
            title="The Somerset — Cleveland's featured furnished rental"
          />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ServiceImagePlaceholder aspect="aspect-[4/3]" className="rounded-2xl" />
            <div className="flex flex-col justify-center">
              <p className="text-base text-gray-700 sm:text-lg">
                The Somerset is Corporate Haven&apos;s featured furnished property in
                Cleveland, Ohio (ZIP 44108). It is approximately 1,836 square feet with
                three bedrooms, 1.5 bathrooms, and a shared bath and entrance — fully
                furnished, move-in ready, and equipped for professional mid-term stays.
              </p>
              <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {SOMERSET_DETAILS.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col border-b border-brand-border py-2"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {label}
                    </dt>
                    <dd className="text-sm text-brand-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <div
                role="note"
                className="mt-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
              >
                <strong>Note:</strong> The Somerset has a shared bath and entrance. We
                disclose this clearly so you can make an informed decision before reaching
                out.
              </div>
              <div className="mt-6">
                <Link
                  href={PROPERTIES[0].href}
                  className="inline-flex min-h-12 items-center rounded-md bg-brand-button px-6 py-3 text-base font-semibold text-brand-button-text transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  Learn more about the Somerset
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CLEVELAND CONTEXT */}
      <section className="bg-brand-mist">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader title="Mid-term and corporate housing in Cleveland, Ohio" />
          <div className="mt-6 max-w-3xl space-y-4 text-base text-gray-700 sm:text-lg">
            <p>
              <Link
                href="/cleveland-ohio"
                className="font-medium text-brand-primary underline-offset-4 hover:underline"
              >
                Cleveland, Ohio
              </Link>{' '}
              is home to major hospital systems, growing business and medical districts,
              and one of the Midwest&apos;s most active professional relocation markets.
              Traveling professionals, medical staff, corporate teams, and relocating guests
              arrive in Cleveland every month needing housing that is furnished, flexible,
              and ready on arrival.
            </p>
            <p>
              Corporate Haven provides{' '}
              <Link
                href="/services/mid-term-rentals-cleveland"
                className="font-medium text-brand-primary underline-offset-4 hover:underline"
              >
                furnished mid-term rentals
              </Link>{' '}
              and corporate housing for the professionals and guests who need that kind of
              housing in this city. We are Cleveland-based, locally operated, and focused
              entirely on the mid-term housing gap — the space between a hotel stay and a
              year-long lease that most housing options ignore.
            </p>
            <p>
              Whether you are coming for a medical rotation, a corporate assignment, an
              insurance relocation, or a professional move, Cleveland&apos;s furnished
              housing is here when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <FAQSection
        eyebrow="Common questions"
        title="Common questions about furnished housing in Cleveland"
        items={FAQS}
      />
      <section aria-label="FAQ hub link" className="bg-white">
        <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-10">
          <p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-all hover:gap-2"
            >
              See all frequently asked questions
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA (Deep Teal background via bg-brand-primary on CTASection) */}
      <CTASection
        eyebrow="Ready to plan your stay?"
        title="Ready to check availability?"
        body="Tell us about your timeline, your stay type, and who is coming. We will respond with what is available for your dates."
        primaryCta={PRIMARY_CTA}
        secondaryCta={CONTACT_CTA}
      />

      {/* JSON-LD: Organization · LocalBusiness · WebSite.
          FAQPage JSON-LD is emitted by <FAQSection> above from the same FAQS array
          (character-for-character match guaranteed by structure). Do not duplicate. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
      />
    </>
  );
}
