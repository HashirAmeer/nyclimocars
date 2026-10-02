import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/long-island")({
  head: () => ({
    meta: [
      { title: "Long Island Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Long Island. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: LongIslandPage,
});

const FAQ = [
  {
    q: "How long is the drive from Long Island to JFK Airport?",
    a: "From most Nassau County addresses, JFK is 30–50 minutes. From western Suffolk County, allow 45–70 minutes. From eastern Suffolk / Hamptons area, allow 90–120 minutes.",
  }
];

function LongIslandPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Long Island Car Service — Premier Limo & Black Car Service Across Nassau and Suffolk Counties"
        subtitle="Fixed-rate luxury transportation across the entire island."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Long Island extends 118 miles east of New York City, covering
            Nassau County (Garden City, Great Neck, Manhasset, Roslyn) and
            Suffolk County (Huntington, Smithtown, Babylon) before reaching
            the Hamptons on the East End. JFK Airport is the primary
            airport for Long Island residents — often 30–50 minutes from
            Nassau County addresses. Our Long Island car service covers
            the entire island with fixed flat rates and chauffeurs
            who know the Long Island Expressway, Sunrise Highway, and
            the Hamptons' Friday afternoon Expressway alternatives.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">The Hamptons — Peak Season Transfers</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Peak Hamptons demand runs Memorial Day weekend through
              Labor Day. Friday afternoon departures from Manhattan
              to the Hamptons, and Sunday returns, require early-morning
              departures to avoid Expressway delays. We recommend departing
              Manhattan before 1:00 p.m. on Friday afternoons in summer
              and before 2:00 p.m. on Sundays.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Nassau County & Suffolk County Coverage</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Garden City, Manhasset, Great Neck, Roslyn (Nassau)",
                  "Huntington, Smithtown, Babylon, Islip (Suffolk)",
                  "Flat-rate airport transfers to JFK and LGA",
                  "Corporate transfers to Manhattan offices"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Long Island</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "JFK", time: "30–50 minutes", details: "from Nassau County addresses" },
                  { dest: "LGA", time: "35–55 minutes", details: "from northern Nassau County" },
                  { dest: "EWR", time: "60–90 minutes", details: "from most Long Island addresses" }
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

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Long Island</h2>
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

      <BookingCTA buttonText="Book Your Long Island Ride" />
    </PageShell>
  );
}
