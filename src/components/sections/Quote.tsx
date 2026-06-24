import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { quote } from '@/lib/content';

export default function Quote() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={quote.image}
            alt={quote.author}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-2xl font-light leading-relaxed md:text-3xl lg:text-4xl">
            &ldquo;Even if it&apos;s <span className="text-gradient">difficult</span> and{' '}
            <span className="text-gradient">time consuming</span>, it doesn&apos;t matter, as long as
            the <span className="text-gradient">process is enjoyable</span>&rdquo;
          </p>
          <div className="mt-6 text-right">
            <p className="text-lg font-medium text-violet-300">— {quote.author}</p>
            <p className="text-muted">{quote.role}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
