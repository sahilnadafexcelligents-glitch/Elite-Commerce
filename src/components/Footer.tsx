import { ShoppingBag, Github, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12" id="footer">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer inline-flex">
              <div className="bg-white p-1.5 rounded-lg text-brand-primary">
                <ShoppingBag size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">ELITE<span className="text-brand-accent">COMMERCE</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering merchants with the world's most sophisticated e-commerce layouts. Modern, professional, and built for conversion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Design Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Performance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Join 10,000+ designers getting weekly insights on e-commerce trends.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-accent text-white px-4 rounded-lg hover:scale-[1.02] transition-all active:scale-95">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="text-gray-500 text-xs">
            © {currentYear} EliteCommerce Design Systems. All rights reserved.
          </div>
          <div className="flex gap-8 text-gray-500 text-xs">
             <a href="#" className="hover:text-white transition-colors tracking-widest uppercase">System Status</a>
             <a href="#" className="hover:text-white transition-colors tracking-widest uppercase">Security</a>
             <a href="#" className="hover:text-white transition-colors tracking-widest uppercase">Global CDN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
