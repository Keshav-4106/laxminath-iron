import React, { useState, useMemo } from "react";
import { FaWhatsapp, FaTruck, FaStore, FaCalculator, FaExclamationTriangle } from "react-icons/fa";

const SmartCheckoutCard = ({ totalWeight, rawMaterialTotal, whatsappTemplateTrigger }) => {
  // Logistics states
  const [deliveryMode, setDeliveryMode] = useState("delivery"); // 'delivery' or 'pickup'
  const [distance, setDistance] = useState(""); // One-way distance in KM

  // Real-time Business Parameters
  const CNG_PRICE = 85;      // CNG rate per kg
  const DIESEL_PRICE = 90;    // Diesel rate per litre

  // Auto-Select and Fuel Cost Calculation (Round Trip Logic)
  const logistics = useMemo(() => {
    if (deliveryMode === "pickup") {
      return { freightCharge: 0, vehicleUsed: "Customer Vehicle", isValid: true, error: "" };
    }

    // Input checking
    if (distance === "" || distance <= 0) {
      return { freightCharge: 0, vehicleUsed: "Not Selected", isValid: false, error: "Enter valid distance for delivery fare." };
    }

    const roundTripDistance = distance * 2; // Aana + Jaana code trigger

    // 1. Overload Condition Check
    if (totalWeight > 10000) {
      return {
        freightCharge: 0,
        vehicleUsed: "NONE",
        isValid: false,
        error: `⚠️ Overloaded! Total weight (${(totalWeight / 1000).toFixed(1)} Ton) exceeds maximum Tractor capacity (10,000 kg). Please split the order.`,
      };
    }

    // 2. CNG Auto Selection (Weight up to 2500 kg)
    if (totalWeight <= 2500) {
      const autoMileage = 19; // 19km per kg average
      const autoFuelCost = (roundTripDistance / autoMileage) * CNG_PRICE;
      const autoBaseCharge = 150; // Driver allowance & maintenance profit
      
      return {
        freightCharge: Math.round(autoFuelCost + autoBaseCharge),
        vehicleUsed: "Tata CNG Auto",
        isValid: true,
        error: "",
      };
    } 
    
    // 3. Heavy Tractor Selection (Weight 2501 kg to 10000 kg)
    else {
      const tractorMileage = 5; // 5km per litre diesel average
      const tractorFuelCost = (roundTripDistance / tractorMileage) * DIESEL_PRICE;
      const tractorBaseCharge = 300; // Heavy loading driver allowance
      
      return {
        freightCharge: Math.round(tractorFuelCost + tractorBaseCharge),
        vehicleUsed: "Tractor",
        isValid: true,
        error: `💡 Load is ${(totalWeight / 1000).toFixed(1)} Ton. Heavy weight requires Tractor delivery.`,
      };
    }
  }, [deliveryMode, distance, totalWeight]);

  const finalGrandTotal = rawMaterialTotal + logistics.freightCharge;

  const handleCheckoutClick = () => {
    if (!logistics.isValid && deliveryMode === "delivery") return;
    
    // Final data bundle object passed back to page wrapper
    whatsappTemplateTrigger({
      deliveryMode: deliveryMode === "pickup" ? "Self-Pickup" : "Home Delivery",
      vehicleUsed: logistics.vehicleUsed,
      oneWayDistance: distance || 0,
      freightCharge: logistics.freightCharge,
      grandTotal: finalGrandTotal
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 text-white rounded-[32px] p-6 shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-orange-400">
        <FaCalculator /> Smart Logistics & Checkout
      </h3>

      {/* Material Summary Parameters */}
      <div className="space-y-2 border-b border-slate-800 pb-4 mb-4 text-sm text-slate-400">
        <div className="flex justify-between">
          <span>Total Weight:</span>
          <span className="font-bold text-white">
            {totalWeight >= 1000 ? `${(totalWeight / 1000).toFixed(2)} Ton` : `${totalWeight.toFixed(1)} kg`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Material Cost:</span>
          <span className="font-bold text-white">₹{rawMaterialTotal.toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* DELIVERY MODE INPUTS */}
      <div className="mb-5">
        <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
          Delivery Mode
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setDeliveryMode("delivery")}
            className={`p-3 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition ${
              deliveryMode === "delivery"
                ? "bg-orange-500 border-orange-500 text-black"
                : "border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
            }`}
          >
            <FaTruck size={16} /> Deliver Material
          </button>
          <button
            type="button"
            onClick={() => setDeliveryMode("pickup")}
            className={`p-3 rounded-2xl border text-sm font-bold flex items-center justify-center gap-2 transition ${
              deliveryMode === "pickup"
                ? "bg-orange-500 border-orange-500 text-black"
                : "border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
            }`}
          >
            <FaStore size={16} /> Self-Pickup
          </button>
        </div>
      </div>

      {/* DYNAMIC LOGISTICS INPUTS */}
      {deliveryMode === "delivery" && (
        <div className="space-y-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-4 transition-all duration-300">
          <div>
            <label className="block text-xs text-slate-400 mb-2 font-medium">
              Distance from Bassi Shop (One-Way in KM)
            </label>
            <input
              type="number"
              min="0"
              value={distance}
              onChange={(e) => setDistance(e.target.value === "" ? "" : Math.max(0, parseFloat(e.target.value)))}
              placeholder="Enter distance in km"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 text-white placeholder:text-slate-600 font-bold"
            />
            {distance > 0 && (
              <p className="text-xs text-slate-500 mt-1">
                *Round trip fuel computed for {distance * 2} KM via {logistics.vehicleUsed}.
              </p>
            )}
          </div>

          {/* Warnings & Notices */}
          {logistics.error ? (
            <div className="text-xs text-red-400 font-medium bg-red-500/10 p-3 rounded-xl border border-red-500/20 flex items-start gap-2">
              <FaExclamationTriangle className="shrink-0 mt-0.5" />
              <span>{logistics.error}</span>
            </div>
          ) : totalWeight > 2500 && (
            <div className="text-xs text-amber-400 font-medium bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 flex items-start gap-2">
              <FaExclamationTriangle className="shrink-0 mt-0.5" />
              <span>{logistics.error || `Weight is >2500kg. Automatically upgraded to Tractor delivery.`}</span>
            </div>
          )}
        </div>
      )}

      {/* PRICING BLOCK GRID */}
      <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Selected Vehicle:</span>
          <span className="font-bold text-white">{deliveryMode === "pickup" ? "None (Self)" : logistics.vehicleUsed}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">Delivery Freight (Bhada):</span>
          <span className="font-bold text-emerald-400">
            {deliveryMode === "pickup" ? "₹0 (FREE)" : logistics.freightCharge > 0 ? `₹${logistics.freightCharge}` : "₹0"}
          </span>
        </div>
        <div className="h-px bg-slate-800 my-1"></div>
        <div className="flex justify-between items-baseline">
          <span className="text-sm text-slate-400">Grand Total:</span>
          <span className="text-3xl font-black text-amber-400">₹{finalGrandTotal.toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* WHATSAPP ACTION */}
      <button
        type="button"
        onClick={handleCheckoutClick}
        disabled={rawMaterialTotal === 0 || (deliveryMode === "delivery" && (!distance || !logistics.isValid))}
        className={`w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
          rawMaterialTotal > 0 && (deliveryMode === "pickup" || (distance && logistics.isValid))
            ? "bg-green-500 hover:bg-green-600 text-white hover:scale-[1.02] shadow-xl shadow-green-500/20"
            : "bg-slate-800 text-slate-600 cursor-not-allowed"
        }`}
      >
        <FaWhatsapp size={24} /> Send Inquiry via WhatsApp
      </button>
    </div>
  );
};

export default SmartCheckoutCard;