import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

const mediaItems = [
  {
    title: "Cozy Linmeyer Café & Lounge",
    subtitle: "Sit. Savour. Stay. Free WiFi • Artisan Coffee • Warm Vibes",
    img: "/assets/cafe_interior.png",
    type: "Store Experience"
  },
  {
    title: "State-of-the-Art Water Lab",
    subtitle: "8-Stage Reverse Osmosis & Remineralization Purification Station",
    img: "/assets/water_lab_view.png",
    type: "Lab Station"
  },
  {
    title: "Artisanal Biltong & Braai Spices",
    subtitle: "Grass-Fed Beef Cured Traditionally • Non-Irradiated Spices",
    img: "/assets/biltong_spices_shelf.png",
    type: "Boutique Retail"
  },
  {
    title: "Premium Hydr8 Lifestyle",
    subtitle: "Water, Espresso, Biltong, and Daily Bakery Goodness",
    img: "/assets/hydr8_lifestyle.png",
    type: "Lifestyle Showcase"
  }
];

export default function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="h-4 w-4" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue uppercase tracking-tight mb-2">
            Inside Hydr8 Linmeyer
          </h2>
          <p className="font-script text-3xl text-brand-navy">
            Take a look around our storefront & boutique space
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-brand-slate overflow-hidden border-4 border-white shadow-2xl">
          
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentMedia.img}
                src={currentMedia.img}
                alt={currentMedia.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/90 via-brand-slate-dark/30 to-transparent" />

            {/* Floating Details Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-blue text-[10px] font-extrabold uppercase tracking-wider mb-2">
                  {currentMedia.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {currentMedia.title}
                </h3>
                <p className="text-sm font-medium text-white/80 mt-1">
                  {currentMedia.subtitle}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="h-11 w-11 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-all active:scale-95 border border-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <span className="text-xs font-bold tracking-widest text-white/70 px-2">
                  {currentIndex + 1} / {mediaItems.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="h-11 w-11 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-all active:scale-95 border border-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator Bar */}
          <div className="bg-brand-slate-dark py-4 px-6 flex justify-center gap-2 border-t border-white/10">
            {mediaItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-brand-blue' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
