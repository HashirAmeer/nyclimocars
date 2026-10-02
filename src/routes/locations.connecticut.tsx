import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/connecticut")({
  head: () => ({
    meta: [
      { title: "Connecticut Car Service NYC | Limo to Greenwich & Stamford" },
      { name: "description", content: "Premium car service to Greenwich & Stamford, Connecticut. Fixed rates from NYC, TLC chauffeurs, airport transfers. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: ConnecticutPage,
});

const FAQ = [
  {
    q: "How long from NYC to Greenwich, CT by car?",
    a: "Approximately 45–75 minutes in moderate traffic via I-95. The Merritt Parkway is faster off-peak. Allow 90–120 minutes during Friday afternoon peak periods.",
  },
  {
    q: "Do you serve Westport and Fairfield County beyond Greenwich?",
    a: "Yes. We serve all Fairfield County municipalities including Darien, New Canaan, Wilton, Westport, Fairfield, and Trumbull.",
  }
];

function ConnecticutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Connecticut Car Service — NYC Limo Serving Greenwich, Stamford & the Gold Coast"
        subtitle="Unmatched transportation to and from the Gold Coast."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Greenwich and Stamford are the primary Connecticut markets
            for NYC car service. The I-95 corridor connects Greenwich
            to Midtown Manhattan in 45–75 minutes — longer during peak
            commuting hours. The Merritt Parkway offers a faster,
            toll-free alternative for off-peak travel. Many Greenwich
            and Stamford residents work in Midtown Manhattan's financial
            and media industries — making early-morning NYC-bound
            pickups and late-afternoon CT-bound returns the most
            consistent booking pattern we see from this corridor.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl text-center">NYC to Connecticut Routes & Timing</h2>
          <div className="mt-8 space-y-4 max-w-2xl mx-auto">
            {[
              { dest: "Midtown to Greenwich", time: "45–75 minutes", details: "via I-95" },
              { dest: "Midtown to Stamford", time: "50–80 minutes", details: "via I-95" },
              { dest: "Merritt Parkway route", time: "often 10–15 minutes faster", details: "off-peak" }
            ].map(at => (
              <div key={at.dest} className="border-b border-border pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy text-lg">{at.dest}</span>
                  <span className="text-gold font-bold">{at.time}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{at.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Serving Connecticut</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Greenwich — the primary CT car service market",
                  "Stamford — corporate and residential pickups",
                  "Westport — residential and event transfers",
                  "Fairfield and Bridgeport — full coverage",
                  "New Haven — Yale University and medical center transfers"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Connecticut</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "JFK", time: "70–100 minutes", details: "from Greenwich (I-95 and Whitestone Bridge)" },
                  { dest: "LGA", time: "60–90 minutes", details: "from Greenwich (I-95 and Whitestone)" },
                  { dest: "EWR", time: "60–80 minutes", details: "from Greenwich (I-95 and George Washington Bridge)" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Connecticut</h2>
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

      <BookingCTA buttonText="Book Your Connecticut Ride" />
    </PageShell>
  );
}
