import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaTruck } from "react-icons/fa";
import homeHero from "../../assets/home/home-hero.webp";
import { whatsappUrl, TEL_URL, yearsInBusiness } from "../../config/site";

const HeroSection = () => {
  const years = yearsInBusiness();
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden md:min-h-[90dvh]">
      <div className="absolute inset-0">
        <motion.img
          src={homeHero}
          alt="Laxminath Iron Store"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
      </div>
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300 backdrop-blur-md">
              <FaCheckCircle /> <span suppressHydrationWarning>{years}</span> Years of Local Trust in Bassi
            </div>

            <h1 className="mb-8 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-7xl">
              Laxminath Iron
              <span className="mt-2 block text-orange-400">TMT Sariya</span>
              <span className="block">& Cement Supplier</span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              Authorised Polaad dealer and MP Birla Cement authorised stockist in Bassi, Chittorgarh.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-600"
              >
                <FaWhatsapp size={24} />
                <span>WhatsApp Now</span>
              </a>

              <a
                href={TEL_URL}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
              >
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </motion.div>

          <div className="hidden justify-end lg:flex">
            <div className="space-y-6">
              <div className="w-72 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <h3 className="mb-3 text-5xl font-black text-orange-400" suppressHydrationWarning>{years}</h3>
                <p className="mb-2 text-xl font-bold text-white">Years Experience</p>
                <p className="text-slate-300">Serving Bassi and nearby areas since 2016.</p>
              </div>

              <div className="ml-16 w-72 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <FaTruck className="text-3xl text-orange-400" />
                  <h3 className="text-2xl font-black text-white">Delivery Support</h3>
                </div>
                <p className="leading-relaxed text-slate-300">
                  Self-pickup, or delivery in our own vehicles. Transport charges apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;