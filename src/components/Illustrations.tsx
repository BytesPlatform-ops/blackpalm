import { motion } from "framer-motion";

const CORAL = "#FF6B3D";

export function HeroWorldMap() {
  return (
    <svg viewBox="0 0 600 500" className="w-full h-auto" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={CORAL} stopOpacity="0.35" />
          <stop offset="100%" stopColor={CORAL} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arc" x1="0" x2="1">
          <stop offset="0%" stopColor={CORAL} />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* glow behind */}
      <circle cx="300" cy="250" r="220" fill="url(#glow)" />

      {/* dotted world (stylized) */}
      <g fill="rgba(255,255,255,0.18)">
        {Array.from({ length: 24 }).map((_, r) =>
          Array.from({ length: 36 }).map((_, c) => {
            const x = 60 + c * 14;
            const y = 80 + r * 14;
            // Carve continents loosely
            const cx = (c - 18) / 18;
            const cy = (r - 12) / 12;
            const d = Math.sqrt(cx * cx + cy * cy);
            if (d > 1) return null;
            // Sparse pattern + hollow band
            if ((r + c) % 2 === 0) return null;
            const inFlorida = c > 14 && c < 18 && r > 10 && r < 14;
            return <circle key={`${r}-${c}`} cx={x} cy={y} r={inFlorida ? 1.8 : 1.2} fill={inFlorida ? CORAL : "rgba(255,255,255,0.22)"} />;
          })
        )}
      </g>

      {/* Origin (Florida) */}
      <Pulse cx={300} cy={230} />
      {/* Destinations */}
      <Pulse cx={420} cy={300} delay={0.4} />
      <Pulse cx={200} cy={320} delay={0.8} />
      <Pulse cx={470} cy={180} delay={1.2} />

      {/* Animated arcs */}
      <ArcPath d="M300,230 Q360,140 420,300" delay={0.3} />
      <ArcPath d="M300,230 Q240,150 200,320" delay={0.6} />
      <ArcPath d="M300,230 Q400,140 470,180" delay={0.9} />

      {/* Floating packages along arcs */}
      <FloatingPkg path="M300,230 Q360,140 420,300" duration={6} delay={0.5} />
      <FloatingPkg path="M300,230 Q240,150 200,320" duration={7} delay={1.5} />
      <FloatingPkg path="M300,230 Q400,140 470,180" duration={6.5} delay={2.5} />
    </svg>
  );
}

function Pulse({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <g>
      <motion.circle
        cx={cx} cy={cy} r={4} fill={CORAL}
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay, type: "spring", damping: 14 }}
      />
      <motion.circle
        cx={cx} cy={cy} r={4} fill="none" stroke={CORAL} strokeWidth="1.5"
        animate={{ r: [4, 18, 4], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, delay }}
      />
    </g>
  );
}

