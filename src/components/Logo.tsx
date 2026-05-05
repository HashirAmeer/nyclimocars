import logo from "@/assets/logo.webp";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="NY City Limousine" className={className} />
    </Link>
  );
}
