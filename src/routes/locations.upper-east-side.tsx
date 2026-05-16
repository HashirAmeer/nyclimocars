import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin, Clock, Star, ShieldCheck, Check } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/upper-east-side")({
  head: () => ({
    meta: [
      { title: "Upper East Side Car Service NYC | Limo & Black Car UES" },
      { name: "description", content: "Premium car service on the Upper East Side. Fixed rates, TLC chauffeurs, LGA airport transfers, corporate & residential pickups. Serving Park, Madison & 5th Avenues." },
    ],
  }),
  component: UESPage,
});

function UESPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Upper East Side Car Service — Discreet, Reliable Transportation for New York's Most Residential Luxury District"
        subtitle="The standard of excellence for NYC's most affluent residential neighbourhood."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            The Upper East Side runs from 59th Street to 96th Street along
            Manhattan's east side, bounded by Central Park to the west and
            the East River to the east. It is one of New York City's most
            affluent residential neighbourhoods — home to Park Avenue co-ops,
            Madison Avenue boutiques, Museum Mile, and the Lenox Hill medical
            district. Car service in the UES has a different character than
            Midtown: more residential pickups, more early-morning medical
            appointments, more LaGuardia airport transfers, and a client base
            that values discretion above everything else.
          </p>
          <p className="text-xl leading-relaxed text-muted-foreground">
            LaGuardia Airport is the closest major airport to the Upper East
            Side — approximately 6–8 miles via the RFK (Triborough) Bridge.
            Travel time ranges from 20 to 35 minutes in moderate traffic,
            making LGA transfers the most common airport booking from UES
            residential addresses. JFK is accessible via the Midtown Tunnel
            or Queens Expressway in 40–65 minutes.
          </p>
        </div>
      </section>

      {/* Key Info */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Upper East Side Locations We Serve</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Park Avenue residential buildings (60s–90s)",
                  "Madison Avenue (boutiques, medical offices, galleries)",
                  "Museum Mile — Metropolitan Museum of Art, Guggenheim, Cooper Hewitt",
                  "Lenox Hill Hospital and Weill Cornell Medical Center area",
                  "The Carlyle, The Mark, Hotel Wales — UES luxury hotel pickups"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from the Upper East Side</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "LGA", time: "20–35 minutes", details: "via RFK Bridge — closest airport" },
                  { dest: "JFK", time: "40–65 minutes", details: "via Midtown Tunnel" },
                  { dest: "EWR", time: "50–75 minutes", details: "via Midtown Tunnel and Lincoln Tunnel" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from UES</h2>
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
            <AccordionItem value="item-0" className="rounded-xl border border-border bg-card mb-3 px-5">
              <AccordionTrigger className="text-base font-medium text-navy hover:no-underline">What is the fastest airport from the Upper East Side?</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">LaGuardia Airport is the closest, typically 20–35 minutes via the RFK Bridge. JFK is 40–65 minutes. Newark is 50–75 minutes via Midtown Tunnel and Lincoln Tunnel approaches.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <JsonLd data={faqSchema([
        {
          q: "What is the fastest airport from the Upper East Side?",
          a: "LaGuardia Airport is the closest, typically 20–35 minutes via the RFK Bridge. JFK is 40–65 minutes. Newark is 50–75 minutes via Midtown Tunnel and Lincoln Tunnel approaches."
        }
      ])} />

      <BookingCTA buttonText="Book Your UES Ride" />
    </PageShell>
  );
}
