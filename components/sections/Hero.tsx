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
          Find Your Perfect Plot of Land in Texas.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Discover exclusive land listings you won't find anywhere else. Our
          team of experts will help you find the perfect property for your
          needs.
        </p>
        <Button asChild size="lg" className="bg-cta text-cta-foreground py-4 px-8 text-lg">
          <a href="#buyer-form">Browse Available Land →</a>
        </Button>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-muted-foreground">
          <span className="flex items-center gap-2 font-semibold">
            <Award className="h-5 w-5 text-primary" /> Exclusive Properties
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <BadgeCheck className="h-5 w-5 text-primary" /> Expert Guidance
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <Zap className="h-5 w-5 text-primary" /> Simplified Buying Process
          </span>
        </div>
      </div>
    </section>
  );
}
