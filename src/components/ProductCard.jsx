import React from "react";

const ProductCard = ({
  name,
  image,
  price,
  unit,
  quantity = 0,
  onQuantityChange,
  features = [],
  bestFor = "General use",
}) => {
  const totalCost = price * quantity;

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    onQuantityChange(isNaN(val) || val < 0 ? 0 : val);
  };

  const increment = () => onQuantityChange(quantity + 1);
  const decrement = () => onQuantityChange(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col">
      <div className="w-full h-64 overflow-hidden bg-slate-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {name}
        </h2>

        <p className="text-amber-600 dark:text-amber-400 text-xl font-bold mb-4">
          ₹{price}
          <span className="text-sm text-slate-500 ml-1">/ {unit}</span>
        </p>

        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {bestFor && (
          <div className="mb-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best For
            </p>
            <p className="font-semibold text-slate-800 dark:text-white">
              {bestFor}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-900 rounded-xl p-2 mb-5">
          <button
            onClick={decrement}
            className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 text-xl font-bold shadow"
          >
            -
          </button>

          <input
            type="number"
            value={quantity === 0 ? "" : quantity}
            onChange={handleInputChange}
            placeholder="0"
            className="w-20 text-center bg-transparent outline-none text-lg font-bold dark:text-white"
          />

          <button
            onClick={increment}
            className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 text-xl font-bold shadow"
          >
            +
          </button>
        </div>

        <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-4 mb-5">
          <span className="text-slate-500 dark:text-slate-400">Total</span>
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            ₹{totalCost.toLocaleString("en-IN")}
          </span>
        </div>

        <a
          href={`https://wa.me/918824841765?text=${encodeURIComponent(
            `Hello Laxminath Iron, I want details for ${name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-bold transition duration-300"
        >
          Get Quote on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;