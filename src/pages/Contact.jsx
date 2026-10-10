import React from "react";
import PageSeo from "../components/PageSeo";
import { FaTruck, FaCheckCircle, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiAward, FiFileText, FiClock } from "react-icons/fi";
import {
  PROPRIETOR,
  FOUNDED_YEAR,
  yearsInBusiness,
  whatsappUrl,
  MAPS_URL,
  MAPS_EMBED_URL,
  ADDRESS_LINE,
  OPENING_HOURS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  GST_NOTE,
  DELIVERY_NOTE,
  LABOUR_NOTE,
} from "../config/site";

// Components Imports Matrix
import ContactHero from "../components/contact/ContactHero";
import InquiryForm from "../components/contact/InquiryForm";
import ContactCards from "../components/contact/ContactCards";
import ProductCatalogMap from "../components/contact/ProductCatalogMap";
import FinalCTA from "../components/sariya/FinalCTA";

import deliveryTruck from "../assets/sariya/delivery-truck.webp";

const trustItems = [
  { title: "Years of Local Trust", showYears: true, description: `Proprietor ${PROPRIETOR} ji has served homeowners and builders in Bassi since ${FOUNDED_YEAR}.`, icon: FiAward },
  { title: "Authorised by Both Brands", description: "Authorised Polaad dealer and MP Birla Cement authorised stockist. Certificates are available to see.", icon: FaCheckCircle },
  { title: "GST Invoice on Request", description: GST_NOTE, icon: FiFileText },
  { title: "Own Delivery Vehicles", description: "Delivery through our Tata CNG auto and tractor. Transport charges apply.", icon: FaTruck },
];

const Contact = () => {
  return (
    <>
      <PageSeo
        title="Contact Laxminath Iron | Polaad TMT Dealer & MP Birla Cement Stockist"
        description="Contact Laxminath Iron, Bassi, Chittorgarh: Polaad TMT Sariya and MP Birla Cement. Today's rates on WhatsApp. Open Mon–Sat, 8 AM – 8 PM."
        path="/contact"
        image="/og/home.jpg"
        imageAlt="Laxminath Iron shop in Bassi with Polaad sariya"
        keywords="Laxminath Iron contact, Polaad TMT dealer Bassi, MP Birla Cement stockist Bassi, construction material Chittorgarh, लक्ष्मीनाथ आयरन बस्सी, सरिया सीमेंट दुकान बस्सी"
      />

      <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <ContactHero />

        {/* 1. TOP DYNAMIC QUICK INQUIRY FORM */}
        <InquiryForm />

        {/* 2. CORE QUICK CONTACT CHANNELS */}
        <ContactCards />

        {/* 3. BUSINESS WHAT WE SUPPLY HUB */}
        <ProductCatalogMap />

        {/* 4. OPERATIONAL TRUST ACCREDITATION GRID */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-400">Why Choose Us</span>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Trusted Local Construction Material Supplier</h2>
              <p className="mt-5 text-slate-400">Real business experience, genuine materials, clear billing and practical delivery support.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-3xl border border-slate-700 bg-slate-800 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-2xl text-orange-400">
                      <Icon />
                    </div>
                    <h3 className="mt-6 text-xl font-black">
                      {item.showYears && <span suppressHydrationWarning>{yearsInBusiness()} </span>}
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. DELIVERY INFORMATION LAYER */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Delivery Information</span>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Self-Pickup and Local Delivery Support</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                You can collect material in your own vehicle or ask us to deliver it in ours. {DELIVERY_NOTE}
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><FaTruck /></div>
                  <div>
                    <h3 className="font-black">Self-Pickup or Delivery</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Choose self-pickup or delivery when you send your enquiry.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><FaCheckCircle /></div>
                  <div>
                    <h3 className="font-black">Delivery Area</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Bassi, Chittorgarh and nearby regions. Transport charges depend on distance and quantity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><FiFileText /></div>
                  <div>
                    <h3 className="font-black">Labour Charges</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{LABOUR_NOTE}</p>
                  </div>
                </div>
              </div>
              <a href={whatsappUrl("Hello Laxminath Iron, I want to confirm material delivery details.")} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-7 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-green-600">
                <FaWhatsapp className="text-xl" /> Confirm Delivery Details
              </a>
            </div>
            <div className="overflow-hidden rounded-[34px] border border-slate-200 shadow-2xl dark:border-slate-800">
              <img src={deliveryTruck} alt="Laxminath Iron local delivery vehicle" loading="lazy" width="750" height="1000" className="min-h-[430px] w-full object-cover" />
            </div>
          </div>
        </section>

        {/* 6. GOOGLE MAP EMBED FRAME */}
        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="grid lg:grid-cols-[360px_1fr]">
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Store Location</span>
                  <h2 className="mt-4 text-3xl font-black">Visit Our Shop</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{ADDRESS_LINE}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm font-bold"><FiClock className="text-orange-500" /> {OPENING_HOURS.label}</p>
                </div>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-black text-white transition hover:bg-orange-500 hover:text-black dark:bg-slate-950">
                  <FaMapMarkerAlt /> Open in Google Maps
                </a>
              </div>
              <div className="h-[480px] lg:h-[520px]">
                <iframe src={MAPS_EMBED_URL} title="Laxminath Iron Location" className="h-full w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. SOCIAL LINK ACTION LAYER */}
        <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-black">Follow Laxminath Iron</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Instagram: {INSTAGRAM_HANDLE}</p>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-2xl bg-pink-500 px-6 py-3.5 font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-pink-600">
              <FaInstagram /> Open Instagram
            </a>
          </div>
        </section>

        <FinalCTA title="Need Construction Materials?" description="Contact Laxminath Iron for today's Polaad TMT Sariya and MP Birla Cement rates, availability and delivery details." />
      </div>
    </>
  );
};

export default Contact;