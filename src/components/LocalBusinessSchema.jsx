import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",

    name: "Laxminath Iron",

    image:
      "https://www.laxminathiron.in/hero-sariya.jpg",

    "@id":
      "https://www.laxminathiron.in",

    url:
      "https://www.laxminathiron.in",

    telephone:
      "+91 8824841765",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Bassi",

      addressLocality:
        "Chittorgarh",

      addressRegion:
        "Rajasthan",

      postalCode:
        "312022",

      addressCountry:
        "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: "25.0039756",

      longitude: "74.7534078",
    },

    openingHoursSpecification: {
      "@type":
        "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "08:00",

      closes: "20:00",
    },

    sameAs: [
      "https://wa.me/918824841765",
    ],

    priceRange: "₹₹",

    description:
      "Premium supplier of Polaad TMT Sariya, MP Birla Cement, Scrap and construction materials in Bassi, Chittorgarh.",

    areaServed: [
      "Bassi",
      "Chittorgarh",
      "Begun",
      "Nearby Villages",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Polaad TMT Sariya",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "MP Birla Cement",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Binding Wire",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;