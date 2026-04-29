import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | NYC Limo Car — Select Service to View Rates" },
      {
        name: "description",
        content:
          "View transparent NYC Limo Car pricing — airport transfers, hourly limo rates, point-to-point and private tour packages. Select a service to see full rates.",
      },
      { property: "og:title", content: "NYC Limo Car — Pricing" },
      { property: "og:description", content: "All-inclusive transparent rates for every service." },
    ],
  }),
  component: PricingLanding,
});

const SERVICES = [
  { title: "Airport Rates",  to: "/pricing/airport",        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80" },
  { title: "Tours",          to: "/pricing/tours",          img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80" },
  { title: "Hourly Rates",   to: "/pricing/hourly",         img: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80" },
  { title: "Point to Point", to: "/pricing/point-to-point", img: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=1200&q=80" },
];

function PricingLanding() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="We Treat Our Customers Like Royalty"
        subtitle="Select Service Type to View Rates"
        image="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
      />

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative isolate flex h-64 items-end justify-center overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-1 hover:border-gold hover:shadow-2xl"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="relative z-10 w-full p-6 text-center">
                  <h2 className="text-lg font-semibold uppercase tracking-wider text-white group-hover:text-gold">
                    {s.title}
                  </h2>
                  <span className="mt-2 inline-block text-xs text-white/80">View rates →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Booking Policy</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for choosing NYC Limo Car. Upon submitting a reservation form, you will be entered into our system.
              Your credit card will not be charged until 24 hours before your trip. You will receive a follow-up email with
              your Trip Confirmation Number and the final estimated price. After receiving your Trip Confirmation Number,
              your vehicle is guaranteed. Feel free to contact us at any time for booking or information.
            </p>
          </div>
        </div>
      </section>

      <BookingCTA />
    </PageShell>
  );
}
