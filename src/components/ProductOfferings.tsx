import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Beef, Coffee, CakeSlice, Gift, Flame, Plus, ShoppingBag } from 'lucide-react';
import productsData from '../data/productsData.json';

interface ProductOfferingsProps {
  onAddToCart: (product: any) => void;
}

export default function ProductOfferings({ onAddToCart }: ProductOfferingsProps) {
  const [activeTabId, setActiveTabId] = useState(productsData[0].id);

  const iconMap: Record<string, any> = {
    Droplet: Droplets,
    Beef: Beef,
    Coffee: Coffee,
    CakeSlice: CakeSlice,
    Gift: Gift,
    Flame: Flame
  };

  const activeCategory = productsData.find(c => c.id === activeTabId) || productsData[0];

  return (
    <section id="offerings" className="py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
            <ShoppingBag className="h-4 w-4" />
            <span>Storefront Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue uppercase tracking-tight mb-4">
            The 6 Product Offerings
          </h2>
          <p className="font-script text-3xl text-brand-navy">
            From lab-tested water to artisanal braai spices & gourmet treats
          </p>
        </div>

        {/* 6 Category Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {productsData.map((cat) => {
            const Icon = iconMap[cat.icon] || Droplets;
            const isActive = cat.id === activeTabId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border ${
                  isActive
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20 scale-105'
                    : 'bg-white text-brand-navy border-brand-blue/10 hover:bg-brand-cream-warm hover:border-brand-blue/30'
                }`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  isActive ? 'bg-white/20 text-white' : 'bg-brand-blue/10 text-brand-blue'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider leading-tight">
                  {cat.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Header Card */}
        <div className="bg-wood-texture rounded-3xl p-8 mb-8 border border-brand-wood/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">
              Category Showcase
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase tracking-tight">
              {activeCategory.title}
            </h3>
            <p className="text-sm font-medium text-brand-navy/70 mt-1">
              {activeCategory.description}
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-brand-navy text-white shadow-md">
            {activeCategory.items.length} Products Available
          </span>
        </div>

        {/* Product Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeCategory.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-brand-blue/10 shadow-lg shadow-brand-navy/5 hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-cream-warm text-brand-blue border border-brand-blue/10">
                      {item.unit}
                    </span>
                    <span className="text-xl font-black text-brand-blue">
                      {item.priceDisplay}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
                    {item.name}
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-blue/5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-brand-navy/50">In Stock • Linmeyer</span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs transition-all shadow-md active:scale-95"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
