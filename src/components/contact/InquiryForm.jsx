import React, { useState } from "react";
import { FaUser, FaMapPin, FaClipboardList, FaPaperPlane, FaCheckCircle, FaTruck } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { whatsappUrl, PROPRIETOR, GST_NOTE } from "../../config/site";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    material: "Sariya",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    let wpMessage = `*Laxminath Iron - New Site Inquiry*\n\n`;
    wpMessage += `• *Customer Name:* ${formData.name}\n`;
    wpMessage += `• *WhatsApp/Phone:* ${formData.phone}\n`;
    if (formData.location) wpMessage += `• *Site Location:* ${formData.location}\n`;
    wpMessage += `• *Material Needed:* ${formData.material}\n`;
    if (formData.message) wpMessage += `• *Requirement Details:* ${formData.message}\n\n`;
    wpMessage += `Please share today's rate, availability and transport charges.`;

    window.open(whatsappUrl(wpMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-[36px] p-6 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center">
        
        {/* Left: Trust Content Panel */}
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-md">
            Quick Enquiry
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Send Your Requirement on WhatsApp
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Fill in the form and WhatsApp opens with your details ready to send. We reply with today's rate, availability and transport charges. Proprietor: <span className="font-bold text-slate-800 dark:text-white">{PROPRIETOR}</span>.
          </p>
          
          <div className="space-y-4 pt-2 text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><FaCheckCircle size={16} /></div>
              <span>Rates are indicative and confirmed on WhatsApp</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><FaTruck size={16} /></div>
              <span>Delivery across Bassi, Chittorgarh and nearby regions</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><FiFileText size={16} /></div>
              <span>{GST_NOTE}</span>
            </div>
          </div>
        </div>

        {/* Right: High-Converting UX Form Container */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[32px] blur opacity-15 dark:opacity-30" />
          <form onSubmit={handleFormSubmit} className="relative bg-slate-50 dark:bg-slate-950 p-6 md:p-8 rounded-[30px] border border-slate-200 dark:border-slate-800/80 space-y-5">
            <div>
              <h3 className="text-xl font-black tracking-tight">Quick Material Inquiry</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Nothing is sent until you press Send in WhatsApp.</p>
            </div>
            
            <div>
              <label htmlFor="inquiry-name" className="flex items-center gap-1.5 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                <FaUser size={10} /> Full Name <span className="text-orange-500">*</span>
              </label>
              <input 
                type="text" id="inquiry-name" name="name" required value={formData.name} onChange={handleInputChange}
                placeholder="e.g., Ramesh Kumar"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inquiry-phone" className="block text-[11px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">WhatsApp / Mobile *</label>
                <input 
                  type="tel" id="inquiry-phone" name="phone" required value={formData.phone} onChange={handleInputChange}
                  pattern="(\+91)?[ ]?[6-9][0-9]{4}[ ]?[0-9]{5}" title="Enter a 10-digit Indian mobile number" inputMode="tel"
                  placeholder="10-Digit Number"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition font-medium"
                />
              </div>
              <div>
                <label htmlFor="inquiry-location" className="flex items-center gap-1.5 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  <FaMapPin size={10} /> Delivery Site / Village
                </label>
                <input 
                  type="text" id="inquiry-location" name="location" value={formData.location} onChange={handleInputChange}
                  placeholder="e.g., Bassi Local"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-material" className="flex items-center gap-1.5 text-[11px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                <FaClipboardList size={10} /> Material Required
              </label>
              <select 
                id="inquiry-material" name="material" value={formData.material} onChange={handleInputChange}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition font-black text-slate-800 dark:text-slate-200 cursor-pointer"
              >
                <option value="Sariya">Polaad TMT Sariya</option>
                <option value="Cement">MP Birla Cement</option>
                <option value="Sariya & Cement Both">Both (Sariya & Cement)</option>
              </select>
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-[11px] font-black uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">Estimated Quantity or Notes (Optional)</label>
              <textarea 
                id="inquiry-message" name="message" rows="2" value={formData.message} onChange={handleInputChange}
                placeholder="e.g., Need 3 Tons of 12mm Sariya"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition resize-none font-medium text-slate-700 dark:text-slate-300"
              />
            </div>

            <button
              type="submit"
              disabled={!formData.name || !formData.phone}
              className="w-full py-4 bg-green-500 hover:bg-green-600 disabled:bg-slate-200 disabled:dark:bg-slate-800 text-white disabled:text-slate-400 font-black text-base rounded-xl flex items-center justify-center gap-3 transition duration-300 shadow-lg active:scale-[0.98]"
            >
              <FaPaperPlane size={14} /> Open WhatsApp with My Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;