import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppOrderButton = ({ message, disabled }) => {

  const phoneNumber = '918824841765';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={disabled ? '#' : whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full flex items-center justify-center gap-4 py-5 rounded-3xl text-lg font-bold transition duration-300 shadow-lg
      ${
        disabled
          ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500 dark:text-slate-400 pointer-events-none'
          : 'bg-green-500 hover:bg-green-600 text-white hover:shadow-2xl hover:-translate-y-1'
      }`}
    >

      {/* Icon */}
      <FaWhatsapp className="text-3xl" />

      {/* Text */}
      <span>
        Send Order on WhatsApp
      </span>

    </a>
  );
};

export default WhatsAppOrderButton;