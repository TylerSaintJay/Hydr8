import { motion } from 'motion/react';
import { CheckCircle2, Droplets } from 'lucide-react';

export default function WaterLab() {
  const bulkRates = [
    { size: '5 Litre', price: 'R 15.00', popular: false },
    { size: '10 Litre', price: 'R 25.00', popular: true },
    { size: '20 Litre', price: 'R 45.00', popular: false },
    { size: '25 Litre', price: 'R 55.00', popular: false },
  ];

  const variants = [
    { name: 'Reverse Osmosis', color: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' },
    { name: 'Alkaline Water', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { name: 'Prepared Still', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue uppercase mb-4">
            The Water Lab
          </h2>
          <p className="font-script text-3xl text-brand-navy">
            Pure hydration, filled your way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Bulk Filling Rates Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 lg:p-10 border border-brand-blue/10 shadow-xl shadow-brand-blue/5 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy uppercase">Bulk Refill Rates</h3>
                <p className="text-sm font-medium text-brand-base/60">Bring your own container and save.</p>
              </div>
            </div>

            <div className="space-y-4">
              {bulkRates.map((rate) => (
                <div 
                  key={rate.size}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                    rate.popular ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-100 bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-brand-navy">{rate.size}</span>
                    {rate.popular && (
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-brand-blue text-white px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <span className={`text-xl font-black ${rate.popular ? 'text-brand-blue' : 'text-brand-navy'}`}>
                    {rate.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Master Label System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-navy rounded-[2rem] p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background graphic */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">One Master Label</h3>
              <p className="text-sm font-medium text-white/60 mb-8 max-w-sm">
                Our retail bottles use a single, elegant master label. We simply check the box for your chosen water variant.
              </p>

              <div className="space-y-3">
                {variants.map((variant) => (
                  <div key={variant.name} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="h-6 w-6 rounded-md bg-white border-2 border-brand-blue flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue" strokeWidth={3} />
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-white font-bold tracking-wide uppercase text-sm">
                        {variant.name}
                      </span>
                      <div className="flex-1 border-b border-white/20 border-dashed" />
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full border ${variant.color}`}>
                        Variant
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Environmentally Conscious</span>
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest">100% Recyclable</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
