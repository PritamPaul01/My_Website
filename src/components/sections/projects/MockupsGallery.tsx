'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsPage } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function MockupsGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Design"
          title={
            <>
              UI <span className="text-gradient">Mockups</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectsPage.mockups.map((mockup, i) => (
            <Reveal key={mockup.title} delay={i * 0.06}>
              <button onClick={() => setSelected(mockup.image)} className="group block w-full text-left">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={mockup.image}
                    alt={mockup.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute inset-0 bg-violet-600/0 transition-colors duration-300 group-hover:bg-violet-600/15" />
                </div>
                <h3 className="mt-3 font-bold text-violet-300">{mockup.title}</h3>
                <p className="text-sm text-muted">{mockup.caption}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/90 p-6 backdrop-blur"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              alt="Enlarged mockup"
              className="max-h-[88vh] max-w-full rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            />
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-paper transition-colors hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
