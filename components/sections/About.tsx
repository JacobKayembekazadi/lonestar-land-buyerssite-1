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
              With years of experience in the Texas land market, Axelson John helps buyers get ahead of the crowd by sourcing exclusive, off-market properties tailored to your needs. Whether you’re looking for investment, development, or a place to build your dream, Axelson brings you real opportunities—no fluff, just real land.
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
