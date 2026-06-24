'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { hero, profile } from '@/lib/content';
import SplineRobot from '@/components/three/SplineRobot';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yRobot = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gx = useSpring(mx, { stiffness: 50, damping: 20 });
  const gy = useSpring(my, { stiffness: 50, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    mx.set((e.clientX / window.innerWidth - 0.5) * 40);
    my.set((e.clientY / window.innerHeight - 0.5) * 40);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(167,139,250,0.16)_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />

      <motion.div
        style={{ x: gx, y: gy }}
        className="pointer-events-none absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-[90px]"
      />
      <motion.div
        style={{ x: gy, y: gx }}
        className="pointer-events-none absolute bottom-[-10%] left-[10%] h-72 w-72 rounded-full bg-accent/15 blur-[80px]"
      />

      <motion.div style={{ y: yRobot }} className="absolute right-0 top-0 hidden h-full w-[55%] md:block">
        <SplineRobot url={profile.splineUrl} />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <motion.div style={{ y: yText, opacity }} className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            {hero.badge}
          </motion.span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="block"
            >
              {hero.titleLead}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="block"
            >
              <span className="text-gradient">{hero.titleAccent}</span> {hero.titleTrail}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-paper/80"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs text-paper/80"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full bg-gradient-to-r from-violet-500 to-accent px-7 py-3.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/25 px-7 py-3.5 font-medium text-paper transition-colors duration-300 hover:bg-white/10"
            >
              About me
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex h-9 w-5 justify-center rounded-full border-2 border-white/25 pt-1.5">
          <div className="h-2 w-1 animate-wheel rounded-full bg-violet-400" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Scroll</span>
      </div>
    </section>
  );
}
