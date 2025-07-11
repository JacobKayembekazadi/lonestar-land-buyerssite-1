import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Axelson John
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded by a Houston real-estate investor who saw landowners
              struggle with slow MLS listings, Axelson offers a
              faster, fee-free way to turn unused land into cash. From remote
              West Texas acreage to suburban infill lots, we provide transparent
              offers, local expertise, and a stress-free closing experience.
            </p>
          </div>
          <div>
            <Image
              src="/images/image-fx-2025-07-11t093043-259.jpg"
              alt="Axelson John - Land Investor"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
              data-ai-hint="houston team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
