'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImmersiveBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.62, 1.04, 1.22]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [64, 18]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.18, 1.0]);
  const textOpacity = useTransform(scrollYProgress, [0.28, 0.46, 0.68, 0.84], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.28, 0.84], [40, -40]);

  return (
    <section ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative h-[78vh] w-[88vw] max-w-5xl overflow-hidden border border-violet-500/25"
        >
          {/* Cosmic gradient background — parallax scale on scroll */}
          <motion.div style={{ scale: bgScale }} className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 85% 65% at 15% 55%, rgba(224, 30, 48, 0.55) 0%, transparent 65%),
                  radial-gradient(ellipse 60% 55% at 88% 12%, rgba(255, 74, 61, 0.42) 0%, transparent 55%),
                  radial-gradient(ellipse 70% 65% at 62% 88%, rgba(140, 15, 24, 0.62) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 45% at 48% 28%, rgba(255, 90, 100, 0.28) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 40% at 75% 60%, rgba(200, 20, 40, 0.22) 0%, transparent 50%),
                  linear-gradient(145deg, #0c0506 0%, #1c0709 30%, #160506 60%, #0a0405 100%)
                `,
              }}
            />
            {/* Holographic grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,70,80,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,70,80,1) 1px, transparent 1px)
                `,
                backgroundSize: '56px 56px',
              }}
            />
            {/* Faint star dots via radial repeating pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,180,180,0.8) 1px, transparent 1px)`,
                backgroundSize: '90px 90px',
                backgroundPosition: '0 0, 45px 45px',
              }}
            />
          </motion.div>

          {/* Vignette — soft, not heavy */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink/30" />

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">Step inside</p>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Experiences you don&apos;t just see — you <span className="text-gradient">inhabit</span>.
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
