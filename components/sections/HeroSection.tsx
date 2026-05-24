import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Cta = { label: string; href: string };

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: readonly string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  formSlot?: ReactNode;
  layout?: 'single' | 'split';
};

/**
 * Hero section implementing the two-column conversion layout standard
 * (docs/site-os/service-business-conversion-layout.md). When layout='split'
 * and formSlot is provided, content sits left and the form sits right on
 * desktop; mobile stacks content first then form.
 */
export function HeroSection({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  formSlot,
  layout = 'single',
}: HeroSectionProps) {
  const isSplit = layout === 'split' && !!formSlot;

  return (
    <section className="relative overflow-hidden bg-brand-surface">
      <div className="relative mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28">
        <div
          className={cn(
            'grid items-start gap-10',
            isSplit
              ? 'grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] lg:gap-14 xl:gap-20'
              : 'grid-cols-1',
          )}
        >
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-lg text-gray-600 sm:text-xl">
                {subtitle}
              </p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-2 text-base text-gray-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-primary"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-12 items-center rounded-md bg-brand-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-brand-ink transition-colors hover:border-brand-ink"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {isSplit && (
            <div className="w-full lg:max-w-xl lg:justify-self-end">
              {formSlot}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
