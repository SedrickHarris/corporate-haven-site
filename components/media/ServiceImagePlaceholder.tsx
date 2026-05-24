import { cn } from '@/lib/utils';

type AspectRatio = 'aspect-[16/10]' | 'aspect-[4/3]' | 'aspect-[3/2]';

type ServiceImagePlaceholderProps = {
  /** Aspect ratio class. Default 16/10 per docs/site-os/service-card-image-placeholder-standard.md. */
  aspect?: AspectRatio;
  className?: string;
};

/**
 * Service-card image placeholder per docs/site-os/service-card-image-placeholder-standard.md.
 *
 * No text, no fake photo, no AI-generated imagery, no stock photos. A
 * designed neutral surface that ships ready and is replaced by owner-supplied
 * photography when docs/brand-guide.md §4 transitions from MISSING — FLAGGED
 * to CONFIRMED.
 */
export function ServiceImagePlaceholder({
  aspect = 'aspect-[16/10]',
  className,
}: ServiceImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        aspect,
        'relative w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200',
        className,
      )}
    >
      {/* TODO: Replace with owner-supplied photo. Maintain aspect ratio. */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.4) 0, transparent 40%)',
        }}
      />
    </div>
  );
}
