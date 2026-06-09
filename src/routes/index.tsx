import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem, Counter } from "@/components/Layout";
import { HeroWorldMap, IllShip, IllPlane, IllDoc, IllWarehouse, IllBox, IllGlobe, IllSpark, IllHeart } from "@/components/Illustrations";
=======
import { ArrowUpRight, ArrowRight, Check, ShieldCheck, Globe2, Clock, Package, Plane } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem, Counter } from "@/components/Layout";
import { HeroWorldMap, IllDoc, IllBox, IllPlane, IllGlobe, IllSpark, IllHeart } from "@/components/Illustrations";
import { Img, ParallaxImage, CinematicBand, LazyVideo, MouseGlow, SectionHeading, Magnetic, LogoCloud, TestimonialCard, FeaturedTestimonial, Rating, type Testimonial } from "@/components/Media";
import { JourneyTimeline, ProblemSolution } from "@/components/HomeV3";
import { MarqueeCarousel, InMotion, LiveDashboard, TrustEcosystem, TestimonialMarquee, OperationsGalleryV5 } from "@/components/HomeV5";
import { IMG, AVATAR } from "@/lib/assets";
import { VID } from "@/lib/videos";
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))

const REGISTER_URL = "https://blackpalm.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlackPalm Export-Import — You Shop. We Ship." },
      { name: "description", content: "Florida's premier export-import logistics solution. Self-serve shipping, freight forwarding, customs brokerage, and 3PL — built for you." },
    ],
  }),
  component: HomePage,
});

const HEADLINE = ["You", "Shop.", "We", "Ship."];

<<<<<<< HEAD
function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-ink-deep text-white relative overflow-hidden">
        <div className="container-x py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p className="eyebrow mb-5"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Since 2018 · Fort Lauderdale, FL
            </motion.p>
=======
export const FEATURED_TESTIMONIAL: Testimonial = {
  quote: "We moved our entire cross-border operation to BlackPalm and never looked back. Consolidation cut our freight costs by 40%, customs clears before cargo lands, and I finally have one team that answers the phone. It's the logistics backbone we always needed.",
  name: "Marcus DeWitt", role: "Founder · Caribe Imports", initials: "MD", avatar: AVATAR.man1, tag: "Importer",
};

export const TESTIMONIALS: Testimonial[] = [
  { quote: "We consolidated five suppliers into a single monthly shipment and cut freight spend by nearly 40%. Their team actually answers the phone.", name: "Priya Nair", role: "Ops Lead, Northstar Supply", initials: "PN", avatar: AVATAR.woman1, tag: "Small Business" },
  { quote: "Customs used to stall our shipments for days. With BlackPalm's brokers, clearance is handled before the cargo even lands.", name: "Daniel Okafor", role: "Director, Vanguard Global", initials: "DO", avatar: AVATAR.man2, tag: "Reseller" },
  { quote: "As an online shopper, I just ship everything to my BlackPalm address and it shows up at my door. Zero stress, every single time.", name: "Aisha Bennett", role: "Online Shopper, Nassau", initials: "AB", avatar: AVATAR.woman2, tag: "Online Shopper" },
  { quote: "I import electronics and the insured handling gives me real peace of mind. Nothing arrives damaged, and tracking is spot on.", name: "Victor Mendes", role: "Electronics Buyer", initials: "VM", avatar: AVATAR.man3, tag: "Electronics Buyer" },
  { quote: "My boutique restocks from a dozen U.S. brands. BlackPalm pools it all into one shipment — it transformed how I run inventory.", name: "Lena Castillo", role: "Owner, Lena & Co. Boutique", initials: "LC", avatar: AVATAR.woman3, tag: "Boutique Owner" },
  { quote: "The transparent pricing sold me. No surprise fees, clear quotes, and a delivery date they actually hit. Rare in this industry.", name: "Tomás Rivera", role: "Founder, Rivera Trading", initials: "TR", avatar: AVATAR.man4, tag: "Importer" },
];

function HomePage() {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink-deep text-white">
        {/* cinematic video backdrop */}
        <div className="absolute inset-0">
          <LazyVideo src={VID.hero.src} poster={VID.hero.poster} rounded="rounded-none" className="h-full w-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/92 to-ink-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-ink-deep/40" />
          <div className="absolute inset-0 bg-grid-dark opacity-60" />
        </div>
        <MouseGlow />

        <div className="relative container-x pt-32 pb-24 lg:pt-44 lg:pb-32 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="chip-dark mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              Since 2018 · Fort Lauderdale, FL
            </motion.div>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            <h1 className="font-display font-bold text-[3.4rem] md:text-[5rem] lg:text-[5.6rem] leading-[0.95] tracking-tight !text-white">
              {HEADLINE.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.12, type: "spring", damping: 22, stiffness: 180 }}
                  className="inline-block mr-3"
                >
                  {w === "Ship." ? <>Ship<span className="text-coral">.</span></> : w}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed"
            >
