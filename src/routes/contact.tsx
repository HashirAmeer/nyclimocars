import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PageShell, PageHero } from "@/components/PageShell";
import {
  Phone, Mail, MapPin, Clock, Minus, Plus, Loader2, Lock,
  Facebook, Instagram, MessageCircle, ShieldCheck, RefreshCw, CreditCard,
} from "lucide-react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/JsonLd";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const PHONE = "+1 (917) 735-4320";
const PHONE_HREF = "tel:+19177354320";
const EMAIL = "info@nycitylimousine.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Limo | Contact NY City Limousine | Luxury Limousine New York City" },
      { name: "description", content: "Book your NY City Limousine luxury limousine online or by phone. Airport transfers, hourly service, tours, point-to-point rides across New York City. Available 24/7. Fast response guaranteed." },
      { property: "og:title", content: "Book a Limo | NY City Limousine" },
      { property: "og:description", content: "Reserve your luxury limousine in New York City — available 24/7." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=70" },
    ],
  }),
  component: ContactPage,
});

const VEHICLES = [
  "No Preference", "Lincoln Sedan", "Cadillac Sedan", "Chevrolet SUV",
  "Cadillac Escalade", "Mercedes C Class", "Mercedes S Class",
  "Black Limousine", "Sprinter Van",
  "Hummer Limousine", "Coach Bus",
];

const SERVICES = ["Hourly Service", "Airport Service", "Point to Point", "Tours Service"];

type Errors = Record<string, string>;

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const today = new Date().toISOString().split("T")[0];

  function validate(form: HTMLFormElement): Errors {
    const e: Errors = {};
    const fd = new FormData(form);
    const required = ["service", "pickup_date", "pickup_time", "pickup_location", "dropoff_location", "from_name", "phone", "reply_to"];
    for (const key of required) {
      if (!String(fd.get(key) ?? "").trim()) e[key] = "This field is required";
    }
    const email = String(fd.get("reply_to") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.reply_to = "Enter a valid email";
    const phone = String(fd.get("phone") ?? "").replace(/\D/g, "");
    if (phone && phone.length < 7) e.phone = "Enter a valid phone (min 7 digits)";
    const date = String(fd.get("pickup_date") ?? "");
    if (date && date < today) e.pickup_date = "Pickup date can't be in the past";
    return e;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;
    setLoading(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, { publicKey: EMAILJS_PUBLIC_KEY });
      setSent(true);
      form.reset();
      setPassengers(1);
      setLuggage(0);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrors({ _form: "Something went wrong. Please call us at " + PHONE });
    } finally {
      setLoading(false);
    }
  }

  const errBorder = (k: string) => errors[k] ? "border-destructive" : "border-border";

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact & Reservations"
        title="Book Your Luxury Limousine"
        subtitle="Reserve Online or Call Us 24/7 — We Respond Within 30 Minutes"
        image="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=70"
      />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="container-luxury py-4 text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-navy font-medium">Contact</span>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-luxury max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — Contact info */}
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-navy md:text-4xl">Get In Touch</h2>
              <div className="mx-auto mt-4 h-px w-20 bg-gold" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Phone", value: PHONE, sub: "Available 24/7", href: PHONE_HREF },
                { icon: Mail, label: "Email", value: EMAIL, sub: "Reply within 30 min", href: `mailto:${EMAIL}` },
                { icon: MapPin, label: "Location", value: "New York City, NY", sub: "Serving Tri-State Area" },
                { icon: Clock, label: "Hours", value: "24 / 7 / 365", sub: "Always available" },
              ].map(({ icon: Icon, label, value, sub, href }) => {
                const inner = (
                  <>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gold">{label}</p>
                    <p className="mt-1 font-medium text-navy">{value}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="rounded-xl border border-border bg-card p-5 transition-all hover:border-gold/60 hover:shadow-md">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="rounded-xl border border-border bg-card p-5">{inner}</div>
                );
              })}
            </div>

            {/* Booking policy */}
            <div className="rounded-2xl bg-navy p-6 text-center text-white md:p-8">
              <h3 className="text-lg font-semibold text-gold">Booking Policy</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Upon submitting your reservation form, you will be entered into our system. Your credit card will not be charged until 24 hours before your trip. You will receive a follow-up email with your Trip Confirmation Number and the final estimated price. After receiving your Trip Confirmation Number, your vehicle is guaranteed to be there waiting for you.
              </p>
            </div>

            {/* Trust cards */}
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, text: "No Charge Until 24hrs Before Trip" },
                { icon: RefreshCw, text: "Free Cancellation Up to 24 Hours" },
                { icon: CreditCard, text: "All Major Credit Cards Accepted" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-xl border border-border bg-card p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-gold" />
                  <p className="mt-2 text-xs font-medium text-navy">{text}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="NY City Limousine location"
                src="https://www.google.com/maps?q=New+York+City&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Follow Us</p>
              <div className="mt-3 flex justify-center gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: MessageCircle, href: "https://wa.me/19177354320", label: "WhatsApp" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                     className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold transition-transform hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Booking form */}
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-navy md:text-4xl">Reserve Your Ride</h2>
              <div className="mx-auto mt-4 h-px w-20 bg-gold" />
            </div>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy">Reservation Received</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you! Our team will confirm your booking within 30 minutes via email or phone.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
                  Book another ride
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8 space-y-5"
              >
                <FieldWrap label="Select Service *" error={errors.service}>
                  <select name="service" defaultValue=""
                    className={`w-full rounded-lg border ${errBorder("service")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`}>
                    <option value="" disabled>Choose a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </FieldWrap>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FieldWrap label="Pickup Date *" error={errors.pickup_date}>
                    <input type="date" name="pickup_date" min={today}
                      className={`w-full rounded-lg border ${errBorder("pickup_date")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                  </FieldWrap>
                  <FieldWrap label="Pickup Time *" error={errors.pickup_time}>
                    <input type="time" name="pickup_time"
                      className={`w-full rounded-lg border ${errBorder("pickup_time")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                  </FieldWrap>
                </div>

                <FieldWrap label="Pickup Location *" error={errors.pickup_location}>
                  <input type="text" name="pickup_location" placeholder="Enter full pickup address"
                    className={`w-full rounded-lg border ${errBorder("pickup_location")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                </FieldWrap>

                <FieldWrap label="Drop-off Location *" error={errors.dropoff_location}>
                  <input type="text" name="dropoff_location" placeholder="Enter full drop-off address"
                    className={`w-full rounded-lg border ${errBorder("dropoff_location")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                </FieldWrap>

                <div className="grid gap-5 sm:grid-cols-2">
                  <CounterField label="Number of Passengers *" name="passengers" value={passengers} setValue={setPassengers} min={1} max={50} />
                  <CounterField label="Number of Luggage *" name="luggage" value={luggage} setValue={setLuggage} min={0} max={50} />
                </div>

                <FieldWrap label="Preferred Vehicle">
                  <select name="vehicle" defaultValue="No Preference"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none">
                    {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </FieldWrap>

                <FieldWrap label="Full Name *" error={errors.from_name}>
                  <input type="text" name="from_name"
                    className={`w-full rounded-lg border ${errBorder("from_name")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                </FieldWrap>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FieldWrap label="Contact Number *" error={errors.phone}>
                    <input type="tel" name="phone"
                      className={`w-full rounded-lg border ${errBorder("phone")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                  </FieldWrap>
                  <FieldWrap label="Email Address *" error={errors.reply_to}>
                    <input type="email" name="reply_to"
                      className={`w-full rounded-lg border ${errBorder("reply_to")} bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none`} />
                  </FieldWrap>
                </div>

                <FieldWrap label="Special Requests or Notes">
                  <textarea name="message" rows={4}
                    placeholder="Flight number, special occasions, additional stops, accessibility needs, etc."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                </FieldWrap>

                {errors._form && (
                  <p className="text-center text-sm text-destructive">{errors._form}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#A27A4B] px-6 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#8a6740] disabled:opacity-70"
                >
                  {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>) : "Book My Ride"}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Secure booking. Your credit card will not be charged until 24 hours before your trip.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold" />
          <Accordion type="single" collapsible className="mt-10 text-left">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card mb-3 px-5">
                <AccordionTrigger className="text-base font-medium text-navy hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.nycitylimousine.com/" },
        { name: "Contact", url: "https://www.nycitylimousine.com/contact" },
      ])} />
    </PageShell>
  );
}

function FieldWrap({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="text-left">
      <label className="text-xs font-semibold uppercase tracking-widest text-navy">{label}</label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

function CounterField({
  label, name, value, setValue, min, max,
}: { label: string; name: string; value: number; setValue: (n: number) => void; min: number; max: number }) {
  return (
    <div className="text-left">
      <label className="text-xs font-semibold uppercase tracking-widest text-navy">{label}</label>
      <div className="mt-2 flex items-center justify-center gap-3 rounded-lg border border-border bg-background p-2">
        <button type="button" onClick={() => setValue(Math.max(min, value - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-gold hover:opacity-90 disabled:opacity-40"
          disabled={value <= min} aria-label={`Decrease ${label}`}>
          <Minus className="h-4 w-4" />
        </button>
        <input type="number" name={name} value={value} readOnly
          className="w-16 bg-transparent text-center text-base font-semibold text-navy focus:outline-none" />
        <button type="button" onClick={() => setValue(Math.min(max, value + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-navy hover:opacity-90 disabled:opacity-40"
          disabled={value >= max} aria-label={`Increase ${label}`}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const FAQS = [
  { q: "How do I book a limousine with NY City Limousine?", a: "You can book through our online form above, call us 24/7, or send us an email. We confirm all bookings within 30 minutes." },
  { q: "When will my credit card be charged?", a: "Your credit card will not be charged until 24 hours before your scheduled trip. You will receive a confirmation email with your Trip Confirmation Number before any charge is made." },
  { q: "Do you track flights for airport pickups?", a: "Yes. We monitor all incoming flights in real time. If your flight is delayed, we adjust your pickup time automatically at no extra charge." },
  { q: "What is included in the airport limousine service?", a: "All airport services include: free meet & greet inside the terminal with a personalized name sign, up to 60 minutes of complimentary waiting time, luggage assistance, complimentary water and soft drinks, and all-inclusive pricing with taxes and gratuity included." },
  { q: "Can I cancel my booking?", a: "Yes. We offer free cancellation up to 24 hours before your scheduled trip. For wedding and special event services, please refer to the specific cancellation policy provided at booking." },
  { q: "Do you serve areas outside New York City?", a: "Yes. We serve the entire Tri-State Area including New Jersey, Connecticut, and Long Island. Contact us for a custom quote for travel outside NYC's 5 Boroughs." },
  { q: "Do you offer complimentary beverages?", a: "Yes. Complimentary soft drinks and water are provided inside all vehicles. Champagne service is available inside limousines upon request." },
];
