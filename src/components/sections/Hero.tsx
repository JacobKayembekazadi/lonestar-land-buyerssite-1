import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section id="hero" className="relative text-white min-h-screen flex flex-col justify-between overflow-hidden" data-ai-hint="texas landscape dusk">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 hero-bg"></div>
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Top Bar */}
      <div className="relative z-20 w-full flex items-center justify-between px-4 py-3 bg-black/80">
        <span className="font-headline text-lg font-semibold text-white">Axelson John</span>
        <a href="#buyer-form" className="rounded-md bg-[#a49b87] text-white font-semibold px-5 py-2 text-sm shadow hover:bg-[#8e8574] transition-colors">SEE OUR DEALS</a>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 mt-8 xs:mt-12 tracking-tight uppercase" style={{textShadow:'0 2px 16px rgba(0,0,0,0.5)'}}>
          WANT TO SELL YOUR LAND? <br className="hidden xs:block" />GET A FAIR OFFER IN 24 HOURS.
        </h1>
        <p className="text-base xs:text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-8 font-medium">
          Skip listings, agent fees, and months of waiting.<br />
          Receive a no-obligation cash offer backed by local Texas market data—close on your schedule.
        </p>
        <a href="#buyer-form" className="block w-full max-w-md mx-auto rounded-md bg-[#a49b87] text-white font-bold py-4 text-lg shadow text-center tracking-wide hover:bg-[#8e8574] transition-colors mb-8">
          GET MY FAIR CASH OFFER <span className="inline-block align-middle ml-2">&rarr;</span>
        </a>
      </div>

      {/* Badges Row */}
      <div className="relative z-20 flex flex-row justify-center items-center gap-6 xs:gap-8 py-4 px-2 text-white/90 text-base bg-transparent mb-2">
        <span className="flex items-center gap-2 font-medium">
          <Award className="w-5 h-5 text-[#a49b87]" /> BBB A+ Accredited
        </span>
        <span className="flex items-center gap-2 font-medium">
          <BadgeCheck className="w-5 h-5 text-[#a49b87]" /> 200+ Texas Landowners Paid
        </span>
        <span className="flex items-center gap-2 font-medium">
          <Zap className="w-5 h-5 text-[#a49b87]" /> Fast-Closing Guarantee
        </span>
      </div>
    </section>
  );
}
