import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section id="hero" className="relative text-white py-12 md:py-32 overflow-hidden" data-ai-hint="texas landscape dusk">
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
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
          LAND BUYERS: Stop Chasing — Start Choosing.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-3xl mx-auto mb-6 sm:mb-8">
          We get direct access to quiet, off-market land deals before anyone else. You tell us what you're buying — we bring the deals.
        </p>
        <Button asChild size="md" className="bg-cta text-cta-foreground py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg">
          <a href="#buyer-form">See Our Deals</a>
        </Button>
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-muted-foreground">
          <span className="font-semibold text-sm sm:text-base">Location</span>
          <span className="font-semibold text-sm sm:text-base">Lot Size</span>
          <span className="font-semibold text-sm sm:text-base">Budget</span>
        </div>
      </div>
    </section>
  );
}
