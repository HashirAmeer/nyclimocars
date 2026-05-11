import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Users, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FLEET } from "@/lib/fleet";

export function FleetSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [emblaApi, isPaused]);

  return (
    <div className="relative mx-auto mt-12 max-w-7xl">
      {/* Slider Container */}
      <div 
        className="overflow-hidden" 
        ref={emblaRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex">
          {FLEET.map((v, index) => (
            <div 
              key={v.name} 
              className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex aspect-[4/3] flex-col items-center justify-center overflow-hidden bg-silver/10">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center p-5 text-center">
                  <h3 className="text-lg font-semibold text-navy">{v.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-navy">
                      <Users className="h-3 w-3" /> {v.pax}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-navy">
                      <Briefcase className="h-3 w-3" /> {v.bags}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gold shadow-lg transition-all hover:bg-gold hover:text-white md:-left-12"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gold shadow-lg transition-all hover:bg-gold hover:text-white md:-right-12"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === selectedIndex ? "bg-gold w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
