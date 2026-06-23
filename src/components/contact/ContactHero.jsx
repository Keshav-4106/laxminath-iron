   import React from "react";
   // eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaWhatsapp,
} from "react-icons/fa";

import {
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";

import contactHero from "../../assets/sariya/construction-site.jpeg";

const ContactHero = () => {

  return (

    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={contactHero}
        alt="Contact Laxminath Iron"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Animated Orange Glow */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-5 py-2 rounded-full mb-6 backdrop-blur-md">

            <FiCheckCircle />

           Contact Laxminath Iron

          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">

          Let’s Build Strong
            Construction Together

          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-slate-200 leading-8">

             Contact us for premium Polaad TMT Sariya,
            binding wire, cement and construction materials
            in Bassi & nearby areas.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

             <a
              href="https://wa.me/918824841765"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition duration-300 hover:scale-105"
            >

              <FaWhatsapp size={22} />

              WhatsApp Now

            </a>

            <a
              href="tel:+918824841765"
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition duration-300 backdrop-blur-md"
            >

              <FiPhoneCall />

              Call Now

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default ContactHero;