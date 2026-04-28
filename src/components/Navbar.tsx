import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/hourly", label: "Hourly Service" },
  { to: "/services/airport", label: "Airport Service" },
  { to: "/services/point-to-point", label: "Point to Point Service" },
  { to: "/services/tours", label: "Tours Service" },
] as const;

const pricing = [
  { to: "/pricing/hourly", label: "Hourly Rates" },
  { to: "/pricing/airport", label: "Airport Rates" },
  { to: "/pricing/point-to-point", label: "Point to Point Rates" },
  { to: "/pricing/tours", label: "Tours Rates" },
] as const;

const linkClass =
  "relative px-1 py-2 text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-gold " +
  "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full " +
  "data-[status=active]:text-gold data-[status=active]:after:w-full";

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={linkClass + " inline-flex items-center gap-1"}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
        }`}
      >
        <div className="min-w-[240px] overflow-hidden rounded-lg border border-gold/30 bg-navy shadow-luxury"
             style={{ boxShadow: "var(--shadow-luxury)" }}>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-5 py-3 text-sm text-white/85 transition-colors hover:bg-gold/15 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy transition-all ${
        scrolled ? "shadow-lg shadow-navy/30 backdrop-blur" : ""
      }`}
    >
      <div className="border-b border-gold/20">
        <div className="container-luxury flex h-20 items-center justify-between">
          <Logo className="h-12 w-auto" />

          <nav className="hidden items-center gap-7 lg:flex">
            <Link to="/" activeOptions={{ exact: true }} className={linkClass}>Home</Link>
            <Dropdown label="Services" items={services} />
            <Link to="/about" className={linkClass}>About</Link>
            <Dropdown label="Pricing" items={pricing} />
            <Link to="/fleet" className={linkClass}>Fleet</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+12125550199"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-navy"
            >
              <Phone className="h-4 w-4" />
              (212) 555-0199
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-navy transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-gold/20 px-5">
            <Logo className="h-10 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-1 overflow-y-auto p-5">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileGroup label="Services" items={services} onClose={() => setMobileOpen(false)} />
            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            <MobileGroup label="Pricing" items={pricing} onClose={() => setMobileOpen(false)} />
            <MobileLink to="/fleet" onClick={() => setMobileOpen(false)}>Fleet</MobileLink>
            <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
            <a
              href="tel:+12125550199"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" /> Call (212) 555-0199
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

function MobileLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-md px-3 py-3 text-base text-white/90 hover:bg-gold/15 hover:text-gold data-[status=active]:text-gold"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
  onClose,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base text-white/90 hover:bg-gold/15 hover:text-gold"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 flex flex-col border-l border-gold/30 pl-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="rounded-md px-3 py-2 text-sm text-white/75 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
