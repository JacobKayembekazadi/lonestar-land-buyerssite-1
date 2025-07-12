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
              Axelson John is a Texas-based land investor who specializes in connecting serious land buyers with exclusive, off-market land deals across the state. With direct access to properties before they hit the open market, Axelson helps buyers find the right land for their needs—whether it’s for investment, development, recreation, or building a dream home. The brand is straightforward, no-nonsense, and focused on delivering real opportunities to buyers who know what they want.
            </p>
          </div>
          <div>
            <Image
              src="/images/image-fx-2025-07-11t093043-259.jpg"
              alt="Axelson John"
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
