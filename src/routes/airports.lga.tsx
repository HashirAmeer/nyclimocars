import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MiniFleet } from "@/components/MiniFleet";
import { Plane, HandshakeIcon, Clock, Luggage, GlassWater, Car, Check, Users } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/airports/lga")({
  head: () => ({
    meta: [
      { title: "LaGuardia Airport Car Service | LGA Limo Transfers NYC" },
      { name: "description", content: "Expert LaGuardia (LGA) car service. Fixed rates, TLC chauffeurs, terminal A–D pickup guides, real-time flight tracking & meet & greet. Book your LGA transfer now." },
      { property: "og:title", content: "LaGuardia Airport Car Service | LGA Limo Transfers NYC" },
      { property: "og:description", content: "Expert LaGuardia (LGA) car service. Fixed rates, TLC chauffeurs, terminal A–D pickup guides, real-time flight tracking & meet & greet. Book your LGA transfer now." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1596200234241-118c89429188?w=1600&q=80" },
    ],
  }),
  component: LGAPage,
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
  { name: "Lincoln Sedan", pax: 3, bags: 3, flat: 85.00, tolls: 19.00, operating: 21.00, cc: 4.35, tax: 12.88, congestion: 2.75, total: 145.00 },
  { name: "Cadillac Sedan", pax: 3, bags: 3, flat: 107.00, tolls: 19.00, operating: 25.40, cc: 5.15, tax: 15.22, congestion: 2.75, total: 174.51 },
  { name: "Chevrolet SUV", pax: 6, bags: 6, flat: 130.00, tolls: 19.00, operating: 30.00, cc: 5.97, tax: 17.67, congestion: 2.75, total: 205.39 },
  { name: "Cadillac Escalade", pax: 6, bags: 6, flat: 229.34, tolls: 19.00, operating: 59.60, cc: 8.94, tax: 33.44, congestion: 2.75, total: 350.07 },
  { name: "Mercedes C Class", pax: 3, bags: 3, flat: 107.00, tolls: 19.00, operating: 25.40, cc: 5.15, tax: 15.22, congestion: 2.75, total: 174.51 },
  { name: "Mercedes S Class", pax: 3, bags: 3, flat: 203.00, tolls: 19.00, operating: 44.60, cc: 8.60, tax: 25.45, congestion: 2.75, total: 303.40 },
  { name: "Black Limousine", pax: 8, bags: 6, flat: 220.60, tolls: 19.00, operating: 62.40, cc: 9.36, tax: 34.93, congestion: 2.75, total: 349.04 },
  { name: "White Stretch Limousine", pax: 7, bags: 6, flat: 216.17, tolls: 19.00, operating: 65.60, cc: 9.84, tax: 36.64, congestion: 2.75, total: 349.04 },
  { name: "Sprinter Van", pax: 14, bags: 12, flat: 232.20, tolls: 19.00, operating: 69.20, cc: 10.38, tax: 38.56, congestion: 2.75, total: 372.09 },
  { name: "Hummer Limousine", pax: 20, bags: 8, flat: 255.00, tolls: 19.00, operating: 74.00, cc: 11.00, tax: 40.00, congestion: 2.75, total: 401.75 },
  { name: "Coach Bus", pax: 50, bags: 50, flat: 510.00, tolls: 22.00, operating: 102.00, cc: 19.00, tax: 62.00, congestion: 2.75, total: 717.75 },
];

function LGAPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="LaGuardia Airport Car Service — Precision Pickups at NYC's Fastest Curb"
        subtitle="Live flight tracking, professional chauffeurs, and coordinated curbside pickups at every LGA terminal."
        image="https://images.unsplash.com/photo-1596200234241-118c89429188?w=1600&q=80"
      />

      {/* INTRO & ABOUT LGA */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Premium Airport Service</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">About LaGuardia Airport</h2>
              <div className="mt-4 h-px w-20 bg-gold" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                LaGuardia Airport (LGA) is located in East Elmhurst, Queens, approximately 8 miles from Midtown Manhattan — the closest of New York's three major airports to the city centre. 
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                LaGuardia runs the tightest curbside in New York. Traffic management officers move vehicles within minutes, and the pickup window for rideshare drivers is notoriously unpredictable.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-medium text-navy">
                Our LaGuardia airport car service solves this with a TLC-licensed chauffeur who stages at the exact FHV zone for your terminal, tracks your flight live, and texts you precise curbside directions.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
                  Book LGA Transfer
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1596200234241-118c89429188?w=900&q=80" alt="LaGuardia Airport Terminal" className="absolute inset-0 h-full w-full object-cover" />
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
              LaGuardia Airport Transfer Rates
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
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Terminal-by-Terminal LGA Pickup Guide</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                terminal: "Terminal A",
                airlines: "American Airlines, Southwest, Air Canada, Spirit",
                guide: "Pickup Zone: Arrivals level curbside. Exit baggage claim, proceed to the designated FHV pickup zone. Call your chauffeur when you have your bags. Your chauffeur stages in the approved FHV holding area and moves to the kerb only when you confirm you are ready.",
              },
              {
                terminal: "Terminal B",
                airlines: "United Airlines, Alaska Airlines, JetBlue",
                guide: "Pickup Zone: LGA's flagship terminal — most organised FHV pickup setup. Follow signs to the arrivals exit and the Ground Transportation area. Meet & Greet available inside Terminal B's arrivals hall. Note: Terminal B's new layout means the walk from gates to baggage claim is longer — allow an extra 10 minutes after deplaning.",
              },
              {
                terminal: "Terminal C",
                airlines: "Delta Air Lines — Domestic",
                guide: "Pickup Zone: Arrivals level curbside. After collecting bags, proceed to the curbside FHV zone and call to stage your vehicle.",
              },
              {
                terminal: "Terminal D",
                airlines: "Delta Air Lines — Domestic",
                guide: "Pickup Zone: Same procedure as Terminal C. Follow chauffeur instructions for fastest staging.",
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
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">LGA to Manhattan — Routes & Timing</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { area: "Midtown East (Grand Central)", time: "25–40 minutes" },
              { area: "Midtown West (Times Square)", time: "30–45 minutes" },
              { area: "Lower Manhattan", time: "40–55 minutes" },
              { area: "Upper East Side", time: "20–35 minutes" },
              { area: "Upper West Side", time: "30–45 minutes" },
              { area: "Brooklyn", time: "30–50 minutes" },
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
                q: "How far is LaGuardia from Manhattan?",
                a: "Approximately 8 miles from Midtown — the closest of New York's three major airports. Travel time is typically 25–50 minutes by private car.",
              },
              {
                q: "What terminal does Delta use at LGA?",
                a: "Delta operates from Terminals C and D. Confirm your specific terminal on your boarding pass.",
              },
              {
                q: "Does LGA have an AirTrain?",
                a: "No. Unlike JFK and EWR, LaGuardia does not have an AirTrain connection. Ground transportation options are limited to private car, rideshare, taxi, and bus.",
              },
              {
                q: "What is meet and greet at LGA?",
                a: "Your chauffeur enters the terminal and waits at baggage claim with a name sign. Especially valuable at Terminal B with its larger footprint.",
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
