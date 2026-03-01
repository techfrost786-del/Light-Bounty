/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Star, Zap, Camera, Clock, ShieldCheck, Mail, Phone, MapPin, Layers, Palette, Loader2, Instagram, X } from "lucide-react";
import { useState, FormEvent } from "react";
import { supabase } from "./lib/supabase";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const imageReveal = {
  initial: { scale: 1.1, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const Navbar = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="grid grid-cols-3 items-center px-8 py-6 max-w-7xl mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50"
  >
    <div className="flex items-center gap-8 text-sm font-medium text-brand-green/80">
      {['About', 'Pricing'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className="relative group overflow-hidden"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
          <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-brand-green font-bold">{item}</span>
        </a>
      ))}
    </div>

    <div className="flex justify-center">
      <motion.img 
        whileHover={{ scale: 1.05 }}
        src="https://lh3.googleusercontent.com/d/13qiLIl21HiJckr-RsVXL5HrzabSnJpaO" 
        alt="Light Bounty Logo" 
        className="h-10 w-auto object-contain"
      />
    </div>

    <div className="flex justify-end">
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#booking"
        className="bg-brand-green text-brand-yellow px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-green/10"
      >
        Book a Session
      </motion.a>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="px-6 py-12 max-w-7xl mx-auto overflow-hidden">
    <div className="mb-12">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="whileInView"
        viewport={{ once: true }}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-bold leading-[0.85] text-brand-green mb-12 tracking-tighter max-w-4xl"
        >
          Turn Your Product <span className="font-italic-serif font-normal text-brand-green/40">Into a Campaign</span>
        </motion.h1>
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center gap-12"
        >
          <p className="text-brand-green/70 max-w-xs text-sm leading-relaxed">
            The most trusted AI-powered product photography studio for modern e-commerce brands.
          </p>
        </motion.div>
      </motion.div>
    </div>

    <motion.div 
      variants={imageReveal}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="relative aspect-[16/7] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-brand-green/5"
    >
      <img 
        src="https://lh3.googleusercontent.com/d/1CF7jEw3icyGuIhzXpDMX0cbrBXfjyh2g" 
        alt="Premium Product Photography" 
        className="w-full h-full object-cover"
      />
      <motion.div 
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-brand-green origin-left z-10"
      />
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="px-6 py-32 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-4">
        <motion.div 
          variants={imageReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-xl"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1F1B698baCwSNqD1W3rYYAWwf_De1JFMW" 
            alt="Studio Setup" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="md:col-span-5 flex flex-col justify-center">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-green/40 mb-6 font-bold">
            <Star className="w-3 h-3 fill-current" /> ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green leading-tight mb-4 tracking-tight">
            Premium Product Images, <br />
            <span className="font-italic-serif font-normal text-brand-green/60">Delivered Consistently.</span>
          </h2>
          <p className="text-brand-green font-semibold text-lg mb-6 tracking-tight">
            Built for catalogs, campaigns, and paid ads.
          </p>
          <p className="text-brand-green/70 text-base leading-relaxed mb-10 max-w-md">
            Light Bounty creates high-end AI photoshoots that keep your product identity accurate and your brand look consistent. Faster turnaround, predictable output, and art direction included.
          </p>
        </motion.div>
      </div>
      <div className="md:col-span-3">
        <motion.div 
          variants={imageReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[2.5rem] overflow-hidden aspect-[3/5] shadow-xl"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1S-T6AJQrCyEqmjLTfZdbGOGrkUzzYQPV" 
            alt="Product Detail" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="px-6 py-32 max-w-7xl mx-auto border-t border-brand-green/5">
    <motion.h3 
      variants={fadeInUp}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="text-3xl font-bold text-brand-green mb-16 tracking-tight"
    >
      Why Choose Us?
    </motion.h3>
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-20"
    >
      {[
        { 
          icon: Layers, 
          title: "Consistency Across SKUs", 
          desc: "Launch-ready visuals that stay consistent as your catalog grows. Same angles, lighting, and styling—so your brand looks uniform across every product." 
        },
        { 
          icon: Palette, 
          title: "Campaign-Grade Art Direction", 
          desc: "Not just AI images—proper creative direction. We plan the look (mood, lighting, composition) and deliver visuals that feel like a real paid campaign." 
        }
      ].map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="flex gap-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-green/5 flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors">
            <item.icon className="w-6 h-6 text-brand-green" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-green mb-3">{item.title}</h4>
            <p className="text-brand-green/60 text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Pricing = () => {
  const plans = [
    {
      name: "Essential Pack",
      price: "99",
      desc: "Perfect for single product launches.",
      subPrice: "One-time payment",
      features: [
        "Up to 3 product SKUs",
        "5 high-quality AI visuals",
        "Clean studio look",
        "E-commerce ready",
        "48–72 hours delivery",
        "Standard support"
      ],
      services: ["Studio", "E-com"],
      recommended: false
    },
    {
      name: "Brand Growth",
      price: "149",
      desc: "Ideal for growing catalogs.",
      subPrice: "Most popular choice",
      features: [
        "Up to 6 product SKUs",
        "6 high-end visuals",
        "Studio + Lifestyle",
        "Custom AI Model",
        "48–72 hours delivery",
        "Priority support",
        "Unlimited revisions"
      ],
      services: ["Lifestyle", "Custom", "Studio"],
      recommended: true
    },
    {
      name: "Signature Pack",
      price: "299",
      desc: "Full campaign-grade production.",
      subPrice: "Custom project scope",
      features: [
        "Up to 10 product SKUs",
        "8 high-end visuals",
        "Studio + Lifestyle",
        "Ad concept frames",
        "3–5 working days",
        "Fast support",
        "Unlimited revisions",
        "Art direction included"
      ],
      services: ["Campaign", "Ads", "Premium"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="px-6 py-32 max-w-[1400px] mx-auto">
      <div className="bg-brand-yellow/40 rounded-[4rem] p-8 md:p-16 lg:p-24">
        <div className="text-center mb-20">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand-green/20 text-[10px] uppercase tracking-widest font-bold text-brand-green/60 mb-8"
          >
            Pricing
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-brand-green mb-8 tracking-tight"
          >
            Visual <span className="font-italic-serif font-normal opacity-60">pricing</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-brand-green/70 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Note: You can also create custom pricing according to your product requirements.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className={`rounded-[2.5rem] flex flex-col relative overflow-hidden transition-all duration-500 border border-brand-green/5 ${plan.recommended ? 'bg-[#e0e7ff] text-brand-green' : 'bg-white text-brand-green'}`}
            >
              {/* Card Header */}
              <div className="p-10 pb-8">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold tracking-tight">{plan.name}</h4>
                  {plan.recommended && (
                    <div className="bg-brand-green text-brand-yellow text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Popular
                    </div>
                  )}
                </div>
                <p className="text-sm opacity-70 mb-8 leading-relaxed">{plan.desc}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-lg font-medium opacity-60">/pack</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mt-2">{plan.subPrice}</p>
                </div>

                <a 
                  href="#booking"
                  className={`block w-full py-5 rounded-2xl text-center text-sm font-bold transition-all mb-4 ${plan.recommended ? 'bg-brand-green text-brand-yellow' : 'bg-brand-green text-brand-yellow'}`}
                >
                  Choose Plan
                </a>
                <a href="#booking" className="block text-center text-[10px] uppercase tracking-widest font-bold opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4">
                  Book a call
                </a>
              </div>

              <div className="h-px bg-brand-green/10 mx-10" />

              {/* Card Body */}
              <div className="p-10 pt-8 flex-grow">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-60" />
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-4">Included services</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-brand-green/5 text-[10px] font-bold opacity-60">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-green/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl border border-brand-green/5 overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-green/5 transition-colors text-brand-green/40 hover:text-brand-green"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center mb-8">
                <Check className="w-8 h-8 text-brand-green" />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-green mb-4 leading-tight">
                Thank you for reaching out.
              </h3>
              
              <div className="space-y-4 text-brand-green/60 text-sm leading-relaxed mb-10">
                <p>We’ve received your request, our team will email you shortly.</p>
                <div className="flex flex-col items-center">
                  <p>You can also connect on</p>
                  <p>Instagram:</p>
                </div>
              </div>

              <div className="flex flex-col w-full gap-3">
                <a 
                  href="https://instagram.com/lightbounty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-brand-green text-brand-yellow rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-brand-green/5 text-brand-green rounded-xl font-bold text-sm hover:bg-brand-green/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "Cosmetics & Skincare",
    plan: "Essential Pack ($99)",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('bookings')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            category: formData.category,
            plan: formData.plan,
            message: formData.message,
          }
        ]);

      if (supabaseError) throw supabaseError;

      setShowModal(true);
      setFormData({
        fullName: "",
        email: "",
        category: "Cosmetics & Skincare",
        plan: "Essential Pack ($99)",
        message: ""
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <section id="booking" className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-green/40 mb-6 block font-bold">Booking</span>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-green leading-tight mb-10 tracking-tight">
              Tailored <span className="font-italic-serif font-normal text-brand-green/60">Visual Sessions</span> <br />
              for your Brand
            </h2>
            <p className="text-brand-green/70 text-base leading-relaxed mb-16 max-w-md">
              Enjoy a personalized journey in our AI studio. These sessions offer complete flexibility—visit as many or as few concepts as you wish.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, text: "lightbountyy@gmail.com" },
                { icon: MapPin, text: "Digital Studio, Global" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-brand-yellow transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-medium text-brand-green/80">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-brand-green/5 border border-brand-green/5"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/30 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-green/5 border-2 border-transparent focus:border-brand-green/10 focus:bg-white outline-none text-sm transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/30 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-green/5 border-2 border-transparent focus:border-brand-green/10 focus:bg-white outline-none text-sm transition-all"
                    placeholder="john@brand.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/30 ml-1">Product Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-green/5 border-2 border-transparent focus:border-brand-green/10 focus:bg-white outline-none text-sm appearance-none cursor-pointer transition-all"
                  >
                    <option>Cosmetics & Skincare</option>
                    <option>Tech & Gadgets</option>
                    <option>Fashion & Apparel</option>
                    <option>Food & Beverage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/30 ml-1">Select Plan</label>
                  <select 
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-green/5 border-2 border-transparent focus:border-brand-green/10 focus:bg-white outline-none text-sm appearance-none cursor-pointer transition-all"
                  >
                    <option>Essential Pack ($99)</option>
                    <option>Brand Growth ($149)</option>
                    <option>Signature Pack ($299)</option>
                    <option>Custom Project</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-green/30 ml-1">Message / Requirements</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-8 py-5 rounded-2xl bg-brand-green/5 border-2 border-transparent focus:border-brand-green/10 focus:bg-white outline-none text-sm resize-none transition-all"
                  placeholder="Tell us about your product..."
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-xs font-medium px-1">{error}</p>
              )}

              <motion.button 
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02 }}
                whileTap={loading ? {} : { scale: 0.98 }}
                className="w-full py-6 bg-brand-green text-brand-yellow rounded-2xl font-bold text-sm shadow-xl shadow-brand-green/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Footer = () => (
  <footer className="px-6 py-20 max-w-7xl mx-auto border-t border-brand-green/5 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex items-center gap-3">
      <img 
        src="https://lh3.googleusercontent.com/d/13qiLIl21HiJckr-RsVXL5HrzabSnJpaO" 
        alt="Light Bounty Logo" 
        className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-green/30 font-bold">
      © 2026 LIGHT BOUNTY STUDIO. ALL RIGHTS RESERVED.
    </p>
    <div className="flex gap-10 text-[10px] uppercase tracking-widest font-bold text-brand-green/50">
      <a 
        href="https://www.instagram.com/lightbounty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-green transition-colors relative group"
      >
        Instagram
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300" />
      </a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-brand-yellow">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
