import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

// Custom SVG Icons matching the h1-blue flyer brand aesthetic
const WaveSealIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="50" cy="50" r="42" strokeWidth="6" />
    {/* Stylized waves */}
    <path d="M25 50 c10-8 15 8 25 0 c10-8 15 8 25 0" strokeWidth="6" />
    <path d="M30 62 c8-6 12 6 20 0 c8-6 12 6 20 0" strokeWidth="6" />
    <path d="M28 38 c8-6 12 6 20 0 c8-6 12 6 20 0" strokeWidth="6" />
  </svg>
);

const CoffeeCupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M30 38 h40 v26 c0 11-9 20-20 20 h0 c-11 0-20-9-20-20 Z" />
    <path d="M70 46 h6 c4 0 8 4 8 8 v0 c0 4-4 8-8 8 h-6" />
    <path d="M22 90 h56" strokeWidth="7" />
    <path d="M40 14 c0 4 3 4 3 8" strokeWidth="4" />
    <path d="M50 10 c0 4 3 4 3 8" strokeWidth="4" />
    <path d="M60 14 c0 4 3 4 3 8" strokeWidth="4" />
  </svg>
);

const SteerHeadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    {/* Steer/Bull head silhouette representing premium biltong */}
    <path d="M15 28 C15 28, 26 18, 38 31 C45 38, 48 43, 50 45 C52 43, 55 38, 62 31 C74 18, 85 28, 85 28 C82 38, 77 44, 71 47 C69 49, 67 48, 65 51 C63 54, 64 63, 61 73 C57 85, 52 88, 50 88 C48 88, 43 85, 39 73 C36 63, 37 54, 35 51 C33 48, 31 49, 29 47 C23 44, 18 38, 15 28 Z" />
  </svg>
);

const SpiceBowlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 50 c0 20 15 35 30 35 s30-15 30-35 H20 Z" />
    <path d="M15 50 h70" strokeWidth="8" />
    <path d="M50 18 c10 0 14 10 14 14 c0 0-4 10-14 10 s-14-10-14-14 c0-4 4-14 14-14 Z" strokeWidth="4" />
    <path d="M50 18 v24" strokeWidth="4" />
  </svg>
);

const CroissantIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 68 C22 68, 30 38, 50 38 C70 38, 78 68, 78 68 C78 68, 64 48, 50 48 C36 48, 22 68, 22 68 Z" />
    <path d="M32 63 C35 53, 42 45, 50 45 C58 45, 65 53, 68 63" />
    <path d="M40 58 C42 52, 45 49, 50 49 C55 49, 58 52, 60 58" />
  </svg>
);

interface PillarItem {
  title: string;
  shortDesc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details: {
    tagline: string;
    description: string;
    highlights: string[];
    badge: string;
  };
}

const pillars: PillarItem[] = [
  {
    title: "Pure & Refreshing",
    shortDesc: "Premium remineralized water filled your way.",
    icon: WaveSealIcon,
    details: {
      tagline: "Water purification at its finest",
      description: "Our water goes through a rigorous, state-of-the-art 8-stage purification process to ensure absolute safety, crystal clarity, and perfect mineral balance.",
      highlights: [
        "8-Stage Advanced Filtration (RO + UV + Ozone)",
        "Remineralized (adds essential Calcium & Magnesium back)",
        "Exceeds municipal & SANS 241 safety standards",
        "Multiple variants: Alkaline (pH 8.5+), RO, and Prepared Still"
      ],
      badge: "🔬 SANAS Lab Tested"
    }
  },
  {
    title: "Fresh Coffee",
    shortDesc: "Rich, hot barista-brewed specialty coffee.",
    icon: CoffeeCupIcon,
    details: {
      tagline: "Where locals meet & coffee brews",
      description: "Savour premium 100% Arabica beans ethically sourced and craft-roasted, prepared by passionate local baristas in our cozy store seating area.",
      highlights: [
        "Ethically sourced 100% Arabica coffee beans",
        "Espresso-based classics (Flat White, Latte, Cappuccino)",
        "Cozy storefront seating with community vibes",
        "Pairs perfectly with our daily fresh pastries"
      ],
      badge: "☕ 100% Arabica Blend"
    }
  },
  {
    title: "Premium Biltong",
    shortDesc: "High-protein, traditional dried cured meat.",
    icon: SteerHeadIcon,
    details: {
      tagline: "A South African classic cured to perfection",
      description: "Taste the difference of premium grass-fed local beef, air-dried naturally and spiced using our secret traditional family blend.",
      highlights: [
        "100% Grass-fed South African beef",
        "Naturally air-cured with coriander, salt, and vinegar",
        "High-protein snack with zero artificial preservatives",
        "Options: Sliced biltong, dry-wors (droëwors), chilli bites"
      ],
      badge: "🥩 100% Local Beef"
    }
  },
  {
    title: "Flavourful Spices",
    shortDesc: "Custom non-irradiated seasoning blends.",
    icon: SpiceBowlIcon,
    details: {
      tagline: "Elevate your braai & kitchen creations",
      description: "Discover our proprietary, hand-mixed dry spice rubs and barbecue salts designed to bring out the maximum flavor in your meals.",
      highlights: [
        "100% Non-irradiated natural herbs and spices",
        "No chemical flowing-agents, MSG, or artificial fillers",
        "Signature custom braai salts & steak seasonings",
        "Perfect for weeknight cooking and weekend barbecues"
      ],
      badge: "🌶️ MSG-Free & Natural"
    }
  },
  {
    title: "Baked Goodness",
    shortDesc: "Freshly baked pastries and treats daily.",
    icon: CroissantIcon,
    details: {
      tagline: "Daily baked goods, straight from the oven",
      description: "Indulge in freshly baked sweet and savoury pastries delivered fresh every morning, prepared using stoneground flour and real butter.",
      highlights: [
        "Baked fresh daily and delivered early morning",
        "Prepared with real butter and quality local flour",
        "Selection: Golden croissants, muffins, sweet pastries",
        "The ultimate companion to a warm barista coffee"
      ],
      badge: "🥐 Baked Fresh Daily"
    }
  }
];

