import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Briefcase, Clock, UserCheck, Smartphone, Receipt, Globe, Check } from "lucide-react";

export const Route = createFileRoute("/services/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Car Service NYC | Executive Black Car & Limo" },
      { name: "description", content: "NYC's executive black car service for corporate travel. Hourly chauffeurs, roadshow support, corporate accounts, centralised billing. TLC-licensed. Book 24/7." },
      { property: "og:title", content: "Corporate Car Service NYC | Executive Black Car & Limo" },
      { property: "og:description", content: "NYC's executive black car service for corporate travel. Hourly chauffeurs, roadshow support, corporate accounts, centralised billing. TLC-licensed. Book 24/7." },
      { property: "og:image", content: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: CorporatePage,
});

const FEATURES = [
  {
    icon: Receipt,
    title: "Centralised Billing & Net-30 Invoicing",
    desc: "Monthly consolidated invoices covering all trips and travellers. Net-30 payment terms and detailed CSV/PDF reports provided.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    desc: "A named point of contact reachable by phone and email for all booking changes, additions, and event planning.",
  },
  {
    icon: Clock,
    title: "Priority Dispatch & Guaranteed Availability",
    desc: "Priority status ensures your bookings are protected during high-demand periods like Fashion Week or UN General Assembly.",
  },
  {
    icon: Briefcase,
    title: "Travel Policy Compliance",
    desc: "We align with your company's ground transportation policy, including vehicle restrictions and approval workflows.",
  },
];

const IDEAL = ["Airport Transfers", "Client Entertainment", "Road Shows", "Corporate Events", "Conferences", "Board Meetings", "Executive Travel", "Group Transportation"];
const INCLUDED = [
  "Professional formally dressed chauffeur",
  "All-inclusive transparent pricing",
  "Corporate account billing available",
  "Complimentary water and soft drinks",
  "Wi-Fi available in select vehicles",
  "24-hour free cancellation",
];

function VehicleCalc({ name, image, pax, bags, hourly }: { name: string; image: string; pax: number; bags: number; hourly: number }) {
  const [hours, setHours] = useState(1);
  const flat = hourly * hours;
  const tax = flat * 0.0888;
  const cc = flat * 0.03;
  const grat = flat * 0.20;
  const admin = 3.25;
  const total = flat + tax + cc + grat + admin;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
      <div className="h-44 w-full bg-silver/10 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-contain" loading="lazy" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy">{name}</h3>
        <div className="mt-2 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>{pax} passengers</span><span>•</span><span>{bags} bags</span>
        </div>
        <label className="mt-5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Select Number of Hours
        </label>
        <select
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="mx-auto mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-gold focus:outline-none"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <option key={h} value={h}>{h} {h === 1 ? "Hour" : "Hours"}</option>
          ))}
        </select>
        <table className="mt-5 w-full text-left text-sm">
          <tbody>
            <Row label={`Flat Hourly Rate (${hours}h × ${fmt(hourly)})`} value={fmt(flat)} />
            <Row label="Sales Tax (8.880%)" value={fmt(tax)} />
            <Row label="Credit Card Fee (3%)" value={fmt(cc)} />
            <Row label="Gratuity (20%)" value={fmt(grat)} />
            <Row label="Admin Fee" value={fmt(admin)} />
            <tr className="border-t-2 border-gold">
              <td className="py-3 font-semibold text-navy">GRAND TOTAL</td>
              <td className="py-3 text-right font-display text-xl font-bold text-gold">{fmt(total)}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/contact" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold">
          Book {name}
        </Link>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-border/60">
      <td className="py-2 text-xs text-muted-foreground">{label}</td>
      <td className="py-2 text-right text-sm font-medium text-navy">{value}</td>
    </tr>
  );
}

function CorporatePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Corporate Service"
        title="Corporate Car Service NYC — Executive Ground Transportation for the Business That Cannot Afford a Mistake"
        subtitle="Corporate accounts, centralised billing, and dedicated account management for seamless executive travel."
        image="https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book Corporate Service
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-muted-foreground">
            A missed client pickup. A chauffeur who cannot find the address. 
            A surge-priced rideshare that arrives eight minutes late for a 
            board meeting. Every one of these failures is avoidable. Our 
            corporate car service NYC is built around a single standard: 
            your executive, client, or VIP arrives on time, in comfort, 
            with zero logistical friction. Corporate accounts, centralised 
            billing, and a dedicated account manager eliminate every 
            administrative gap.
          </p>
        </div>
      </section>

      {/* Corporate Pace */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Corporate Ground Transportation Built for New York's Pace</h2>
          <div className="mx-auto mt-6 max-w-4xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Manhattan operates on a schedule where minutes matter. 
              Roadshows move across six offices in a single day. 
              C-suite executives need a chauffeur who knows the fastest 
              loading zone at 1 World Trade Center. Client entertainment 
              means arriving at a top restaurant, not circling the block.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our corporate car service maintains a dedicated fleet of 
              late-model luxury sedans, full-size SUVs, and Sprinter vans 
              for multi-person executive movements. Every chauffeur assigned 
              to a corporate account is briefed on your company's preferences 
              — usual pickup locations, preferred routes, passenger names, 
              and any specific protocol requirements.
            </p>
            <p className="mt-4 text-lg font-semibold text-navy">
              Discretion is standard, not optional. Conversations in the 
              vehicle are never discussed. Itinerary details are held in 
              strict confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Corporate Account Features</h2>
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

      {/* Services for corporate clients */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Services for Corporate Clients</h2>
          <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Airport Transfers for Executives & Clients",
                desc: "Every corporate airport transfer includes inside meet-and-greet at JFK, LGA, or EWR, real-time flight tracking, and fixed-rate pricing.",
              },
              {
                title: "Roadshow & Multi-Stop Executive Days",
                desc: "Our roadshow drivers receive a full day brief — time windows for each stop, contingency routes if a meeting runs long, and standing instructions for your executive's standard preferences.",
              },
              {
                title: "Client Entertainment & VIP Reception",
                desc: "Arriving at a client dinner in a late-model Cadillac Escalade with a uniformed chauffeur communicates professionalism before a word is spoken.",
              },
              {
                title: "Conference & Event Fleet Management",
                desc: "We provide multi-vehicle fleet management for conference transportation — coordinating arrivals, hotel transfers, and event shuttles with dedicated dispatch support.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
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

      {/* Important note */}
      <section className="bg-background py-12">
        <div className="container-luxury mx-auto">
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-8 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Corporate Accounts</p>
            <p className="mt-3 text-white/90">
              We offer dedicated corporate accounts with monthly invoicing, priority booking, and a dedicated account manager. Contact us to set up your corporate account today.
            </p>
          </div>
        </div>
      </section>

      <MiniFleet />

      {/* Calculator */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Live Calculator</p>
          <h3 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Corporate Limousine Rates — Select Your Vehicle &amp; Hours
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            All rates are all-inclusive — taxes, gratuity, credit card fee, and admin fee all included.
          </p>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((v) => (
              <VehicleCalc key={v.name} name={v.name} image={v.image} pax={v.pax} bags={v.bags} hourly={v.hourly} />
            ))}
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
                q: "How does a corporate account work?",
                a: "Contact our reservations team to open an account. Monthly invoicing covers all trips. A dedicated account manager handles all coordination.",
              },
              {
                q: "Can you accommodate last-minute corporate bookings?",
                a: "Yes, for sedan and SUV bookings. Corporate account holders receive priority dispatch for same-day requests.",
              },
              {
                q: "Do you sign NDA or confidentiality agreements?",
                a: "Yes. For clients requiring formal confidentiality agreements, our team can execute an NDA prior to service commencement.",
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
