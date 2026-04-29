import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/pricing/airport")({
  head: () => ({
    meta: [
      { title: "NYC Airport Limo Rates | JFK LGA EWR Prices | NYC Limo Car" },
      {
        name: "description",
        content:
          "Flat-rate, all-inclusive NYC airport limousine prices for JFK, LaGuardia and Newark. Meet & greet, 60 min free wait, flight tracking included.",
      },
      { property: "og:title", content: "NYC Airport Limo Rates — JFK · LGA · EWR" },
      { property: "og:description", content: "Flat-rate all-inclusive airport transfer pricing." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80" },
    ],
  }),
  component: AirportPricing,
});

function AirportPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Rates"
        title="NYC Airport Limousine Rates"
        subtitle="Flat-Rate All-Inclusive Transfers — JFK · LGA · EWR"
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
      />

      <InfoBadges items={["Meet & Greet", "60 Min Free Wait", "Flight Tracking", "All-Inclusive"]} />

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

          <p className="mx-auto mt-8 max-w-2xl text-sm italic text-muted-foreground">
            Your card will not be charged until 24 hours before your trip. Confirmation email with Trip Confirmation Number sent within 30 minutes of booking.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
