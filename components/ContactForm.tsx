"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
       <Card className="bg-background">
         <CardContent className="p-8">
            <Alert variant="default" className="bg-green-100 border-green-200 text-green-800">
                <CheckCircle2 className="h-4 w-4 !text-green-800" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                Thanks for reaching out! Our team will respond within one business day.
                </AlertDescription>
            </Alert>
         </CardContent>
       </Card>
    );
  }

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="contact-name">Name</Label>
            <Input
              type="text"
              name="name"
              id="contact-name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              type="email"
              name="email"
              id="contact-email"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              name="message"
              id="contact-message"
              rows={4}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 transition-colors"
            >
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
