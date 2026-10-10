// Single source of truth for business details and shared wording.
// To move to a custom domain later, change SITE_URL here AND the two
// files in /public that cannot import this file: robots.txt and sitemap.xml.

export const SITE_URL = "https://laxminathiron.pages.dev";

export const BUSINESS_NAME = "Laxminath Iron";
export const PROPRIETOR = "Prakash Somani";
export const FOUNDED_YEAR = 2016;
export const yearsInBusiness = () => new Date().getFullYear() - FOUNDED_YEAR;

// Phone and WhatsApp (one number for both)
export const PHONE_E164 = "+919571757001";
export const PHONE_DISPLAY = "+91 95717 57001";
export const WHATSAPP_NUMBER = "919571757001";
export const TEL_URL = `tel:${PHONE_E164}`;
export const whatsappUrl = (message) =>
  message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL = "laxminathiron@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/laxminath_iron/";
export const INSTAGRAM_HANDLE = "@laxminath_iron";

export const ADDRESS = {
  street: "Bassi Highway, Near Jogniya Car Bazar",
  locality: "Bassi",
  district: "Chittorgarh",
  region: "Rajasthan",
  postalCode: "312022",
  country: "IN",
};
export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.district}, ${ADDRESS.region} – ${ADDRESS.postalCode}`;
export const GEO = { latitude: 25.0039756, longitude: 74.7534078 };
export const MAPS_URL = "https://maps.google.com/?q=Laxminath+Iron+Bassi+Chittorgarh";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.886402786943!2d74.75340787446355!3d25.00397567783586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a5b7ad19fa15%3A0xbf3fb6e991cc56cb!2sLaxminath%20iron!5e0!3m2!1sen!2sin!4v1778757928946!5m2!1sen!2sin";

export const OPENING_HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "08:00",
  closes: "20:00",
  label: "Mon–Sat, 8:00 AM – 8:00 PM",
};

// Shared customer-facing wording (keep these consistent everywhere)
export const GST_NOTE = "GST invoice available on request.";
export const DELIVERY_NOTE =
  "Delivery across Bassi, Chittorgarh and nearby regions (transport charges apply based on distance and quantity).";
export const LABOUR_NOTE = "Loading and unloading labour is charged separately.";
export const GST_PRICE_NOTE = "Rates exclude GST. GST is extra as applicable on the final invoice.";
export const PRICE_DISCLAIMER =
  "Prices shown are indicative market rates, excluding GST. Daily rates fluctuate, so please confirm the latest rate, availability and transport charges with Laxminath Iron on WhatsApp before placing your order.";

export const POLAAD_PRODUCT = "Polaad QST Fe 550D TMT Sariya";
export const POLAAD_ROLE = "Authorised Polaad Dealer";
export const BIRLA_ROLE = "MP Birla Cement Authorised Stockist";
