import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Plane, MapPin, Camera, ShieldCheck, Star, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NYC Limo Car — Premium Chauffeured Service in New York City" },
      { name: "description", content: "Luxury limousine service in NYC. Hourly, airport, point-to-point and city tours with professional chauffeurs and a meticulous fleet." },
      { property: "og:title", content: "NYC Limo Car — Premium Chauffeured Service" },
      { property: "og:description", content: "Luxury chauffeured transportation across New York City." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1520975922323-388183fcd0bd?w=1600&q=80" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Clock, title: "Hourly Service", desc: "Flexible by-the-hour chauffeur for meetings, events, or evenings out.", to: "/services/hourly" },
  { icon: Plane, title: "Airport Service", desc: "Seamless transfers to JFK, LGA, EWR with flight tracking and meet & greet.", to: "/services/airport" },
  { icon: MapPin, title: "Point to Point", desc: "Direct, fixed-rate transfers between any two NYC locations.", to: "/services/point-to-point" },
  { icon: Camera, title: "City Tours", desc: "Guided luxury tours of Manhattan, Brooklyn, and beyond.", to: "/services/tours" },
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520975922323-388183fcd0bd?w=1920&q=80"
          alt="Luxury black limousine in New York City at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />
        <div className="container-luxury relative grid min-h-[88vh] items-center py-24 text-white">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              New York City · Est. 2008
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">
              Arrive in <span className="text-gold italic">timeless</span> luxury.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Discreet, punctual, and impeccably presented chauffeured transportation
              for the discerning traveler — anywhere in the five boroughs.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:opacity-90"
                style={{ boxShadow: "var(--shadow-gold)" }}
              >
                Reserve Your Ride <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Explore the Fleet
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-gold text-gold" /> 4.9 / 5 (1,200+ reviews)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> 15+ years</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What We Offer</p>
            <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Chauffeured Services</h2>
            <p className="mt-4 text-muted-foreground">
              From boardroom to ballroom — a curated suite of services tailored to every journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link
                key={to}
                to={to}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIPE */}
      <section className="bg-navy py-24 text-white">
        <div className="container-luxury grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80"
              alt="Professional chauffeur opening the door of a black luxury car"
              className="rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-gold px-6 py-5 text-navy shadow-xl md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs font-semibold uppercase tracking-widest">Years of Service</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">About NYC Limo Car</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">An institution of New York elegance.</h2>
            <p className="mt-5 text-white/75">
              For over a decade, NYC Limo Car has been the trusted choice of executives,
              celebrities, and visitors who refuse to compromise on quality. Our chauffeurs
              are trained to anticipate — every door opened, every route planned, every
              detail handled.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/80">
              {["Hand-selected, uniformed chauffeurs", "24/7 dispatch & live flight tracking", "Late-model black-on-black fleet", "Transparent, fixed pricing"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-background py-24">
        <div className="container-luxury">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Fleet</p>
              <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Curated for comfort.</h2>
            </div>
            <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              View all vehicles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Lincoln Stretch Limousine", img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=900&q=80", seats: "Up to 8" },
              { name: "Mercedes-Benz S-Class", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=900&q=80", seats: "Up to 3" },
              { name: "Cadillac Escalade SUV", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80", seats: "Up to 6" },
            ].map((v) => (
              <article key={v.name} className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.img} alt={v.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.seats} passengers</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
        <img
          src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container-luxury relative text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold md:text-5xl">
            Ready to ride in <span className="text-gold italic">style</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Book your chauffeur in under 60 seconds. Available 24/7 across all five boroughs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy"
          >
            Reserve Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
