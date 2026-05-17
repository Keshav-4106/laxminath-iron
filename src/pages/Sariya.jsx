import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  FiCheckCircle,
  FiTruck,
  FiShield,
  FiClock,
  FiPhoneCall,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaCalculator,
} from "react-icons/fa";

import {
  SARIYA_SIZES_DATA,
  ADDITIONAL_ITEMS_DATA,
} from "../data/sariyaData";

import SariyaTable from "../components/sariya/SariyaTable";
import AdditionalItems from "../components/sariya/AdditionalItems";
import OrderSummary from "../components/sariya/OrderSummary";
import SEO from "../components/SEO";

import heroImage from "../assets/sariya/hero-sariya.jpg";
import polaadImage from "../assets/sariya/polaad-tmt.png";
import bindingWireImage from "../assets/sariya/binding-wire.png";
import constructionImage from "../assets/sariya/construction-site.jpeg";
import deliveryImage from "../assets/sariya/delivery-truck.jpeg";

const Sariya = () => {

  // -----------------------------
  // STATES
  // -----------------------------

  const [sariyaQuantities, setSariyaQuantities] = useState(
    SARIYA_SIZES_DATA.reduce((acc, item) => {
      acc[item.size] = 0;
      return acc;
    }, {})
  );

  const [additionalQuantities, setAdditionalQuantities] = useState(
    ADDITIONAL_ITEMS_DATA.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const [slabArea, setSlabArea] = useState("");

  // -----------------------------
  // SARIYA CALCULATIONS
  // -----------------------------

  const tableData = useMemo(() => {

    return SARIYA_SIZES_DATA.map((item) => {

      const rods = sariyaQuantities[item.size] || 0;

      const totalWeight =
        rods * item.weightPerBar;

      const totalAmount =
        totalWeight * item.pricePerKg;

      return {
        ...item,
        rods,
        totalWeight,
        totalAmount,
      };

    });

  }, [sariyaQuantities]);

  // -----------------------------
  // ADDITIONAL ITEMS
  // -----------------------------

  const additionalItems = useMemo(() => {

    return ADDITIONAL_ITEMS_DATA.map((item) => {

      const quantity =
        additionalQuantities[item.id] || 0;

      return {
        ...item,
        quantity,
        itemTotal:
          quantity * item.price,
      };

    });

  }, [additionalQuantities]);

  // -----------------------------
  // TOTALS
  // -----------------------------

  const totals = useMemo(() => {

    const totalWeight =
      tableData.reduce(
        (acc, item) =>
          acc + item.totalWeight,
        0
      );

    const sariyaAmount =
      tableData.reduce(
        (acc, item) =>
          acc + item.totalAmount,
        0
      );

    const additionalAmount =
      additionalItems.reduce(
        (acc, item) =>
          acc + item.itemTotal,
        0
      );

    return {
      totalWeight,
      totalAmount:
        sariyaAmount + additionalAmount,
    };

  }, [tableData, additionalItems]);

  // -----------------------------
  // ESTIMATOR
  // -----------------------------

  const estimatedSteel =
    slabArea > 0
      ? (slabArea * 4).toFixed(0)
      : 0;

  const estimatedBindingWire =
    slabArea > 0
      ? (slabArea * 0.08).toFixed(1)
      : 0;

  // -----------------------------
  // HANDLERS
  // -----------------------------

  const handleQtyChange = (
    size,
    value
  ) => {

    const qty =
      parseInt(value, 10);

    setSariyaQuantities((prev) => ({
      ...prev,
      [size]:
        isNaN(qty) || qty < 0
          ? 0
          : qty,
    }));

  };

  const handleAdditionalQtyChange = (
    id,
    delta
  ) => {

    setAdditionalQuantities((prev) => ({
      ...prev,
      [id]:
        Math.max(
          0,
          (prev[id] || 0) + delta
        ),
    }));

  };

  // -----------------------------
  // WHATSAPP MESSAGE
  // -----------------------------

  const whatsappMessage = `
Hello Laxminath Iron,

I want to inquire about:

${tableData
  .filter((item) => item.rods > 0)
  .map(
    (item) =>
      `${item.size} - ${item.rods} rods`
  )
  .join("\n")}

Additional Items:
${additionalItems
  .filter((item) => item.quantity > 0)
  .map(
    (item) =>
      `${item.name} - ${item.quantity}`
  )
  .join("\n")}

Total Weight:
${totals.totalWeight.toFixed(2)} kg

Grand Total:
₹${totals.totalAmount.toFixed(2)}
`;

  return (

      <>
      <Helmet>

  <title>
    Polaad TMT Sariya Supplier in Bassi, Chittorgarh | Laxminath Iron
  </title>

  <meta
    name="description"
    content="Laxminath Iron is a trusted Polaad TMT Sariya supplier in Bassi, Chittorgarh. Get best quality TMT bars, binding wire, taprol and construction materials with fast delivery."
  />

  <meta
    name="keywords"
    content="Polaad TMT dealer Bassi, Sariya supplier Chittorgarh, TMT bars near Bassi, construction material supplier Rajasthan"
  />

  <meta property="og:title" content="Laxminath Iron" />

  <meta
    property="og:description"
    content="Premium TMT Sariya Supplier in Bassi, Chittorgarh."
  />

</Helmet>

    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative min-h-[90vh] flex items-center">

        <img
          src={heroImage}
          alt="Polaad TMT Sariya"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-5 py-2 rounded-full mb-6 backdrop-blur-md">

              <FiCheckCircle />

              Trusted Construction Material Supplier

            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">

              Premium Polaad TMT Sariya
              Supplier in Bassi, Chittorgarh

            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-8">

              Strong construction starts with
              quality steel. Get premium Polaad
              TMT bars, binding wire, and
              construction materials with fast
              local delivery.

            </p>

            {/* TRUST BADGES */}

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-white">
                20+ Years Experience
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-white">
                GST Registered
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl text-white">
                Fast Delivery
              </div>

            </div>

            {/* CTA BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://wa.me/918824841765"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition duration-300 hover:scale-105"
              >

                <FaWhatsapp size={24} />

                Get Instant Quote

              </a>

              <a
                href="tel:+918824841765"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition duration-300"
              >

                <FiPhoneCall />

                Call Now

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST INDICATORS */}

      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">

            <FiTruck className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Local Delivery
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Free delivery in Bassi and nearby areas.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">

            <FiShield className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Quality Assurance
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Trusted Polaad TMT products with reliable quality.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">

            <FiClock className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Fast Support
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Quick WhatsApp response and material inquiry support.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">

            <FaCalculator className="text-4xl text-orange-500 mb-4" />

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Live Estimation
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Instantly calculate steel quantity and total cost.
            </p>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <main className="max-w-7xl mx-auto px-4 py-16">

        {/* BRAND SECTION */}

        <section className="grid lg:grid-cols-2 gap-10 items-center mb-20">

          <div>

            <img
              src={polaadImage}
              alt="Polaad TMT"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

          </div>

          <div>

            <span className="text-orange-500 font-bold uppercase tracking-widest">
              Trusted Brand
            </span>

            <h2 className="text-4xl font-black text-slate-900 dark:text-white mt-4 leading-tight">

              Premium Polaad TMT Bars
              for Modern Construction

            </h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8">

              We supply high-quality Polaad TMT bars
              suitable for residential and commercial
              construction projects across Bassi,
              Chittorgarh, and nearby villages.

            </p>

          </div>

        </section>

        {/* ESTIMATOR */}

        <section className="bg-gradient-to-br from-slate-900 to-black rounded-[40px] overflow-hidden mb-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div className="p-8 md:p-12">

              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/20 text-orange-300 px-5 py-2 rounded-full mb-6">

                <FaCalculator />

                Construction Estimator

              </div>

              <h2 className="text-4xl font-black text-white leading-tight">

                Estimate Steel Requirement
                for Your Construction

              </h2>

              <p className="mt-6 text-slate-300 leading-8">

                Enter slab area in square feet
                to get approximate steel and
                binding wire estimation.

              </p>

              <div className="mt-8">

                <input
                  type="number"
                  value={slabArea}
                  onChange={(e) =>
                    setSlabArea(e.target.value)
                  }
                  placeholder="Enter slab area in sqft"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-400 focus:outline-none"
                />

              </div>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-white/10 rounded-3xl p-6">

                  <p className="text-slate-400 mb-2">
                    Estimated Steel
                  </p>

                  <h3 className="text-3xl font-black text-orange-400">
                    {estimatedSteel} kg
                  </h3>

                </div>

                <div className="bg-white/10 rounded-3xl p-6">

                  <p className="text-slate-400 mb-2">
                    Binding Wire
                  </p>

                  <h3 className="text-3xl font-black text-orange-400">
                    {estimatedBindingWire} kg
                  </h3>

                </div>

              </div>

            </div>

            <div className="h-full">

              <img
                src={constructionImage}
                alt="Construction Site"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </section>

        {/* MAIN GRID */}

        <section className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* LEFT */}

          <div className="space-y-10">

            <SariyaTable
              tableData={tableData}
              handleQtyChange={handleQtyChange}
            />

            {/* ADDITIONAL ITEMS */}

            <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-xl border border-slate-200 dark:border-slate-800 p-6">

              <div className="flex items-center gap-6 mb-8">

                <img
                  src={bindingWireImage}
                  alt="Binding Wire"
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>

                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                    Additional Construction Items
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Add binding wire and other materials to your inquiry.
                  </p>

                </div>

              </div>

              <AdditionalItems
                items={additionalItems}
                handleQtyChange={handleAdditionalQtyChange}
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:sticky lg:top-24">

            <OrderSummary
              totalWeight={totals.totalWeight}
              totalAmount={totals.totalAmount}
            />

            {/* WHATSAPP BUTTON */}

            <a
              href={`https://wa.me/918824841765?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white rounded-3xl px-6 py-5 font-black text-lg flex items-center justify-center gap-4 shadow-2xl transition duration-300 hover:scale-[1.02]"
            >

              <FaWhatsapp size={28} />

              Send Inquiry on WhatsApp

            </a>

            {/* DELIVERY CARD */}

            <div className="mt-6 bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">

              <img
                src={deliveryImage}
                alt="Delivery"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Fast Local Delivery
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400 leading-7">

                  We provide fast delivery service
                  in Bassi and nearby villages using
                  our own transport vehicles.

                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
    </>


  );

};

export default Sariya;