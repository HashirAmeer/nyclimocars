import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — NYC Limo Car" },
      { name: "description", content: "Reserve your luxury chauffeured ride. Available 24/7 across NYC. Call (212) 555-0199 or book online." },
      { property: "og:title", content: "Contact NYC Limo Car" },
      { property: "og:description", content: "Reserve your chauffeur 24/7." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Reserve your chauffeur."
        subtitle="Available 24 hours a day, 7 days a week. We typically respond within 15 minutes."
        image="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
      />

      <section className="bg-background py-20">
        <div className="container-luxury grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Call Us", value: "(212) 555-0199", href: "tel:+12125550199" },
              { icon: Mail, label: "Email", value: "reservations@nyclimocar.com", href: "mailto:reservations@nyclimocar.com" },
              { icon: MapPin, label: "Office", value: "350 5th Avenue, New York, NY 10118" },
              { icon: Clock, label: "Hours", value: "24 / 7 / 365" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href ?? "#"} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/60 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
                  <p className="mt-1 font-medium text-navy">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold text-navy">Request a Reservation</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill out the form and our team will confirm shortly.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <Field label="Pickup Location" name="pickup" required />
              <Field label="Drop-off Location" name="dropoff" required />
              <Field label="Date" name="date" type="date" required />
              <Field label="Time" name="time" type="time" required />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-navy">Service</label>
                <select className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none">
                  <option>Hourly Service</option>
                  <option>Airport Transfer</option>
                  <option>Point to Point</option>
                  <option>City Tour</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-navy">Notes</label>
                <textarea rows={4} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              {sent ? "Request Sent ✓" : <>Send Request <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", required, className = "",
}: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-navy">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}
