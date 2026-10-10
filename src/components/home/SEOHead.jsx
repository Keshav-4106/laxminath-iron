import React from "react";
import { Helmet } from "react-helmet-async";
import PageSeo from "../PageSeo";
import { GEO } from "../../config/site";

const SEOHead = () => (
  <>
    <PageSeo
      title="Laxminath Iron | Polaad TMT Dealer & MP Birla Cement Stockist in Bassi"
      description="Authorised Polaad dealer and MP Birla Cement stockist in Bassi, Chittorgarh. Indicative daily rates, rebar weight calculator and delivery in nearby regions."
      path="/"
      image="/og/home.jpg"
      imageAlt="Laxminath Iron shop in Bassi with Polaad sariya"
      keywords="Laxminath Iron, Polaad TMT dealer Bassi, MP Birla Cement Bassi, sariya rate Chittorgarh, Fe 550D TMT bar, construction material Bassi Rajasthan, सरिया रेट बस्सी, पोलाद सरिया, एमपी बिरला सीमेंट बस्सी, सीमेंट रेट चित्तौड़गढ़"
    />
    {/* Local SEO & geo targeting */}
    <Helmet>
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Bassi, Chittorgarh" />
      <meta name="geo.position" content={`${GEO.latitude};${GEO.longitude}`} />
      <meta name="ICBM" content={`${GEO.latitude}, ${GEO.longitude}`} />
    </Helmet>
  </>
);

export default SEOHead;
