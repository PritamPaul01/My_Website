'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';

export default function SkillBars() {
  return (
    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
      {about.skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-paper">{skill.name}</span>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted">
                {skill.years}
              </span>
              <span className="w-9 text-right font-semibold tabular-nums text-violet-300">
                {skill.level}%
              </span>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
