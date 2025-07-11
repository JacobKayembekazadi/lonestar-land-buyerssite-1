import { Button } from "@/components/ui/button";
import { BadgeCheck, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg text-white py-20 md:py-32" data-ai-hint="texas ranch aerial">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Want to Sell Your Land? Get a Fair Offer in 24 Hours.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Skip listings, agent fees, and months of waiting. Receive a
          no-obligation cash offer backed by local Texas market data—close on
          your schedule.
        </p>
        <Button asChild size="lg" className="bg-cta text-cta-foreground font-bold py-4 px-8 text-lg hover:bg-cta/90 shadow-lg">
          <a href="#valuation-form">Check Your Land’s Value →</a>
        </Button>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-300">
          <span className="flex items-center gap-2 font-semibold">
            <Award className="h-5 w-5 text-cta" /> BBB A+ Accredited
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <BadgeCheck className="h-5 w-5 text-cta" /> 200+ Texas Landowners Paid
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <Zap className="h-5 w-5 text-cta" /> Fast-Closing Guarantee
          </span>
        </div>
      </div>
    </section>
  );
}
