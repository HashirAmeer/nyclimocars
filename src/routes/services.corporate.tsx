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
      { title: "NYC Corporate Limousine Service | Executive Transportation New York | NY City Limousine" },
      { name: "description", content: "NY City Limousine provides premium corporate transportation in New York City. Executive sedans, SUVs and limousines for business travel, airport transfers, and corporate events. Book 24/7." },
      { property: "og:title", content: "NYC Corporate Limousine Transportation — NY City Limousine" },
      { property: "og:description", content: "Executive ground transportation for business professionals in NYC." },
      { property: "og:image", content: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    ],
  }),
  component: CorporatePage,
});

const FEATURES = [
  { icon: Briefcase, title: "Executive Fleet", desc: "Mercedes S Class, Cadillac Escalade, and more for the ultimate corporate image." },
  { icon: Clock, title: "Punctuality Guaranteed", desc: "Our chauffeurs are always early — never keep a client waiting." },
  { icon: UserCheck, title: "Professional Chauffeurs", desc: "Formally dressed, discreet, and highly trained corporate drivers." },
  { icon: Smartphone, title: "Easy Booking", desc: "Book online or call 24/7 for immediate corporate account setup." },
  { icon: Receipt, title: "Corporate Accounts", desc: "Monthly invoicing and corporate account management available." },
  { icon: Globe, title: "Tri-State Coverage", desc: "NYC, New Jersey, Connecticut, Long Island and beyond." },
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
        title="NYC Corporate Limousine Transportation"
        subtitle="Executive Ground Transportation for Business Professionals"
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
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At NY City Limousine, we understand there is no margin for error when it comes to corporate travel. We have made fulfilling the corporate ground transportation needs of our clients our specialty. From solo executive travel to large groups headed for meetings, conventions, or conferences — our polished chauffeurs and luxury fleet deliver impeccable service every time.
          </p>
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

      {/* Ideal for */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">Ideal For</h2>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {IDEAL.map((t) => (
              <span key={t} className="rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-secondary/30 py-16">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">What's Included</h2>
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
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Corporate Limousine Rates — Select Your Vehicle &amp; Hours
          </h2>
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

      <BookingCTA />
    </PageShell>
  );
}
