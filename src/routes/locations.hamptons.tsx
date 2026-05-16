import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/hamptons")({
  head: () => ({
    meta: [
      { title: "Hamptons Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in The Hamptons. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: HamptonsPage,
});

const FAQ = [
  {
    q: "Do you offer flat rates to the Hamptons?",
    a: "Yes. All Hamptons transfers are flat-rate, quoted at booking. No surcharges for Expressway delays — your price is fixed regardless of traffic.",
  },
  {
    q: "Can you do round trips to the Hamptons?",
    a: "Yes. Round-trip Hamptons bookings are available. Book both legs at reservation for guaranteed availability.",
  }
];

function HamptonsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Hamptons Car Service — Luxury Ground Transportation to the East End of Long Island"
        subtitle="Real-time routing and flawless scheduling for peak season transfers."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            East Hampton, Southampton, Bridgehampton, Sag Harbor, and
            Montauk are the five primary Hamptons destinations for our
            car service. From May to September, the Long Island Expressway
            becomes the most congested road in the state on Friday
            afternoons and Sunday evenings. Our Hamptons car service
            uses real-time routing — via the LIE, Sunrise Highway,
            or the North Fork — to find the fastest path to and from
            the East End, regardless of the season.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Hamptons Transfer Routes & Timing</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              From Manhattan to East Hampton: 90–120 minutes off-peak,
              2–3.5 hours Friday afternoon peak. Departure before 1:00 p.m.
              on summer Fridays is strongly recommended. Sunday returns
              from the Hamptons: depart before 2:00 p.m. or after 8:00 p.m.
              to avoid the worst eastbound congestion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Peak Season Travel Tips</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Book Hamptons transfers at least 1–2 weeks in advance during June, July, and August",
                  "Early-morning Friday departures (before 10:00 a.m.) are the most reliable for East End arrivals before lunch",
                  "Consider the North Fork route as an alternative when the LIE is heavily congested"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers to the Hamptons</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "JFK to East Hampton", time: "90–120 minutes", details: "off-peak" },
                  { dest: "JFK to Southampton", time: "80–100 minutes", details: "off-peak" },
                  { dest: "JFK to Montauk", time: "120–150 minutes", details: "off-peak" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates to the Hamptons</h2>
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

      <BookingCTA buttonText="Book Your Hamptons Ride" />
    </PageShell>
  );
}
