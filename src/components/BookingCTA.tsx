import { Link } from "@tanstack/react-router";

export function BookingCTA() {
  return (
    <section className="bg-gold py-20 text-center text-white">
      <div className="container-luxury mx-auto">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          Ready to Book Your NYC Limo Car Experience?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Contact us 24/7 — we respond within 30 minutes.
        </p>
        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Book Now
          </Link>
          <a
            href="tel:+18005466466"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold"
          >
            Call Us 24/7
          </a>
        </div>
      </div>
    </section>
  );
}
