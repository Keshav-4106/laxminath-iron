import React from "react";

import {
  FaWhatsapp,
  FaTruck,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

import heroImage from "../../assets/sariya/hero-sariya.jpg";

const SariyaHero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] min-h-[650px] flex items-center">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Polaad TMT Sariya Supplier in Bassi Chittorgarh"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 backdrop-blur-md px-5 py-2 rounded-full text-amber-300 text-sm font-semibold mb-6">

            <FaStar />

            Trusted Polaad TMT Supplier

          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">

            Premium
            <span className="text-amber-400"> Polaad TMT </span>

            Sariya Dealer
            in Bassi, Chittorgarh

          </h1>

          {/* Description */}
          <p className="mt-8 text-lg sm:text-xl leading-8 text-slate-300 max-w-2xl">

            Get high-quality Polaad TMT Sariya with fast delivery,
            GST billing,
            accurate weight calculation,
            and trusted local service for all construction projects.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20want%20information%20about%20Polaad%20TMT%20Sariya."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-bold text-white transition duration-300 hover:scale-105 shadow-2xl"
            >

              <FaWhatsapp className="text-2xl" />

              Get Instant Quote

            </a>

            {/* Delivery */}
            <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-lg border border-white/10 px-8 py-4 rounded-2xl text-lg font-semibold text-white">

              <FaTruck className="text-amber-400" />

              Free Delivery in Bassi

            </div>

          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">

            {/* Feature */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">

                <FaShieldAlt className="text-amber-400 text-xl" />

                <h3 className="text-white font-bold">
                  Genuine Products
                </h3>

              </div>

              <p className="text-slate-300 text-sm leading-6">

                100% genuine Polaad TMT supplied with proper quality assurance.

              </p>

            </div>

            {/* Feature */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">

                <FaTruck className="text-amber-400 text-xl" />

                <h3 className="text-white font-bold">
                  Fast Delivery
                </h3>

              </div>

              <p className="text-slate-300 text-sm leading-6">

                Quick loading and delivery support available for nearby villages.

              </p>

            </div>

            {/* Feature */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">

                <FaStar className="text-amber-400 text-xl" />

                <h3 className="text-white font-bold">
                  Trusted Supplier
                </h3>

              </div>

              <p className="text-slate-300 text-sm leading-6">

                Serving construction needs in Bassi and surrounding areas for years.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SariyaHero;