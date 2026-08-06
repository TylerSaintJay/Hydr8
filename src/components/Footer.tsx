import { motion } from 'motion/react';
import { MapPin, Clock, Droplets, ArrowRight, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const hours = [
    { day: 'Mon – Fri', time: '08:00 – 19:00', note: 'Full store & refill service' },
    { day: 'Saturday', time: '08:00 – 17:00', note: 'Weekend coffee & refills' },
    { day: 'Sunday', time: '08:00 – 14:00', note: 'Essential top-ups & treats' },
  ];

  return (
    <footer id="location" className="bg-transparent pb-12 pt-16">
      
      {/* Signature Tagline Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-brand-blue overflow-hidden px-6 py-16 sm:py-20 flex flex-col items-center justify-center text-center shadow-2xl shadow-brand-blue/20"
        >
          {/* Decorative background texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-xl" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="hidden sm:block text-brand-cream/30 text-2xl mb-4">—</span>
            <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-white drop-shadow-md">
              Sit. Savour. Stay. <span className="font-sans text-brand-cream">♡</span>
            </h2>
            <p className="font-chalk text-2xl text-amber-200 mt-2">
              Freshly made daily
            </p>
            <span className="hidden sm:block text-brand-cream/30 text-2xl mt-4">—</span>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 border-t border-brand-blue/10 pt-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-blue/10">
                <Droplets className="h-6 w-6 text-brand-blue" />
              </div>
              <span className="text-2xl font-black tracking-tight text-brand-blue uppercase">Hydr8</span>
            </div>
            <p className="text-sm font-medium text-brand-navy/70 leading-relaxed max-w-xs mb-6">
              Everything you need, all in one place. Your neighbourhood destination for 8-stage purified water, craft coffee, artisan biltong, fresh bakery, and braai spices.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1.5 rounded-xl inline-flex border border-emerald-200">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: 062 183 6915</span>
            </div>
          </div>

          {/* Location Col */}
          <div>
            <h3 className="text-lg font-bold text-brand-navy uppercase tracking-widest mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-blue" />
              The Storefront
            </h3>
            <div className="space-y-3 text-sm font-medium text-brand-navy/80">
              <p className="text-xl font-bold text-brand-navy">35 Elizabeth Ave</p>
              <p className="text-base">Linmeyer, JHB South</p>
              <p>Johannesburg, 2190</p>
              
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=35+Elizabeth+Ave,+Linmeyer,+Johannesburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
                >
                  Get Directions <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Hours Col */}
          <div>
            <h3 className="text-lg font-bold text-brand-navy uppercase tracking-widest mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-blue" />
              Trading Hours
            </h3>
            <div className="space-y-4">
              {hours.map((slot) => (
                <div key={slot.day} className="flex flex-col border-b border-brand-blue/5 pb-3 last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-navy">{slot.day}</span>
                    <span className="text-sm font-bold text-brand-blue">{slot.time}</span>
                  </div>
                  <span className="text-[11px] font-medium text-brand-navy/50 uppercase tracking-widest mt-1">
                    {slot.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-brand-blue/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-navy/40">
            &copy; {new Date().getFullYear()} Hydr8 Linmeyer. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-brand-navy/40">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
