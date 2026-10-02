import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/queens")({
  head: () => ({
    meta: [
      { title: "Queens Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Queens. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: QueensPage,
});

const FAQ = [
  {
    q: "How close is Queens to JFK Airport?",
    a: "Very close. From Jamaica and South Jamaica, JFK is just 5–15 minutes. From Astoria, allow 20–35 minutes via the BQE and Van Wyck Expressway.",
  }
];

function QueensPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Queens Car Service — Expert Ground Transportation Across NYC's Most Diverse Borough — Home to JFK and LGA"
        subtitle="Home to JFK and LaGuardia — we know every airport access route."
        image="https://images.unsplash.com/photo-1534430480872-3498386e7a56?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Queens is home to John F. Kennedy and LaGuardia airports —
            which means local knowledge is essential for every pickup.
            Our Queens car service covers Flushing, Astoria, Long Island
            City, Jamaica, Forest Hills, and every neighbourhood in between.
            For Queens residents, airport transfers to JFK can be as short
            as 10–25 minutes and LGA as short as 10–20 minutes — the
            shortest airport travel times of any NYC borough.
          </p>
        </div>
      </section>

      {/* US Open & Citi Field Event Transportation */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">US Open & Citi Field Event Transportation</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              The USTA Billie Jean King National Tennis Center hosts the
              US Open each August and September — generating peak demand
              for car service in Flushing and across Queens. Book well
              in advance for US Open match days. Citi Field (Mets home
              games) creates similar demand from April to October.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Queens Locations We Cover</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Flushing — USTA Billie Jean King National Tennis Center, Citi Field, Flushing Meadows-Corona Park",
                  "Astoria — residential and hotel pickups",
                  "Long Island City — corporate and residential",
                  "Jamaica — JFK-adjacent pickups and hotel transfers",
                  "Forest Hills — residential bookings",
                  "Rockaway Peninsula — seasonal demand"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Queens</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "JFK", time: "10–25 minutes", details: "from most Queens neighbourhoods" },
                  { dest: "LGA", time: "10–20 minutes", details: "from Astoria and northern Queens" },
                  { dest: "EWR", time: "50–75 minutes", details: "via Belt Parkway and Goethals Bridge" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Queens</h2>
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

      <BookingCTA buttonText="Book Your Queens Ride" />
    </PageShell>
  );
}
