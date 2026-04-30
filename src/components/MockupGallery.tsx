import { motion } from "motion/react";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";

const mockups = [
  { 
    title: "Minimalist Watch Store", 
    brand: "Chronos", 
    tag: "Luxury",
    img: "bg-gradient-to-br from-gray-900 to-gray-800"
  },
  { 
    title: "High-End Audio Lab", 
    brand: "Sonic", 
    tag: "Tech",
    img: "bg-gradient-to-br from-blue-900 to-indigo-900" 
  },
  { 
    title: "Organic Skincare", 
    brand: "Pure", 
    tag: "Lifestyle",
    img: "bg-gradient-to-br from-emerald-900 to-teal-900" 
  },
  { 
    title: "Modern Furniture", 
    brand: "Haus", 
    tag: "Home",
    img: "bg-gradient-to-br from-stone-900 to-orange-900" 
  },
];

export default function MockupGallery() {
  return (
    <section className="py-24 bg-white" id="templates">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">World-Class <span className="text-brand-accent">Mockups</span> Ready to Deploy</h2>
            <p className="text-gray-500 text-lg">Every mockup is hand-crafted to give you a head start on your next project. Professional layouts that save you hundreds of hours.</p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 font-bold text-gray-900 group hover:text-brand-accent transition-colors">
                View All Templates
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {mockups.map((mock, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-2xl ${mock.img}`}>
                 {/* Decorative mock UI */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-40">
                    <div className="w-full h-2 bg-white/20 rounded-full" />
                    <div className="flex justify-between items-end">
                       <div className="w-1/2 ">
                          <div className="w-full h-8 bg-white/20 rounded-lg mb-4" />
                          <div className="w-3/4 h-4 bg-white/10 rounded-full mb-2" />
                          <div className="w-1/2 h-4 bg-white/10 rounded-full" />
                       </div>
                       <div className="w-32 h-32 bg-white/20 rounded-full rotate-45 translate-x-10 translate-y-10" />
                    </div>
                 </div>

                 {/* Hover overlay */}
                 <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <button className="p-4 rounded-full bg-white text-brand-primary hover:scale-110 transition-transform flex items-center justify-center gap-2 font-bold px-6">
                       <Eye size={20} />
                       Preview
                    </button>
                    <button className="p-4 rounded-full bg-brand-accent text-white hover:scale-110 transition-transform flex items-center justify-center gap-2 font-bold px-6">
                       <ExternalLink size={20} />
                       Details
                    </button>
                 </div>

                 <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white tracking-widest border border-white/10">{mock.tag}</span>
                 </div>
              </div>
              <div>
                 <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">{mock.brand}</div>
                 <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{mock.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
