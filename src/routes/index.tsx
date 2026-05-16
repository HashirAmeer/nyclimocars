import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  HandshakeIcon,
  Plane,
  XCircle,
  Trophy,
  UserCheck,
  MapPin,
  Radar,
  ShieldCheck,
  DollarSign,
  Users,
  Briefcase,
  Phone,
  Star,
  Car,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import LincolnSedan from "@/assets/lincoln-sedan.png";
import CadillacEscalade from "@/assets/cadillac-escalade.png";
import BlackLimousine from "@/assets/black-limousine.png";
import SprinterVan from "@/assets/sprinter-van.png";
import WhiteStretchLimo from "@/assets/White-Stretch-Limo.webp";
import { WorldCupPopup } from "@/components/WorldCupPopup";
import { FleetSlider } from "@/components/FleetSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NYC Limo & Black Car Service | Luxury Chauffeur NYC" },
      {
        name: "description",
        content:
          "Book NYC's finest limousine and black car service. Fixed rates, TLC-licensed chauffeurs, real-time flight tracking. JFK, LGA, EWR airport transfers & corporate travel.",
      },
      { property: "og:title", content: "NY City Limousine — Premier Limousine & Chauffeur Service" },
      {
        property: "og:description",
        content: "Luxury chauffeured transportation across New York City. Airports, tours, hourly and point-to-point.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1520975922323-388183fcd0bd?w=1600&q=80",
      },
    ],
  }),
  component: HomePage,
});

const serviceTypes = [
  {
    title: "AIRPORT RATES",
    img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    to: "/services/airport" as const,
  },
  {
    title: "TOURS",
    img: "https://images.unsplash.com/photo-1600712364716-eab8cabac7d0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: "/services/tours" as const,
  },
  {
    title: "HOURLY RATES",
    img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1200",
    to: "/services/hourly" as const,
  },
  {
    title: "POINT TO POINT",
    img: "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    to: "/services/point-to-point" as const,
  },
  {
    title: "WEDDINGS",
    img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200",
    to: "/services/wedding" as const,
  },
  {
    title: "CORPORATE",
    img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1200",
    to: "/services/corporate" as const,
  },
];

const trustBadges = [
  { icon: CheckCircle2, label: "All-Inclusive Rates" },
  { icon: Clock, label: "Complimentary Wait Time" },
  { icon: HandshakeIcon, label: "Meet And Greet Service" },
  { icon: Plane, label: "Flight Monitoring" },
  { icon: XCircle, label: "24 Hours Free Cancellation" },
];

const services = [
  {
    title: "Airport Transfers (JFK, LGA, EWR)",
    img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=900",
    text: "Fixed-rate transfers to and from John F. Kennedy, LaGuardia, and Newark Liberty. Meet-and-greet inside the terminal, curbside pickup, and real-time flight monitoring included.",
    to: "/services/airport" as const,
  },
  {
    title: "Corporate & Executive Car Service",
    img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=900",
    text: "Dedicated corporate accounts with centralised billing, net-30 invoicing, and trip reporting. Hourly chauffeur service for roadshows, client entertainment, and multi-stop executive days across Manhattan and the Tri-State area.",
    to: "/services/corporate" as const,
  },
  {
    title: "Wedding Limousine Service",
    img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=900",
    text: "Stretch limousines, luxury SUVs, and custom fleet packages for weddings at venues across New York City, the Hamptons, Hudson Valley, and beyond. Red-carpet arrivals, bridal party coordination, and on-the-day chauffeur briefings included.",
    to: "/services/wedding" as const,
  },
  {
    title: "Hourly Black Car & Limo Hire",
    img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=900",
    text: "Book a chauffeur by the hour for city tours, shopping trips, multi-stop business days, or any occasion where you need a dedicated driver on standby. Minimum two-hour booking.",
    to: "/services/hourly" as const,
  },
  {
    title: "Point-to-Point Service",
    img: "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=900",
    text: "Direct door-to-door transfers anywhere in the Tri-State area. Flat rates, no waiting charges, no detours. From SoHo to the Hamptons, JFK to Greenwich, or Times Square to Newark.",
    to: "/services/point-to-point" as const,
  },
];

