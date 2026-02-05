import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path }) => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "UBCabs",
    "image": "https://ubcabs.com/logo.png",
    "@id": "https://ubcabs.com",
    "url": "https://ubcabs.com",
    "telephone": "+919121067423",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hitech City",
      "addressLocality": "Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "areaServed": ["Hyderabad", "Guntur", "Vijayawada", "Vizag"],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shiva Tours and Travels"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://ubcabs.com${path}`} />
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;