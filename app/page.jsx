
//components
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Works';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Reviews/>
    </main>
  );
}
