import { BuyerForm } from "../BuyerForm";
import { ClientOnly } from "@/components/ClientOnly";
import { BadgeCheck, BadgeDollarSign, ShieldCheck } from "lucide-react";

export default function BuyerFormSection() {
  return (
    <section id="buyer-form" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Tell Us What You're Looking For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fill out the form below with your land requirements, and we'll send you exclusive, off-market deals that match your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mt-12 mb-10 text-foreground">
            <div>
                <h3 className="font-semibold text-left">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground text-left">Get access to deals you won't find anywhere else.</p>
            </div>
            <div>
                <h3 className="font-semibold text-left">Curated Deals</h3>
                <p className="text-sm text-muted-foreground text-left">We send you deals that match your specific criteria.</p>
            </div>
            <div>
                <h3 className="font-semibold text-left">No Buyer Fees</h3>
                <p className="text-sm text-muted-foreground text-left">Our service is completely free for land buyers.</p>
            </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ClientOnly>
            <BuyerForm />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
