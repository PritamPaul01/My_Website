import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeroProps {
  title: ReactNode;
  subtitle: string;
  tags?: string[];
}

export default function PageHero({ title, subtitle, tags }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(167,139,250,0.16)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">{subtitle}</p>
        </Reveal>
        {tags && tags.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-2 text-sm text-paper/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
