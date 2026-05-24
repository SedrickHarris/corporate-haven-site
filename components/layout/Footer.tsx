import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import {
  NAV_FOOTER_SERVICES,
  NAV_FOOTER_COMPANY,
  NAV_FOOTER_LEGAL,
} from '@/lib/constants/routes';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-brand-ink">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm text-gray-600">{SITE.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Services</p>
            <ul className="mt-3 space-y-2">
              {NAV_FOOTER_SERVICES.map((item) => (
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

          <div>
            <p className="text-sm font-semibold text-brand-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>
                {SITE.serviceArea.primaryCity}, {SITE.serviceArea.state}
              </li>
              {/* Phone / email / address render only when set. All null per MISSING — FLAGGED. */}
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
              {SITE.email && (
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-brand-ink"
                  >
                    {SITE.email}
                  </a>
                </li>
              )}
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
