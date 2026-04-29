import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
      <div className="container-luxury relative py-28 text-center text-white md:py-36">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-6xl animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg animate-fade-up">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-8 h-px w-24 bg-gold" />
      </div>
    </section>
  );
}
