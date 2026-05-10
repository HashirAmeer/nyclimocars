import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { InfoBadges } from "@/components/InfoBadges";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/pricing/point-to-point")({
  head: () => ({
    meta: [
      { title: "Point-to-Point Limo Rates NYC | Direct Transfer Prices | NY City Limousine" },
      {
        name: "description",
        content:
          "NY City Limousine flat-rate point-to-point limo prices for direct transfers across New York City. Transparent base rates and per-mile pricing — all-inclusive.",
      },
      { property: "og:title", content: "NYC Point-to-Point Limo Rates" },
      { property: "og:description", content: "Flat-rate direct transfers across NYC and Tri-State." },
      { property: "og:image", content: "https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: P2PPricing,
});

function P2PPricing() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Point-to-Point Rates"
        title="Point-to-Point Limousine Rates"
        subtitle="Flat-Rate Direct Transfers — Transparent All-Inclusive Pricing"
        image="https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <InfoBadges items={["Flat-Rate Pricing", "On-Time Guarantee", "All-Inclusive", "24/7 Service"]} />

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Transparent Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Direct Transfer Rates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Base rate covers the trip start; per-mile billed for distance traveled. All taxes &amp; gratuity included.
          </p>

          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">Base Rate</th>
                  <th className="px-4 py-4 text-gold">Per Mile</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.baseRate)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.perMile)}/mi</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm italic text-muted-foreground">
            Your card will not be charged until 24 hours before your trip. Final estimated price confirmed via email.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
