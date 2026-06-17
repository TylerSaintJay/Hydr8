import { motion } from 'motion/react';
import { Home, Dumbbell, Briefcase, PartyPopper } from 'lucide-react';

const useCases = [
  {
    title: "Eco-Aware Families",
    desc: "Perfect for clean cooking, baby formula, and guilt-free daily hydration without the mounting plastic waste in your recycling bin.",
    icon: Home,
    color: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    title: "Fitness & Biohackers",
    desc: "Remineralized, pure water ensures cellular absorption, aiding rapid recovery between home and the gym.",
    icon: Dumbbell,
    color: "bg-teal-50 text-teal-700 border-teal-100",
  },
  {
    title: "Office Professionals",
    desc: "Keep your team sharp. Our sleek 10L dispensers fit professional spaces beautifully while supplying essential brain fuel.",
    icon: Briefcase,
    color: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    title: "Local Events",
    desc: "Hosting a neighbourhood gather? Our premium glass dispensers make hydration a luxurious focal point for any event.",
    icon: PartyPopper,
    color: "bg-purple-50 text-purple-700 border-purple-100",
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            "Is this for me?"
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-brand-base/60 leading-relaxed"
          >
            Whether you're shopping for organic goods at Woolies, pushing limits at the gym, or hosting friends over the weekend, Hydr8 fits your aesthetic and standards.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group flex flex-col sm:flex-row items-start gap-6 rounded-[2rem] border border-brand-teal/10 bg-white p-8 shadow-xl shadow-brand-ocean/5 transition-all hover:shadow-2xl hover:border-brand-teal/30 hover:-translate-y-1`}
              >
                <div className={`flex rounded-full border p-4 bg-brand-sand border-brand-teal/10 group-hover:bg-brand-teal group-hover:text-white transition-colors`}>
                  <Icon className="h-6 w-6 text-brand-ocean group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{useCase.title}</h3>
                  <p className="text-brand-base/60 leading-relaxed text-sm">
                    {useCase.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
