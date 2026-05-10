import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MiniFleet } from "@/components/MiniFleet";
import { Plane, ShieldCheck, Clock, Trophy, Car, Check } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/airports/teb")({
  head: () => ({
    meta: [
      { title: "Teterboro Airport Limo Service | TEB Private Aviation Transfers | NY City Limousine" },
      { name: "description", content: "Luxury limousine transfers to and from Teterboro Airport (TEB). Private aviation specialists, discreet VIP service, available 24/7." },
      { property: "og:title", content: "Teterboro Airport Limousine Service — NY City Limousine" },
      { property: "og:description", content: "Luxury transfers to and from Teterboro Airport (TEB)." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1616053429399-53e39b7a4f78?w=1600&q=80" },
    ],
  }),
  component: TEBPage,
});

const FEATURES = [
  { icon: Plane, title: "Private Aviation Specialists", desc: "Expert knowledge of Teterboro FBO terminals and private flight protocols." },
  { icon: ShieldCheck, title: "Discreet Service", desc: "Privacy and confidentiality guaranteed for our most discerning clients." },
  { icon: Clock, title: "Always On Time", desc: "Real-time flight monitoring for private aircraft ensures we are there when you land." },
  { icon: Trophy, title: "VIP Fleet", desc: "Our finest, most immaculately maintained vehicles for a superior travel experience." },
];

const INCLUDED = [
  "FBO terminal meet & greet",
  "Discreet VIP service",
  "Real-time private flight tracking",
  "Luggage assistance",
  "Complimentary premium beverages",
  "All-inclusive pricing (taxes & gratuity included)",
  "24-hour free cancellation",
];

const RATES = [
  { name: "Lincoln Sedan", pax: 3, bags: 3, rate: 110 },
  { name: "Cadillac Sedan", pax: 3, bags: 3, rate: 115 },
  { name: "Chevrolet SUV", pax: 6, bags: 6, rate: 135 },
  { name: "Cadillac Escalade", pax: 6, bags: 6, rate: 145 },
  { name: "Mercedes C Class", pax: 3, bags: 3, rate: 140 },
  { name: "Mercedes S Class", pax: 3, bags: 3, rate: 165 },
  { name: "Black Limousine", pax: 8, bags: 6, rate: 200 },
  { name: "White Stretch Limousine", pax: 7, bags: 6, rate: 200 },
  { name: "Sprinter Van", pax: 14, bags: 12, rate: 245 },
  { name: "Hummer Limousine", pax: 20, bags: 8, rate: 320 },
  { name: "Coach Bus", pax: 50, bags: 50, rate: 650 },
];

function TEBPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="Teterboro Airport Limousine Service"
        subtitle="Teterboro Airport (TEB) — Private Aviation Transfers Available 24/7"
        image="https://images.unsplash.com/photo-1616053429399-53e39b7a4f78?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            NY City Limousine specializes in private aviation transfers to and from Teterboro Airport — the premier private aviation gateway to New York City. Whether you are arriving by private jet or charter flight, our professional chauffeurs provide discreet, punctual, and luxurious ground transportation to any destination.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
              Book TEB Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Key Features</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm border border-border">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-navy">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Teterboro Airport Transfer Rates
          </h2>
          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">TEB Rate</th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-bold text-navy">{fmt(v.rate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
            * Teterboro Airport serves private and charter aviation only. For commercial airport transfers please see JFK, LGA, or EWR pages.
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
            ** All rates are all-inclusive (taxes, gratuity, and tolls included).
          </p>
        </div>
      </section>

      <MiniFleet />
      <BookingCTA />
    </PageShell>
  );
}
