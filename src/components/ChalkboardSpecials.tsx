import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ShoppingBag, Heart, Coffee, Droplets, Utensils } from 'lucide-react';
import specialsData from '../data/specialsData.json';

interface ChalkboardSpecialsProps {
  onAddToCart: (item: any) => void;
}

export default function ChalkboardSpecials({ onAddToCart }: ChalkboardSpecialsProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = specialsData.categories;
  const currentCategory = categories[activeCategoryIndex];

  const categoryIcons = [Utensils, Droplets, Coffee];

  return (
    <section id="specials" className="py-20 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Outer Chalkboard Frame */}
        <div className="relative bg-chalkboard rounded-[3rem] p-8 sm:p-12 lg:p-16 border-8 border-brand-wood/30 shadow-2xl overflow-hidden">
          
          {/* Subtle Chalk Dust Effect & Wood Trim */}
          <div className="absolute top-0 left-0 w-full h-3 bg-brand-wood/40" />
          <div className="absolute bottom-0 left-0 w-full h-3 bg-brand-wood/40" />
          
          {/* Chalkboard Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
              <span>Linmeyer Daily Board</span>
            </div>
            
            <h2 className="font-chalk text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none mb-4 drop-shadow-md">
              Hydr8 Daily Specials
            </h2>
            
            <p className="font-script text-2xl sm:text-3xl text-amber-200/90">
              Freshly made • Prepared with love & precision ♡
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none relative z-10">
            {categories.map((cat, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              const isActive = activeCategoryIndex === index;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                    isActive
                      ? 'bg-amber-400 text-brand-slate border-amber-300 shadow-lg shadow-amber-400/20 scale-105'
                      : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Subtitle */}
          <div className="text-center mb-8">
            <span className="font-chalk text-2xl text-amber-200/80 tracking-wider">
              ~ {currentCategory.subtitle} ~
            </span>
          </div>

          {/* Animated Chalkboard Menu Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            >
              {currentCategory.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 backdrop-blur-xs rounded-3xl p-6 border border-white/10 hover:border-amber-300/40 transition-all duration-300 flex flex-col justify-between group hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30">
                        {item.badge}
                      </span>
                      <div className="text-right">
                        <span className="font-chalk text-3xl font-bold text-amber-300 block leading-none">
                          {item.price}
                        </span>
                        <span className="text-[10px] text-white/50 font-medium tracking-wide">
                          {item.unit}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-sans text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-white/40 font-medium flex items-center gap-1">
                      <Heart className="h-3 w-3 text-rose-400" /> Fresh Daily
                    </span>
                    <button
                      onClick={() => onAddToCart({
                        id: item.name.toLowerCase().replace(/\s+/g, '-'),
                        name: item.name,
                        price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 25,
                        priceDisplay: item.price,
                        unit: item.unit,
                        category: currentCategory.name
                      })}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-brand-slate font-bold text-xs transition-all shadow-md active:scale-95"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

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
