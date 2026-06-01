import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";
import { Users, Luggage } from "lucide-react";

export const Route = createFileRoute("/pricing/hourly")({
  head: () => ({
    meta: [
      { title: "NYC Hourly Limousine Rates | Per Hour Limo Prices | NY City Limousine" },
      {
        name: "description",
        content:
          "View NY City Limousine's all-inclusive hourly limousine rates for all 11 vehicles. Transparent pricing with sales tax, gratuity, credit card fee, and admin fee all included. Book in New York City.",
      },
      { property: "og:title", content: "NYC Hourly Limo Rates — NY City Limousine" },
      { property: "og:description", content: "All-inclusive hourly rates with full breakdown." },
      { property: "og:image", content: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: HourlyPricing,
});

function VehicleCalc({ name, pax, bags, hourly, image }: { name: string; pax: number; bags: number; hourly: number; image: string }) {
  const [hours, setHours] = useState(1);
  const flat = hourly * hours;
  const tax = flat * 0.0888;
  const cc = flat * 0.03;
  const grat = flat * 0.20;
  const admin = 3.25;
  const total = flat + tax + cc + grat + admin;

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col md:flex-row">
      <div className="bg-secondary/10 p-8 md:w-1/2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border">
        <img src={image} alt={name} className="w-full max-w-[280px] object-contain drop-shadow-xl" />
        <h4 className="mt-6 text-2xl font-bold text-navy">{name}</h4>
        <div className="mt-4 flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-gold" />
            <span className="font-medium">{pax} Passengers</span>
          </div>
          <div className="flex items-center gap-2">
            <Luggage className="h-5 w-5 text-gold" />
            <span className="font-medium">{bags} Luggage</span>
          </div>
        </div>
      </div>
      <div className="p-8 md:w-1/2 flex flex-col justify-center">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select Number of Hours
        </label>
        <select
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h}>{h} {h === 1 ? "Hour" : "Hours"}</option>
          ))}
        </select>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between border-b border-border/50 pb-2">
            <span className="text-muted-foreground">Base Rate</span>
            <span className="font-medium text-navy">{fmt(flat)}</span>
          </div>
          <div className="flex justify-between border-b border-border/50 pb-2">
            <span className="text-muted-foreground">Ride Operations (20%)</span>
            <span className="font-medium text-navy">{fmt(grat)}</span>
          </div>
          <div className="flex justify-between border-b border-border/50 pb-2">
            <span className="text-muted-foreground">Transaction Fee (3%)</span>
            <span className="font-medium text-navy">{fmt(cc)}</span>
          </div>
          <div className="flex justify-between border-b border-border/50 pb-2">
            <span className="text-muted-foreground">State Tax (8.88%)</span>
            <span className="font-medium text-navy">{fmt(tax)}</span>
          </div>
          <div className="flex justify-between border-b border-border/50 pb-2">
            <span className="text-muted-foreground">Transit Surcharge</span>
            <span className="font-medium text-navy">{fmt(admin)}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="text-lg font-bold text-gold">Total Fare</span>
            <span className="text-xl font-bold text-gold">{fmt(total)}</span>
          </div>
        </div>

        <p className="mt-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
          NO HIDDEN FEES
        </p>

        <Link
          to="/contact"
          className="mt-6 w-full rounded-full bg-gold py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-navy hover:shadow-lg block"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

function HourlyPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hourly Rates"
        title="Hourly Limousine Rates — New York City"
        subtitle="All-Inclusive · No Hidden Fees · Select Hours to See Full Breakdown"
        image="https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600"
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

          <div className="mx-auto mt-12 space-y-8">
            {FLEET.map((v) => (
              <VehicleCalc key={v.name} name={v.name} pax={v.pax} bags={v.bags} hourly={v.hourly} image={v.image} />
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
