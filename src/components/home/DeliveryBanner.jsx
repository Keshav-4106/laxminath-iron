import React from "react";
import { FaTruck, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import deliveryImg from "../../assets/home/delivery-home.webp";
import { whatsappUrl, TEL_URL, DELIVERY_NOTE, LABOUR_NOTE } from "../../config/site";

const DeliveryBanner = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img src={deliveryImg} alt="Local construction material delivery support" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-orange-400/25 bg-orange-500/15 px-5 py-2 font-bold text-orange-300 backdrop-blur-md">
            <FaTruck /> Self-Pickup or Delivery
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Delivery Across Bassi, <span className="block text-orange-400">Chittorgarh and Nearby Regions</span>
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-slate-200 md:text-xl">
            {DELIVERY_NOTE} Self-pickup is also available. {LABOUR_NOTE}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-green-600">
              <FaWhatsapp className="text-xl" /> Discuss Delivery
            </a>
            <a href={TEL_URL} className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20">
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;