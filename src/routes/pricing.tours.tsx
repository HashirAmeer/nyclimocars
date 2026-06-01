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
import { Users, Luggage } from "lucide-react";

function TourVehicleCalc({ name, pax, bags, tour2, tour4, tour6, tour8, image }: {
  name: string;
  pax: number;
  bags: number;
  tour2: number;
  tour4: number;
  tour6: number;
  tour8: number;
  image: string;
}) {
  const [duration, setDuration] = useState(2);
  const flat = (() => {
    switch (duration) {
      case 2: return tour2;
      case 4: return tour4;
      case 6: return tour6;
      case 8: return tour8;
      default: return tour2;
    }
  })();
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
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select Duration</label>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none"
        >
          {[2, 4, 6, 8].map((h) => (
            <option key={h} value={h}>
              {h} {h === 2 ? "Hours" : h === 8 ? "Hours (Full Day)" : "Hours"}
            </option>
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

          <div className="mx-auto mt-12 space-y-8">
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
                image={v.image}
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
