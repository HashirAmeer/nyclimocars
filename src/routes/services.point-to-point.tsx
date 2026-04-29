import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { MapPin, BadgeDollarSign, ShieldCheck, Car, UserCheck, Globe, Check } from "lucide-react";

export const Route = createFileRoute("/services/point-to-point")({
  head: () => ({
    meta: [
      { title: "NYC Point-to-Point Limo Service | Direct Transfers New York | NYC Limo Car" },
      { name: "description", content: "NYC Limo Car's point-to-point limousine service — flat-rate direct transfers anywhere in NYC and the Tri-State Area. On-time guarantee, professional chauffeurs, all-inclusive pricing." },
      { property: "og:title", content: "NYC Point-to-Point Limousine Service" },
      { property: "og:description", content: "Flat-rate direct transfers across NYC & the Tri-State Area." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80" },
    ],
  }),
  component: P2PPage,
});

const FEATURES = [
  { icon: MapPin, title: "Direct Door-to-Door", desc: "Straight from your pickup to your destination with no unnecessary stops." },
  { icon: BadgeDollarSign, title: "Flat-Rate Pricing", desc: "No meters, no surge pricing — transparent cost upfront." },
  { icon: ShieldCheck, title: "On-Time Guarantee", desc: "Our chauffeurs arrive early so you are never late." },
  { icon: Car, title: "Luxury Fleet", desc: "Choose from sedans to coach buses for any group size." },
  { icon: UserCheck, title: "Professional Chauffeurs", desc: "Experienced, courteous, knowledgeable about NYC routes." },
  { icon: Globe, title: "Tri-State Coverage", desc: "NYC, New Jersey, Connecticut, Long Island & beyond." },
];

const OCCASIONS = ["Business Meetings","Airport Transfers","Hotel Pick-Up & Drop-Off","Corporate Events","Wedding Transportation","Restaurant & Dining","Theater & Entertainment","Sports Events","Special Occasions"];

const INCLUDED = [
  "Professional licensed chauffeur",
  "Flat-rate transparent pricing",
  "All-inclusive (taxes & gratuity included)",
  "On-time guaranteed arrival",
  "Complimentary water & soft drinks",
  "24-hour free cancellation",
];

function P2PPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Point to Point"
        title="NYC Point-to-Point Limousine Service"
        subtitle="Flat-Rate Direct Transfers Across New York City & the Tri-State Area"
        image="https://images.unsplash.com/photo-1502920514313-52581002a659?w=1600&q=80"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Point-to-Point Ride
          </Link>
        </div>
      </div>

      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experience convenience and luxury with NYC Limo Car's Point-to-Point Limousine Service. Whether you're headed to a business meeting, a special event, a hotel, or a night on the town — we provide unparalleled direct transfer solutions tailored to your needs. No meters, no surge pricing — just transparent flat rates and a guaranteed on-time arrival every single time.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Key Features</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">Perfect For</h2>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {OCCASIONS.map((t) => (
              <span key={t} className="rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-navy">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-navy">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MiniFleet />

      {/* Rates Table */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Point-to-Point Limousine Rates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Base rate covers the trip start; per-mile billed for distance traveled. All-inclusive.
          </p>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">Base Rate</th>
                  <th className="px-4 py-4 text-gold">Per Mile</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.baseRate)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.perMile)}/mi</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
