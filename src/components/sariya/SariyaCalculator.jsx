// src/components/sariya/SariyaCalculator.jsx

import React, { useMemo, useState } from "react";

import {
  FaCalculator,
  FaWeightHanging,
  FaRulerCombined,
  FaCube,
  FaWhatsapp,
} from "react-icons/fa";

const SariyaCalculator = () => {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("5");

  // Business Number
  const WHATSAPP_NUMBER = "918824841765";

  const calculation = useMemo(() => {

    const l = Number(length);
    const w = Number(width);
    const t = Number(thickness);

    if (!l || !w || !t || l <= 0 || w <= 0 || t <= 0) {

      return {
        volume: 0,
        steel: 0,
        steelInTon: 0,
        bindingWire: 0,
      };

    }

    // Concrete Volume in CFT
    const volume = l * w * (t / 12);

    // Slab Area
    const slabArea = l * w;

    // Thickness Factor
    const thicknessFactor = t / 5;

    // Approx Steel Requirement
    const steel = Math.round(
      slabArea * 2.8 * thicknessFactor
    );

    // Steel in Ton
    const steelInTon = (steel / 1000).toFixed(2);

    // Binding Wire
    const bindingWire = Math.round(steel * 0.012);

    return {
      volume,
      steel,
      steelInTon,
      bindingWire,
    };

  }, [length, width, thickness]);

  const handleWhatsAppInquiry = () => {

    const message = `Hello Laxminath Iron,

Maine website par slab requirement calculate ki hai:

📏 Dimensions:
${length}ft × ${width}ft

Thickness:
${thickness} inch

🧱 Concrete Volume:
${calculation.volume.toFixed(1)} CFT

🏗️ Estimated Steel:
${calculation.steel} kg (${calculation.steelInTon} Ton)

🔩 Binding Wire:
${calculation.bindingWire} kg

Kripya mujhe best rate batayein.`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );

  };

  return (

    <section className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="p-8 border-b border-slate-200 dark:border-slate-800">

        <div className="flex items-center gap-4 mb-5">

          <div className="w-16 h-16 rounded-3xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">

            <FaCalculator className="text-3xl text-orange-500" />

          </div>

          <div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Sariya Calculator
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Estimate slab steel requirement
            </p>

          </div>

        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-8 max-w-3xl">

          Enter slab dimensions to calculate approximate steel quantity,
          concrete volume and binding wire requirement.

        </p>

      </div>

      {/* Inputs */}
      <div className="p-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Length */}
          <div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">

              <FaRulerCombined className="text-orange-500" />

              Length (Feet)

            </label>

            <input
              type="number"
              placeholder="Example: 20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          {/* Width */}
          <div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">

              <FaRulerCombined className="text-orange-500" />

              Width (Feet)

            </label>

            <input
              type="number"
              placeholder="Example: 15"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          {/* Thickness */}
          <div>

            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">

              <FaCube className="text-orange-500" />

              Slab Thickness (Inch)

            </label>

            <input
              type="number"
              placeholder="Example: 5"
              value={thickness}
              onChange={(e) => setThickness(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

        </div>

      </div>

      {/* Results */}
      <div className="px-8 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Concrete Volume */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Concrete Volume
                </p>

                <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">

                  {calculation.volume.toFixed(1)}

                  <span className="text-lg text-orange-500 ml-1">
                    CFT
                  </span>

                </h3>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl">
                🧱
              </div>

            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Approx slab concrete volume.
            </p>

          </div>

          {/* Steel */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Steel Quantity
                </p>

                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">

                  {calculation.steel}

                  <span className="text-sm text-orange-500 ml-1">
                    kg
                  </span>

                </h3>

                {calculation.steel >= 1000 && (

                  <p className="text-sm text-orange-500 font-semibold mt-2">

                    ({calculation.steelInTon} Ton)

                  </p>

                )}

              </div>

              <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center text-2xl">

                <FaWeightHanging />

              </div>

            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Estimated TMT steel requirement.
            </p>

          </div>

          {/* Binding Wire */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Binding Wire
                </p>

                <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2">

                  {calculation.bindingWire}

                  <span className="text-lg text-orange-500 ml-1">
                    kg
                  </span>

                </h3>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-500 text-white flex items-center justify-center text-2xl">
                🔩
              </div>

            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Approx wire needed for tying rods.
            </p>

          </div>

        </div>

        {/* WhatsApp Button */}
        {calculation.steel > 0 && (

          <div className="mt-8 flex justify-center">

            <button
              onClick={handleWhatsAppInquiry}
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl"
            >

              <FaWhatsapp className="text-2xl" />

              Get Live Quote on WhatsApp

            </button>

          </div>

        )}

        {/* Bottom Note */}
        <div className="mt-8 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-3xl p-6">

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Important Note
          </h4>

          <p className="text-slate-600 dark:text-slate-400 leading-8">

            These calculations are approximate values based on standard
            residential slab construction formulas. Actual requirement
            may vary depending on structural design and engineering.

          </p>

        </div>

      </div>

    </section>

  );

};

export default SariyaCalculator;