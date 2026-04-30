import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    try {
      // Note: Replace 'YOUR_FORM_ID' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/maqvybvv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      className="py-24 bg-brand-surface dark:bg-dark-surface transition-colors duration-300"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-bg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-white/5 relative">
          {/* Success Overlay */}
          <AnimatePresence>
            {status === "SUCCESS" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-brand-accent flex flex-col items-center justify-center text-white p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0.5, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="mb-6"
                >
                  <CheckCircle2 size={80} />
                </motion.div>
                <h3 className="text-4xl font-extrabold mb-4">
                  Message Received!
                </h3>
                <p className="text-white/80 max-w-sm mb-8">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("IDLE")}
                  className="bg-white text-brand-accent px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Side */}
          <div className="bg-brand-primary dark:bg-brand-accent p-12 text-white flex flex-col justify-between md:w-2/5">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Build Something Iconic?
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Contact our design team to discuss your project or request a
                custom mockup for your brand.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-white/50">
                    Email Us
                  </div>
                  <div className="font-semibold">
                    hello@elitecommerce.design
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-white/50">
                    Live Chat
                  </div>
                  <div className="font-semibold">Available Mon-Fri</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      required
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Your Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full p-4 rounded-xl border border-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all resize-none"
                />
              </div>

              {status === "ERROR" && (
                <div className="flex items-center gap-2 text-red-500 text-sm font-semibold">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "SENDING"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-primary dark:bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "SENDING" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
