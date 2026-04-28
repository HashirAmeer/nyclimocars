import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { MapPin, DollarSign, Zap } from "lucide-react";

export const Route = createFileRoute("/services/point-to-point")({
  head: () => ({
    meta: [
      { title: "Point to Point Transfer — NYC Limo Car" },
      { name: "description", content: "Direct, fixed-rate luxury transfers between any two New York City locations. No surge pricing." },
      { property: "og:title", content: "Point to Point Transfers — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80" },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Point to Point"
      title="Direct transfers, fixed pricing."
      subtitle="From dinner reservations to broadway curtains — get there directly, in the comfort you deserve."
      hero="https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80"
      intro="When you know where you're going, we get you there — quickly, comfortably, and at a price quoted up front. Perfect for dinner reservations, theater nights, business meetings, or anywhere the journey itself should feel as good as the destination."
      features={[
        "Quoted fixed price — no surprises",
        "Direct route, no shared rides",
        "Choice of vehicle class",
        "On-demand or pre-booked",
        "All five boroughs + tri-state area",
        "Same-day reservations available",
      ]}
      highlights={[
        { icon: DollarSign, title: "No surge pricing", desc: "The rate you see is the rate you pay. Period." },
        { icon: Zap, title: "Fast confirmation", desc: "Booking confirmed within minutes, 24/7." },
        { icon: MapPin, title: "Anywhere in NYC", desc: "Manhattan, Brooklyn, Queens, Bronx, Staten Island." },
      ]}
      pricingHref="/pricing/point-to-point"
    />
  ),
});