const features = [
  {
    icon: Radar,
    title: "Flight Tracking Included on Every Airport Transfer",
    text: "Our dispatch monitors your flight from departure gate to wheels-down using live FAA data. If your flight lands early, your chauffeur adjusts. If it is delayed, no rebooking is needed and no extra charge applies. You walk out of baggage claim to a chauffeur already waiting.",
  },
  {
    icon: DollarSign,
    title: "Fixed Rates, No Surge, No Surprises",
    text: "Every fare is quoted upfront at booking. Congestion pricing, bridge tolls, and tunnel fees are included. You pay exactly what you see, whether it is rush hour on a Monday or midnight on New Year's Eve.",
  },
  {
    icon: UserCheck,
    title: "TLC-Licensed Chauffeurs",
    text: "Every chauffeur holds a valid NYC Taxi & Limousine Commission (TLC) For-Hire Vehicle license. The TLC requires fingerprinting, a DMV Defensive Driving course, drug testing, and a 24-hour driver education programme before any license is issued.",
  },
  {
    icon: Trophy,
    title: "Late-Model Luxury Fleet",
    text: "Choose from luxury sedans, full-size SUVs, Sprinter vans, stretch limousines, and executive coaches. Every vehicle is inspected before each shift, maintained to manufacturer standards, and detailed inside and out.",
  },
];

const fleet = [
  { name: "Lincoln Sedan", passengers: 3, luggage: 3, image: LincolnSedan },
  { name: "Cadillac Escalade", passengers: 6, luggage: 6, image: CadillacEscalade },
  { name: "Black Limousine", passengers: 8, luggage: 6, image: BlackLimousine },
  { name: "White Stretch Limousine", passengers: 7, luggage: 6, image: WhiteStretchLimo },
  { name: "Sprinter Van", passengers: 14, luggage: 12, image: SprinterVan },
];

const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80",
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    img: "https://images.unsplash.com/photo-1596200234241-118c89429188?w=900&q=80",
  },
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    img: "https://images.unsplash.com/photo-1629837905187-57351e065759?w=900&q=80",
  },
  {
    code: "TEB",
    name: "Teterboro Airport",
    img: "https://images.unsplash.com/photo-1616053429399-53e39b7a4f78?w=900&q=80",
  },
];

const tours = [
  {
    title: "Classic NYC Sightseeing Tour",
    text: "Visit Times Square, Central Park, Brooklyn Bridge, Statue of Liberty views, Rockefeller Center, Greenwich Village, and more. Stop whenever you like for photos or shopping.",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80",
  },
  {
    title: "NYC Night Lights Tour",
    text: "Witness New York City come alive after dark. Marvel at the glittering skyline, illuminated skyscrapers, and the electric energy of Manhattan by night.",
    img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=900&q=80",
  },
  {
    title: "NYC Tour with Expert Guide",
    text: "The full limousine tour experience with a licensed tour guide. Get historical context, insider stories, and personalized recommendations across all five boroughs.",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80",
  },
  {
    title: "Shopping Tour",
    text: "Explore NYC's finest boutiques or visit Woodbury Common Premium Outlets — featuring 220+ designer brands including Coach, Dior, and Versace — one hour north of NYC.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
  },
];

