import React from "react";

import {
  FaWeightHanging,
  FaRupeeSign,
} from "react-icons/fa";

const SariyaTable = ({
  tableData,
  handleQtyChange,
}) => {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-xl overflow-hidden">

      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <h2 className="text-3xl font-black text-slate-900 dark:text-white">

              Polaad TMT Rate Calculator

            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">

              Enter number of rods and instantly calculate weight & amount.

            </p>

          </div>

          {/* Rate Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20 px-5 py-3 rounded-2xl">

            <FaRupeeSign className="text-amber-600 dark:text-amber-400" />

            <span className="font-bold text-slate-900 dark:text-white">
              Current Rate:
            </span>

            <span className="text-amber-600 dark:text-amber-400 font-black text-lg">
              ₹58/kg
            </span>

          </div>

        </div>

      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Size
              </th>

              <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Weight / Rod
              </th>

              <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Quantity
              </th>

              <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Total Weight
              </th>

              <th className="px-6 py-5 text-left text-sm font-bold text-slate-700 dark:text-slate-300 uppercase">
                Amount
              </th>

            </tr>

          </thead>

          <tbody>

            {tableData.map((item, index) => (

              <tr
                key={item.size}
                className={`border-t border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition ${
                  index % 2 === 0
                    ? "bg-white dark:bg-slate-900"
                    : "bg-slate-50/50 dark:bg-slate-900/50"
                }`}
              >

                {/* Size */}
                <td className="px-6 py-6">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center font-black text-amber-600 dark:text-amber-400">

                      {item.size.replace("mm", "")}

                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {item.size} TMT
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Polaad TMT Rod
                      </p>

                    </div>

                  </div>

                </td>

                {/* Weight */}
                <td className="px-6 py-6 text-slate-700 dark:text-slate-300 font-semibold">

                  {item.weightPerBar} kg

                </td>

                {/* Quantity */}
                <td className="px-6 py-6">

                  <input
                    type="number"
                    min="0"
                    value={item.rods}
                    onChange={(e) =>
                      handleQtyChange(
                        item.size,
                        e.target.value
                      )
                    }
                    className="w-28 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white font-bold"
                  />

                </td>

                {/* Weight */}
                <td className="px-6 py-6">

                  <div className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold">

                    <FaWeightHanging className="text-amber-500" />

                    {item.totalWeight.toFixed(2)} kg

                  </div>

                </td>

                {/* Amount */}
                <td className="px-6 py-6">

                  <span className="text-2xl font-black text-amber-600 dark:text-amber-400">

                    ₹{item.totalAmount.toFixed(0)}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden p-5 space-y-5">

        {tableData.map((item) => (

          <div
            key={item.size}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-5"
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 font-black text-lg">

                  {item.size.replace("mm", "")}

                </div>

                <div>

                  <h3 className="font-black text-lg text-slate-900 dark:text-white">

                    {item.size} TMT

                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    {item.weightPerBar} kg / rod

                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Amount
                </p>

                <h3 className="text-2xl font-black text-amber-600 dark:text-amber-400">

                  ₹{item.totalAmount.toFixed(0)}

                </h3>

              </div>

            </div>

            {/* Input */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2">

                Number of Rods

              </label>

              <input
                type="number"
                min="0"
                value={item.rods}
                onChange={(e) =>
                  handleQtyChange(
                    item.size,
                    e.target.value
                  )
                }
                className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white font-bold"
              />

            </div>

            {/* Total Weight */}
            <div className="mt-5 flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4">

              <span className="text-slate-600 dark:text-slate-400 font-medium">

                Total Weight

              </span>

              <span className="font-black text-slate-900 dark:text-white">

                {item.totalWeight.toFixed(2)} kg

              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default SariyaTable;