export default function Pillars() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="offerings" className="py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue uppercase mb-2">
            The 5 Pillars
          </h2>
          <p className="font-script text-3xl text-brand-navy">
            Everything you need, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Tab Stack (lg:col-span-5) */}
          <div className="lg:col-span-5 relative pl-4">
            <div className="space-y-4 relative">
              {/* Connecting vertical line */}
              <div className="absolute top-8 bottom-8 left-[2.2rem] w-px bg-brand-blue/20 -z-10" />
              
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isActive = activeTab === index;

                return (
                  <button 
                    key={pillar.title}
                    onClick={() => setActiveTab(index)}
                    className="w-full flex items-start gap-6 relative text-left group focus:outline-none transition-all duration-300 rounded-3xl p-3 -m-3 hover:bg-brand-blue/5"
                  >
                    {/* Circle Icon Badge */}
                    <div 
                      className={`h-16 w-16 shrink-0 rounded-full flex items-center justify-center relative z-10 border-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-brand-blue text-white border-brand-cream shadow-lg shadow-brand-blue/30 scale-110' 
                          : 'bg-white text-brand-blue border-white shadow-md shadow-brand-navy/5 group-hover:scale-105'
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    {/* Text Details */}
                    <div className="pt-2 flex-1">
                      <h3 
                        className={`text-lg font-bold uppercase tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-brand-blue' : 'text-brand-navy group-hover:text-brand-blue'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-brand-base/60 max-w-xs leading-relaxed">
                        {pillar.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Detail Panel (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-wood-texture rounded-[2.5rem] p-8 lg:p-12 border border-brand-wood/40 shadow-2xl shadow-brand-navy/10 relative overflow-hidden flex flex-col justify-between min-h-[500px]"
              >
                {/* Blue brand bar top accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue" />
                
                {/* Content Area */}
                <div>
                  {/* Floating Tag and Title */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-block bg-brand-blue text-white text-[10px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-md shadow-brand-blue/10">
                      {pillars[activeTab].details.badge}
                    </span>
                    <span className="text-brand-navy/40 font-bold uppercase tracking-widest text-[11px]">
                      Pillar 0{activeTab + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-brand-navy uppercase leading-none tracking-tight mb-2">
                    {pillars[activeTab].title}
                  </h3>
                  
                  <p className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-6">
                    {pillars[activeTab].details.tagline}
                  </p>

                  <p className="text-base font-medium text-brand-navy/80 leading-relaxed mb-8">
                    {pillars[activeTab].details.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-3 border-b border-brand-navy/10 pb-2">
                      Key Highlights & Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillars[activeTab].details.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3">
                          <div className="h-5 w-5 shrink-0 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5 border border-brand-blue/20">
                            <Check className="h-3.5 w-3.5 text-brand-blue" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-semibold text-brand-navy/90 leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Integrated Grand Opening Footer Banner */}
                <div className="mt-12 pt-6 border-t border-brand-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Grand Opening This Friday
                    </span>
                  </div>
                  <div className="inline-flex bg-brand-blue text-white px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md shadow-brand-blue/25">
                    10:00 AM • 35 Elizabeth Ave
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
