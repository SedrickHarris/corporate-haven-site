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

// SERVICES is the 6-hub homepage card array per
// docs/site-os/corporate-haven-build-list.md §D "Approved Homepage Hub Cards"
// (Build List Expansion and Launch-to-Scale Phase Plan, 2026-05-24).
//
// Hubs are conversion pathways and topical roots, not individual service cards.
// Each hub will link to relevant Phase 3 supporting service pages (e.g. the
// healthcare hub links to /services/travel-nurse-housing-cleveland and
// /services/medical-professional-housing-cleveland once those Phase 3 pages
// are built).
//
// Slugs follow the Cleveland-specific SEO pattern locked in
// docs/site-os/corporate-haven-build-context.md §18. Do not revert to short
// slugs as final page targets.
export const SERVICES: readonly Service[] = [
  {
    slug: 'mid-term-rentals-cleveland',
    name: 'Mid-Term Rentals',
    href: '/services/mid-term-rentals-cleveland',
    shortDescription:
      'Fully furnished, all-inclusive housing for stays longer than a hotel and shorter than a yearly lease.',
  },
  {
    slug: 'corporate-housing-cleveland',
    name: 'Corporate Housing',
    href: '/services/corporate-housing-cleveland',
    shortDescription:
      'Move-in-ready furnished housing for business assignments, project teams, contractors, and relocating professionals in Cleveland.',
  },
  {
    slug: 'healthcare-housing-cleveland',
    name: 'Travel Nurse & Medical Housing',
    href: '/services/healthcare-housing-cleveland',
    shortDescription:
      'Flexible furnished housing for travel nurses, healthcare workers, resident physicians, and medical professionals on assignment in Cleveland.',
    audienceCritical: true,
  },
  {
    slug: 'student-housing-cleveland',
    name: 'Student & Medical Student Housing',
    href: '/services/student-housing-cleveland',
    shortDescription:
      'Furnished housing for students, interns, medical students, and program-based stays that do not fit a hotel or annual lease.',
    audienceCritical: true,
  },
  {
    slug: 'insurance-relocation-housing-cleveland',
    name: 'Insurance Relocation Housing',
    href: '/services/insurance-relocation-housing-cleveland',
    shortDescription:
      'Furnished housing for guests displaced from their primary home who need a stable, move-in-ready place to stay.',
    audienceCritical: true,
  },
  {
    slug: 'temporary-family-housing-cleveland',
    name: 'Family & Transitional Housing',
    href: '/services/temporary-family-housing-cleveland',
    shortDescription:
      'Flexible furnished housing for relocating families, families in transition, renovations, life changes, and temporary housing needs.',
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

// Approved Primary Navigation per docs/site-os/corporate-haven-build-context.md §17.3.
// Tenant Portal, Tenant Requests, and Leasing Survey are deliberately excluded —
// they would create unwanted requests from non-tenants and dilute the conversion
// funnel. Do NOT add them to NAV_PRIMARY without owner-approved decision update.
export const NAV_PRIMARY: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Properties', href: '/properties' },
  { label: 'Cleveland', href: '/cleveland-ohio' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

// Footer nav per docs/site-os/corporate-haven-build-context.md §17.7.
// Five priority columns: Company, Housing, Get Started, Contact (rendered from
// SITE constants, not a NAV list), Legal (bottom row). Tenant Portal and
// Tenant Requests are deliberately omitted from prominent footer placement
// per §17.6 — they may only appear in a future low-priority "Existing Tenants"
// section if and when owner explicitly approves.

export const NAV_FOOTER_COMPANY: readonly NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const NAV_FOOTER_HOUSING: readonly NavItem[] = [
  { label: 'All Services', href: '/services' },
  ...SERVICES.map((s): NavItem => ({ label: s.name, href: s.href })),
  { label: 'All Properties', href: '/properties' },
  { label: 'Cleveland, OH', href: '/cleveland-ohio' },
];

export const NAV_FOOTER_GET_STARTED: readonly NavItem[] = [
  { label: 'Check Availability', href: '/check-availability' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const NAV_FOOTER_LEGAL: readonly NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
] as const;

// Reserved for future low-priority "Existing Tenants" footer section.
// Only render after explicit owner approval per §17.6. Currently empty.
export const EXISTING_TENANT_LINKS: readonly NavItem[] = [
  // { label: 'Tenant Portal', href: '/tenant-portal' },
  // { label: 'Tenant Requests', href: '/tenant-requests' },
] as const;

export const PRIMARY_CTA = {
  label: 'Check Availability',
  href: '/check-availability',
} as const;

export const SECONDARY_CTA = {
  label: 'View Available Rentals',
  href: '/properties',
} as const;
