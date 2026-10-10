import React from "react";
import { FiAward } from "react-icons/fi";
import { FaShieldAlt, FaFileInvoice, FaTruck } from "react-icons/fa";
import { yearsInBusiness } from "../../config/site";

const TrustStrip = () => {
  return (
    <section className="relative z-20 mx-auto max-w-7xl px-5 pt-20 lg:px-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative overflow-hidden rounded-[28px] border border-orange-500/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 dark:bg-slate-900/95">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-orange-400 to-amber-500" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500 transition duration-300 group-hover:scale-110">
              <FiAward />
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 dark:text-white"><span suppressHydrationWarning>{yearsInBusiness()}</span> Years</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Local Trust</p>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[28px] border border-blue-500/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 dark:bg-slate-900/95">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-blue-400 to-cyan-500" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-500 transition duration-300 group-hover:scale-110">
              <FaShieldAlt />
            </div>
            <div>
              <p className="text-lg font-black text-slate-900 dark:text-white">Authorised Seller</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">Polaad dealer · MP Birla stockist</p>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[28px] border border-violet-500/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50 dark:bg-slate-900/95">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-violet-400 to-purple-500" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-500 transition duration-300 group-hover:scale-110">
              <FaFileInvoice />
            </div>
            <div>
              <p className="text-lg font-black text-slate-900 dark:text-white">GST Invoice</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">Available on request</p>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[28px] border border-emerald-500/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 dark:bg-slate-900/95">
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-emerald-400 to-green-500" />
          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-500 transition duration-300 group-hover:scale-110">
              <FaTruck />
            </div>
            <div>
              <p className="text-lg font-black text-slate-900 dark:text-white">Own Vehicles</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">Tata CNG Auto & Tractor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;