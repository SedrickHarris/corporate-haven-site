import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ServiceImagePlaceholder } from '@/components/media/ServiceImagePlaceholder';
import { QuoteFormPlaceholder } from '@/components/forms/QuoteFormPlaceholder';
import { SITE } from '@/lib/constants/site';
import {
  SERVICES,
  LOCATIONS,
  PROPERTIES,
  PRIMARY_CTA,
  SECONDARY_CTA,
} from '@/lib/constants/routes';
import type { FaqItem } from '@/lib/constants/seo';

// TODO-COPY: final homepage metadata comes from
// site-os-master/prompts/individual-homepage-research-prompt.md. Current values
// are APPROVED PLACEHOLDER per docs/site-os/corporate-haven-build-context.md.
export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

// TODO-COPY: placeholder FAQ items. Final 30+ FAQ AEO hub copy comes from
// site-os-master/prompts/aeo-faq-hub-prompt.md. All answers below are written
// from CONFIRMED facts only (no invented business claims).
const PLACEHOLDER_FAQS: readonly FaqItem[] = [
  {
    question: 'What is mid-term housing?',
    answer:
      'Mid-term housing covers stays longer than a hotel and shorter than an annual lease, typically 30 days to several months, with everything you need to move in already in place.',
  },
  {
    question: 'Who books a Corporate Haven stay?',
    answer:
      'Traveling professionals, medical staff, travel nurses, relocating families, insurance relocation guests, students, interns, and contract workers who need flexible, move-in-ready housing in Cleveland.',
  },
  {
    question: 'What is included in a Corporate Haven rental?',
    answer:
      'Fully furnished living spaces, utilities, high-speed WiFi, a fully equipped kitchen, dedicated workspace, parking, cleaning services, digital lock access, and welcome essentials.',
  },
  {
    question: 'How long can I stay?',
    answer:
      'Stays are flexible and designed for the gap between hotels and traditional leases. Reach out about your timeline and we will confirm availability for your dates.',
  },
  {
    question: 'How do I check availability?',
    answer:
      'Use the Check Availability form on this site to share your dates and needs, and we will respond with what is available at the time of your inquiry.',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* HERO — two-column split layout per docs/site-os/service-business-conversion-layout.md.
          TODO-COPY: final hero copy from prompts/individual-homepage-research-prompt.md */}
      <HeroSection
        eyebrow="Cleveland, OH"
        title="Mid-term and corporate housing built for professionals"
        subtitle="Fully furnished, all-inclusive housing in Cleveland for stays that are longer than a hotel and shorter than a lease. Move-in ready when you arrive."
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
        formSlot={<QuoteFormPlaceholder />}
        layout="split"
      />

      {/* SERVICES preview grid — exercises ServiceCard + ServiceImagePlaceholder */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            eyebrow="What we offer"
            title="Housing built for the people who book it"
            description="Five core offerings shaped around the people who actually stay with us."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                name={s.name}
                description={s.shortDescription}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS preview — Cleveland is the only CONFIRMED Phase 1 location */}
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            eyebrow="Where we serve"
            title="Cleveland, Ohio"
            description="Mid-term housing in the heart of Cleveland and Cuyahoga County. Adjacent areas are being confirmed for Phase 2."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <a
                  href={loc.href}
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-ink hover:border-brand-ink"
                >
                  {loc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROPERTY — Somerset is the only CONFIRMED property today.
          Facts below are drawn verbatim from corporate-haven-build-context.md §10. */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
          <SectionHeader
            eyebrow="Featured property"
            title="The Somerset"
            description="A modern, fully furnished home in Cleveland (44108) with a dedicated workspace, shared bath and entrance, and everything you need from day one."
          />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ServiceImagePlaceholder aspect="aspect-[4/3]" />
            <div className="flex flex-col justify-center">
              <p className="font-display text-2xl font-semibold text-brand-ink">
                {PROPERTIES[0].name}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Approximately 1,836 sq. ft. &middot; 3 bedrooms (4th planned)
                &middot; 1.5 baths &middot; shared bath and entrance &middot;
                modern furnishings &middot; fully equipped kitchen &middot;
                dedicated workspace &middot; high-speed WiFi &middot; utilities
                included &middot; parking &middot; digital locks &middot;
                cleaning services &middot; welcome essentials.
              </p>
              <p className="mt-4">
                <a
                  href={PROPERTIES[0].href}
                  className="inline-flex min-h-12 items-center rounded-md bg-brand-ink px-6 py-3 text-base font-semibold text-white hover:bg-brand-secondary"
                >
                  Learn more about the Somerset
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible items and JSON-LD share the same array */}
      <FAQSection
        eyebrow="Common questions"
        title="Frequently asked questions"
        description="A few questions we hear often. The full FAQ hub launches with 30+ answers across nine categories."
        items={PLACEHOLDER_FAQS}
      />

      {/* FINAL CTA */}
      <CTASection
        eyebrow="Ready to plan your stay?"
        title="Check availability for your dates"
        body="Tell us about your timeline and who is staying. We will respond with what is available."
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
    </>
  );
}
