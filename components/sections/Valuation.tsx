import { ValuationForm } from "@/components/ValuationForm";
import { ClientOnly } from "@/components/ClientOnly";
import { BadgeCheck, BadgeDollarSign, ShieldCheck } from "lucide-react";

export default function Valuation() {
  return (
    <section id="valuation-form" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get Your Free Cash Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete the 2-minute form below. Our team will personally review your land details and send you a written, no-obligation cash offer within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mt-12 mb-10 text-foreground">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-cta flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-left">100% No-Obligation</h3>
                <p className="text-sm text-muted-foreground text-left">You are not committed to accepting our offer.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-10 h-10 text-cta flex-shrink-0" strokeWidth={1.5} />
               <div>
                <h3 className="font-semibold text-left">Fair & Transparent</h3>
                <p className="text-sm text-muted-foreground text-left">Our offers are based on market data, not guesswork.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BadgeDollarSign className="w-10 h-10 text-cta flex-shrink-0" strokeWidth={1.5} />
               <div>
                <h3 className="font-semibold text-left">Absolutely No Fees</h3>
                <p className="text-sm text-muted-foreground text-left">We cover all closing costs. The offer price is what you get.</p>
              </div>
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ClientOnly>
            <ValuationForm />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
