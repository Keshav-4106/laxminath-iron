import React, { useState, useMemo } from 'react';
import { Helmet } from "react-helmet-async";
import { scrapData } from '../data/scrapData';
import ProductCard from '../components/ProductCard';

const Scrap = () => {
  // State to hold the quantity of each scrap type
  const [quantities, setQuantities] = useState({});

  // Handle quantity changes
  const handleQuantityChange = (id, qty) => {
    setQuantities(prev => ({
      ...prev,
      [id]: qty
    }));
  };

  // Live Calculations
  const { totalWeight, grandTotal } = useMemo(() => {
    let weight = 0;
    let total = 0;

    scrapData.forEach(item => {
      const qty = quantities[item.id] || 0;
      weight += qty;
      total += qty * item.price;
    });

    return { totalWeight: weight, grandTotal: total };
  }, [quantities]);

  // Generate WhatsApp Message
  const handleWhatsApp = () => {
    const phoneNumber = "918824841765"; // Replace with actual number
    
    let message = `*Inquiry from Laxminath Iron Website*\n\n`;
    message += `*Product Category:* Scrap Iron\n\n`;
    
    let hasItems = false;
    message += `*Scrap Details:*\n`;
    scrapData.forEach(item => {
      const qty = quantities[item.id] || 0;
      if (qty > 0) {
        hasItems = true;
        const cost = qty * item.price;
        message += `- ${item.name}: ${qty} kg - ₹${cost.toLocaleString('en-IN')}\n`;
      }
    });

    if (!hasItems) return;
    
    message += `\n*Total Weight:* ${totalWeight} kg\n`;
    message += `*Estimated Value:* ₹${grandTotal.toLocaleString('en-IN')}\n`;
    message += `\nPlease let me know the process for dropping this off or arranging a pickup.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
    <Helmet>

  <title>
    Scrap Material Supplier in Bassi Chittorgarh | Laxminath Iron
  </title>

  <meta
    name="description"
    content="Laxminath Iron deals in iron scrap and construction scrap materials in Bassi, Chittorgarh with competitive market rates."
  />

  <meta
    name="keywords"
    content="Scrap supplier Bassi, iron scrap Chittorgarh, construction scrap Rajasthan"
  />

</Helmet>
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Scrap Materials (कबाड़)</h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check today's live rates for various grades of industrial and commercial scrap. Enter the approximate weight in Kg to calculate your estimate.
          </p>
          <div className="mt-4 inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 px-4 py-2 rounded-lg text-sm font-semibold border border-amber-200 dark:border-amber-700">
            Note: Prices are subject to daily market fluctuations.
          </div>
        </div>

        {/* Scrap Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {scrapData.map((item) => (
            <ProductCard
  key={item.id}
  name={item.name}
  price={item.price}
  unit={item.unit}
  quantity={quantities[item.id] || 0}
  onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
  image={item.image}
  features={item.features}
  bestFor={item.bestFor}
/>
          ))}
        </div>

        {/* Floating / Sticky Total & Checkout Footer */}
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-auto z-40 bg-slate-900 dark:bg-black text-white rounded-2xl p-6 shadow-2xl border border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Weight</p>
              <p className="text-2xl font-bold">{totalWeight} <span className="text-lg font-normal">kg</span></p>
            </div>
            <div className="hidden sm:block w-px bg-slate-700"></div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Estimate</p>
              <p className="text-3xl font-extrabold text-amber-500">₹{grandTotal.toLocaleString('en-IN')}</p>
            </div>
          </div>
          
          <button 
            onClick={handleWhatsApp}
            disabled={grandTotal === 0}
            className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              grandTotal > 0 
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:-translate-y-1' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Inquire Rates
          </button>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Scrap;