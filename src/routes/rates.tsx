import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { ArrowUpRight, Check } from "lucide-react";
import { Layout, Reveal } from "@/components/Layout";
import { IllPlane, IllShip } from "@/components/Illustrations";
=======
import { ArrowUpRight, Check, ShieldCheck, Clock, BadgeDollarSign, ArrowRight } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem } from "@/components/Layout";
import { IllPlane, IllShip } from "@/components/Illustrations";
import { SectionHeading } from "@/components/Media";
import { IMG } from "@/lib/assets";
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./about";

const REGISTER_URL = "https://blackpalm.app/";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Rates & Quote — BlackPalm Export-Import" },
      { name: "description", content: "Transparent shipping rates for air and ocean freight. Get a quick quote in seconds." },
      { property: "og:title", content: "Shipping Rates, Made Simple — BlackPalm" },
      { property: "og:description", content: "Air or Ocean — your call. Transparent pricing, instant quotes." },
    ],
  }),
  component: RatesPage,
});

const tiers = [
  {
    name: "Air Freight",
    tag: "Fast, reliable, premium.",
    Ill: IllPlane,
    features: ["Basic Weight and Dimension Handling", "Local Destination Coverage", "Standard Handling and Packaging", "Basic Tracking and Customer Support"],
  },
  {
    name: "Ocean Freight",
    tag: "Cost-effective, high-capacity, global.",
    Ill: IllShip,
    features: ["Enhanced Weight and Dimension Handling", "Extended Distance and Destination Coverage", "Premium Handling and Packaging", "Advanced Tracking and Customer Support"],
  },
];

