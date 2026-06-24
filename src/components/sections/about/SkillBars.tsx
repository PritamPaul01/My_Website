'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';

export default function SkillBars() {
  return (
    <div className="space-y-5">
      {about.skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
