import Image from 'next/image';
import { projectsPage } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const groups = [
  {
    title: 'In Progress',
    items: projectsPage.roadmap.inProgress,
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Future Updates',
    items: projectsPage.roadmap.future,
    path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Dream Project',
    items: projectsPage.roadmap.dream,
    path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What's next"
          title={
            <>
              My Future <span className="text-gradient">Roadmap</span>
            </>
          }
        />

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-10">
            {groups.map((group) => (
              <Reveal key={group.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={group.path} />
                    </svg>
                  </span>
                  <h3 className="text-2xl font-bold">{group.title}</h3>
                </div>
                <div className="mt-4 space-y-4 pl-12">
                  {group.items.map((item) => (
                    <p key={item.label} className="leading-relaxed">
                      <span className="font-semibold text-violet-300">{item.label}: </span>
                      <span className="text-muted">{item.text}</span>
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 md:sticky md:top-24">
            <Image
              src={projectsPage.roadmap.image}
              alt="Future projects visualization"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
