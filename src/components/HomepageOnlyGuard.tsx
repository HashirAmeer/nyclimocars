import { useEffect } from "react";

/**
 * TEMPORARY: Restricts the site to the homepage only.
 *
 * HOW TO RE-ENABLE ALL LINKS LATER:
 *   1. Open `src/routes/__root.tsx`.
 *   2. Remove the `<HomepageOnlyGuard />` line inside `RootComponent`.
 *   3. Remove the matching `import { HomepageOnlyGuard } ...` line at the top.
 *   4. (Optional) Delete this file: `src/components/HomepageOnlyGuard.tsx`.
 *
 * No links, routes, or markup are removed — navigation is only blocked at runtime.
 */
export function HomepageOnlyGuard() {
  useEffect(() => {
    const isHomeHref = (href: string | null) => {
      if (!href) return true;
      if (href.startsWith("#")) return true;
      if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:")) return true;
      try {
        const url = new URL(href, window.location.origin);
        // Allow external links (open in new tab etc.) and the homepage itself
        if (url.origin !== window.location.origin) return true;
        return url.pathname === "/" || url.pathname === "";
      } catch {
        return false;
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      // Allow external (new tab) links and same-page anchors / tel / mailto
      if (anchor.target === "_blank") return;
      if (isHomeHref(href)) return;

      e.preventDefault();
      e.stopPropagation();
    };

    // Capture phase so we run before TanStack Router's link handler
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
