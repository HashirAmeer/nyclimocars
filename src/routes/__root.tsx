import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NYC Limo Car — Premium Chauffeured Service in New York City" },
      { name: "description", content: "Luxury limousine and chauffeured car service in NYC. Hourly, airport, point-to-point and tour services with a meticulously maintained fleet." },
      { name: "theme-color", content: "#1A304F" },
      { property: "og:site_name", content: "NYC Limo Car" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "NYC Limo Car — Premium Chauffeured Service" },
      { property: "og:description", content: "Luxury chauffeured transportation across New York City." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1520975922323-388183fcd0bd?w=1200&q=80" },
      { property: "og:url", content: "https://www.nyclimocar.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NYC Limo Car — Premium Chauffeured Service" },
      { name: "twitter:description", content: "Luxury chauffeured transportation across New York City." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1520975922323-388183fcd0bd?w=1200&q=80" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.nyclimocar.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
