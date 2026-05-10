import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Trophy, Plane, Hotel } from "lucide-react";

export function WorldCupPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      console.log("World Cup Popup Triggered");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Popup Card */}
      <div 
        className="relative z-[10000] w-full max-w-[600px] overflow-hidden rounded-[24px] border border-[#A27A4B]/40 bg-[#0F1C2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Texture/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1000&q=80"
            alt="World Cup Stadium"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/70 to-transparent" />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-[#A27A4B] hover:scale-110"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center p-8 text-center md:p-12">
          {/* FIFA Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#A27A4B] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl">
            ⚽ FIFA WORLD CUP 2026 — NYC
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            Experience the World Cup <br />
            <span className="text-[#A27A4B]">in Ultimate Luxury</span>
          </h2>

          {/* Subtitle */}
          <p className="mb-6 text-sm font-semibold tracking-wide text-white/90 md:text-base">
            Official Luxury Ground Transportation <br className="hidden md:block" />
            for FIFA World Cup 2026 matches in New York
          </p>

          {/* Body Text */}
          <p className="mb-8 text-sm leading-relaxed text-gray-300 md:text-base">
            Professional chauffeured service to and from all stadiums, airports, and hotels. Avoid the crowds and travel in absolute comfort.
          </p>

          {/* Features Row */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {[
              { icon: Trophy, text: "Match Days" },
              { icon: Plane, text: "Airport VIP" },
              { icon: Hotel, text: "Hotel Pickups" },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white"
              >
                <f.icon className="h-4 w-4 text-[#A27A4B]" />
                {f.text}
              </div>
            ))}
          </div>

          {/* Main Action */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group relative mb-4 flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#A27A4B] py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-[#0F1C2E] shadow-[0_10px_20px_rgba(162,122,75,0.3)] active:scale-95"
          >
            Book Your World Cup Ride Now
          </Link>

          {/* Secondary Action */}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="mb-8 text-xs font-bold text-white/70 transition-colors hover:text-[#A27A4B]"
          >
            Explore Our Luxury Fleet & Services →
          </Link>

          {/* Footnote */}
          <p className="text-[10px] font-medium tracking-wide text-gray-500 uppercase">
            Limited match-day slots available • early booking recommended
          </p>
        </div>
      </div>
    </div>
  );
}
