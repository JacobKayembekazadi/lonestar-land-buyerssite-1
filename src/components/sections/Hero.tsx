import { Award, BadgeCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden" data-ai-hint="texas landscape dusk">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Top Bar */}
      <div className="relative z-20 w-full flex items-center justify-between px-4 py-3 bg-black/90">
        <span className="font-headline text-base font-semibold text-white">Axelson John</span>
        <a href="#buyer-form" className="rounded bg-[#a49b87] text-white font-semibold px-4 py-2 text-xs shadow hover:bg-[#8e8574] transition-colors">SEE OUR DEALS</a>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-[2rem] leading-[2.4rem] font-extrabold mb-3 mt-10 tracking-tight uppercase text-white" style={{textShadow:'0 2px 16px rgba(0,0,0,0.7)'}}>
          WANT TO SELL YOUR LAND?<br />GET A FAIR OFFER IN 24 HOURS.
        </h1>
        <p className="text-sm text-white/90 max-w-xs mx-auto mb-6 font-medium">
          Skip listings, agent fees, and months of waiting.<br />
          Receive a no-obligation cash offer backed by local Texas market data—close on your schedule.
        </p>
        <a href="#buyer-form" className="block w-full max-w-xs mx-auto rounded bg-[#a49b87] text-white font-bold py-3 text-base shadow text-center tracking-wide hover:bg-[#8e8574] transition-colors mb-8">
          GET MY FAIR CASH OFFER <span className="inline-block align-middle ml-2">&rarr;</span>
        </a>
      </div>

      {/* Badges Row */}
      <div className="relative z-20 flex flex-row justify-center items-center gap-4 py-3 px-2 text-white/90 text-xs bg-transparent mb-2">
        <span className="flex items-center gap-1 font-medium">
          <Award className="w-4 h-4 text-[#a49b87]" /> BBB A+ Accredited
        </span>
        <span className="flex items-center gap-1 font-medium">
          <BadgeCheck className="w-4 h-4 text-[#a49b87]" /> 200+ Texas Landowners Paid
        </span>
        <span className="flex items-center gap-1 font-medium">
          <Zap className="w-4 h-4 text-[#a49b87]" /> Fast-Closing Guarantee
        </span>
      </div>
    </section>
  );
}
