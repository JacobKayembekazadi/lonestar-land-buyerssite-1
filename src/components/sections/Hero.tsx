import { Button } from "@/components/ui/button";


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
          Buy Texas Land Before Anyone Else.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Get direct access to exclusive, off-market properties. Share your criteria—location, lot size, budget—and Axelson will match you with real opportunities. No fluff. Just land.
        </p>
        <Button asChild size="lg" className="bg-cta text-cta-foreground py-4 px-8 text-lg">
          <a href="#buyer-form">Get Exclusive Deals</a>
        </Button>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-muted-foreground">
          <span className="font-semibold">Location</span>
          <span className="font-semibold">Lot Size</span>
          <span className="font-semibold">Budget</span>
        </div>
      </div>
    </section>
  );
}
