import { projects } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import VideoCard from './VideoCard';

export default function ProjectShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={project.id}>
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className={cn(flip && 'md:order-2')}>
                  <VideoCard poster={project.image} video={project.video} title={project.title} />
                </div>
                <div className={cn(flip && 'md:order-1')}>
                  <span className="text-sm uppercase tracking-[0.2em] text-violet-400">{project.category}</span>
                  <h3 className="mt-2 text-3xl font-bold md:text-4xl">{project.title}</h3>
                  <p className="mt-1 text-violet-300">{project.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-paper/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
