import React from "react";

import {
  FaPlus,
  FaMinus,
  FaRupeeSign,
} from "react-icons/fa";

const AdditionalItems = ({
  items,
  handleQtyChange,
}) => {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-xl overflow-hidden">

      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800">

        <h2 className="text-3xl font-black text-slate-900 dark:text-white">

          Additional Construction Items

        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">

          Add extra materials required for your construction work.

        </p>

      </div>

      {/* Items */}
      <div className="p-6 sm:p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="group bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-black font-black px-4 py-2 rounded-xl shadow-lg">

                  ₹{item.price}/{item.unit}

                </div>

                {/* Title */}
                <div className="absolute bottom-5 left-5">

                  <h3 className="text-3xl font-black text-white">

                    {item.name}

                  </h3>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-7 mb-6">

                  High-quality construction accessory useful for strong and durable binding support.

                </p>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between gap-4">

                  {/* Minus */}
                  <button
                    onClick={() =>
                      handleQtyChange(item.id, -1)
                    }
                    className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center hover:scale-105 transition"
                  >

                    <FaMinus />

                  </button>

                  {/* Quantity */}
                  <div className="flex-1 text-center">

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">

                      Quantity

                    </p>

                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">

                      {item.quantity}

                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">

                      {item.unit}

                    </p>

                  </div>

                  {/* Plus */}
                  <button
                    onClick={() =>
                      handleQtyChange(item.id, 1)
                    }
                    className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center hover:scale-105 transition"
                  >

                    <FaPlus />

                  </button>

                </div>

                {/* Total */}
                <div className="mt-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">

                      Total Amount

                    </p>

                    <h3 className="text-3xl font-black text-amber-600 dark:text-amber-400">

                      ₹{item.itemTotal.toFixed(0)}

                    </h3>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl">

                    <FaRupeeSign />

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* Empty Showcase Card */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/40 flex flex-col items-center justify-center p-10 text-center min-h-[450px]">

            {/* Background Glow */}
            <div className="absolute w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-5xl text-amber-500 mb-6">

                +

              </div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">

                More Construction Items Coming Soon

              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-7 max-w-md mx-auto">

                Soon we’ll add cement, pipes, sheets, tools,
                and more building materials for easy ordering.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdditionalItems;