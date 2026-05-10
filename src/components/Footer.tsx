import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-navy text-white/80">
      {/* Newsletter */}
      <div className="border-b border-gold/20">
        <div className="container-luxury py-12 text-center">
          <h3 className="text-2xl font-semibold text-white">Get Exclusive Deals</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
            Subscribe for VIP offers and seasonal promotions from NY City Limousine.
          </p>
          <form onSubmit={subscribe} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-gold/30 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-sm text-gold">Thank you — you're on the list.</p>
          )}
        </div>
      </div>

      <div className="container-luxury grid gap-12 py-16 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-center lg:items-start">
          <Logo className="h-14 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            New York City's Premier Limousine Service.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/19177354320" },
              { Icon: Youtube, label: "YouTube", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services/airport" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/fleet" className="hover:text-gold">Fleet</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/airport" className="hover:text-gold">Airport Service</Link></li>
            <li><Link to="/services/hourly" className="hover:text-gold">Hourly Service</Link></li>
            <li><Link to="/services/point-to-point" className="hover:text-gold">Point to Point</Link></li>
            <li><Link to="/services/tours" className="hover:text-gold">Private NYC Tours</Link></li>
            <li><Link to="/services/wedding" className="hover:text-gold">Wedding Transportation</Link></li>
            <li><Link to="/services/corporate" className="hover:text-gold">Corporate Transportation</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+19177354320" className="hover:text-gold">+1 (917) 735-4320 · 24/7</a>
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:info@nycitylimousine.com" className="hover:text-gold">
                info@nycitylimousine.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <MapPin className="h-4 w-4 text-gold" />
              <span>New York City, NY</span>
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <Clock className="h-4 w-4 text-gold" />
              <span>Available 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="container-luxury flex flex-col items-center justify-center gap-3 py-6 text-center text-xs text-white/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} NY City Limousine. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
