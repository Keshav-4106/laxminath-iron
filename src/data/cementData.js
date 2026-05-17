import birlaChetak from "../assets/birla chetak.png";
import perfectPlus from "../assets/perfect plus.jpg";
import iwpCement from "../assets/iwp cement.png";

export const cementData = {
  brand: "MP Birla Cement",
  dealerName: "Laxminath Iron",

  products: [
    {
      id: 1,
      name: "MP Birla Chetak",
      image: birlaChetak,
      price: 340,
      weightPerBag: 50,
      unit: "bag",
      features: [
        "High Strength",
        "Smooth Finishing",
        "Long Lasting",
      ],
      bestFor: "House Construction",
    },

    {
      id: 2,
      name: "MP Birla Perfect Plus",
      image: perfectPlus,
      price: 380,
      weightPerBag: 50,
      unit: "bag",
      features: [
        "Premium Quality",
        "Strong RCC Support",
        "Better Durability",
      ],
      bestFor: "RCC & Roof Work",
    },

    {
      id: 3,
      name: "MP Birla Perfect Plus IWP",
      image: iwpCement,
      price: 420,
      weightPerBag: 50,
      unit: "bag",
      features: [
        "Water Resistant",
        "Damp Protection",
        "Premium Waterproof Cement",
      ],
      bestFor: "Bathrooms & Water Areas",
    },
  ],
};