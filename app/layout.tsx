import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PawWalk — Book trusted dog walkers on iPhone',
  description: 'PawWalk lets urban dog owners book vetted walkers, get photo updates, and track walks with live GPS. Download on the App Store.',
  metadataBase: new URL('https://pawwalk.app'),
  openGraph: {
    title: 'PawWalk — Book trusted dog walkers on iPhone',
    description: 'Book vetted walkers, follow walks live with GPS, and get photo updates. Download PawWalk on the App Store.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PawWalk app for booking trusted dog walkers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawWalk — Book trusted dog walkers on iPhone',
    description: 'Book vetted walkers, follow walks live with GPS, and get photo updates. Download PawWalk on the App Store.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['dog walking', 'pet care', 'dog walker', 'app', 'iOS', 'trusted walkers'],
  authors: [{ name: 'PawWalk' }],
  creator: 'PawWalk',
  publisher: 'PawWalk',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF8A3D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Display:wght@400;500;600;700&family=Geist+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
