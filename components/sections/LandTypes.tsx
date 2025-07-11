"use client";
import { LayoutGrid, Tractor, Trees, Building2, KeyRound, Scaling } from "lucide-react";
import type { LucideProps } from "lucide-react";
import Image from "next/image";

interface LandType {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const landTypes: LandType[] = [
  {
    icon: LayoutGrid,
    title: "Vacant Lots",
    description: "Suburban, urban, and infill lots.",
    image: "/images/vacant-lot.jpg",
    imageAlt: "Empty suburban lot ready for development"
  },
  {
    icon: Tractor,
    title: "Farm & Ranch Land",
    description: "Large rural parcels and acreage.",
    image: "/images/farm-ranch.jpg",
    imageAlt: "Texas farm and ranch land with open fields"
  },
  {
    icon: Trees,
    title: "Recreational Land",
    description: "Hunting, fishing, and timber tracts.",
    image: "/images/recreational-land.jpg",
    imageAlt: "Wooded recreational land perfect for hunting and fishing"
  },
   {
    icon: Building2,
    title: "Commercial Land",
    description: "Development and investment properties.",
    image: "/images/commercial-land.jpg",
    imageAlt: "Commercial development land in prime location"
  },
  {
    icon: KeyRound,
    title: "Problem Properties",
    description: "Landlocked, distressed, or unique situations.",
    image: "/images/problem-properties.jpg",
    imageAlt: "Challenging property requiring specialized expertise"
  },
  {
    icon: Scaling,
    title: "Any Size",
    description: "From 0.1 acres to 1000+ acre ranches.",
    image: "/images/any-size-land.jpg",
    imageAlt: "Large ranch property showcasing land of any size"
  },
];

export default function LandTypes() {
  return (
    <section id="land-types" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            We Buy All Types of Texas Land
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {landTypes.map((landType) => (
            <div
              key={landType.title}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={landType.image}
                  alt={landType.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to a default pattern if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/80 flex items-center justify-center">
                  <landType.icon className="w-12 h-12 text-white opacity-90" strokeWidth={1.5}/>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
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
