import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';
import CustomCursor from '@/components/cursor/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Preloader from '@/components/ui/Preloader';
import { profile } from '@/lib/content';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description:
    'XR developer and technical artist crafting immersive VR, AR and MR experiences — from concept to ship.',
  keywords: ['XR Developer', 'VR', 'AR', 'MR', 'Unity', 'WebXR', 'Technical Artist', 'Portfolio'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      'XR developer and technical artist crafting immersive VR, AR and MR experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body>
        <Preloader />
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
