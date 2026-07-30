import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Sparkles, Droplets, Zap, Activity } from 'lucide-react';

interface Stage {
  number: number;
  name: string;
  short: string;
  icon: any;
  purpose: string;
  technical: string;
  benefit: string;
}

const roStages: Stage[] = [
  {
    number: 1,
    name: "5-Micron Sediment Filtration",
    short: "Sediment Trap",
    icon: ShieldCheck,
    purpose: "Removes coarse rust, sand, silt, and suspended pipe debris.",
    technical: "High-density poly-spun cartridge traps particles larger than 5 microns.",
    benefit: "Protects downstream carbon beds and ensures crystal-clear visual clarity."
  },
  {
    number: 2,
    name: "Granular Activated Carbon (GAC)",
    short: "Organic Carbon",
    icon: Sparkles,
    purpose: "Absorbs municipal chlorine, chloramines, bad odors, and organic chemicals.",
    technical: "Premium coconut shell activated carbon with immense micropore surface area.",
    benefit: "Eliminates harsh chemical taste and municipal tap odors."
  },
  {
    number: 3,
    name: "1-Micron Carbon Block Polish",
    short: "Micro Carbon Block",
    icon: ShieldCheck,
    purpose: "Fine-polishes water and catches microscopic carbon fines.",
    technical: "Extruded solid carbon block filter preventing bypass.",
    benefit: "Ensures zero chemical carryover before the RO membrane."
  },
  {
    number: 4,
    name: "High-Rejection RO Membrane",
    short: "0.0001μ RO Core",
    icon: Droplets,
    purpose: "Forces water under high pressure through a semi-permeable membrane.",
    technical: "Pore size of 0.0001 microns—strips heavy metals, nitrates, fluoride, and microplastics.",
    benefit: "Delivers 99.9% pure H2O at a molecular level."
  },
  {
    number: 5,
    name: "Mineral Infusion & Alkaline Balance",
    short: "Remineralization",
    icon: Activity,
    purpose: "Infuses pure Calcium, Magnesium, and essential electrolytes back into purified water.",
    technical: "Natural bio-ceramic mineral media balancing pH from neutral (7.0) to Alkaline (8.5+).",
    benefit: "Optimal hydration, crisp natural taste, and essential mineral replenishment."
  },
  {
    number: 6,
    name: "Post-Carbon Taste Refiner",
    short: "T33 Taste Refiner",
    icon: Sparkles,
    purpose: "Final polishing stage right before bottling.",
    technical: "Inline coconut GAC filter stabilizing water pH and taste notes.",
    benefit: "Smooth, velvety mouthfeel with zero lingering aftertaste."
  },
  {
    number: 7,
    name: "Ultraviolet (UV) Sterilization",
    short: "UV Disinfection",
    icon: Zap,
    purpose: "Destroys 99.99% of bacteria, viruses, and pathogens without chemicals.",
    technical: "254nm germicidal UV lamp disrupting microbial DNA structure.",
    benefit: "100% biological safety guaranteed without adding chemicals or chlorine."
  },
  {
    number: 8,
    name: "Ozone Injection & Oxygenation",
    short: "O3 Oxygenation",
    icon: Sparkles,
    purpose: "Final sanitization of bottling lines and water micro-oxygenation.",
    technical: "Controlled ozone gas injection dissipating back into pure dissolved oxygen.",
    benefit: "Extends shelf freshness and keeps refill jugs completely sterile."
  }
];

export default function WaterEducation() {
  const [activeStageIndex, setActiveStageIndex] = useState(3); // RO Core default
  const activeStage = roStages[activeStageIndex];

  return (
    <section id="water-education" className="py-24 bg-brand-slate text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 h-[600px] w-[600px] rounded-full bg-brand-blue/15 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-blue border border-brand-blue/30 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="h-4 w-4 text-brand-blue" />
            <span>SANAS Accredited Lab Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            The 8-Stage Water Lab Matrix
          </h2>
          <p className="font-script text-3xl text-blue-200">
            How we transform municipal tap water into lab-pure wellness hydration
          </p>
        </div>

        {/* 8 Stages Interactive Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-12">
          {roStages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border ${
                  isActive
                    ? 'bg-brand-blue text-white border-blue-400 shadow-lg shadow-brand-blue/30 scale-105'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full mb-2 ${
                  isActive ? 'bg-white text-brand-blue' : 'bg-white/10 text-white/60'
                }`}>
                  Stage {stage.number}
                </span>
                <span className="text-xs font-bold leading-tight">
                  {stage.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detailed Stage Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-white/15 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-brand-blue flex items-center justify-center font-black text-lg text-white shadow-md">
                  0{activeStage.number}
                </span>
                <div>
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block">
                    Filtration Step {activeStage.number} of 8
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {activeStage.name}
                  </h3>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase text-blue-300 tracking-wider block mb-1">
                    Primary Purpose:
                  </span>
                  <p className="text-base text-white/90 font-medium">
                    {activeStage.purpose}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <span className="text-xs font-bold uppercase text-amber-300 tracking-wider block mb-1">
                    Technical Specification:
                  </span>
                  <p className="text-sm text-white/70">
                    {activeStage.technical}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-emerald-400 bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <CheckCircle2 className="h-6 w-6 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Health & Taste Benefit: {activeStage.benefit}
                </span>
              </div>
            </div>

            {/* Right Visual Summary Column */}
            <div className="lg:col-span-5 bg-brand-slate-dark/80 p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    Lab Certification
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/20">
                    Pass 100%
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 uppercase">
                  Why 8 Stages Matter
                </h4>
                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  Standard municipal tap water contains dissolved solids, chlorine, and old pipe minerals. Our 8-stage matrix strips out pollutants down to 0.0001 microns, then remineralizes the water for optimal hydration.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/80 font-bold">
                    <span>Purity Level</span>
                    <span className="text-blue-300">99.9% Pure</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full w-[99%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <span>Refills @ R2.50 / Liter</span>
                <span>Alkaline @ R7.50 / Liter</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
