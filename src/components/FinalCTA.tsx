import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Rocket, Mail, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-slate-900 to-brand-secondary" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-secondary/30 rounded-full blur-[120px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-wider mb-8 border border-white/10"
          >
            <Rocket size={14} />
            Limited Time Offer
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Ready to Build Something{" "}
            <span className="relative">
              <span className="text-gradient">Iconic</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
            </span>
            ?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of entrepreneurs who've already transformed their online presence. 
            Start your free trial today and see the difference premium design makes.
          </motion.p>

          {/* Email Form or Success State */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="text-brand-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-white/70">
                  Check your inbox for your free trial access. Let's build something amazing together.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent focus:bg-white/20 transition-all duration-300 text-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-glow bg-gradient-to-r from-brand-accent to-brand-secondary text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    Get Started Free
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Cancel anytime
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
