import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Heart, Coffee, Droplets, Utensils } from 'lucide-react';
import specialsData from '../data/specialsData.json';

export default function ChalkboardSpecials() {

  return (
    <section id="specials" className="py-20 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Outer Chalkboard Frame */}
        <div className="relative bg-chalkboard rounded-[3rem] p-8 sm:p-12 lg:p-16 border-8 border-brand-wood/30 shadow-[0_30px_60px_-15px_rgba(10,37,64,0.5)] overflow-hidden transform -rotate-1 md:-rotate-1 lg:hover:rotate-0 transition-transform duration-500">
          
          {/* Subtle Chalk Dust Effect & Wood Trim */}
          <div className="absolute top-0 left-0 w-full h-3 bg-brand-wood/40" />
          <div className="absolute bottom-0 left-0 w-full h-3 bg-brand-wood/40" />
          
          {/* Chalkboard Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
              <span>Linmeyer Daily Board</span>
            </div>
            
            <h2 className="font-chalk text-6xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
              Hydr8 Daily Specials
            </h2>
            
            <p className="font-script text-2xl sm:text-3xl text-amber-200/90">
              Freshly made • Prepared with love & precision ♡
            </p>
          </div>

          {/* Customizable Specials Interface Placeholder */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="border-4 border-dashed border-white/20 rounded-3xl p-12 sm:p-20 text-center flex flex-col items-center justify-center min-h-[300px] bg-white/5 backdrop-blur-sm">
              <Sparkles className="h-10 w-10 text-white/30 mb-4" />
              <p className="font-chalk text-3xl sm:text-4xl text-white/50">
                [ Customizable Daily Specials Interface ]
              </p>
              <p className="font-sans text-sm text-white/40 mt-4 max-w-md">
                This area is reserved for the live text editing interface where you can type out your daily specials directly onto the board.
              </p>
            </div>
          </div>

          {/* Bottom Chalk Note */}
          <div className="mt-12 text-center border-t border-white/10 pt-6 relative z-10">
            <p className="font-chalk text-2xl text-amber-100/90">
              Pop into our storefront at 35 Elizabeth Ave, Linmeyer or order via WhatsApp!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
