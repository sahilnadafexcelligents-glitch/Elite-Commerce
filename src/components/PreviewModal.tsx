import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, ExternalLink } from "lucide-react";
import { Mockup } from "../data/mockups";

interface PreviewModalProps {
  mockup: Mockup | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PreviewModal({ mockup, isOpen, onClose }: PreviewModalProps) {
  if (!mockup) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left: Visual Preview */}
            <div className={`flex-1 min-h-[300px] md:min-h-full ${mockup.img} relative overflow-hidden flex items-center justify-center p-12`}>
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white/20" />
               </div>
               
               <motion.div 
                 initial={{ y: 40, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="relative w-full aspect-[4/3] bg-white rounded-xl shadow-2xl overflow-hidden border border-white/10"
               >
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-50 flex items-center px-3 gap-1.5 border-b border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="mt-6 p-6 h-full flex flex-col gap-4">
                     <div className="w-1/3 h-4 bg-gray-100 rounded-full" />
                     <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-square bg-gray-50 rounded-lg" />
                        <div className="aspect-square bg-gray-50 rounded-lg" />
                        <div className="aspect-square bg-gray-50 rounded-lg" />
                     </div>
                     <div className="w-full h-32 bg-gray-50 rounded-xl" />
                  </div>
               </motion.div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">
                  {mockup.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{mockup.title}</h2>
                <p className="text-gray-500 leading-relaxed">
                  {mockup.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockup.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium">
                      <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                        <Check size={14} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-brand-primary text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg">
                  Get This Template
                  <ArrowRight size={18} />
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                  <ExternalLink size={18} />
                  Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
