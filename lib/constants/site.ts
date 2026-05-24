/**
 * Site-wide constants for Corporate Haven.
 *
 * Values marked TODO-PHASE-F-LAUNCH are MISSING — FLAGGED per
 * docs/site-os/corporate-haven-build-context.md §12 (Launch Blockers).
 * Do not invent values here.
 * Resolution path: docs/site-os/prompts/updates/content-update-prompt.md.
 */

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export const SITE = {
  // CONFIRMED (Phase A)
  name: 'Corporate Haven',

  // APPROVED PLACEHOLDER — owner refines before launch.
  description:
    'Corporate Haven provides fully furnished mid-term rentals and corporate housing in Cleveland, Ohio for traveling professionals, medical staff, relocating families, insurance guests, students, and contract workers who need flexible, move-in-ready housing.',

  // APPROVED PLACEHOLDER — owner explicitly confirms replacement of existing site.
  baseUrl: 'https://corporatehaven.net',

  // TODO-PHASE-F-LAUNCH: phone (display + tel formats). MISSING — FLAGGED.
  phone: null as string | null,
  phoneTel: null as string | null,

  // TODO-PHASE-F-LAUNCH: email. MISSING — FLAGGED.
  email: null as string | null,

  // MISSING — FLAGGED. Public-facing vs. service-area-only decision pending.
  // Per docs/site-os/no-fake-data-policy.md §2 do NOT emit until decision lands.
  address: null as Address | null,

  // CONFIRMED (Phase A)
  serviceArea: {
    primaryCity: 'Cleveland',
    state: 'OH',
    county: 'Cuyahoga County',
    // APPROVED PLACEHOLDER per docs/site-os/corporate-haven-build-context.md §6.
    // Owner must confirm each adjacent area before it ships as production service area.
    adjacentPlaceholders: [
      'Cleveland Heights',
      'Shaker Heights',
      'Lakewood',
      'University Circle',
      'Tremont',
      'Ohio City',
      'Beachwood',
    ],
  },

  // TODO-PHASE-F-LAUNCH: business hours. MISSING — FLAGGED.
  hours: null as Record<string, string> | null,

  // TODO-PHASE-F-LAUNCH: social profiles. MISSING — FLAGGED.
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    googleBusinessProfile: null as string | null,
  },

  // APPROVED PLACEHOLDER per docs/brand-guide.md §7 (voice direction only,
  // not visual identity).
  brandVoice: [
    'Professional',
    'Welcoming',
    'Trustworthy',
    'Locally rooted',
    'Hospitality plus professional housing infrastructure feel',
  ] as const,
} as const;

export type Site = typeof SITE;
