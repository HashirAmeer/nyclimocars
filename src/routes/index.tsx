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
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import LincolnSedan from "@/assets/lincoln-sedan.png";
import CadillacEscalade from "@/assets/cadillac-escalade.png";
import BlackLimousine from "@/assets/black-limousine.png";
import SprinterVan from "@/assets/sprinter-van.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NY City Limousine — Premium Limousine & Chauffeur Service in New York City" },
      {
        name: "description",
        content:
          "NY City Limousine: luxury limousine service in NYC. Airport transfers (JFK, LGA, EWR, TEB), hourly chauffeur, private NYC tours and corporate transportation. Available 24/7.",
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
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    to: "/services/airport" as const,
  },
  {
    title: "TOURS",
    img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1200&q=80",
    to: "/services/tours" as const,
  },
  {
    title: "HOURLY RATES",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
    to: "/services/hourly" as const,
  },
  {
    title: "POINT TO POINT",
    img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80",
    to: "/services/point-to-point" as const,
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
    title: "EVENT TRANSPORTATION",
    img: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=900&q=80",
    text: "NY City Limousine works with experienced drivers to serve each client with their event transportation needs. We take special precautions to ensure the transportation we provide meets the safety standards of the limousine industry. Our mission is to provide safety and comfort for clients on their way to events — whether it's a prom, concert, birthday party, bachelor/bachelorette party, sports event, or conference.",
    to: "/services/hourly" as const,
  },
  {
    title: "NYC AIRPORT LIMOUSINE SERVICE (JFK · LGA · EWR · TEB)",
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80",
    text: "NY City Limousine is among the top limousine service providers for airport transport in New York City. We provide limousine transfers to and from all major airports including JFK, LGA, EWR, and TEB. Complimentary meet & greet, flight monitoring, and up to 60 minutes free waiting time included.",
    to: "/services/airport" as const,
  },
  {
    title: "PRIVATE NEW YORK CITY LIMOUSINE TOURS",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900&q=80",
    text: "Experience the Big Apple with our exclusive private New York City limousine tour packages. Visit Times Square, Central Park, and the Statue of Liberty. NY City Limousine offers private tours with a knowledgeable chauffeur-guide who will take you through the most popular — and hidden — gems of the city across all five boroughs.",
    to: "/services/tours" as const,
  },
  {
    title: "LIMOUSINE SERVICE NYC FOR WEDDINGS",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    text: "NY City Limousine are experts in providing quality wedding transportation for your big day. Let us handle all your transportation needs so you have one less thing to worry about on the most important day of your life. We cover the bride and groom, wedding party, and all guests — with stretch limousines, luxury sedans, SUVs, and vans available.",
    to: "/services/hourly" as const,
  },
  {
    title: "NYC TO ATLANTIC CITY LIMOUSINE — CASINOS",
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=900&q=80",
    text: "There is nothing more exciting than a night at the casino. NY City Limousine ensures you travel to and from your casino night in style and comfort. Our professional chauffeurs take all the stress of driving off your shoulders — no parking, no traffic worries. Relax, enjoy complimentary beverages, and arrive ready to win big.",
    to: "/services/point-to-point" as const,
  },
  {
    title: "CORPORATE LIMOUSINE TRANSPORTATION",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    text: "At NY City Limousine, we understand there is no margin for error when it comes to corporate travel. We have made fulfilling the corporate ground transportation needs of our clients our specialty. From solo executive travel to large groups headed for meetings, conventions, or conferences — our polished chauffeurs and luxury fleet deliver impeccable service every time.",
    to: "/services/hourly" as const,
  },
];

