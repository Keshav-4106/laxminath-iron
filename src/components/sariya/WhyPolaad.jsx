import React from "react";

import {
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

import {
  FaIndustry,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FiTrendingUp />,
    title: "High Strength TMT Bars",
    description:
      "Polaad TMT bars provide superior tensile strength and durability for residential and commercial construction.",
  },

  {
    icon: <FaBolt />,
    title: "Earthquake Resistant",
    description:
      "Advanced manufacturing technology gives better flexibility and seismic resistance during earthquakes.",
  },

  {
    icon: <FiShield />,
    title: "Corrosion Resistant",
    description:
      "Special rib design and quality processing improve corrosion resistance and long-term durability.",
  },

  {
    icon: <FaIndustry />,
    title: "Better Concrete Bonding",
    description:
      "Strong rib patterns ensure better grip with concrete for safer structural performance.",
  },

  {
    icon: <FiCheckCircle />,
    title: "Trusted Quality",
    description:
      "Widely trusted by contractors, builders, and homeowners for reliable construction quality.",
  },

  {
    icon: <FiShield />,
    title: "Suitable for All Projects",
    description:
      "Perfect for slabs, columns, beams, foundations, and modern RCC construction projects.",
  },
];

const WhyPolaad = () => {
  return (
    <section className="py-24">

      {/* Heading */}
      <div className="max-w-3xl">

        <span className="text-orange-500 font-bold uppercase tracking-[0.2em]">
          Why Choose Polaad
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Engineered for Strong &
          Reliable Construction
        </h2>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8">
          Polaad TMT bars are designed for high durability,
          better structural strength, and long-lasting
          construction performance across residential and
          commercial projects.
        </p>

      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

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