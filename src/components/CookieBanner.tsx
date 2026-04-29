import { useEffect, useState } from "react";

const KEY = "nyclimo_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {}
  }, []);

  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, "1"); } catch {}
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-navy/95 backdrop-blur">
      <div className="container-luxury flex flex-col items-center justify-between gap-4 py-4 text-center text-sm text-white/85 md:flex-row md:text-left">
        <p>We use cookies to enhance your experience on NYC Limo Car.</p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
