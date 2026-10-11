import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import sariyaImg from "../../assets/home/sariya-home.webp";
import cementImg from "../../assets/home/cement-home.webp";

const ProductCatalogMap = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Our Products</span>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">What We Supply</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Polaad TMT Sariya and MP Birla Cement for residential and commercial construction.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <article className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 dark:border-slate-800 dark:bg-slate-900">
          <div className="h-72 overflow-hidden">
            <img src={sariyaImg} alt="Polaad QST Fe 550D TMT Sariya" loading="lazy" width="750" height="1000" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          </div>
          <div className="p-8">
            <span className="rounded-md bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-500">Authorised Polaad Dealer</span>
            <h3 className="mt-4 text-3xl font-black">Polaad QST Fe 550D TMT Sariya</h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Polaad QST Fe 550D TMT bars in 8 mm to 25 mm, Select sizes and quantity, then get today's rate on WhatsApp.
            </p>
            <Link to="/sariya" className="mt-6 inline-flex items-center gap-2 font-black text-orange-500 transition hover:text-orange-600">
              View Sariya Range <FiArrowRight />
            </Link>
          </div>
        </article>

        <article className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 dark:border-slate-800 dark:bg-slate-900">
          <div className="h-72 overflow-hidden">
            <img src={cementImg} alt="MP Birla Cement products" loading="lazy" width="750" height="1000" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          </div>
          <div className="p-8">
            <span className="rounded-md bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-500">MP Birla Authorised Stockist</span>
            <h3 className="mt-4 text-3xl font-black">MP Birla Cement Products</h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              MP Birla Chetak PPC, Perfect Plus and Perfect Plus IWP, with bag rates and delivery information.
            </p>
            <Link to="/cement" className="mt-6 inline-flex items-center gap-2 font-black text-orange-500 transition hover:text-orange-600">
              View Cement Products <FiArrowRight />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductCatalogMap;