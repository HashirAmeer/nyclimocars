import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MiniFleet } from "@/components/MiniFleet";
import { Plane, HandshakeIcon, Clock, Luggage, GlassWater, Car, Check, Users } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/airports/ewr")({
  head: () => ({
    meta: [
      { title: "Newark Airport Car Service | EWR Limo Transfers NYC" },
      { name: "description", content: "Fixed-rate Newark Liberty (EWR) car & limo service. TLC-licensed chauffeurs, terminal A–C pickup guide, real-time flight tracking. NYC & NJ transfers covered 24/7." },
      { property: "og:title", content: "Newark Airport Car Service | EWR Limo Transfers NYC" },
      { property: "og:description", content: "Fixed-rate Newark Liberty (EWR) car & limo service. TLC-licensed chauffeurs, terminal A–C pickup guide, real-time flight tracking. NYC & NJ transfers covered 24/7." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=80" },
    ],
  }),
  component: EWRPage,
});

const FEATURES = [
  { icon: Plane, title: "Real-Time Flight Tracking", desc: "We monitor all flights; if yours is delayed we adjust automatically." },
  { icon: HandshakeIcon, title: "FREE Meet & Greet", desc: "Chauffeur meets you inside the terminal with a customized name sign." },
  { icon: Clock, title: "60 Minutes Free Wait Time", desc: "No need to rush through baggage — 60 minutes complimentary." },
  { icon: Luggage, title: "Luggage Assistance", desc: "Chauffeur helps with all bags from terminal to vehicle." },
  { icon: GlassWater, title: "Complimentary Beverages", desc: "Water and soft drinks; champagne upon request." },
  { icon: Car, title: "All Vehicle Sizes", desc: "From solo traveler to large groups — we have the perfect vehicle." },
];

const INCLUDED = [
  "Meet & greet inside terminal",
  "Personalized name sign",
  "Up to 60 minutes free wait time",
  "Luggage assistance",
  "Real-time flight monitoring",
  "Complimentary water & soft drinks",
  "All-inclusive pricing (taxes & gratuity included)",
  "24-hour free cancellation",
];

const RATES = [
  { name: "Lincoln Sedan", pax: 3, bags: 3, flat: 105.00, tolls: 24.00, operating: 25.00, cc: 5.22, tax: 15.45, congestion: 2.75, total: 177.42 },
  { name: "Cadillac Sedan", pax: 3, bags: 3, flat: 125.00, tolls: 25.00, operating: 29.00, cc: 5.97, tax: 17.67, congestion: 2.75, total: 205.39 },
  { name: "Chevrolet SUV", pax: 6, bags: 6, flat: 140.00, tolls: 24.00, operating: 32.00, cc: 6.48, tax: 19.18, congestion: 2.75, total: 224.41 },
  { name: "Cadillac Escalade", pax: 6, bags: 6, flat: 245.00, tolls: 24.00, operating: 53.00, cc: 10.26, tax: 30.37, congestion: 2.75, total: 365.38 },
  { name: "Mercedes C Class", pax: 3, bags: 3, flat: 125.00, tolls: 25.00, operating: 29.00, cc: 5.97, tax: 17.67, congestion: 2.75, total: 205.39 },
  { name: "Mercedes S Class", pax: 3, bags: 3, flat: 220.00, tolls: 24.00, operating: 48.00, cc: 9.36, tax: 27.71, congestion: 2.75, total: 331.82 },
  { name: "Black Limousine", pax: 8, bags: 6, flat: 252.00, tolls: 24.00, operating: 54.40, cc: 10.51, tax: 31.12, congestion: 2.75, total: 374.78 },
  { name: "White Stretch Limousine", pax: 7, bags: 6, flat: 252.00, tolls: 24.00, operating: 54.40, cc: 10.51, tax: 31.12, congestion: 2.75, total: 374.78 },
  { name: "Sprinter Van", pax: 14, bags: 12, flat: 255.00, tolls: 24.00, operating: 55.00, cc: 10.62, tax: 31.44, congestion: 2.75, total: 378.81 },
  { name: "Hummer Limousine", pax: 20, bags: 8, flat: 285.00, tolls: 26.00, operating: 62.00, cc: 11.50, tax: 34.00, congestion: 2.75, total: 421.25 },
  { name: "Coach Bus", pax: 50, bags: 50, flat: 550.00, tolls: 30.00, operating: 110.00, cc: 20.40, tax: 66.00, congestion: 2.75, total: 779.15 },
];

function EWRPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="Newark Airport Car Service — EWR Transfers to NYC & New Jersey"
        subtitle="Fixed rates, real-time flight tracking, and seamless cross-state transfers between Newark and New York City."
        image="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=80"
      />

      {/* INTRO & ABOUT EWR */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Premium Airport Service</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">About Newark Liberty Airport</h2>
              <div className="mt-4 h-px w-20 bg-gold" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Newark Liberty International Airport (EWR) is located in Newark, New Jersey, approximately 16 miles from Midtown Manhattan. By private car, Newark is 30–60 minutes from Midtown depending on traffic.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                While in New Jersey, EWR is the primary gateway for millions of New York travellers. The approach involves tolls, tunnels, and cross-state routing that confuses unfamiliar drivers.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-medium text-navy">
                Our Newark airport car service covers every route — from Midtown via the Lincoln Tunnel to Brooklyn via the Goethals Bridge — with fixed rates, zero detours, and live flight tracking.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
                  Book EWR Transfer
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=900&q=80" alt="Newark Airport Terminal" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* Rates Table */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing</p>
            <h3 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
              Newark Airport Transfer Rates
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
              * All rates are all-inclusive (taxes, gratuity, and tolls included). No hidden fees.
            </p>
          </div>
          
          <div className="mt-12 space-y-8">
            {RATES.map((v) => {
              const fleetVehicle = FLEET.find(f => f.name === v.name);
              return (
                <div key={v.name} className="mx-auto max-w-4xl rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col md:flex-row">
                  {/* Left side */}
                  <div className="bg-secondary/10 p-8 md:w-1/2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border">
                    <img src={fleetVehicle?.image} alt={v.name} className="w-full max-w-[280px] object-contain drop-shadow-xl" />
                    <h4 className="mt-6 text-2xl font-bold text-navy">{v.name}</h4>
                    <div className="mt-4 flex items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-gold" />
                        <span className="font-medium">{fleetVehicle?.pax || v.pax} Passengers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Luggage className="h-5 w-5 text-gold" />
                        <span className="font-medium">{fleetVehicle?.bags || v.bags} Luggage</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="p-8 md:w-1/2 flex flex-col justify-center bg-white">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-border/50 pb-2">
                        <span className="text-muted-foreground">Flat Rate</span>
                        <span className="font-medium text-navy">{fmt(v.flat)}</span>
                      </div>
                      {v.tolls !== undefined && (
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Estimate Tolls</span>
                          <span className="font-medium text-navy">{fmt(v.tolls)}</span>
                        </div>
                      )}
                      {v.operating !== undefined && (
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Operating Costs</span>
                          <span className="font-medium text-navy">{fmt(v.operating)}</span>
                        </div>
                      )}
                      {v.cc !== undefined && (
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Credit Card Processing</span>
                          <span className="font-medium text-navy">{fmt(v.cc)}</span>
                        </div>
                      )}
                      {v.tax !== undefined && (
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">State Sales Tax</span>
                          <span className="font-medium text-navy">{fmt(v.tax)}</span>
                        </div>
                      )}
                      {v.congestion !== undefined && (
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Congestion Surcharge</span>
                          <span className="font-medium text-navy">{fmt(v.congestion)}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2">
                        <span className="text-lg font-bold text-navy">SUB TOTAL</span>
                        <span className="text-xl font-bold text-navy">{fmt(v.total)}</span>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      NO HIDDEN FEES
                    </p>
                    
                    <Link to="/contact" className="mt-6 w-full rounded-full bg-[#A27A4B] py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-navy hover:shadow-lg block">
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* TERMINAL PICKUP GUIDE */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Terminal-by-Terminal EWR Pickup Guide</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                terminal: "Terminal A",
                airlines: "United Airlines domestic, American, Southwest",
                guide: "Pickup Zone: Ground level, arrivals curb. Exit baggage claim and follow signs to Ground Transportation. The FHV / car service pickup zone is clearly marked.",
              },
              {
                terminal: "Terminal B",
                airlines: "United Airlines international, Air Canada, Aer Lingus",
                guide: "Pickup Zone: Ground level arrivals curbside, with a separate zone for pre-arranged car service. Meet and greet strongly recommended here — international passengers face customs, additional baggage, and longer walks to the exit. International arrivals receive 60 minutes of complimentary waiting time from scheduled arrival.",
              },
              {
                terminal: "Terminal C",
                airlines: "United Airlines domestic and regional",
                guide: "Pickup Zone: Ground level arrivals curbside. Exit baggage claim, follow car service signage. AirTrain connects all three EWR terminals if there is any terminal confusion.",
              },
            ].map((t) => (
              <div key={t.terminal} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gold">{t.terminal}</h3>
                <p className="mt-1 text-xs font-semibold text-navy uppercase tracking-wider">{t.airlines}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.guide}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIMES */}
      <section className="bg-secondary/30 py-20 text-center">
        <div className="container-luxury mx-auto">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">EWR to New York City — Routes, Times & Considerations</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { area: "Midtown (Lincoln Tunnel)", time: "35–60 minutes" },
              { area: "Lower Manhattan (Holland)", time: "30–55 minutes" },
              { area: "Brooklyn (Goethals)", time: "45–75 minutes" },
              { area: "New Jersey destinations", time: "15–45 minutes" },
            ].map((item) => (
              <div key={item.area} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-sm font-bold text-navy">{item.area}</p>
                <p className="text-lg font-semibold text-gold">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Key Features</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <MiniFleet />
      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              {
                q: "How far is Newark Airport from NYC?",
                a: "Approximately 16 miles from Midtown Manhattan. Expect 35–60 minutes by private car.",
              },
              {
                q: "Is Newark Airport in New York or New Jersey?",
                a: "Newark Liberty is in Newark, New Jersey, operated by the Port Authority of New York and New Jersey.",
              },
              {
                q: "Does your EWR service cover New Jersey destinations?",
                a: "Yes. We serve all NJ destinations — Jersey City, Hoboken, Newark, Princeton, Short Hills, and beyond.",
              },
              {
                q: "Fastest way from Newark Airport to Manhattan?",
                a: "The Lincoln Tunnel route via private car is typically fastest to Midtown, taking 35–55 minutes off-peak.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Q: {faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