<<<<<<< HEAD
              Florida's premier export-import logistics solution — built for you.
=======
              Florida's premier export-import logistics platform — freight forwarding, customs, and 3PL warehousing, engineered into one effortless experience.
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="mt-9 flex flex-wrap gap-4"
            >
<<<<<<< HEAD
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                Register Now <ArrowUpRight size={16} />
              </a>
              <Link to="/rates" className="btn-outline-light">Get a Quick Quote</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50 font-medium tracking-wide"
            >
              <span>INTERNATIONAL SHIPPING</span>
              <span className="w-1 h-1 bg-coral rounded-full" />
              <span>FREIGHT FORWARDING</span>
              <span className="w-1 h-1 bg-coral rounded-full" />
              <span>CUSTOMS & 3PL</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <HeroWorldMap />
=======
              <Magnetic>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral-lg cta-pulse">
                  Register Now <ArrowUpRight size={18} />
                </a>
              </Magnetic>
              <Link to="/rates" className="btn-outline-light">Get a Quick Quote</Link>
            </motion.div>

            {/* live trust strip */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {[
                { Icon: ShieldCheck, label: "Licensed customs brokerage" },
                { Icon: Globe2, label: "30+ countries served" },
                { Icon: Clock, label: "98% on-time delivery" },
              ].map(({ Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-sm text-white/65 font-medium">
                  <Icon size={16} className="text-coral" /> {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* composed visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-dark p-2">
              <Img src={IMG.containerYardAerial} alt="Container yard with stacked shipping containers" className="aspect-[4/3]" zoom rounded="rounded-2xl" overlay="dark" />
              <div className="absolute inset-0 opacity-80 pointer-events-none mix-blend-screen">
                <HeroWorldMap />
              </div>
              <div className="absolute top-3 left-3 chip-dark text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> Live network · 30+ countries
              </div>
            </div>

            {/* floating glass stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, type: "spring", damping: 18 }}
              className="absolute -bottom-6 -left-4 glass-dark rounded-2xl px-5 py-4 float-soft"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-coral grid place-items-center"><Package size={18} className="text-white" /></span>
                <div>
                  <p className="font-display font-bold text-2xl !text-white leading-none"><Counter to={10000} suffix="+" /></p>
                  <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">Shipments handled</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, type: "spring", damping: 18 }}
              className="absolute -top-5 -right-3 glass-dark rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <Rating value={5} />
              </div>
              <p className="text-[11px] text-white/60 mt-1">Rated 4.9/5 by shippers</p>
            </motion.div>

            {/* mini live-tracking status card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, type: "spring", damping: 18 }}
              className="absolute top-1/2 -right-5 -translate-y-1/2 hidden sm:block glass-dark rounded-2xl p-4 w-52"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono text-white/55">BP-4827-US</span>
                <span className="chip-dark !py-1 !px-2 text-[10px] !text-coral">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> In transit
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }} animate={{ width: "72%" }} transition={{ delay: 1.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-coral to-coral-hover"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
                <span>Miami, FL</span>
                <Plane size={12} className="text-coral" />
                <span>Kingston, JM</span>
              </div>
            </motion.div>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* STATS */}
      <section className="bg-white border-b border-hairline">
        <div className="container-x py-14">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { v: 2018, label: "Founded", suffix: "" },
=======
      {/* ============ LOGO CLOUD ============ */}
      <section className="bg-white border-b border-hairline">
        <div className="container-x py-10">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-text font-semibold mb-6">
            Trusted by importers, retailers & growing brands worldwide
          </p>
          <LogoCloud />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { v: 2018, label: "Founded in Florida", suffix: "" },
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
              { v: 10000, label: "Shipments handled", suffix: "+" },
              { v: 30, label: "Countries served", suffix: "+" },
              { v: 98, label: "On-time delivery", suffix: "%" },
            ].map((s) => (
              <StaggerItem key={s.label}>
<<<<<<< HEAD
                <div>
=======
                <div className="border-l-2 border-coral/30 pl-5">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                  <div className="font-display font-bold text-4xl md:text-5xl text-ink">
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-text uppercase tracking-wider font-medium">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

<<<<<<< HEAD
      {/* HOW IT WORKS */}
      <section className="bg-ink-deep text-white relative">
        <div className="container-x py-24 lg:py-32">
=======
      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-ink-deep text-white relative overflow-hidden noise">
        <div className="absolute inset-0 bg-spotlight opacity-90" />
        <div className="relative container-x py-24 lg:py-32">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          <Reveal><p className="eyebrow text-center">How it works</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-center font-display font-bold text-4xl md:text-6xl !text-white leading-tight">
              Three steps. Zero friction<span className="text-coral">.</span>
            </h2>
          </Reveal>

          <div className="relative mt-20">
<<<<<<< HEAD
            {/* Connecting coral line */}
=======
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-coral via-coral to-transparent"
            />
            <Stagger className="grid md:grid-cols-3 gap-10 relative">
              {[
<<<<<<< HEAD
                { n: "01", t: "Register", c: "Sign up in minutes at blackpalm.app and get your shipping address.", Ill: IllDoc },
                { n: "02", t: "Shop", c: "Buy from any U.S. retailer — Walmart, Shein, Best Buy, anywhere — and ship to your BlackPalm address.", Ill: IllBox },
                { n: "03", t: "We Ship", c: "We consolidate, pack, and deliver to your door, anywhere in the world.", Ill: IllPlane },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div className="text-center md:text-left">
                    <div className="w-24 h-24 mx-auto md:mx-0 rounded-2xl bg-white/5 border border-white/10 p-3 mb-6">
=======
                { n: "01", t: "Register", c: "Sign up in minutes at blackpalm.app and get your personal U.S. shipping address.", Ill: IllDoc },
                { n: "02", t: "Shop", c: "Buy from any U.S. retailer — Walmart, Shein, Best Buy, anywhere — and ship to your BlackPalm address.", Ill: IllBox },
                { n: "03", t: "We Ship", c: "We consolidate, pack, clear customs, and deliver to your door, anywhere in the world.", Ill: IllPlane },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div className="text-center md:text-left">
                    <div className="w-24 h-24 mx-auto md:mx-0 rounded-2xl glass-dark p-4 mb-6">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                      <s.Ill />
                    </div>
                    <p className="font-mono text-sm text-coral mb-2">{s.n}</p>
                    <h3 className="font-display font-bold text-2xl !text-white mb-2">{s.t}</h3>
                    <p className="text-white/65 leading-relaxed text-sm">{s.c}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 flex justify-center">
<<<<<<< HEAD
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                Register Now <ArrowUpRight size={16} />
              </a>
=======
              <Magnetic>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                  Register Now <ArrowUpRight size={16} />
                </a>
              </Magnetic>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            </div>
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      {/* SERVICES OVERVIEW */}
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Reveal><p className="eyebrow">What we do</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl max-w-2xl leading-tight">
                  End-to-end logistics, under one roof.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link to="/services" className="inline-flex items-center gap-2 text-ink font-semibold group">
=======
      {/* ============ STOREFRONT → DOORSTEP (auto marquee, dual direction) ============ */}
      <MarqueeCarousel />

      {/* ============ SERVICES OVERVIEW (with imagery) ============ */}
      <section className="bg-cream">
        <div className="container-x py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="What we do" title="End-to-end logistics, under one roof." />
            <Reveal delay={0.1}>
              <Link to="/services" className="inline-flex items-center gap-2 text-ink font-semibold group whitespace-nowrap">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                Explore all services
                <ArrowRight size={18} className="text-coral group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
<<<<<<< HEAD
              { t: "Export-Import Shipping", c: "Your trusted partner for international shipments, handled with precision from origin to destination.", Ill: IllGlobe },
              { t: "Freight Forwarding", c: "Air and ocean freight coordination, with senior-led routing and competitive rates.", Ill: IllPlane },
              { t: "Customs Brokerage", c: "Smooth customs clearance with experienced brokers who handle the paperwork so you don't have to.", Ill: IllDoc },
              { t: "Warehousing & 3PL", c: "Secure, flexible storage and distribution from our Fort Lauderdale facility.", Ill: IllWarehouse },
            ].map((s) => (
              <StaggerItem key={s.t}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-hairline p-6 bg-white hover:border-coral hover:shadow-[0_18px_40px_-20px_rgba(255,107,61,0.45)] transition-all"
                >
                  <div className="w-14 h-14 mb-5"><s.Ill /></div>
                  <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
                  <p className="text-sm text-body leading-relaxed">{s.c}</p>
                </motion.div>
=======
              { t: "Export-Import Shipping", c: "International shipments handled with precision from origin to destination.", img: IMG.cargoShipPort, to: "/services" },
              { t: "Freight Forwarding", c: "Air and ocean freight coordination with senior-led routing and honest rates.", img: IMG.planeCargo, to: "/services" },
              { t: "Customs Brokerage", c: "Licensed brokers handle the paperwork and clearance so you don't have to.", img: IMG.customsDocs, to: "/services" },
              { t: "Warehousing & 3PL", c: "Secure, flexible storage and distribution from our Fort Lauderdale facility.", img: IMG.warehouseAisle, to: "/warehousing" },
            ].map((s) => (
              <StaggerItem key={s.t}>
                <Link to={s.to} className="block h-full group">
                  <div className="h-full card-premium overflow-hidden flex flex-col">
                    <Img src={s.img} alt={s.t} className="aspect-[16/11]" rounded="rounded-none" zoom overlay="bottom" />
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
                      <p className="text-sm text-body leading-relaxed flex-1">{s.c}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

<<<<<<< HEAD
      {/* WHY BLACKPALM */}
      <section className="bg-cream">
        <div className="container-x py-24 lg:py-32">
          <Reveal><p className="eyebrow">Why BlackPalm</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl max-w-3xl leading-tight">
              Built for shippers who don't have time for friction.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { t: "Self-Serve Platform", c: "Register once, ship forever. The whole process runs on our portal.", Ill: IllSpark },
              { t: "Florida-Based, Globally Connected", c: "Fort Lauderdale headquarters, worldwide reach.", Ill: IllGlobe },
              { t: "Transparent Pricing", c: "Quick quote, clear rates, no surprise fees.", Ill: IllDoc },
              { t: "Real Human Support", c: "When you need someone, you get someone. Not a chatbot.", Ill: IllHeart },
            ].map((f) => (
              <StaggerItem key={f.t}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0"><f.Ill /></div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1.5">{f.t}</h3>
                    <p className="text-body leading-relaxed">{f.c}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
=======
      {/* ============ CINEMATIC VIDEO BAND (global network) ============ */}
      <CinematicBand poster={VID.logistics.poster} videoSrc={VID.logistics.src} minH="min-h-[560px]">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow">Global network</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-6xl !text-white leading-[1.05]">
              Moving goods across <span className="text-gradient-coral">oceans, skies, and borders.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-xl">
              From the Port of Miami to ports of call across the Caribbean, Latin America, Europe, and Asia — every shipment is tracked, insured, and delivered with care.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: 30, s: "+", l: "Countries" },
                { v: 24, s: "/7", l: "Tracking" },
                { v: 100, s: "%", l: "Insured transit" },
              ].map((x) => (
                <div key={x.l}>
                  <p className="font-display font-bold text-3xl md:text-4xl !text-white"><Counter to={x.v} suffix={x.s} /></p>
                  <p className="text-xs text-white/55 uppercase tracking-wider mt-1">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </CinematicBand>

      {/* ============ WHY BLACKPALM (with image) ============ */}
      <section className="bg-cream">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <ParallaxImage src={IMG.warehouseForklift} alt="BlackPalm warehouse operations in Fort Lauderdale" className="aspect-[4/5] lg:aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(10,10,10,0.4)]" overlay="full" />
          <div>
            <SectionHeading eyebrow="Why BlackPalm" title="Built for shippers who don't have time for friction." />
            <Stagger className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-9">
              {[
                { t: "Self-Serve Platform", c: "Register once, ship forever. The whole process runs on our portal.", Ill: IllSpark },
                { t: "Florida-Based, Globally Connected", c: "Fort Lauderdale HQ, worldwide reach.", Ill: IllGlobe },
                { t: "Transparent Pricing", c: "Quick quote, clear rates, no surprise fees.", Ill: IllDoc },
                { t: "Real Human Support", c: "When you need someone, you get someone. Not a chatbot.", Ill: IllHeart },
              ].map((f) => (
                <StaggerItem key={f.t}>
                  <div className="flex gap-4">
                    <div className="w-11 h-11 shrink-0"><f.Ill /></div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">{f.t}</h3>
                      <p className="text-body leading-relaxed text-sm">{f.c}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ LOGISTICS JOURNEY (8-step timeline) ============ */}
      <JourneyTimeline />

      {/* ============ PROBLEM / SOLUTION ============ */}
      <ProblemSolution />

      {/* ============ SEE BLACKPALM IN MOTION (video carousel) ============ */}
      <InMotion />

      {/* ============ OPERATIONS GALLERY (masonry) ============ */}
      <OperationsGalleryV5 />

      {/* ============ LIVE SHIPMENT DASHBOARD ============ */}
      <LiveDashboard />

      {/* ============ PREMIUM TRUST ECOSYSTEM ============ */}
      <TrustEcosystem />

      {/* ============ AUTOPLAY VIDEO SHOWCASE (warehouse) ============ */}
      <CinematicBand poster={VID.warehouse.poster} videoSrc={VID.warehouse.src} minH="min-h-[600px]">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal><p className="eyebrow">Precision in motion</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-6xl !text-white leading-[1.05]">
              Every package, handled like it's <span className="text-gradient-coral">the only one.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/75 text-lg leading-relaxed mx-auto max-w-2xl">
              Inside our Fort Lauderdale facility, trained teams sort, consolidate, and dispatch thousands of shipments a month — each one tracked, insured, and on schedule.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral-lg cta-pulse">
                  Start Shipping <ArrowUpRight size={18} />
                </a>
              </Magnetic>
              <Link to="/warehousing" className="btn-outline-light">Tour Warehousing</Link>
            </div>
          </Reveal>
        </div>
      </CinematicBand>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="Client stories" title="Shippers who stopped worrying about logistics." />
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3">
                <Rating value={5} />
                <span className="text-sm text-body"><strong className="text-ink">4.9/5</strong> average · 500+ shippers</span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mb-5"><FeaturedTestimonial t={FEATURED_TESTIMONIAL} image={IMG.businessOwner} /></div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <StaggerItem key={t.name}><TestimonialCard t={t} /></StaggerItem>
            ))}
          </Stagger>
        </div>
        {/* auto-scrolling review marquee */}
        <TestimonialMarquee items={[...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)]} />
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
      </section>

      <CTACloser />
    </Layout>
  );
}

export function CTACloser({ title = "Ready to ship smarter?", sub = "Register in minutes. Ship from anywhere. Get it delivered." }: { title?: string; sub?: string }) {
  return (
<<<<<<< HEAD
    <section className="bg-ink-deep text-white">
      <div className="container-x py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl !text-white leading-tight max-w-3xl mx-auto">
=======
    <section className="relative overflow-hidden bg-ink-deep text-white">
      <div className="absolute inset-0">
        <Img src={IMG.truckHighway} alt="" rounded="rounded-none" className="h-full" />
        <div className="absolute inset-0 bg-ink-deep/85" />
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        {/* glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] max-w-[90vw] rounded-full bg-coral/20 blur-[120px]" />
      </div>

      {/* floating glass cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring", damping: 18 }}
        className="hidden lg:flex absolute top-16 left-[8%] glass-dark rounded-2xl px-5 py-4 items-center gap-3 float-soft"
      >
        <span className="w-10 h-10 rounded-xl bg-coral grid place-items-center"><Globe2 size={18} className="text-white" /></span>
        <div><p className="font-display font-bold !text-white leading-none">30+ countries</p><p className="text-[11px] text-white/55 mt-1">One network</p></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, type: "spring", damping: 18 }}
        className="hidden lg:flex absolute bottom-16 right-[8%] glass-dark rounded-2xl px-5 py-4 items-center gap-3"
      >
        <Rating value={5} />
        <div><p className="font-display font-bold !text-white leading-none text-sm">4.9/5 rating</p><p className="text-[11px] text-white/55 mt-1">500+ shippers</p></div>
      </motion.div>

      <div className="relative container-x py-28 lg:py-36 text-center">
        <Reveal>
          <div className="chip-dark mx-auto mb-6 w-fit"><span className="w-2 h-2 rounded-full bg-coral animate-pulse" /> Free to register · No commitment</div>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl !text-white leading-[1.02] max-w-3xl mx-auto">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">{sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
              Register Now <ArrowUpRight size={16} />
            </a>
=======
            <Magnetic>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral-lg cta-pulse">
                Register Now <ArrowUpRight size={18} />
              </a>
            </Magnetic>
            <Link to="/contact" className="btn-outline-light">Talk to Sales</Link>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// expose Check util via separate so other pages can reuse below
export { Check };
