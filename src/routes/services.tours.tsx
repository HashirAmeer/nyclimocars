import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { MiniFleet } from "@/components/MiniFleet";
import { BookingCTA } from "@/components/BookingCTA";
import { FLEET, fmt } from "@/lib/fleet";
import { Award, Lock, ListChecks, Hotel, BookOpen, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/services/tours")({
  head: () => ({
    meta: [
      { title: "NYC Private Limousine Tours | Sightseeing Limo Tour New York | NY City Limousine" },
      { name: "description", content: "Explore NYC in luxury with NY City Limousine private tours. Times Square, Central Park, Statue of Liberty & more. All-inclusive packages with professional chauffeur-guide." },
      { property: "og:title", content: "Private Limousine Tours of New York City" },
      { property: "og:description", content: "All-inclusive private tour packages of NYC." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1600712364716-eab8cabac7d0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
  }),
  component: ToursPage,
});

const TOURS = [
  {
    title: "Classic NYC Sightseeing Tour",
    image: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Visit Times Square, Central Park, Brooklyn Bridge, Statue of Liberty views, Rockefeller Center, Greenwich Village, and more. Stop whenever you like for photos or shopping.",
  },
  {
    title: "NYC Night Lights Tour",
    image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Witness New York City come alive after dark. Marvel at the glittering skyline, illuminated skyscrapers, and the electric energy of Manhattan by night.",
  },
  {
    title: "NYC Tour with Licensed Guide",
    image: "https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "The complete limousine experience with a licensed tour guide. Get historical context and insider stories across all five boroughs.",
  },
  {
    title: "Shopping Tour to Woodbury Common",
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Visit Woodbury Common Premium Outlets featuring 220+ designer brands including Coach, Dior, and Versace — one hour north of NYC.",
  },
];

const BENEFITS = [
  { icon: Award, title: "Professional Service", desc: "Experienced chauffeurs with expert knowledge of NYC." },
  { icon: Lock, title: "Completely Private", desc: "Exclusively for you, your family, and friends — no other parties." },
  { icon: ListChecks, title: "Customizable Wish List", desc: "We take you anywhere you want during your tour duration." },
  { icon: Hotel, title: "Hotel Pick & Drop", desc: "Default pick-up and drop-off at your hotel." },
  { icon: BookOpen, title: "Educational & Entertaining", desc: "Informative guides cover history, culture, and hidden gems." },
  { icon: Clock, title: "Time-Saving", desc: "See in hours what would take days to explore on your own." },
];

const INCLUDED = [
  "Professional licensed chauffeur",
  "All vehicle costs and fuel",
  "Taxes and tolls",
  "Gratuity",
  "Complimentary non-alcoholic beverages",
  "Champagne service inside limousines",
  "Hotel pick-up and drop-off",
];

const TERMS = [
  "Once booked, you will be contacted for pick-up time and any special requests.",
  "Available for day and night tours.",
  "All tour locations subject to availability.",
  "Please reserve ahead of time.",
];

function ToursPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="City Tours"
        title="Private Limousine Tours of New York City"
        subtitle="See NYC Like Never Before — All-Inclusive Private Tour Packages"
        image="https://images.unsplash.com/photo-1600712364716-eab8cabac7d0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="bg-background">
        <div className="container-luxury mx-auto py-8 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-navy">
            Book a Tour
          </Link>
        </div>
      </div>

      <section className="bg-background pb-16 pt-4">
        <div className="container-luxury mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experience the Big Apple with NY City Limousine's exclusive private limousine tour packages. We give you a tour of the city that would take 4 to 5 days on your own — covered in just a few hours. We are well known for providing historical, informative, enjoyable, and memorable tours. All tour packages can be customized to suit your group. Our knowledgeable chauffeur-guides are native English speakers. Pick-up and drop-off at your hotel.
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Tour Packages</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">Choose Your Adventure</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2">
            {TOURS.map((t) => (
              <div key={t.title} className="overflow-hidden rounded-2xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <img src={t.image} alt={t.title} className="h-56 w-full object-cover" loading="lazy" />
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-navy">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Why Tour with Us</h2>
          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
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

      {/* What's Included */}
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

      {/* Terms */}
      <section className="bg-background py-16">
        <div className="container-luxury mx-auto">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-navy">Terms &amp; Conditions</h3>
            <ul className="mx-auto mt-4 space-y-2 text-sm text-muted-foreground">
              {TERMS.map((t) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <MiniFleet />

      {/* Tours Rates */}
      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Tour Pricing</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            NYC Limousine Tour Rates — All-Inclusive
          </h2>
          <div className="mx-auto mt-10 max-w-6xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-center text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Vehicle</th>
                  <th className="px-4 py-4">Passengers</th>
                  <th className="px-4 py-4 text-gold">2 Hours</th>
                  <th className="px-4 py-4 text-gold">4 Hours</th>
                  <th className="px-4 py-4 text-gold">6 Hours</th>
                  <th className="px-4 py-4 text-gold">8 Hours (Full Day)</th>
                </tr>
              </thead>
              <tbody>
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={i % 2 ? "bg-secondary/20" : ""}>
                    <td className="px-4 py-3 text-left font-semibold text-navy">{v.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{v.pax}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour2)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour4)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour6)}</td>
                    <td className="px-4 py-3 font-medium text-navy">{fmt(v.tour8)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-sm text-muted-foreground">
            All tour rates are all-inclusive: vehicle, chauffeur, taxes, tolls, gratuity, and complimentary beverages. Champagne included inside limousines. Minimum 2-hour booking required.
          </p>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
