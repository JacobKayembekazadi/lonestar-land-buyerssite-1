import type {Metadata} from 'next';
import './globals.css';
import { Lato, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"

const lato = Lato({ subsets: ['latin'], weight: ["400"], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ["600", "700"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'LoneStar Land Buyers — Sell Your Land for a Fair Cash Offer in 24 Hours | Houston, TX',
  description: 'Need to sell vacant land quickly? Houston-based LoneStar Land Buyers delivers no-obligation cash offers within 24 hours and covers every closing cost.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("font-body antialiased", lato.variable, montserrat.variable)} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
