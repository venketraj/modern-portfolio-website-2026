import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGradient from '@/components/effects/BackgroundGradient';
import { config } from '@/data/config';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.siteDescription,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    title: config.siteTitle,
    description: config.siteDescription,
    images: [config.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} bg-[#050508] text-white antialiased`}>
        <BackgroundGradient />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
