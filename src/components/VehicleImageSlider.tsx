import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  name: string;
  primaryImage: string;
}

const _vehicleFolderImages = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,webp}",
  { eager: true }
) as Record<string, { default: string }>;

function getVehicleFolderImages(vehicleName: string): string[] {
  const prefix = `/src/assets/${vehicleName}/`;
  return Object.entries(_vehicleFolderImages)
    .filter(([path]) => path.startsWith(prefix))
    .map(([, mod]) => mod.default)
    .sort();
}

export function VehicleImageSlider({ name, primaryImage }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = useMemo(() => {
    const additional = getVehicleFolderImages(name);
    return additional.length > 0 ? [primaryImage, ...additional] : [primaryImage];
  }, [name, primaryImage]);

  const hasMultiple = allImages.length > 1;

  const goPrev = () =>
    setCurrentIndex((i) => (i > 0 ? i - 1 : allImages.length - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i < allImages.length - 1 ? i + 1 : 0));

  return (
    <div className="relative w-full max-w-[400px]">
      <div className="relative overflow-hidden min-h-[350px]">
        {allImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={name}
            className={`absolute inset-0 w-full h-full object-contain drop-shadow-xl transition-opacity duration-500 ease-in-out ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            } pointer-events-none`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-gold" : "bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
