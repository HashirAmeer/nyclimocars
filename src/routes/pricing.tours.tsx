import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/pricing/tours")({
  head: () => ({
    meta: [
      { title: "NYC Limo Tour Rates | Private Sightseeing Tour Prices | NYC Limo Car" },
      {
        name: "description",
        content:
          "View NYC Limo Car's private sightseeing tour rates. All-inclusive packages with vehicle, chauffeur, taxes, gratuity & complimentary beverages. 2 to 8-hour tour pricing.",
      },
      { property: "og:title", content: "NYC Private Limousine Tour Rates" },
      { property: "og:description", content: "All-inclusive 2 / 4 / 6 / 8-hour tour packages." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80" },
    ],
  }),
  component: ToursPricing,
});

function ToursPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tour Rates"
        title="NYC Limousine Tour Rates"
        subtitle="All-Inclusive Tour Packages — Vehicle · Chauffeur · Taxes · Gratuity · Beverages"
        image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80"
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

          <div className="mx-auto mt-10 max-w-6xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4 text-gold">2 Hours</th>
                  <th className="px-4 py-4 text-gold">4 Hours</th>
                  <th className="px-4 py-4 text-gold">6 Hours</th>
                  <th className="px-4 py-4 text-gold">8 Hours (Full Day)</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour2)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour4)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour6)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour8)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-sm italic text-muted-foreground">
            All tour rates are all-inclusive: vehicle, chauffeur, taxes, tolls, gratuity, and complimentary beverages.
            Champagne included inside limousines. Minimum 2-hour booking required.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
