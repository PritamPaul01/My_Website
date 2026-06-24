'use client';

import { techCategories, type TechCategory } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';

function TechIcon({ name }: { name: TechCategory['icon'] }) {
  switch (name) {
    case 'xr':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="3" width="8" height="18" rx="1.5" />
          <path d="M12 18h.01" />
        </svg>
      );
    case 'code':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'cube':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
        </svg>
      );
    case 'spatial':
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4.5" width="18" height="15" rx="2.25" />
          <path d="M8.25 12H21m-2.25-2.25L21 12l-2.25 2.25" />
        </svg>
      );
  }
}

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/20 via-ink to-ink" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech expertise"
          title={
            <>
              Cutting-edge <span className="text-gradient">XR technology</span> &amp; tools
            </>
          }
          subtitle="My work integrates the latest XR technologies to create immersive, interactive experiences that push the boundaries of digital interaction."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.08}>
              <TiltCard className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/[0.06]">
                <div className="mb-5 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-300 transition-colors duration-300 group-hover:text-violet-200">
                  <TechIcon name={category.icon} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-paper/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
