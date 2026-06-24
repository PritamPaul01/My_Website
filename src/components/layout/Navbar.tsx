'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, profile } from '@/lib/content';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className={cn('mx-auto max-w-6xl px-4 transition-all duration-500', scrolled ? 'py-3' : 'py-5')}>
        <div
          className={cn(
            'flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500',
            scrolled
              ? 'border-violet-500/20 bg-ink-800/70 backdrop-blur-md'
              : 'border-transparent bg-transparent',
          )}
        >
          <Link href="/" className="text-xl font-bold tracking-tight" aria-label="Home">
            <span className="text-violet-400">{profile.firstName.charAt(0)}</span>
            {profile.firstName.slice(1)}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={cn(
                    'relative px-4 py-2 text-sm transition-colors',
                    active ? 'text-paper' : 'text-muted hover:text-paper',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-violet-500/30 bg-violet-500/15"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block h-0.5 w-6 bg-paper" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-6 bg-paper" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-0.5 w-6 bg-paper" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-ink-900/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => {
              const active = pathname === item.path;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-3 text-4xl font-bold transition-colors',
                      active ? 'text-gradient' : 'text-paper/80 hover:text-paper',
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
