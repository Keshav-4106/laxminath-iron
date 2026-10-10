import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { TEL_URL, PHONE_DISPLAY, whatsappUrl, MAPS_URL, MAPS_EMBED_URL, ADDRESS_LINE, OPENING_HOURS } from "../../config/site";

const ContactLocation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75 }}
      className="px-5 pb-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <div className="grid items-stretch gap-9 lg:grid-cols-[390px_1fr]">
          <div className="flex flex-col justify-between p-2 md:p-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Contact and Location</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Visit Laxminath Iron</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Contact us for today's indicative rates, availability, billing and delivery details.
              </p>
            </div>

            <div className="my-8 space-y-5">
              {/* PHONE CALL BUTTON */}
              <a 
                href={TEL_URL}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-500/40 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Call us</p>
                  <p className="font-black">{PHONE_DISPLAY}</p>
                </div>
              </a>

              {/* WHATSAPP BUTTON */}
              <a 
                href={whatsappUrl()}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-green-500/40 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">WhatsApp</p>
                  <p className="font-black">Chat for quotation</p>
                </div>
              </a>

              {/* STORE ADDRESS (CLICKABLE GOOGLE MAPS LINK) */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-950 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-105 transition-transform duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span>Store address</span>
                    <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-wider">(Open in Maps)</span>
                  </p>
                  <p className="mt-1 text-sm font-bold leading-relaxed group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {ADDRESS_LINE}
                  </p>
                </div>
              </a>

              {/* OPENING HOURS */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <FiClock />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Opening hours</p>
                  <p className="font-black">{OPENING_HOURS.label}</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-500 hover:text-black dark:bg-slate-950">
              View Contact Page <FiArrowRight />
            </Link>
          </div>

          <div className="min-h-[440px] overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
            <iframe
              title="Laxminath Iron Location Map"
              src={MAPS_EMBED_URL}
              className="h-full min-h-[440px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactLocation;