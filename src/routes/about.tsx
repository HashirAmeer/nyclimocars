import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  Award,
  UserCheck,
  MapPin,
  Plane,
  ShieldCheck,
  DollarSign,
  Calendar,
  Briefcase,
  Heart,
  Camera,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NY City Limousine | Trusted Luxury Limousine Service New York City" },
      {
        name: "description",
        content:
          "Learn about NY City Limousine — New York City's trusted luxury limousine and chauffeur service. Professional drivers, premium fleet serving NYC, JFK, LGA, EWR and the entire Tri-State Area.",
      },
      { property: "og:title", content: "About NY City Limousine | Luxury Chauffeur Service" },
      {
        property: "og:description",
        content:
          "New York City's trusted luxury limousine and chauffeur service. Premium fleet, professional drivers, Tri-State coverage.",
      },
      {
        property: "og:image",
        content:
          "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      {/* SECTION 1 — HERO */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <img loading="lazy" decoding="async"
          src="https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury black car fleet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/95" />
        <div className="container-luxury relative text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold animate-fade-up">
            About Us
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight md:text-7xl animate-fade-up">
            About NY City Limousine
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl animate-fade-up">
            New York City's Trusted Luxury Limousine &amp; Chauffeur Service
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex items-center justify-center gap-2 text-sm text-white/70"
          >
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="text-gold">›</span>
            <span className="text-gold">About Us</span>
          </nav>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section className="bg-background py-24">
        <div className="container-luxury">
          <div className="grid items-center gap-14 text-center lg:grid-cols-2 lg:text-left">
            <img loading="lazy" decoding="async"
              src="https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional chauffeur opening luxury limousine door"
              className="mx-auto rounded-2xl object-cover shadow-xl"
            />
            <div className="mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Our Story
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
                Our Story
              </h2>
              <div className="mx-auto mt-5 h-px w-16 bg-gold lg:mx-0" />
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A warm welcome to NY City Limousine! We are dedicated to offering the safest
                  and most reliable limousine services in the Tri-State Area, with you —
                  our valued customers — at the center of everything we do.
                </p>
                <p>
                  Need to arrive in style for a conference, big night out, intimate dinner,
                  or any special occasion? Or are you looking for a private limousine tour
                  of NYC? Whatever you need, NY City Limousine is here to make you feel like
                  royalty. Our fleet of immaculate limousines and executive vehicles will
                  have you spoiled for choice, and our professional chauffeurs will add an
                  extra level of luxury to every ride.
                </p>
                <p>
                  We provide more than just a transportation service — we add a touch of
                  class and luxury to your journey and make each trip a memorable one you
                  will remember for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE OFFER */}
      <section className="bg-secondary py-24">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Offerings
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            What We Offer
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                icon: "✈️",
                title: "NYC Airport Limousine Service",
                text: "NY City Limousine offers great rates for pick-ups and drop-offs at JFK, LGA, EWR, SWF, and TEB airports. Every airport service includes a FREE meet & greet inside the terminal with a personalized name sign, up to 60 minutes of complimentary waiting time, and complimentary water and soft drinks. Champagne available upon request.",
                extra: "JFK · LGA · EWR · SWF · TEB",
              },
              {
                icon: "🕐",
                title: "Hourly Limousine Service",
                text: "NY City Limousine offers hourly limousine hire for all events so you can cruise New York City in style. Choose from our full fleet — stretched limousines, SUVs, luxury sedans, vans, and coach buses. Our professional chauffeurs provide VIP treatment throughout. Available for Brooklyn, Manhattan, the Bronx, and all of NYC.",
              },
              {
                icon: "🗽",
                title: "Private NYC Limousine Tours",
                text: "We offer specially curated private tour packages with one all-inclusive price covering vehicle hire, chauffeur fees, taxes, and tolls — plus complimentary non-alcoholic beverages and FREE champagne service inside the limousine. Tours include NYC Sightseeing, Night Lights Tour, Shopping Tour to Woodbury Outlets, and Tours with Licensed Guides.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <div className="text-5xl">{c.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{c.title}</h3>
                <div className="mx-auto mt-3 h-px w-12 bg-gold" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                {c.extra && (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold">
                    {c.extra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR MISSION */}
      <section className="relative isolate overflow-hidden bg-navy py-24 text-white">
        <img loading="lazy" decoding="async"
          src="https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury SUV"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="container-luxury relative text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Promise
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-gold md:text-5xl">
            Our Mission
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85">
            At NY City Limousine, our mission is to redefine luxury transportation in New York
            City — one ride at a time. We are committed to punctuality, passenger safety,
            and exceptional service that exceeds your expectations on every journey. We
            pride ourselves on excellent customer service. All our chauffeurs have received
            the highest training in customer etiquette and road safety.
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE NY CITY LIMOUSINE */}
      <section className="bg-background py-24">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why Us
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Why Choose NY City Limousine?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We Treat Our Customers Like Royalty
          </p>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                emoji: "🏆",
                title: "Best Quality Limousines",
                text: "The finest quality limousines in NYC — immaculately maintained for any occasion and any group size.",
              },
              {
                icon: UserCheck,
                emoji: "👨‍✈️",
                title: "Expert Chauffeurs",
                text: "Professionally trained drivers who navigate the city seamlessly, providing a comfortable journey every time.",
              },
              {
                icon: MapPin,
                emoji: "📍",
                title: "Serving All NYC Areas",
                text: "Manhattan, Brooklyn, the Bronx, Queens, Staten Island, and the entire Tri-State Area.",
              },
              {
                icon: Plane,
                emoji: "✈️",
                title: "Real-Time Flight Tracking",
                text: "We monitor all flights in real time and adjust pickup times automatically — no extra charge.",
              },
              {
                icon: ShieldCheck,
                emoji: "🛡️",
                title: "Safety & Reliability",
                text: "Licensed, insured, and meticulously maintained vehicles. Your safety is our top priority.",
              },
              {
                icon: DollarSign,
                emoji: "💰",
                title: "All-Inclusive Pricing",
                text: "No hidden fees. Taxes, gratuity, and tolls always included in your rate.",
              },
            ].map(({ icon: Icon, emoji, title, text }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-2xl text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  <span className="mr-2">{emoji}</span>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — AIRPORTS WE SERVE */}
      <section className="bg-secondary py-24">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Coverage
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Airports We Serve
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-6">
            {[
              { code: "JFK", name: "John F. Kennedy International Airport" },
              { code: "LGA", name: "LaGuardia Airport" },
              { code: "EWR", name: "Newark Liberty International Airport" },
              { code: "SWF", name: "New York Stewart International Airport" },
              { code: "TEB", name: "Teterboro Airport" },
            ].map((a) => (
              <div
                key={a.code}
                className="flex w-full max-w-[220px] flex-col items-center rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl sm:w-56"
              >
                <Plane className="h-8 w-8 text-gold" />
                <p className="mt-4 font-display text-3xl font-bold text-navy">{a.code}</p>
                <div className="mx-auto mt-2 h-px w-10 bg-gold" />
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{a.name}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-sm text-muted-foreground">
            Pick-up and drop-off available from anywhere in New York City — Manhattan,
            Brooklyn, the Bronx, Queens, Staten Island — and all surrounding Tri-State
            areas.
          </p>
        </div>
      </section>

      {/* SECTION 7 — LOCATIONS WE SERVE */}
      <section className="bg-background py-24">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Service Area
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Areas We Serve
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {[
              "Manhattan",
              "Brooklyn",
              "The Bronx",
              "Queens",
              "Staten Island",
              "Long Island",
              "Westchester",
              "New Jersey",
              "Connecticut",
            ].map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-5 py-2.5 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white hover:shadow-md"
              >
                <MapPin className="h-3.5 w-3.5" />
                {loc}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-muted-foreground">
            NY City Limousine serves the entire Tri-State Area. Whether you're in the heart of
            Manhattan or the suburbs of New York, we bring luxury transportation to your
            door.
          </p>
        </div>
      </section>

      {/* SECTION 8 — OUR SERVICES GRID */}
      <section className="bg-secondary py-24">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Plane,
                title: "Airport Service",
                text: "Punctual JFK, LGA, EWR, SWF, and TEB transfers with meet-and-greet and flight tracking.",
                href: "/services/airport",
              },
              {
                icon: Calendar,
                title: "Hourly Service",
                text: "Flexible per-hour limo hire with a dedicated professional chauffeur for any occasion.",
                href: "/services/hourly",
              },
              {
                icon: Briefcase,
                title: "Point to Point",
                text: "Flat-rate direct transfers anywhere in NYC and the Tri-State Area with on-time guarantee.",
                href: "/services/point-to-point",
              },
              {
                icon: Camera,
                title: "Private NYC Tours",
                text: "Bespoke NYC sightseeing, night lights, and shopping tours with licensed guides.",
                href: "/services/tours",
              },
              {
                icon: Heart,
                title: "Wedding Transportation",
                text: "Elegant wedding transportation for the bride, groom, and the entire wedding party.",
                href: "/services/wedding",
              },
              {
                icon: Briefcase,
                title: "Corporate Transportation",
                text: "Executive ground transportation, roadshows, and corporate accounts with priority service.",
                href: "/services/corporate",
              },
            ].map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                to={href}
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — PERSONALIZED QUOTE CTA */}
      <section className="bg-gold py-20 text-white">
        <div className="container-luxury text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
            Get In Touch
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            Want a Personalized Quote?
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-white/60" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Feel free to contact us at any time. Our team is available 24/7 to assist you
            with booking or information.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-navy transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+19177354320"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-navy"
            >
              <Phone className="h-4 w-4" />
              Call +1 (917) 735-4320
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
