import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/greenwich-village")({
  head: () => ({
    meta: [
      { title: "Greenwich Village Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Greenwich Village & West Village. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: GreenwichVillagePage,
});

const FAQ = [
  {
    q: "Can you navigate the West Village's irregular street grid?",
    a: "Yes. Our chauffeurs know the Village grid precisely — including where Hudson Street, Greenwich Avenue, and 7th Avenue South intersect irregularly.",
  }
];

function GreenwichVillagePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Greenwich Village & West Village Car Service — Expert Transportation in NYC's Most Vibrant Neighbourhoods"
        subtitle="Unmatched local expertise for Manhattan's most iconic village streets."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Greenwich Village and the West Village are among Manhattan's
            most distinctive neighbourhoods — irregular street grids,
            high-end restaurant strips, boutique hotels, and a strong
            residential character. NYU Medical Center, the Meatpacking
            District, and the High Line all generate consistent
            transportation demand. Our Greenwich Village car service
            covers every address with a chauffeur who knows the
            difference between 4th Street crossing 10th Street
            and how to navigate the Village grid confidently.
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Key Greenwich Village Locations</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "NYU Medical Center",
                  "Washington Square Park area pickups",
                  "The Standard, High Line Hotel, Gansevoort Hotel",
                  "Meatpacking District entertainment venues",
                  "West Village residential streets"
                ].map(loc => (
                  <li key={loc} className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Greenwich Village</h2>
              <div className="mt-6 space-y-6">
                {[
                  { dest: "EWR", time: "25–45 minutes", details: "via Holland Tunnel" },
                  { dest: "JFK", time: "30–55 minutes", details: "via Holland Tunnel to BQE" },
                  { dest: "LGA", time: "35–55 minutes", details: "via Queens Midtown Tunnel" }
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
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Greenwich Village</h2>
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

      <BookingCTA buttonText="Book Your Village Ride" />
    </PageShell>
  );
}
