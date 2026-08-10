import { motion } from 'motion/react';
import { Flame, Heart, BookOpen, Utensils, Droplets, Check, Coffee } from 'lucide-react';

const articles = [
  {
    category: "Water",
    title: "The Science of Reverse Osmosis Water",
    desc: "Our 8-stage purification process removes impurities, remineralizes with essential electrolytes, and perfects the pH for maximum hydration.",
    icon: Droplets,
    readTime: "2 min read",
    tips: [
      "Purified through advanced 8-stage filtration",
      "Remineralized for optimal pH and taste",
      "Bring your own bottle to reduce plastic waste"
    ]
  },
  {
    category: "Coffee",
    title: "Craft Coffee: 100% Arabica Excellence",
    desc: "Discover the rich, bold flavors of our locally roasted coffee, prepared precisely to kickstart your day or pair with our fresh bakery items.",
    icon: Coffee,
    readTime: "3 min read",
    tips: [
      "Brewed fresh from premium Arabica beans",
      "Perfectly paired with artisanal baked goods",
      "Available hot or iced for any weather"
    ]
  },
  {
    category: "Biltong",
    title: "Traditional South African Biltong",
    desc: "Cured to perfection using time-honored recipes, our biltong provides the ultimate savory, high-protein snack for any occasion.",
    icon: Flame,
    readTime: "2 min read",
    tips: [
      "Cured using traditional South African spices",
      "High-protein, low-carb premium snacking",
      "Available in multiple cuts and flavors"
    ]
  },
  {
    category: "Baked Goods",
    title: "Fresh Daily Artisanal Baked Goods",
    desc: "From seeded loaves to decadent tarts, our bakery items are crafted daily to guarantee freshness and complement your coffee perfectly.",
    icon: Utensils,
    readTime: "3 min read",
    tips: [
      "Baked fresh every single morning",
      "Sourced from local artisanal bakers",
      "Perfect for breakfast or afternoon tea"
    ]
  },
  {
    category: "Local Treasures",
    title: "Discover Unique Local Treasures",
    desc: "Explore our curated selection of boutique gifts and handcrafted curios, handpicked to support our vibrant local community.",
    icon: Heart,
    readTime: "2 min read",
    tips: [
      "Support local artisans and creators",
      "Unique gifts for every special occasion",
      "Curated lifestyle products for your home"
    ]
  },
  {
    category: "Spices & Braai Essentials",
    title: "Elevate Your Braai Experience",
    desc: "Master the grill with our premium selection of non-irradiated spices and coarse rubs, guaranteed to bring out the best in your cuts.",
    icon: Flame,
    readTime: "4 min read",
    tips: [
      "Non-irradiated, high-quality spice blends",
      "Perfect for yellow-fat steak and chicken",
      "Apply 30 mins before going over coals"
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
            The Hydr8 Lifestyle Guide
          </h2>
          <p className="font-chalk text-3xl text-brand-blue">
            Everything you need for hydration, cravings & weekend braais
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
