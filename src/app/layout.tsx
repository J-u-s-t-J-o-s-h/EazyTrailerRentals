import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import navbar from '@/components/Navbar';
import Navbar from '@/components/Navbar';
import './globals.css';

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
  title: 'Eazy Trailer Rentals | CSRA',
  description: 'Reliable trailer rentals in the CSRA. Utility, equipment, and short-term trailer rentals. Call 706-619-4246.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="bg-neutral-950 text-white font-body antialiased selection:bg-amber-500 selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
