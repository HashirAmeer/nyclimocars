import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Plane, ShieldCheck, Clock } from "lucide-react";

export const Route = createFileRoute("/services/airport")({
  head: () => ({
    meta: [
      { title: "Airport Transfer Service — JFK, LGA, EWR | NYC Limo Car" },
      { name: "description", content: "Luxury airport transfers to and from JFK, LaGuardia, and Newark. Flight tracking, meet & greet, fixed pricing." },
      { property: "og:title", content: "Airport Transfer Service — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Airport Service"
      title="Effortless transfers to every NYC airport."
      subtitle="JFK, LaGuardia, Newark — fixed pricing, live flight tracking, and a chauffeur waiting at baggage claim."
      hero="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
      intro="Skip the rideshare scramble. Our chauffeurs monitor your flight in real time, adjust for delays automatically, and meet you inside the terminal with your name on a placard. Luggage handled, water poured, route already planned."
      features={[
        "Complimentary flight tracking",
        "Inside-terminal meet & greet",
        "30 minutes free wait time on arrivals",
        "Fixed, all-inclusive pricing",
        "Tolls and gratuity options included",
        "Child seats available on request",
      ]}
      highlights={[
        { icon: Plane, title: "All NYC airports", desc: "JFK, LGA, EWR, HPN, ISP — plus FBOs for private jets." },
        { icon: Clock, title: "Always on time", desc: "We track your flight. Delays don't surprise us." },
        { icon: ShieldCheck, title: "Safe & insured", desc: "Fully licensed TLC chauffeurs, $5M liability coverage." },
      ]}
      pricingHref="/pricing/airport"
    />
  ),
});
