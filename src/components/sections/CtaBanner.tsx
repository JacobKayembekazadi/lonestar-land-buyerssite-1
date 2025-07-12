import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section id="cta-banner" className="bg-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Ready to Find Your Perfect Land Deal?
          </h2>
          <Button asChild size="lg" className="bg-cta text-cta-foreground py-3 px-8 text-lg flex-shrink-0">
            <a href="#buyer-form">See Our Deals →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
