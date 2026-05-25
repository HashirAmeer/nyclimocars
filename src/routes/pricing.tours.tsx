import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute("/pricing/tours")({
  head: () => ({
    meta: [
      { title: "NYC Limo Tour Rates | Private Sightseeing Tour Prices | NY City Limousine" },
      {
        name: "description",
        content:
          "View NY City Limousine's private sightseeing tour rates. All-inclusive packages with vehicle, chauffeur, taxes, gratuity & complimentary beverages. 2 to 8-hour tour pricing.",
      },
      { property: "og:title", content: "NYC Private Limousine Tour Rates" },
      { property: "og:description", content: "All-inclusive 2 / 4 / 6 / 8-hour tour packages." },
      { property: "og:image", content: "https://images.pexels.com/photos/28680391/pexels-photo-28680391.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: ToursPricing,
});
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";

function TourVehicleCalc({ name, pax, bags, tour2, tour4, tour6, tour8 }: {
  name: string;
  pax: number;
  bags: number;
  tour2: number;
  tour4: number;
  tour6: number;
  tour8: number;
}) {
  const [duration, setDuration] = useState(2);
  const baseRate = (() => {
    switch (duration) {
      case 2:
        return tour2;
      case 4:
        return tour4;
      case 6:
        return tour6;
      case 8:
        return tour8;
      default:
        return tour2;
    }
  })();
  const flat = baseRate;
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
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select Duration</label>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mx-auto mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none"
        >
          {[2, 4, 6, 8].map((h) => (
            <option key={h} value={h}>
              {h} {h === 2 ? "Hours" : h === 8 ? "Hours (Full Day)" : "Hours"}
            </option>
          ))}
        </select>
        <table className="mt-5 w-full text-left text-sm">
          <tbody>
            <Row label={`Base Rate (${duration}h)`} value={fmt(flat)} />
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

function ToursPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tour Rates"
        title="NYC Limousine Tour Rates"
        subtitle="All-Inclusive Tour Packages — Vehicle · Chauffeur · Taxes · Gratuity · Beverages"
        image="https://images.pexels.com/photos/28680391/pexels-photo-28680391.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <InfoBadges
        items={[
          "All-Inclusive",
          "Complimentary Beverages",
          "Champagne in Limousines",
          "Min 2-Hour Booking",
        ]}
      />

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Tour Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Private Tour Packages — All-Inclusive
          </h2>

          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((v) => (
              <TourVehicleCalc
                key={v.name}
                name={v.name}
                pax={v.pax}
                bags={v.bags}
                tour2={v.tour2}
                tour4={v.tour4}
                tour6={v.tour6}
                tour8={v.tour8}
              />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-sm italic text-muted-foreground">
            All tour rates are all-inclusive: vehicle, chauffeur, taxes, tolls, gratuity, and complimentary beverages.
            Champagne included inside limousines. Minimum 2-hour booking required.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}

export { ToursPricing as component };
