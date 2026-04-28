import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/ServicePage";

export const Route = createFileRoute("/pricing/tours")({
  head: () => ({
    meta: [
      { title: "Tour Rates — NYC Limo Car" },
      { name: "description", content: "Private chauffeured tour pricing for New York City. Half-day, full-day, and custom packages." },
      { property: "og:title", content: "Tour Rates — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80" },
    ],
  }),
  component: () => (
    <PricingPage
      eyebrow="Tour Rates"
      title="Private tours, priced to occasion."
      subtitle="Half-day, full-day, or fully custom — all with a private chauffeur, refreshments, and zero rush."
      hero="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80"
      intro="Pricing is per vehicle, not per person. Stop wherever you like, photograph everything, and let your chauffeur handle the rest."
      tiers={[
        { name: "Half-Day Tour", price: "$395", unit: "4 hours", features: ["Sedan or SUV", "Up to 6 passengers", "Classic Manhattan loop", "Bottled water & snacks", "Photo stops included"] },
        { name: "Full-Day NYC", price: "$695", unit: "8 hours", features: ["SUV or Sprinter", "Up to 14 passengers", "Manhattan + Brooklyn + DUMBO", "Lunch stop included", "Custom itinerary available"], featured: true },
        { name: "Custom Tour", price: "Quote", unit: "design", features: ["Multi-day available", "Personal concierge", "Restaurant reservations", "Theater tickets", "Anywhere tri-state"] },
      ]}
      notes={[
        "Admission tickets to attractions not included unless specified.",
        "20% gratuity added at billing.",
        "Multi-day discounts available for 3+ consecutive days.",
        "Custom tours: 7 days advance booking recommended.",
      ]}
    />
  ),
});
