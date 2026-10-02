import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/financial-district")({
  head: () => ({
    meta: [
      { title: "Financial District Car Service NYC | Limo & Black Car FiDi" },
      { name: "description", content: "Premium car service in Financial District. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: FinancialDistrictPage,
});

const FAQ = [
  {
    q: "Where do cars pick up in the Financial District?",
    a: "Our chauffeurs provide exact curbside staging instructions for each pickup address. For buildings with loading dock restrictions, we stage on the nearest open cross-street and text you exact directions.",
  }
];

function FinancialDistrictPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Financial District Car Service — Ground Transportation for New York's Corporate Core"
        subtitle="Executive car service designed for precision and reliability."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            The Financial District is the tightest corporate density in
            New York City. Goldman Sachs at 200 West Street, JPMorgan at
            383 Madison, and hundreds of hedge funds, law firms, and
            financial institutions concentrate their executive movement
            into a grid of narrow streets with severe loading constraints.
            Early-morning pre-market pickups and post-close late-night
            airport runs are our most frequent FiDi bookings. EWR via
            the Holland Tunnel is the fastest airport from this location.
          </p>
        </div>
      </section>

      {/* Corporate Transportation in FiDi */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Corporate Transportation in FiDi</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Loading on Wall Street and Broad Street requires precise
              timing — our chauffeurs stage correctly and communicate
              exact curbside instructions to avoid delays.
            </p>
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Financial District Locations</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Goldman Sachs HQ — 200 West Street",
                  "NYSE — 11 Wall Street",
                  "One World Trade Center",
                  "Brookfield Place",
                  "Battery Park City residential buildings",
                  "The Ritz-Carlton Battery Park"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from the Financial District</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "EWR", time: "25–40 minutes", details: "via Holland Tunnel" },
                  { dest: "JFK", time: "30–50 minutes", details: "via BQE" },
                  { dest: "LGA", time: "35–55 minutes", details: "via Queens Midtown Tunnel" }
                ].map(at => (
                  <div key={at.dest} className="border-b border-border pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-navy">{at.dest}</span>
                      <span className="text-gold font-bold">{at.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{at.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Financial District</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">JFK</th>
                  <th className="px-4 py-4">LGA</th>
                  <th className="px-4 py-4">EWR</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.slice(0, 6).map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-background" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 font-bold text-navy">{fmt(v.jfk)}</td>
                    <td className="px-4 py-3 font-bold text-navy">{fmt(v.lga)}</td>
                    <td className="px-4 py-3 font-bold text-navy">{fmt(v.ewr)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            * All-inclusive flat rates. No hidden fees.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold" />
          <Accordion type="single" collapsible className="mt-10 text-left">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card mb-3 px-5">
                <AccordionTrigger className="text-base font-medium text-navy hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <JsonLd data={faqSchema(FAQ)} />

      <BookingCTA buttonText="Book Your FiDi Ride" />
    </PageShell>
  );
}
