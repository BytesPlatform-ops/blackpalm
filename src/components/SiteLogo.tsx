import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

// Stylized BlackPalm palm-tree-in-circle mark + wordmark
export function SiteLogo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "#ffffff" : "#0a0a0a";
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="BlackPalm Export-Import home">
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="30" stroke={color} strokeWidth="2.5" fill="none" />
        <text x="32" y="14" textAnchor="middle" fontSize="4.2" fill={color} fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="1">
          EXPORT
        </text>
        <text x="32" y="56" textAnchor="middle" fontSize="4.2" fill={color} fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="1">
          IMPORT
        </text>
        {/* Palm tree */}
        <g transform="translate(32 38)">
          <path d="M0 0 L0 -14" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          {/* fronds */}
          <path d="M0 -14 C -8 -18 -14 -15 -16 -10" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M0 -14 C 8 -18 14 -15 16 -10" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M0 -14 C -6 -22 -2 -26 4 -26" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M0 -14 C 6 -22 2 -26 -4 -26" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M0 -14 C -10 -12 -12 -6 -10 -2" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M0 -14 C 10 -12 12 -6 10 -2" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* coconut */}
          <circle cx="0" cy="-13" r="1.5" fill={color} />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-[1.2rem] tracking-tight" style={{ color }}>
          BlackPalm
        </span>
        <span className="text-[0.55rem] font-semibold tracking-[0.25em] mt-0.5" style={{ color, opacity: 0.7 }}>
          EXPORT-IMPORT
        </span>
      </span>
    </Link>
  );
}
