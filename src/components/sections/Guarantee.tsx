import { BadgeCheck, BadgeDollarSign, ShieldCheck } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface GuaranteeItem {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const guarantees: GuaranteeItem[] = [
  {
    icon: BadgeCheck,
    title: "The Fair Offer Guarantee",
    description: "We back every offer with local market data. Transparent, fair, and based on real numbers.",
  },
  {
    icon: BadgeDollarSign,
    title: "The No-Fee Guarantee",
    description: "The price we offer is the exact amount you receive. We cover 100% of closing costs. No deductions.",
  },
  {
    icon: ShieldCheck,
    title: "The No-Obligation Guarantee",
    description: "Our offer is 100% free. The decision is entirely yours, with absolutely no pressure from our team.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our No-Nonsense Guarantee
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {guarantees.map((guarantee) => (
            <div key={guarantee.title} className="p-6">
              <div className="flex justify-center items-center mb-4">
                <guarantee.icon className="w-12 h-12 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-primary-foreground/80">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
