'use client';

import { useRef, useState } from 'react';
import { about } from '@/lib/content';

export default function AboutVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play();
  };

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
      <video
        ref={ref}
        src={about.video}
        className="h-full w-full bg-black object-cover"
        controls={playing}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={play}
          className="group absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/20"
          aria-label="Play video"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
