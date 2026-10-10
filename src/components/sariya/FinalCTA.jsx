import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiTruck, FiShield } from "react-icons/fi";
import { whatsappUrl, TEL_URL } from "../../config/site";

const FinalCTA = ({
  title = "Ready to Order Polaad TMT Sariya?",
  description = "Contact Laxminath Iron for today's rates, availability and delivery details.",
  trustLabel = "Trusted Construction Material Supplier",
}) => {
  return (
    <section className="mx-auto my-16 max-w-7xl px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-8 shadow-2xl md:p-14">
        {/* Background Glow Overlay */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-black/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
              <FiShield className="text-xl text-white" />
              <span className="font-semibold text-white">
                {trustLabel}
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-50">
              {description}
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                <FiTruck />
                Delivery Support
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                <FiShield />
                Authorised Brands
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                <FiPhoneCall />
                Quick Support
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col gap-5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[280px] items-center justify-center gap-4 rounded-3xl bg-white px-8 py-5 text-lg font-black text-orange-600 shadow-2xl transition duration-300 hover:scale-105 hover:bg-slate-100"
            >
              <FaWhatsapp className="text-3xl text-green-600 transition duration-300 group-hover:scale-110" />
              Chat on WhatsApp
            </a>

            <a
              href={TEL_URL}
              className="group flex min-w-[280px] items-center justify-center gap-4 rounded-3xl border border-white/20 bg-black/20 px-8 py-5 text-lg font-black text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/30"
            >
              <FiPhoneCall className="text-2xl transition duration-300 group-hover:rotate-12" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;