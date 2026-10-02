import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/new-jersey")({
  head: () => ({
    meta: [
      { title: "New Jersey Car Service NYC | Limo & Black Car NJ" },
      { name: "description", content: "Premium car service in New Jersey. Fixed rates from NYC to Hoboken, Jersey City, Princeton, Short Hills & more. TLC-licensed chauffeurs. Book online." },
    ],
  }),
  component: NewJerseyPage,
});

const FAQ = [
  {
    q: "Do you cover all New Jersey counties?",
    a: "Yes. We serve Essex, Bergen, Hudson, Union, Middlesex, Somerset, and Morris counties. Contact us for counties not listed for a custom quote.",
  },
  {
    q: "Can I book a one-way transfer from Manhattan to NJ?",
    a: "Yes. One-way and round-trip transfers available at flat rates between any Manhattan address and any NJ destination.",
  }
];

function NewJerseyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="New Jersey Car Service — NYC Limo Serving the Garden State"
        subtitle="Fixed-rate premium transportation across the Hudson River."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            New Jersey sits across the Hudson River from Manhattan —
            connected by the Lincoln Tunnel, Holland Tunnel, George
            Washington Bridge, and the Garden State's own Parkway and
            Turnpike network. Newark Liberty International Airport (EWR)
            is the primary airport for most NJ residents. Our New Jersey
            car service covers Hoboken, Jersey City, Newark, Princeton,
            Morristown, Short Hills, and Englewood with fixed rates
            and zero cross-state routing confusion.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Newark Airport (EWR) Transfers from NJ</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              For most New Jersey residents, EWR is the most convenient
              airport. We provide flat-rate transfers to all EWR terminals
              with real-time flight tracking and meet & greet service.
              From Hoboken: 15–25 minutes. From Princeton: 35–50 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key New Jersey Locations We Cover</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Hoboken and Jersey City — closest NJ markets to Manhattan",
                  "Newark — EWR airport transfers and corporate bookings",
                  "Princeton — university and corporate research corridor",
                  "Short Hills and Morristown — executive residential pickups",
                  "Englewood — residential and corporate transfers",
                  "Paramus and Bergen County — full coverage"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">NYC to New Jersey Routes & Timing</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "NYC to Hoboken", time: "10–20 minutes", details: "via Lincoln Tunnel" },
                  { dest: "NYC to Princeton", time: "60–80 minutes", details: "via NJ Turnpike" },
                  { dest: "NYC to Short Hills", time: "40–60 minutes", details: "via Lincoln Tunnel" },
                  { dest: "NYC to Morristown", time: "50–70 minutes", details: "via I-78" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from New Jersey</h2>
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

      <BookingCTA buttonText="Book Your NJ Ride" />
    </PageShell>
  );
}
