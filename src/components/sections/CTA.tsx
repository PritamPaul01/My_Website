import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Want to <span className="text-gradient">learn more</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          Check out my detailed project pages or get in touch to discuss how we can work together.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-gradient-to-r from-violet-500 to-accent px-7 py-3.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            View all projects
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-white/25 px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-white/10"
          >
            About me
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-white/10"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