const features = [
  {
    icon: Trophy,
    title: "Best Quality Limousines",
    text: "Enjoy the finest quality limousine service in New York City. Luxurious, immaculately maintained vehicles for any occasion and any group size.",
  },
  {
    icon: UserCheck,
    title: "Expert Chauffeurs",
    text: "Our professionally trained chauffeurs easily navigate New York City, providing a seamless, comfortable journey for every single passenger, every time.",
  },
  {
    icon: MapPin,
    title: "Many Locations Served",
    text: "NY City Limousine serves Manhattan, Brooklyn, the Bronx, Queens, Staten Island, and the entire Tri-State Area — bringing luxury transportation to your door.",
  },
  {
    icon: Radar,
    title: "Real-Time Flight Monitoring",
    text: "We monitor all incoming flights in real time. If your flight is delayed, we adjust your pickup time automatically — at no extra charge.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    text: "Meticulously maintained vehicles, licensed and insured chauffeurs — your safety and peace of mind is our top priority on every journey.",
  },
  {
    icon: DollarSign,
    title: "All-Inclusive Transparent Pricing",
    text: "No hidden fees, no surprises. All rates include taxes, gratuity, and tolls. What you see is exactly what you pay.",
  },
];

const fleet = [
  { name: "Lincoln Sedan", passengers: 3, luggage: 3, image: LincolnSedan },
  { name: "Cadillac Escalade", passengers: 6, luggage: 6, image: CadillacEscalade },
  { name: "Black Limousine", passengers: 8, luggage: 8, image: BlackLimousine },
  { name: "Sprinter Van", passengers: 14, luggage: 14, image: SprinterVan },
];

const airports = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=900&q=80",
  },
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=900&q=80",
  },
  {
    code: "TEB",
    name: "Teterboro Airport",
    img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=80",
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
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            NY City <span className="text-gold italic">Limousine</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium text-white/90 md:text-2xl">
            New York City's Premier Limousine & Chauffeur Service
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
            Luxury Airport Transfers · Hourly Service · Private NYC Tours · Available 24/7
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
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">NYC Airport Limousine Service</h2>
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
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">Select Service Type</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">What We Offer</h2>
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
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">Why Choose NY City Limousine?</h2>
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
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">Our Luxury Limousine Fleet</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Convenience comes in many forms — we have the perfect vehicle for you
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            NY City Limousine offers a full range of luxury vehicles including stretch limousines, executive sedans, SUVs,
            Mercedes Sprinter Vans, Hummer Limousines, and Coach Buses. Complimentary soft drinks and water
            inside all vehicles. Champagne service available inside limousines upon request.
          </p>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((v) => (
              <article
                key={v.name}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-[4/3] flex-col items-center justify-center bg-silver/10 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center p-5 text-center">
                  <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-navy">
                      <Users className="h-3 w-3" /> {v.passengers}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-navy">
                      <Briefcase className="h-3 w-3" /> {v.luggage}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/fleet"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy/90"
          >
            View Full Fleet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>


      {/* SECTION 8 — TOURS */}
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

      {/* SECTION 9 — ABOUT */}
      <section className="bg-silver/20 py-20">
        <div className="container-luxury">
          <h2 className="text-center text-4xl font-semibold text-navy md:text-5xl">About NY City Limousine</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold" />
          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80"
              alt="Professional chauffeur in suit standing beside a luxury car"
              className="mx-auto aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-navy md:text-3xl">
                New York City's Trusted Limousine Service
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Welcome to NY City Limousine — New York City's premier luxury limousine and chauffeur service. We are
                dedicated to offering the safest, most reliable, and most luxurious transportation in the Tri-State
                Area. Whether you need a ride to the airport, a chauffeured limousine for a special event, or a private
                tour of NYC — NY City Limousine is here to make you feel like royalty. Our fleet of immaculate limousines and
                executive vehicles will have you spoiled for choice, and our professional chauffeurs will add an extra
                level of luxury to every ride.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="bg-background py-20 text-center">
        <div className="container-luxury">
          <h2 className="text-4xl font-semibold text-navy md:text-5xl">What Our Clients Say</h2>
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
          <h2 className="text-4xl font-semibold md:text-5xl">Ready to Experience NY City Limousine?</h2>
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
  );
}
