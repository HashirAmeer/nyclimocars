import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/ServicePage";

export const Route = createFileRoute("/pricing/point-to-point")({
  head: () => ({
    meta: [
      { title: "Point to Point Rates — NYC Limo Car" },
      { name: "description", content: "Fixed point-to-point transfer rates across NYC. Direct rides, no surge pricing, luxury vehicles." },
      { property: "og:title", content: "Point to Point Rates — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80" },
    ],
  }),
  component: () => (
    <PricingPage
      eyebrow="Point to Point Rates"
      title="Fixed transfer pricing — no surge."
      subtitle="Within Manhattan or across the boroughs, our quoted rate is the price you pay."
      hero="https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80"
      intro="Common Manhattan and inter-borough rates shown below. Tri-state and longer-distance trips priced at booking — typically $3.50–$5.00 per mile depending on vehicle class."
      tiers={[
        { name: "Within Manhattan", price: "$75", unit: "trip", features: ["Sedan from $75", "SUV from $105", "Up to 6 passengers (SUV)", "Direct route", "Same-day booking"] },
        { name: "Inter-Borough", price: "$95", unit: "trip", features: ["Sedan from $95", "SUV from $135", "Tolls included", "Stretch limos available", "All five boroughs"], featured: true },
        { name: "Tri-State", price: "$185", unit: "trip", features: ["NJ, CT, Long Island", "Sedan from $185", "SUV from $235", "Per-mile after 25 mi", "Multi-stop available"] },
      ]}
      notes={[
        "Tolls are included on inter-borough trips; tri-state tolls passed through at cost.",
        "20% gratuity added at billing.",
        "Wait time over 10 minutes billed at $1/min.",
      ]}
    />
  ),
});
