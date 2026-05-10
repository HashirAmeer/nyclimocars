import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET } from "@/lib/fleet";
import { Users, Briefcase, Car } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Luxury Fleet | NY City Limousine — Sedans, SUVs, Limousines, Vans & Buses New York" },
      {
        name: "description",
        content:
          "Browse NY City Limousine's luxury fleet in New York City — Lincoln Sedan, Cadillac Escalade, Mercedes S Class, stretch limousines, Sprinter Van, Hummer Limo & Coach Bus. Book online.",
      },
      { property: "og:title", content: "Our Luxury Fleet | NY City Limousine" },
      {
        property: "og:description",
        content: "11 luxury vehicles for every occasion across NYC and the Tri-State Area.",
      },
      {
        property: "og:image",
        content: "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  }),
  component: FleetPage,
});

type Category = "Sedan" | "SUV" | "Limousine" | "Van" | "Bus";

const VEHICLES = FLEET;

const FILTERS: Array<{ label: string; match: (c: Category) => boolean }> = [
  { label: "All Vehicles", match: () => true },
  { label: "Sedans",       match: (c) => c === "Sedan" },
  { label: "SUVs",         match: (c) => c === "SUV" },
  { label: "Limousines",   match: (c) => c === "Limousine" },
  { label: "Vans & Buses", match: (c) => c === "Van" || c === "Bus" },
];

const RATE_CARDS = [
  { title: "Airport Rates",   to: "/pricing/airport",        img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1000" },
  { title: "Hourly Rates",    to: "/pricing/hourly",         img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1000" },
  { title: "Point to Point",  to: "/pricing/point-to-point", img: "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1000" },
  { title: "Tours",           to: "/pricing/tours",          img: "https://images.pexels.com/photos/28680391/pexels-photo-28680391.jpeg?auto=compress&cs=tinysrgb&w=1000" },
];

function FleetPage() {
  const [active, setActive] = useState(0);
  const visible = VEHICLES.filter((v) => FILTERS[active].match(v.category));

  return (
    <PageShell>
      {/* SECTION 1 — HERO */}
      <PageHero
        eyebrow="Home > Fleet"
        title="Our Luxury Limousine Fleet"
        subtitle="Convenience Comes in Many Forms — We Have the Perfect Vehicle for You"
        image="https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* SECTION 2 — INTRO */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Fleet</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            11 Luxury Vehicles for Every Occasion
          </h2>
          <div className="mx-auto mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              At NY City Limousine, we offer a full range of luxury vehicles for our New York City limousine service.
              From stretched limousines and executive SUVs to Mercedes Sprinter Vans and full-size Coach Buses —
              our fleet has something for every occasion and group size. Our professional chauffeurs will give you
              VIP treatment at every pick-up and drop-off location. We provide high-quality service at competitive
              rates with attention to detail and customer service so you are treated like royalty from start to finish.
            </p>
            <p className="italic text-navy/80">
              Complimentary soft drinks and water inside all vehicles. Champagne service inside limousines available upon request.
            </p>
            <p>
              Hourly rates apply for travel within New York City (5 Boroughs: The Bronx, Brooklyn, Manhattan, Queens,
              Staten Island) only. For travel outside New York City, please contact us for a special rate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FILTER BAR */}
      <section className="bg-secondary/30 py-10">
        <div className="container-luxury mx-auto text-center">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((f, i) => {
              const isActive = active === i;
              return (
                <button
                  key={f.label}
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all " +
                    (isActive
                      ? "border-gold bg-gold text-white shadow-md"
                      : "border-border bg-white text-navy hover:border-gold hover:text-gold")
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FLEET GRID */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto">
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((v) => (
              <article
                key={v.name}
                className="group flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl"
              >
                {/* Vehicle image */}
                <div className="relative flex h-64 w-full items-center justify-center bg-silver/10 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="flex w-full flex-col items-center p-6 pt-3">
                  <h3 className="text-xl font-semibold text-navy">{v.name}</h3>

                  <span className="mt-3 inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {v.category}
                  </span>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-navy">
                      <Users className="h-3.5 w-3.5 text-gold" />
                      {v.pax} Passengers
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-navy">
                      <Briefcase className="h-3.5 w-3.5 text-gold" />
                      {v.bags} Luggage
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — RATES CTA */}
      <section className="bg-navy py-20 text-center text-white">
        <div className="container-luxury mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Pricing</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">Check Rates Below</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Transparent, all-inclusive pricing across every service we offer.
          </p>

          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RATE_CARDS.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group relative isolate flex h-56 items-end justify-center overflow-hidden rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-gold"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="relative z-10 w-full p-5 text-center">
                  <h3 className="text-base font-semibold uppercase tracking-wider text-white group-hover:text-gold">
                    {c.title}
                  </h3>
                  <span className="mt-2 inline-block text-xs text-white/70">View rates →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA (gold) */}
      <section className="bg-gold py-20 text-center text-white">
        <div className="container-luxury mx-auto">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
            Not Sure Which Vehicle to Choose?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Our team is available 24/7 to recommend the perfect vehicle for your group size and occasion.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing/hourly"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Suppress unused FLEET import warning by referencing in dev-only — keep available for future image swap */}
      <span className="hidden">{FLEET.length}</span>

      <BookingCTA />
    </PageShell>
  );
}
