import React, { useMemo, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import { FaWhatsapp } from "react-icons/fa";
import { FiTrash2, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { useEnquiry } from "../context/enquiryContext";
import { buildMessage, validateDetails, CATEGORY_TITLES, MAX_LOCATION, MAX_NAME, MAX_QTY } from "../lib/enquiry";
import { formatRupees, gstLabel } from "../data/catalog";
import { whatsappUrl, PRICE_DISCLAIMER, DELIVERY_NOTE, PHONE_DISPLAY } from "../config/site";

const unitText = (unit, n) => (n === 1 ? unit : `${unit}s`);

// false in prerendered HTML and during hydration, true once running in the browser.
const noopSubscribe = () => () => {};
const useIsClient = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

const Enquiry = () => {
  const { lines, summary, deliveryMode, location, name, setQty, changeQty, setDetails, clearList } = useEnquiry();
  const [opened, setOpened] = useState(false);
  const isClient = useIsClient();

  const errors = useMemo(() => {
    const list = validateDetails({ deliveryMode, location, name });
    if (lines.length === 0) list.unshift("Add at least one product to your list.");
    return list;
  }, [lines.length, deliveryMode, location, name]);

  const message = useMemo(
    () => (lines.length ? buildMessage(lines, { deliveryMode, location, name }) : ""),
    [lines, deliveryMode, location, name]
  );
  const canSend = errors.length === 0;

  return (
    <>
      <PageSeo title="Review Your Enquiry | Laxminath Iron" path="/enquiry" noindex />

      <div className="min-h-screen bg-slate-50 px-5 pb-24 pt-28 text-slate-900 dark:bg-slate-950 dark:text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Enquiry list</span>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Review your enquiry</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
            Check quantities, add delivery details and see the exact message before WhatsApp opens. Nothing is sent until you press Send in WhatsApp.
          </p>

          {!isClient ? (
            <p className="mt-10 text-slate-500 dark:text-slate-400">Loading your list…</p>
          ) : lines.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-black">Your list is empty</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Choose sizes and quantities on the product pages, then come back here.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/sariya" className="rounded-2xl bg-orange-500 px-6 py-3.5 font-black text-black transition hover:bg-orange-600">Polaad TMT Sariya</Link>
                <Link to="/cement" className="rounded-2xl bg-slate-900 px-6 py-3.5 font-black text-white transition hover:bg-slate-800 dark:bg-slate-800">MP Birla Cement</Link>
              </div>
            </div>
          ) : (
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_420px]">
              {/* ITEMS */}
              <div className="space-y-6">
                {["sariya", "cement"].map((category) => {
                  const group = summary.byCategory[category];
                  if (!group) return null;
                  return (
                    <section key={category} aria-labelledby={`group-${category}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <h2 id={`group-${category}`} className="text-xl font-black">{CATEGORY_TITLES[category]}</h2>
                        <Link to={`/${category}`} className="text-sm font-bold text-orange-600 hover:underline dark:text-orange-400">
                          Add more
                        </Link>
                      </div>
                      <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                        {group.lines.map(({ product: p, qty, weightKg, amount }) => {
                          const label = category === "sariya" ? `${p.variant} TMT bar` : p.name;
                          return (
                            <li key={p.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="font-black">{label}</p>
                                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                                  {typeof p.price === "number"
                                    ? `₹${p.price.toLocaleString("en-IN")}/${p.priceBasis === "kg" ? "kg" : p.unit} ${gstLabel(p)}`
                                    : "Price on request"}
                                  {weightKg !== null && ` · ≈${weightKg.toFixed(1)} kg`}
                                </p>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-950">
                                  <button type="button" onClick={() => changeQty(p.id, -1)} aria-label={`Decrease ${label}`} className="flex h-11 w-11 items-center justify-center rounded-xl font-bold transition hover:bg-slate-200 dark:hover:bg-slate-900">−</button>
                                  <input
                                    type="number"
                                    min="0"
                                    max={MAX_QTY}
                                    inputMode="numeric"
                                    aria-label={`${label} quantity in ${p.unit}s`}
                                    value={qty}
                                    onChange={(e) => e.target.value !== "" && setQty(p.id, e.target.value)}
                                    className="w-16 bg-transparent text-center font-black focus:outline-none"
                                  />
                                  <button type="button" onClick={() => changeQty(p.id, 1)} aria-label={`Increase ${label}`} className="flex h-11 w-11 items-center justify-center rounded-xl font-bold transition hover:bg-slate-200 dark:hover:bg-slate-900">+</button>
                                </div>
                                <span className="w-14 text-sm text-slate-500 dark:text-slate-400">{unitText(p.unit, qty)}</span>
                                <span className="w-24 text-right font-black">{amount !== null ? formatRupees(amount) : "On request"}</span>
                                <button type="button" onClick={() => setQty(p.id, 0)} aria-label={`Remove ${label}`} className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-500 transition hover:bg-red-500/10 hover:text-red-600">
                                  <FiTrash2 />
                                </button>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      {category === "sariya" && group.weightKg > 0 && (
                        <p className="mt-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                          Nominal weight: ≈{group.weightKg.toFixed(1)} kg{group.weightKg >= 1000 ? ` (${(group.weightKg / 1000).toFixed(2)} ton)` : ""}
                        </p>
                      )}
                    </section>
                  );
                })}

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Indicative total</p>
                    <p className="mt-1 text-3xl font-black text-orange-600 dark:text-orange-400">
                      {summary.amount > 0 ? formatRupees(summary.amount) : "On request"}
                      {summary.amount > 0 && summary.allGstExtra && <span className="ml-2 text-base font-bold text-slate-500 dark:text-slate-400">+ GST</span>}
                    </p>
                    {summary.unpricedCount > 0 && summary.amount > 0 && (
                      <p className="mt-1 text-xs font-bold text-amber-700 dark:text-amber-400">Priced items only. {summary.unpricedCount} item(s) priced on request.</p>
                    )}
                  </div>
                  <button type="button" onClick={() => { clearList(); setOpened(false); }} className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold transition hover:border-red-500 hover:text-red-600 dark:border-slate-700">
                    Clear list
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{PRICE_DISCLAIMER}</p>
              </div>

              {/* DETAILS + MESSAGE */}
              <aside className="space-y-6 lg:sticky lg:top-24">
                <section aria-labelledby="details-heading" className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl">
                  <h2 id="details-heading" className="text-xl font-black text-orange-400">Delivery details</h2>

                  <div className="mt-4 grid grid-cols-2 gap-3" role="group" aria-label="Delivery method">
                    {[["delivery", "Home Delivery"], ["pickup", "Self-Pickup"]].map(([mode, text]) => (
                      <button
                        key={mode}
                        type="button"
                        aria-pressed={deliveryMode === mode}
                        onClick={() => setDetails({ deliveryMode: mode })}
                        className={`rounded-2xl border p-3 text-sm font-bold transition ${deliveryMode === mode ? "border-orange-500 bg-orange-500 text-black" : "border-slate-700 bg-slate-950 text-slate-300"}`}
                      >
                        {text}
                      </button>
                    ))}
                  </div>

                  {deliveryMode === "delivery" && (
                    <div className="mt-4">
                      <label htmlFor="enquiry-location" className="mb-2 block text-xs font-bold text-slate-300">Delivery village / area (required)</label>
                      <input
                        id="enquiry-location"
                        type="text"
                        maxLength={MAX_LOCATION}
                        value={location}
                        onChange={(e) => setDetails({ location: e.target.value })}
                        placeholder="e.g., Bassi Local, Begun Side"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-bold text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  )}

                  <div className="mt-4">
                    <label htmlFor="enquiry-name" className="mb-2 block text-xs font-bold text-slate-300">Your name (optional)</label>
                    <input
                      id="enquiry-name"
                      type="text"
                      maxLength={MAX_NAME}
                      value={name}
                      onChange={(e) => setDetails({ name: e.target.value })}
                      placeholder="e.g., Ramesh Kumar"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-bold text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-400">{DELIVERY_NOTE}</p>
                </section>

                <section aria-labelledby="preview-heading" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <h2 id="preview-heading" className="text-xl font-black">Message preview</h2>
                  <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-slate-100 p-4 font-sans text-sm leading-relaxed text-slate-800 dark:bg-slate-950 dark:text-slate-200">{message}</pre>

                  {errors.length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm font-bold text-red-600 dark:text-red-400" aria-live="polite">
                      {errors.map((e) => <li key={e}>{e}</li>)}
                    </ul>
                  )}

                  {canSend ? (
                    <a
                      href={whatsappUrl(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpened(true)}
                      className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 text-lg font-black text-white shadow-xl transition hover:bg-green-700"
                    >
                      <FaWhatsapp size={24} /> Open WhatsApp
                    </a>
                  ) : (
                    <button type="button" disabled className="mt-5 flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl bg-slate-200 py-4 text-lg font-black text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      <FaWhatsapp size={24} /> Open WhatsApp
                    </button>
                  )}

                  {opened && (
                    <div className="mt-4 rounded-2xl border border-green-600/30 bg-green-500/10 p-4 text-sm" role="status">
                      <p className="flex items-center gap-2 font-black text-green-700 dark:text-green-400"><FiCheckCircle /> WhatsApp should now be open</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-300">
                        Your enquiry reaches us only after you press Send in WhatsApp. We will reply with the confirmed rate. If WhatsApp did not open, call {PHONE_DISPLAY}.
                      </p>
                    </div>
                  )}
                </section>

                <Link to="/sariya" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-600 dark:text-slate-400">
                  <FiArrowLeft /> Continue adding products
                </Link>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Enquiry;
