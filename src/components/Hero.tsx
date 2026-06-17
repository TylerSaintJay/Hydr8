import { motion } from 'motion/react';
import { ArrowRight, Droplets, MapPin, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-brand-sand pt-32 pb-16 lg:pt-40">
      {/* Background glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-[800px] w-[800px] rounded-full bg-brand-teal/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[600px] w-[600px] rounded-full bg-brand-wood/15 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:px-8 lg:gap-16">
        
        {/* ── Left: Text Content ── */}
        <div className="flex max-w-2xl flex-col items-start text-left lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/8 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal mb-8"
          >
            <Droplets className="h-3.5 w-3.5" />
            <span>Premium Purified Water · Linmeyer, JHB</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-light text-brand-navy sm:text-6xl lg:text-7xl leading-[0.95] mb-6 tracking-tight"
          >
            Sit.{' '}
            <span className="italic font-serif text-brand-teal">Savour.</span>
            <br />
            Stay.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-md leading-relaxed mb-4"
          >
            Not just water — an experience. Hydr8 is your neighbourhood destination for 7-step purified water, craft coffee, artisan biltong, and freshly baked goods.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['SANAS Lab Tested', 'Zero Microplastics', '7-Step Purified'].map(badge => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-ocean bg-white border border-brand-teal/15 rounded-full px-3 py-1 shadow-sm">
                <ShieldCheck className="h-3 w-3 text-brand-cyan" />
                {badge}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row w-full gap-4 sm:w-auto"
          >
            <button className="group flex items-center justify-center gap-2 rounded-xl bg-brand-teal px-8 py-4 text-center font-bold text-white transition-all hover:bg-brand-ocean shadow-xl shadow-brand-teal/25">
              Join Refill Membership
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-brand-wood/30 bg-white/80 shadow-sm px-8 py-4 text-sm font-bold text-[#8B7355] transition-all hover:bg-brand-wood/10">
              <MapPin className="h-5 w-5 text-brand-wood" />
              Visit Us in Linmeyer
            </button>
          </motion.div>
        </div>

        {/* ── Right: Bottle Image ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full lg:w-1/2 flex items-center justify-center"
        >
          {/* Glow behind bottle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[400px] w-[400px] rounded-full bg-brand-teal/10 blur-3xl" />
          </div>

          <div className="relative max-w-sm w-full mx-auto lg:mx-0 lg:ml-auto">
            {/* Floating stat card – top left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-4 top-10 z-20 bg-white/90 backdrop-blur-lg rounded-2xl px-4 py-3 shadow-xl border border-white flex items-center gap-3"
            >
              <div className="h-8 w-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-brand-base/40 tracking-wider">Purity</div>
                <div className="text-sm font-bold text-brand-navy">100% Safe</div>
              </div>
            </motion.div>

            {/* Bottle image */}
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#deeaf2] via-[#eef3f7] to-[#e8f1f6] shadow-2xl">
              <img
                src="/assets/bottle.png"
                alt="Hydr8 Premium Purified Water Bottle"
                className="w-full h-auto object-cover object-center"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Floating stat card – bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-xl border border-white w-[90%]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-brand-navy text-sm">Lab Tested Purity</span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full">100% Safe</span>
              </div>
              <div className="w-full bg-brand-sand rounded-full h-1.5 mb-1.5">
                <div className="bg-brand-teal h-1.5 rounded-full w-full" />
              </div>
              <div className="text-[11px] font-medium text-brand-ocean">Zero Heavy Metals • Zero Microplastics</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
