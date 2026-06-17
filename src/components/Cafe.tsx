import { motion } from 'motion/react';
import { Coffee, Flame, Croissant, GlassWater, Beef, MapPin, ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Craft Coffee",
    desc: "Expertly brewed barista coffee to start your morning right.",
    icon: Coffee,
    emoji: "☕"
  },
  {
    name: "Fresh Baked Goods",
    desc: "Daily selections of artisanal pastries and treats.",
    icon: Croissant,
    emoji: "🥐"
  },
  {
    name: "Artisanal Biltong",
    desc: "Premium, locally sourced biltong and droëwors.",
    icon: Beef,
    emoji: "🥩"
  },
  {
    name: "Braai Essentials",
    desc: "Quality charcoal and fire lighters for your weekend braai.",
    icon: Flame,
    emoji: "🔥"
  },
  {
    name: "Sparkling Water",
    desc: "Our signature purified water, perfectly carbonated.",
    icon: GlassWater,
    emoji: "💧"
  }
];

export default function Cafe() {
  return (
    <section id="cafe" className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-ocean/40 blur-[100px] pointer-events-none" />

      {/* Top divider accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal/0 via-brand-teal to-brand-teal/0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-wood/40 bg-brand-wood/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-wood mb-6"
            >
              <MapPin className="h-3.5 w-3.5" />
              The Linmeyer Shop
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-light text-white sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            >
              More than just water.
              <br />
              <span className="italic font-serif text-brand-wood">A neighbourhood staple.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <p className="text-white/60 text-base leading-relaxed max-w-xs mb-6">
              Step into our Linmeyer lifestyle shop. Framed in warm oak and bright spaces — your local stop for daily essentials.
            </p>
            <a
              href="https://maps.google.com/?q=Linmeyer,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-wood/20 border border-brand-wood/30 px-6 py-3 text-sm font-bold text-brand-wood hover:bg-brand-wood/30 transition-all"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-brand-wood/40 transition-all duration-300 cursor-default flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="h-14 w-14 rounded-2xl bg-brand-wood/15 flex items-center justify-center mb-4 group-hover:bg-brand-wood/25 transition-colors border border-brand-wood/20">
                  <Icon className="h-7 w-7 text-brand-wood" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 leading-snug">{product.name}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{product.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10"
        >
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 rounded-full bg-brand-teal" />
            <span className="text-white/40 text-sm font-medium tracking-wide">Linmeyer, Johannesburg South</span>
          </div>
          <div className="flex gap-8 text-center">
            {[
              { label: 'Mon – Fri', value: '7am – 6pm' },
              { label: 'Saturday', value: '8am – 4pm' },
              { label: 'Sunday', value: '9am – 2pm' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-[10px] uppercase font-bold text-white/30 tracking-wider mb-1">{label}</div>
                <div className="text-sm font-bold text-white">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
