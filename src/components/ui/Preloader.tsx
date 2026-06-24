'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const R = 54;
const CIRCUMFERENCE = 2 * Math.PI * R;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-screen loader shown on first load / reload. The ring is driven by real
 * signals — the ratio of <img> resources that have finished decoding plus a
 * gentle time floor — and is held below 100% until the window `load` event
 * actually fires, so the circle genuinely tracks the page's assets rather than
 * a fixed timer. Mounted in the root layout, which persists across client-side
 * route changes, so it only runs on a true page load, not on nav.
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const valueRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN_MS = reduce ? 200 : 600;
    const start = performance.now();

    let loaded = document.readyState === 'complete';
    const onLoad = () => {
      loaded = true;
    };
    if (!loaded) window.addEventListener('load', onLoad, { once: true });

    // Lock scroll while the curtain is up.
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const imageRatio = () => {
      const imgs = Array.from(document.images);
      if (imgs.length === 0) return 1;
      const done = imgs.filter((img) => img.complete && img.naturalWidth > 0).length;
      return done / imgs.length;
    };

    const finish = () => {
      setProgress(100);
      document.documentElement.style.overflow = prevOverflow;
      setTimeout(() => setHidden(true), 280);
    };

    // Hard failsafe: never leave the curtain up (and scroll locked) for more
    // than 6s, regardless of load events or a throttled rAF.
    const failsafe = window.setTimeout(finish, 6000);

    let raf = 0;
    const tick = () => {
      // Self-heal if the load event fired before the listener attached.
      if (!loaded && document.readyState === 'complete') loaded = true;

      const elapsed = performance.now() - start;
      // Real partial progress from decoded images, blended with a slow time
      // floor so a stalled network still feels alive. Capped at 90% until the
      // browser's own load event confirms everything critical is in.
      const floor = Math.min(0.85, elapsed / 1600);
      const real = Math.max(floor, imageRatio() * 0.9);
      const target = loaded ? 100 : Math.min(90, real * 100);

      valueRef.current += (target - valueRef.current) * 0.09;
      const next = valueRef.current;
      setProgress(next);

      if (loaded && next >= 99.4 && elapsed >= MIN_MS) {
        window.clearTimeout(failsafe);
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
      window.removeEventListener('load', onLoad);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, []);

  const rounded = Math.min(100, Math.round(progress));
  const offset = CIRCUMFERENCE * (1 - Math.min(100, progress) / 100);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-ink"
        >
          {/* ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative flex flex-col items-center"
          >
            <div className="relative h-[140px] w-[140px]">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r={R}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="3"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={R}
                  fill="none"
                  stroke="url(#preloaderGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                />
                <defs>
                  <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff5a64" />
                    <stop offset="100%" stopColor="#c0152a" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold tabular-nums tracking-tight text-paper">
                  {rounded}
                  <span className="text-sm text-muted">%</span>
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm font-semibold tracking-[0.35em] text-paper">
              P<span className="text-gradient">RITAM</span>
            </p>
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.3em] text-muted">
              Loading experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
