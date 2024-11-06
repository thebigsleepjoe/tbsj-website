import type { Metadata } from 'next';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Joe',
  description: "Joe's personal/portfolio website",
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
      <body className='min-h-screen'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
