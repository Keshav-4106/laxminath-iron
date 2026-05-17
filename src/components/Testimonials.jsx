import React from "react";
import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Ji",
    location: "Bassi",
    text:
      "Best quality Polaad TMT Sariya and very fast delivery service.",
  },

  {
    name: "Mukesh Ji",
    location: "Chittorgarh",
    text:
      "MP Birla Cement genuine rates and proper GST billing available.",
  },

  {
    name: "Mahendra Ji",
    location: "Begun",
    text:
      "Trusted supplier for construction materials and excellent support.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
            Customer Feedback
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Trusted by Local Customers
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Supplying quality construction materials with trusted service
            across Bassi and nearby areas.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <FaQuoteLeft className="text-orange-400 text-3xl mb-6" />

              <div className="flex gap-1 mb-5 text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {item.text}
              </p>

              <div>

                <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.location}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;