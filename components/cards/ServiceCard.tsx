import Link from 'next/link';
import { ServiceImagePlaceholder } from '../media/ServiceImagePlaceholder';

type ServiceCardProps = {
  name: string;
  description: string;
  href: string;
};

/**
 * Service card per docs/site-os/service-card-image-placeholder-standard.md.
 * Image placeholder at the top, then service title (H3), description, and
 * a learn-more affordance. The whole card is a single Link.
 */
export function ServiceCard({ name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
    >
      <ServiceImagePlaceholder />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-brand-ink">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600">{description}</p>
        <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-all group-hover:gap-2">
          Learn more
          <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </Link>
  );
}
