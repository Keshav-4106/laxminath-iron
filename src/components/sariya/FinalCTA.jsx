import React from "react";

import {
  FaWhatsapp,
} from "react-icons/fa";

import {
  FiPhoneCall,
  FiTruck,
  FiShield,
} from "react-icons/fi";

const FinalCTA = () => {
  return (
    <section className="mt-24">

      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 rounded-[40px] p-8 md:p-14 shadow-2xl">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl backdrop-blur-md mb-6">

              <FiShield className="text-white text-xl" />

              <span className="font-semibold text-white">
                Trusted Construction Material Supplier
              </span>

            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

              Ready to Order
              Premium Polaad TMT
              Sariya?

            </h2>

            <p className="mt-6 text-lg text-orange-50 leading-8 max-w-3xl">

              Contact Laxminath Iron today for
              latest rates, stock availability,
              delivery support and construction
              material guidance.

            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-8">

              <div className="flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 rounded-2xl text-white backdrop-blur-md">

                <FiTruck />

                Fast Delivery

              </div>

              <div className="flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 rounded-2xl text-white backdrop-blur-md">

                <FiShield />

                Trusted Quality

              </div>

              <div className="flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 rounded-2xl text-white backdrop-blur-md">

                <FiPhoneCall />

                Quick Support

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918824841765"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-slate-100 text-orange-500 px-8 py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-4 shadow-2xl transition duration-300 hover:scale-105 min-w-[300px]"
            >

              <FaWhatsapp className="text-3xl group-hover:scale-110 transition duration-300" />

              Chat on WhatsApp

            </a>

            {/* Call */}
            <a
              href="tel:+918824841765"
              className="group bg-black/20 hover:bg-black/30 border border-white/20 text-white px-8 py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-4 backdrop-blur-md transition duration-300 hover:scale-105 min-w-[300px]"
            >

              <FiPhoneCall className="text-2xl group-hover:rotate-12 transition duration-300" />

              Call Now

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FinalCTA;