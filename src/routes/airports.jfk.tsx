import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MiniFleet } from "@/components/MiniFleet";
import { Plane, HandshakeIcon, Clock, Luggage, GlassWater, Car, Check, Users, XCircle } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/airports/jfk")({
  head: () => ({
    meta: [
      { title: "JFK Airport Car Service | Limo & Black Car to JFK NYC" },
      { name: "description", content: "Fixed-rate JFK airport limo & black car service. TLC-licensed chauffeurs, terminal-level pickup guides, real-time flight tracking. Meet & greet at all JFK terminals." },
      { property: "og:title", content: "JFK Airport Car Service | Limo & Black Car to JFK NYC" },
      { property: "og:description", content: "Fixed-rate JFK airport limo & black car service. TLC-licensed chauffeurs, terminal-level pickup guides, real-time flight tracking. Meet & greet at all JFK terminals." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1600&q=80" },
    ],
  }),
  component: JFKPage,
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
  { name: "Lincoln Sedan", pax: 3, bags: 3, flat: 85.98, tolls: 19.00, operating: 21.00, cc: 4.35, tax: 12.88, congestion: 2.75, total: 144.98 },
  { name: "Cadillac Sedan", pax: 3, bags: 3, flat: 107.00, tolls: 19.00, operating: 25.40, cc: 5.15, tax: 15.22, congestion: 2.75, total: 174.51 },
  { name: "Chevrolet SUV", pax: 6, bags: 6, flat: 130.00, tolls: 19.00, operating: 30.00, cc: 5.97, tax: 17.67, congestion: 2.75, total: 205.39 },
  { name: "Cadillac Escalade", pax: 6, bags: 6, flat: 229.34, tolls: 19.00, operating: 59.60, cc: 8.94, tax: 33.44, congestion: 2.75, total: 353.07 },
  { name: "Mercedes C Class", pax: 3, bags: 3, flat: 107.00, tolls: 19.00, operating: 25.40, cc: 5.15, tax: 15.22, congestion: 2.75, total: 174.51 },
  { name: "Mercedes S Class", pax: 3, bags: 3, flat: 203.00, tolls: 19.00, operating: 44.60, cc: 8.60, tax: 25.45, congestion: 2.75, total: 303.40 },
  { name: "Black Limousine", pax: 8, bags: 6, flat: 220.60, tolls: 19.00, operating: 62.40, cc: 9.36, tax: 34.93, congestion: 2.75, total: 349.04 },
  { name: "White Stretch Limousine", pax: 7, bags: 6, flat: 220.60, tolls: 19.00, operating: 62.40, cc: 9.36, tax: 34.93, congestion: 2.75, total: 349.04 },
  { name: "Sprinter Van", pax: 14, bags: 12, flat: 232.20, tolls: 19.00, operating: 69.20, cc: 10.38, tax: 38.56, congestion: 2.75, total: 372.09 },
  { name: "Hummer Limousine", pax: 20, bags: 8, flat: 260.00, tolls: 19.00, operating: 75.00, cc: 11.20, tax: 40.80, congestion: 2.75, total: 408.75 },
  { name: "Coach Bus", pax: 50, bags: 50, flat: 530.00, tolls: 22.00, operating: 106.00, cc: 19.80, tax: 65.20, congestion: 2.75, total: 745.75 },
];

function JFKPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="JFK Airport Car Service NYC — Every Terminal, Every Flight"
        subtitle="Fixed rates, real-time flight tracking, and curbside pickup at every JFK terminal."
        image="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1600&q=80"
      />

      {/* INTRO & ABOUT JFK */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Premium Airport Service</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">JFK Airport — Key Facts for Travellers</h2>
              <div className="mt-4 h-px w-20 bg-gold" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                John F. Kennedy International Airport (JFK) sits in the Jamaica neighbourhood of Queens, approximately 15 miles from Midtown Manhattan. It handles over 90 airlines across six active terminals.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                JFK is undergoing a $19 billion transformation, and the pickup rules have changed at almost every terminal. Rideshare passengers now face shuttle buses, AirTrain reroutes, and long walks. 
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-medium text-navy">
                Our JFK airport car service solves this. A TLC-licensed chauffeur tracks your flight, knows the current pickup zone for your specific terminal, and meets you inside baggage claim.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
                  Book JFK Transfer
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80" alt="JFK Airport Terminal" className="absolute inset-0 h-full w-full object-cover" />
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
              JFK Airport Transfer Rates
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
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Terminal-by-Terminal Pickup Guide 2025/2026</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                terminal: "Terminal 1",
                airlines: "Air France, Lufthansa, Korean Air, Turkish Airlines",
                guide: "Pickup Zone: FHV zones A, B, and C on the arrivals level curbside. Exit baggage claim, cross the pedestrian island, and follow 'Car Service / Limo' signs. Construction Note: Terminal 1 has undergone access road changes — allow an additional 10–15 minutes during peak travel periods.",
              },
              {
                terminal: "Terminal 4",
                airlines: "Delta, JetBlue International, Emirates, Virgin Atlantic",
                guide: "Pickup Zone: Follow 'Ground Transportation' signs after crossing the pedestrian island from the arrivals exit. Important: As of May 2025, rideshare pickups for Terminal 4 moved to Lot 66. Pre-booked professional car and limo services are exempt and may pickup curbside at designated FHV zones. Meet & Greet available inside arrivals hall.",
              },
              {
                terminal: "Terminal 5",
                airlines: "JetBlue Domestic",
                guide: "As of May 2025, the Port Authority relocated ride app and car service pickups for Terminal 5 to the Howard Beach lot (12:00 p.m. to 2:00 a.m. daily). For pre-booked professional chauffeur services, your chauffeur will provide step-by-step directions via text upon landing. Allow 15–25 additional minutes.",
              },
              {
                terminal: "Terminal 7",
                airlines: "British Airways, Iberia, Finnair",
                guide: "Terminal 7 follows the same Howard Beach relocation as Terminal 5 for ride app pickups. If arriving at Terminal 7, confirm your pickup method with our dispatch when your flight begins descent.",
              },
              {
                terminal: "Terminal 8",
                airlines: "American Airlines, Qatar Airways",
                guide: "Terminal 8 is the most straightforward terminal at JFK currently. No rideshare shuttle restriction applies. Both car service and rideshare may pick up curbside at the arrivals level. FHV Zones: B1–B2 and C1–C3. Meet & Greet available and recommended.",
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
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">JFK Airport Drop-Off Guide</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { area: "Midtown Manhattan", time: "40–70 minutes" },
              { area: "Lower Manhattan", time: "35–60 minutes" },
              { area: "Upper East/West Side", time: "50–80 minutes" },
              { area: "Brooklyn", time: "20–50 minutes" },
              { area: "Queens (local)", time: "15–30 minutes" },
            ].map((item) => (
              <div key={item.area} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-sm font-bold text-navy">{item.area}</p>
                <p className="text-lg font-semibold text-gold">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JFK VS OTHER OPTIONS */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">JFK Car Service vs. Other Transport Options</h2>
            <div className="mx-auto mt-4 h-px w-20 bg-gold" />
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/50 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">AirTrain + Subway</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The AirTrain to Jamaica and subway to Midtown takes 
                60–70 minutes and costs around $10.25 per person. For 
                a solo traveller with one bag it works. For families 
                or business travellers with luggage after a transatlantic 
                flight, it adds avoidable stress.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/50 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">Rideshare Apps</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Since May 2025, rideshare apps at JFK involve shuttle 
                buses to off-site pickup lots for Terminals 4, 5, and 7. 
                A surge-priced Uber from JFK to Midtown can reach $80–$120 
                during peak periods. Our fixed-rate service eliminates 
                surges and skips the shuttle lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Key Features</h3>
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
                q: "How long from JFK to Manhattan by car?",
                a: "Between 30 and 75 minutes depending on traffic. Midtown averages 45–60 minutes. Off-peak and late-night trips can be as short as 30 minutes.",
              },
              {
                q: "What are the JFK pickup zones for car service?",
                a: "Pickup zones vary by terminal. Terminal 8 is the most straightforward. Terminals 5 and 7 involve the Howard Beach lot for rideshares — pre-booked car services coordinate directly. Terminal 4 rideshare pickups moved to Lot 66 from May 2025.",
              },
              {
                q: "Does your JFK service include meet and greet?",
                a: "Yes. Your chauffeur holds a personalised name sign at baggage claim and escorts you to your vehicle.",
              },
              {
                q: "Do you cover JFK to the Hamptons?",
                a: "Yes. Direct flat-rate transfers to East Hampton, Southampton, Bridgehampton, Sag Harbor, and Montauk.",
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
