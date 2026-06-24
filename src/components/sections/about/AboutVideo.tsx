'use client';

import { useEffect, useRef } from 'react';
import { about } from '@/lib/content';

/**
 * Ambient, continuously looping showreel (gif-like) — muted autoplay so it
 * plays forever without controls. A ref guarantees `muted` is set before play
 * so browsers allow autoplay reliably.
 */
export default function AboutVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, []);

  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
      <video
        ref={ref}
        src={about.video}
        className="h-full w-full bg-black object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      <span className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/40 px-3 py-1 text-xs text-paper/90 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
        Showreel
      </span>
    </div>
  );
}
