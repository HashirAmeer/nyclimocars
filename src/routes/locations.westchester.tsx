import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/westchester")({
  head: () => ({
    meta: [
      { title: "Westchester County Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Westchester County. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: WestchesterPage,
});

const FAQ = [
  {
    q: "Do you serve Westchester County Airport (HPN)?",
    a: "Yes. HPN transfers are among our most frequent Westchester bookings, particularly for private aviation clients.",
  },
  {
    q: "Can you pick up in Westchester for Manhattan office meetings?",
    a: "Yes. We provide regular Westchester-to-Manhattan corporate transfers with fixed rates and reliable early-morning pickup.",
  }
];

function WestchesterPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Westchester County Car Service — Executive Ground Transportation Across the Tri-State Commuter Corridor"
        subtitle="Flawless transfers across White Plains, Scarsdale, Rye, and beyond."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Westchester County sits directly north of the Bronx,
            covering White Plains, Scarsdale, Rye, Bronxville, Yonkers,
            and Tarrytown. Many Westchester residents commute to Manhattan
            corporate offices daily — and many Manhattan executives
            travel to Westchester for meetings. Westchester County Airport
            (HPN) serves as the local private and regional aviation hub.
            Our Westchester car service covers the entire county with
            fixed-rate transfers to HPN, JFK, LGA, and EWR.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Westchester Locations We Cover</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "White Plains — Westchester County seat, business hub",
                  "Scarsdale — luxury residential pickups",
                  "Rye — residential and Westchester County Club events",
                  "Bronxville — residential transfers to Manhattan",
                  "Yonkers — residential and corporate bookings",
                  "Tarrytown — Hudson Valley corporate venues"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Westchester</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "HPN", time: "10–20 minutes", details: "from most Westchester addresses" },
                  { dest: "LGA", time: "30–50 minutes", details: "via Hutchinson River Parkway" },
                  { dest: "JFK", time: "50–75 minutes", details: "via Bruckner and Van Wyck" },
                  { dest: "EWR", time: "55–80 minutes", details: "via Major Deegan and Lincoln Tunnel" }
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

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Westchester</h2>
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

      <BookingCTA buttonText="Book Your Westchester Ride" />
    </PageShell>
  );
}
