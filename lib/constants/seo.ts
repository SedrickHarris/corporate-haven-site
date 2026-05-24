import { SITE } from './site';

/**
 * SEO + schema helpers.
 *
 * Per docs/site-os/no-fake-data-policy.md, helpers below OMIT fields entirely
 * (rather than emitting placeholder values) when underlying data is
 * MISSING — FLAGGED. Schema must match visible content.
 */

export const TITLE_TEMPLATE = '%s | Corporate Haven';

export const DEFAULT_TITLE =
  'Corporate Haven: Mid-Term Rentals and Corporate Housing in Cleveland, OH';

export const DEFAULT_DESCRIPTION = SITE.description;

export const DEFAULT_OG = {
  siteName: SITE.name,
  locale: 'en_US',
  type: 'website' as const,
  // image: omit until OG asset lands (MISSING — FLAGGED in docs/brand-guide.md §1)
};

/**
 * Build Organization JSON-LD. Omits logo, telephone, email, address, and
 * AggregateRating until each is CONFIRMED.
 */
export function buildOrganizationJsonLd(): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.baseUrl,
    description: SITE.description,
  };

  if (SITE.phone) schema.telephone = SITE.phone;
  if (SITE.email) schema.email = SITE.email;
  // logo: omit until docs/brand-guide.md provides a real logo URL.
  // aggregateRating: never emit; verified reviews are MISSING — FLAGGED.

  return schema;
}

/**
 * Build LocalBusiness JSON-LD. Omits streetAddress (decision MISSING — FLAGGED),
 * telephone, email, openingHours, priceRange, and AggregateRating until each
 * is verified by the owner.
 */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.baseUrl,
    description: SITE.description,
    areaServed: [
      {
        '@type': 'City',
        name: SITE.serviceArea.primaryCity,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: `${SITE.serviceArea.county}, ${SITE.serviceArea.state}`,
        },
      },
    ],
  };

  if (SITE.phone) schema.telephone = SITE.phone;
  if (SITE.email) schema.email = SITE.email;
  if (SITE.hours) schema.openingHoursSpecification = SITE.hours;
  // address: omit until docs/site-os/corporate-haven-build-context.md §6 resolves.
  // priceRange: never emit; verified pricing is MISSING — FLAGGED.
  // aggregateRating: never emit; verified reviews are MISSING — FLAGGED.

  return schema;
}

/**
 * Build FAQPage JSON-LD. acceptedAnswer.text MUST exactly match the visible
 * answer per docs/site-os/no-fake-data-policy.md §7 and pass-fail-page-quality-gates.md
 * Schema Quality Gate. Pass the same items array used to render visible FAQs.
 */
export type FaqItem = { question: string; answer: string };

export function buildFaqPageJsonLd(items: readonly FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer,
      },
    })),
  };
}

/**
 * Build WebSite JSON-LD. Returns the canonical site identity block emitted on
 * the homepage per docs/site-os/outputs/homepage-step10b-build-prompt.md Part 19.
 */
export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.baseUrl,
  };
}

/**
 * Build BreadcrumbList JSON-LD. Pass items in document order from root to leaf.
 */
export type BreadcrumbItem = { name: string; href: string };

export function buildBreadcrumbJsonLd(
  items: readonly BreadcrumbItem[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: `${SITE.baseUrl}${it.href}`,
    })),
  };
}
