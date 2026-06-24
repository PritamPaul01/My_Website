'use client';

import { useEffect } from 'react';

/**
 * Scrolls to the URL hash target (e.g. /projects#project-2) after the route
 * mounts — covering both a fresh load and a client-side navigation from another
 * page. Waits until the preloader has released the scroll lock and the target
 * is laid out, then glides there with Lenis (with a native fallback if Lenis
 * isn't advancing). Polls via setInterval so it works even when rAF is paused.
 */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const startedAt = Date.now();

    const doScroll = (el: Element) => {
      const lenis = (window as typeof window & { __lenis?: { scrollTo: (t: Element, o?: object) => void } }).__lenis;
      const targetY = el.getBoundingClientRect().top + window.scrollY - 90;
      const before = window.scrollY;
      if (lenis) {
        lenis.scrollTo(el, { offset: -90, duration: 1.2 });
        // If Lenis didn't move (e.g. throttled rAF), guarantee the jump.
        window.setTimeout(() => {
          if (Math.abs(window.scrollY - before) < 5) window.scrollTo(0, Math.max(0, targetY));
        }, 500);
      } else {
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      }
    };

    const id = window.setInterval(() => {
      const locked = document.documentElement.style.overflow === 'hidden';
      const el = document.querySelector(hash);
      const timedOut = Date.now() - startedAt > 8000;
      if ((!locked && el) || (timedOut && el)) {
        window.clearInterval(id);
        doScroll(el);
      } else if (timedOut) {
        window.clearInterval(id);
      }
    }, 120);

    return () => window.clearInterval(id);
  }, []);

  return null;
}
