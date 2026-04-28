import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Award, Users, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NYC Limo Car" },
      { name: "description", content: "15+ years of luxury chauffeured service in New York City. Meet the team behind NYC Limo Car." },
      { property: "og:title", content: "About NYC Limo Car" },
      { property: "og:description", content: "Our story, values, and commitment to luxury transportation." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="A New York standard of service."
        subtitle="Founded in 2008, NYC Limo Car was built on a simple promise: every ride should feel like a private occasion."
        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
      />

      <section className="bg-background py-24">
        <div className="container-luxury grid items-center gap-14 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=1200&q=80"
            alt="New York skyline at dusk"
            className="rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Story</p>
            <h2 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Built by New Yorkers, for New Yorkers.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              What began as a single Lincoln Town Car has grown into one of the city's most
              respected chauffeur services. We've never lost the family-business attention to
              detail — we've simply scaled it. Today our fleet serves Fortune 500 executives,
              wedding parties, visiting dignitaries, and locals who simply want a better ride.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every chauffeur we hire passes a rigorous background check, completes our
              in-house defensive driving program, and is trained in the etiquette of
              high-touch service. Because in this city, anything less simply will not do.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container-luxury">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Values</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">What we stand for.</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Punctuality", desc: "Every reservation, every minute. On time, every time." },
              { icon: Shield, title: "Discretion", desc: "Confidentiality is non-negotiable. We never see, never tell." },
              { icon: Award, title: "Excellence", desc: "Pristine vehicles, polished chauffeurs, perfect service." },
              { icon: Users, title: "Hospitality", desc: "Warmth and grace in every interaction, day or night." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gold/20 bg-white/5 p-7 backdrop-blur">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-luxury grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "15+", l: "Years in business" },
            { n: "50K+", l: "Rides completed" },
            { n: "30+", l: "Vehicles in fleet" },
            { n: "4.9★", l: "Guest rating" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl font-bold text-gold">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
