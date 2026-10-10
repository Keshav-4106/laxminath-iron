import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { productCategories } from "../../data/homeData";

const ProductCategories = () => {
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
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Our Products</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Branded Construction <span className="block text-orange-500">Materials</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Polaad TMT Sariya and MP Birla Cement for homeowners, builders and contractors across Bassi and nearby areas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {productCategories.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-[36px] border border-slate-800 bg-slate-900 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-orange-500/50">
              <div className="relative h-[430px] overflow-hidden sm:h-[500px]">
                <img src={item.image} alt={item.title} loading="lazy" width="750" height="1000" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-300 backdrop-blur-md">
                  Available at Laxminath Iron
                </span>
                <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>
                <Link to={item.path} className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-6 py-3.5 text-sm font-black text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-600">
                  {item.buttonText} <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductCategories;