import Hero from '@/components/sections/Hero';
import SelectedWork from '@/components/sections/SelectedWork';
import ImmersiveBreak from '@/components/sections/ImmersiveBreak';
import TechStack from '@/components/sections/TechStack';
import Inspirations from '@/components/sections/Inspirations';
import Quote from '@/components/sections/Quote';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <ImmersiveBreak />
      <TechStack />
      <Inspirations />
      <Quote />
      <CTA />
    </main>
  );
}
