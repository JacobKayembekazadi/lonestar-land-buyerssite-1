import { ValuationForm } from "@/components/ValuationForm";

export default function Valuation() {
  return (
    <section id="valuation-form" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Your Free Cash Offer
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Complete the form—our team will analyze the data and provide an estimated valuation.
          </p>
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          <ValuationForm />
        </div>
      </div>
    </section>
  );
}
