import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="bg-primary">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Ready for Your Fair Cash Offer?
          </h2>
          <Button asChild size="lg" className="bg-cta text-cta-foreground font-bold py-3 px-8 text-lg hover:bg-cta/90 transition-colors shadow-md flex-shrink-0">
            <a href="#valuation-form">Check Your Land’s Value →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
