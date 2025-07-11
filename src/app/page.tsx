import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Process from '@/components/sections/Process';
import Comparison from '@/components/sections/Comparison';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import LandTypes from '@/components/sections/LandTypes';
import Guarantee from '@/components/sections/Guarantee';
import Valuation from '@/components/sections/Valuation';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import Faq from '@/components/sections/Faq';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Process />
        <Comparison />
        <WhoWeHelp />
        <LandTypes />
        <Guarantee />
        <Valuation />
        <Testimonials />
        <CtaBanner />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
