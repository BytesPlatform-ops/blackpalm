import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { PARTNERS } from "@/lib/assets";

/* ------------------------------------------------------------------ */
/* LazyVideo — autoplay/muted/loop/playsInline, IntersectionObserver  */
/* lazy load, poster always under it, graceful fallback on error      */
/* ------------------------------------------------------------------ */
export function LazyVideo({
  src,
  poster,
  className = "",
  rounded = "rounded-none",
  overlay = "none",
  priority = false,
  objectPosition = "center",
}: {
  src: string;
  poster: string;
  className?: string;
  rounded?: string;
  overlay?: "none" | "bottom" | "full" | "dark";
  priority?: boolean;
  objectPosition?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(priority);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (priority || load) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [priority, load]);

  // some browsers need an explicit play() after src assignment
  useEffect(() => {
    if (load && videoRef.current) {
      const p = videoRef.current.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    }
  }, [load]);

  const overlays: Record<string, string> = {
    none: "",
    bottom: "bg-gradient-to-t from-black/70 via-black/10 to-transparent",
    full: "bg-gradient-to-tr from-black/60 via-black/20 to-transparent",
    dark: "bg-black/45",
  };

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${rounded} ${className}`}>
      <Img src={poster} alt="" rounded="rounded-none" className="absolute inset-0 h-full w-full" priority={priority} />
      {load && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          style={{ objectPosition }}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={poster}
          onCanPlay={() => setReady(true)}
          onError={() => setReady(false)}
        >
          <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlay !== "none" && <div className={`absolute inset-0 ${overlays[overlay]}`} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tilt — 3D card tilt toward cursor                                  */
/* ------------------------------------------------------------------ */
export function Tilt({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* MouseGlow — coral radial glow that follows the cursor in a section */
/* ------------------------------------------------------------------ */
export function MouseGlow({ className = "", color = "rgba(255,107,61,0.16)" }: { className?: string; color?: string }) {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => { x.set(-1000); y.set(-1000); }}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
        style={{ left: sx, top: sy, background: color }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite auto-scroll row, hover pauses, two directions   */
/* ------------------------------------------------------------------ */
export function Marquee({ children, reverse = false, speed = 42, className = "" }: { children: ReactNode; reverse?: boolean; speed?: number; className?: string }) {
  return (
    <div className={`group/marquee relative overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-5 group-hover/marquee:[animation-play-state:paused]"
        style={{ animation: `marquee-x ${speed}s linear infinite`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Smart image: shimmer skeleton → fade in, branded fallback on error */
/* ------------------------------------------------------------------ */
export function Img({
  src,
  alt,
  className = "",
  imgClassName = "",
  zoom = false,
  overlay = "none",
  rounded = "rounded-2xl",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
  overlay?: "none" | "bottom" | "full" | "dark";
  rounded?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const overlays: Record<string, string> = {
    none: "",
    bottom: "bg-gradient-to-t from-black/70 via-black/10 to-transparent",
    full: "bg-gradient-to-tr from-black/60 via-black/20 to-transparent",
    dark: "bg-black/45",
  };

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      {/* shimmer / fallback layer */}
      {(!loaded || failed) && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#15110f] via-[#241a15] to-[#0a0a0a]">
          {!failed && (
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: "shimmer 1.6s infinite" }} />
          )}
          {failed && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-14 h-14 rounded-2xl bg-coral/20 border border-coral/40 grid place-items-center">
                <span className="w-5 h-5 rounded-md bg-coral" />
              </div>
            </div>
          )}
        </div>
      )}
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"} ${zoom ? "group-hover:scale-[1.06]" : ""} ${imgClassName}`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      )}
      {overlay !== "none" && <div className={`absolute inset-0 ${overlays[overlay]}`} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax image — subtle vertical drift on scroll                   */
/* ------------------------------------------------------------------ */
export function ParallaxImage({
  src,
  alt,
  className = "",
  amount = 60,
  overlay = "none",
  rounded = "rounded-3xl",
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  overlay?: "none" | "bottom" | "full" | "dark";
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Img src={src} alt={alt} rounded="rounded-none" className="h-full" overlay={overlay} />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cinematic band — full-bleed dark section w/ image or video bg      */
/* ------------------------------------------------------------------ */
export function CinematicBand({
  poster,
  videoSrc,
  children,
  className = "",
  minH = "min-h-[520px]",
  priority = false,
}: {
  poster: string;
  videoSrc?: string;
  children: ReactNode;
  className?: string;
  minH?: string;
  priority?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden bg-ink-deep text-white ${className}`}>
      <div className="absolute inset-0">
        {videoSrc ? (
          <LazyVideo src={videoSrc} poster={poster} className="h-full w-full" priority={priority} />
        ) : (
          <Img src={poster} alt="" rounded="rounded-none" className="h-full" priority={priority} />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-transparent" />
      </div>
      <div className={`relative container-x ${minH} flex flex-col justify-center py-20 lg:py-28`}>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading — consistent eyebrow + title + sub                 */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  light = false,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", damping: 24, stiffness: 200, delay: 0.05 }}
        className={`mt-3 font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight ${light ? "!text-white" : ""} ${center ? "max-w-3xl mx-auto" : "max-w-2xl"}`}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.12 }}
          className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-body"} ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic button — pulls toward cursor                              */
/* ------------------------------------------------------------------ */
export function Magnetic({ children, className = "", strength = 0.35 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * strength, y: (e.clientY - (r.top + r.height / 2)) * strength });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", damping: 16, stiffness: 220, mass: 0.4 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Logo cloud — infinite marquee of partner wordmarks                 */
/* ------------------------------------------------------------------ */
export function LogoCloud({ light = false }: { light?: boolean }) {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <div className="relative overflow-hidden" aria-label="Trusted by partners">
      <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r ${light ? "from-ink-deep" : "from-white"} to-transparent`} />
      <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l ${light ? "from-ink-deep" : "from-white"} to-transparent`} />
      <div className="marquee-track gap-14 py-2">
        {row.map((p, i) => (
          <span key={i} className={`whitespace-nowrap font-display font-semibold text-lg tracking-tight ${light ? "text-white/40" : "text-ink/35"}`}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Rating stars                                                       */
/* ------------------------------------------------------------------ */
export function Rating({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} className={i < value ? "fill-coral text-coral" : "text-hairline"} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                       */
/* ------------------------------------------------------------------ */
export interface Testimonial { quote: string; name: string; role: string; initials: string; avatar?: string; tag?: string; }

function Avatar({ t }: { t: Testimonial }) {
  return t.avatar ? (
    <span className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-coral/30 shrink-0">
      <Img src={t.avatar} alt={t.name} rounded="rounded-full" className="w-full h-full" />
    </span>
  ) : (
    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-coral to-coral-hover text-white grid place-items-center font-display font-bold text-sm shrink-0">
      {t.initials}
    </span>
  );
}

export function TestimonialCard({ t, light = false }: { t: Testimonial; light?: boolean }) {
  return (
    <div className={`group h-full flex flex-col rounded-2xl p-7 transition-all duration-400 ${light ? "glass-dark hover:bg-white/[0.09]" : "bg-white border border-hairline shadow-[0_22px_50px_-34px_rgba(10,10,10,0.3)] hover:-translate-y-1.5 hover:border-coral/50 hover:shadow-[0_30px_60px_-30px_rgba(255,107,61,0.4)]"}`}>
      <div className="flex items-center justify-between mb-4">
        <Quote size={26} className="text-coral/80 shrink-0" />
        {t.tag && <span className={`chip text-[11px] ${light ? "!bg-white/5 !border-white/15 !text-white/80" : ""}`}>{t.tag}</span>}
      </div>
      <Rating value={5} className="mb-4" />
      <p className={`flex-1 leading-relaxed ${light ? "text-white/85" : "text-body"}`}>"{t.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar t={t} />
        <div>
          <p className={`font-display font-bold text-sm ${light ? "!text-white" : ""}`}>{t.name}</p>
          <p className={`text-xs ${light ? "text-white/55" : "text-muted-text"}`}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturedTestimonial({ t, image }: { t: Testimonial; image: string }) {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] rounded-3xl overflow-hidden bg-ink-deep text-white shadow-[0_50px_100px_-50px_rgba(10,10,10,0.6)]">
      <div className="p-8 lg:p-14 flex flex-col justify-center">
        <Quote size={40} className="text-coral mb-6" />
        <Rating value={5} className="mb-5" />
        <p className="font-display text-2xl md:text-3xl !text-white leading-snug">"{t.quote}"</p>
        <div className="mt-8 flex items-center gap-4">
          <Avatar t={t} />
          <div>
            <p className="font-display font-bold !text-white">{t.name}</p>
            <p className="text-sm text-white/55">{t.role}</p>
          </div>
        </div>
      </div>
      <div className="relative min-h-[280px] lg:min-h-0">
        <Img src={image} alt={t.name} rounded="rounded-none" className="absolute inset-0 h-full" overlay="full" />
        {t.tag && <div className="absolute top-5 right-5 chip-dark">{t.tag}</div>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Horizontal drag/scroll carousel with snap + arrow controls         */
/* ------------------------------------------------------------------ */
export function HScroll({ children, ariaLabel }: { children: ReactNode; ariaLabel?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        aria-label={ariaLabel}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4 scroll-px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="hidden md:flex gap-2 mt-6 justify-end">
        <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="w-11 h-11 rounded-full border border-hairline grid place-items-center hover:bg-ink hover:text-white hover:border-ink transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="w-11 h-11 rounded-full border border-hairline grid place-items-center hover:bg-ink hover:text-white hover:border-ink transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
