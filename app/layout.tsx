import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/constants/site';
import {
  TITLE_TEMPLATE,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG,
} from '@/lib/constants/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  openGraph: {
    siteName: DEFAULT_OG.siteName,
    locale: DEFAULT_OG.locale,
    type: DEFAULT_OG.type,
    // OG image omitted until brand asset lands (docs/brand-guide.md §1).
  },
  // JSON-LD Organization / LocalBusiness schema is emitted from individual
  // high-value pages (homepage, /about, /cleveland-ohio), not the root layout.
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
