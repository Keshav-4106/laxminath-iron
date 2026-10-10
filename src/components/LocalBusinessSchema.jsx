import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_E164,
  EMAIL,
  ADDRESS,
  GEO,
  OPENING_HOURS,
  FOUNDED_YEAR,
} from "../config/site";

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og/home.jpg`,
    telephone: PHONE_E164,
    email: EMAIL,
    foundingDate: String(FOUNDED_YEAR),
    priceRange: "₹₹",
    description:
      "Authorised Polaad dealer (Polaad QST Fe 550D TMT bars) and MP Birla Cement authorised stockist in Bassi, Chittorgarh, Rajasthan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: OPENING_HOURS.days,
      opens: OPENING_HOURS.opens,
      closes: OPENING_HOURS.closes,
    },
    areaServed: [
      { "@type": "City", name: "Bassi" },
      { "@type": "City", name: "Chittorgarh" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Polaad QST Fe 550D TMT bars" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "MP Birla Cement" },
      },
    ],
    // sameAs intentionally omitted until a Google Business Profile exists.
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
