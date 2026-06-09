import { motion } from "framer-motion";
import {
  ShoppingBag, Shirt, Laptop, Package, Plane, Ship, FileCheck, Warehouse, Layers, Truck,
  Play, MapPin, CheckCircle2, PackageCheck, Radio, Clock, Activity, ArrowRight,
  Calendar, Building2, Globe2, Boxes, Headphones, ShieldCheck, Star,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/Layout";
import { Img, LazyVideo, SectionHeading, Tilt, Marquee, TestimonialCard, type Testimonial } from "@/components/Media";
import { IMG } from "@/lib/assets";
import { MOTION_CLIPS } from "@/lib/videos";

/* =================================================================== */
/* 1. TRUE AUTO MARQUEE CAROUSEL — dual direction, hover-pause         */
/* =================================================================== */
const CATS = [
  { Icon: ShoppingBag, t: "Walmart Hauls", c: "Big-box orders, shipped worldwide.", img: IMG.ecommerce },
  { Icon: Shirt, t: "SHEIN Orders", c: "Fashion hauls, consolidated.", img: IMG.clothingRack },
  { Icon: Package, t: "Amazon Packages", c: "Marketplace parcels, one address.", img: IMG.parcelsPile },
  { Icon: Laptop, t: "Best Buy Electronics", c: "High-value gear, insured.", img: IMG.electronics },
  { Icon: Plane, t: "Air Freight", c: "Express lanes, 2–4 days.", img: IMG.airCargoLoading },
  { Icon: Ship, t: "Ocean Freight", c: "Bulk cargo at scale.", img: IMG.cargoShipSea },
  { Icon: FileCheck, t: "Customs Clearance", c: "Cleared before it lands.", img: IMG.customsDocs },
  { Icon: Warehouse, t: "Warehouse Storage", c: "Hold, repack, dispatch.", img: IMG.warehouseBoxes },
  { Icon: Layers, t: "Consolidation", c: "Many orders, one shipment.", img: IMG.packageHandling },
  { Icon: Truck, t: "Last-Mile Delivery", c: "To your door, anywhere.", img: IMG.boxesDoorstep },
];

function CatCard({ Icon, t, c, img }: (typeof CATS)[number]) {
  return (
    <article className="group/card relative shrink-0 w-[280px] rounded-2xl overflow-hidden border border-hairline bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-30px_rgba(255,107,61,0.5)] hover:border-coral/50">
      <div className="relative">
        <Img src={img} alt={t} className="aspect-[16/10]" rounded="rounded-none" zoom overlay="bottom" />
        <span className="absolute top-3 left-3 w-10 h-10 rounded-xl glass-light grid place-items-center text-coral">
          <Icon size={18} />
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold">{t}</h3>
        <p className="mt-0.5 text-sm text-body">{c}</p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-1 bg-coral scale-x-0 group-hover/card:scale-x-100 transition-transform origin-left duration-500" />
    </article>
  );
}

export function MarqueeCarousel() {
  const rowA = CATS.slice(0, 5);
  const rowB = CATS.slice(5);
  return (
    <section className="bg-white overflow-hidden">
      <div className="container-x pt-24 lg:pt-32">
        <SectionHeading
          eyebrow="From storefront to doorstep"
          title="Everything you buy. Everywhere you ship."
          sub="Retail, fashion, electronics, freight, customs, warehousing — one pipeline, endlessly in motion."
        />
      </div>
      <div className="mt-12 lg:mt-14 space-y-5 pb-24 lg:pb-32">
        <Marquee speed={46}>
          {rowA.map((c) => <div key={c.t} className="mr-5"><CatCard {...c} /></div>)}
        </Marquee>
        <Marquee speed={52} reverse>
          {rowB.map((c) => <div key={c.t} className="mr-5"><CatCard {...c} /></div>)}
        </Marquee>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 2. SEE BLACKPALM IN MOTION — horizontal video carousel             */
/* =================================================================== */
export function InMotion() {
  return (
    <section className="relative overflow-hidden bg-ink-deep text-white noise">
      <div className="absolute inset-0 bg-spotlight opacity-90" />
      <div className="relative container-x py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <SectionHeading light eyebrow="Real footage" title="See BlackPalm in motion." sub="No stock clichés — actual ports, freight, and facilities that move your goods every day." />
          <Reveal delay={0.1}>
            <span className="chip-dark"><Play size={13} className="text-coral" /> Autoplaying previews</span>
          </Reveal>
        </div>

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {MOTION_CLIPS.map((clip, i) => (
            <motion.article
              key={clip.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, type: "spring", damping: 24, stiffness: 200 }}
              className={`group/v relative snap-start shrink-0 ${clip.portrait ? "w-[230px]" : "w-[300px] sm:w-[420px]"}`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 group-hover/v:scale-[1.03] group-hover/v:border-coral/40">
                <LazyVideo
                  src={clip.src}
                  poster={clip.poster}
                  rounded="rounded-2xl"
                  className={clip.portrait ? "aspect-[9/16]" : "aspect-video"}
                  overlay="bottom"
                />
                <div className="absolute top-3 right-3 chip-dark !py-1 !px-2 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> LIVE
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[11px] uppercase tracking-wider text-coral font-semibold">{clip.tag}</p>
                  <h3 className="font-display font-bold text-lg !text-white">{clip.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/40 md:hidden">← Swipe to explore →</p>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 3. LIVE SHIPMENT DASHBOARD — enterprise software feel              */
/* =================================================================== */
const STAGES = [
  { Icon: PackageCheck, t: "Package Received", s: "Miami, FL · 09:14 EST", done: true },
  { Icon: Boxes, t: "Consolidated & Packed", s: "BlackPalm DC · 11:42 EST", done: true },
  { Icon: ShieldCheck, t: "Customs Cleared", s: "Air Cargo Terminal · 14:05 EST", done: true },
  { Icon: Plane, t: "In Transit", s: "MIA → KIN · ETA 2 days", done: false, active: true },
  { Icon: MapPin, t: "Out for Delivery", s: "Kingston, JM", done: false },
];
const ACTIVITY = [
  { Icon: CheckCircle2, t: "Customs cleared for BP-4827", time: "2m ago" },
  { Icon: Package, t: "3 parcels consolidated for L. Castillo", time: "18m ago" },
  { Icon: Plane, t: "Flight departed MIA → SDQ", time: "41m ago" },
  { Icon: Truck, t: "Out for delivery in Nassau", time: "1h ago" },
];

export function LiveDashboard() {
  return (
    <section className="relative overflow-hidden bg-ink-deep text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] max-w-[80vw] rounded-full bg-coral/10 blur-[130px]" />
      <div className="relative container-x py-24 lg:py-32">
        <SectionHeading light center eyebrow="Total visibility" title="Track every shipment like enterprise software." sub="A real-time view of where your goods are — from received to delivered, with customs and consolidation in between." />

        <Reveal>
          <div className="mt-14 rounded-3xl glass-dark overflow-hidden shadow-[0_50px_100px_-50px_rgba(0,0,0,0.8)]">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-white/50 font-mono">tracking.blackpalm.app — shipment BP-4827-US</span>
              <span className="ml-auto chip-dark !py-1 !px-2.5 text-[11px]"><Radio size={12} className="text-coral animate-pulse" /> Live</span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
              {/* timeline */}
              <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/45 font-semibold">Shipment status</p>
                    <p className="font-display font-bold text-xl !text-white mt-1">Miami → Kingston</p>
                  </div>
                  <span className="chip-dark !text-coral"><Activity size={13} /> 72% complete</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-7">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} className="h-full rounded-full bg-gradient-to-r from-coral to-coral-hover" />
                </div>
                <ol className="relative">
                  {STAGES.map((st, i) => (
                    <motion.li
                      key={st.t}
                      initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="relative flex gap-4 pb-6 last:pb-0"
                    >
                      {i !== STAGES.length - 1 && <span className={`absolute left-[18px] top-9 bottom-0 w-px ${st.done ? "bg-coral/50" : "bg-white/15"}`} />}
                      <span className={`relative z-10 w-9 h-9 rounded-full grid place-items-center shrink-0 ${st.done ? "bg-coral text-white" : st.active ? "bg-coral/20 text-coral ring-2 ring-coral animate-pulse" : "bg-white/10 text-white/40"}`}>
                        <st.Icon size={16} />
                      </span>
                      <div className="pt-1">
                        <p className={`font-display font-semibold text-sm ${st.done || st.active ? "!text-white" : "text-white/50"}`}>{st.t}</p>
                        <p className="text-xs text-white/45 mt-0.5">{st.s}</p>
                      </div>
                      {st.done && <CheckCircle2 size={16} className="text-coral ml-auto mt-1.5 shrink-0" />}
                    </motion.li>
                  ))}
                </ol>
              </div>

              {/* route + activity */}
              <div className="p-6 lg:p-8">
                {/* route viz */}
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center"><p className="font-display font-bold !text-white">MIA</p><p className="text-[11px] text-white/45">Miami</p></div>
                    <div className="flex-1 relative mx-3 h-8">
                      <svg viewBox="0 0 200 32" className="w-full h-full overflow-visible">
                        <path d="M4 24 Q100 -6 196 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 4" />
                        <motion.path d="M4 24 Q100 -6 196 24" fill="none" stroke="#FF6B3D" strokeWidth="2" strokeLinecap="round"
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.72 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22,1,0.36,1] }} />
                        <motion.circle r="4" fill="#FF6B3D"
                          initial={{ offsetDistance: "0%" }}
                          animate={{ offsetDistance: ["0%", "72%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                          style={{ offsetPath: "path('M4 24 Q100 -6 196 24')" } as any} />
                      </svg>
                      <Plane size={14} className="absolute left-1/2 -top-1 -translate-x-1/2 text-coral" />
                    </div>
                    <div className="text-center"><p className="font-display font-bold !text-white">KIN</p><p className="text-[11px] text-white/45">Kingston</p></div>
                  </div>
                </div>

                {/* status badges */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {[
                    { Icon: PackageCheck, t: "Received", on: true },
                    { Icon: ShieldCheck, t: "Customs Cleared", on: true },
                    { Icon: Plane, t: "In Transit", on: true },
                    { Icon: MapPin, t: "Delivered", on: false },
                  ].map((b) => (
                    <div key={b.t} className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold border ${b.on ? "bg-coral/10 border-coral/30 text-coral" : "bg-white/[0.03] border-white/10 text-white/40"}`}>
                      <b.Icon size={15} /> {b.t}
                    </div>
                  ))}
                </div>

                {/* live activity */}
                <p className="text-xs uppercase tracking-wider text-white/45 font-semibold mb-3 flex items-center gap-2"><Clock size={13} className="text-coral" /> Live activity</p>
                <ul className="space-y-2.5">
                  {ACTIVITY.map((a, i) => (
                    <motion.li key={a.t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 text-sm text-white/75">
                      <span className="w-7 h-7 rounded-lg bg-white/5 grid place-items-center text-coral shrink-0"><a.Icon size={14} /></span>
                      <span className="flex-1 leading-tight">{a.t}</span>
                      <span className="text-[11px] text-white/35 shrink-0">{a.time}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 4. TRUST ECOSYSTEM — premium 8-card trust grid w/ tilt             */
/* =================================================================== */
const ECO = [
  { Icon: Calendar, t: "Since 2018", c: "7+ years moving global trade" },
  { Icon: Building2, t: "Florida Based", c: "Fort Lauderdale headquarters" },
  { Icon: Globe2, t: "Global Reach", c: "Caribbean, LATAM, EU & Asia" },
  { Icon: Boxes, t: "10,000+ Shipments", c: "Delivered and counting", num: 10000, suf: "+" },
  { Icon: MapPin, t: "30+ Countries", c: "One connected network", num: 30, suf: "+" },
  { Icon: Activity, t: "98% On-Time", c: "Reliability you can plan around", num: 98, suf: "%" },
  { Icon: Headphones, t: "Human Support", c: "Real people, never a bot" },
  { Icon: FileCheck, t: "Customs Expertise", c: "Licensed brokerage in-house" },
];

export function TrustEcosystem() {
  return (
    <section className="bg-white border-y border-hairline">
      <div className="container-x py-24 lg:py-28">
        <SectionHeading center eyebrow="Why enterprises trust us" title="A logistics partner built on proof." sub="Not promises — a track record, a footprint, and a team that picks up the phone." />
        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ECO.map((b) => (
            <StaggerItem key={b.t}>
              <Tilt max={6} className="h-full">
                <div className="group h-full text-center rounded-2xl border border-hairline bg-white p-6 hover:border-coral/50 hover:shadow-[0_24px_50px_-28px_rgba(255,107,61,0.5)] transition-all">
                  <span className="w-14 h-14 mx-auto rounded-2xl bg-coral-soft text-coral grid place-items-center mb-4 group-hover:scale-110 group-hover:bg-coral group-hover:text-white transition-all">
                    <b.Icon size={24} />
                  </span>
                  <p className="font-display font-bold text-lg">
                    {b.num ? <Counter to={b.num} suffix={b.suf} /> : b.t}
                  </p>
                  {b.num && <p className="font-display font-semibold text-xs text-ink/70 mt-0.5">{b.t.replace(/^[\d,+%]+\s*/, "")}</p>}
                  <p className="text-xs text-muted-text mt-1.5 leading-relaxed">{b.c}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 5. TESTIMONIAL MARQUEE — auto-scrolling review row                 */
/* =================================================================== */
export function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  return (
    <div className="mt-5 overflow-hidden">
      <Marquee speed={60}>
        {items.map((t) => (
          <div key={t.name} className="mr-5 w-[330px] shrink-0"><TestimonialCard t={t} /></div>
        ))}
      </Marquee>
    </div>
  );
}

/* =================================================================== */
/* 6. OPERATIONS GALLERY V5 — masonry w/ hover zoom + captions        */
/* =================================================================== */
const GAL = [
  { img: IMG.distributionCenter, cap: "Distribution Center", sub: "Fort Lauderdale", span: "row-span-2" },
  { img: IMG.portCranesDusk, cap: "Port Operations", sub: "Container handling", span: "" },
  { img: IMG.teamWarehouse, cap: "Our Team", sub: "On the floor", span: "" },
  { img: IMG.cargoShipSea, cap: "Ocean Freight", sub: "Global lanes", span: "row-span-2" },
  { img: IMG.parcelDelivery, cap: "Last-Mile Delivery", sub: "To the door", span: "" },
  { img: IMG.warehouseForklift, cap: "Inbound Handling", sub: "Receiving dock", span: "" },
  { img: IMG.packageHandling, cap: "Package Sorting", sub: "Consolidation", span: "" },
  { img: IMG.planeCargo, cap: "Air Freight", sub: "Express network", span: "" },
];

export function OperationsGalleryV5() {
  return (
    <section className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow="Inside our operation" title="A look behind the logistics." sub="Real facilities, real people, real shipments — the infrastructure that moves your goods." />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] lg:auto-rows-[190px] gap-4">
          {GAL.map((g, i) => (
            <Reveal key={g.cap} delay={(i % 4) * 0.05} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <Img src={g.img} alt={g.cap} rounded="rounded-none" className="h-full" zoom overlay="bottom" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-[11px] uppercase tracking-wider text-coral font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{g.sub}</p>
                  <span className="inline-flex items-center gap-1.5 text-white font-display font-bold">
                    <ArrowRight size={14} className="text-coral" /> {g.cap}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Star };
