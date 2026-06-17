import { motion } from 'motion/react';
import { Filter, Droplet, Zap, Sun, ShieldCheck, Activity, GlassWater } from 'lucide-react';

const steps = [
  {
    title: "Sediment Filtration",
    desc: "Removes visible particles, rust, and silt.",
    icon: Filter,
  },
  {
    title: "Carbon Pre-Filtering",
    desc: "Eliminates chlorine, bad tastes, and odors.",
    icon: GlassWater, // Placeholder for carbon block
  },
  {
    title: "Water Softening",
    desc: "Removes harsh minerals that cause scaling.",
    icon: Droplet,
  },
  {
    title: "Reverse Osmosis",
    desc: "The core engine filtering to 0.0001 microns.",
    icon: Activity,
  },
  {
    title: "UV Sterilization",
    desc: "Neutralizes 99.9% of harmful microorganisms.",
    icon: Sun,
  },
  {
    title: "Ozonation",
    desc: "Oxygen-infused purification for extended freshness.",
    icon: Zap,
  },
  {
    title: "Remineralization",
    desc: "Infusing optimal electrolytes for cellular hydration.",
    icon: ShieldCheck,
  }
];

export default function Purification() {
  return (
    <section id="purification" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-ocean font-bold tracking-[0.2em] uppercase text-[10px] mb-3"
          >
            "Is It Just Tap Water?"
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-2 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl"
          >
            Our 7-Step Purification
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 text-lg text-brand-base/60 leading-relaxed"
          >
            We don't just filter; we reconstruct. Our intensive process ensures every drop is pristine, oxygenated, and perfectly balanced for biohacking your hydration.
          </motion.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand-teal/30 bg-white/40 backdrop-blur-sm shadow-sm transition-all group-hover:border-brand-teal group-hover:scale-110 group-hover:shadow-md">
                      <Icon className="h-6 w-6 text-brand-ocean" strokeWidth={2} />
                    </div>
                    <div className="absolute top-8 left-1/2 -ml-3 -mt-3 hidden lg:block w-full border-t border-brand-teal/20 -z-10 group-last:border-none" style={{ left: 'calc(50% + 2rem)', width: 'calc(100% - 4rem)' }} />
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                       <span className="text-brand-cyan font-bold">{index + 1}.</span> {step.title}
                    </h3>
                    <p className="text-brand-base/60 text-sm max-w-[200px]">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
