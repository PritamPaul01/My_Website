import { projectsPage } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function Process() {
  const { steps, toolkit } = projectsPage.process;

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/15 via-ink to-ink" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How I work"
          title={
            <>
              My Development <span className="text-gradient">Process</span>
            </>
          }
          subtitle="A systematic approach to creating immersive XR experiences from concept to completion."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20 font-bold text-violet-200">
                  {step.number}
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold">Development Toolkit</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {toolkit.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-paper/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
