import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

// Inline SVG of the Hydr8 wave-circle logo mark (matching brand guidelines)
function Hydr8Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      {/* Water level / wave inside circle */}
      <path 
        d="M20 58 Q30 52, 40 58 Q50 64, 60 58 Q70 52, 80 58" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        fill="none"
      />
      {/* Water body below wave */}
      <path 
        d="M20 58 Q30 52, 40 58 Q50 64, 60 58 Q70 52, 80 58 L80 72 Q70 66, 60 72 Q50 78, 40 72 Q30 66, 20 72 Z" 
        fill="currentColor" 
        opacity="0.15"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-brand-teal/20 px-6 py-4 md:px-12 md:py-6">
      <div className="mx-auto flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <Hydr8Logo className="h-10 w-10 text-brand-teal transition-transform group-hover:scale-105" />
              <span className="text-2xl font-extrabold tracking-tighter uppercase text-brand-navy">
                Hydr8
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 md:flex">
              <a href="#purification" className="text-sm font-semibold tracking-wide uppercase text-brand-navy/70 transition-colors hover:text-brand-teal">Our Process</a>
              <a href="#calculator" className="text-sm font-semibold tracking-wide uppercase text-brand-navy/70 transition-colors hover:text-brand-teal">Savings Calculator</a>
              <a href="#use-cases" className="text-sm font-semibold tracking-wide uppercase text-brand-navy/70 transition-colors hover:text-brand-teal">Lifestyle</a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 md:flex">
              <a href="#cafe" className="flex items-center gap-2 rounded-xl border border-brand-wood/30 px-5 py-2 text-sm font-bold text-[#8B7355] transition-colors hover:bg-brand-wood/10">
                <MapPin className="h-4 w-4 text-brand-wood" />
                Linmeyer Shop
              </a>
              <button className="rounded-xl bg-brand-teal px-5 py-2 text-sm font-bold text-white shadow-md shadow-brand-teal/20 transition-all hover:bg-brand-ocean">
                Join Refill Membership
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-brand-ocean"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-white/40 bg-white/90 p-4 backdrop-blur-xl md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <a href="#purification" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-ocean">Our Process</a>
              <a href="#calculator" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-ocean">Savings Calculator</a>
              <a href="#cafe" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-ocean">Local Shop</a>
              <hr className="border-brand-ocean/10" />
              <a href="#cafe" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl border border-brand-wood px-5 py-3 font-semibold text-[#8B7355]">
                <MapPin className="h-5 w-5" />
                Linmeyer Shop
              </a>
              <button className="rounded-xl bg-brand-ocean px-5 py-3 font-semibold text-white">
                Join Refill Membership
              </button>
            </div>
          </motion.div>
        )}
    </header>
  );
}
