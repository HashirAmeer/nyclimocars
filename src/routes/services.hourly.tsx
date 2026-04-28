import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Clock, Star, Users } from "lucide-react";

export const Route = createFileRoute("/services/hourly")({
  head: () => ({
    meta: [
      { title: "Hourly Chauffeur Service — NYC Limo Car" },
      { name: "description", content: "By-the-hour luxury chauffeur in NYC. Perfect for meetings, events, shopping, and nights out." },
      { property: "og:title", content: "Hourly Chauffeur Service — NYC Limo Car" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80" },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Hourly Service"
      title="Your chauffeur, by the hour."
      subtitle="Flexible, on-demand luxury for any rhythm your day requires."
      hero="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80"
      intro="Whether you're hopping between meetings, shopping along Fifth Avenue, or making a night of it in the Village, our hourly chauffeur service gives you a private vehicle and a polished driver who waits, opens doors, and gets you where you need to be — without the stress of parking or hailing."
      features={[
        "3-hour minimum, billed by the hour after",
        "Dedicated chauffeur for the entire booking",
        "Bottled water & climate control",
        "Multiple stops at no additional charge",
        "Last-minute reservations welcomed",
        "Wi-Fi available on most vehicles",
      ]}
      highlights={[
        { icon: Clock, title: "Total flexibility", desc: "Change plans on the fly. Your driver follows your lead." },
        { icon: Users, title: "Group friendly", desc: "Sedans, SUVs, and Sprinters available for up to 14 guests." },
        { icon: Star, title: "5-star chauffeurs", desc: "Background-checked and trained in luxury hospitality." },
      ]}
      pricingHref="/pricing/hourly"
    />
  ),
});
