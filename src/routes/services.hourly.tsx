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
      { title: "Hourly Limo Service NYC | Black Car by the Hour" },
      { name: "description", content: "Hourly limousine and black car service in NYC. Retain a TLC-licensed chauffeur for meetings, city tours, events or full-day use. Minimum 2 hours. Book online now." },
      { property: "og:title", content: "Hourly Limo Service NYC | Black Car by the Hour" },
      { property: "og:description", content: "Hourly limousine and black car service in NYC. Retain a TLC-licensed chauffeur for meetings, city tours, events or full-day use. Minimum 2 hours. Book online now." },
      { property: "og:image", content: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600" },
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
      <div className="h-44 w-full bg-silver/10 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-contain" loading="lazy" />
      </div>
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
        title="Hourly Limo Service NYC — A Dedicated Chauffeur on Your Schedule"
        subtitle="A dedicated TLC-licensed chauffeur and luxury vehicle for as many hours as your day requires."
        image="https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Five meetings across three boroughs and a client dinner 
            that evening — a point-to-point car will not hold your 
            day together. You need a driver who is there between every 
            stop, ready when you are, routing around traffic in real time. 
            Our hourly limo service in NYC gives you a dedicated, 
            TLC-licensed chauffeur and a late-model luxury vehicle 
            for as many hours as your day requires.
          </p>
        </div>
      </section>

      {/* What the hourly service covers */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">What the Hourly Service Covers</h2>
          <div className="mx-auto mt-8 max-w-4xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The hourly service is the most flexible option in our fleet. 
              You retain an exclusive vehicle and chauffeur for a set number 
              of hours. During that time, the car is yours — you set the 
              stops, the pace, and the destinations. No per-trip charges, 
              no waiting fees, no rerouting costs for additional stops.
            </p>
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {[
                "Corporate road shows and multi-meeting executive days",
                "City sightseeing — Central Park, Brooklyn Bridge, The High Line",
                "Shopping trips along Fifth Avenue, Madison Avenue, and SoHo",
                "Event days — Broadway shows, galas, charity dinners",
                "Full-day client entertainment with multiple venue transitions",
                "Hotel waiting service for visiting executives or VIP guests",
                "Weddings and special events requiring a vehicle on standby",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Hourly</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Pricing Structure</h2>
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
          <h3 className="text-2xl font-semibold text-navy md:text-3xl">Ideal For</h3>
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
          <h3 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h3>
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

      {/* Pricing Note */}
      <section className="bg-background py-12">
        <div className="container-luxury mx-auto">
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-8 text-center text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing Note</p>
            <p className="mt-4 text-lg text-white/90">
              All hourly rates are flat-rate and fixed — no surge charges 
              for peak hours, no tolls billed separately, no hidden fees. 
              Minimum booking is two hours. Gratuity of 15–20% is customary 
              and not included in the hourly rate.
            </p>
            <p className="mt-3 text-xs text-white/60">
              Hourly service covers all five NYC boroughs. Travel outside NYC may incur additional mileage charges.
            </p>
          </div>
        </div>
      </section>

      <MiniFleet />

      {/* Calculator */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Live Calculator</p>
          <h3 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Hourly Limousine Rates — Select Your Vehicle &amp; Hours
          </h3>
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

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              {
                q: "What is the minimum booking for hourly limo service?",
                a: "The minimum booking is two hours. There is no maximum.",
              },
              {
                q: "Can I add hours on the day?",
                a: "Yes, subject to fleet availability. Call our dispatch line and we will extend at the same hourly rate.",
              },
              {
                q: "Does the hourly rate include all boroughs?",
                a: "Yes. Hourly service covers all five NYC boroughs. Travel to Long Island, New Jersey, or Connecticut may have additional mileage charges — confirm at booking.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Q: {faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
