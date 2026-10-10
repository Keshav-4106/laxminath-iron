import React from "react";
import SEOHead from "../components/home/SEOHead";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import HeroSection from "../components/home/HeroSection";
import TrustStrip from "../components/home/TrustStrip";
import ProductCategories from "../components/home/ProductCategories";
import DeliveryBanner from "../components/home/DeliveryBanner";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactLocation from "../components/home/ContactLocation";
import FinalCTA from "../components/sariya/FinalCTA";

const Home = () => {
  return (
    <>
      <SEOHead />
      <LocalBusinessSchema />

      <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <HeroSection />
        <TrustStrip />
        <ProductCategories />
        <DeliveryBanner />
        <WhyChooseUs />
        <ContactLocation />
        <FinalCTA
          title="Need Current Rates or Delivery Support?"
          description="Contact Laxminath Iron for Polaad TMT Sariya, MP Birla Cement, stock availability, billing and delivery details."
        />
      </div>
    </>
  );
};

export default Home;