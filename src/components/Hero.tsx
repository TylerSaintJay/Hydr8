import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-transparent pt-32 pb-16 lg:pt-40 flex items-center">
      {/* Decorative wood texture blob */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-wood-texture opacity-30 blur-3xl pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl w-full flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-8">
        
        {/* Left: Text Content */}
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl sm:text-8xl lg:text-[10rem] font-black text-brand-blue leading-none tracking-tighter uppercase mb-4"
          >
            Hydr8
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-8"
          >
            {/* Small decorative lines around the script font similar to the flyer */}
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-brand-blue/30 hidden sm:block">\\\</span>
            <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-relaxed px-4">
              Everything you need,<br />
              <span className="text-brand-blue">all in one place</span>
            </h2>
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-brand-blue/30 hidden sm:block">///</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center rounded-full bg-brand-blue px-6 py-2.5 text-sm sm:text-base font-bold tracking-[0.2em] text-white uppercase shadow-lg shadow-brand-blue/20"
          >
            Drink &bull; Enjoy &bull; Refresh
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-sm font-bold tracking-widest text-brand-navy/60 uppercase"
          >
            Water &bull; Coffee &bull; Biltong<br className="sm:hidden" /> &bull; Spices &bull; Baked Goods
          </motion.p>
        </div>

        {/* Right: Lifestyle Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full lg:w-1/2 flex items-center justify-center animate-glow"
        >
          <div className="relative w-full max-w-lg">
            {/* Decorative background glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-wood/10 blur-2xl -z-10" />
            
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-brand-navy/15">
              <img
                src="/assets/hydr8_lifestyle.png"
                alt="Hydr8 Premium Lifestyle Offerings"
                className="w-full h-auto object-cover aspect-[4/3] scale-100 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
