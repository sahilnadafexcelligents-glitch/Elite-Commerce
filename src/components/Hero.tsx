import { motion } from "motion/react";
import { ArrowRight, Sparkles, Layout, Zap, ShoppingBag, Star, Users, TrendingUp, ChevronRight } from "lucide-react";

const stats = [
  { icon: <Users size={18} />, value: "10K+", label: "Happy Customers" },
  { icon: <TrendingUp size={18} />, value: "98%", label: "Satisfaction Rate" },
  { icon: <Star size={18} />, value: "4.9/5", label: "Average Rating" },
];

const trustedLogos = [
  "TechCorp", "DesignHub", "StartupX", "CloudBase", "GrowthLab"
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-brand-surface/50 to-white" id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-gradient-to-br from-brand-accent/10 via-brand-secondary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-secondary/10 via-brand-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-brand-accent/5 to-transparent opacity-50" />
        
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-secondary/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-8 border border-brand-accent/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <Sparkles size={14} />
              The Future of E-commerce Design
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-8 text-balance"
            >
              Build the Next <span className="text-gradient italic">Iconic</span>{" "}
              <span className="relative">
                Online Store
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-full" />
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              EliteCommerce provides professional, SEO-optimized landing page mockups 
              inspired by world-class brands. Designed for entrepreneurs who value 
              <span className="font-semibold text-gray-900"> aesthetics and conversions</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="btn-glow w-full sm:w-auto bg-gradient-to-r from-brand-accent to-brand-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group text-base">
                Explore Mockups
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center justify-center gap-2 group text-base shadow-sm hover:shadow-md">
                View Showcase
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 text-brand-accent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-accent/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Product Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex-1 w-full max-w-2xl"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700 animate-pulse-glow" />
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50">
                {/* Browser Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-xs text-gray-400 font-medium">
                    elitecommerce.design
                  </div>
                  <div className="w-16" />
                </div>
                
                {/* Content Area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-8 overflow-hidden">
                  {/* Mock UI Grid */}
                  <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center relative bg-white/80 backdrop-blur-sm">
                    <div className="text-gray-200 text-5xl lg:text-7xl font-bold italic opacity-20 uppercase tracking-widest rotate-6">
                      PREMIUM
                    </div>
                    
                    <div className="absolute top-4 left-4 w-32 h-4 bg-gray-100 rounded-full" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="w-4 h-4 bg-gray-100 rounded-full" />
                      <div className="w-4 h-4 bg-gray-100 rounded-full" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      {/* Product Card Stack */}
                      <div className="w-40 lg:w-52 h-56 bg-gradient-to-br from-brand-surface to-white rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12 translate-x-[-10%] animate-float">
                        <ShoppingBag className="text-brand-accent/30" size={48} />
                      </div>
                      
                      {/* Floating Detail Card */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-16 right-8 lg:right-16 w-36 lg:w-44 h-44 lg:h-52 bg-white rounded-2xl shadow-2xl border border-gray-50 flex flex-col p-4 transform rotate-6"
                      >
                        <div className="w-full h-2/3 bg-gradient-to-br from-brand-accent/5 to-brand-secondary/5 rounded-xl mb-3" />
                        <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-2" />
                        <div className="w-1/2 h-3 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="p-5 bg-white border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-white shadow-lg shadow-brand-accent/30">
                      <Layout size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Luxe Dashboard</div>
                      <div className="text-xs text-gray-400">Design v2.4.0</div>
                    </div>
                  </div>
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-gray-200 to-gray-300" />
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-[10px] text-white font-bold">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by 500+ forward-thinking brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {trustedLogos.map((logo, idx) => (
              <div key={idx} className="text-lg lg:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
