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
  metadataBase: new URL('https://dotlinetattu.com'),
  title: 'Dotlinetattu | Best Handpoke & Traditional Tattoo Studio in Bali',
  description: 'Experience authentic traditional and modern tattoo art in Bali, minutes from Canggu. Specializing in Balinese Handpoke, Handtapping, and custom machine tattoos by Silver Jerry.',
  icons: {
    icon: '/Icon.png',
    shortcut: '/Icon.png',
    apple: '/Icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  openGraph: {
    title: 'Dotlinetattu | Best Handpoke & Traditional Tattoo Studio in Bali',
    description: 'Experience authentic traditional and modern tattoo art in Bali, minutes from Canggu. Specializing in Balinese Handpoke, Handtapping, and custom machine tattoos by Silver Jerry.',
    type: 'website',
    siteName: 'Dotlinetattu',
    url: 'https://dotlinetattu.com',
    images: [
      {
        url: '/Icon.png',
        width: 1200,
        height: 1200,
        alt: 'Dotlinetattu sacred ornament logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dotlinetattu | Best Handpoke & Traditional Tattoo Studio in Bali',
    description: 'Experience authentic traditional and modern tattoo art in Bali, minutes from Canggu. Specializing in Balinese Handpoke, Handtapping, and custom machine tattoos by Silver Jerry.',
    images: ['/Icon.png'],
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
    canonical: 'https://dotlinetattu.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${graduatedFont.variable}`}>
      <body className="bg-background text-foreground antialiased font-graduated">
        <AudioProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}