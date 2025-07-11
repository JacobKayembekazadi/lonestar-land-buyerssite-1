import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-extrabold text-xl md:text-2xl text-primary">
            LoneStar Land Buyers
          </Link>
          <Button asChild className="hidden md:inline-block bg-cta text-cta-foreground font-bold hover:bg-cta/90">
            <a href="#valuation-form">Get My Offer</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
