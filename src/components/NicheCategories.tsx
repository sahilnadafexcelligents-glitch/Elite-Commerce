import { motion } from "motion/react";
import { Laptop, Home, Watch, Palette, Music, Coffee } from "lucide-react";

const categories = [
  { icon: <Laptop />, name: "Tech & Gadgets", count: "12 Templates", color: "bg-blue-50 text-blue-600" },
  { icon: <Palette />, name: "Fashion", count: "18 Templates", color: "bg-purple-50 text-purple-600" },
  { icon: <Home />, name: "Modern Home", count: "8 Templates", color: "bg-orange-50 text-orange-600" },
  { icon: <Watch />, name: "Luxury Goods", count: "14 Templates", color: "bg-emerald-50 text-emerald-600" },
  { icon: <Music />, name: "Entertainment", count: "9 Templates", color: "bg-rose-50 text-rose-600" },
  { icon: <Coffee />, name: "Lifestyle", count: "11 Templates", color: "bg-amber-50 text-amber-600" },
];

export default function NicheCategories() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Versatile Designs for <span className="text-brand-accent underline underline-offset-8 decoration-4">Every Niche</span></h2>
          <p className="text-gray-500 text-lg">Whether you're selling tech hardware or designer watches, our layouts adapt to your brand's unique character and functional needs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-100 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5 transition-all text-center group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-400 font-medium">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
