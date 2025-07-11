import { Gift, FileText, Smile, Zap } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface Situation {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const situations: Situation[] = [
  {
    icon: Gift,
    title: "Inherited Land?",
    description: "Turn an unused property or tax liability into a significant cash asset without any hassle.",
  },
  {
    icon: FileText,
    title: "Tired of Taxes?",
    description: "Stop the annual drain on your finances for land you're not using. We can close before your next tax bill.",
  },
  {
    icon: Smile,
    title: "Listing Expired?",
    description: "Frustrated that your property didn't sell with an agent? We buy land directly, regardless of its history.",
  },
  {
    icon: Zap,
    title: "Need Cash Fast?",
    description: "Facing a divorce, foreclosure, or other life event? Get the certainty of a fast, guaranteed cash closing.",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            We Help Landowners in Any Situation
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            If you're facing one of these challenges, a cash offer could be your
            perfect solution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {situations.map((situation) => (
            <div key={situation.title} className="text-center p-6">
              <div className="flex justify-center items-center mb-4">
                <situation.icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {situation.title}
              </h3>
              <p className="text-muted-foreground">{situation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
