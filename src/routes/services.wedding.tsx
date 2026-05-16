import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Heart, Car, UserCheck, GlassWater, MapPin, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/services/wedding")({
  head: () => ({
    meta: [
      { title: "Wedding Limo Service NYC | Luxury Wedding Car Hire" },
      { name: "description", content: "Luxury wedding limousine service in NYC. Stretch limos, SUVs & custom bridal fleets. On-day coordination, red-carpet arrivals, venue expertise. Book your wedding date." },
      { property: "og:title", content: "Wedding Limo Service NYC | Luxury Wedding Car Hire" },
      { property: "og:description", content: "Luxury wedding limousine service in NYC. Stretch limos, SUVs & custom bridal fleets. On-day coordination, red-carpet arrivals, venue expertise. Book your wedding date." },
      { property: "og:image", content: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: WeddingPage,
});

const FEATURES = [
  { icon: Heart, title: "Bridal Party Transportation", desc: "Full fleet available for bride, groom, and entire wedding party." },
  { icon: Car, title: "Immaculate Vehicles", desc: "Beautifully maintained and decorated vehicles for your special day." },
  { icon: UserCheck, title: "Professional Chauffeurs", desc: "Formally dressed, punctual, and experienced wedding drivers." },
  { icon: GlassWater, title: "Complimentary Champagne", desc: "Celebrate in style with complimentary champagne service." },
  { icon: MapPin, title: "Any Venue in NYC", desc: "We cover all boroughs and surrounding Tri-State Area." },
  { icon: Clock, title: "Flexible Scheduling", desc: "We work around your wedding timeline perfectly." },
];

const OCCASIONS = ["Bride & Groom Transfer", "Wedding Party", "Guest Transportation", "Rehearsal Dinner", "Bridal Shower", "Honeymoon Airport Transfer"];
const INCLUDED = [
  "Professional licensed chauffeur",
  "Complimentary champagne service",
  "Red carpet service available",
  "Decorated vehicle on request",
  "All-inclusive pricing",
  "24-hour free cancellation",
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

function WeddingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Wedding Service"
        title="Wedding Limousine Service NYC — Arrive at Your Most Important Moment in Flawless Style"
        subtitle="Flawless coordination, on-the-day briefings, and a luxury fleet for your most important celebration."
        image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Wedding Limo
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Your wedding day timeline is the most logistically complex 
            schedule most people ever manage — hair, makeup, photos, 
            ceremony, reception, and a dozen family members who all 
            need to be somewhere at a specific time. One late car creates 
            a cascade of delays you cannot recover. Our NYC wedding 
            limousine service is built to be the one part of your day 
            that runs perfectly, with on-the-day chauffeur briefings, 
            bridal party coordination, and a fleet chosen for your 
            venue and style.
          </p>
        </div>
      </section>

      {/* Wedding Venues */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Wedding Transportation for Every NYC Venue & Style</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              New York City's wedding venues span the full spectrum — 
              from grand ballrooms at The Plaza and Cipriani 42nd Street 
              to waterfront celebrations in Brooklyn, vineyard estates 
              in the Hudson Valley, and intimate loft ceremonies in Tribeca.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our chauffeurs have worked weddings at many of New York's 
              premier venues. They know the most photogenic arrival entrance 
              at Oheka Castle, the staging area at The River Cafe in Brooklyn, 
              and the access lane at Pier 60 at Chelsea Piers.
            </p>
            <p className="mt-4 text-lg font-semibold text-navy">
              We serve weddings across all five boroughs, Long Island, 
              the Hamptons, the Hudson Valley, New Jersey, and Connecticut.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Key Features</h3>
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

      {/* Wedding Fleet Options */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Wedding Fleet Options</h2>
          <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Stretch Limousines",
                desc: "Classic stretch limousines seat 6–10 passengers and remain the definitive wedding vehicle. Our stretch limousines feature leather interiors, champagne service, privacy partitions, and red-carpet deployment on arrival.",
              },
              {
                title: "Luxury SUVs (Cadillac Escalade)",
                desc: "Full-size luxury SUVs offer a modern, elegant alternative — particularly popular for couples with a contemporary aesthetic. Seat up to 6 passengers with luggage, easier to access in formal attire, and photograph exceptionally well.",
              },
              {
                title: "Sprinter Vans (Bridal Party & Guest Transfers)",
                desc: "A luxury Sprinter van seats 12–14 passengers — ideal for bridal party transportation and guest shuttles. Our Sprinters are configured with passenger-first interiors.",
              },
              {
                title: "Executive Coaches (Large Guest Groups)",
                desc: "For weddings with 20–50 guests requiring group transportation, our executive coaches provide a seamless, professional experience.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
                <h3 className="text-xl font-bold text-navy">{f.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-the-Day Planning */}
      <section className="bg-navy py-20 text-white">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-gold">On-the-Day Wedding Transportation Planning</h2>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-lg leading-relaxed text-white/90">
              Every wedding booking includes a pre-event consultation 
              with your chauffeur team leader. We review the full 
              day's timeline: pickup locations, ceremony venue, 
              photo stops, reception arrival, and late-night departures.
            </p>
            <p className="mt-6 text-sm text-white/70 italic">
              We ask that all wedding bookings are confirmed no later 
              than 2 weeks before the event, with a final itinerary 
              provided 5 days prior. For peak season weddings 
              (May–June, September–October), book 8–12 weeks in advance.
            </p>
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

      {/* Important note */}
      <section className="bg-background py-12">
        <div className="container-luxury mx-auto">
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-8 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Important Note</p>
            <p className="mt-3 text-white/90">
              Hourly rates apply for travel within New York City (5 Boroughs: The Bronx, Brooklyn, Manhattan, Queens, Staten Island) only. For travel outside NYC, please contact us for a custom rate. Wedding packages can be customized to fit your specific timeline and needs.
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
            Wedding Limousine Rates — Select Your Vehicle &amp; Hours
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
                q: "How many limousines do I need for my wedding?",
                a: "A typical NYC wedding uses 1 stretch limo or SUV for the bride and immediate family, 1 additional vehicle for the groom's party, and 1–2 Sprinter vans for bridal party and close guests.",
              },
              {
                q: "Can I view the vehicle before my wedding?",
                a: "Yes. We welcome pre-wedding vehicle viewings by appointment 2–4 weeks before your wedding date.",
              },
              {
                q: "Do you provide champagne on wedding vehicles?",
                a: "Champagne service is available in closed, partitioned vehicles in compliance with NYC TLC regulations.",
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
