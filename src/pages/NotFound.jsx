import React from "react";
import { Link } from "react-router-dom";
import PageSeo from "../components/PageSeo";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../config/site";

const NotFound = () => {
  return (
    <>
      <PageSeo title="Page Not Found | Laxminath Iron" noindex />

      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 pb-16 pt-32 text-center text-slate-900 dark:text-white">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Error 404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">This page does not exist</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          The link may be old or mistyped. You can browse our products below or ask us directly on WhatsApp.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="rounded-2xl bg-slate-900 px-6 py-3.5 font-black text-white transition hover:bg-orange-500 hover:text-black dark:bg-slate-800">
            Home
          </Link>
          <Link to="/sariya" className="rounded-2xl border border-slate-300 px-6 py-3.5 font-black transition hover:border-orange-500 dark:border-slate-700">
            Polaad TMT Sariya
          </Link>
          <Link to="/cement" className="rounded-2xl border border-slate-300 px-6 py-3.5 font-black transition hover:border-orange-500 dark:border-slate-700">
            MP Birla Cement
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 font-black text-white transition hover:bg-green-600"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default NotFound;
