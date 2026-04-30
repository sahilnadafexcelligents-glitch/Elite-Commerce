import { motion } from "motion/react";
import { Search, Zap, Globe, Shield, Smartphone, Heart } from "lucide-react";

const features = [
  {
    icon: <Search />,
    title: "SEO Optimized",
    desc: "Built with industry-standard semantic HTML and metadata structures to ensure maximum reach in search results."
  },
  {
    icon: <Zap />,
    title: "High Performance",
    desc: "Optimized asset loading and clean code structure resulting in lightning-fast page transitions and higher conversion."
  },
  {
    icon: <Globe />,
    title: "Global Scalability",
    desc: "Designs that work seamlessly across international markets with support for multi-language and multi-currency layouts."
  },
  {
    icon: <Shield />,
    title: "Security Minded",
    desc: "Best practices in UI structure to ensure users feel safe and trusted throughout the entire checkout journey."
  },
  {
    icon: <Smartphone />,
    title: "Mobile First",
    desc: "Fully responsive designs that look stunning on every screen size, from ultra-wide monitors to compact mobile devices."
  },
  {
    icon: <Heart />,
    title: "User Centric",
    desc: "UI/UX patterns tested against heatmaps and user feedback to minimize friction and maximize engagement."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-brand-surface" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">Core Strengths</div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Masterfully Crafted for Business Success</h2>
          </div>
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              Read Documentation
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-gray-50 hover:shadow-sm transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
