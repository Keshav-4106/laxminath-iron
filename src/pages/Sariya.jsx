import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiTruck, FiShield, FiClock, FiAward } from "react-icons/fi";
import { FaCalculator, FaWhatsapp } from "react-icons/fa";
import { SARIYA_SIZES_DATA, CURRENT_SARIYA_RATE } from "../data/sariyaData";

import SariyaHero from "../components/sariya/SariyaHero";
import WhyPolaad from "../components/sariya/WhyPolaad";
import FinalCTA from "../components/sariya/FinalCTA";

// Dynamic Guard: Commented till certificate asset is copied to resolve Vite compiler crash errors
// import dealerCertificate from "../assets/sariya/polaad-dealer-certificate.jpg";

const Sariya = () => {
  const [sariyaQuantities, setSariyaQuantities] = useState(
    SARIYA_SIZES_DATA.reduce((acc, item) => {
      acc[item.size] = 0;
      return acc;
    }, {})
  );

  const [deliveryMode, setDeliveryMode] = useState("delivery");
  const [customerLocation, setCustomerLocation] = useState("");

  const hasValidLocation = customerLocation.trim().length >= 2;

  const handleQtyChange = (size, delta) => {
    setSariyaQuantities((prev) => {
      const currentQty = prev[size] || 0;
      const newQty = Math.max(0, currentQty + delta);
      return { ...prev, [size]: newQty };
    });
  };

  const handleInputChange = (size, val) => {
    const parsed = parseInt(val, 10);
    setSariyaQuantities((prev) => ({
      ...prev,
      [size]: isNaN(parsed) || parsed < 0 ? 0 : parsed
    }));
  };

  const calculationGrid = useMemo(() => {
    return SARIYA_SIZES_DATA.map((item) => {
      const rods = sariyaQuantities[item.size] || 0;
      const totalWeight = rods * item.weightPerBar;
      const totalAmount = totalWeight * item.pricePerKg;
      return { ...item, rods, totalWeight, totalAmount };
    });
  }, [sariyaQuantities]);

  const totals = useMemo(() => {
    const totalWeight = calculationGrid.reduce((acc, item) => acc + item.totalWeight, 0);
    const totalAmount = calculationGrid.reduce((acc, item) => acc + item.totalAmount, 0);
    return { totalWeight, totalAmount };
  }, [calculationGrid]);

  const handleWhatsAppOrderSubmit = () => {
    const selectedItems = calculationGrid.filter((item) => item.rods > 0);
    if (selectedItems.length === 0) return;

    let message = `*Laxminath Iron - Polaad Fe 550D Inquiry*\n\n`;

    selectedItems.forEach((item) => {
      message += `• *${item.size} Fe 550D* - ${item.rods} rods (${item.totalWeight.toFixed(1)} kg)\n`;
    });

    message += `\n*Material Summary*\n`;
    message += `• Estimated Weight: ${totals.totalWeight.toFixed(1)} kg`;
    if (totals.totalWeight >= 1000) {
      message += ` (${(totals.totalWeight / 1000).toFixed(2)} ton)`;
    }
    message += `\n• Estimated Amount: ₹${Math.round(totals.totalAmount).toLocaleString("en-IN")}\n`;

    message += `\n*Delivery Details*\n`;
    message += `• Mode: ${deliveryMode === "pickup" ? "Self-Pickup" : "Home Delivery"}\n`;
    if (deliveryMode === "delivery") {
      message += `• Location: ${customerLocation.trim()}\n`;
    }

    message += `\nPlease confirm today's rate, stock availability and delivery charge.`;

    const whatsappUrl = `https://wa.me/918824841765?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Polaad Fe 550D TMT Authorized Dealer in Bassi | Laxminath Iron</title>
        <meta name="description" content="Laxminath Iron is an authorized Polaad TMT dealer in Bassi, Chittorgarh. Buy Polaad Fe 550D TMT bars in 8mm, 10mm, 12mm, 16mm, 20mm and 25mm sizes with proper billing and local delivery support." />
        <meta name="keywords" content="Polaad TMT dealer Bassi, Sariya supplier Chittorgarh, Polaad Fe 550D Bassi, TMT sariya Chittorgarh, 25mm sariya" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
        
        <SariyaHero />

        {/* TRUST STRIP */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiAward className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Authorized Dealer</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Official dealership certificate available for customer verification.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiShield className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Polaad Fe 550D</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">High-strength and high-ductility TMT bars for RCC construction.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiClock className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Genuine Invoicing</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Proper invoice with clear quantity, weight and rate details.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiTruck className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Local Delivery</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Delivery support available in Bassi and nearby areas.</p>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          
          {/* SAFE PLACEHOLDER VERIFICATION SECTION */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[36px] p-8 md:p-12 shadow-xl">
            <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 p-8 text-center dark:border-slate-800 dark:bg-slate-950">
              <FiAward className="mb-4 text-6xl text-orange-500" />
              <h3 className="text-xl font-black">Authorized Dealer Certificate</h3>
              <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                Authorized dealership certificate will be displayed here shortly.
              </p>
            </div>
            <div className="space-y-6">
              <span className="rounded-md bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500">
                Authorized Polaad Dealer
              </span>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Genuine Polaad Fe 550D TMT Sariya
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                Laxminath Iron is an authorized Polaad TMT dealer in Bassi, Chittorgarh. We supply genuine Polaad Fe 550D bars with proper billing, transparent weight details and local delivery support.
              </p>
            </div>
          </section>

          {/* DYNAMIC BENEFITS SECTION */}
          <WhyPolaad />

          {/* CALCULATOR INTERFACE */}
          <section className="mt-24 mb-24">
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-black flex items-center gap-3">
                <FaCalculator className="text-orange-500" /> Polaad Fe 550D Weight & Quote Calculator
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Indicative rate: <span className="font-bold text-slate-900 dark:text-white">₹{CURRENT_SARIYA_RATE}/kg</span>. Final rate and stock availability will be confirmed during final order on WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
              
              {/* INTERACTIVE MERGED SIZES LIST */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {calculationGrid.map((item) => (
                  <div 
                    key={item.size} 
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight">{item.size} TMT Bar</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Indicative Rate: ₹{item.pricePerKg}/kg</p>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-xl border border-emerald-500/20">
                        {item.stockStatus || "Available"}
                      </span>
                    </div>

                    <div className="space-y-1.5 border-y border-slate-100 dark:border-slate-800 py-3 my-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <div className="flex justify-between">
                        <span>Standard Length:</span>
                        <span className="text-slate-900 dark:text-white font-bold">12 Metres</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Approx. Bar Weight:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{item.weightPerBar} kg</span>
                      </div>
                    </div>

                    {/* CONTROL LAYER COUNTER */}
                    <div className="flex items-center justify-between gap-4 mt-4">
                      <div className="flex items-center bg-slate-100 dark:bg-slate-950 rounded-2xl p-1 border border-slate-200 dark:border-slate-800/80">
                        <button 
                          type="button" onClick={() => handleQtyChange(item.size, -1)}
                          className="w-10 h-10 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90"
                        >−</button>
                        <input 
                          type="number" min="0" step="1" inputMode="numeric"
                          aria-label={`Number of ${item.size} Polaad Fe 550D rods`}
                          value={item.rods === 0 ? "" : item.rods} onChange={(e) => handleInputChange(item.size, e.target.value)}
                          placeholder="0" className="w-16 text-center bg-transparent focus:outline-none font-black text-slate-900 dark:text-white"
                        />
                        <button 
                          type="button" onClick={() => handleQtyChange(item.size, 1)}
                          className="w-10 h-10 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90"
                        >+</button>
                      </div>
                    </div>

                    {/* METRIC GRIDS */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-950">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Weight</p>
                        <p className="mt-1 font-black text-orange-500">{item.totalWeight.toFixed(1)} kg</p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-950">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Est. Amount</p>
                        <p className="mt-1 font-black text-slate-900 dark:text-white">₹{Math.round(item.totalAmount).toLocaleString("en-IN")}</p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY SIDEBAR DESK */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-slate-900 border border-slate-800 text-white rounded-[32px] p-6 shadow-2xl">
                  <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-orange-400">
                    <FaCalculator /> Order Summary
                  </h3>

                  <div className="space-y-2 border-b border-slate-800 pb-4 mb-5 text-sm text-slate-400">
                    <div className="flex justify-between">
                      <span>Calculated Weight:</span>
                      <span className="font-bold text-white">
                        {totals.totalWeight >= 1000 ? `${(totals.totalWeight / 1000).toFixed(2)} Ton` : `${totals.totalWeight.toFixed(1)} kg`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Material Amount:</span>
                      <span className="font-bold text-amber-400 text-lg">₹{Math.round(totals.totalAmount).toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Delivery Method</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          type="button" onClick={() => setDeliveryMode("delivery")}
                          className={`p-3 rounded-2xl border text-sm font-bold transition ${deliveryMode === "delivery" ? "bg-orange-500 border-orange-500 text-black" : "border-slate-800 bg-slate-950 text-slate-400"}`}
                        >Home Delivery</button>
                        <button 
                          type="button" onClick={() => setDeliveryMode("pickup")}
                          className={`p-3 rounded-2xl border text-sm font-bold transition ${deliveryMode === "pickup" ? "bg-orange-500 border-orange-500 text-black" : "border-slate-800 bg-slate-950 text-slate-400"}`}
                        >Self-Pickup</button>
                      </div>
                    </div>

                    {deliveryMode === "delivery" && (
                      <div>
                        <label className="block text-xs text-slate-400 mb-2 font-medium">Enter Delivery Village / Location Area</label>
                        <input 
                          type="text" value={customerLocation} onChange={(e) => setCustomerLocation(e.target.value)}
                          placeholder="e.g., Bassi Local, Begun Side" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-white font-bold"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs leading-relaxed text-slate-400">
                    Material prices may change daily. Final rate, stock availability and delivery charge will be confirmed on WhatsApp.
                  </div>

                  {/* Fix 1 & 2: Dynamic validation shifting to totalWeight matrix */}
                  <button
                    type="button"
                    onClick={handleWhatsAppOrderSubmit}
                    disabled={totals.totalWeight === 0 || (deliveryMode === "delivery" && !hasValidLocation)}
                    className={`w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                      totals.totalWeight > 0 && (deliveryMode === "pickup" || hasValidLocation)
                        ? "bg-green-500 hover:bg-green-600 text-white shadow-xl"
                        : "bg-slate-800 text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    <FaWhatsapp size={24} /> Get Final Quote on WhatsApp
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* MANUFACTURING FLOW TIMELINE STAGES */}
          <section className="mt-24 mb-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[40px] p-8 md:p-12 shadow-md">
            <div className="text-left mb-12">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs px-3 py-1 bg-orange-500/10 rounded-md">Brochure Factory Specs</span>
              <h2 className="text-3xl font-black mt-4">Raw Material Se Dispatch Tak Quality Monitoring</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Polaad brochure ke anusaar manufacturing ke multiple stages par quality controls, heat treatment aur testing follow kiye jaate hain.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {["Raw Material Check", "Spectro Testing", "Continuous Casting", "Rolling Process", "Quenching Process", "Online Quality Inspection"].map((step, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-orange-500 font-black text-lg mb-1">0{idx + 1}</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{step}</div>
                </div>
              ))}
            </div>
          </section>

        </main>

        <FinalCTA />
      </div>
    </>
  );
};

export default Sariya;