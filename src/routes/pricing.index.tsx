import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { BookingCTA } from "@/components/BookingCTA";

export const Route = createFileRoute("/pricing/")({
  head: () => ({
    meta: [
      { title: "NYC Limo Rates & Pricing | Transparent All-Inclusive Fares" },
      { name: "description", content: "View NYC limousine and black car service rates. Transparent, all-inclusive pricing for airport transfers, hourly service, and special events. No hidden fees." },
      { property: "og:title", content: "NYC Limo Rates & Pricing | Transparent All-Inclusive Fares" },
      { property: "og:description", content: "View NYC limousine and black car service rates. Transparent, all-inclusive pricing for airport transfers, hourly service, and special events. No hidden fees." },
    ],
  }),
  component: PricingLanding,
});

const SERVICES = [
  { title: "Airport Rates",  to: "/pricing/airport",        img: "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { title: "Tours",          to: "/pricing/tours",          img: "https://images.pexels.com/photos/28680391/pexels-photo-28680391.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { title: "Hourly Rates",   to: "/pricing/hourly",         img: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { title: "Point to Point", to: "/pricing/point-to-point", img: "https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

function PricingLanding() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="We Treat Our Customers Like Royalty"
        subtitle="Select Service Type to View Rates"
        image="https://images.pexels.com/photos/12513224/pexels-photo-12513224.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="bg-background py-20">
        <div className="container-luxury mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl mb-12">Transparent NYC Limo Rates</h2>
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
                  <h3 className="text-lg font-semibold uppercase tracking-wider text-white group-hover:text-gold">
                    {s.title}
                  </h3>
                  <span className="mt-2 inline-block text-xs text-white/80">View rates →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-navy md:text-3xl mb-4">Understanding Our All-Inclusive Pricing</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Booking Policy</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for choosing NY City Limousine. Upon submitting a reservation form, you will be entered into our system.
              Your credit card will not be charged until 24 hours before your trip. You will receive a follow-up email with
              your Trip Confirmation Number and the final estimated price. After receiving your Trip Confirmation Number,
              your vehicle is guaranteed. Feel free to contact us at any time for booking or information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-luxury mx-auto">
          <h2 className="text-center text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-left">
            {[
              {
                q: "Are the rates on the website final?",
                a: "Yes, our rates are fixed and all-inclusive. You will see a transparent breakdown of all costs before booking.",
              },
              {
                q: "Are tolls included in the rate?",
                a: "Yes, all expected routing tolls are included in the all-inclusive pricing.",
              },
              {
                q: "Is gratuity included?",
                a: "Yes, a standard 20% gratuity is included in the all-inclusive rate so you don't have to worry about cash on the day.",
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
