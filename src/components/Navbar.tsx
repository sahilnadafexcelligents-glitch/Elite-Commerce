import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ArrowRight, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="bg-gradient-to-br from-brand-accent to-brand-secondary p-2 rounded-xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-brand-accent/25">
              <ShoppingBag size={22} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              ELITE<span className="text-gradient">COMMERCE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 link-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="hidden sm:flex p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Login */}
            <button className="hidden md:block text-sm font-semibold text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
              Login
            </button>

            {/* CTA Button */}
            <button className="btn-glow bg-gradient-to-r from-brand-accent to-brand-secondary text-white text-sm px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 group">
              Get Started
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl mx-4 rounded-2xl overflow-hidden">
              <div className="p-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-accent hover:bg-brand-accent/5 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4 flex flex-col gap-3">
                  <button className="w-full text-left px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200">
                    Login
                  </button>
                  <button className="btn-glow w-full bg-gradient-to-r from-brand-accent to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
