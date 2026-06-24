'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { inspirations } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

export default function Inspirations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % inspirations.length), 5500);
    return () => clearInterval(timer);
  }, [inView, paused]);

  const current = inspirations[index];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Inspirations"
          title={
            <>
              Voices that <span className="text-gradient">shaped</span> the craft
            </>
          }
          subtitle="Wisdom from innovators who push the boundaries of interactive experiences."
        />

        <div className="relative mt-14 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <svg className="mx-auto mb-6 h-10 w-10 text-violet-500/40" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mx-auto max-w-3xl text-2xl font-light leading-relaxed md:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {inspirations.map((person, i) => (
            <button
              key={person.id}
              onClick={() => setIndex(i)}
              aria-label={person.name}
              className={cn(
                'relative h-12 w-12 overflow-hidden rounded-full border-2 transition-all duration-300',
                i === index ? 'scale-110 border-violet-400' : 'border-white/10 opacity-50 hover:opacity-100',
              )}
            >
              <Image src={person.image} alt={person.name} fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>

        <div className="mt-5 text-center">
          <p className="font-medium">{current.name}</p>
          <p className="text-sm text-muted">
            {current.role}, {current.company}
          </p>
        </div>
      </div>
    </section>
  );
}
