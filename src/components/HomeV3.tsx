import { motion } from "framer-motion";
import {
  ShoppingBag, Shirt, Laptop, Package, Plane, Ship, FileCheck, Warehouse,
  UserPlus, MapPin, MousePointerClick, PackageCheck, Layers, ShieldCheck, Globe2, Home,
  X, Check, Calendar, Building2, Boxes, Headphones, Lock, ArrowRight,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Layout";
import { Img, SectionHeading, HScroll } from "@/components/Media";
import { IMG } from "@/lib/assets";

/* =================================================================== */
/* 1. STOREFRONT → DOORSTEP — horizontal scroll carousel               */
/* =================================================================== */
const STOREFRONT = [
  { Icon: ShoppingBag, t: "Retail Orders", c: "Shop big-box U.S. retailers and ship to your BlackPalm address.", img: IMG.ecommerce },
  { Icon: Shirt, t: "Fashion & Apparel", c: "Fast-fashion hauls consolidated into one tidy shipment.", img: IMG.clothingRack },
  { Icon: Laptop, t: "Electronics", c: "High-value gadgets, insured and handled with care.", img: IMG.electronics },
  { Icon: Package, t: "Marketplace Packages", c: "Multiple sellers, one address, one delivery.", img: IMG.parcelsPile },
  { Icon: Plane, t: "Air Freight", c: "Speed when it matters — 2–4 day express lanes.", img: IMG.airCargoLoading },
  { Icon: Ship, t: "Ocean Freight", c: "Cost-effective scale for bulk and heavy cargo.", img: IMG.cargoShipSea },
  { Icon: FileCheck, t: "Customs Clearance", c: "Licensed brokers clear it before it lands.", img: IMG.customsDocs },
  { Icon: Warehouse, t: "Warehouse Storage", c: "Hold, repack, and dispatch on your schedule.", img: IMG.warehouseBoxes },
];

export function StorefrontCarousel() {
  return (
    <section className="bg-white">
      <div className="container-x py-24 lg:py-32">
        <SectionHeading
          eyebrow="From storefront to doorstep"
          title="Everything you buy. Everywhere you ship."
          sub="Whatever the source — retail, fashion, electronics, marketplaces — it flows through one BlackPalm pipeline."
        />
        <div className="mt-12">
          <HScroll ariaLabel="Storefront to doorstep categories">
            {STOREFRONT.map((s) => (
              <article
                key={s.t}
                className="group relative snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[30%] xl:w-[23%] rounded-2xl overflow-hidden border border-hairline bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(255,107,61,0.45)] hover:border-coral/50"
              >
                <div className="relative">
                  <Img src={s.img} alt={s.t} className="aspect-[4/3]" rounded="rounded-none" zoom overlay="bottom" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl glass-light grid place-items-center text-coral">
                    <s.Icon size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-body leading-relaxed">{s.c}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </article>
            ))}
          </HScroll>
          <p className="mt-2 text-xs text-muted-text md:hidden">← Swipe to explore →</p>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 2. LOGISTICS JOURNEY — 8-step timeline w/ images + connectors       */
/* =================================================================== */
const JOURNEY = [
  { Icon: UserPlus, t: "Register", c: "Create your account in minutes.", img: IMG.laptopShopping },
  { Icon: MapPin, t: "Get a U.S. Address", c: "Receive your personal shipping address.", img: IMG.globalTrade },
  { Icon: MousePointerClick, t: "Shop Online", c: "Buy from any U.S. retailer.", img: IMG.ecommerce },
  { Icon: PackageCheck, t: "Packages Arrive", c: "We receive and log every parcel.", img: IMG.parcelsPile },
  { Icon: Layers, t: "Consolidation", c: "Multiple orders merged into one.", img: IMG.packageHandling },
  { Icon: ShieldCheck, t: "Customs Handling", c: "Documentation and clearance, done.", img: IMG.customsDocs },
  { Icon: Globe2, t: "International Shipping", c: "Air or ocean, tracked end-to-end.", img: IMG.cargoShipSea },
  { Icon: Home, t: "Final Delivery", c: "To your door, anywhere in the world.", img: IMG.boxesDoorstep },
];

export function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-ink-deep text-white noise">
      <div className="absolute inset-0 bg-spotlight opacity-90" />
      <div className="relative container-x py-24 lg:py-32">
        <SectionHeading light center eyebrow="The BlackPalm journey" title="Eight steps. One seamless flow." sub="From the moment you register to the knock on your door — here's exactly how your shipment moves." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {JOURNEY.map((step, i) => (
            <Reveal key={step.t} delay={(i % 4) * 0.06}>
              <div className="relative group">
                {/* connector */}
                {i !== JOURNEY.length - 1 && (
                  <span className="hidden lg:block absolute top-[68px] left-[calc(50%+44px)] right-[-2.5rem] h-px bg-gradient-to-r from-coral/60 to-coral/0" />
                )}
                <div className="relative w-full">
                  <Img src={step.img} alt={step.t} className="aspect-[5/4]" zoom overlay="full" />
                  <span className="absolute -top-3 -left-1 w-9 h-9 rounded-full bg-coral text-white grid place-items-center font-display font-bold text-sm shadow-lg shadow-coral/30">
                    {i + 1}
                  </span>
                  <span className="absolute bottom-3 right-3 w-10 h-10 rounded-xl glass-dark grid place-items-center text-coral">
                    <step.Icon size={18} />
                  </span>
                </div>
                <h3 className="mt-4 font-display font-bold text-lg !text-white">{step.t}</h3>
                <p className="mt-1 text-sm text-white/60 leading-relaxed">{step.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 3. PROBLEM / SOLUTION                                                */
/* =================================================================== */
const PAIRS = [
  { problem: "Confusing, hidden shipping rates", solution: "Transparent pricing — every line item up front" },
  { problem: "Packages delayed with no answers", solution: "Reliable handling with proactive updates" },
  { problem: "Customs paperwork nightmares", solution: "Licensed brokers handle clearance for you" },
  { problem: "No tracking, total blind spots", solution: "Real-time tracking from origin to doorstep" },
  { problem: "Expensive, clunky forwarding", solution: "Consolidation that cuts freight spend" },
];

export function ProblemSolution() {
  return (
    <section className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <SectionHeading center eyebrow="Why switch" title="The old way vs. the BlackPalm way." sub="Global shipping is full of friction. We engineered it out." />
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problems */}
          <Reveal>
            <div className="h-full rounded-3xl border border-hairline bg-white p-8">
              <p className="font-display font-bold text-xl mb-6 flex items-center gap-2 text-muted-text">
                <span className="w-8 h-8 rounded-full bg-red-50 text-red-500 grid place-items-center"><X size={16} /></span>
                Without BlackPalm
              </p>
              <ul className="space-y-4">
                {PAIRS.map((p) => (
                  <li key={p.problem} className="flex items-start gap-3 text-body">
                    <X size={18} className="text-red-400 mt-0.5 shrink-0" />
                    <span className="line-through decoration-red-300/70">{p.problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {/* Solutions */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-ink-deep text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-dark opacity-50" />
              <div className="relative">
                <p className="font-display font-bold text-xl mb-6 flex items-center gap-2 !text-white">
                  <span className="w-8 h-8 rounded-full bg-coral text-white grid place-items-center"><Check size={16} /></span>
                  With BlackPalm
                </p>
                <ul className="space-y-4">
                  {PAIRS.map((p) => (
                    <li key={p.solution} className="flex items-start gap-3 text-white/90">
                      <Check size={18} className="text-coral mt-0.5 shrink-0" />
                      <span>{p.solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 4. ENTERPRISE TRUST BADGES                                           */
/* =================================================================== */
const BADGES = [
  { Icon: Calendar, t: "Since 2018", c: "7+ years of trade" },
  { Icon: Building2, t: "Fort Lauderdale", c: "Florida-based HQ" },
  { Icon: Boxes, t: "10,000+ Shipments", c: "Delivered worldwide" },
  { Icon: Globe2, t: "30+ Countries", c: "Global network" },
  { Icon: PackageCheck, t: "98% On-Time", c: "Proven reliability" },
  { Icon: Headphones, t: "Human Support", c: "Real people, no bots" },
  { Icon: Lock, t: "Secure Handling", c: "Insured end-to-end" },
];

export function TrustBadges() {
  return (
    <section className="bg-white border-y border-hairline">
      <div className="container-x py-16 lg:py-20">
        <Stagger className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {BADGES.map((b) => (
            <StaggerItem key={b.t}>
              <div className="group h-full text-center rounded-2xl border border-hairline p-5 hover:border-coral/50 hover:shadow-[0_18px_40px_-26px_rgba(255,107,61,0.5)] transition-all">
                <span className="w-12 h-12 mx-auto rounded-xl bg-coral-soft text-coral grid place-items-center mb-3 group-hover:scale-110 transition-transform">
                  <b.Icon size={22} />
                </span>
                <p className="font-display font-bold text-sm leading-tight">{b.t}</p>
                <p className="text-xs text-muted-text mt-1">{b.c}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =================================================================== */
/* 5. OPERATIONS GALLERY — hover-zoom grid with captions               */
/* =================================================================== */
const GALLERY = [
  { img: IMG.distributionCenter, cap: "Distribution Center", span: "lg:col-span-2 lg:row-span-2" },
  { img: IMG.portCranesDusk, cap: "Port Operations", span: "" },
  { img: IMG.teamWarehouse, cap: "Our Team", span: "" },
  { img: IMG.parcelDelivery, cap: "Last-Mile Delivery", span: "" },
  { img: IMG.cargoShipSea, cap: "Ocean Freight", span: "" },
  { img: IMG.warehouseForklift, cap: "Inbound Handling", span: "lg:col-span-2" },
  { img: IMG.packageHandling, cap: "Package Sorting", span: "" },
];

export function OperationsGallery() {
  return (
    <section className="bg-cream">
      <div className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow="Inside our operation" title="A look behind the logistics." sub="Real facilities, real people, real shipments — the infrastructure that moves your goods." />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] lg:auto-rows-[200px] gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.cap} delay={(i % 4) * 0.05} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <Img src={g.img} alt={g.cap} rounded="rounded-none" className="h-full" zoom overlay="bottom" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="inline-flex items-center gap-1.5 text-white text-sm font-semibold">
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

/* small shared motion preset for floating cards (used in hero) */
export const floatCard = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};
export { motion };
