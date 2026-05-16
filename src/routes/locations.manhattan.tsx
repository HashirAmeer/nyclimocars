import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MapPin, ArrowRight } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const Route = createFileRoute("/locations/manhattan")({
  head: () => ({
    meta: [
      { title: "Manhattan Car Service NYC | Limo & Black Car" },
      { name: "description", content: "Premium car service in Manhattan. Fixed rates, TLC chauffeurs, airport transfers & corporate bookings. Available 24/7. Book online in 60 seconds." },
    ],
  }),
  component: ManhattanPage,
});

const FAQ = [
  {
    q: "Does congestion pricing affect my fare?",
    a: "Yes, but it is already included in your quoted fare. You will not be charged extra at any point.",
  },
  {
    q: "Do you serve all Manhattan addresses?",
    a: "Yes. Every Manhattan address from Battery Park City to Inwood is covered. Washington Heights and Inwood addresses above 155th Street are fully served.",
  }
];

function ManhattanPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Location Service"
        title="Manhattan Car Service — Full Borough Coverage, Every Neighbourhood, Every Hour"
        subtitle="The most predictable ground transportation option in the borough."
        image="https://images.unsplash.com/photo-1544145945-f904253d0c71?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto max-w-4xl text-center space-y-6">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Manhattan is the most densely travelled island on earth.
            Forty-four miles of avenues and cross streets carry over
            a million vehicle trips daily — plus pedestrians, cyclists,
            and construction that changes every block. Rideshare surge
            pricing, yellow cab availability gaps, and the January 2025
            congestion pricing zone make pre-booked black car service
            the most predictable ground transportation option in
            the borough. Our Manhattan car service covers every
            neighbourhood, every building, and every hour.
          </p>
        </div>
      </section>

      {/* Congestion Pricing */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Congestion Pricing — What Manhattan Riders Need to Know</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              New York City's Central Business District Tolling Programme
              took effect in January 2025. All vehicles entering Manhattan
              below 60th Street are charged a congestion pricing toll.
              Passenger cars pay $9.00 per entry. This charge is included
              in all our quoted Manhattan fares — you will never see it
              as a hidden add-on.
            </p>
          </div>
        </div>
      </section>

      {/* Grid: Neighbourhoods & Airports */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-navy">Manhattan Neighbourhood Coverage</h2>
              <ul className="mt-6 space-y-4">
                {[
                  { name: "Midtown Manhattan", url: "/locations/midtown-manhattan" },
                  { name: "Upper East Side", url: "/locations/upper-east-side" },
                  { name: "Upper West Side", url: "/locations/upper-west-side" },
                  { name: "Downtown Manhattan", url: "/locations/downtown-manhattan" },
                  { name: "Financial District", url: "/locations/financial-district" },
                  { name: "SoHo & Tribeca", url: "/locations/soho-tribeca" },
                  { name: "Greenwich Village", url: "/locations/greenwich-village" },
                  { name: "Chelsea & Hudson Yards", url: "/locations/chelsea-hudson-yards" }
                ].map(loc => (
                  <li key={loc.name} className="flex items-center gap-3">
                    <Link to={loc.url} className="group flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                      <MapPin className="h-5 w-5 text-gold shrink-0" />
                      <span className="text-lg font-medium">{loc.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-navy">Airport Transfers from Manhattan</h2>
              <div className="mt-6">
                <p className="text-muted-foreground mb-6">
                  We serve all three major NYC airports from every Manhattan address:
                </p>
                <div className="space-y-6">
                  {[
                    { dest: "JFK", details: "30–70 minutes depending on neighbourhood and traffic" },
                    { dest: "LGA", details: "20–50 minutes depending on neighbourhood and traffic" },
                    { dest: "EWR", details: "25–60 minutes depending on neighbourhood and traffic" }
                  ].map(at => (
                    <div key={at.dest} className="border-b border-border pb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-navy text-lg">{at.dest}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{at.details}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-semibold text-gold">All fares are fixed at booking — no surge pricing ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Car Service */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Corporate Car Service in Manhattan</h2>
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Manhattan corporate accounts receive centralised billing,
              net-30 invoicing, and a dedicated account manager.
              We serve every Fortune 500 office, every major law firm,
              every investment bank, and every corporate address in
              the five Manhattan business districts.
            </p>
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy">Airport Transfer Rates from Manhattan</h2>
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
            * All-inclusive flat rates. No hidden fees. Rates may vary slightly by exact Manhattan neighborhood.
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

      <BookingCTA buttonText="Book Your Manhattan Ride" />
    </PageShell>
  );
}
