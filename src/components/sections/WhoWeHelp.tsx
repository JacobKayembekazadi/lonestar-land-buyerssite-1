import { Building, Home, BarChart, Trees } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface BuyerType {
  title: string;
  description: string;
}

const buyerTypes: BuyerType[] = [
  {
    title: "Investors",
    description: "Find off-market land with high potential for appreciation and development.",
  },
  {
    title: "Developers",
    description: "Access exclusive parcels perfect for your next residential or commercial project.",
  },
  {
    title: "Recreational Buyers",
    description: "Discover private land for hunting, fishing, camping, and your dream outdoor escape.",
  },
  {
    title: "Home Builders",
    description: "Secure the perfect lot to build a custom dream home for yourself or a client.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Who We Find Land For
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Axelson connects serious buyers with quiet, off-market land deals—no fluff, just real opportunities for investors, developers, and dreamers alike.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {buyerTypes.map((buyer) => (
            <div key={buyer.title} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {buyer.title}
              </h3>
              <p className="text-muted-foreground">{buyer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
