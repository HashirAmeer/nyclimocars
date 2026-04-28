import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Users, Briefcase, Wine } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — NYC Limo Car" },
      { name: "description", content: "Explore our fleet of luxury sedans, SUVs, stretch limousines, and Sprinter vans for any occasion in NYC." },
      { property: "og:title", content: "Our Fleet — NYC Limo Car" },
      { property: "og:description", content: "Late-model luxury vehicles, immaculately maintained." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80" },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  {
    name: "Lincoln Stretch Limousine",
    type: "Stretch Limo",
    img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&q=80",
    pax: "Up to 8",
    bags: "4 bags",
    perks: ["LED ambient lighting", "Premium sound", "Privacy partition", "Stocked bar"],
  },
  {
    name: "Mercedes-Benz S-Class",
    type: "Executive Sedan",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80",
    pax: "Up to 3",
    bags: "3 bags",
    perks: ["Heated leather", "Wi-Fi hotspot", "Bottled water", "USB charging"],
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    pax: "Up to 6",
    bags: "6 bags",
    perks: ["Captain seats", "Tinted glass", "Spacious cargo", "Wi-Fi"],
  },
  {
    name: "Mercedes Sprinter",
    type: "Executive Van",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
    pax: "Up to 14",
    bags: "12 bags",
    perks: ["Conference seating", "Power outlets", "Premium A/C", "TV screens"],
  },
  {
    name: "BMW 7 Series",
    type: "Executive Sedan",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    pax: "Up to 3",
    bags: "3 bags",
    perks: ["Massage seats", "Panoramic roof", "Refreshments", "Wi-Fi"],
  },
  {
    name: "Chrysler 300 Stretch",
    type: "Stretch Limo",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80",
    pax: "Up to 10",
    bags: "5 bags",
    perks: ["Fiber-optic lighting", "Surround sound", "Mini-bar", "Star ceiling"],
  },
];

const icons = { pax: Users, bags: Briefcase, perks: Wine };

function FleetPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Fleet"
        title="Late-model luxury, immaculately kept."
        subtitle="Every vehicle is detailed before each ride and serviced on a strict schedule. Choose the one that fits your moment."
        image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
      />

      <section className="bg-background py-20">
        <div className="container-luxury grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <article key={v.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                  {v.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">{v.name}</h3>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><icons.pax className="h-4 w-4 text-gold" />{v.pax}</span>
                  <span className="inline-flex items-center gap-1.5"><icons.bags className="h-4 w-4 text-gold" />{v.bags}</span>
                </div>
                <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                  {v.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-navy">
                  Reserve this vehicle
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
