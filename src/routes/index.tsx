import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem, Counter } from "@/components/Layout";
import { HeroWorldMap, IllShip, IllPlane, IllDoc, IllWarehouse, IllBox, IllGlobe, IllSpark, IllHeart } from "@/components/Illustrations";

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
              Florida's premier export-import logistics solution — built for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="mt-9 flex flex-wrap gap-4"
            >
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
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-hairline">
        <div className="container-x py-14">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { v: 2018, label: "Founded", suffix: "" },
              { v: 10000, label: "Shipments handled", suffix: "+" },
              { v: 30, label: "Countries served", suffix: "+" },
              { v: 98, label: "On-time delivery", suffix: "%" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div>
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

      {/* HOW IT WORKS */}
      <section className="bg-ink-deep text-white relative">
        <div className="container-x py-24 lg:py-32">
          <Reveal><p className="eyebrow text-center">How it works</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-center font-display font-bold text-4xl md:text-6xl !text-white leading-tight">
              Three steps. Zero friction<span className="text-coral">.</span>
            </h2>
          </Reveal>

          <div className="relative mt-20">
            {/* Connecting coral line */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-coral via-coral to-transparent"
            />
            <Stagger className="grid md:grid-cols-3 gap-10 relative">
              {[
                { n: "01", t: "Register", c: "Sign up in minutes at blackpalm.app and get your shipping address.", Ill: IllDoc },
                { n: "02", t: "Shop", c: "Buy from any U.S. retailer — Walmart, Shein, Best Buy, anywhere — and ship to your BlackPalm address.", Ill: IllBox },
                { n: "03", t: "We Ship", c: "We consolidate, pack, and deliver to your door, anywhere in the world.", Ill: IllPlane },
              ].map((s) => (
                <StaggerItem key={s.n}>
                  <div className="text-center md:text-left">
                    <div className="w-24 h-24 mx-auto md:mx-0 rounded-2xl bg-white/5 border border-white/10 p-3 mb-6">
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
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                Register Now <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

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
                Explore all services
                <ArrowRight size={18} className="text-coral group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

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
      </section>

      <CTACloser />
    </Layout>
  );
}

export function CTACloser({ title = "Ready to ship smarter?", sub = "Register in minutes. Ship from anywhere. Get it delivered." }: { title?: string; sub?: string }) {
  return (
    <section className="bg-ink-deep text-white">
      <div className="container-x py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl !text-white leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">{sub}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
              Register Now <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// expose Check util via separate so other pages can reuse below
export { Check };
