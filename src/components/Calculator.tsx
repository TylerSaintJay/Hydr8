import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Leaf } from 'lucide-react';

export default function Calculator() {
  const [bottlesPerWeek, setBottlesPerWeek] = useState(3);
  
  const retailPrice = 40; // Average R40 for 5L
  const hydr8Price = 15;  // R15 for 5L Refill
  
  const weeklySavings = (retailPrice * bottlesPerWeek) - (hydr8Price * bottlesPerWeek);
  const yearlySavings = weeklySavings * 52;
  const plasticBottlesSaved = bottlesPerWeek * 52;

  return (
    <section id="calculator" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl mb-6">
              "Is it cheaper elsewhere?"
            </h2>
            <p className="text-lg text-brand-base/60 leading-relaxed mb-8">
              Compare our exactingly processed premium water refills against standard grocery store 5L bottles (Checkers, Woolworths). Hydr8 doesn't just treat your body better—it treats your wallet and the planet better.
            </p>

            <div className="bg-brand-cream rounded-[2rem] p-8 shadow-xl border border-brand-blue/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold text-brand-wood bg-brand-wood/10 px-3 py-1 rounded-full uppercase tracking-[0.2em]">Calculator</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-blue/10 rounded-full border border-brand-blue/20">
                  <CalcIcon className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Calculate Your Savings</h3>
              </div>

              <div className="mb-8">
                <label className="flex justify-between text-sm font-semibold text-brand-navy mb-4">
                  <span>How many 5L bottles do you use a week?</span>
                  <span className="text-xl text-brand-blue font-bold">{bottlesPerWeek}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  value={bottlesPerWeek} 
                  onChange={(e) => setBottlesPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer border border-brand-blue/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-blue"
                />
                <div className="flex justify-between text-[10px] font-bold text-brand-base/40 mt-3 uppercase tracking-wider">
                  <span>1 Bottle</span>
                  <span>15 Bottles</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl flex items-center justify-between col-span-2">
                  <div className="text-sm font-medium text-brand-base/60">Retail Store <span className="text-xs text-brand-base/40 block">Checkers/Woolies</span></div>
                  <div className="text-lg font-bold text-brand-base/40">R{retailPrice * bottlesPerWeek}/wk</div>
                </div>
                <div className="w-full h-1 bg-white rounded-full col-span-2 -mt-4 mb-2">
                  <div className="w-full h-full bg-brand-base/10 rounded-full"></div>
                </div>
                <div className="p-4 rounded-xl flex items-center justify-between col-span-2">
                  <div className="text-sm font-bold text-brand-navy">Hydr8 Refill</div>
                  <div className="text-xl font-black text-brand-blue">R{hydr8Price * bottlesPerWeek}/wk</div>
                </div>
                <div className="w-full h-2 bg-white rounded-full col-span-2 -mt-4">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: `${(hydr8Price / retailPrice) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy p-10 shadow-xl text-white flex flex-col justify-between h-full border border-brand-blue/20">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-48 w-48 rounded-full bg-brand-blue/20 blur-[50px]"></div>
              <div>
                <h3 className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Membership Savings</h3>
                <div className="text-5xl font-extrabold tracking-tight mb-2">
                  R{yearlySavings.toLocaleString('en-ZA')}
                </div>
                <p className="text-white/60 text-sm">Estimated savings per year.</p>
              </div>
              
              <hr className="my-8 border-white/5" />
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 mb-8">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Eco Impact</div>
                  <div className="text-sm font-bold">{plasticBottlesSaved} Plastic Bottles Saved</div>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-brand-blue px-6 py-4 text-center font-bold text-white transition-transform hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20">
                View Membership Plans
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
