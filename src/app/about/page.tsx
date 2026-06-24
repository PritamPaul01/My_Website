import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/ui/CTABand';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import SkillBars from '@/components/sections/about/SkillBars';
import AboutVideo from '@/components/sections/about/AboutVideo';
import { about } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About — Pritam Kumar Pal',
  description: about.heroSubtitle,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            About <span className="text-gradient">Me</span>
          </>
        }
        subtitle={about.heroSubtitle}
        tags={about.tags}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={about.image}
              alt="Pritam Kumar Pal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold md:text-4xl">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700/15 via-ink to-ink" />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl font-bold">Skills</h3>
            <div className="mt-6">
              <SkillBars />
            </div>

            <h3 className="mt-10 text-2xl font-bold">Career Highlights</h3>
            <div className="mt-5 space-y-5">
              {about.milestones.map((milestone) => (
                <div key={milestone.title} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                  <div>
                    <p className="font-semibold">{milestone.title}</p>
                    <p className="text-sm text-muted">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AboutVideo />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Career"
            title={
              <>
                Professional <span className="text-gradient">Experience</span>
              </>
            }
            subtitle="My career journey in XR development and creative technology"
          />

          <div className="mt-14">
            {about.experiences.map((exp, i) => (
              <Reveal key={i}>
                <div className="relative border-l-2 border-violet-500/40 pb-10 pl-6 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-violet-400" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-violet-300">{exp.period}</span>
                  </div>
                  <p className="text-paper/80">{exp.company}</p>
                  <p className="text-sm text-muted">{exp.location}</p>
                  {exp.skills && <p className="mt-2 text-sm italic text-muted">Skills: {exp.skills}</p>}
                  {exp.description && <p className="mt-2 leading-relaxed text-muted">{exp.description}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Academics"
            title={
              <>
                My <span className="text-gradient">Education</span>
              </>
            }
            subtitle="My academic background and qualifications"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {about.education.map((edu, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-bold leading-snug">{edu.degree}</h3>
                  <p className="mt-2 text-sm text-muted">{edu.institution}</p>
                  <p className="mt-3 text-sm text-violet-300">{edu.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Interested in <span className="text-gradient">working together</span>?
          </>
        }
        text="I'm always open to discussing product design work or partnership opportunities."
      />
    </main>
  );
}
