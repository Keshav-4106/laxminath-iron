import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL, BUSINESS_NAME } from "../config/site";

// Title, description, canonical and share-preview tags for one page.
// image is a path under /public (e.g. "/og/sariya.jpg"), 1200 x 630.
const PageSeo = ({ title, description, path, image = "/og/home.jpg", imageAlt, keywords, noindex = false }) => {
  const url = path ? `${SITE_URL}${path}` : null;
  const imageUrl = `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex" />}
      {url && !noindex && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default PageSeo;
