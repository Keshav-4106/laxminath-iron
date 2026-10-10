import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBuilding, FaShieldAlt, FaTruck, FaFileInvoice } from "react-icons/fa";
import { yearsInBusiness, GST_NOTE } from "../../config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75 }}
      className="px-5 py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Why Choose Us</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Built on Trust, <span className="block text-orange-500">Quality and Service</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Local experience, genuine branded materials, clear billing and practical delivery support.
          </p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          <motion.article variants={fadeUp} className="rounded-[32px] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400">
              <FaBuilding />
            </div>
            <h3 className="mt-7 text-2xl font-black"><span suppressHydrationWarning>{yearsInBusiness()}</span> Years of Local Trust</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">Serving homeowners, builders and contractors in Bassi and nearby areas since 2016.</p>
          </motion.article>

          <motion.article variants={fadeUp} className="rounded-[32px] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400">
              <FaShieldAlt />
            </div>
            <h3 className="mt-7 text-2xl font-black">Authorised by Both Brands</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">Authorised Polaad dealer and MP Birla Cement authorised stockist. Certificates are available to see.</p>
          </motion.article>

          <motion.article variants={fadeUp} className="rounded-[32px] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400">
              <FaTruck />
            </div>
            <h3 className="mt-7 text-2xl font-black">Own Delivery Vehicles</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">Delivery through our Tata CNG auto and tractor. Transport charges apply based on distance and quantity.</p>
          </motion.article>

          <motion.article variants={fadeUp} className="rounded-[32px] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400">
              <FaFileInvoice />
            </div>
            <h3 className="mt-7 text-2xl font-black">GST Invoice on Request</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{GST_NOTE} Just ask when you confirm your order.</p>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;