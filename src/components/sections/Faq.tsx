import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you only offer land in Texas?",
    a: "Yes, our focus is exclusively on providing off-market land deals within the state of Texas.",
    value: "item-1",
  },
  {
    q: "What kinds of land do you offer?",
    a: "We offer a wide variety of land types, including parcels for investment, development, recreation, and building custom homes.",
    value: "item-2",
  },
  {
    q: "How do you find your land deals?",
    a: "We have a network of contacts that gives us direct access to properties before they ever hit the open market.",
    value: "item-3",
  },
  {
    q: "Are there any fees for buyers?",
    a: "No, our service is free for buyers. We are compensated by the sellers.",
    value: "item-4",
  },
  {
    q: "How does the buying process work?",
    a: "You tell us what you're looking for, we bring you the deals, and if you find a property you love, we help you close on it. It's that simple.",
    value: "item-5",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="bg-background rounded-lg border-b-0">
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