function RatesPage() {
  return (
    <Layout>
<<<<<<< HEAD
      <PageHero eyebrow="Transparent pricing" title="Shipping Rates, Made Simple." sub="Clear tiers. Instant quotes. No surprise fees." />
=======
      <PageHero eyebrow="Transparent pricing" title="Shipping Rates, Made Simple." sub="Clear tiers. Instant quotes. No surprise fees." image={IMG.cargoShipPort} />

      {/* Trust strip */}
      <section className="bg-white border-b border-hairline">
        <div className="container-x py-8 grid sm:grid-cols-3 gap-6">
          {[
            { Icon: BadgeDollarSign, t: "No surprise fees", c: "Every line item shown before you ship." },
            { Icon: Clock, t: "Quotes in hours", c: "Tailored estimates, typically same day." },
            { Icon: ShieldCheck, t: "Insured transit", c: "Coverage available on every shipment." },
          ].map((x) => (
            <div key={x.t} className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-coral-soft text-coral grid place-items-center shrink-0"><x.Icon size={20} /></span>
              <div>
                <p className="font-display font-bold text-sm">{x.t}</p>
                <p className="text-xs text-muted-text mt-0.5">{x.c}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))

      {/* Tiers */}
      <section className="bg-white">
        <div className="container-x py-24">
          <Reveal><p className="eyebrow text-center">Shipping tiers</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-center font-display font-bold text-4xl md:text-5xl">Air or Ocean — your call.</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-hairline bg-white overflow-hidden hover:border-coral hover:shadow-[0_20px_50px_-20px_rgba(255,107,61,0.4)] transition-all">
                  <div className="bg-coral h-2" />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-display font-bold text-3xl">{t.name}</h3>
                        <p className="text-body mt-1">{t.tag}</p>
                      </div>
                      <div className="w-14 h-14 shrink-0"><t.Ill /></div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={18} className="text-coral mt-0.5 shrink-0" />
                          <span className="text-body">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#quote" className="btn-outline-dark w-full justify-center">Get a Quote</a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Quote form */}
      <section id="quote" className="bg-cream scroll-mt-24">
=======
      {/* Popular lanes */}
      <section className="bg-cream">
        <div className="container-x py-20">
          <SectionHeading center eyebrow="Example lanes" title="Popular routes & indicative pricing." sub="Representative estimates for common shipments. Your exact quote depends on weight, dimensions, and service tier." />
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { from: "Miami, FL", to: "Kingston, JM", mode: "Air", transit: "2–3 days", price: "from $42" },
              { from: "Fort Lauderdale", to: "Nassau, BS", mode: "Air", transit: "1–2 days", price: "from $38" },
              { from: "Miami, FL", to: "Port of Spain, TT", mode: "Ocean", transit: "8–12 days", price: "from $26" },
              { from: "Miami, FL", to: "Georgetown, GY", mode: "Ocean", transit: "10–14 days", price: "from $29" },
              { from: "Fort Lauderdale", to: "Santo Domingo, DO", mode: "Air", transit: "2–4 days", price: "from $40" },
              { from: "Miami, FL", to: "Bridgetown, BB", mode: "Ocean", transit: "9–13 days", price: "from $31" },
            ].map((l) => (
              <StaggerItem key={`${l.from}-${l.to}`}>
                <div className="card-premium p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`chip ${l.mode === "Air" ? "" : ""}`}>{l.mode === "Air" ? "✈ Air Freight" : "🚢 Ocean Freight"}</span>
                    <span className="font-display font-bold text-coral text-lg">{l.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-display font-semibold">
                    <span>{l.from}</span>
                    <ArrowRight size={16} className="text-coral shrink-0" />
                    <span>{l.to}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-hairline flex items-center gap-2 text-xs text-muted-text">
                    <Clock size={13} className="text-coral" /> Est. transit {l.transit} · per kg/cbm
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-8 text-center text-sm text-muted-text">
              Pricing is indicative and per billable unit. <a href="#quote" className="text-coral font-semibold">Get your exact quote ↓</a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-white scroll-mt-24">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        <div className="container-x py-24">
          <div className="max-w-3xl mx-auto">
            <Reveal><p className="eyebrow text-center">Quick quote</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-center font-display font-bold text-4xl md:text-5xl">Get a quick estimate.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-center text-body max-w-xl mx-auto">Tell us the basics and we'll send a tailored estimate — typically within hours.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
<<<<<<< HEAD
      <section className="bg-white">
=======
      <section className="bg-cream">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        <div className="container-x py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">BlackPalm Rates — Frequently asked questions.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={[
              { q: "How are shipping rates calculated?", a: "By billable weight (whichever is greater of actual or dimensional), destination, mode (air vs ocean), and service tier." },
              { q: "Can I get an estimate before confirming my shipment?", a: "Yes — that's exactly what the Quick Quote form above is for. Submit it and we'll get back to you with a written estimate." },
              { q: "Are there any additional fees that I should be aware of?", a: "Customs duties and destination taxes are calculated separately. We're transparent about every line item before you ship." },
              { q: "Can I track my shipping costs over time?", a: "Yes — your BlackPalm account shows a full ledger of past shipments and their costs." },
              { q: "How often do shipping rates change?", a: "Carrier rates fluctuate. We monitor them and pass through the best available rate at the time of booking." },
              { q: "What should I do if I find a discrepancy in my billed shipping rate?", a: "Reach out to your account contact or email roletobain@blackpalmei.com. We resolve discrepancies quickly and fairly." },
            ]} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-6xl !text-white">Need a custom rate?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-coral cta-pulse">Contact Sales <ArrowUpRight size={16} /></Link>
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-light">Register Now</a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    truckload: "", service: "", distance: "",
    weight: "", height: "", width: "", length: "",
    email: "", phone: "",
  });
  const set = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  return (
    <div className="rounded-3xl bg-white border border-hairline shadow-[0_30px_60px_-30px_rgba(10,10,10,0.18)] p-6 md:p-10 min-h-[480px] flex">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="m-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-coral text-white flex items-center justify-center mx-auto mb-5">
              <Check size={28} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">Thanks — we'll send your estimate shortly.</h3>
            <p className="text-body">Typically within a few hours, not days.</p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
            <div className="grid md:grid-cols-3 gap-4">
              <Field label="Truckload type">
                <select className="bp-input" value={state.truckload} onChange={set("truckload")}>
                  <option value="">Select…</option>
                  <option>LTL</option><option>FTL</option><option>Air</option><option>Ocean</option>
                </select>
              </Field>
              <Field label="Type of service">
                <select className="bp-input" value={state.service} onChange={set("service")}>
                  <option value="">Select…</option>
                  <option>Standard</option><option>Express</option><option>Priority</option>
                </select>
              </Field>
              <Field label="Distance (km)">
                <input type="number" className="bp-input" value={state.distance} onChange={set("distance")} />
              </Field>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <Field label="Weight (kg)"><input type="number" className="bp-input" value={state.weight} onChange={set("weight")} /></Field>
              <Field label="Height (cm)"><input type="number" className="bp-input" value={state.height} onChange={set("height")} /></Field>
              <Field label="Width (cm)"><input type="number" className="bp-input" value={state.width} onChange={set("width")} /></Field>
              <Field label="Length (cm)"><input type="number" className="bp-input" value={state.length} onChange={set("length")} /></Field>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Field label="Email"><input type="email" className="bp-input" value={state.email} onChange={set("email")} /></Field>
              <Field label="Phone"><input type="tel" className="bp-input" value={state.phone} onChange={set("phone")} /></Field>
            </div>
            <div className="mt-7 flex justify-end">
              <button onClick={() => setSubmitted(true)} className="btn-coral">
                Send Quote Request <ArrowUpRight size={16} />
              </button>
            </div>
            <style>{`
              .bp-input{
                width:100%; padding:.7rem .9rem; border:1px solid var(--color-hairline);
                border-radius:.6rem; font-size:.95rem; background:#fff; color:var(--color-ink);
                transition: box-shadow .2s, border-color .2s;
              }
              .bp-input:focus{ outline:none; border-color:var(--color-coral); box-shadow: 0 0 0 4px var(--color-coral-soft); }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-muted-text uppercase tracking-wider mb-1.5">{label}</span>
      {children}
    </label>
  );
}
