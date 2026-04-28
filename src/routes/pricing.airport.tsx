import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/ServicePage";

export const Route = createFileRoute("/pricing/airport")({
  head: () => ({
    meta: [
      { title: "Airport Transfer Rates — NYC Limo Car" },
      { name: "description", content: "Fixed airport transfer rates for JFK, LaGuardia, and Newark. All-inclusive luxury chauffeur pricing." },
      { property: "og:title", content: "Airport Transfer Rates — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1600&q=80" },
    ],
  }),
  component: () => (
    <PricingPage
      eyebrow="Airport Rates"
      title="All-inclusive airport pricing."
      subtitle="Quoted from Manhattan. Other boroughs and tri-state areas calculated at booking."
      hero="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1600&q=80"
      intro="Rates are flat fees from Manhattan to the major NYC-area airports. Includes meet & greet, 30 minutes wait time, flight tracking, and tolls."
      tiers={[
        { name: "LaGuardia (LGA)", price: "$110", unit: "transfer", features: ["Sedan from $110", "SUV from $145", "Stretch from $245", "30 min free wait", "Meet & greet included"] },
        { name: "JFK", price: "$135", unit: "transfer", features: ["Sedan from $135", "SUV from $175", "Stretch from $285", "Inside-terminal greeting", "Tolls included"], featured: true },
        { name: "Newark (EWR)", price: "$145", unit: "transfer", features: ["Sedan from $145", "SUV from $185", "Stretch from $295", "Cross-state tolls included", "Sprinter from $325"] },
      ]}
      notes={[
        "Rates quoted are from midtown Manhattan; other zones priced on booking.",
        "20% gratuity added at billing.",
        "After-midnight pickups: $25 surcharge.",
        "Private jet (FBO) transfers available — request a quote.",
      ]}
    />
  ),
});
