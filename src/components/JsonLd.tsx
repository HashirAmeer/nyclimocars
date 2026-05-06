/**
 * Lightweight JSON-LD injector. Renders a <script type="application/ld+json">
 * with the given object. Use one per page (or multiple for combined schemas).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    name: "NY City Limousine",
    description: "Premium limousine and chauffeur service in New York City",
    url: "https://www.nycitylimousine.com",
    telephone: "+1-917-735-4320",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [
      "New York City",
      "Brooklyn",
      "Manhattan",
      "Queens",
      "The Bronx",
      "Staten Island",
      "New Jersey",
      "Connecticut",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
