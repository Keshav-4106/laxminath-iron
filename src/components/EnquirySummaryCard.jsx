import React from "react";
import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useEnquiry } from "../context/enquiryContext";
import { formatDate } from "../data/catalog";
import { PRICE_DISCLAIMER, DELIVERY_NOTE } from "../config/site";

// Sidebar on the Sariya and Cement pages: this page's totals (children) + the shared list button.
const EnquirySummaryCard = ({ children, hasUnpriced, ratesUpdated, unpricedText }) => {
  const { summary } = useEnquiry();
  const count = summary.count;

  return (
    <div className="lg:sticky lg:top-24">
      <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl">
        <h3 className="mb-4 flex items-center gap-2 text-2xl font-black text-orange-400">
          <FaCalculator /> Order Summary
        </h3>

        <div className="mb-5 space-y-2 border-b border-slate-800 pb-4 text-sm text-slate-400">{children}</div>

        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs leading-relaxed text-slate-400">
          {hasUnpriced && <p className="mb-2.5 font-bold text-amber-400">{unpricedText}</p>}
          <p>{PRICE_DISCLAIMER}</p>
          {ratesUpdated && <p className="mt-1.5">Rates last updated: {formatDate(ratesUpdated)}.</p>}
          <div className="my-2.5 h-px bg-slate-800/80" />
          <p>{DELIVERY_NOTE}</p>
        </div>

        {count > 0 ? (
          <>
            <p className="mb-3 text-center text-sm font-bold text-slate-300">
              Your enquiry list has {count} {count === 1 ? "item" : "items"} (sariya and cement together).
            </p>
            <Link
              to="/enquiry"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 text-lg font-black text-white shadow-xl transition hover:bg-green-700"
            >
              Review Enquiry <FiArrowRight />
            </Link>
          </>
        ) : (
          <p className="rounded-2xl bg-slate-800 py-4 text-center text-sm font-bold text-slate-300">
            Add a quantity to start your enquiry list.
          </p>
        )}
      </div>
    </div>
  );
};

export default EnquirySummaryCard;
