import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Clock, Car, UserCheck, MapPin, GlassWater, BadgeDollarSign, Check } from "lucide-react";

export const Route = createFileRoute("/services/hourly")({
  head: () => ({
    meta: [
      { title: "NYC Hourly Limousine Service | Per Hour Limo Hire New York City | NYC Limo Car" },
      { name: "description", content: "Book NYC Limo Car's hourly limousine service in New York City. Flexible per-hour limo hire with professional chauffeurs for business meetings, events & city tours. Transparent all-inclusive pricing." },
      { property: "og:title", content: "NYC Hourly Limousine Service — NYC Limo Car" },
      { property: "og:description", content: "Flexible per-hour limo hire with a dedicated professional chauffeur in NYC." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80" },
    ],
  }),
  component: HourlyPage,
});

const FEATURES = [
  { icon: Clock, title: "Flexible Booking", desc: "Book from 1 to 12 hours; control your entire itinerary with multiple stops." },
  { icon: Car, title: "Multiple Vehicle Options", desc: "Sedans, SUVs, Mercedes S Class, stretch limousines, vans & buses." },
  { icon: UserCheck, title: "Dedicated Chauffeur", desc: "Your professional driver stays with you for the full duration." },
  { icon: MapPin, title: "Unlimited Stops", desc: "Perfect for meetings, events, or city exploration." },
  { icon: GlassWater, title: "Complimentary Beverages", desc: "Water and soft drinks included; champagne available upon request." },
  { icon: BadgeDollarSign, title: "All-Inclusive Pricing", desc: "No hidden fees; taxes, gratuity, and admin fee all included." },
];

const IDEAL = ["Business Meetings","Corporate Events","City Sightseeing","Special Occasions","Birthday Parties","Bachelor/Bachelorette Parties","Shopping Trips","Multi-Stop NYC Itineraries"];
const INCLUDED = [
  "Professional licensed chauffeur",
  "All-inclusive transparent pricing",
  "Complimentary water & soft drinks",
  "Unlimited stops within booked hours",
  "24-hour free cancellation",
  "Real-time chauffeur tracking",
];

function VehicleCalc({ name, image, pax, bags, hourly }: { name: string; image: string; pax: number; bags: number; hourly: number }) {
  const [hours, setHours] = useState(1);
  const flat = hourly * hours;
  const tax = flat * 0.0888;
  const cc = flat * 0.03;
  const grat = flat * 0.20;
  const admin = 3.25;
  const total = flat + tax + cc + grat + admin;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
      <img src={image} alt={name} className="h-44 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy">{name}</h3>
        <div className="mt-2 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>{pax} passengers</span><span>•</span><span>{bags} bags</span>
        </div>
        <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select Number of Hours
        </label>
        <select
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="mx-auto mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h}>{h} {h === 1 ? "Hour" : "Hours"}</option>
          ))}
        </select>
        <table className="mt-5 w-full text-left text-sm">
          <tbody>
            <Row label={`Flat Hourly Rate (${hours}h × ${fmt(hourly)})`} value={fmt(flat)} />
            <Row label="Sales Tax (8.880%)" value={fmt(tax)} />
            <Row label="Credit Card Fee (3%)" value={fmt(cc)} />
            <Row label="Gratuity (20%)" value={fmt(grat)} />
            <Row label="Admin Fee" value={fmt(admin)} />
            <tr className="border-t-2 border-gold">
              <td className="py-3 font-semibold text-navy">GRAND TOTAL</td>
              <td className="py-3 text-right font-display text-xl font-bold text-gold">{fmt(total)}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold">
          Book {name}
        </Link>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-border/60">
      <td className="py-2 text-xs text-muted-foreground">{label}</td>
      <td className="py-2 text-right text-sm font-medium text-navy">{value}</td>
    </tr>
  );
}

function HourlyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hourly Service"
        title="NYC Hourly Limousine Service"
        subtitle="Flexible Per-Hour Limo Hire with a Dedicated Professional Chauffeur"
        image="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1600&q=80"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Hourly Service
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Elevate your travel experience with NYC Limo Car's Hourly Limousine Service — offering you the flexibility and sophistication you deserve. Whether you need a chauffeured limousine for a series of business meetings, a day of city exploration, or a special event, our hourly service ensures a reliable and luxurious transportation solution tailored entirely to your schedule. You can cruise New York City in style — stopping wherever you like, for as long as you need.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Hourly</p>
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

      {/* Ideal for */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">Ideal For</h2>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {IDEAL.map((t) => (
              <span key={t} className="rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
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

      {/* Important note */}
      <section className="bg-background py-12">
        <div className="container-luxury mx-auto">
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-8 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Important Note</p>
            <p className="mt-3 text-white/90">
              Hourly rates apply for travel within New York City (5 Boroughs: The Bronx, Brooklyn, Manhattan, Queens, Staten Island) only. For travel outside NYC, please contact us for a custom rate.
            </p>
          </div>
        </div>
      </section>

      <MiniFleet />

      {/* Calculator */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Live Calculator</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Hourly Limousine Rates — Select Your Vehicle &amp; Hours
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            All rates are all-inclusive — taxes, gratuity, credit card fee, and admin fee all included.
          </p>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((v) => (
              <VehicleCalc key={v.name} name={v.name} image={v.image} pax={v.pax} bags={v.bags} hourly={v.hourly} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
