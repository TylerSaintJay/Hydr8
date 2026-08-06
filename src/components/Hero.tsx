import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-transparent pt-32 pb-16 lg:pt-40 flex items-center">
      {/* Decorative wood texture blob */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-wood-texture opacity-30 blur-3xl pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl w-full flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-8">
        
        {/* Text Content */}
        <div className="flex w-full flex-col items-center text-center">
          
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


      </div>
    </section>
  );
}
