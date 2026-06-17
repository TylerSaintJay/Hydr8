import { MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 border-t border-brand-teal/10 relative z-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
          <div className="max-w-xl text-center lg:text-left text-brand-navy">
            <h2 className="text-4xl font-light sm:text-5xl mb-4 text-brand-navy">
              Ready to <span className="italic font-serif text-brand-teal">elevate</span> your everyday hydration?
            </h2>
            <p className="text-lg text-brand-base/60">
              Stop by our lifestyle café, grab a coffee, and join the Refill Membership to transform how you drink water.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-brand-teal px-8 py-4 text-center font-bold text-white transition-all hover:bg-opacity-90 shadow-xl shadow-brand-teal/20">
              Join Membership
              <ArrowRight className="h-5 w-5" />
            </button>
            <a href="#cafe" className="flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl border border-brand-wood/40 px-8 py-4 text-center font-bold text-[#8B7355] transition-all hover:bg-brand-wood/10">
              <MapPin className="h-5 w-5 text-brand-wood" />
              Linmeyer Shop
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-teal/10 gap-6">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 100 100" className="h-8 w-8 text-brand-teal" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
              <path d="M20 58 Q30 52, 40 58 Q50 64, 60 58 Q70 52, 80 58" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <path d="M20 58 Q30 52, 40 58 Q50 64, 60 58 Q70 52, 80 58 L80 72 Q70 66, 60 72 Q50 78, 40 72 Q30 66, 20 72 Z" fill="currentColor" opacity="0.15"/>
            </svg>
            <span className="font-bold text-brand-navy tracking-tighter uppercase">HYDR8</span>
            <span className="text-xs font-semibold text-brand-navy/60">Linmeyer, Johannesburg South</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] font-bold text-brand-base/40 uppercase tracking-widest hidden sm:block">Sit. Savour. Stay.</span>
            <div className="w-8 h-[1px] bg-brand-teal/20 hidden sm:block"></div>
            <span className="text-xs font-bold text-brand-teal">© {new Date().getFullYear()} HYDR8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
