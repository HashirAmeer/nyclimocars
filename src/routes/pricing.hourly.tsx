import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/ServicePage";

export const Route = createFileRoute("/pricing/hourly")({
  head: () => ({
    meta: [
      { title: "Hourly Rates — NYC Limo Car" },
      { name: "description", content: "Transparent hourly rates for luxury chauffeur service in NYC. Sedans, SUVs, and stretch limousines." },
      { property: "og:title", content: "Hourly Rates — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80" },
    ],
  }),
  component: () => (
    <PricingPage
      eyebrow="Hourly Rates"
      title="By-the-hour pricing, transparently presented."
      subtitle="Three-hour minimum on all hourly bookings. Rates include chauffeur, fuel, and bottled water."
      hero="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80"
      intro="Choose the vehicle that suits your party and occasion. All rates are per hour, with a 3-hour minimum. Tolls, parking, and gratuity are billed separately."
      tiers={[
        { name: "Executive Sedan", price: "$95", unit: "hour", features: ["Up to 3 passengers", "3 luggage pieces", "Mercedes S-Class or BMW 7", "Wi-Fi & bottled water", "3-hour minimum"] },
        { name: "Luxury SUV", price: "$135", unit: "hour", features: ["Up to 6 passengers", "6 luggage pieces", "Cadillac Escalade", "Captain seats", "3-hour minimum"], featured: true },
        { name: "Stretch Limousine", price: "$195", unit: "hour", features: ["Up to 8 passengers", "Lincoln or Chrysler stretch", "Bar & ambient lighting", "Premium sound", "4-hour minimum"] },
      ]}
      notes={[
        "Tolls, parking, and 20% gratuity are added at billing.",
        "Holiday and peak-event rates may apply (NYE, prom, marathon weekend).",
        "Cancellation: free up to 24 hours before pickup.",
      ]}
    />
  ),
});
