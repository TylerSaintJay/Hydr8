import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

const menuItems = [
  { id: 1, title: 'Water', src: '/assets/menu/1.jpeg' },
  { id: 2, title: 'Coffee', src: '/assets/menu/2.jpeg' },
  { id: 3, title: 'Biltong', src: '/assets/menu/3.jpeg' },
  { id: 4, title: 'Baked Goods', src: '/assets/menu/4.jpeg' },
  { id: 5, title: 'Local Treasures', src: '/assets/menu/5.jpeg' },
  { id: 6, title: 'Spices & Braai Essentials', src: '/assets/menu/6.jpeg' },
];

export default function MenuCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCard, setSelectedCard] = useState<typeof menuItems[0] | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-8 sm:py-16 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 text-center relative">
        <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest shadow-sm">
          <span>Pre-Orders Available</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight">
          Explore Our Menu
        </h2>
        <div className="w-24 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
      </div>

      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto pb-10 px-6 lg:px-8 snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {menuItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => {
              if (!isDragging) {
                setSelectedCard(item);
              }
            }}
            className="snap-center shrink-0 w-[80vw] sm:w-[400px] aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-chalk group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent z-10" />
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-3xl font-black text-white drop-shadow-md">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-slate/80 backdrop-blur-sm"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-brand-cream rounded-3xl p-2 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="w-full h-full overflow-y-auto rounded-2xl scrollbar-none">
                <img
                  src={selectedCard.src}
                  alt={selectedCard.title}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
