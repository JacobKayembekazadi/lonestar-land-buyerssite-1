import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "LoneStar’s offer beat every other buyer and closed in ten days—exactly what I needed.",
    name: "Maria G.",
    location: "Harris County, TX",
  },
  {
    quote: "They handled the paperwork, paid my back taxes, and wired the cash the same day we signed.",
    name: "James R.",
    location: "Brazoria County, TX",
  },
  {
    quote: "No realtor fees and no hassle. Highly recommend if you’ve got vacant land to sell.",
    name: "Ayesha P.",
    location: "Bell County, TX",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Success Stories
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card p-8 rounded-lg flex flex-col">
              <div className="flex text-primary mb-4">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
              </div>
              <blockquote className="text-foreground italic mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
