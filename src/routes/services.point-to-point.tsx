import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { MapPin, BadgeDollarSign, ShieldCheck, Car, UserCheck, Globe, Check } from "lucide-react";

export const Route = createFileRoute("/services/point-to-point")({
  head: () => ({
    meta: [
      { title: "Point-to-Point Car Service NYC | Fixed-Rate City Transfers" },
      { name: "description", content: "Reliable point-to-point car service in NYC. Fixed rates for door-to-door transfers between Manhattan, Brooklyn, Queens & more. Luxury sedans & SUVs. No surge pricing." },
      { property: "og:title", content: "Point-to-Point Car Service NYC | Fixed-Rate City Transfers" },
      { property: "og:description", content: "Reliable point-to-point car service in NYC. Fixed rates for door-to-door transfers between Manhattan, Brooklyn, Queens & more. Luxury sedans & SUVs. No surge pricing." },
      { property: "og:image", content: "https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: P2PPage,
});

const FEATURES = [
  { icon: MapPin, title: "Direct Door-to-Door", desc: "Straight from your pickup to your destination with no unnecessary stops." },
  { icon: BadgeDollarSign, title: "Flat-Rate Pricing", desc: "No meters, no surge pricing — transparent cost upfront." },
  { icon: ShieldCheck, title: "On-Time Guarantee", desc: "Our chauffeurs arrive early so you are never late." },
  { icon: Car, title: "Luxury Fleet", desc: "Choose from sedans to coach buses for any group size." },
  { icon: UserCheck, title: "Professional Chauffeurs", desc: "Experienced, courteous, knowledgeable about NYC routes." },
  { icon: Globe, title: "Tri-State Coverage", desc: "NYC, New Jersey, Connecticut, Long Island & beyond." },
];

const OCCASIONS = ["Business Meetings","Airport Transfers","Hotel Pick-Up & Drop-Off","Corporate Events","Wedding Transportation","Restaurant & Dining","Theater & Entertainment","Sports Events","Special Occasions"];

const INCLUDED = [
  "Professional licensed chauffeur",
  "Flat-rate transparent pricing",
  "All-inclusive (taxes & gratuity included)",
  "On-time guaranteed arrival",
  "Complimentary water & soft drinks",
  "24-hour free cancellation",
];

function P2PPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Point to Point"
        title="Point-to-Point Car Service NYC — Direct, Fixed-Rate Transfers Anywhere in the Tri-State Area"
        subtitle="Flat-rate, confirmed at booking, with a TLC-licensed chauffeur who knows exactly where he is going."
        image="https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Point-to-Point Ride
          </Link>
        </div>
      </div>

      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            You know where you are and where you need to be. What you 
            do not want is an unpredictable price, a driver who takes 
            a detour, or a vehicle that does not show. Our point-to-point 
            limo service delivers a single, direct transfer from your 
            pickup address to your destination — flat rate, confirmed 
            at booking, with a TLC-licensed chauffeur who knows 
            exactly where he is going.
          </p>
        </div>
      </section>

      {/* Common Routes */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Point-to-Point Service Coverage</h2>
          <div className="mx-auto mt-8 max-w-4xl text-left">
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              Point-to-point transfers cover any two locations in the 
              Tri-State area. Our most frequently requested routes:
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Midtown Manhattan to JFK Airport",
                "JFK Airport to Midtown or Lower Manhattan",
                "Manhattan to the Hamptons (East Hampton, Southampton, Montauk)",
                "Manhattan to Greenwich, CT",
                "Manhattan to Short Hills, NJ or Morristown, NJ",
                "Brooklyn to JFK Airport or Newark Airport",
                "JFK Airport to LaGuardia Airport (inter-airport transfer)",
                "LaGuardia Airport to Newark Airport (inter-airport transfer)",
                "Manhattan to Long Island (Nassau County, Suffolk County)",
                "NYC to Philadelphia or Washington D.C. (long-distance)",
              ].map((route) => (
                <div key={route} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-navy">{route}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground italic">
              If your route is not listed, contact our reservations 
              team with your pickup and destination for a fixed quote.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Benefits of Fixed-Rate City Transfers</h2>
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

      <section className="bg-background py-16">
        <div className="container-luxury mx-auto text-center">
          <h3 className="text-2xl font-semibold text-navy md:text-3xl">Perfect For</h3>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {OCCASIONS.map((t) => (
              <span key={t} className="rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-navy">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container-luxury mx-auto text-center">
          <h3 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h3>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
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
          <h3 className="mx-auto max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Point-to-Point Limousine Rates
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Base rate covers the trip start; per-mile billed for distance traveled. All-inclusive.
          </p>
          <div className="mx-auto mt-10 max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4">Luggage</th>
                  <th className="px-4 py-4 text-gold">Base Rate</th>
                  <th className="px-4 py-4 text-gold">Per Mile</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.bags}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.baseRate)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.perMile)}/mi</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              {
                q: "Is point-to-point the same as airport transfer?",
                a: "Airport transfers are a type of point-to-point service with added flight tracking and complimentary waiting time. A standard point-to-point is a direct transfer between any two non-airport locations.",
              },
              {
                q: "Can I make a stop during a point-to-point transfer?",
                a: "A single brief stop (under 5 minutes) is typically accommodated without additional charge. For multiple stops or extended waits, consider our hourly service.",
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
