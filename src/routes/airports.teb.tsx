import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { MiniFleet } from "@/components/MiniFleet";
import { Plane, ShieldCheck, Clock, Trophy, Car, Check, Users, Luggage } from "lucide-react";
import { FLEET, fmt } from "@/lib/fleet";

export const Route = createFileRoute("/airports/teb")({
  head: () => ({
    meta: [
      { title: "Teterboro Airport Car Service | TEB Private Aviation NYC" },
      { name: "description", content: "Luxury limousine transfers to and from Teterboro Airport (TEB). Private aviation specialists, discreet VIP service, available 24/7. NY City Limousine." },
      { property: "og:title", content: "Teterboro Airport Car Service | TEB Private Aviation NYC" },
      { property: "og:description", content: "Luxury limousine transfers to and from Teterboro Airport (TEB). Private aviation specialists, discreet VIP service, available 24/7. NY City Limousine." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80" },
    ],
  }),
  component: TEBPage,
});

const FEATURES = [
  { icon: Plane, title: "Private Aviation Specialists", desc: "Expert knowledge of Teterboro FBO terminals and private flight protocols." },
  { icon: ShieldCheck, title: "Discreet Service", desc: "Privacy and confidentiality guaranteed for our most discerning clients." },
  { icon: Clock, title: "Always On Time", desc: "Real-time flight monitoring for private aircraft ensures we are there when you land." },
  { icon: Trophy, title: "VIP Fleet", desc: "Our finest, most immaculately maintained vehicles for a superior travel experience." },
];

const INCLUDED = [
  "FBO terminal meet & greet",
  "Discreet VIP service",
  "Real-time private flight tracking",
  "Luggage assistance",
  "Complimentary premium beverages",
  "All-inclusive pricing (taxes & gratuity included)",
  "24-hour free cancellation",
];

const RATES = [
  { name: "Lincoln Sedan", pax: 3, bags: 3, flat: 145.00, tolls: 24.00, operating: 29.00, cc: 6.22, tax: 18.40, congestion: 2.75, total: 225.37 },
  { name: "Cadillac Sedan", pax: 3, bags: 3, flat: 165.00, tolls: 25.00, operating: 33.00, cc: 6.97, tax: 20.62, congestion: 2.75, total: 253.34 },
  { name: "Chevrolet SUV", pax: 6, bags: 6, flat: 180.00, tolls: 24.00, operating: 36.00, cc: 7.44, tax: 22.00, congestion: 2.75, total: 272.19 },
  { name: "Cadillac Escalade", pax: 6, bags: 6, flat: 285.00, tolls: 24.00, operating: 57.00, cc: 11.10, tax: 32.88, congestion: 2.75, total: 412.73 },
  { name: "Mercedes C Class", pax: 3, bags: 3, flat: 165.00, tolls: 25.00, operating: 33.00, cc: 6.97, tax: 20.62, congestion: 2.75, total: 253.34 },
  { name: "Mercedes S Class", pax: 3, bags: 3, flat: 260.00, tolls: 24.00, operating: 52.00, cc: 10.14, tax: 30.00, congestion: 2.75, total: 378.89 },
  { name: "Black Limousine", pax: 8, bags: 6, flat: 292.00, tolls: 24.00, operating: 58.40, cc: 11.37, tax: 33.65, congestion: 2.75, total: 422.17 },
  { name: "White Stretch Limousine", pax: 7, bags: 6, flat: 292.00, tolls: 24.00, operating: 58.40, cc: 11.37, tax: 33.65, congestion: 2.75, total: 422.17 },
  { name: "Sprinter Van", pax: 14, bags: 12, flat: 295.00, tolls: 24.00, operating: 59.00, cc: 11.49, tax: 34.00, congestion: 2.75, total: 426.24 },
  { name: "Hummer Limousine", pax: 20, bags: 8, flat: 325.00, tolls: 26.00, operating: 65.00, cc: 12.48, tax: 36.90, congestion: 2.75, total: 468.13 },
  { name: "Coach Bus", pax: 50, bags: 50, flat: 590.00, tolls: 30.00, operating: 118.00, cc: 21.84, tax: 70.75, congestion: 2.75, total: 833.34 },
];

function TEBPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="Teterboro Airport Limousine Service"
        subtitle="Teterboro Airport (TEB) — Private Aviation Transfers Available 24/7"
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80"
      />

      {/* INTRO & ABOUT TEB */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Private Aviation Service</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">About Teterboro Airport</h2>
              <div className="mt-4 h-px w-20 bg-gold" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                NY City Limousine specializes in private aviation transfers to and from Teterboro Airport — the premier private aviation gateway to New York City.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether you are arriving by private jet or charter flight, our professional chauffeurs provide discreet, punctual, and luxurious ground transportation to any destination.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground font-medium text-navy">
                We coordinate directly with your flight crew and the FBO to ensure the closest possible pickup. Privacy and confidentiality are guaranteed.
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
                  Book TEB Transfer
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80" alt="Teterboro Airport Private Aviation" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* Rates Table */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
              Rates to and from Teterboro Airport
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
              * Teterboro Airport serves private and charter aviation only. For commercial airport transfers please see JFK, LGA, or EWR pages.
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-muted-foreground">
              ** All rates are all-inclusive (taxes, gratuity, and tolls included).
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

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Why Choose NY City Limousine for TEB</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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



      {/* FAQ Section */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-left">
            {[
              {
                q: "Do you offer airside pickup at Teterboro?",
                a: "Airside pickup depends on the specific FBO and security protocols at the time of arrival. We coordinate directly with your flight crew and the FBO (Atlantic Aviation, Signature, etc.) to ensure the closest possible pickup.",
              },
              {
                q: "What FBOs do you serve at TEB?",
                a: "We serve all Teterboro FBOs including Atlantic Aviation, Signature Flight Support, Jet Aviation, and Meridian.",
              },
              {
                q: "How far is Teterboro from Manhattan?",
                a: "Teterboro is approximately 12 miles from Midtown Manhattan. Travel time is usually 20–35 minutes via the George Washington Bridge or Lincoln Tunnel.",
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

      <MiniFleet />
      <BookingCTA />
    </PageShell>
  );
}
