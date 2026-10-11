import React, { useMemo } from "react";
import PageSeo from "../components/PageSeo";
import { FiTruck, FiShield, FiAward } from "react-icons/fi";
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

import CementHero from "../components/cement/CementHero"; 
import FinalCTA from "../components/sariya/FinalCTA";
import birlaCertificate from "../assets/mp-birla-certificate.webp";
import { GST_NOTE, DELIVERY_NOTE, LABOUR_NOTE } from "../config/site";
import { useEnquiry } from "../context/enquiryContext";
import EnquirySummaryCard from "../components/EnquirySummaryCard";

const CEMENT_ITEMS = getProducts("cement");
const RATES_UPDATED = latestUpdate(CEMENT_ITEMS);

const BADGE_STYLES = {
  in_stock: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  out_of_stock: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  ask: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
};

const unitLabel = (unit, n) => {
  const word = unit.charAt(0).toUpperCase() + unit.slice(1);
  return n === 1 ? word : `${word}s`;
};

const Cement = () => {
  const { quantities, setQty, changeQty } = useEnquiry();

  const handleQuantityChange = (id, delta) => changeQty(id, delta);
  const handleInputChange = (id, val) => setQty(id, val === "" ? 0 : val);

  const calculationGrid = useMemo(() => {
    const items = CEMENT_ITEMS.map((product) => {
      const qty = isOrderable(product) ? quantities[product.id] || 0 : 0;
      return {
        ...product,
        qty,
        itemTotal: hasPrice(product) ? qty * product.price : 0,
      };
    });

    const totals = items.reduce(
      (acc, product) => ({
        totalBagsCount: acc.totalBagsCount + (product.unit === "bag" ? product.qty : 0),
        totalBucketsCount: acc.totalBucketsCount + (product.unit === "bucket" ? product.qty : 0),
        materialsCostTotal: acc.materialsCostTotal + product.itemTotal,
        hasUnpriced: acc.hasUnpriced || (product.qty > 0 && !hasPrice(product)),
        gstExtra: acc.gstExtra || (product.qty > 0 && hasPrice(product) && product.gstIncluded === false),
      }),
      { totalBagsCount: 0, totalBucketsCount: 0, materialsCostTotal: 0, hasUnpriced: false, gstExtra: false }
    );

    return { items, ...totals };
  }, [quantities]);

  return (
    <>
      <PageSeo
        title="MP Birla Cement Authorised Stockist in Bassi | Laxminath Iron"
        description="MP Birla Chetak PPC, Perfect Plus and Perfect Plus IWP from an authorised stockist in Bassi, Chittorgarh. Today's bag rates, enquiry on WhatsApp and delivery."
        path="/cement"
        image="/og/cement.jpg"
        imageAlt="Stacked MP Birla cement bags"
        keywords="MP Birla Cement Bassi, Chetak cement price, Perfect Plus cement Chittorgarh, cement rate Bassi, सीमेंट रेट बस्सी, एमपी बिरला सीमेंट, चेतक सीमेंट"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-clip text-slate-900 dark:text-white transition-colors duration-300">
        
        <CementHero />

        {/* TRUST STRIP */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 relative z-20 -mt-16">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiShield className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Check the Bag</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">You can check the ISI mark, net quantity and packing date printed on every bag.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiAward className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Authorised Stockist</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">MP Birla Cement certificate issued to Prakash Somani, Bassi.</p>
              <img
                src={birlaCertificate}
                alt="MP Birla Cement certificate naming Prakash Somani, Bassi, District Chittorgarh as authorised stockist"
                loading="lazy"
                width="1000"
                height="675"
                className="h-auto max-h-64 w-full rounded-xl object-contain"
              />
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-6 shadow-xl border border-slate-200/80 dark:border-slate-800">
              <FiTruck className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-1">Delivery</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{DELIVERY_NOTE} {LABOUR_NOTE}</p>
            </div>
          </section>

          {/* HEADING BLOCK */}
          <div className="mb-10 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-md">
              Available Products
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              MP Birla Cement Products Available at Our Shop
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Select the quantity you need to see the amount. Rates can change daily, so the final rate, availability and transport charges are confirmed on WhatsApp.
            </p>
            {RATES_UPDATED && (
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                Rates last updated: {formatDate(RATES_UPDATED)}
              </p>
            )}
          </div>

          {/* TWO COLUMN GRID SYSTEM */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
            
            {/* LEFT SIDE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculationGrid.items.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {product.imageUrl && (
                      <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/40">
                        <img
                          src={product.imageUrl}
                          width={product.imageWidth}
                          height={product.imageHeight}
                          alt={`${product.name} ${product.unitLabel}`}
                          loading="lazy"
                          className="h-56 w-full object-contain p-4"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-black tracking-tight">{product.name}</h3>
                        {hasPrice(product) ? (
                          <p className="mt-1.5 text-lg font-black text-orange-500">
                            {formatRupees(product.price)}
                            <span className="ml-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                              {`/ ${product.unitLabel} ${gstLabel(product)}`.trim()}
                            </span>
                          </p>
                        ) : (
                          <>
                            <p className="mt-1.5 text-lg font-black text-orange-500">Price on request</p>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                              Add it to your enquiry and we will share the rate on WhatsApp.
                            </p>
                          </>
                        )}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-xl border ${BADGE_STYLES[product.availability]}`}>
                        {AVAILABILITY_LABELS[product.availability]}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/60 my-4">
                      🎯 <span className="font-bold">Guidelines:</span> {product.bestFor}
                    </p>

                    <div className="space-y-1.5 mb-4 text-xs">
                      <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Specifications</p>
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          <span className="w-1 h-1 bg-orange-500 rounded-full shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* COUNTERS WITH CLEAN HANDLERS */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center bg-slate-100 dark:bg-slate-950 rounded-2xl p-1 border border-slate-200 dark:border-slate-800/80">
                        <button 
                          type="button" onClick={() => handleQuantityChange(product.id, -1)}
                          disabled={!isOrderable(product)}
                          aria-label={`Decrease quantity for ${product.name}`}
                          className="w-11 h-11 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        >−</button>
                        <input 
                          type="number" min="0" step="1" inputMode="numeric"
                          aria-label={`Quantity for ${product.name}`}
                          disabled={!isOrderable(product)}
                          value={product.qty === 0 ? "" : product.qty} onChange={(e) => handleInputChange(product.id, e.target.value)}
                          placeholder="0" className="w-14 text-center bg-transparent focus:outline-none font-black text-slate-900 dark:text-white"
                        />
                        <button 
                          type="button" onClick={() => handleQuantityChange(product.id, 1)}
                          disabled={!isOrderable(product)}
                          aria-label={`Increase quantity for ${product.name}`}
                          className="w-11 h-11 rounded-xl font-bold flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-900 transition active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
                        >+</button>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Amount</p>
                        <p className="text-lg font-black text-slate-900 dark:text-white">{hasPrice(product) ? formatRupees(product.itemTotal) : "On request"}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* ORDER SUMMARY SIDEBAR */}
            <EnquirySummaryCard
              hasUnpriced={calculationGrid.hasUnpriced}
              ratesUpdated={RATES_UPDATED}
              unpricedText="Price-on-request items are not included in the amount. Their rate will be shared on WhatsApp."
            >
              {calculationGrid.totalBagsCount > 0 && (
                <div className="flex justify-between">
                  <span>Total cement bags:</span>
                  <span className="font-bold text-white">{calculationGrid.totalBagsCount} {unitLabel("bag", calculationGrid.totalBagsCount)}</span>
                </div>
              )}
              {calculationGrid.totalBucketsCount > 0 && (
                <div className="flex justify-between">
                  <span>Total buckets:</span>
                  <span className="font-bold text-white">{calculationGrid.totalBucketsCount} {unitLabel("bucket", calculationGrid.totalBucketsCount)}</span>
                </div>
              )}
              <div className="flex items-baseline justify-between pt-1">
                <span>Amount:</span>
                <span className="text-2xl font-black text-amber-400">
                  {calculationGrid.hasUnpriced && calculationGrid.materialsCostTotal === 0 ? "On request" : formatRupees(calculationGrid.materialsCostTotal)}
                  {calculationGrid.materialsCostTotal > 0 && calculationGrid.gstExtra && <span className="ml-1 text-xs text-slate-400">+ GST</span>}
                </span>
              </div>
              <p className="pt-2 text-xs">{LABOUR_NOTE} {GST_NOTE}</p>
            </EnquirySummaryCard>

          </div>
        </div>

        <FinalCTA 
          title="Ready to Order MP Birla Cement?"
          description="Contact Laxminath Iron for today's MP Birla Cement rates, availability and delivery details. GST invoice available on request."
        />
      </div>
    </>
  );
};

export default Cement;