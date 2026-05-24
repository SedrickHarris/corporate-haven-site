import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Cta = { label: string; href: string };

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  formSlot?: ReactNode;
};

/**
 * Final CTA section. Single primary CTA per docs/site-os/service-business-conversion-layout.md.
 * Optional formSlot promotes it to a two-column conversion layout (content left, form right).
 */
export function CTASection({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  formSlot,
}: CTASectionProps) {
  const isSplit = !!formSlot;

  return (
    <section className="bg-brand-ink">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div
          className={cn(
            'grid items-center gap-10',
            isSplit &&
              'lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.75fr)] lg:gap-14',
          )}
        >
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            {body && (
              <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
                {body}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-12 items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-brand-ink transition-colors hover:bg-gray-100"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-12 items-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white"
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
