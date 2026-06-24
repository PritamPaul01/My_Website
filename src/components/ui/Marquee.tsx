import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/** Seamless horizontal marquee; pauses on hover. */
export default function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn('group flex overflow-hidden', className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-6 pr-6">{children}</div>
        <div className="flex items-center gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
