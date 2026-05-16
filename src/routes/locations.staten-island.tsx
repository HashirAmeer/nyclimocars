import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/staten-island")({
  head: () => ({
    meta: [
      { title: "Staten Island Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Staten Island. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: StatenIslandPage,
});

const FAQ = [
  {
    q: "Which airport is closest to Staten Island?",
    a: "Newark Liberty (EWR) via the Goethals Bridge is the closest at 20–35 minutes and is the most common airport booking for Staten Island residents.",
  },
  {
    q: "Do you cover the Staten Island Ferry area for pickups?",
    a: "Yes. We coordinate pickups at the St. George Ferry Terminal for passengers arriving from Lower Manhattan.",
  }
];

function StatenIslandPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Staten Island Car Service — Premium Ground Transportation Across New York's Most Suburban Borough"
        subtitle="Unmatched comfort and reliability tailored for Staten Island."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Staten Island is connected to Lower Manhattan by the
            Staten Island Ferry and to New Jersey by the Goethals,
            Bayonne, and Outerbridge Crossing bridges. Its suburban
            character makes private car service the most practical
            option for most residents — public transit connections
            to Manhattan require the ferry, adding significant time.
            Newark Liberty Airport via the Goethals Bridge is often
            the most convenient airport for Staten Island residents
            at just 20–35 minutes.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Staten Island Locations</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "St. George Ferry Terminal area",
                  "Staten Island Expressway (SI Expwy) corridor",
                  "Todt Hill — luxury residential pickups",
                  "Richmond Town historical area",
                  "Staten Island University Hospital area"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Staten Island</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "EWR", time: "20–35 minutes", details: "via Goethals Bridge — closest airport" },
                  { dest: "JFK", time: "45–65 minutes", details: "via Belt Parkway" },
                  { dest: "LGA", time: "50–70 minutes", details: "via Staten Island Expressway and RFK" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Staten Island</h2>
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

      <BookingCTA buttonText="Book Your Staten Island Ride" />
    </PageShell>
  );
}
