import { Link } from "@tanstack/react-router";

interface BookingCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function BookingCTA({ 
  title = "Ready to Book Your NY City Limousine Experience?",
  subtitle = "Contact us 24/7 — we respond within 30 minutes.",
  buttonText = "Book Now"
}: BookingCTAProps) {
  return (
    <section className="bg-gold py-20 text-center text-white">
      <div className="container-luxury mx-auto">
        <h3 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
          {title}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          {subtitle}
        </p>
        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            {buttonText}
          </Link>
          <a
            href="tel:+19177354320"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gold"
          >
            Call +1 (917) 735-4320
          </a>
        </div>
      </div>
    </section>
  );
}
