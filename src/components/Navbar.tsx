import { motion } from "motion/react";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
      id="navbar"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-brand-primary p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
          <ShoppingBag size={20} />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">ELITE<span className="text-brand-accent">COMMERCE</span></span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#solutions" className="hover:text-brand-accent transition-colors">Solutions</a>
        <a href="#templates" className="hover:text-brand-accent transition-colors">Templates</a>
        <a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a>
        <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-semibold hover:opacity-70 transition-opacity">Login</button>
        <button className="bg-brand-primary text-white text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 group hover:shadow-lg transition-all active:scale-95">
          Get Started
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
}
