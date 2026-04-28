import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-luxury grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-14 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium chauffeured transportation across New York City. Discreet, punctual,
            and impeccably presented for every occasion.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-navy"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/hourly" className="hover:text-gold">Hourly Service</Link></li>
            <li><Link to="/services/airport" className="hover:text-gold">Airport Service</Link></li>
            <li><Link to="/services/point-to-point" className="hover:text-gold">Point to Point</Link></li>
            <li><Link to="/services/tours" className="hover:text-gold">Tours Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/fleet" className="hover:text-gold">Our Fleet</Link></li>
            <li><Link to="/pricing/hourly" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold shrink-0" />
              <span>350 5th Avenue, New York, NY 10118</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+12125550199" className="hover:text-gold">(212) 555-0199</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:reservations@nyclimocar.com" className="hover:text-gold">
                reservations@nyclimocar.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} NYC Limo Car. All rights reserved.</p>
          <p>Crafted for the discerning traveler.</p>
        </div>
      </div>
    </footer>
  );
}