function ArcPath({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d} fill="none" stroke="url(#arc)" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function FloatingPkg({ path, duration, delay }: { path: string; duration: number; delay: number }) {
  return (
    <g style={{ offsetPath: `path('${path}')`, animation: `float-pkg ${duration}s linear ${delay}s infinite` } as any}>
      <rect x={-7} y={-7} width="14" height="14" rx="2" fill={CORAL} />
      <rect x={-7} y={-7} width="14" height="14" rx="2" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" />
      <line x1={-7} y1={0} x2={7} y2={0} stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" />
    </g>
  );
}

// ----- Service / feature illustrations -----

const STROKE = 1.8;

export function IllShip({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="14" y="64" width="92" height="28" rx="4" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="22" y="44" width="48" height="20" fill={accent} opacity="0.15" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="28" y="48" width="10" height="12" fill={accent} />
      <rect x="42" y="48" width="10" height="12" fill="#0a0a0a" />
      <rect x="56" y="48" width="10" height="12" fill={accent} />
      <path d="M14 92 Q60 102 106 92" fill="none" stroke={accent} strokeWidth={STROKE * 1.4} strokeLinecap="round" />
      <path d="M8 100 Q60 110 112 100" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IllPlane({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M20 70 L100 40 L92 56 L60 64 L48 84 L40 82 L46 64 L24 60 Z" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M14 92 Q50 86 90 96" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} strokeDasharray="3 4" opacity="0.4" />
    </svg>
  );
}

export function IllBox({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M60 28 L96 44 L96 84 L60 100 L24 84 L24 44 Z" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M24 44 L60 60 L96 44" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
      <path d="M60 60 L60 100" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="48" y="36" width="24" height="6" fill={accent} />
    </svg>
  );
}

export function IllGlobe({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <circle cx="60" cy="60" r="36" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
      <ellipse cx="60" cy="60" rx="36" ry="14" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
      <ellipse cx="60" cy="60" rx="14" ry="36" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
      <path d="M24 60 H96" stroke="#0a0a0a" strokeWidth={STROKE} />
      <circle cx="50" cy="48" r="3" fill={accent} />
      <circle cx="74" cy="70" r="3" fill={accent} />
    </svg>
  );
}

export function IllDoc({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="30" y="22" width="60" height="76" rx="4" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <path d="M40 40 H80 M40 52 H80 M40 64 H68" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinecap="round" opacity="0.5" />
      <circle cx="76" cy="80" r="10" fill={accent} />
      <path d="M71 80 L75 84 L82 76" stroke="#fff" strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IllWarehouse({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M12 56 L60 28 L108 56 V100 H12 Z" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
      <rect x="34" y="64" width="20" height="18" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="66" y="64" width="20" height="18" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="50" y="84" width="20" height="16" fill="#0a0a0a" />
    </svg>
  );
}

export function IllConsolidate({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="14" y="20" width="22" height="22" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="14" y="48" width="22" height="22" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="14" y="76" width="22" height="22" fill="#0a0a0a" />
      <path d="M40 30 H68 M40 58 H68 M40 86 H68" stroke="#0a0a0a" strokeWidth={STROKE} strokeDasharray="2 3" />
      <rect x="72" y="40" width="36" height="40" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} />
      <path d="M72 50 H108" stroke="#0a0a0a" strokeWidth={STROKE} />
    </svg>
  );
}

export function IllDoor({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="20" y="50" width="60" height="40" rx="3" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="80" y="60" width="22" height="30" rx="3" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} />
      <circle cx="36" cy="96" r="6" fill="#0a0a0a" />
      <circle cx="90" cy="96" r="6" fill="#0a0a0a" />
      <path d="M30 50 V36 H58 V50" fill="none" stroke="#0a0a0a" strokeWidth={STROKE} />
    </svg>
  );
}

export function IllShield({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M60 18 L96 32 V62 C96 84 80 96 60 102 C40 96 24 84 24 62 V32 Z" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M44 60 L56 72 L78 50" stroke={accent} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IllChart({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="16" y="22" width="88" height="70" rx="4" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <path d="M24 80 L40 60 L56 70 L74 44 L96 50" fill="none" stroke={accent} strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="40" cy="60" r="3" fill={accent} />
      <circle cx="74" cy="44" r="3" fill={accent} />
      <rect x="40" y="100" width="40" height="6" rx="2" fill="#0a0a0a" />
    </svg>
  );
}

export function IllExpand({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <rect x="22" y="60" width="20" height="36" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="50" y="44" width="20" height="52" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} />
      <rect x="78" y="28" width="20" height="68" fill="#0a0a0a" />
      <path d="M22 24 H50 M40 18 L50 24 L40 30" stroke={accent} strokeWidth={2} fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function IllHeart({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M60 96 C 24 76 18 50 32 38 C 46 26 58 36 60 46 C 62 36 74 26 88 38 C 102 50 96 76 60 96 Z" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
    </svg>
  );
}

export function IllSpark({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <circle cx="60" cy="60" r="22" fill={accent} />
      <path d="M60 30 V14 M60 90 V106 M30 60 H14 M90 60 H106 M40 40 L28 28 M80 80 L92 92 M40 80 L28 92 M80 40 L92 28" stroke="#0a0a0a" strokeWidth={STROKE} strokeLinecap="round" />
    </svg>
  );
}

export function IllPin({ accent = CORAL }: { accent?: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <path d="M60 18 C 40 18 28 32 28 50 C 28 72 60 102 60 102 C 60 102 92 72 92 50 C 92 32 80 18 60 18 Z" fill={accent} stroke="#0a0a0a" strokeWidth={STROKE} strokeLinejoin="round" />
      <circle cx="60" cy="48" r="10" fill="#fff" stroke="#0a0a0a" strokeWidth={STROKE} />
    </svg>
  );
}

export function IllPortrait() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
      <rect width="200" height="200" rx="12" fill="#0a0a0a" />
      <circle cx="100" cy="84" r="34" fill={CORAL} />
      <path d="M40 200 C 40 144 70 124 100 124 C 130 124 160 144 160 200 Z" fill={CORAL} />
      <circle cx="100" cy="84" r="34" fill="none" stroke="#fff" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}
