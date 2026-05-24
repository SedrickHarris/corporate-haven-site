/**
 * Canonical route + nav inventory for Corporate Haven Phase 1.
 *
 * Source of truth: docs/site-os/inputs/page-list.md
 * Do not add routes here without an explicit Site OS gate; updates require
 * docs/site-os/prompts/updates/content-update-prompt.md or equivalent.
 */

export type Service = {
  slug: string;
  name: string;
  href: string;
  shortDescription: string;
  audienceCritical?: boolean;
};

export const SERVICES: readonly Service[] = [
  {
    slug: 'mid-term-rentals',
    name: 'Mid-Term Rentals',
    href: '/services/mid-term-rentals',
    shortDescription:
      'Fully furnished, all-inclusive housing for stays between a hotel and an annual lease.',
  },
  {
    slug: 'corporate-housing',
    name: 'Corporate Housing',
    href: '/services/corporate-housing',
    shortDescription:
      'Move-in-ready housing for corporate assignments, relocations, and project teams.',
  },
  {
    slug: 'travel-nurse-housing',
    name: 'Travel Nurse Housing',
    href: '/services/travel-nurse-housing',
    shortDescription:
      'Flexible housing close to Cleveland major hospital systems for travel nurses on assignment.',
    audienceCritical: true,
  },
  {
    slug: 'medical-professional-housing',
    name: 'Medical Professional Housing',
    href: '/services/medical-professional-housing',
    shortDescription:
      'Professional-grade housing for resident physicians, healthcare support staff, and medical professionals.',
    audienceCritical: true,
  },
  {
    slug: 'insurance-relocation-housing',
    name: 'Insurance Relocation Housing',
    href: '/services/insurance-relocation-housing',
    shortDescription:
      'Move-in-ready housing for displaced guests and insurance-paid relocations.',
    audienceCritical: true,
  },
] as const;

export type Location = {
  slug: string;
  name: string;
  href: string;
  confirmed: boolean;
};

// Cleveland is the only CONFIRMED Phase 1 location. Adjacent areas (Cleveland
// Heights, Shaker Heights, Lakewood, University Circle, Tremont, Ohio City,
// Beachwood) are APPROVED PLACEHOLDER per corporate-haven-build-context.md §6
// and must not render as production location links until owner-confirmed.
export const LOCATIONS: readonly Location[] = [
  {
    slug: 'cleveland-ohio',
    name: 'Cleveland, OH',
    href: '/cleveland-ohio',
    confirmed: true,
  },
] as const;

export type Property = {
  slug: string;
  name: string;
  href: string;
  zip: string;
  status: 'available' | 'coming-soon';
};

// Somerset is the only CONFIRMED property today. Do not add fake additional
// properties per docs/site-os/no-fake-data-policy.md §10.
export const PROPERTIES: readonly Property[] = [
  {
    slug: 'somerset',
    name: 'The Somerset',
    href: '/properties/somerset',
    zip: '44108',
    status: 'available',
  },
] as const;

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_PRIMARY: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Properties', href: '/properties' },
  { label: 'Cleveland', href: '/cleveland-ohio' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const NAV_FOOTER_SERVICES = SERVICES.map((s) => ({
  label: s.name,
  href: s.href,
}));

export const NAV_FOOTER_COMPANY: readonly NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Check Availability', href: '/check-availability' },
  { label: 'Properties', href: '/properties' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const NAV_FOOTER_LEGAL: readonly NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
] as const;

export const PRIMARY_CTA = {
  label: 'Check Availability',
  href: '/check-availability',
} as const;

export const SECONDARY_CTA = {
  label: 'View Available Rentals',
  href: '/properties',
} as const;
