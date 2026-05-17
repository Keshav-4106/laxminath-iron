import React from "react";
import { Helmet } from "react-helmet-async";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import contactHero from "../assets/sariya/contact-hero.png";
import constructionSite from "../assets/sariya/construction-site.jpeg";
import deliveryTruck from "../assets/sariya/delivery-truck.jpeg";
import polaadImg from "../assets/sariya/polaad-tmt.png";

const Contact = () => {
  return (
    <>
    <Helmet>

  <title>
    Contact Laxminath Iron | Construction Material Supplier in Bassi
  </title>

  <meta
    name="description"
    content="Contact Laxminath Iron for TMT Sariya, Cement and construction material supply in Bassi, Chittorgarh."
  />

  <meta
    name="keywords"
    content="Laxminath Iron contact, construction supplier Bassi, cement dealer Chittorgarh"
  />

</Helmet>
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">

      {/* Hero Section */}
<section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <img
    src={contactHero}
    alt="Laxminath Iron Shop"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-transparent"></div>

  {/* Extra Soft Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content */}
  <div className="relative z-10 max-w-9xl mx-auto px-6 py-24 w-full">

    <div className="max-w-2xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full text-sm font-semibold text-orange-300 mb-8 shadow-lg">

        <FaCheckCircle className="text-orange-400" />

        Trusted Construction Material Supplier

      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-6 drop-shadow-2xl">

        Laxminath
        <span className="text-orange-400"> Iron</span>

      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-xl">

        Premium supplier of
        <span className="text-white font-semibold"> Polaad TMT Sariya</span>,
        <span className="text-white font-semibold"> MP Birla Cement</span>
        and Scrap Materials in
        <span className="text-orange-300 font-semibold"> Bassi, Chittorgarh</span>.

      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20want%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition duration-300 hover:scale-105 shadow-2xl"
        >
          <FaWhatsapp size={24} />
          WhatsApp Now
        </a>

        {/* Call Button */}
        <a
          href="tel:+918824841765"
          className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition duration-300 text-white"
        >
          <FaPhoneAlt />
          Call Now
        </a>

      </div>

    </div>

  </div>

</section>



      {/* ================= QUICK CONTACT ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl mb-6">

              <FaPhoneAlt />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Call Us
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Directly contact us for material inquiry.
            </p>

            <a
              href="tel:+918824841765"
              className="font-bold text-orange-500"
            >
              +91 8824841765
            </a>

          </div>



          {/* WhatsApp */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-500 text-2xl mb-6">

              <FaWhatsapp />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              WhatsApp
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Get quotation instantly on WhatsApp.
            </p>

            <a
              href="https://wa.me/918824841765"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-green-500"
            >
              Chat Now
            </a>

          </div>



          {/* Email */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-6">

              <MdEmail />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Send us your requirement details anytime.
            </p>

            <p className="font-bold text-blue-500 break-all">
              laxminathiron@gmail.com
            </p>

          </div>



          {/* Location */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-500 text-2xl mb-6">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Location
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mb-5">
              Visit our material supply shop in Rajasthan.
            </p>

            <p className="font-bold text-red-500">
              Bassi, Chittorgarh
            </p>

          </div>

        </div>

      </section>



      {/* ================= WHAT WE SUPPLY ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            What We Supply
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We supply trusted construction materials for residential,
            commercial and industrial projects.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Sariya */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition duration-300">

            <div className="h-64 overflow-hidden">

              <img
                src={polaadImg}
                alt="Polaad TMT"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                Polaad TMT Sariya
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                High strength and durable TMT bars for all construction needs.
              </p>

            </div>

          </div>



          {/* Cement */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition duration-300">

            <div className="h-64 overflow-hidden">

              <img
                src={constructionSite}
                alt="Cement"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                MP Birla Cement
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Premium quality cement for strong and long-lasting construction.
              </p>

            </div>

          </div>



          {/* Scrap */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition duration-300">

            <div className="h-64 overflow-hidden">

              <img
                src={deliveryTruck}
                alt="Scrap"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                Scrap Materials
              </h3>

              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Daily updated scrap rates and material availability support.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= TRUST SECTION ================= */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Why Choose Us
            </h2>

            <p className="text-slate-400 text-lg">
              Trusted by local contractors, builders and homeowners.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {[
              "20+ Years Experience",
              "GST Registered",
              "Free Delivery in Bassi",
              "Fast Material Supply",
              "Own Transport Vehicles",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-800 rounded-3xl p-6 border border-slate-700 text-center"
              >

                <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-2xl mb-5">

                  <FaCheckCircle />

                </div>

                <h3 className="font-bold text-lg leading-relaxed">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= DELIVERY AREAS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">

              Fast Delivery Across
              Nearby Areas

            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">

              We provide fast and reliable construction material delivery
              across Bassi and nearby villages using our own transport vehicles.

            </p>

            <div className="space-y-4">

              {[
                "Free Delivery in Bassi",
                "Chittorgarh Nearby Areas",
                "Begun Side Delivery",
                "Rawatbhata Side Delivery",
                "Quick Loading Support",
              ].map((area, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-500">

                    <FaTruck />

                  </div>

                  <span className="font-semibold text-lg">
                    {area}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <img
              src={deliveryTruck}
              alt="Delivery"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>



      {/* ================= GOOGLE MAP ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">

          <div className="p-8 border-b border-slate-200 dark:border-slate-800">

            <h2 className="text-4xl font-black mb-3">
              Visit Our Shop
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Find us easily on Google Maps and visit our material yard.
            </p>

          </div>

          <div className="w-full h-[500px]">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.886402786943!2d74.75340787446355!3d25.00397567783586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a5b7ad19fa15%3A0xbf3fb6e991cc56cb!2sLaxminath%20iron!5e0!3m2!1sen!2sin!4v1778757928946!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laxminath Iron Location"
            ></iframe>

          </div>

        </div>

      </section>



      {/* ================= FINAL CTA ================= */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-[40px] p-10 md:p-16 text-center text-black shadow-2xl">

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">

              Need Construction Materials?

            </h2>

            <p className="text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto">

              Contact us now for fast quotation,
              delivery support and genuine construction materials.

            </p>

            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20want%20construction%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-black hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl transition duration-300 hover:scale-105 shadow-2xl"
            >

              <FaWhatsapp size={28} />

              Get Instant Quote

            </a>

          </div>

        </div>

      </section>

    </div>
    </>
  );
};

export default Contact;