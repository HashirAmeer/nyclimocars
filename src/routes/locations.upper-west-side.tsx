import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/upper-west-side")({
  head: () => ({
    meta: [
      { title: "Upper West Side Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Upper West Side. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: UWSPage,
});

const FAQ = [
  {
    q: "Which airport is closest to the Upper West Side?",
    a: "LaGuardia is closest at 25–40 minutes. However, Newark is often fastest from the Upper West Side due to the direct Lincoln Tunnel approach — allow 40–60 minutes.",
  },
  {
    q: "Do you serve Lincoln Center pickups for evening performances?",
    a: "Yes. We handle pre-performance arrivals and post-show departures at Lincoln Center regularly. Book in advance for weekend and holiday performance nights.",
  }
];

function UWSPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Upper West Side Car Service — Premium Ground Transportation on Manhattan's Cultural Corridor"
        subtitle="Professional chauffeur service built for NYC's premier residential and cultural district."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            The Upper West Side stretches from 59th Street to 110th Street
            along Manhattan's west side, bordered by Central Park to the east
            and the Hudson River to the west. Home to Lincoln Center, Columbia
            University, the American Museum of Natural History, and some of
            New York's most prestigious pre-war residential buildings —
            the UWS demands car service that understands both the cultural
            schedule and the residential character of the neighbourhood.
          </p>
        </div>
      </section>

      {/* Key Info */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Upper West Side Locations We Serve</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Lincoln Center for the Performing Arts",
                  "Columbia University (116th Street campus)",
                  "American Museum of Natural History",
                  "Central Park West residential buildings",
                  "The Dakota, The Ansonia, Hotel Beacon",
                  "Riverside Drive luxury residences"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from the Upper West Side</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "LGA", time: "25–40 minutes", details: "via RFK Bridge" },
                  { dest: "JFK", time: "45–70 minutes", details: "via Queens Midtown Tunnel" },
                  { dest: "EWR", time: "40–60 minutes", details: "via Lincoln Tunnel — often fastest from UWS" }
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
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Upper West Side</h2>
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
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
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
      <section className="bg-secondary/30 py-16 md:py-20">
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

      <BookingCTA buttonText="Book Your Upper West Side Ride" />
    </PageShell>
  );
}