const testimonials = [
  {
    quote:
      "NY City Limousine made our JFK airport pickup completely flawless. Our chauffeur was waiting inside the terminal holding a sign with our name, helped with all our luggage, and the limousine was spotless. Highly recommend for any airport transfer!",
    name: "Sarah M., Manhattan",
  },
  {
    quote:
      "I booked the hourly limousine service for a corporate event and was blown away. Punctual, professional, and the Cadillac Escalade was absolutely immaculate. Will be using NY City Limousine for all of our business travel going forward.",
    name: "James R., Corporate Client",
  },
  {
    quote:
      "The NYC night lights tour was absolutely magical. Our chauffeur knew the city inside and out, took us to the most stunning viewpoints, and the complimentary champagne was a beautiful touch. An unforgettable experience!",
    name: "Maria & Carlos, Tourists",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Clients" },
  { value: "10+", label: "Luxury Vehicles" },
  { value: "4", label: "Airports Served" },
  { value: "24/7", label: "Service Available" },
];

function HomePage() {
  return (
    <>
      <WorldCupPopup />
      <PageShell>
        <JsonLd data={localBusinessSchema()} />
      {/* SECTION 1 — HERO */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1625690180114-5530b1304127?fm=jpg&q=60&w=3000"
          alt="Luxury black limousine driving through New York City at night"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container-luxury relative flex flex-col items-center py-24 text-white">
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 backdrop-blur">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#34E0A1] text-xs font-black text-black">
              ◉◉
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Top Rated Limousine Company in New York City
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            NYC Limousine & Black Car Service — Where Every Ride Is First Class
          </h1>
          <p className="mt-6 max-w-4xl text-lg font-medium text-white/90 md:text-xl">
            Fixed rates, TLC-licensed chauffeurs, and real-time flight 
            tracking give you complete control of every journey — from a JFK 
            airport transfer to a Midtown corporate meeting, 24 hours a day, 
            365 days a year.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              Book Your Ride <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — AIRPORTS */}
      <section className="bg-silver/20 py-20 text-center">
        <div className="container-luxury">
          <h3 className="text-4xl font-semibold text-navy md:text-5xl">NYC Airport Limousine Service</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            JFK · LGA · EWR · TEB — Premium Transfers Available 24/7
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {airports.map((a) => (
              <article
                key={a.code}
                className="group relative isolate flex aspect-[4/5] flex-col items-center justify-end overflow-hidden rounded-xl text-center text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={a.img}
                  alt={`${a.name} (${a.code})`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent" />
                <div className="relative z-10 p-6">
                  <p className="text-5xl font-bold text-gold">{a.code}</p>
                  <p className="mt-2 text-sm font-medium leading-snug">{a.name}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-sm text-muted-foreground">
            ✈️ Real-time flight tracking and complimentary meet & greet service inside the terminal included with every
            airport transfer. Up to 60 minutes free waiting time.
          </p>
          <Link
            to="/pricing/airport"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            See Airport Rates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 2 — SELECT SERVICE TYPE */}
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <h3 className="text-4xl font-semibold text-navy md:text-5xl">Select Service Type</h3>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border-2 border-transparent transition-all hover:-translate-y-1 hover:border-gold hover:shadow-2xl"
                style={{ boxShadow: "0 0 0 transparent" }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/30 transition-opacity group-hover:from-navy/90" />
                <h3 className="relative z-10 px-4 text-center text-xl font-bold tracking-wide text-white md:text-2xl">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BADGES */}
      <section className="bg-navy py-12 text-center text-white">
        <div className="container-luxury">
          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex w-40 flex-col items-center gap-3 text-center">
                <Icon className="h-8 w-8 text-gold" />
                <span className="text-sm font-semibold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR SERVICES */}
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Services</p>
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Our Services</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="text-lg font-bold uppercase leading-tight text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <Link
                    to={s.to}
                    className="mx-auto mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE US */}
      <section className="bg-silver/20 py-20 text-center">
        <div className="container-luxury">
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">Why Choose Our NYC Limo & Chauffeur Service</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">We Treat Our Customers Like Royalty</p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FLEET PREVIEW */}
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <h3 className="text-4xl font-semibold text-navy md:text-5xl">Our Luxury Limousine Fleet</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Convenience comes in many forms — we have the perfect vehicle for you
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            NY City Limousine offers a full range of luxury vehicles including stretch limousines, executive sedans, SUVs,
            Mercedes Sprinter Vans, Hummer Limousines, and Coach Buses. Complimentary soft drinks and water
            inside all vehicles. Champagne service available inside limousines upon request.
          </p>
          <div className="mx-auto mt-12">
            <FleetSlider />
          </div>
          <Link
            to="/fleet"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy/90"
          >
            View Full Fleet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>


      {/* SECTION 8 — TOURS (HIDDEN) */}
      {false && (
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">Private Limousine Tours of New York City</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See the city like never before — all-inclusive tour packages
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            NY City Limousine gives you a tour of the city that would take 4–5 days on your own — covered in just hours. We
            offer historical, informative, enjoyable, and memorable private tours. All tour packages can be customized
            to suit your group. Our knowledgeable chauffeur-guides are native English speakers; several foreign language
            experts also available upon request. Pick-up and drop-off at your hotel.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((t) => (
              <article
                key={t.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center p-5 text-center">
                  <h3 className="text-base font-bold text-navy">{t.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-semibold text-white hover:opacity-90"
                  >
                    Book This Tour
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-sm text-muted-foreground">
            ✅ All tour packages include: vehicle hire · professional chauffeur · taxes & tolls · gratuity ·
            complimentary non-alcoholic beverages · champagne service inside limousines
          </p>
        </div>
      </section>
      )}

      {/* SECTION 9 — ABOUT */}
      <section className="bg-silver/20 py-20">
        <div className="container-luxury">
          <h2 className="text-center text-4xl font-semibold text-navy md:text-5xl">
            Premium Ground Transportation Built for New York City
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional chauffeur in suit standing beside a luxury car"
              className="mx-auto aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="text-left">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                New York City operates at a pace that tolerates no mistakes 
                in ground transportation. A delayed car can cost a deal, a flight, 
                or a first impression. Our luxury chauffeur service was built for 
                travelers who treat time as their most valuable asset.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Every booking includes a professionally trained, TLC-licensed 
                chauffeur driving a late-model luxury vehicle. You receive a 
                confirmation within seconds, a direct chauffeur contact number, 
                and live GPS tracking from dispatch to drop-off. No surge pricing. 
                No hidden tolls. No last-minute cancellations.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-navy md:text-base">
                We serve all five NYC boroughs, Long Island, New Jersey, and 
                Connecticut — with seamless connections to JFK, LaGuardia, and 
                Newark Liberty International Airport.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {[
                  { icon: CheckCircle2, label: "Licensed & Insured" },
                  { icon: Award, label: "5-Star Rated Service" },
                  { icon: Briefcase, label: "Corporate Accounts Welcome" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-2 text-xs font-semibold text-navy"
                  >
                    <Icon className="h-4 w-4 text-gold" /> {label}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy/90"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — LOCATIONS */}
      <section className="bg-background py-20">
        <div className="container-luxury">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Service Area</p>
              <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Serving All of New York City</h2>
              <div className="mt-4 h-px w-24 bg-gold" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Our service area covers every neighbourhood, borough, 
                and gateway in the New York metropolitan region. We operate 
                from the Financial District to Washington Heights in Manhattan; 
                from Williamsburg to Bay Ridge in Brooklyn; from Astoria to 
                Jamaica in Queens; across the Bronx and Staten Island; and 
                into Long Island, New Jersey, and Connecticut.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our chauffeurs know that the FDR Drive backs up south of the 
                Brooklyn Bridge at 5:30 p.m. They know that the Belt Parkway 
                runs faster to JFK than the Van Wyck during summer Fridays. 
                This is not navigation-app knowledge — this is years of 
                professional driving across New York's most complex road network.
              </p>
            </div>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80" alt="New York City skyline" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — HOW TO BOOK */}
      <section className="bg-navy py-20 text-white">
        <div className="container-luxury">
          <div className="text-center">
            <h2 className="text-4xl font-semibold md:text-5xl">How to Book</h2>
            <div className="mx-auto mt-4 h-px w-24 bg-gold" />
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
              Booking takes under two minutes. Corporate clients can set up a company account for centralised billing across unlimited travellers. All bookings can be modified up to two hours before pickup at no charge.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-3">
            {[
              { icon: MapPin, title: "1. Enter Details", desc: "Enter your pickup address, destination, date, and time." },
              { icon: Car, title: "2. Select Vehicle", desc: "Choose your vehicle based on passenger count and luggage." },
              { icon: ShieldCheck, title: "3. Confirm Securely", desc: "Pay securely online. Your confirmation arrives immediately." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-gold/30 bg-white/5 p-8 text-center backdrop-blur transition-all hover:bg-white/10 hover:-translate-y-1">
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION — FAQ */}
      <section className="bg-background py-20">
        <div className="container-luxury">
          <h2 className="text-center text-4xl font-semibold text-navy md:text-5xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-14 max-w-4xl space-y-8">
            {[
              {
                q: "How far in advance should I book an NYC limo?",
                a: "For airport transfers, book at least 24 hours ahead. For weddings, proms, and large events, book 4–8 weeks in advance. Same-day bookings are available via phone for sedan and SUV trips subject to availability.",
              },
              {
                q: "Are your rates fixed or metered?",
                a: "All rates are fixed and quoted at the time of booking. Tolls, congestion pricing, and airport fees are included. Gratuity is not included and typically ranges from 15–20%.",
              },
              {
                q: "What airports do you serve?",
                a: "We serve JFK, LaGuardia (LGA), Newark Liberty (EWR), and Teterboro (TEB) airports.",
              },
              {
                q: "Do your chauffeurs track my flight?",
                a: "Yes. Every airport transfer includes complimentary real-time flight tracking. If your flight is delayed, your chauffeur adjusts automatically at no extra charge.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellations made more than 24 hours before pickup receive a full refund. For same-day cancellations, please call us directly.",
              },
              {
                q: "Are your vehicles and drivers TLC-licensed?",
                a: "Yes. All vehicles and chauffeurs are fully licensed by the New York City Taxi & Limousine Commission.",
              },
              {
                q: "Can I book a limo for a full day?",
                a: "Yes. Our hourly service allows you to retain a chauffeur and vehicle for as many hours as needed, ideal for corporate road shows and event-heavy schedules.",
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

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <h3 className="text-4xl font-semibold text-navy md:text-5xl">What Our Clients Say</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Trusted by thousands of New Yorkers and visitors worldwide
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-navy">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — STATS */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="container-luxury">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="text-4xl font-bold text-gold md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — CTA BANNER */}
      <section className="bg-gold py-20 text-center text-white">
        <div className="container-luxury">
          <h3 className="text-4xl font-semibold md:text-5xl">Ready to Experience NY City Limousine?</h3>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg">
            Book your luxury limousine today and travel through New York City in unmatched style and comfort.
            All-inclusive pricing — no hidden fees, ever.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">
            Your credit card will not be charged until 24 hours before your trip. Free cancellation up to 24 hours
            before service.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy hover:bg-white/90"
            >
              Book Your Ride Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+19177354320"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-navy"
            >
              <Phone className="h-4 w-4" /> Call +1 (917) 735-4320
            </a>
          </div>
        </div>
      </section>
    </PageShell>
    </>
  );
}
