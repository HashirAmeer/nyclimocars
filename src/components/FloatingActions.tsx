import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/19177354320"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NY City Limousine on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:-translate-y-1 hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-all hover:-translate-y-1 ${
          show ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
