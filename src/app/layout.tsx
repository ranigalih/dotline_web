import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AudioProvider } from '@/components/providers/audio-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const graduatedFont = localFont({
  src: './fonts/Graduate-Regular.ttf',
  variable: '--font-graduated',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dotlinetattuhandpokebali.com'),
  title: 'Premium Tattoo Studio Bali | Dotlinetattu Handpoke & Traditional Ink',
  description: 'Experience premium handpoke, traditional Balinese handtapping, and modern custom tattoos at Dotlinetattu in Canggu, Ubud, Uluwatu, and Denpasar, Bali. Expert traditional tattoo artist Silver Jerry brings authentic cultural tattoo art to life.',
  keywords: ['tattoo bali', 'handpoke tattoo', 'balinese tattoo', 'traditional handtapping', 'premium tattoo studio', 'canggu tattoo', 'bali tattoo artist', 'custom tattoo'],
  icons: {
    icon: '/favicon-dark.png',
    shortcut: '/favicon-dark.png',
    apple: '/favicon-dark.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Premium Tattoo Studio Bali | Dotlinetattu Handpoke & Traditional Ink',
    description: 'Experience premium handpoke, traditional Balinese handtapping, and modern custom tattoos at Dotlinetattu in Canggu, Ubud, Uluwatu, and Denpasar, Bali.',
    type: 'website',
    siteName: 'Dotlinetattu',
    url: 'https://dotlinetattuhandpokebali.com',
    images: [
      {
        url: '/favicon-dark.png',
        width: 1200,
        height: 1200,
        alt: 'Dotlinetattu Sacred Ornament Logo - Premium Tattoo Studio Bali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Tattoo Studio Bali | Dotlinetattu Handpoke & Traditional Ink',
    description: 'Experience premium handpoke, traditional Balinese handtapping, and modern custom tattoos at Dotlinetattu in Canggu, Ubud, Uluwatu, and Denpasar, Bali.',
    images: ['/favicon-dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://dotlinetattuhandpokebali.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${graduatedFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dotlinetattu Studio Bali',
              image: 'https://dotlinetattuhandpokebali.com/Icon.png',
              description: 'Premium handpoke and traditional Balinese tattoo studio in Bali',
              url: 'https://dotlinetattuhandpokebali.com',
              telephone: '+62-8XX-XXXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'North Kuta, Bali',
                addressLocality: 'Bali',
                addressCountry: 'ID'
              },
              areaServed: ['Canggu', 'Ubud', 'Uluwatu', 'Denpasar', 'Bali'],
              priceRange: '$$',
              sameAs: [
                'https://www.instagram.com/dotlinetattu',
              ]
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-graduated">
        <AudioProvider>
          <Navbar />
          <main className="min-h-screen pt-24 lg:pt-0">
            {children}
          </main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}