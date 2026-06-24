'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const SCRIPT_SRC = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}

/**
 * The mouse-tracking Spline robot, embedded via the official spline-viewer web
 * component (same scene as the original site). To protect first paint and
 * mobile data, the runtime script only loads on wide, motion-friendly screens
 * after the browser is idle; a lightweight CSS robot stands in until it loads.
 */
export default function SplineRobot({ url }: { url: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const disabled = new URLSearchParams(window.location.search).has('nospline');
    if (!wide || reduce || disabled) return;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setMount(true);
    };

    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));

    schedule(() => {
      if (cancelled) return;
      if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
        start();
      } else {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = SCRIPT_SRC;
        script.onload = start;
        document.body.appendChild(script);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mount) return;
    const viewer = hostRef.current?.querySelector('spline-viewer');
    if (!viewer) return;
    const onLoad = () => setReady(true);
    viewer.addEventListener('load', onLoad);
    const fallback = window.setTimeout(() => setReady(true), 2600);
    return () => {
      viewer.removeEventListener('load', onLoad);
      window.clearTimeout(fallback);
    };
  }, [mount]);

  return (
    <div ref={hostRef} className="relative h-full w-full">
      <RobotFallback hidden={ready} />
      {mount && (
        <spline-viewer
          url={url}
          style={{
            width: '100%',
            height: '100%',
            opacity: ready ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      )}
    </div>
  );
}

function RobotFallback({ hidden }: { hidden: boolean }) {
  const eye =
    'absolute top-[46px] h-6 w-6 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd0e0,#e84b9c_60%,#7a1f4a)] shadow-[0_0_14px_rgba(232,75,156,0.8)]';
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center transition-opacity duration-700',
        hidden ? 'opacity-0' : 'opacity-100',
      )}
      aria-hidden="true"
    >
      <div className="animate-float">
        <div className="relative h-[120px] w-[180px] rounded-[26px] border border-violet-400/30 bg-gradient-to-br from-ink-700 to-ink-800 shadow-[0_30px_80px_rgba(124,92,255,0.35)]">
          <span className={cn(eye, 'left-[44px]')} />
          <span className={cn(eye, 'right-[44px]')} />
        </div>
        <div className="mx-auto h-9 w-5 bg-gradient-to-b from-ink-600 to-ink-800" />
        <div className="mx-auto h-5 w-24 rounded-lg border border-violet-400/20 bg-gradient-to-br from-ink-700 to-ink-800" />
      </div>
    </div>
  );
}
