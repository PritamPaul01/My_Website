'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoCardProps {
  poster: string;
  video: string;
  title: string;
}

export default function VideoCard({ poster, video, title }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
      {playing ? (
        <video
          src={video}
          className="h-full w-full bg-black object-cover"
          autoPlay
          controls
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <button onClick={() => setPlaying(true)} className="group h-full w-full" aria-label={`Play ${title} video`}>
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-500/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
