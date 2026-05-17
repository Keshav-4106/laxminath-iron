import React, { useMemo, useState } from "react";

import {
  FaCalculator,
  FaWarehouse,
  FaWeightHanging,
  FaTools,
} from "react-icons/fa";

import { ESTIMATOR_DATA } from "../../data/sariyaData";

const ConstructionEstimator = () => {

  const [sqft, setSqft] = useState("");

  const calculations = useMemo(() => {

    const area = parseFloat(sqft);

    if (!area || area <= 0) {
      return {
        steelKg: 0,
        bindingWire: 0,
        estimatedRods: 0,
      };
    }

    // Approximation
    const steelKg =
      area * ESTIMATOR_DATA.steelPerSqft;

    const bindingWire =
      (steelKg / 100) *
      ESTIMATOR_DATA.bindingWirePer100Kg;

    const estimatedRods =
      steelKg / 10.65; // approx 12mm rod

    return {
      steelKg,
      bindingWire,
      estimatedRods,
    };

  }, [sqft]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-[2rem] shadow-2xl">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">

        {/* Header */}
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 px-5 py-2 rounded-full text-amber-400 font-semibold mb-6">

            <FaCalculator />

            Smart Construction Estimator

          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">

            Estimate Sariya Quantity
            for Your Construction Area

          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">

            Enter slab or construction area in square feet
            and get an approximate idea of steel quantity,
            binding wire requirement,
            and estimated rods instantly.

          </p>

        </div>

        {/* Input */}
        <div className="mt-10 max-w-xl">

          <label className="block text-lg font-bold text-white mb-4">

            Enter Construction Area (Sqft)

          </label>

          <div className="relative">

            <input
              type="number"
              value={sqft}
              onChange={(e) =>
                setSqft(e.target.value)
              }
              placeholder="Example: 1200"
              className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl px-6 py-5 text-white text-xl outline-none focus:ring-2 focus:ring-amber-500"
            />

            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">

              Sqft

            </div>

          </div>

        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {/* Steel */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7">

            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-3xl mb-6">

              <FaWarehouse />

            </div>

            <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">

              Estimated Steel

            </p>

            <h3 className="text-4xl font-black text-white">

              {calculations.steelKg.toFixed(0)} kg

            </h3>

            <p className="mt-4 text-slate-400 leading-7 text-sm">

              Approximate TMT steel required for your construction area.

            </p>

          </div>

          {/* Binding Wire */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-3xl mb-6">

              <FaTools />

            </div>

            <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">

              Binding Wire

            </p>

            <h3 className="text-4xl font-black text-white">

              {calculations.bindingWire.toFixed(1)} kg

            </h3>

            <p className="mt-4 text-slate-400 leading-7 text-sm">

              Estimated binding wire requirement for tying reinforcement bars.

            </p>

          </div>

          {/* Rods */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-7">

            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-3xl mb-6">

              <FaWeightHanging />

            </div>

            <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">

              Estimated Rods

            </p>

            <h3 className="text-4xl font-black text-white">

              {calculations.estimatedRods.toFixed(0)}

            </h3>

            <p className="mt-4 text-slate-400 leading-7 text-sm">

              Approximate number of 12mm rods required for the structure.

            </p>

          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

          <p className="text-slate-300 leading-8 text-sm sm:text-base">

            <span className="font-bold text-amber-400">

              Important:

            </span>

            {" "}
            These calculations are approximate estimates based on average construction standards.
            Final quantity may vary according to structural design,
            beam size,
            slab thickness,
            and engineering requirements.

          </p>

        </div>

      </div>

    </section>
  );
};

export default ConstructionEstimator;