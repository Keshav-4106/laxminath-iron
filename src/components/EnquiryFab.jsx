import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiClipboard } from "react-icons/fi";
import { useEnquiry } from "../context/enquiryContext";

// Floating "Enquiry list" button, shown on every page once something is in the list.
const EnquiryFab = () => {
  const { summary } = useEnquiry();
  const { pathname } = useLocation();
  if (summary.count === 0 || pathname === "/enquiry") return null;

  return (
    <Link
      to="/enquiry"
      aria-label={`Review enquiry list, ${summary.count} ${summary.count === 1 ? "item" : "items"}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 font-black text-white shadow-2xl shadow-green-900/30 transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400"
    >
      <FiClipboard size={20} />
      <span>Review Enquiry</span>
      <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-2 text-sm text-green-700">{summary.count}</span>
    </Link>
  );
};

export default EnquiryFab;
