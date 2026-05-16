import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Plane, HandshakeIcon, Clock, Luggage, GlassWater, Car, Check } from "lucide-react";

export const Route = createFileRoute("/services/airport")({
  head: () => ({
    meta: [
      { title: "NYC Airport Car Service | JFK LGA EWR Limo Transfers" },
      { name: "description", content: "Fixed-rate airport car service to JFK, LaGuardia & Newark. TLC-licensed chauffeurs, real-time flight tracking, meet & greet. Book in 60 seconds. No surge pricing ever." },
      { property: "og:title", content: "NYC Airport Car Service | JFK LGA EWR Limo Transfers" },
      { property: "og:description", content: "Fixed-rate airport car service to JFK, LaGuardia & Newark. TLC-licensed chauffeurs, real-time flight tracking, meet & greet. Book in 60 seconds. No surge pricing ever." },
      { property: "og:image", content: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: AirportPage,
});

const FEATURES = [
  {
    icon: Plane,
    title: "Real-Time Flight Tracking",
    desc: "We connect to live FAA flight data the moment you book. Your chauffeur's dispatch is updated automatically if your flight is delayed or you land early. You never need to call to update your arrival time.",
  },
  {
    icon: HandshakeIcon,
    title: "Meet & Greet Inside the Terminal",
    desc: "Your chauffeur meets you inside the arrivals hall at baggage claim, holding a personalised name card. No navigating curbside chaos. Walk out of baggage claim straight to your vehicle.",
  },
  {
    icon: Clock,
    title: "Complimentary Waiting Time",
    desc: "Domestic arrivals include 45 minutes of complimentary waiting time. International arrivals include 60 minutes. No clock starts until your wheels touch down.",
  },
  {
    icon: Check,
    title: "Fixed-Rate Pricing — All Fees Included",
    desc: "Your fare is confirmed at booking. Airport facility charges, tolls, bridge fees, and all surcharges are included. No hidden add-ons.",
  },
];

const AIRPORTS = [
  { code: "JFK", name: "John F. Kennedy International Airport", area: "Queens, New York", img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80", to: "/airports/jfk" },
  { code: "LGA", name: "LaGuardia Airport", area: "Queens, New York", img: "https://images.unsplash.com/photo-1596200234241-118c89429188?w=900&q=80", to: "/airports/lga" },
  { code: "EWR", name: "Newark Liberty International Airport", area: "Newark, New Jersey", img: "https://images.unsplash.com/photo-1629837905187-57351e065759?w=900&q=80", to: "/airports/ewr" },
  { code: "TEB", name: "Teterboro Airport", area: "Private Aviation, New Jersey", img: "https://images.unsplash.com/photo-1616053429399-53e39b7a4f78?w=900&q=80", to: "/airports/teb" },
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

function AirportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Airport Service"
        title="NYC Airport Car Service — Fixed Rates to JFK, LGA & EWR"
        subtitle="Fixed rates, a TLC-licensed chauffeur who monitors your flight, and a vehicle confirmed the night before."
        image="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Airport Transfer
          </Link>
        </div>
      </div>

      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Missing a flight because a rideshare cancelled — or paying 
            a surge fare after landing exhausted — is the cost of leaving 
            airport transportation to chance. Rideshares offer no guarantees. 
            Taxis offer no tracking. Our NYC airport car service removes 
            every variable. Fixed rates, a TLC-licensed chauffeur who 
            monitors your flight, and a vehicle confirmed the night before.
          </p>
        </div>
      </section>

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

      {/* Airports served */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Three Airports. One Standard of Service.</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The New York metropolitan area is served by three major 
              international airports: John F. Kennedy International (JFK) 
              in Queens, LaGuardia (LGA) in East Elmhurst, and Newark 
              Liberty International (EWR) in New Jersey. Each operates 
              under different terminal layouts, pickup zone rules, and 
              traffic patterns. Our chauffeurs know all three in precise detail.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              JFK is the largest, handling over 60 million passengers across 
              six terminals. LGA is the closest to Midtown — approximately 
              8 miles. EWR offers the fastest connection to Lower Manhattan 
              via the Lincoln Tunnel. Our chauffeurs learn airport rules 
              over years on the road — not from an app.
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AIRPORTS.map((a) => (
              <Link key={a.code} to={a.to} className="group overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <img src={a.img} alt={`${a.name} terminal`} className="h-40 w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                <div className="p-6">
                  <p className="font-display text-3xl font-bold text-gold">{a.code}</p>
                  <h3 className="mt-2 text-base font-semibold text-navy group-hover:text-gold transition-colors">{a.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{a.area}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-secondary/30 py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">What Every Airport Transfer Includes</h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-navy">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MiniFleet />

      {/* Rates Table */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Transparent Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Airport Transfer Rates — What to Expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Flat rates to and from JFK, LaGuardia (LGA), and Newark (EWR).
          </p>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">JFK</th>
                  <th className="px-4 py-4 text-gold">LGA</th>
                  <th className="px-4 py-4 text-gold">EWR</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.jfk)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.lga)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.ewr)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
            All rates are all-inclusive. For TEB and SWF airport rates, please contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              {
                q: "What is the best car service to JFK from Manhattan?",
                a: "A pre-booked black car or limo service with flight tracking is the most reliable option. Fixed rates eliminate surge pricing and a professional chauffeur ensures on-time pickup regardless of traffic.",
              },
              {
                q: "How early should I book an airport car to JFK?",
                a: "Book at least 24 hours ahead. Allow 60–90 minutes from Midtown Manhattan to JFK, and 45–60 minutes from Midtown to LGA. Newark requires 45–75 minutes.",
              },
              {
                q: "Can I book a round-trip airport transfer?",
                a: "Yes. Round-trip bookings are available at initial reservation. The return leg includes its own flight monitoring.",
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

      <section className="bg-gold pt-20 text-center text-white">
        <div className="container-luxury mx-auto">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">Booking Your NYC Airport Transfer</h2>
        </div>
      </section>
      <BookingCTA title="" subtitle="Book your transfer in 60 seconds. Fixed rates, no surge pricing, and professional chauffeurs." />
    </PageShell>
  );
}
