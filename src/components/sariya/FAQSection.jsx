// src/components/sariya/FAQSection.jsx

import React, { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
  FaWhatsapp,
} from "react-icons/fa";

const faqData = [
  {
    question: "Which TMT brand do you supply?",
    answer:
      "We supply premium quality Polaad TMT Sariya for residential, commercial and industrial construction work.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes. We provide free delivery in Bassi area using our own vehicles. Nearby villages and locations are also serviceable with transport charges.",
  },
  {
    question: "Can I order directly on WhatsApp?",
    answer:
      "Yes. You can directly send your requirement on WhatsApp and get instant quotation support.",
  },
  {
    question: "Do you provide GST billing?",
    answer:
      "Yes. Proper GST billing is available for material purchases.",
  },
  {
    question: "Do you also supply cement and binding wire?",
    answer:
      "Yes. We also provide MP Birla Cement, binding wire and additional construction materials.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="px-6 md:px-10 pt-10 pb-8 border-b border-slate-200 dark:border-slate-800">

        <div className="inline-flex items-center gap-3 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 px-5 py-3 rounded-2xl mb-6">

          <span className="text-orange-500 text-xl">
            ❓
          </span>

          <span className="font-semibold text-orange-600 dark:text-orange-400">
            Frequently Asked Questions
          </span>

        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">

          Common Questions
          <span className="block text-orange-500 mt-2">
            About Our Supply
          </span>

        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-3xl">

          Find quick answers regarding delivery, pricing,
          product quality, ordering process and construction materials.

        </p>

      </div>

      {/* FAQ List */}
      <div className="p-6 md:p-10 space-y-5">

        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-3xl border transition duration-300 overflow-hidden ${
                isOpen
                  ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                  : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              }`}
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-6"
              >

                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 text-orange-500 text-lg">

                  {isOpen ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </div>

              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="px-6 pb-6">

                  <div className="h-px bg-slate-200 dark:bg-slate-700 mb-5"></div>

                  <p className="text-slate-600 dark:text-slate-400 leading-8 text-base">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Bottom CTA */}
      <div className="px-6 md:px-10 pb-10">

        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2rem] p-8 md:p-10 text-white overflow-hidden relative">

          {/* Background Blur */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <h3 className="text-3xl font-extrabold mb-4">
              Still Have Questions?
            </h3>

            <p className="text-orange-100 text-lg leading-8 max-w-2xl">
              Contact us directly for pricing, stock availability,
              delivery support or construction material guidance.
            </p>

            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-white text-orange-500 hover:bg-slate-100 font-bold px-8 py-5 rounded-2xl transition duration-300 shadow-2xl hover:scale-105"
            >

              <FaWhatsapp className="text-2xl" />

              Chat on WhatsApp

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQSection;