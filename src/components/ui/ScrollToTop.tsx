'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Accessible "back to top" button — fixed bottom-right on every page, fades in
 * once the user has scrolled down, and glides back to the top using Lenis when
 * available (falling back to native smooth scroll).
 */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Instant response via the scroll event, plus a low-cost interval fallback
    // so the button still toggles when scrolling is driven by Lenis or the tab
    // is throttled (rAF paused). State only updates on threshold crossings.
    let shown = false;
    const check = () => {
      const past = window.scrollY > 600;
      if (past !== shown) {
        shown = past;
        setShow(past);
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    const id = window.setInterval(check, 300);
    return () => {
      window.removeEventListener('scroll', check);
      window.clearInterval(id);
    };
  }, []);

  const toTop = () => {
    const lenis = (window as typeof window & { __lenis?: { scrollTo: (t: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-500 to-accent text-white shadow-lg shadow-violet-500/30 backdrop-blur-sm md:bottom-8 md:right-8"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
