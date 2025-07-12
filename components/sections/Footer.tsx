import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-headline text-xl text-primary mb-3">
              Axelson John
            </h3>
            <p className="text-muted-foreground text-sm pr-4">
              I provide fair, fast cash offers for your land, eliminating the
              hassle and fees of traditional sales.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-3">Contact Us</h4>
            <div className="text-sm text-muted-foreground space-y-2">
                <p>Suite 550, 910 Louisiana St, Houston, TX 77002</p>
                <p>
                  <a href="tel:713-555-LAND" className="hover:text-primary transition-colors">
                    (713) 555-LAND
                  </a>
                </p>
                <p>
                  <a href="mailto:axelson@landflipsusa.com" className="hover:text-primary transition-colors">
                    axelson@landflipsusa.com
                  </a>
                </p>
            </div>
          </div>
           <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <h4 className="font-semibold text-foreground mb-3">Looking for Land?</h4>
             <p className="text-muted-foreground text-sm mb-4">Drop your buy box below — I'll send you exclusive deals.</p>
            <Button asChild className="bg-cta text-cta-foreground w-full">
                <a href="#buyer-form">Send Me Deals</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="text-muted-foreground/80 text-center sm:text-left mb-4 sm:mb-0">
                &copy; {new Date().getFullYear()} Axelson John. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5"/>
                 </a>
                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5"/>
                 </a>
                 <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5"/>
                 </a>
            </div>
        </div>
      </div>
    </footer>
  );
}