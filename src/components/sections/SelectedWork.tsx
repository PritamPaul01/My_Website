'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const PREVIEW_W = 320;
const PREVIEW_H = 224;

export default function SelectedWork() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left - PREVIEW_W / 2);
    y.set(e.clientY - bounds.top - PREVIEW_H / 2);
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          align="left"
          title={
            <>
              Projects that <span className="text-gradient">blur reality</span>
            </>
          }
          subtitle="A blend of AR, VR and MR work — built to feel as good as they look."
        />

        <div className="relative mt-14 hidden md:block" onMouseMove={onMove}>
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                className="pointer-events-none absolute left-0 top-0 z-20 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                style={{ x: sx, y: sy, width: PREVIEW_W, height: PREVIEW_H }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={projects[active].image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="border-y border-white/10">
            {projects.map((project, i) => (
              <li
                key={project.id}
                className="border-b border-white/10 last:border-0"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={`/projects#project-${project.id}`}
                  className="group flex items-center justify-between gap-6 py-7"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm tabular-nums text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-3xl font-bold transition-colors duration-300 lg:text-5xl',
                        active === i ? 'text-gradient' : 'text-paper',
                      )}
                    >
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted">{project.category}</span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-6 md:hidden">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects#project-${project.id}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
            >
              <div className="relative aspect-video">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center md:text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-violet-300 transition-colors hover:text-violet-200"
          >
            View all projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
