export default function Process() {
  const steps = [
    {
      num: 1,
      title: "Tell Us About Your Land",
      description: "Fill out a quick form with your county, acreage, and contact info.",
    },
    {
      num: 2,
      title: "Get Your Cash Offer",
      description: "We analyze local comps and email a fair market cash price within 24 hours.",
    },
    {
      num: 3,
      title: "Close & Get Paid",
      description: "Pick your closing date. We cover all fees—funds wired to you on closing day.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-2">
            A simple, transparent process to get you paid fast.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step) => (
            <div key={step.num} className="p-6">
              <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto text-2xl font-bold mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
