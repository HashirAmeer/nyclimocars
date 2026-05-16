import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { ShieldCheck, UserCheck, Car, Clock, BadgeDollarSign, Check } from "lucide-react";

export const Route = createFileRoute("/services/black-car")({
  head: () => ({
    meta: [
      { title: "Black Car Service NYC | Executive Chauffeur NYC" },
      { name: "description", content: "Premium black car service in NYC. Late-model executive sedans & SUVs, professional chauffeurs, on-time arrivals. Reliable luxury for corporate & personal travel." },
      { property: "og:title", content: "Black Car Service NYC | Executive Chauffeur NYC" },
      { property: "og:description", content: "Premium black car service in NYC. Late-model executive sedans & SUVs, professional chauffeurs, on-time arrivals. Reliable luxury for corporate & personal travel." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1562141961-b5d185676740?w=1600&q=80" },
    ],
  }),
  component: BlackCarPage,
});

function BlackCarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Luxury Service"
        title="Black Car Service NYC — The Professional Standard in New York Ground Transportation"
        subtitle="Licensed. Vetted. Reliable. The definitive professional chauffeur experience."
        image="https://images.unsplash.com/photo-1562141961-b5d185676740?w=1600&q=80"
      />

      {/* Intro */}
      <section className="bg-background py-16 text-center">
        <div className="container-luxury mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl mb-6">Executive Black Car Service for NYC</h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            The phrase 'black car service' means something specific 
            in New York City. It means a pre-arranged, TLC-licensed 
            for-hire vehicle with a professional chauffeur — not a 
            rideshare, not a taxi, not an unlicensed car. The NYC Taxi 
            & Limousine Commission licenses all legitimate black car 
            operators and requires background checks, drug testing, 
            and driver education for every chauffeur. Our black car 
            service NYC meets every TLC standard and exceeds most of them.
          </p>
        </div>
      </section>

      {/* What makes a black car service different */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h3 className="text-3xl font-semibold text-navy md:text-4xl">What Makes a Black Car Service Different?</h3>
          <div className="mx-auto mt-8 max-w-4xl text-left">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In New York City, 'black car' is a legal category defined 
              by the NYC Taxi & Limousine Commission. Black cars are 
              for-hire vehicles that must be pre-arranged — they cannot 
              legally pick up street hails. All vehicles must hold TLC 
              base registration. All drivers must hold a TLC For-Hire 
              Vehicle driver license.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { title: "Vetted Drivers", desc: "Fingerprint background checks and drug testing required for all TLC licenses." },
                { title: "Driver Education", desc: "Drivers must complete a 24-hour TLC education programme and defensive driving course." },
                { title: "Base Accountability", desc: "Operators are registered TLC bases accountable to strict New York City regulations." },
                { title: "Commercial Standards", desc: "Vehicles are maintained and insured to professional commercial standards." },
              ].map(item => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm font-semibold text-gold italic">
              This regulatory framework exists to protect passengers and ensure consistent service levels.
            </p>
          </div>
        </div>
      </section>

      {/* Black Car vs Rideshare Comparison */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Why Choose Black Car Over Rideshare</h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4">Feature</th>
                  <th className="px-6 py-4 text-gold">Professional Black Car</th>
                  <th className="px-6 py-4">Rideshare Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  { f: "Pricing", b: "Fixed at booking", r: "Variable, surge-prone" },
                  { f: "Driver Vetting", b: "TLC background & drug checks", r: "Platform-level checks only" },
                  { f: "Vehicle Quality", b: "Commercial standard maintenance", r: "Personal vehicles" },
                  { f: "Reliability", b: "Confirmed reservation", r: "Cancellations allowed" },
                  { f: "Accountability", b: "TLC registered base", r: "Third-party platform" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/20">
                    <td className="px-6 py-5 text-sm font-bold text-navy">{row.f}</td>
                    <td className="px-6 py-5 text-sm text-navy">{row.b}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{row.r}</td>
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
                q: "What is a black car service in NYC?",
                a: "A pre-arranged, TLC-licensed for-hire vehicle service with a professional chauffeur. Distinct from taxis (street hails) and rideshare (app-based, no TLC base requirement).",
              },
              {
                q: "Is black car service more expensive than Uber Black?",
                a: "Fixed-rate black car service is often comparable to or less than Uber Black during surge periods, which can multiply fares two to four times. For airport transfers and corporate travel, fixed rates provide better value and complete price certainty.",
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
