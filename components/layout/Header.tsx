import Link from 'next/link';
import { SITE } from '@/lib/constants/site';
import { NAV_PRIMARY, PRIMARY_CTA } from '@/lib/constants/routes';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        {/* TODO-BRAND: replace text wordmark with the owner's existing Corporate Haven logo
            (approved direction per docs/brand-guide.md §0). Awaiting owner-supplied SVG asset
            per docs/brand-guide.md §1. Do not invent a logo. */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-brand-ink">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_PRIMARY.filter((n) => n.href !== '/').map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Phone CTA renders only when SITE.phone is set. Currently null per MISSING — FLAGGED. */}
          {SITE.phone && SITE.phoneTel && (
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden text-sm font-medium text-brand-ink sm:inline"
            >
              {SITE.phone}
            </a>
          )}
          <Link
            href={PRIMARY_CTA.href}
            className={cn(
              'inline-flex min-h-11 items-center rounded-md bg-brand-ink px-4 py-2 text-sm font-semibold text-white',
              'transition-colors hover:bg-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
            )}
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
