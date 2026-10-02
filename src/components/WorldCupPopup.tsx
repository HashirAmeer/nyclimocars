import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Trophy, Plane, Hotel } from "lucide-react";
import FifaBanner2 from "@/assets/fifabanner2.png";

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
        className="relative z-[10000] w-full max-w-[800px] overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-navy transition-all hover:bg-gold hover:text-white"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center p-8 text-center sm:p-10">
          <img
            src={FifaBanner2}
            alt="FIFA World Cup 2026 NYC"
            className="mb-[10px] w-full max-w-sm md:w-1/2 rounded-[10px] object-contain shadow-sm"
          />


          {/* Heading */}
          <h3 className="mb-4 text-[20px] font-bold leading-tight text-navy">
            NY City Limousine
            <span className="text-[#A27A4B]"> Luxury Transportation for FIFA World Cup 2026</span>
          </h3>

          {/* Subtitle */}
          {/* <p className="mb-6 text-sm font-semibold tracking-wide text-white/90">
            NY City Limousine - Luxury Transportation for FIFA World Cup 2026
          </p> */}

          {/* Body Text */}
          <p className="mb-8 text-[16px] leading-relaxed text-muted-foreground">
            Avoid the traffic and parking stress. Our professional chauffeurs will get you to every match in style, comfort, and on time. Serving all NYC stadiums, airports, and hotels.
          </p>

          {/* Features Row */}
          {/* <div className="mb-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Trophy, text: "All Match Days" },
              { icon: Plane, text: "Airport VIP" },
              { icon: Hotel, text: "Hotel Pickups" },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold text-white"
              >
                <f.icon className="h-3.5 w-3.5 text-[#A27A4B]" />
                {f.text}
              </div>
            ))}
          </div> */}

          {/* Action Buttons Row */}
          <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center rounded-xl bg-[#A27A4B] py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition-all hover:bg-navy hover:text-white shadow-lg active:scale-[0.98]"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center rounded-xl border-2 border-navy/20 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-navy transition-all hover:bg-navy hover:text-white active:scale-[0.98]"
            >
              Explore Services
            </Link>
          </div>

          {/* Footnote */}
          <p className="text-[10px] font-medium tracking-wide text-gray-500 uppercase">
            Limited availability • secure your luxury vehicle today
          </p>
        </div>
      </div>
    </div>
  );
}
