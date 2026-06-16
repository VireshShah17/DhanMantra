import { Link } from "react-router-dom";
import logo from "@/assets/logo/logo.svg";
import { BRAND } from "@/constants/brand";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${BRAND.name} - Home`}
    >
      <img
        src={logo}
        alt={`${BRAND.name} logo`}
        className={
          variant === "full"
            ? "h-10 w-auto sm:h-12 lg:h-15 lg:scale-125 origin-left" // Zooms in by 25% on laptops
            : "h-10 w-10"
        }
        loading="eager"
      />
    </Link>
  );
}
