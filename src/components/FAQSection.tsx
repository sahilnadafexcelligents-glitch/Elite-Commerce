import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with EliteCommerce?",
    answer: "Getting started is easy! Simply sign up for a free trial, browse our template library, and choose the design that best fits your brand. Our templates are designed to be easily customizable, and you can have your store live within hours."
  },
  {
    question: "Can I use these templates for client projects?",
    answer: "Yes! Our Professional and Enterprise plans include license options that allow you to use templates for client projects. You'll get clear licensing terms and can white-label designs for your clients."
  },
  {
    question: "Are the templates mobile responsive?",
    answer: "Absolutely! Every template we create is built with a mobile-first approach. They look stunning on everything from the latest iPhone to large desktop monitors, and they're optimized for touch interactions on mobile devices."
  },
  {
    question: "Do you offer custom design services?",
    answer: "Yes, our Enterprise plan includes custom design development. We can create bespoke e-commerce experiences tailored to your brand's unique needs. Contact our sales team to discuss your requirements."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer multiple support channels: email support for all plans, priority chat support for Professional plans, and 24/7 dedicated support for Enterprise customers. Our support team is here to help you succeed."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Of course! You can cancel your subscription at any time from your account settings. We'll never lock you into a long-term contract. If you cancel, you'll retain access until the end of your billing period."
  },
  {
    question: "Do templates include SEO optimization?",
    answer: "Yes! All our templates are built with SEO best practices: semantic HTML, optimized heading structure, fast loading times, and proper meta tag support. We also provide guidance on further SEO optimization for each template."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely through our encrypted payment system."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle size={14} />
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Can't find the answer you're looking for? Reach out to our support team.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 p-2 rounded-xl transition-colors duration-300 ${
                    openIndex === idx
                      ? "bg-brand-accent text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:underline"
          >
            Contact our support team
            <ChevronDown size={16} className="rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
