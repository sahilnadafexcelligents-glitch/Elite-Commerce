import { motion } from "motion/react";
import { ArrowRight, Sparkles, Layout, Zap, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-surface" id="hero">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles size={14} />
              The Future of E-commerce Design
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-balance"
            >
              Build the Next <span className="text-brand-accent italic">Iconic</span> Online Store
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              EliteCommerce provides professional, SEO-optimized landing page mockups inspired by world-class brands. 
              Designed for entrepreneurs who value aesthetics and conversions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group hover:scale-[1.02] transition-transform shadow-xl hover:shadow-brand-accent/20">
                Explore Mockups
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                View Showcase
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {[
                { icon: <Layout size={20} />, label: "100+ Layouts" },
                { icon: <Zap size={20} />, label: "Lightning Fast" },
                { icon: <Sparkles size={20} />, label: "Premium UI" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-400 group cursor-default">
                  <div className="p-2 rounded-lg bg-white shadow-sm text-brand-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative aspect-square md:aspect-[4/3] bg-gray-100 p-8 overflow-hidden">
                   {/* Mock UI elements */}
                   <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center relative bg-white">
                      <div className="text-gray-300 text-6xl font-bold italic opacity-10 uppercase tracking-widest rotate-6">PREMIUM ASSET</div>
                      
                      <div className="absolute top-4 left-4 w-24 h-3 bg-gray-100 rounded-full" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 bg-gray-100 rounded-full" />
                        <div className="w-3 h-3 bg-gray-100 rounded-full" />
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                         <div className="w-48 h-64 bg-brand-surface rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 translate-x-[-20%]">
                            <ShoppingBag className="text-gray-200" size={64} />
                         </div>
                         <div className="absolute bottom-20 right-20 w-40 h-56 bg-white rounded-xl shadow-2xl border border-gray-50 flex flex-col p-4 transform rotate-6 scale-110">
                            <div className="w-full h-2/3 bg-gray-50 rounded-lg mb-3" />
                            <div className="w-3/4 h-3 bg-gray-100 rounded-full mb-2" />
                            <div className="w-1/2 h-3 bg-brand-accent/20 rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <Layout size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Luxe Dashboard</div>
                      <div className="text-xs text-gray-400">Design v2.4.0</div>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400" />
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-accent flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
