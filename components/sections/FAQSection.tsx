import { SectionHeader } from './SectionHeader';
import { buildFaqPageJsonLd, type FaqItem } from '@/lib/constants/seo';

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly FaqItem[];
};

/**
 * Render visible FAQs and emit FAQPage JSON-LD whose acceptedAnswer.text
 * EXACTLY matches each visible answer (Schema Quality Gate requirement per
 * docs/site-os/no-fake-data-policy.md §7 and pass-fail-page-quality-gates.md).
 *
 * Same items array drives both the rendered FAQ and the schema.
 */
export function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  const jsonLd = buildFaqPageJsonLd(items);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <dl className="mt-10 space-y-4">
          {items.map((it) => (
            <details
              key={it.question}
              className="group rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-brand-ink">
                <dt className="flex-1 pr-4">{it.question}</dt>
                <span
                  aria-hidden="true"
                  className="inline-block text-2xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 text-base text-gray-700">{it.answer}</dd>
            </details>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
