import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Plane, HandshakeIcon, Clock, Luggage, GlassWater, Car, Check } from "lucide-react";

export const Route = createFileRoute("/services/airport")({
  head: () => ({
    meta: [
      { title: "NYC Airport Limo Service | JFK LGA EWR Transfers | NY City Limousine" },
      { name: "description", content: "NY City Limousine provides premium airport limousine transfers to JFK, LaGuardia (LGA), Newark (EWR) and Teterboro (TEB). Free meet & greet, real-time flight tracking, all-inclusive rates. 24/7." },
      { property: "og:title", content: "NYC Airport Limousine Service — NY City Limousine" },
      { property: "og:description", content: "JFK · LGA · EWR · TEB — premium transfers available 24/7." },
      { property: "og:image", content: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: AirportPage,
});

const FEATURES = [
  { icon: Plane, title: "Real-Time Flight Tracking", desc: "We monitor all flights; if yours is delayed we adjust automatically." },
  { icon: HandshakeIcon, title: "FREE Meet & Greet", desc: "Chauffeur meets you inside the terminal with a customized name sign." },
  { icon: Clock, title: "60 Minutes Free Wait Time", desc: "No need to rush through baggage — 60 minutes complimentary." },
  { icon: Luggage, title: "Luggage Assistance", desc: "Chauffeur helps with all bags from terminal to vehicle." },
  { icon: GlassWater, title: "Complimentary Beverages", desc: "Water and soft drinks; champagne upon request." },
  { icon: Car, title: "All Vehicle Sizes", desc: "From solo traveler to large groups — we have the perfect vehicle." },
];

const AIRPORTS = [
  { code: "JFK", name: "John F. Kennedy International Airport", area: "Queens, New York", img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80", to: "/airports/jfk" },
  { code: "LGA", name: "LaGuardia Airport", area: "Queens, New York", img: "https://images.unsplash.com/photo-1596200234241-118c89429188?w=900&q=80", to: "/airports/lga" },
  { code: "EWR", name: "Newark Liberty International Airport", area: "Newark, New Jersey", img: "https://images.unsplash.com/photo-1629837905187-57351e065759?w=900&q=80", to: "/airports/ewr" },
  { code: "TEB", name: "Teterboro Airport", area: "Private Aviation, New Jersey", img: "https://images.unsplash.com/photo-1616053429399-53e39b7a4f78?w=900&q=80", to: "/airports/teb" },
];

const INCLUDED = [
  "Meet & greet inside terminal",
  "Personalized name sign",
  "Up to 60 minutes free wait time",
  "Luggage assistance",
  "Real-time flight monitoring",
  "Complimentary water & soft drinks",
  "All-inclusive pricing (taxes & gratuity included)",
  "24-hour free cancellation",
];

function AirportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="NYC Airport Limousine Service"
        subtitle="JFK · LGA · EWR · TEB — Premium Transfers Available 24/7"
        image="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Airport Transfer
          </Link>
        </div>
      </div>

      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experience a seamless and comfortable journey to and from any New York City area airport with NY City Limousine. We provide reliable, stress-free airport limousine transfers ensuring you arrive in style and on time. From the moment you land, our professional chauffeur will be waiting inside the terminal with a personalized name sign — ready to assist with your luggage and escort you to your luxury vehicle.
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

      {/* Airports served */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Airports We Serve</h2>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AIRPORTS.map((a) => (
              <Link key={a.code} to={a.to} className="group overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <img src={a.img} alt={`${a.name} terminal`} className="h-40 w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                <div className="p-6">
                  <p className="font-display text-3xl font-bold text-gold">{a.code}</p>
                  <h3 className="mt-2 text-base font-semibold text-navy group-hover:text-gold transition-colors">{a.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{a.area}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">
            Also serving <strong className="text-navy">SWF — New York Stewart International Airport</strong>.
          </p>
        </div>
      </section>

      {/* Included */}
      <section className="bg-secondary/30 py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Transparent Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Airport Limousine Rates — All-Inclusive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Flat rates to and from JFK, LaGuardia (LGA), and Newark (EWR).
          </p>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">JFK</th>
                  <th className="px-4 py-4 text-gold">LGA</th>
                  <th className="px-4 py-4 text-gold">EWR</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.jfk)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.lga)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.ewr)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            All rates are all-inclusive. For TEB and SWF airport rates, please contact us directly.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
