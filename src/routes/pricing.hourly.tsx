import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/pricing/hourly")({
  head: () => ({
    meta: [
      { title: "NYC Hourly Limousine Rates | Per Hour Limo Prices | NYC Limo Car" },
      {
        name: "description",
        content:
          "View NYC Limo Car's all-inclusive hourly limousine rates for all 12 vehicles. Transparent pricing with sales tax, gratuity, credit card fee, and admin fee all included. Book in New York City.",
      },
      { property: "og:title", content: "NYC Hourly Limo Rates — NYC Limo Car" },
      { property: "og:description", content: "All-inclusive hourly rates with full breakdown." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80" },
    ],
  }),
  component: HourlyPricing,
});

function VehicleCalc({ name, pax, bags, hourly }: { name: string; pax: number; bags: number; hourly: number }) {
  const [hours, setHours] = useState(1);
  const flat = hourly * hours;
  const tax = flat * 0.0888;
  const cc = flat * 0.03;
  const grat = flat * 0.20;
  const admin = 3.25;
  const total = flat + tax + cc + grat + admin;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
      <div className="bg-navy px-6 py-5 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1 text-xs text-white/70">{pax} passengers · {bags} luggage</p>
      </div>
      <div className="p-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
        <Link
          to="/contact"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
        >
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

function HourlyPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hourly Rates"
        title="Hourly Limousine Rates — New York City"
        subtitle="All-Inclusive · No Hidden Fees · Select Hours to See Full Breakdown"
        image="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80"
      />

      <InfoBadges
        items={[
          "All-Inclusive Rates",
          "No Hidden Fees",
          "24-Hour Free Cancellation",
          "Card Not Charged Until 24hrs Before Trip",
        ]}
      />

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Live Calculator</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Select a Vehicle &amp; See Your Total
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every total includes the flat hourly rate plus sales tax, credit card fee, 20% gratuity, and the $3.25 admin fee.
          </p>

          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((v) => (
              <VehicleCalc key={v.name} name={v.name} pax={v.pax} bags={v.bags} hourly={v.hourly} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-sm italic text-muted-foreground">
            Rates apply within NYC 5 Boroughs only. For travel outside NYC, contact us for a custom quote.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
