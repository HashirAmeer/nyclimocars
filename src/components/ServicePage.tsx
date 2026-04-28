import { Link } from "@tanstack/react-router";
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

type Tier = { name: string; price: string; unit: string; features: string[]; featured?: boolean };

export function PricingPage({
  eyebrow, title, subtitle, hero, intro, tiers, notes,
}: {
  eyebrow: string; title: string; subtitle: string; hero: string;
  intro: string; tiers: Tier[]; notes: string[];
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={hero} />

      <section className="bg-background py-20">
        <div className="container-luxury">
          <p className="mx-auto max-w-2xl text-center text-muted-foreground">{intro}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  t.featured
                    ? "border-gold bg-navy text-white shadow-2xl scale-[1.02]"
                    : "border-border bg-card hover:border-gold/60 hover:shadow-lg"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-semibold ${t.featured ? "text-gold" : "text-navy"}`}>{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{t.price}</span>
                  <span className={`text-sm ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>/{t.unit}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-gold" : "text-gold"}`} />
                      <span className={t.featured ? "text-white/85" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    t.featured ? "bg-gold text-navy hover:opacity-90" : "bg-navy text-white hover:bg-gold hover:text-navy"
                  }`}
                >
                  Reserve Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-border bg-secondary/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Good to know</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {notes.map((n) => (
                <li key={n} className="flex gap-2"><span className="text-gold">•</span>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
