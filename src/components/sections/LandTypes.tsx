import { LayoutGrid, Tractor, Trees } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface LandType {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const landTypes: LandType[] = [
  {
    icon: LayoutGrid,
    title: "Vacant Lots",
    description: "Suburban, urban, and infill lots.",
  },
  {
    icon: Tractor,
    title: "Farm & Ranch Land",
    description: "Large rural parcels and acreage.",
  },
  {
    icon: Trees,
    title: "Recreational Land",
    description: "Hunting, fishing, and timber tracts.",
  },
];

export default function LandTypes() {
  return (
    <section id="land-types" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            We Buy All Types of Texas Land
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {landTypes.map((landType) => (
            <div
              key={landType.title}
              className="bg-card p-6 rounded-lg shadow-md flex items-center space-x-4"
            >
              <landType.icon className="w-10 h-10 text-cta flex-shrink-0" strokeWidth={1.5}/>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {landType.title}
                </h3>
                <p className="text-muted-foreground">{landType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
