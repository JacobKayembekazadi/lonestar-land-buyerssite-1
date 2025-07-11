import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you only buy land in Texas?",
    a: "Texas is our specialty, but we purchase vacant land across the southern United States.",
    value: "item-1",
  },
  {
    q: "What kinds of land do you buy?",
    a: "We buy vacant lots, farm acreage, timberland, and recreational parcels—raw or improved.",
    value: "item-2",
  },
  {
    q: "How do you determine the offer price?",
    a: "We review recent comparable sales, zoning, access, utilities, and local demand to calculate a fair cash value.",
    value: "item-3",
  },
  {
    q: "Are there any costs to me?",
    a: "None. LoneStar covers closing costs, title fees, and—in many cases—back taxes.",
    value: "item-4",
  },
  {
    q: "How quickly can I get paid?",
    a: "Typical closings fund within 7–14 days of accepting our offer, but we can expedite if needed.",
    value: "item-5",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="bg-card rounded-lg shadow-md border-b-0">
                <AccordionTrigger className="p-5 font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="p-5 pt-0 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
