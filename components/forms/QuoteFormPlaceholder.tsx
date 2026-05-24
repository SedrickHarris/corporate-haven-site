/**
 * Placeholder lead-capture form.
 *
 * Does NOT submit anywhere. The leasing-survey form vendor is MISSING — FLAGGED
 * per docs/site-os/corporate-haven-build-context.md §12 (launch blocker 6).
 * When vendor + endpoint URL land, replace this component with the live form
 * via docs/site-os/prompts/updates/content-update-prompt.md.
 *
 * Inputs are disabled, the button is type=button with aria-disabled, and a
 * visible status notice tells the user the form is non-submitting. Safe
 * placeholder per docs/site-os/no-fake-data-policy.md.
 */

type FormFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel';
  autoComplete?: string;
};

function FormField({ id, label, type, autoComplete }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        disabled
        aria-disabled="true"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-400"
      />
    </div>
  );
}

export function QuoteFormPlaceholder() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <p className="font-display text-xl font-bold text-brand-ink">
          Check Availability
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Tell us a little about your housing needs and we will get back to you.
        </p>
      </div>

      <div
        role="status"
        className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900"
      >
        Form vendor pending. This is a non-submitting placeholder; no data is
        captured.
      </div>

      <div className="mt-6 space-y-4">
        <FormField id="qf-name" label="Full name" type="text" autoComplete="name" />
        <FormField id="qf-email" label="Email" type="email" autoComplete="email" />
        <FormField id="qf-phone" label="Phone" type="tel" autoComplete="tel" />
        <FormField
          id="qf-dates"
          label="Move-in and move-out (approximate)"
          type="text"
        />
        <div>
          <label
            htmlFor="qf-message"
            className="block text-sm font-medium text-brand-ink"
          >
            What kind of stay are you planning?
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={3}
            disabled
            aria-disabled="true"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-400"
            placeholder="Tell us about your timeline, who is staying, and any preferences."
          />
        </div>
      </div>

      <button
        type="button"
        disabled
        aria-disabled="true"
        className="mt-6 inline-flex w-full min-h-12 items-center justify-center rounded-md bg-brand-ink/50 px-6 py-3 text-base font-semibold text-white"
      >
        Submit (disabled, vendor pending)
      </button>
    </div>
  );
}
