import React from "react";

import {
  FiShield,
  FiCheckCircle,
  FiLayers,
  FiAward,
} from "react-icons/fi";

const features = [
  {
    icon: <FiAward />,
    title: "Fe 550D Grade",
    description:
      "Fe 550D means a minimum yield strength of 550 N/mm\u00b2, with the extra ductility (\"D\") requirements of IS 1786.",
  },

  {
    icon: <FiLayers />,
    title: "Ribbed Surface",
    description:
      "Like all TMT bars, Polaad bars are ribbed so they grip the surrounding concrete.",
  },

  {
    icon: <FiShield />,
    title: "Genuine Polaad Stock",
    description:
      "Supplied by an authorised Polaad dealer. The certificate of authorisation is shown on this page.",
  },

  {
    icon: <FiCheckCircle />,
    title: "Common RCC Uses",
    description:
      "Used in slabs, beams, columns and foundations. Always follow the sizes and quantities in your structural design.",
  },
];

const WhyPolaad = () => {
  return (
    <section className="py-24">

      {/* Heading */}
      <div className="max-w-3xl">

        <span className="text-orange-500 font-bold uppercase tracking-[0.2em]">
          About Polaad QST
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Polaad QST Fe 550D
          TMT Bars
        </h2>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8">
          We stock Polaad QST Fe 550D TMT bars in 8 mm to 25 mm
          for residential and commercial RCC work. Ask your site
          engineer which sizes and quantities your design needs.
        </p>

      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        {features.map((feature, index) => (

          <div
            key={index}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-500">

              {feature.icon}

            </div>

            {/* Title */}
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">

              {feature.title}

            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-8">

              {feature.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WhyPolaad;