import { motion } from 'motion/react';
import { Flame, Heart, BookOpen, Utensils, Droplets, Check } from 'lucide-react';

const articles = [
  {
    category: "Braai & Pairing",
    title: "The Ultimate South African Braai Spice Rub Guide",
    desc: "How non-irradiated spices and coarse sea salt elevate yellow-fat steak and braaimanoeuvres without chemical anti-caking agents.",
    icon: Flame,
    readTime: "3 min read",
    tips: [
      "Always rub spices 30 mins before going over hot coals",
      "Pair heavy beef cuts with our Smoked Garlic Steak Rub",
      "Keep hydrated with Alkaline water during long afternoon braais"
    ]
  },
  {
    category: "Hydration Science",
    title: "Why Alkaline Water (pH 8.5+) Speeds Post-Workout Recovery",
    desc: "Biohacking your daily hydration: how remineralized calcium and magnesium neutralize lactic acid buildup after intense training sessions.",
    icon: Droplets,
    readTime: "4 min read",
    tips: [
      "Drink 750ml Alkaline water within 30 mins post-workout",
      "Remineralization balances cellular hydration levels",
      "Refill reusable jugs to cut plastic waste in half"
    ]
  },
  {
    category: "Lifestyle & Food",
    title: "Pairing Artisan Seed Bread with Gourmet Quiche & Biltong",
    desc: "Create the perfect Linmeyer weekend brunch platter using our daily fresh bakery loafs and traditional cured beef.",
    icon: Utensils,
    readTime: "2 min read",
    tips: [
      "Slice artisanal seed bread thick and toast lightly",
      "Pair quiche with fresh coffee brewed from 100% Arabica beans",
      "Grab a 250g Babalas biltong pack for afternoon guests"
    ]
  }
];

export default function BraaiWellnessTips() {
  return (
    <section id="wellness" className="py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sage/10 text-brand-sage text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen className="h-4 w-4" />
            <span>Linmeyer Lifestyle Magazine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tight mb-4">
            Braai & Wellness Journal
          </h2>
          <p className="font-script text-3xl text-brand-blue">
            Recipes, spice pairing secrets & biohacking your daily hydration
          </p>
        </div>

        {/* 3 Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => {
            const Icon = art.icon;
            return (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-brand-blue/10 shadow-xl shadow-brand-navy/5 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-cream-warm text-brand-navy border border-brand-blue/10">
                      {art.category}
                    </span>
                    <span className="text-xs font-semibold text-brand-navy/40">
                      {art.readTime}
                    </span>
                  </div>

                  <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs font-medium text-brand-base/70 leading-relaxed mb-6">
                    {art.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-brand-blue/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/60 block mb-2">
                      Key Takeaways:
                    </span>
                    {art.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-brand-sage shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-brand-navy/80 leading-tight">
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-blue/10 flex items-center justify-between text-xs font-bold text-brand-blue">
                  <span>Hydr8 Lifestyle Feature</span>
                  <span>♡ Linmeyer JHB</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
