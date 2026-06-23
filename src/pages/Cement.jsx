import React, { useState, useMemo } from "react";
import { cementData } from "../data/cementData";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";
import { 
  FaWhatsapp, 
  FaTruck, 
  FaShieldAlt, 
  FaCalculator, 
  FaExclamationTriangle 
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

// Naya imported component wrapper
import CementHero from "../components/cement/CementHero"; 

const Cement = () => {
  // -----------------------------
  // STATES
  // -----------------------------
  const [quantities, setQuantities] = useState({});
  const [deliveryMode, setDeliveryMode] = useState("delivery"); 
  const [distance, setDistance] = useState(""); 

  const CNG_PRICE = 85;      
  const DIESEL_PRICE = 90;    

  const handleQuantityChange = (productName, qty) => {
    setQuantities((prev) => ({
      ...prev,
      [productName]: qty,
    }));
  };

  // -----------------------------
  // LIVE CALCULATIONS
  // -----------------------------
  const { totalBags, rawMaterialTotal, totalWeight } = useMemo(() => {
    let bags = 0;
    let total = 0;
    cementData.products.forEach((product) => {
      const qty = quantities[product.name] || 0;
      bags += qty;
      total += qty * product.price;
    });
    return { totalBags: bags, rawMaterialTotal: total, totalWeight: bags * 50 };
  }, [quantities]);

  // -----------------------------
  // LOGISTICS ALGORITHM
  // -----------------------------
  const logistics = useMemo(() => {
    if (deliveryMode === "pickup") {
      return { freightCharge: 0, vehicleUsed: "Customer Vehicle", isValid: true, error: "" };
    }
    if (distance === "" || distance <= 0) {
      return { freightCharge: 0, vehicleUsed: "Not Selected", isValid: false, error: "Enter valid distance for delivery fare." };
    }
    const roundTripDistance = distance * 2; 

    if (totalWeight > 10000) {
      return {
        freightCharge: 0,
        vehicleUsed: "NONE",
        isValid: false,
        error: `⚠️ Overloaded! Weight exceeds Tractor capacity.`,
      };
    }

    if (totalWeight <= 2500) {
      const autoMileage = 19; 
      const autoFuelCost = (roundTripDistance / autoMileage) * CNG_PRICE;
      return { freightCharge: Math.round(autoFuelCost + 150), vehicleUsed: "Tata CNG Auto", isValid: true, error: "" };
    } else {
      const tractorMileage = 5; 
      const tractorFuelCost = (roundTripDistance / tractorMileage) * DIESEL_PRICE;
      return { freightCharge: Math.round(tractorFuelCost + 300), vehicleUsed: "Tractor", isValid: true, error: "" };
    }
  }, [deliveryMode, distance, totalWeight]);

  const finalGrandTotal = rawMaterialTotal + logistics.freightCharge;

  const handleWhatsAppOrderSubmit = () => {
    let message = `*Laxminath Iron - Cement Inquiry*%0A%0A`;
    let hasItems = false;
    cementData.products.forEach((product) => {
      const qty = quantities[product.name] || 0;
      if (qty > 0) {
        hasItems = true;
        message += `• *${product.name}* -> ${qty} Bags%0A`;
      }
    });
    if (!hasItems) return;
    message += `%0A*GRAND TOTAL:* ₹${finalGrandTotal.toLocaleString("en-IN")}`;
    window.open(`https://wa.me/918824841765?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>MP Birla Cement Dealer in Bassi, Chittorgarh | Laxminath Iron</title>
      </Helmet>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        
        {/* DYNAMIC COMPONENT CALL - Exact look, text animation & height match */}
        <CementHero />

        {/* MAIN BODY GRID WRAPPER */}
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-20 -mt-16">
          
          {/* TRUST CARDS PANEL */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-center">
              <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Genuine Products</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">100% original MP Birla Cement products.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-center">
              <FaTruck className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Quick delivery metrics adjusted via load limits.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 text-center">
              <MdVerified className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Trusted Dealer</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Transparent yard parameters and direct checkout options.</p>
            </div>
          </section>

          {/* TWO COLUMN grid system elements layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
            <div className="space-y-12">
              <section>
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold mb-2">Our Cement Products</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cementData.products.map((product) => (
                    <ProductCard
                      key={product.id} name={product.name} image={product.image} price={product.price}
                      unit={product.unit} quantity={quantities[product.name] || 0}
                      onQuantityChange={(qty) => handleQuantityChange(product.name, qty)}
                      features={product.features} bestFor={product.bestFor}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* AUTOMATED CALCULATOR INTERFACE */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-slate-900 border border-slate-800 text-white rounded-[32px] p-6 shadow-2xl">
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-orange-400">
                  <FaCalculator /> Checkout & Logistics
                </h3>
                <div className="space-y-2 border-b border-slate-800 pb-4 mb-4 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>Selected Load:</span>
                    <span className="font-bold text-white">{totalBags} Bags</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Material Cost:</span>
                    <span className="font-bold text-white">₹{rawMaterialTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Delivery Option</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button" onClick={() => setDeliveryMode("delivery")}
                      className={`p-3 rounded-2xl border text-sm font-bold transition ${deliveryMode === "delivery" ? "bg-orange-500 text-black" : "border-slate-800 bg-slate-950 text-slate-400"}`}
                    >Home Delivery</button>
                    <button
                      type="button" onClick={() => setDeliveryMode("pickup")}
                      className={`p-3 rounded-2xl border text-sm font-bold transition ${deliveryMode === "pickup" ? "bg-orange-500 text-black" : "border-slate-800 bg-slate-950 text-slate-400"}`}
                    >Self-Pickup</button>
                  </div>
                </div>

                {deliveryMode === "delivery" && (
                  <div className="space-y-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-4">
                    <input
                      type="number" min="0" value={distance}
                      onChange={(e) => setDistance(e.target.value === "" ? "" : Math.max(0, parseFloat(e.target.value)))}
                      placeholder="Enter distance in km"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-bold focus:outline-none focus:border-orange-500"
                    />
                    {logistics.error && <div className="text-xs text-red-400">{logistics.error}</div>}
                  </div>
                )}

                <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Freight Charge:</span>
                    <span className="font-bold text-emerald-400">₹{logistics.freightCharge}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span>Grand Total:</span>
                    <span className="text-3xl font-black text-amber-400">₹{finalGrandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  type="button" onClick={handleWhatsAppOrderSubmit}
                  disabled={rawMaterialTotal === 0 || (deliveryMode === "delivery" && !distance)}
                  className="w-full py-4 rounded-2xl font-black text-lg bg-green-500 hover:bg-green-600 text-white transition-all disabled:bg-slate-800 disabled:text-slate-600"
                >Send Inquiry via WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cement;