import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/midtown-manhattan")({
  head: () => ({
    meta: [
      { title: "Midtown Manhattan Car Service | Limo & Black Car NYC" },
      { name: "description", content: "Expert car service in Midtown Manhattan. Fixed rates, TLC chauffeurs, airport pickups, corporate accounts. Covering Times Square, Grand Central, 5th Ave & more." },
    ],
  }),
  component: MidtownManhattanPage,
});

const FAQ = [
  {
    q: "Do you serve all Midtown Manhattan hotels?",
    a: "Yes. We serve every hotel in Midtown, including The Plaza, Park Hyatt, Four Seasons, The Ritz-Carlton Central Park, Baccarat Hotel, The St. Regis, and all major business-class properties on Lexington and Park Avenues.",
  },
  {
    q: "Is there a congestion pricing surcharge for Midtown pickups?",
    a: "Yes. NYC's congestion pricing surcharge applies to all vehicle trips entering Manhattan below 60th Street, effective January 2025. This charge is included in our quoted fare — you will not see it as a hidden add-on.",
  }
];

function MidtownManhattanPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Midtown Manhattan Car Service — The Heartbeat of New York, Covered Mile by Mile"
        subtitle="Professional chauffeur service built for NYC's busiest district."
        image="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Midtown Manhattan generates more ground transportation demand
            per square mile than almost any other district on earth. It is
            also where traffic is most unpredictable, double-parking is
            permanent, and rideshare surge pricing hits hardest during
            theatre breaks and business hours. Our Midtown Manhattan car
            service is built for this environment — a professional chauffeur
            who knows every loading zone, every one-way restriction, and
            every route that actually moves.
          </p>
        </div>
      </section>

      {/* Serving Midtown Manhattan */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Serving Midtown Manhattan</h2>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Our Midtown car service covers every building, hotel, theatre,
              and corporate address from 34th Street to 59th Street, river
              to river. This includes Times Square and the Theatre District,
              Grand Central Terminal and the United Nations, Rockefeller Center
              and Fifth Avenue, Hudson Yards and Penn Station, and every hotel
              corridor from the Midtown East corporate strip to the luxury
              towers of Billionaires' Row on 57th Street.
            </p>
            <p>
              Midtown is home to the highest concentration of Fortune 500
              headquarters in the United States. JPMorgan Chase, Citigroup,
              BlackRock, Goldman Sachs, and hundreds of law firms, consulting
              firms, and media companies have offices in this district.
              Corporate ground transportation is not a luxury here —
              it is a professional standard.
            </p>
          </div>
        </div>
      </section>

      {/* Key Transportation Considerations */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Midtown Manhattan — Key Transportation Considerations</h2>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Midtown's street grid is comprehensively one-way above 14th
              Street. Every experienced Midtown chauffeur knows that 6th
              Avenue moves uptown and 7th Avenue moves downtown above 34th
              Street; that crosstown traffic on 42nd, 50th, and 57th Streets
              is reliably slower; and that the fastest car approach for
              theatre drop-off is from 8th Avenue, not Broadway.
            </p>
            <p>
              NYC's Central Business District congestion pricing zone took
              effect in January 2025 for all vehicles entering Manhattan
              below 60th Street. Our fixed rates include this surcharge
              transparently. The NYC DOT reports that congestion pricing
              has reduced vehicle volumes below 60th Street by approximately
              67,000 vehicles daily, improving average speeds in the zone —
              a measurable benefit for our Midtown clients.
            </p>
          </div>
        </div>
      </section>

      {/* Airport Transfers & Common Pickups Grid */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Common Midtown Pickup & Drop-Off Locations</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Grand Central Terminal — arrivals and departures on 42nd Street",
                  "Penn Station — 7th Avenue and 33rd Street, 8th Avenue and 31st Street",
                  "Times Square — loading zones on 45th–47th Streets off 8th Avenue",
                  "Rockefeller Center — 49th/50th Street drop-off on 5th or 6th Avenue",
                  "Hudson Yards — 10th Avenue and 33rd Street loading area"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Midtown</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "Midtown to JFK", time: "40–70 minutes", details: "Fixed flat rate. Queens Midtown Tunnel or Queens Expressway route." },
                  { dest: "Midtown to LGA", time: "25–45 minutes", details: "Fixed flat rate. BQE or Grand Central Parkway route." },
                  { dest: "Midtown to EWR", time: "35–60 minutes", details: "Fixed flat rate. Lincoln Tunnel route." }
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
              <p className="mt-4 text-sm text-muted-foreground italic">
                All Midtown airport transfers include complimentary flight
                tracking, meet and greet on return, and complimentary waiting
                time on arrivals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Midtown</h2>
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

      <BookingCTA buttonText="Book Your Midtown Ride" />
    </PageShell>
  );
}
