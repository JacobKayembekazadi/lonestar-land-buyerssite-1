import type {Metadata} from 'next';
import './globals.css';
import { Lato, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"

const lato = Lato({ subsets: ['latin'], weight: ["400"], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ["600", "700"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Axelson John — Exclusive Off-Market Land Deals in Texas',
  description: 'Get direct access to quiet, off-market land deals before anyone else. Axelson John connects serious land buyers with exclusive properties for investment, development, and recreation.',
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
