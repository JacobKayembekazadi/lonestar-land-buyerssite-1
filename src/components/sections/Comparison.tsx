import { CheckCircle2, XCircle } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Selling Timeline",
      lonestar: "Offer in 24 Hours",
      traditional: "6-12+ Months",
      lonestarAdvantage: true,
    },
    {
      feature: "Commissions & Fees",
      lonestar: "ZERO Fees",
      traditional: "~6% Commission",
      lonestarAdvantage: true,
    },
    {
      feature: "Closing Costs",
      lonestar: "We Pay 100%",
      traditional: "Seller Pays ~2%",
      lonestarAdvantage: true,
    },
    {
      feature: "Sale Certainty",
      lonestar: "Guaranteed Offer",
      traditional: "Buyer Can Back Out",
      lonestarAdvantage: true,
    },
    {
      feature: "Showings & Hassle",
      lonestar: "None",
      traditional: "Constant Interruptions",
      lonestarAdvantage: true,
    },
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            The Smarter Way to Sell
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            See how a direct cash offer from LoneStar compares to a traditional
            realtor listing.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 font-bold text-lg">
              <div className="p-4 text-foreground col-span-1">Feature</div>
              <div className="p-4 bg-primary text-primary-foreground text-center col-span-1">
                LoneStar Buyers
              </div>
              <div className="p-4 bg-secondary text-secondary-foreground text-center col-span-1">
                Traditional Listing
              </div>
            </div>
            <div className="divide-y divide-border">
              {comparisonData.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 items-center ${
                    index % 2 === 1 ? "bg-muted/50" : ""
                  }`}
                >
                  <div className="p-4 font-semibold text-foreground col-span-1">
                    {item.feature}
                  </div>
                  <div className="p-4 text-center col-span-1">
                    <span className="font-bold text-green-600 flex items-center justify-center gap-2">
                       <CheckCircle2 className="h-5 w-5" /> {item.lonestar}
                    </span>
                  </div>
                  <div className="p-4 text-center col-span-1">
                    <span className="text-red-600 flex items-center justify-center gap-2">
                       <XCircle className="h-5 w-5" /> {item.traditional}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
