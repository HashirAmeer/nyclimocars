import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Camera, Map, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services/tours")({
  head: () => ({
    meta: [
      { title: "Luxury NYC Tours — NYC Limo Car" },
      { name: "description", content: "Private, chauffeured tours of New York City. Manhattan icons, Brooklyn neighborhoods, and custom itineraries." },
      { property: "og:title", content: "Luxury NYC Tours — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80" },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="City Tours"
      title="See New York the way it deserves."
      subtitle="Private chauffeured tours — from the classic Manhattan loop to bespoke itineraries crafted around you."
      hero="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80"
      intro="A chauffeur who knows every shortcut. A vehicle that's an oasis from the crowds. A tour that pauses where you want to linger. Whether it's your first visit or your fiftieth, our city tours let you experience New York at the pace and depth you choose."
      features={[
        "Classic Manhattan, Brooklyn, & full-NYC routes",
        "Custom itineraries on request",
        "Knowledgeable, English-speaking chauffeurs",
        "Refreshments included",
        "Flexible stop times",
        "Half-day and full-day options",
      ]}
      highlights={[
        { icon: Map, title: "Curated routes", desc: "Iconic landmarks plus hidden corners only locals know." },
        { icon: Camera, title: "Photo stops", desc: "Stop wherever the light is right — you set the pace." },
        { icon: Sparkles, title: "Special occasions", desc: "Anniversaries, proposals, milestones — let us help plan." },
      ]}
      pricingHref="/pricing/tours"
    />
  ),
});
