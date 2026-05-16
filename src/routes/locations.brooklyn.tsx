import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/brooklyn")({
  head: () => ({
    meta: [
      { title: "Brooklyn Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Brooklyn. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: BrooklynPage,
});

const FAQ = [
  {
    q: "How long from Brooklyn to JFK Airport?",
    a: "Depending on your specific Brooklyn neighbourhood, JFK can be as close as 15 minutes (East Flatbush, Canarsie) or up to 30–40 minutes (Brooklyn Heights, DUMBO) by car.",
  },
  {
    q: "Do you cover all Brooklyn neighbourhoods?",
    a: "Yes. We serve every Brooklyn neighbourhood including those not on major subway lines. Contact us for pickups in Gerritsen Beach, Marine Park, or other outer Brooklyn areas.",
  }
];

function BrooklynPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Brooklyn Car Service — Premium Ground Transportation Across NYC's Largest and Most Diverse Borough"
        subtitle="Fixed-rate transfers from Williamsburg to Bay Ridge and beyond."
        image="https://images.unsplash.com/photo-1490644659564-884144579323?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Brooklyn is New York City's most populous borough —
            home to Williamsburg, DUMBO, Park Slope, Brooklyn Heights,
            Bay Ridge, and dozens of distinct neighbourhoods. It is also
            the borough closest to JFK Airport, with many Brooklyn
            addresses just 15–30 minutes from the terminals. Our Brooklyn
            car service covers the entire borough with fixed-rate pricing
            and chauffeurs who know every Brooklyn-Queens Expressway
            on-ramp, every BQE bypass route during peak hours, and
            every wedding venue from The River Cafe to Brooklyn Winery.
          </p>
        </div>
      </section>

      {/* Wedding Transportation in Brooklyn */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Wedding Transportation in Brooklyn</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Brooklyn is home to some of New York's most celebrated
              wedding venues. The River Cafe beneath the Brooklyn Bridge,
              Vinegar Hill House, Brooklyn Winery, and Prospect Park venues
              all require precise vehicle staging and guest shuttle
              coordination. Our wedding fleet covers all Brooklyn venues
              with full bridal party and guest shuttle services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Brooklyn Neighbourhoods We Cover</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Williamsburg — tech and creative industry pickups",
                  "DUMBO — corporate and residential transfers",
                  "Park Slope — family and residential bookings",
                  "Brooklyn Heights — luxury residential and hotel pickups",
                  "Bay Ridge — airport transfers and point-to-point",
                  "Crown Heights, Flatbush, Bed-Stuy — full coverage"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Brooklyn</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "JFK", time: "15–30 minutes", details: "from many Brooklyn neighbourhoods — fastest borough to JFK" },
                  { dest: "LGA", time: "30–50 minutes", details: "via BQE and Grand Central Parkway" },
                  { dest: "EWR", time: "45–75 minutes", details: "via BQE and either Holland or Goethals Bridge" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Brooklyn</h2>
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

      <BookingCTA buttonText="Book Your Brooklyn Ride" />
    </PageShell>
  );
}
