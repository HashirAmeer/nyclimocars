import { Check } from "lucide-react";

export function InfoBadges({ items }: { items: string[] }) {
  return (
    <section className="bg-navy py-10">
      <div className="container-luxury mx-auto">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3">
          {items.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs font-semibold text-white sm:text-sm"
            >
              <Check className="h-4 w-4 text-gold" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
