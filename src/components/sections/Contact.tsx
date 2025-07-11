import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get in Touch
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 bg-background">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:713-555-LAND"
                    className="text-primary hover:underline"
                  >
                    713-555-LAND
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hello@lonestarlandbuyers.com"
                    className="text-primary hover:underline"
                  >
                    hello@lonestarlandbuyers.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  Suite 550, 910 Louisiana St, Houston, TX 77002
                </p>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://maps.google.com/?q=910+Louisiana+St+Houston+TX+77002&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-md"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
