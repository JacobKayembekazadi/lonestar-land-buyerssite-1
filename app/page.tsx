import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Process from '@/components/sections/Process';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import LandTypes from '@/components/sections/LandTypes';
import BuyerFormSection from '../src/components/sections/BuyerFormSection';
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
        <WhoWeHelp />
        <LandTypes />
        <BuyerFormSection />
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
