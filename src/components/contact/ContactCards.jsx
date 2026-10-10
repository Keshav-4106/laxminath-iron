import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PHONE_DISPLAY, TEL_URL, whatsappUrl, EMAIL, MAPS_URL, ADDRESS, OPENING_HOURS } from "../../config/site";

const cardsData = [
  {
    id: "phone",
    title: "Call Us",
    description: `Talk to us for today's rates and order details. ${OPENING_HOURS.label}.`,
    value: PHONE_DISPLAY,
    href: TEL_URL,
    icon: FaPhoneAlt,
    iconClasses: "bg-orange-100 text-orange-500 dark:bg-orange-500/10",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Send your requirement and we'll reply with today's rate and availability.",
    value: "Chat on WhatsApp",
    href: whatsappUrl(),
    external: true,
    icon: FaWhatsapp,
    iconClasses: "bg-green-100 text-green-500 dark:bg-green-500/10",
  },
  {
    id: "email",
    title: "Email",
    description: "Send order, billing or business inquiry details by email.",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: MdEmail,
    iconClasses: "bg-blue-100 text-blue-500 dark:bg-blue-500/10",
  },
  {
    id: "location",
    title: "Store Location",
    description: "Visit our construction material shop and delivery yard.",
    value: `${ADDRESS.locality}, ${ADDRESS.district}`,
    href: MAPS_URL,
    external: true,
    icon: FaMapMarkerAlt,
    iconClasses: "bg-red-100 text-red-500 dark:bg-red-500/10",
  },
];

const ContactCards = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">Contact Options</span>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Contact Laxminath Iron Directly</h2>
        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
          Contact us for today's rates, availability, delivery details and billing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cardsData.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition duration-300 group-hover:scale-110 ${item.iconClasses}`}>
                <Icon />
              </div>
              <h3 className="mt-6 text-xl font-black">{item.title}</h3>
              <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              <p className="mt-5 break-words text-sm font-black text-orange-500">{item.value}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactCards;