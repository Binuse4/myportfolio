
//components
import Hero from '@/components/Hero';
import SkillsSlider from '@/components/SkillsSlider';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Works';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import Certifications from '@/components/Certifications';

//deployement
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main>
      <Hero/>
      <SkillsSlider/>
      <About/>
      {/* <Services/> */}
      <Work/>
      <Certifications/>
      <Reviews/>
      <Cta/>
      <Analytics />
    </main>
  );
}

