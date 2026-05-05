import '../src/index.css';
import SiteLayoutClient from '@/components/SiteLayoutClient';
import { ModalProvider } from '@/contexts/ModalContext';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const siteUrl = 'https://www.webtantu.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'WebTantu | Build, Grow & Automate Online',
    template: '%s | WebTantu',
  },
  description:
    'WebTantu builds high-performance websites, SEO systems, AI automation, and growth systems for businesses ready to scale online.',
  keywords: ['Website Development', 'SEO Services', 'AI Automation', 'Growth Systems', 'Web Design', 'Digital Agency'],
  authors: [{ name: 'WebTantu' }],
  creator: 'WebTantu',
  publisher: 'WebTantu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'WebTantu',
    title: 'WebTantu | Build, Grow & Automate Online',
    description:
      'High-performance websites, SEO systems, AI automation, and growth systems for modern businesses.',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebTantu | Build, Grow & Automate Online',
    description: 'High-performance websites, SEO systems, AI automation, and growth systems for modern businesses.',
    creator: '@webtantu',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} bg-surface text-on-surface font-body selection:bg-primary-container selection:text-white`}>
        <ModalProvider>
          <SiteLayoutClient>{children}</SiteLayoutClient>
        </ModalProvider>
      </body>
    </html>
  );
}
