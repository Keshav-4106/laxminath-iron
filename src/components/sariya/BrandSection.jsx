// src/components/sariya/BrandSection.jsx

import React from "react";
import polaadTmt from "../../assets/sariya/polaad-tmt.jpg";

import {
  FaShieldAlt,
  FaCheckCircle,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";

const BrandSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-0">

        {/* Left Image */}
        <div className="relative min-h-[350px] lg:min-h-full">

          <img
            src={polaadTmt}
            alt="Polaad TMT"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-6 py-5">

            <p className="text-orange-400 font-bold text-sm uppercase tracking-wider">
              Trusted Brand
            </p>

            <h3 className="text-white text-3xl font-extrabold mt-1">
              Polaad TMT
            </h3>

          </div>

        </div>

        {/* Right Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 px-5 py-3 rounded-2xl w-fit mb-6">

            <FaIndustry className="text-orange-500 text-xl" />

            <span className="font-semibold text-orange-600 dark:text-orange-400">
              Authorized Supplier
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">

            Strong Construction Starts With
            <span className="block text-orange-500 mt-2">
              Quality Steel
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">

            We supply premium quality Polaad TMT Sariya for residential,
            commercial and industrial construction projects across Bassi
            and nearby Chittorgarh region.

            Our steel products are trusted for strength, durability,
            flexibility and long-term performance.

          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {/* Item */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-4">
                <FaShieldAlt />
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Quality Assured
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                High-strength TMT bars suitable for all construction work.
              </p>

            </div>

            {/* Item */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700">

              <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center text-2xl mb-4">
                <FaTruck />
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                Fast Delivery
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Quick material dispatch using our own transport vehicles.
              </p>

            </div>

          </div>

          {/* Benefits */}
          <div className="mt-10 space-y-4">

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-orange-500 mt-1 text-lg" />

              <p className="text-slate-700 dark:text-slate-300">
                Available in multiple sizes for all structural requirements.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-orange-500 mt-1 text-lg" />

              <p className="text-slate-700 dark:text-slate-300">
                Trusted by contractors, builders and homeowners.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-orange-500 mt-1 text-lg" />

              <p className="text-slate-700 dark:text-slate-300">
                GST billing and transparent pricing available.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BrandSection;