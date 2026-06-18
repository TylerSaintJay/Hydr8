import { motion } from 'motion/react';
import { BadgeCheck, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I used to lug heavy 5L Checkers bottles home every week. The Hydr8 membership at their café is a completely different experience. Safe, cheaper, and no plastic guilt.",
    author: "Sarah V.",
    role: "Local Mom & Shopper",
  },
  {
    quote: "As a coach, hydration isn't just about drinking water; it's about what's IN the water. The remineralization process they use is lab-verified. Highly recommend.",
    author: "Thabo M.",
    role: "Fitness Coach",
  },
  {
    quote: "It's literally my 'third place' now. I grab my refills, have a quick meeting, and enjoy the neighbourhood vibe. The water tastes incredibly pure.",
    author: "Jenna L.",
    role: "Graphic Designer",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Wood-tone element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 h-[500px] w-[500px] rounded-full bg-wood-texture opacity-20 blur-[80px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/50 backdrop-blur px-5 py-2 text-brand-navy shadow-sm mb-6"
          >
            <BadgeCheck className="h-4 w-4 text-brand-blue" />
            <span className="font-semibold text-xs tracking-wider uppercase">SANAS Accredited Lab Tested</span>
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl text-center">
            "Is it genuinely safe?"
          </h2>
          <p className="mt-4 text-lg text-brand-base/60 max-w-2xl text-center leading-relaxed">
            Don't just take our word for it. Our water is independently lab-tested exceeding municipal standards, and loved by our community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-[2rem] bg-wood-texture p-8 shadow-xl shadow-brand-navy/5 border border-brand-wood/40 flex flex-col justify-between text-brand-navy"
            >
              <div>
                <Quote className="h-8 w-8 text-brand-blue/70 mb-6" />
                <p className="text-lg italic font-sans leading-snug mb-8 relative z-10 text-brand-navy/90">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-auto border-t border-brand-navy/10 pt-6">
                <div className="font-bold">{t.author}</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-brand-blue mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
