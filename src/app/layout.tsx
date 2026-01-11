import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import HoneycombBackground from '@/components/HoneycombBackground';
import { PHONE_NUMBER } from '@/lib/constants';
import './globals.css';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eazy Trailer Rentals',
  description: 'Reliable trailer rentals in the CSRA. Utility trailers, car haulers, and equipment trailers available for short-term rental. Same-day rentals available.',
  telephone: `+1${PHONE_NUMBER}`,
  url: 'https://eazytrailerrentals.com',
  image: 'https://eazytrailerrentals.com/promo-collage.png',
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.4735,
      longitude: -82.0105,
    },
    geoRadius: '50000',
  },
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Central Savannah River Area (CSRA)',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trailer Rentals',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Car Hauler Trailer Rental',
          description: '18ft and 20ft car hauler trailers with winch included',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Utility Trailer Rental',
          description: '14ft utility trailers for general hauling needs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Equipment Trailer Rental',
          description: 'Heavy-duty equipment trailers up to 10,000lb capacity',
        },
      },
    ],
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
    description: 'Available 24/7 by appointment',
  },
};

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eazytrailerrentals.com'),
  title: 'Eazy Trailer Rentals | CSRA',
  description: 'Reliable trailer rentals in the CSRA. Utility, equipment, and short-term trailer rentals. Call 706-619-4246.',
  keywords: [
    'trailer rental',
    'CSRA trailer rental',
    'Augusta trailer rental',
    'car hauler rental',
    'utility trailer rental',
    'equipment trailer rental',
    'trailer rental near me',
    'Evans trailer rental',
    'Martinez trailer rental',
    'Grovetown trailer rental',
  ],
  openGraph: {
    title: 'Eazy Trailer Rentals | CSRA',
    description: 'Reliable trailer rentals in the CSRA. Utility, equipment, and short-term trailer rentals. Same-day rentals available.',
    url: 'https://eazytrailerrentals.com',
    siteName: 'Eazy Trailer Rentals',
    images: [
      {
        url: '/promo-collage.png',
        width: 1200,
        height: 630,
        alt: 'Eazy Trailer Rentals - Car Haulers and Utility Trailers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eazy Trailer Rentals | CSRA',
    description: 'Reliable trailer rentals in the CSRA. Utility, equipment, and short-term trailer rentals. Same-day rentals available.',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral-950 text-white font-body antialiased selection:bg-amber-500 selection:text-black relative">
        <Navbar />
        <div className="fixed inset-0 z-0">
          <HoneycombBackground />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
