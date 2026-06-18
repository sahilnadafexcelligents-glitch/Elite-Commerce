import { motion } from "motion/react";
import { Shield, Award, Clock, CreditCard, CheckCircle2, Star } from "lucide-react";

const trustBadges = [
  { icon: <Shield size={20} />, label: "Secure Checkout", desc: "256-bit SSL encryption" },
  { icon: <Award size={20} />, label: "Award Winning", desc: "Best Design 2024" },
  { icon: <Clock size={20} />, label: "24/7 Support", desc: "Always here to help" },
  { icon: <CreditCard size={20} />, label: "Flexible Payment", desc: "Multiple options" },
];

const testimonials = [
  {
    quote: "EliteCommerce transformed our online presence. The templates are absolutely stunning and our conversion rate jumped 47% in the first month.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "Luxe Beauty Co.",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "Finally, a design system that understands what premium looks like. The attention to detail is unmatched. Highly recommend for any e-commerce brand.",
    author: "Marcus Rodriguez",
    role: "Creative Director",
    company: "TechVision Labs",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "We went from struggling with conversions to hitting record sales. The ROI has been incredible. Best investment we've made for our business.",
    author: "Emily Watson",
    role: "Head of Growth",
    company: "StyleHouse",
    rating: 5,
    avatar: "EW"
  },
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="container mx-auto px-6">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
        >
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="card-lift p-6 rounded-2xl bg-brand-surface border border-gray-100 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-accent/20 transition-all duration-300">
                {badge.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{badge.label}</h4>
              <p className="text-sm text-gray-500">{badge.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            Customer Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Loved by <span className="text-gradient">Thousands</span> of Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Join the growing community of successful e-commerce brands that trust EliteCommerce to power their online presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="card-lift p-8 rounded-3xl bg-white border border-gray-100 shadow-lg relative overflow-hidden"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-brand-accent/5 leading-none">
                "
              </div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              
              {/* Checkmark Badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                <CheckCircle2 size={14} />
                Verified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-brand-primary via-slate-900 to-brand-secondary relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "47%", label: "Avg. Conversion Boost" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
