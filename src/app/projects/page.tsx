import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABand from '@/components/ui/CTABand';
import ProjectShowcase from '@/components/sections/projects/ProjectShowcase';
import MockupsGallery from '@/components/sections/projects/MockupsGallery';
import Roadmap from '@/components/sections/projects/Roadmap';
import Process from '@/components/sections/projects/Process';
import HashScroll from '@/components/util/HashScroll';
import { projectsPage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work — Pritam Kumar Pal',
  description: 'Selected AR, VR and MR projects, UI mockups, roadmap and development process.',
};

export default function ProjectsPage() {
  return (
    <main>
      <HashScroll />
      <PageHero
        title={
          <>
            Galactic <span className="text-gradient">Adventure</span>
          </>
        }
        subtitle={projectsPage.hero.subtitle}
        tags={projectsPage.hero.tags}
      />
      <ProjectShowcase />
      <MockupsGallery />
      <Roadmap />
      <Process />
      <CTABand
        title={
          <>
            Interested in <span className="text-gradient">collaboration</span>?
          </>
        }
        text="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />
    </main>
  );
}
