import { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: <Zap size={24} />,
    price: { monthly: 29, annual: 24 },
    description: "Perfect for new entrepreneurs just getting started.",
    features: [
      "10 Premium Templates",
      "Basic Customization",
      "Email Support",
      "1 Project",
      "Standard License",
    ],
    notIncluded: [
      "Priority Support",
      "Custom Branding",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    icon: <Sparkles size={24} />,
    price: { monthly: 79, annual: 59 },
    description: "For growing businesses that need more power and flexibility.",
    features: [
      "50+ Premium Templates",
      "Advanced Customization",
      "Priority Support",
      "10 Projects",
      "Extended License",
      "Custom Branding",
      "Analytics Dashboard",
    ],
    notIncluded: [],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    icon: <Crown size={24} />,
    price: { monthly: 199, annual: 149 },
    description: "For large teams requiring unlimited access and white-glove service.",
    features: [
      "Unlimited Templates",
      "Full Custom Development",
      "24/7 Dedicated Support",
      "Unlimited Projects",
      "Enterprise License",
      "Custom Branding",
      "Advanced Analytics",
      "API Access",
      "White-label Options",
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-brand-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold mb-6"
          >
            Choose the Perfect Plan for Your <span className="text-gradient">Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-brand-accent" : "bg-gray-300"
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>
              Annual
            </span>
            <span className="ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
              Save 25%
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-[-16px]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-brand-accent to-brand-secondary text-white text-xs font-bold rounded-full shadow-lg shadow-brand-accent/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-white border-2 border-brand-accent shadow-2xl shadow-brand-accent/20"
                    : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl"
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-2xl ${
                      plan.popular
                        ? "bg-gradient-to-br from-brand-accent to-brand-secondary text-white shadow-lg shadow-brand-accent/30"
                        : "bg-brand-surface text-gray-600"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-400 mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${
                    plan.popular
                      ? "btn-glow bg-gradient-to-r from-brand-accent to-brand-secondary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                          <Check size={14} />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-40">
                        <div className="p-0.5 rounded-full bg-gray-200 text-gray-500 mt-0.5">
                          <Check size={14} />
                        </div>
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-6 rounded-2xl bg-white border border-gray-100 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Check size={20} />
            </div>
            <span className="font-bold text-gray-900">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-sm text-gray-500">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
