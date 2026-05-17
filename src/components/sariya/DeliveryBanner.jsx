// src/components/sariya/DeliveryBanner.jsx

import React from "react";
import deliveryTruck from "../../assets/sariya/delivery-truck.jpg";

import {
  FaTruckMoving,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const DeliveryBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={deliveryTruck}
          alt="Delivery Truck"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-14 md:px-12 md:py-16">

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-orange-500/20 border border-orange-400/30 backdrop-blur-md px-5 py-3 rounded-2xl mb-6">

            <FaTruckMoving className="text-orange-400 text-xl" />

            <span className="text-orange-200 font-semibold">
              Fast & Reliable Delivery Service
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">

            Free Delivery in{" "}
            <span className="text-orange-400">
              Bassi Area
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl">

            We provide fast and secure delivery of Polaad TMT Sariya,
            Binding Wire and Construction Materials directly to your site.

            Free delivery available in Bassi village area using our own
            vehicles. Nearby villages and locations are also serviceable
            with nominal transport charges.

          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">
                Service Area
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Bassi and nearby villages across Chittorgarh district.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-4">
                <FaClock />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">
                Quick Dispatch
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Same-day or next-day delivery available for most orders.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center text-2xl mb-4">
                <FaWhatsapp />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">
                Easy Ordering
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Send your requirement directly on WhatsApp instantly.
              </p>

            </div>

          </div>

          {/* CTA */}
          <div className="mt-10">

            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20need%20construction%20material%20delivery."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-5 rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition duration-300 hover:scale-105"
            >

              <FaWhatsapp className="text-2xl" />

              Request Delivery

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DeliveryBanner;