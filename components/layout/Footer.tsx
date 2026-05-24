import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import {
  NAV_FOOTER_COMPANY,
  NAV_FOOTER_HOUSING,
  NAV_FOOTER_GET_STARTED,
  NAV_FOOTER_LEGAL,
} from '@/lib/constants/routes';

/**
 * Footer per docs/site-os/corporate-haven-build-context.md §17.7.
 *
 * Five priority sections:
 *   - Company  (About, Contact)
 *   - Housing  (Services hub + services + Properties + Cleveland)
 *   - Get Started  (Check Availability, FAQ)
 *   - Contact  (city/state, email visible — phone/address omitted while MISSING — FLAGGED)
 *   - Legal  (Privacy, Terms — bottom row alongside copyright)
 *
 * Tenant Portal and Tenant Requests are deliberately omitted from prominent
 * footer placement per §17.6. If owner explicitly approves a low-priority
 * "Existing Tenants" section in the future, source from EXISTING_TENANT_LINKS
 * in routes.ts.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="font-display text-lg font-bold text-brand-ink">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm text-gray-600">{SITE.description}</p>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-brand-ink">Company</p>
            <ul className="mt-3 space-y-2">
              {NAV_FOOTER_COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Housing */}
          <div>
            <p className="text-sm font-semibold text-brand-ink">Housing</p>
            <ul className="mt-3 space-y-2">
              {NAV_FOOTER_HOUSING.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <p className="text-sm font-semibold text-brand-ink">Get Started</p>
            <ul className="mt-3 space-y-2">
              {NAV_FOOTER_GET_STARTED.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-brand-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                {SITE.serviceArea.primaryCity}, {SITE.serviceArea.state}
              </li>
              {/* Email: display = SITE.email, href = SITE.emailMailto (different inbox subdomain). */}
              {SITE.email && SITE.emailMailto && (
                <li>
                  <a
                    href={SITE.emailMailto}
                    className="hover:text-brand-ink"
                  >
                    {SITE.email}
                  </a>
                </li>
              )}
              {/* Phone renders only if SITE.phone is set. Currently null per MISSING — FLAGGED. */}
              {SITE.phone && SITE.phoneTel && (
                <li>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="hover:text-brand-ink"
                  >
                    {SITE.phone}
                  </a>
                </li>
              )}
              {/* Address omitted entirely while MISSING — FLAGGED. */}
              {SITE.address && (
                <li>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-gray-500">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {NAV_FOOTER_LEGAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-gray-500 hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
