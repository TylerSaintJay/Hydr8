import { motion } from 'motion/react';
import { Camera, Coffee, Droplets, UtensilsCrossed } from 'lucide-react';

export default function StorePreview() {
  const previews = [
    {
      title: "Cozy Café & Seating",
      desc: "Sit. Savour. Stay. A warm, welcoming space featuring premium light oak textures, soft natural lighting, and our specialty coffee bar.",
      img: "/assets/cafe_interior.png",
      icon: Coffee,
      size: "lg:col-span-2",
      aspect: "aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7]"
    },
    {
      title: "The Water Lab",
      desc: "Our state-of-the-art purification lab where we process our exactingly filtered, remineralized alkaline and reverse osmosis water.",
      img: "/assets/water_lab_view.png",
      icon: Droplets,
      size: "lg:col-span-1",
      aspect: "aspect-[4/3] lg:aspect-[4/5]"
    },
    {
      title: "Artisanal Biltong & Spices",
      desc: "Gourmet, high-protein local biltong and hand-selected custom spice blends stocked daily on our rustic wooden shelves.",
      img: "/assets/biltong_spices_shelf.png",
      icon: UtensilsCrossed,
      size: "lg:col-span-3",
      aspect: "aspect-[16/9] lg:aspect-[21/7]"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative wood texture blob in background */}
      <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-wood-texture opacity-10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/50 backdrop-blur px-5 py-2 text-brand-navy shadow-sm mb-6"
          >
            <Camera className="h-4 w-4 text-brand-blue" />
            <span className="font-semibold text-xs tracking-wider uppercase">Future Storefront Preview</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue uppercase mb-4">
            Our Linmeyer Space
          </h2>
          <p className="font-script text-3xl text-brand-navy">
            A look inside what we are building for you
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {previews.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-brand-blue/10 shadow-xl shadow-brand-navy/5 flex flex-col justify-between p-4 ${item.size}`}
              >
                {/* Image Container with White Frame border */}
                <div className={`w-full overflow-hidden rounded-[2rem] border-2 border-brand-cream relative ${item.aspect}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Floating Icon Tag */}
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg border border-brand-blue/10">
                    <Icon className="h-5 w-5 text-brand-blue" />
                  </div>
                </div>

                {/* Text Details */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-base/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-brand-wood bg-brand-wood/10 px-3 py-1 rounded-full uppercase tracking-wider border border-brand-wood/20">
                      Store Asset
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
