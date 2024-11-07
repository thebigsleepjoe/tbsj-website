import type { Metadata } from 'next';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'thebigsleepjoe',
  description: "thebigsleepjoe's personal website",
};

import { Navbar } from './navbar';
import { Footer } from './footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen text-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
