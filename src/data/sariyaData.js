import bindingWireImg from "../assets/sariya/binding-wire.png";

import coverBlockImg from "../assets/sariya/cover block.png";

import taprollImg from "../assets/sariya/polad taproll.png";



/* =========================
   SARIYA SIZES
========================= */

export const SARIYA_SIZES_DATA = [
  {
    size: "8mm",
    weightPerBar: 4.74,
    pricePerKg: 58,
  },

  {
    size: "10mm",
    weightPerBar: 7.4,
    pricePerKg: 58,
  },

  {
    size: "12mm",
    weightPerBar: 10.65,
    pricePerKg: 58,
  },

  {
    size: "16mm",
    weightPerBar: 18.96,
    pricePerKg: 58,
  },

  {
    size: "20mm",
    weightPerBar: 29.6,
    pricePerKg: 58,
  },

  {
    size: "25mm",
    weightPerBar: 46.25,
    pricePerKg: 58,
  },
];



/* =========================
   ADDITIONAL ITEMS
========================= */

export const ADDITIONAL_ITEMS_DATA = [
  {
    id: 1,

    name: "Binding Wire",

    unit: "kg",

    price: 120,

    image: bindingWireImg,
  },

  {
    id: 2,

    name: "Taproll",

    unit: "piece",

    price: 150,

    image: taprollImg,
  },

  {
    id: 3,

    name: "Cover Block",

    unit: "piece",

    price: 100,

    image: coverBlockImg,
  },
];



/* =========================
   TRUST INDICATORS
========================= */

export const TRUST_INDICATORS = [
  {
    title: "20+ Years Experience",

    description:
      "Trusted construction material supplier in Bassi and nearby villages.",
  },

  {
    title: "Free Delivery in Bassi",

    description:
      "Free delivery available in Bassi using our own vehicles.",
  },

  {
    title: "GST Registered",

    description:
      "Proper GST billing and genuine construction materials guaranteed.",
  },

  {
    title: "Fast Material Supply",

    description:
      "Quick loading and same-day dispatch available.",
  },

  {
    title: "Premium Quality",

    description:
      "Strong and durable Polaad TMT Sariya supplied for every construction need.",
  },
];



/* =========================
   FAQ SECTION
========================= */

export const FAQ_DATA = [
  {
    question: "Which TMT brand do you supply?",

    answer:
      "We supply premium quality Polaad TMT Sariya for strong and durable construction work.",
  },

  {
    question: "Do you provide delivery?",

    answer:
      "Yes, free delivery is available in Bassi village and transport support is available for nearby areas.",
  },

  {
    question: "Can I order directly on WhatsApp?",

    answer:
      "Yes, you can calculate quantity and directly send your inquiry on WhatsApp.",
  },

  {
    question: "Do you provide GST bill?",

    answer:
      "Yes, proper GST billing is available for all construction materials.",
  },
];



/* =========================
   CONSTRUCTION ESTIMATOR
========================= */

export const ESTIMATOR_DATA = {
  steelPerSqft: 4,

  bindingWirePer100Kg: 1.2,
};