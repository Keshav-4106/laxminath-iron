import React from 'react';

const OrderSummary = ({ totalWeight, totalAmount }) => {
  return (
    <section className="sticky top-24">

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Order Summary
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Live calculation of your complete order.
          </p>

        </div>

        {/* Summary Content */}
        <div className="p-6 space-y-6">

          {/* Total Weight */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-5">

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Weight
            </p>

            <h3 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
              {totalWeight.toFixed(2)} kg
            </h3>

          </div>

          {/* Total Amount */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 border border-orange-200 dark:border-orange-800">

            <p className="text-sm text-orange-600 dark:text-orange-400">
              Grand Total
            </p>

            <h3 className="mt-2 text-4xl font-extrabold text-orange-600 dark:text-orange-400">
              ₹{totalAmount.toFixed(2)}
            </h3>

          </div>

          {/* Business Note */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-5">

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
              Final prices may vary slightly according to market rates,
              transportation charges, and delivery location.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OrderSummary;