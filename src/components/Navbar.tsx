import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
      id="navbar"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-brand-primary dark:bg-brand-accent p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
          <ShoppingBag size={20} />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter dark:text-white">ELITE<span className="text-brand-accent">COMMERCE</span></span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium dark:text-gray-300">
        <a href="#solutions" className="hover:text-brand-accent transition-colors">Solutions</a>
        <a href="#templates" className="hover:text-brand-accent transition-colors">Templates</a>
        <a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a>
        <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="hidden sm:block text-sm font-semibold hover:opacity-70 transition-opacity dark:text-white">Login</button>
        <button className="bg-brand-primary dark:bg-brand-accent text-white text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 group hover:shadow-lg transition-all active:scale-95">
          Get Started
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
}
