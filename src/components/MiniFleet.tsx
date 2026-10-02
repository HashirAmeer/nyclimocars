import { FLEET } from "@/lib/fleet";
import { Users, Briefcase } from "lucide-react";

export function MiniFleet() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="container-luxury mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Fleet</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-navy md:text-4xl">
          Vehicles Available for This Service
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Choose from 11 meticulously maintained luxury vehicles for any group size.
        </p>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FLEET.map((v) => (
            <div
              key={v.name}
              className="group overflow-hidden rounded-xl border border-border bg-card text-center transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
            >
              <div className="bg-silver/10 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-40 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-navy">{v.name}</h3>
                <div className="mt-3 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-gold" /> {v.pax} pax</span>
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-gold" /> {v.bags} bags</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
