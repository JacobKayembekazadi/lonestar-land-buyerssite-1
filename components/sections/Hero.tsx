import { Button } from "@/components/ui/button";
import { BadgeCheck, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative text-white py-20 md:py-32 overflow-hidden" data-ai-hint="texas landscape dusk">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 hero-bg"></div>
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
          🚨 LAND BUYERS: Stop Chasing — Start Choosing.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Get direct access to <span className="font-semibold">quiet, off-market land deals</span> before anyone else.<br />
          Tell us your buy box — we’ll bring you the deals.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-4 text-base md:text-lg mb-6 mt-2">
          <li><span role="img" aria-label="location">📍</span> Location</li>
          <li><span role="img" aria-label="lot size">📏</span> Lot size</li>
          <li><span role="img" aria-label="budget">💰</span> Budget</li>
        </ul>
        <Button asChild size="lg" className="bg-cta text-cta-foreground py-4 px-8 text-lg">
          <a href="#valuation-form">Submit Your Buy Box →</a>
        </Button>
        <div className="mt-10 text-base md:text-lg text-muted-foreground">
          No fluff. Just real land.
        </div>
      </div>
    </section>
  );
}
