'use client';

import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor], input, textarea, select, label, summary';

/**
 * plink-style cursor:
 *  - a large blob that trails the pointer and inverts whatever is under it
 *    (mix-blend-mode: difference) — white text flips to black, dark flips to light
 *  - a small precise dot that tracks tightly for accurate pointing
 *  - over clickable elements the blob + dot give way to a pointer arrow,
 *    then morph back to the blob on leave
 *
 * The layers are always rendered (hidden) so the refs exist when the effect
 * runs; the effect only *activates* (and hides the native cursor) on
 * precise-pointer, motion-friendly devices.
 */
export default function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReduced) return;

    const blob = blobRef.current;
    const dot = dotRef.current;
    const arrow = arrowRef.current;
    if (!blob || !dot || !arrow) return;

    document.body.classList.add('cursor-ready');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let blobX = mouseX;
    let blobY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    let started = false;
    let hovering = false;
    let rafId = 0;

    const showForState = () => {
      if (hovering) {
        blob.style.opacity = '0';
        dot.style.opacity = '0';
        arrow.style.opacity = '1';
      } else {
        blob.style.opacity = '1';
        dot.style.opacity = '1';
        arrow.style.opacity = '0';
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        started = true;
        blobX = mouseX;
        blobY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        showForState();
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.(INTERACTIVE_SELECTOR)) {
        hovering = true;
        showForState();
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest?.(INTERACTIVE_SELECTOR)) return;
      const related = e.relatedTarget as Element | null;
      if (related?.closest?.(INTERACTIVE_SELECTOR)) return;
      hovering = false;
      showForState();
    };

    const onLeaveWindow = () => {
      blob.style.opacity = '0';
      dot.style.opacity = '0';
      arrow.style.opacity = '0';
    };
    const onEnterWindow = () => {
      if (started) showForState();
    };
    const onDown = () => blob.classList.add('cursor-blob--down');
    const onUp = () => blob.classList.remove('cursor-blob--down');

    const loop = () => {
      blobX += (mouseX - blobX) * 0.14;
      blobY += (mouseY - blobY) * 0.14;
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;
      blob.style.transform = `translate3d(${blobX}px, ${blobY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      arrow.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 2}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);
    document.addEventListener('mouseout', onOut, true);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);
    document.documentElement.addEventListener('mouseenter', onEnterWindow);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove('cursor-ready');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver, true);
      document.removeEventListener('mouseout', onOut, true);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      document.documentElement.removeEventListener('mouseenter', onEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={blobRef} className="cursor-blob" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={arrowRef} className="cursor-arrow" style={{ opacity: 0 }} aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 2.5 L5 18.5 L9.2 14.3 L12.2 20.5 L14.4 19.4 L11.4 13.4 L17 13.4 Z"
            fill="#ffffff"
            stroke="#0a0607"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
