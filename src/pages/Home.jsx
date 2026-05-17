import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import LocalBusinessSchema from "../components/LocalBusinessSchema";

import birlaChetak from "../assets/birla chetak.png";

import iwpCement from "../assets/iwp cement.png";

import perfectPlus from "../assets/perfect plus.jpg";



import {

  FaWhatsapp,

  FaTruck,

  FaCheckCircle,

  FaPhoneAlt,

  FaShieldAlt,

  FaMapMarkerAlt,

  FaBolt,

  FaBuilding,

} from "react-icons/fa";



import homeHero from "../assets/home/home-hero.jpeg";

import cementImg from "../assets/home/cement-home.jpeg";

import sariyaImg from "../assets/home/sariya-home.jpeg";

import deliveryImg from "../assets/home/delivery-home.jpeg";



const Home = () => {



  const [loading, setLoading] = useState(true);

  useEffect(() => {



  const timer = setTimeout(() => {



    setLoading(false);



  }, 2200);



  return () => clearTimeout(timer);



}, []);



const [mousePosition, setMousePosition] = useState({

    x: 0,

    y: 0,

  });



  const fadeUp = {

  hidden: {

    opacity: 0,

    y: 60,

  },



  visible: {

    opacity: 1,

    y: 0,



    transition: {

      duration: 0.7,

    },

  },

};



const staggerContainer = {

  hidden: {},



  visible: {

    transition: {

      staggerChildren: 0.2,

    },

  },

};



  const categories = [

    {

      title: "Polaad TMT Sariya",

      description:

        "Premium quality TMT bars for strong and durable construction work.",

      image: sariyaImg,

      path: "/sariya",

    },



    {

      title: "MP Birla Cement",

      description:

        "High quality cement for reliable and long-lasting construction work.",

      image: cementImg,

      path: "/cement",

    },

  ];



  const brands = [

  {

    name: "Polaad TMT",

    image: sariyaImg,

  },



  {

    name: "MP Birla Cement",

    image: cementImg,

  },



  {

    name: "Birla Chetak",

    image: birlaChetak,

  },



  {

    name: "IWP Cement",

    image: iwpCement,

  },



  {

    name: "Perfect Plus",

    image: perfectPlus,

  },

];



useEffect(() => {



  const handleMouseMove = (e) => {



    const x = (window.innerWidth / 2 - e.clientX) / 18;



    const y = (window.innerHeight / 2 - e.clientY) / 18;



    setMousePosition({ x, y });



  };



 



  window.addEventListener("mousemove", handleMouseMove);



  return () =>

    window.removeEventListener("mousemove", handleMouseMove);



}, []);


// eslint-disable-next-line no-unused-vars
  const features = [

    {

      icon: <FaTruck />,

      title: "Fast Delivery",

      desc: "Quick delivery support across Bassi & nearby villages.",

    },



    {

      icon: <FaShieldAlt />,

      title: "GST Registered",

      desc: "Proper GST billing with genuine construction materials.",

    },



    {

      icon: <FaBuilding />,

      title: "20+ Years Experience",

      desc: "Trusted local supplier for construction materials.",

    },



    {

      icon: <FaBolt />,

      title: "Quality Materials",

      desc: "Premium Polaad TMT & MP Birla Cement available.",

    },

  ];







  if (loading) {

  return (



    <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden">



      {/* Glow */}

      <div className="absolute w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>



      {/* Content */}

      <div className="relative z-10 flex flex-col items-center">



        {/* Logo */}

        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30 animate-pulse">



          <span className="text-black text-4xl font-black">

            LI

          </span>



        </div>



        {/* Text */}

        <h1 className="mt-10 text-4xl font-black text-white tracking-wide">



          Laxminath Iron



        </h1>



        <p className="mt-3 text-slate-600 text-lg">



          Premium Construction Materials



        </p>



        {/* Loading Bar */}

        <div className="mt-10 w-64 h-2 bg-slate-800 rounded-full overflow-hidden">



          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 animate-loader rounded-full"></div>



        </div>



      </div>



    </div>



  );

}



return (

  <>

    <Helmet>



      <title>

        Laxminath Iron | Polaad TMT Sariya & Cement Supplier in Bassi

      </title>



      <meta

        name="description"

        content="Trusted supplier of Polaad TMT Sariya, MP Birla Cement and construction materials in Bassi, Chittorgarh."

      />



      <meta

        name="keywords"

        content="Polaad TMT dealer Bassi, cement supplier Chittorgarh, TMT sariya Bassi"

      />



    </Helmet>

    <LocalBusinessSchema />



    <div className="min-h-screen bg-[#f8fafc] text-white overflow-hidden">



     {/* PREMIUM HERO SECTION */}

<section className="relative h-[70vh] md:h-[90vh] overflow-hidden flex items-center">



  {/* Background Image */}

  <div className="absolute inset-0">



    <motion.img

  src={homeHero}

  alt="Laxminath Iron"

  className="w-full h-full object-cover"

  animate={{

    x: mousePosition.x,

    y: mousePosition.y,

  }}

  transition={{

    type: "spring",

    stiffness: 20,

  }}

/>



  </div>



  {/* Overlay */}

  <div className="absolute inset-0 bg-black/45"></div>



  {/* Content */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-28 md:pb-16 w-full">



    <div className="grid lg:grid-cols-2 gap-14 items-center">



{/* LEFT */}

<motion.div

  initial={{ opacity: 0, y: 80 }}

  animate={{ opacity: 1, y: 0 }}

  transition={{ duration: 1 }}

>



        {/* Badge */}

        <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-400/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-orange-300 mb-8">



          <FaCheckCircle />



          Trusted Construction Material Supplier



        </div>



        {/* Heading */}

        <motion.h1

  initial={{

    opacity: 0,

    y: 60,

  }}

  animate={{

    opacity: 1,

    y: 0,

  }}

  transition={{

    duration: 1,

    ease: "easeOut",

  }}

  className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] text-white mb-8"

>



  Laxminath Iron



  <span className="block text-orange-400 mt-2">

    Premium TMT Sariya

  </span>



  <span className="block">

    & Cement Supplier

  </span>



</motion.h1>



        {/* Description */}

        <motion.p

  initial={{

    opacity: 0,

    y: 40,

  }}

  animate={{

    opacity: 1,

    y: 0,

  }}

  transition={{

    duration: 1,

    delay: 0.3,

    ease: "easeOut",

  }}

  className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-10"

>



  Trusted supplier of Polaad TMT Sariya

   and MP Birla Cement

  in Bassi, Chittorgarh with fast local delivery.



</motion.p>



        {/* Buttons */}

        <motion.div

  initial={{

    opacity: 0,

    y: 30,

  }}

  animate={{

    opacity: 1,

    y: 0,

  }}

  transition={{

    duration: 1,

    delay: 0.5,

    ease: "easeOut",

  }}

  className="flex flex-col sm:flex-row gap-5"

>



          {/* WhatsApp */}

          <a

            href="https://wa.me/918824841765"

            target="_blank"

            rel="noopener noreferrer"

           className="group relative overflow-hidden bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,197,94,0.35)] active:scale-95 shadow-2xl"

          >



            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-1000 bg-white/20 skew-x-12"></span>



            <FaWhatsapp size={24} />



            WhatsApp Now



          </a>



          {/* Call */}

          <a

            href="tel:+918824841765"

            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition duration-300"

          >



            <FaPhoneAlt />



            Call Now



          </a>



        </motion.div>



      </motion.div>



      {/* RIGHT FLOATING CARDS */}

<motion.div

  initial={{ opacity: 0, x: 100 }}

  animate={{ opacity: 1, x: 0 }}

  transition={{ duration: 1.2 }}

  className="hidden lg:flex justify-end"

>



        <div className="space-y-6">



          {/* CARD 1 */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-72 shadow-2xl animate-float">



            <h3 className="text-5xl font-black text-orange-400 mb-3">

              20+

            </h3>



            <p className="text-white text-xl font-bold mb-2">

              Years Experience

            </p>



            <p className="text-slate-300">

              Trusted supplier in Bassi and nearby areas.

            </p>



          </div>



          {/* CARD 2 */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-72 shadow-2xl ml-16 animate-float2">



            <div className="flex items-center gap-3 mb-4">



              <FaTruck className="text-3xl text-orange-400" />



              <h3 className="text-2xl font-black">

                Fast Delivery

              </h3>



            </div>



            <p className="text-slate-300 leading-relaxed">



              Free delivery in Bassi

              with our own vehicles.



            </p>



          </div>



        </div>

</motion.div>



    </div>



  </div>



</section>

     



      {/* PREMIUM CATEGORY SECTION */}

<motion.section

  initial={{ opacity: 0, y: 80 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  transition={{ duration: 0.8 }}

  className="py-24 md:py-32 px-6 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]"

>





  <div className="max-w-7xl mx-auto">



    {/* Heading */}

    <div className="text-center mb-24">



      <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-sm">



        Our Products



      </span>



      <h2 className="text-5xl md:text-7xl font-black mt-5 leading-tight text-slate-900">



        Premium Construction

        <span className="block text-orange-400">

          Materials

        </span>



      </h2>



      <p className="text-slate-600 text-xl max-w-3xl mx-auto mt-10 leading-relaxed">



        High-quality construction materials trusted by contractors,

        builders and local customers across Bassi and nearby areas.



      </p>



    </div>



    {/* Cards */}

    <div className="grid lg:grid-cols-2 gap-10">



      {categories.map((item, index) => (



        <div

          key={index}

          className="group relative overflow-hidden rounded-[35px] border border-slate-800 bg-slate-900 shadow-2xl hover:-translate-y-3 hover:shadow-orange-500/20 transition duration-500"

        >



          {/* Image */}

          <div className="relative h-[500px] overflow-hidden">



            <img

              src={item.image}

              alt={item.title}

              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"

            />



            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>



          </div>



          {/* Content */}

          <div className="absolute bottom-0 left-0 p-10 w-full">



            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/20 backdrop-blur-md px-4 py-2 rounded-full text-orange-300 text-sm font-semibold mb-6">



              Premium Quality



            </div>



            <h3 className="text-4xl font-black mb-5">



              {item.title}



            </h3>



            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">



              {item.description}



            </p>



            {/* Button */}

            <a

              href={item.path}

              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-7 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(249,115,22,0.35)] active:scale-95 shadow-2xl"

            >



              Explore Now



              <span className="text-2xl">

                →

              </span>



            </a>



          </div>



        </div>



      ))}



    </div>



  </div>



</motion.section>



     





      {/* BRAND PARTNERS */}

<motion.section

  initial={{ opacity: 0 }}

  whileInView={{ opacity: 1 }}

  viewport={{ once: true }}

  transition={{ duration: 1 }}

  className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden border-y border-slate-200"

>



  <div className="max-w-7xl mx-auto mb-16 px-6 text-center">



    <span className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold">



      Trusted Brands



    </span>



    <h2 className="text-4xl md:text-5xl font-black mt-5 text-slate-900">



      Premium Construction

      <span className="block text-orange-400">

        Brand Partners

      </span>



    </h2>



  </div>



  {/* Infinite Slider */}

  <div className="relative w-full overflow-hidden">



    <div className="flex animate-scroll hover:[animation-play-state:paused] gap-12 w-max px-6 py-4">



      {[...brands, ...brands].map((brand, index) => (



        <div

          key={index}

         className="group bg-slate-900 border border-slate-800 rounded-[32px]

min-w-[300px] md:min-w-[340px]

h-[210px]

flex flex-col items-center justify-center

p-8

hover:border-orange-500/50

transition-all duration-500

shadow-2xl

hover:scale-110

hover:-translate-y-4

hover:z-20

relative"

        >



          <img

            src={brand.image}

            alt={brand.name}

            className="h-24 md:h-28 object-contain mb-6 transition duration-500 group-hover:scale-110"

          />



          <h3 className="text-lg font-bold text-center text-white">



            {brand.name}



          </h3>



        </div>



      ))}



    </div>



  </div>



</motion.section>



       

      {/* DELIVERY BANNER */}

<section className="relative py-20 md:py-28 overflow-hidden">



  {/* Background Image */}

  <div className="absolute inset-0">



    <img

      src={deliveryImg}

      alt="Delivery Service"

      className="w-full h-full object-cover"

    />



    {/* Overlay */}

    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>



  </div>



  {/* Content */}

  <div className="relative z-10 max-w-7xl mx-auto px-6">



    <div className="max-w-3xl">



      {/* Badge */}

      <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-400/20 backdrop-blur-md px-5 py-2 rounded-full text-orange-300 font-semibold mb-8">



        <FaTruck />



        Fast Delivery Available



      </div>



      {/* Heading */}

      <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">



        Quick Delivery

        <span className="block text-orange-400">

          Across Nearby Areas

        </span>



      </h2>



      {/* Description */}

      <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-10">



        We provide fast and reliable delivery support

        for TMT Sariya, Cement and construction materials

        in Bassi, Chittorgarh and nearby villages.



      </p>



      {/* Buttons */}

      <div className="flex flex-wrap gap-5">



        {/* WhatsApp */}

        <a

          href="https://wa.me/918824841765"

          target="_blank"

          rel="noopener noreferrer"

          className="group relative overflow-hidden bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,197,94,0.35)] active:scale-95 shadow-2xl"

        >



          <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-1000 bg-white/20 skew-x-12"></span>



          <FaWhatsapp size={24} />



          Order on WhatsApp



        </a>



        {/* Call */}

        <a

          href="tel:+918824841765"

          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition duration-300"

        >



          <FaPhoneAlt />



          Call Now



        </a>



      </div>



    </div>



  </div>



</section>





 {/* WHY CHOOSE US */}

<motion.section

  initial={{ opacity: 0, y: 80 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  transition={{ duration: 0.8 }}

  className="py-20 md:py-24 px-6 bg-[#f8fafc]"

>



  <div className="max-w-7xl mx-auto">



    {/* Heading */}

    <div className="text-center mb-20 md:mb-24">



      <span className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold">



        Why Choose Us



      </span>



      <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mt-5 leading-tight text-slate-900">



        Built On Trust,

        <span className="block text-orange-400">

          Quality & Service

        </span>



      </h2>



      <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">



        We provide premium quality construction materials

        with fast delivery and reliable local support.



      </p>



    </div>



    {/* Cards */}

    <motion.div

      variants={staggerContainer}

      initial="hidden"

      whileInView="visible"

      viewport={{ once: true }}

      className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10"

    >



      {/* Card 1 */}

      <motion.div

        variants={fadeUp}

        className="group bg-[#0f172a] border border-slate-700 rounded-[34px] p-8 md:p-10 hover:border-orange-500/40 transition duration-300 hover:-translate-y-2 shadow-2xl min-h-[260px] flex flex-col"

      >



        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 text-3xl mb-7">



          <FaCheckCircle />



        </div>



        <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">



          Premium Quality



        </h3>



        <p className="text-slate-300 text-base md:text-lg leading-relaxed">



          Genuine Polaad TMT Sariya and trusted cement brands.



        </p>



      </motion.div>



      {/* Card 2 */}

      <motion.div

        variants={fadeUp}

        className="group bg-[#0f172a] border border-slate-700 rounded-[34px] p-8 md:p-10 hover:border-green-500/40 transition duration-300 hover:-translate-y-2 shadow-2xl min-h-[260px] flex flex-col"

      >



        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-3xl mb-7">



          <FaTruck />



        </div>



        <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">



          Fast Delivery



        </h3>



        <p className="text-slate-300 text-base md:text-lg leading-relaxed">



          Own delivery vehicles available for local areas.



        </p>



      </motion.div>



      {/* Card 3 */}

      <motion.div

        variants={fadeUp}

        className="group bg-[#0f172a] border border-slate-700 rounded-[34px] p-8 md:p-10 hover:border-blue-500/40 transition duration-300 hover:-translate-y-2 shadow-2xl min-h-[260px] flex flex-col"

      >



        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-3xl mb-7">



          <FaShieldAlt />



        </div>



        <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">



          GST Billing



        </h3>



        <p className="text-slate-300 text-base md:text-lg leading-relaxed">



          Proper GST invoices and transparent pricing support.



        </p>



      </motion.div>



      {/* Card 4 */}

      <motion.div

        variants={fadeUp}

        className="group bg-[#0f172a] border border-slate-700 rounded-[34px] p-8 md:p-10 hover:border-yellow-500/40 transition duration-300 hover:-translate-y-2 shadow-2xl min-h-[260px] flex flex-col"

      >



        <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-3xl mb-7">



          <FaMapMarkerAlt />



        </div>



        <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight">



          Local Support



        </h3>



        <p className="text-slate-300 text-base md:text-lg leading-relaxed">



          Serving Bassi, Chittorgarh and nearby villages.



        </p>



      </motion.div>



    </motion.div>



  </div>



</motion.section>





   

{/* LOCATION & CONTACT */}

<motion.section

  initial={{

    opacity: 0,

    y: 80,

  }}

  whileInView={{

    opacity: 1,

    y: 0,

  }}

  transition={{

    duration: 1,

    ease: "easeOut",

  }}

  viewport={{

    once: true,

    amount: 0.2,

  }}

  className="py-16 md:py-20 px-6 bg-[#f8fafc]"

>



  <div className="max-w-7xl mx-auto">



    {/* Heading */}

    <div className="text-center mb-16 md:mb-20">



      <span className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold">



        Contact & Location



      </span>



      <h2 className="text-4xl md:text-6xl font-black mt-5 leading-tight text-slate-900">



        Visit Our

        <span className="block text-orange-400">

          Store Location

        </span>



      </h2>



      <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">



        Contact us for premium construction materials,

        pricing and fast delivery support.



      </p>



    </div>



    <div className="grid lg:grid-cols-2 gap-10 items-stretch">



      {/* LEFT SIDE */}

      <div className="space-y-6 h-full">



        {/* Phone */}

        <div className="bg-[#0f172a] border border-slate-700 rounded-[32px] p-8 flex gap-6 items-start hover:border-orange-400/50 hover:shadow-2xl transition duration-300 min-h-[210px]">



          <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl shrink-0">



            <FaPhoneAlt />



          </div>



          <div className="flex-1">



            <h3 className="text-2xl font-black mb-4 text-white">

              Call Us

            </h3>



            <p className="text-slate-300 text-[17px] leading-relaxed mb-5">

              Talk directly for orders and pricing support.

            </p>



            <a

              href="tel:+918824841765"

              className="text-orange-400 hover:text-orange-300 transition font-bold text-lg"

            >

              +91 88248 41765

            </a>



          </div>



        </div>



        {/* WhatsApp */}

        <div className="bg-[#0f172a] border border-slate-700 rounded-[32px] p-8 flex gap-6 items-start hover:border-green-400/50 hover:shadow-2xl transition duration-300 min-h-[210px]">



          <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl shrink-0">



            <FaWhatsapp />



          </div>



          <div className="flex-1">



            <h3 className="text-2xl font-black mb-4 text-white">

              WhatsApp Support

            </h3>



            <p className="text-slate-300 text-[17px] leading-relaxed mb-5">

              Get fast quotation and delivery support instantly.

            </p>



            <a

              href="https://wa.me/918824841765"

              target="_blank"

              rel="noopener noreferrer"

              className="text-orange-400 hover:text-orange-300 transition font-bold text-lg"

            >

              Chat on WhatsApp

            </a>



          </div>



        </div>



        {/* Address */}

        <div className="bg-[#0f172a] border border-slate-700 rounded-[32px] p-8 flex gap-6 items-start hover:border-blue-400/50 hover:shadow-2xl transition duration-300 min-h-[210px]">



          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl shrink-0">



            <FaMapMarkerAlt />



          </div>



          <div className="flex-1">



            <h3 className="text-2xl font-black mb-4 text-white">

              Store Address

            </h3>



            <p className="text-slate-300 text-[17px] leading-relaxed">



              Bassi Highway, Near Jogniya Car Bazar,

              Bassi, Chittorgarh, Rajasthan - 312022



            </p>



          </div>



        </div>



      </div>



      {/* MAP */}

      <div className="rounded-[32px] overflow-hidden border border-slate-300 shadow-2xl min-h-[690px] bg-white">



        <iframe

          title="Laxminath Iron Location"

          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.886402786943!2d74.75340787446355!3d25.00397567783586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a5b7ad19fa15%3A0xbf3fb6e991cc56cb!2sLaxminath%20iron!5e0!3m2!1sen!2sin!4v1778757928946!5m2!1sen!2sin"

          className="w-full h-full border-0"

          loading="lazy"

          allowFullScreen

          referrerPolicy="no-referrer-when-downgrade"

        ></iframe>



      </div>



    </div>



  </div>



</motion.section>





    </div>

    </>

  );

};



export default Home;