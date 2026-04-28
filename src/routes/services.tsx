import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";

type ServiceProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  hero: string;
  intro: string;
  features: string[];
  highlights: { icon: LucideIcon; title: string; desc: string }[];
  pricingHref: "/pricing/hourly" | "/pricing/airport" | "/pricing/point-to-point" | "/pricing/tours";
};

export function ServicePage(p: ServiceProps) {
  return (
    <PageShell>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} image={p.hero} />

      <section className="bg-background py-20">
        <div className="container-luxury grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Overview</p>
            <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">{p.title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{p.intro}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-gold hover:text-navy transition-colors">
                Reserve Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={p.pricingHref} className="inline-flex items-center gap-2 rounded-full border border-navy/30 px-7 py-3.5 text-sm font-semibold text-navy hover:border-gold hover:text-gold transition-colors">
                See Rates
              </Link>
            </div>
          </div>

          <img src={p.hero} alt={p.title} className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">The NYC Limo Car difference.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gold/20 bg-white/5 p-7">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// dummy default export not needed; this is a route-less helper file via createFileRoute below
export const Route = createFileRoute("/services")({
  component: () => null,
});
