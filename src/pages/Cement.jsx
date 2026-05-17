import React, { useState, useMemo } from "react";
import { cementData } from "../data/cementData";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaTruck, FaShieldAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Cement = () => {

  const [quantities, setQuantities] = useState({});

  // Quantity Handler
  const handleQuantityChange = (productName, qty) => {
    setQuantities((prev) => ({
      ...prev,
      [productName]: qty,
    }));
  };

  // Live Calculations
  const { totalBags, grandTotal } = useMemo(() => {

    let bags = 0;
    let total = 0;

    cementData.products.forEach((product) => {

      const qty = quantities[product.name] || 0;

      bags += qty;

      total += qty * product.price;
    });

    return {
      totalBags: bags,
      grandTotal: total,
    };

  }, [quantities]);

  // WhatsApp Order
  const handleWhatsApp = () => {

    let message = `*Laxminath Iron Cement Inquiry*%0A%0A`;

    let hasItems = false;

    cementData.products.forEach((product) => {

      const qty = quantities[product.name] || 0;

      if (qty > 0) {

        hasItems = true;

        const total = qty * product.price;

        message += `• ${product.name}%0A`;
        message += `Quantity: ${qty} Bags%0A`;
        message += `Amount: ₹${total}%0A%0A`;
      }
    });

    if (!hasItems) return;

    message += `*Total Bags:* ${totalBags}%0A`;
    message += `*Grand Total:* ₹${grandTotal.toLocaleString(
      "en-IN"
    )}%0A%0A`;

    message += `Please confirm delivery availability.`;

    const whatsappUrl = `https://wa.me/918824841765?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
    <Helmet>

  <title>
    MP Birla Cement Dealer in Bassi, Chittorgarh | Laxminath Iron
  </title>

  <meta
    name="description"
    content="Authorized MP Birla Cement supplier in Bassi, Chittorgarh. Best cement rates, fast delivery and genuine products available."
  />

  <meta
    name="keywords"
    content="MP Birla Cement dealer Bassi, Cement supplier Chittorgarh, Cement shop Rajasthan"
  />

</Helmet>
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 px-4 overflow-hidden">

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="uppercase tracking-[4px] text-sm text-amber-400 font-semibold mb-4">
            Authorized Dealer
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Premium MP Birla Cement
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Strong foundation starts with premium quality cement.
            Get genuine MP Birla Cement products with trusted delivery
            and best market rates.
          </p>

          <a
            href="https://wa.me/918824841765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* TRUST SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg text-center">
            <FaShieldAlt className="text-5xl text-amber-500 mx-auto mb-4" />

            <h3 className="text-xl font-bold dark:text-white mb-2">
              Genuine Products
            </h3>

            <p className="text-slate-500 dark:text-slate-400">
              100% original MP Birla Cement products.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg text-center">
            <FaTruck className="text-5xl text-blue-500 mx-auto mb-4" />

            <h3 className="text-xl font-bold dark:text-white mb-2">
              Fast Delivery
            </h3>

            <p className="text-slate-500 dark:text-slate-400">
              Quick local delivery available for all orders.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg text-center">
            <MdVerified className="text-5xl text-green-500 mx-auto mb-4" />

            <h3 className="text-xl font-bold dark:text-white mb-2">
              Trusted Dealer
            </h3>

            <p className="text-slate-500 dark:text-slate-400">
              Reliable service and competitive market pricing.
            </p>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="mb-20">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our Cement Products
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the right cement for your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {cementData.products.map((product) => (

              <ProductCard
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                unit={product.unit}
                quantity={quantities[product.name] || 0}
                onQuantityChange={(qty) =>
                  handleQuantityChange(product.name, qty)
                }
                features={product.features}
                bestFor={product.bestFor}
              />
            ))}
          </div>
        </section>

        {/* CEMENT GUIDE */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-xl mb-20">

          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10 text-center">
            Cement Usage Guide
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {cementData.products.map((product) => (

              <div
                key={product.id}
                className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold dark:text-white mb-3">
                  {product.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  Best For:
                </p>

                <p className="font-semibold text-slate-900 dark:text-white mt-2">
                  {product.bestFor}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STICKY FOOTER */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-auto z-50 bg-slate-900 text-white rounded-3xl p-6 shadow-2xl border border-slate-700 flex flex-col md:flex-row items-center gap-6">

        <div className="flex items-center gap-8">

          <div>
            <p className="text-sm text-slate-400">
              Total Bags
            </p>

            <h3 className="text-2xl font-bold">
              {totalBags}
            </h3>
          </div>

          <div className="w-px h-12 bg-slate-700"></div>

          <div>
            <p className="text-sm text-slate-400">
              Grand Total
            </p>

            <h3 className="text-3xl font-extrabold text-amber-400">
              ₹{grandTotal.toLocaleString("en-IN")}
            </h3>
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          disabled={grandTotal === 0}
          className={`px-8 py-4 rounded-2xl font-bold text-lg transition duration-300 flex items-center gap-3 ${
            grandTotal > 0
              ? "bg-green-500 hover:bg-green-600"
              : "bg-slate-700 cursor-not-allowed"
          }`}
        >
          <FaWhatsapp className="text-2xl" />
          Send Inquiry
        </button>
      </div>
    </div>
    </>
  );
};

export default Cement;