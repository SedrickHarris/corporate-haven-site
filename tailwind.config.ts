import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // APPROVED PLACEHOLDER brand palette per docs/brand-guide.md §0
        // (2026-05-23). CSS variable values live in app/globals.css. Values
        // remain APPROVED PLACEHOLDER until owner ships final brand package.
        brand: {
          // Text + ink
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',

          // Brand accent (Corporate Haven Deep Teal)
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          'primary-hover': 'rgb(var(--brand-primary-hover) / <alpha-value>)',

          // Legacy alias — maps to primary-hover (Deep Teal) so existing
          // hover:bg-brand-secondary class names render with the approved color.
          secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',

          // Warm + neutral surfaces
          warm: 'rgb(var(--brand-warm) / <alpha-value>)',
          mist: 'rgb(var(--brand-mist) / <alpha-value>)',
          'soft-gray': 'rgb(var(--brand-soft-gray) / <alpha-value>)',
          border: 'rgb(var(--brand-border) / <alpha-value>)',

          // Legacy alias — maps to warm (Warm White) so existing
          // bg-brand-surface class names render with the approved color.
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',

          // Logo + accent extras
          'logo-teal': 'rgb(var(--brand-logo-teal) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',

          // CTA button
          button: 'rgb(var(--brand-button) / <alpha-value>)',
          'button-text': 'rgb(var(--brand-button-text) / <alpha-value>)',
        },
      },
      fontFamily: {
        // TODO-FONT: typography direction APPROVED PLACEHOLDER per docs/brand-guide.md §0
        // (sans: Source Sans 3 or Inter; display: Manrope, Poppins, or Montserrat).
        // Self-hosting + font loading is a separate batch; system fallbacks below
        // until owner confirms final fonts.
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
