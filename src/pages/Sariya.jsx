import React, { useMemo } from "react";
import PageSeo from "../components/PageSeo";
import { FiTruck, FiShield, FiFileText, FiAward } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa";
import {
  getProducts,
  latestUpdate,
  formatDate,
  formatRupees,
  hasPrice,
  gstLabel,
  isOrderable,
  AVAILABILITY_LABELS,
} from "../data/catalog";

import SariyaHero from "../components/sariya/SariyaHero";
import WhyPolaad from "../components/sariya/WhyPolaad";
import FinalCTA from "../components/sariya/FinalCTA";
import polaadCertificate from "../assets/polaad-certificate.webp";
import { GST_NOTE, PROPRIETOR } from "../config/site";
import { useEnquiry } from "../context/enquiryContext";
import EnquirySummaryCard from "../components/EnquirySummaryCard";

const SARIYA_ITEMS = getProducts("sariya");
const RATES_UPDATED = latestUpdate(SARIYA_ITEMS);

const BADGE_STYLES = {
  in_stock: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  out_of_stock: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  ask: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
};

const Sariya = () => {
  const { quantities, setQty, changeQty } = useEnquiry();

  const handleQtyChange = (id, delta) => changeQty(id, delta);
  const handleInputChange = (id, val) => setQty(id, val === "" ? 0 : val);

  const calculationGrid = useMemo(() => {
    return SARIYA_ITEMS.map((item) => {
      const rods = isOrderable(item) ? quantities[item.id] || 0 : 0;
      const totalWeight = rods * item.unitWeightKg;
      const totalAmount = hasPrice(item) ? totalWeight * item.price : 0;
      return { ...item, rods, totalWeight, totalAmount };
    });
  }, [quantities]);

  const totals = useMemo(() => {
    const totalWeight = calculationGrid.reduce((acc, item) => acc + item.totalWeight, 0);
    const totalAmount = calculationGrid.reduce((acc, item) => acc + item.totalAmount, 0);
    const hasUnpriced = calculationGrid.some((item) => item.rods > 0 && !hasPrice(item));
    const gstExtra = calculationGrid.some((item) => item.rods > 0 && hasPrice(item) && item.gstIncluded === false);
    return { totalWeight, totalAmount, hasUnpriced, gstExtra };
  }, [calculationGrid]);

  return (
    <>
      <PageSeo
        title="Polaad QST Fe 550D TMT Dealer in Bassi | Laxminath Iron"
        description="Polaad QST Fe 550D TMT bars, 8–25 mm, from an authorised dealer in Bassi, Chittorgarh. Indicative daily rates (+ GST), weight calculator and delivery."
        path="/sariya"
        image="/og/sariya.jpg"
        imageAlt="Bundles of Polaad TMT sariya bars"
        keywords="Polaad TMT dealer Bassi, sariya rate Chittorgarh, Polaad QST Fe 550D, TMT sariya Bassi, 12mm sariya price, सरिया रेट बस्सी, पोलाद सरिया, सरिया का भाव चित्तौड़गढ़"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-clip text-slate-900 dark:text-white transition-colors duration-300">
        <SariyaHero />

        {/* TRUST STRIP */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiAward className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Authorised Polaad Dealer</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Certificate of authorisation shown below.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiShield className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Polaad QST Fe 550D</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                TMT bars in 8 mm to 25 mm for RCC construction.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiFileText className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Clear Billing</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Bill shows quantity, weight and rate. {GST_NOTE}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiTruck className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Delivery</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Bassi, Chittorgarh and nearby regions. Transport charges apply.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          {/* DEALER CERTIFICATE */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[36px] p-8 md:p-12 shadow-xl">
            <img
              src={polaadCertificate}
              alt="Polaad certificate of authorisation appointing Prakash Somani, Bassi as authorised dealer"
              loading="lazy"
              width="983"
              height="819"
              className="h-auto max-h-[520px] w-full object-contain"
            />

            <div className="space-y-6">
              <span className="rounded-md bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-500">
                Authorised Polaad Dealer
              </span>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Genuine Polaad QST Fe 550D TMT Sariya
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                Laxminath Iron (proprietor {PROPRIETOR}) is an authorised Polaad dealer in Bassi, Chittorgarh, appointed by Bhagyalaxmi Rolling Mill Pvt. Ltd. We supply Polaad QST Fe 550D bars with clear weight details on the bill. {GST_NOTE}
              </p>
            </div>
          </section>

          {/* DYNAMIC BENEFITS SECTION */}
          <WhyPolaad />

          {/* CALCULATOR INTERFACE */}
          <section className="mt-24 mb-24">
            <div className="mb-10 text-left">
              <h2 className="text-3xl font-black flex items-center gap-3">
                <FaCalculator className="text-orange-500" /> Polaad QST Fe 550D Weight & Rate Calculator
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Enter the number of 12 m bars per size to see the nominal weight and an indicative amount. Actual weight is confirmed at billing; the final rate is confirmed on WhatsApp.
              </p>
              {RATES_UPDATED && (
                <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                  Indicative rates last updated: {formatDate(RATES_UPDATED)}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
              {/* SIZES LIST */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {calculationGrid.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight">{item.variant} TMT Bar</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {hasPrice(item) ? `Indicative: ₹${item.price}/kg ${gstLabel(item)}`.trim() : "Price on request"}
                        </p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-xl border ${BADGE_STYLES[item.availability]}`}>
                        {AVAILABILITY_LABELS[item.availability]}
                      </span>
                    </div>

                    <div className="space-y-1.5 border-y border-slate-100 dark:border-slate-800 py-3 my-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <div className="flex justify-between">
                        <span>Standard Length:</span>
                        <span className="text-slate-900 dark:text-white font-bold">12 Metres</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nominal Bar Weight:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{item.unitWeightKg} kg</span>
                      </div>
                    </div>

                    {/* COUNTER */}
                    <div className="flex items-center justify-between gap-4 mt-4">
                      <div className="flex items-center bg-slate-100 dark:bg-slate-950 rounded-2xl p-1 border border-slate-200 dark:border-slate-800/80">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, -1)}
                          disabled={!isOrderable(item)}
                          aria-label={`Decrease quantity for ${item.variant}`}
                          className="w-11 h-11 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="0"
                          step="1"
                          inputMode="numeric"
                          aria-label={`Number of ${item.variant} Polaad QST Fe 550D bars`}
                          disabled={!isOrderable(item)}
                          value={item.rods === 0 ? "" : item.rods}
                          onChange={(e) => handleInputChange(item.id, e.target.value)}
                          placeholder="0"
                          className="w-16 text-center bg-transparent focus:outline-none font-black text-slate-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => handleQtyChange(item.id, 1)}
                          disabled={!isOrderable(item)}
                          aria-label={`Increase quantity for ${item.variant}`}
                          className="w-11 h-11 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* METRIC GRID */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-950">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Nominal Weight</p>
                        <p className="mt-1 font-black text-orange-500">{item.totalWeight.toFixed(1)} kg</p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-950">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Indicative Amount</p>
                        <p className="mt-1 font-black text-slate-900 dark:text-white">
                          {hasPrice(item) ? formatRupees(item.totalAmount) : "On request"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY SIDEBAR */}
              <EnquirySummaryCard
                hasUnpriced={totals.hasUnpriced}
                ratesUpdated={RATES_UPDATED}
                unpricedText="Some selected sizes are priced on request and are not included in the amount."
              >
                <div className="flex justify-between">
                  <span>Sariya nominal weight:</span>
                  <span className="font-bold text-white">
                    {totals.totalWeight >= 1000
                      ? `${(totals.totalWeight / 1000).toFixed(2)} Ton`
                      : `${totals.totalWeight.toFixed(1)} kg`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Indicative amount:</span>
                  <span className="text-lg font-bold text-amber-400">
                    {totals.hasUnpriced && totals.totalAmount === 0 ? "On request" : formatRupees(totals.totalAmount)}
                    {totals.totalAmount > 0 && totals.gstExtra && <span className="ml-1 text-xs text-slate-400">+ GST</span>}
                  </span>
                </div>
              </EnquirySummaryCard>
            </div>
          </section>

        </div>

        <FinalCTA
          title="Ready to Order Polaad TMT Sariya?"
          description="Contact Laxminath Iron for today's Polaad QST Fe 550D rates, availability and delivery details. GST invoice available on request."
        />
      </div>
    </>
  );
};

export default Sariya;