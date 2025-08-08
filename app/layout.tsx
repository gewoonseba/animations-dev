import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Animations.dev',
  description: 'Animation exercises and tutorials',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} mx-auto max-w-3xl p-8 py-20 font-inter font-medium md:p-20`}
      >
        {children}
      </body>
    </html>
  );
}
