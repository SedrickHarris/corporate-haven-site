import type { Metadata } from 'next';
import Link from 'next/link';
import { NAV_PRIMARY, PRIMARY_CTA } from '@/lib/constants/routes';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-brand-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          We could not find the page you were looking for. Try one of the links
          below or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-md bg-brand-ink px-6 py-3 text-base font-semibold text-white hover:bg-brand-secondary"
          >
            Back to home
          </Link>
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex min-h-12 items-center rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-brand-ink hover:border-brand-ink"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>
        <div className="mt-12">
          <p className="text-sm font-semibold text-brand-ink">Popular pages</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {NAV_PRIMARY.filter((n) => n.href !== '/')
              .slice(0, 5)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:border-brand-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
