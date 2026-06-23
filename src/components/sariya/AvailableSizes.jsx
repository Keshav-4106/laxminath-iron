import React from "react";

const sizes = [
  {
    size: "8mm",
    usage: "Stirrups & Light Structures",
    weight: "0.395 kg/ft",
  },

  {
    size: "10mm",
    usage: "Slabs & Residential Construction",
    weight: "0.617 kg/ft",
  },

  {
    size: "12mm",
    usage: "Beams & Columns",
    weight: "0.888 kg/ft",
  },

  {
    size: "16mm",
    usage: "Heavy RCC Structures",
    weight: "1.580 kg/ft",
  },

  {
    size: "20mm",
    usage: "Commercial Foundations",
    weight: "2.470 kg/ft",
  },

  {
    size: "25mm",
    usage: "Industrial Construction",
    weight: "3.850 kg/ft",
  },
];

const AvailableSizes = () => {
  return (
    <section className="py-24">

      {/* Heading */}
      <div className="max-w-3xl">

        <span className="text-orange-500 font-bold uppercase tracking-[0.2em]">
          Available Sizes
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">

          Polaad TMT Sizes Available
          at Laxminath Iron

        </h2>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8">

          We supply premium Polaad TMT bars in multiple
          sizes suitable for slabs, beams, columns,
          foundations, and RCC construction work.

        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

        {sizes.map((item, index) => (

          <div
            key={index}
            className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
          >

            {/* Orange Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full group-hover:scale-150 transition duration-700"></div>

            {/* Size */}
            <div className="relative z-10">

              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-orange-500 text-white text-3xl font-black shadow-xl">

                {item.size}

              </div>

              {/* Usage */}
              <h3 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">

                {item.usage}

              </h3>

              {/* Weight */}
              <div className="mt-6 inline-flex items-center bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-2xl">

                <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">
                  Weight:
                </span>

                <span className="ml-3 text-slate-900 dark:text-white font-bold">
                  {item.weight}
                </span>

              </div>

              {/* Bottom Text */}
              <p className="mt-6 text-slate-600 dark:text-slate-400 leading-7">

                Premium quality Polaad TMT bars
                suitable for strong and durable
                RCC construction.

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default AvailableSizes;