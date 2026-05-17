import React from "react";

import {
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaFileInvoice,
} from "react-icons/fa";

import { TRUST_INDICATORS } from "../../data/sariyaData";

const iconMap = [
  <FaClock />,
  <FaTruck />,
  <FaFileInvoice />,
  <FaShieldAlt />,
];

const TrustIndicators = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {TRUST_INDICATORS.map((item, index) => (

        <div
          key={index}
          className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-3xl text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-110 transition duration-300">

            {iconMap[index]}

          </div>

          {/* Title */}
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">

            {item.title}

          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 leading-7 text-sm">

            {item.description}

          </p>

        </div>

      ))}

    </section>
  );
};

export default TrustIndicators;