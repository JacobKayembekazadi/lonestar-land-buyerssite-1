import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-headline text-xl md:text-2xl text-primary">
            Axelson John
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary">About</Link>
            <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary">Process</Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</Link>
            <Button asChild className="bg-cta text-cta-foreground">
              <a href="#buyer-form">See Our Deals</a>
            </Button>
          </nav>
          <Button asChild className="md:hidden bg-cta text-cta-foreground">
            <a href="#buyer-form">See Our Deals</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
