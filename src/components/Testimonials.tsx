import { motion } from 'motion/react';
import { BadgeCheck, Quote } from 'lucide-react';

import { MessageCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "About Hydr8.... Hope I have that right.... A wonderful initiative right in our midst! The great water story, really reasonably priced coffee packets of good quality for your home brewing... And!!!! That wonderful Australian gingerbeer! Wonderful as a special luxury treat! Well done Dante' and others.",
    author: "Local Resident",
    role: "Verified WhatsApp Customer",
    platform: "WhatsApp"
  },
  {
    quote: "The best water I've ever tasted, and their biltong is incredible! Great local spot in Linmeyer.",
    author: "Google Reviewer",
    role: "Local Guide",
    platform: "Google"
  },
  {
    quote: "Used them for the first time today. Absolute pleasure to deal with, quick and easy ordering process. The water tastes so much better than what we used before.",
    author: "Satisfied Customer",
    role: "Verified WhatsApp Customer",
    platform: "WhatsApp"
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
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-navy/5 border border-brand-blue/10 flex flex-col justify-between text-brand-navy"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-brand-blue/30" />
                  {t.platform === 'WhatsApp' ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                      <MessageCircle className="h-3 w-3" /> WhatsApp
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 border border-red-500/20 text-[10px] font-bold uppercase tracking-wider">
                      Google Review
                    </div>
                  )}
                </div>
                <p className="text-lg italic font-sans leading-snug mb-8 relative z-10 text-brand-navy/80">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-auto border-t border-brand-blue/5 pt-6">
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
