import type { ReactNode } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

interface CTABandProps {
  title: ReactNode;
  text: string;
  ctaLabel?: string;
  href?: string;
}

export default function CTABand({ title, text, ctaLabel = 'Get in touch', href = '/contact' }: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[110px]" />
      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-4 text-muted">{text}</p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-accent px-7 py-3.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Reveal>
    </section>
  );
}
