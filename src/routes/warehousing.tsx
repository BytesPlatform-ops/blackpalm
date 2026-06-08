import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Layout, Reveal } from "@/components/Layout";
import { IllShield, IllConsolidate, IllChart, IllExpand, IllWarehouse } from "@/components/Illustrations";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./about";

export const Route = createFileRoute("/warehousing")({
  head: () => ({
    meta: [
      { title: "Warehousing & 3PL — BlackPalm Export-Import" },
      { name: "description", content: "Secure, scalable warehousing and distribution from our Fort Lauderdale facility. Flexible storage, real-time inventory, and trusted 3PL services." },
      { property: "og:title", content: "Secure, Scalable Warehousing — BlackPalm" },
      { property: "og:description", content: "Flexible storage, advanced security, and a team that scales with you." },
    ],
  }),
  component: WarehousingPage,
});

const features = [
  { t: "State-of-the-Art Security", c: "Advanced security systems, surveillance, and controlled access. Cybersecurity protocols protect your data. Peace of mind, end to end.", Ill: IllShield },
  { t: "Flexible Storage Options", c: "Range of storage solutions adaptable to your specific requirements — from standard pallets to delicate, high-value items.", Ill: IllConsolidate },
  { t: "Efficient Inventory Management", c: "Cutting-edge real-time inventory tracking. Monitor stock levels, manage order fulfillment, plan ahead — all with precision.", Ill: IllChart },
  { t: "Scalable Solutions", c: "As your business grows, our warehousing scales with you. Built for businesses in growth or with seasonal inventory fluctuation.", Ill: IllExpand },
];

const plans = [
  { price: "$390", tier: "Starter", features: ["Basic Weight and Dimension Handling", "Local Destination Coverage", "Standard Handling and Packaging", "Basic Tracking and Customer Support"] },
  { price: "$590", tier: "Pro", features: ["Enhanced Weight and Dimension Handling", "Extended Distance and Destination Coverage", "Premium Handling and Packaging", "Advanced Tracking and Customer Support"] },
];

function WarehousingPage() {
  return (
    <Layout>
      <PageHero eyebrow="3rd Party Logistics" title="Secure, Scalable Warehousing." sub="Forefront of logistics excellence — secure, flexible, scalable storage from Fort Lauderdale." />

      {/* Overview illustration */}
      <section className="bg-white">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <div className="rounded-3xl bg-cream border border-hairline p-10 lg:p-16 max-w-5xl mx-auto">
              <div className="max-w-xl mx-auto"><IllWarehouse /></div>
              <p className="mt-8 text-center text-body max-w-2xl mx-auto">
                Block Palm's warehousing solutions are at the forefront of logistics excellence — secure, flexible, and scalable storage options for every business need.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="bg-white">
        <div className="container-x pb-20">
          {features.map((f, i) => (
            <div key={f.t} className="py-14 lg:py-20 border-t border-hairline">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <Reveal>
                  <div className="lg:[direction:ltr]">
                    <p className="eyebrow">0{i + 1} — Capability</p>
                    <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight">{f.t}</h3>
                    <p className="mt-5 text-body leading-relaxed max-w-lg">{f.c}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="lg:[direction:ltr] aspect-square max-w-sm mx-auto p-8 rounded-3xl bg-cream border border-hairline">
                    <f.Ill />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream">
        <div className="container-x py-24">
          <Reveal><p className="eyebrow text-center">Warehousing pricing</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-center font-display font-bold text-4xl md:text-5xl">Two plans. Built for your stage.</h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((p, i) => (
              <Reveal key={p.tier} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="rounded-3xl bg-white border border-hairline overflow-hidden hover:border-coral hover:shadow-[0_20px_50px_-20px_rgba(255,107,61,0.4)] transition-all">
                  <div className="bg-coral h-2" />
                  <div className="p-8">
                    <p className="eyebrow">{p.tier}</p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-display font-bold text-5xl">{p.price}</span>
                      <span className="text-body">/per month</span>
                    </div>
                    <ul className="mt-7 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={18} className="text-coral mt-0.5 shrink-0" />
                          <span className="text-body">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-coral w-full justify-center mt-8">
                      Get Started Today <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 max-w-3xl mx-auto rounded-xl bg-white border border-hairline p-5 text-sm text-body">
              <span className="inline-flex items-center gap-2 mr-2 px-2.5 py-0.5 rounded-full bg-coral-soft text-coral font-semibold text-xs">NOTE</span>
              Pricing plans are flexible. Contact us to customize a plan that's right for your business.
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-x py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">BlackPalm Warehousing — Frequently asked questions.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={[
              { q: "What warehousing services does BlackPalm offer?", a: "Short and long-term storage, pick & pack, inventory management, order fulfillment, and outbound distribution from our Fort Lauderdale facility." },
              { q: "How is the safety of stored goods ensured?", a: "24/7 surveillance, controlled access, fire suppression, and trained warehouse staff. Cybersecurity protocols protect inventory data and customer information." },
              { q: "Can BlackPalm handle distribution?", a: "Yes — we handle outbound shipping, freight coordination, and last-mile delivery for stored inventory." },
              { q: "Do you offer inventory management?", a: "Yes. Real-time stock visibility, low-stock alerts, and order-level reporting are included with all storage plans." },
              { q: "How do I get started?", a: "Reach out via the Contact page with the type and volume of inventory and we'll recommend the right plan." },
              { q: "Are there any goods you don't handle?", a: "We don't store hazardous materials, perishables that require refrigeration beyond our spec, or restricted goods. Ask us if you're unsure." },
              { q: "How does order fulfillment work?", a: "Orders flow into our system via API or upload. We pick, pack, label, and ship — same-day on requests received before our daily cutoff." },
            ]} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 text-center">
          <Reveal><h2 className="font-display font-bold text-4xl md:text-6xl !text-white">Need warehousing for your business?</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-coral cta-pulse">Get Started Today <ArrowUpRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
