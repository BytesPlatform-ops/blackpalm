import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem } from "@/components/Layout";
import { IllGlobe, IllPlane, IllDoc, IllShip, IllConsolidate, IllDoor } from "@/components/Illustrations";
<<<<<<< HEAD
=======
import { Img } from "@/components/Media";
import { IMG } from "@/lib/assets";
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./about";
import { CTACloser } from "./index";

const REGISTER_URL = "https://blackpalm.app/";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BlackPalm Export-Import" },
      { name: "description", content: "Export-import shipping, freight forwarding, customs brokerage, global shipping, consolidation, and door-to-door delivery from Fort Lauderdale, FL." },
      { property: "og:title", content: "Services — BlackPalm Export-Import" },
      { property: "og:description", content: "Comprehensive logistics, tailored for you." },
    ],
  }),
  component: ServicesPage,
});

const services = [
<<<<<<< HEAD
  { id: "export-import", t: "Export-Import Shipping", c: "International shipments handled with precision from origin to destination.", long: "Whether you're sending one box or scaling a cross-border business, our export-import service handles the full journey — pickup, documentation, transit, customs, and final delivery. Single point of contact, single invoice, zero surprises.", bullets: ["Origin pickup & door delivery", "All-mode routing (air, ocean, ground)", "Real-time shipment visibility"], Ill: IllGlobe },
  { id: "freight", t: "Freight Forwarding", c: "Air and ocean freight coordination with senior-led routing.", long: "Our forwarding team negotiates competitive rates with global carriers and routes shipments through the fastest, most reliable lanes. Air for speed, ocean for scale — always priced honestly.", bullets: ["Air & ocean freight networks", "Consolidation & LCL/FCL options", "Carrier-neutral rate optimization"], Ill: IllPlane },
  { id: "customs", t: "Customs Brokerage", c: "Smooth clearance with experienced brokers handling the paperwork.", long: "Customs is where shipments get stuck. Our licensed brokers prepare and file the documentation, classify HS codes, and clear your goods quickly through U.S. and international ports.", bullets: ["Licensed customs brokerage", "Duty & tariff optimization", "Compliance & documentation"], Ill: IllDoc },
  { id: "global", t: "Global Shipping", c: "Worldwide delivery network with reliable transit times.", long: "Backed by partnerships across the Caribbean, Latin America, Europe, and Asia, we deliver to where your customers actually live — with transit times we'll commit to in writing.", bullets: ["30+ countries served", "Caribbean & Latin America focus", "Insured international transit"], Ill: IllShip },
  { id: "consolidation", t: "Consolidation Services", c: "Pool multiple purchases into one efficient shipment to save cost.", long: "Bought from five different stores? We receive everything at your BlackPalm address, consolidate it into one optimized shipment, and forward it on. You pay one shipping cost instead of five.", bullets: ["Multi-merchant pooling", "Repack & weight optimization", "Substantial freight savings"], Ill: IllConsolidate },
  { id: "door", t: "Door-to-Door Delivery", c: "Pickup at origin, delivery to final destination, fully managed.", long: "We pick up at the seller, handle everything in the middle, and drop off at the buyer's door. You never touch a customs form, a freight broker, or a delivery scheduling line.", bullets: ["End-to-end managed", "No customs paperwork for you", "Signed proof of delivery"], Ill: IllDoor },
=======
  { id: "export-import", t: "Export-Import Shipping", c: "International shipments handled with precision from origin to destination.", long: "Whether you're sending one box or scaling a cross-border business, our export-import service handles the full journey — pickup, documentation, transit, customs, and final delivery. Single point of contact, single invoice, zero surprises.", bullets: ["Origin pickup & door delivery", "All-mode routing (air, ocean, ground)", "Real-time shipment visibility"], Ill: IllGlobe, img: IMG.containerYardAerial },
  { id: "freight", t: "Freight Forwarding", c: "Air and ocean freight coordination with senior-led routing.", long: "Our forwarding team negotiates competitive rates with global carriers and routes shipments through the fastest, most reliable lanes. Air for speed, ocean for scale — always priced honestly.", bullets: ["Air & ocean freight networks", "Consolidation & LCL/FCL options", "Carrier-neutral rate optimization"], Ill: IllPlane, img: IMG.airCargoLoading },
  { id: "customs", t: "Customs Brokerage", c: "Smooth clearance with experienced brokers handling the paperwork.", long: "Customs is where shipments get stuck. Our licensed brokers prepare and file the documentation, classify HS codes, and clear your goods quickly through U.S. and international ports.", bullets: ["Licensed customs brokerage", "Duty & tariff optimization", "Compliance & documentation"], Ill: IllDoc, img: IMG.customsDocs },
  { id: "global", t: "Global Shipping", c: "Worldwide delivery network with reliable transit times.", long: "Backed by partnerships across the Caribbean, Latin America, Europe, and Asia, we deliver to where your customers actually live — with transit times we'll commit to in writing.", bullets: ["30+ countries served", "Caribbean & Latin America focus", "Insured international transit"], Ill: IllShip, img: IMG.cargoShipSea },
  { id: "consolidation", t: "Consolidation Services", c: "Pool multiple purchases into one efficient shipment to save cost.", long: "Bought from five different stores? We receive everything at your BlackPalm address, consolidate it into one optimized shipment, and forward it on. You pay one shipping cost instead of five.", bullets: ["Multi-merchant pooling", "Repack & weight optimization", "Substantial freight savings"], Ill: IllConsolidate, img: IMG.packageHandling },
  { id: "door", t: "Door-to-Door Delivery", c: "Pickup at origin, delivery to final destination, fully managed.", long: "We pick up at the seller, handle everything in the middle, and drop off at the buyer's door. You never touch a customs form, a freight broker, or a delivery scheduling line.", bullets: ["End-to-end managed", "No customs paperwork for you", "Signed proof of delivery"], Ill: IllDoor, img: IMG.parcelDelivery },
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Our services" title="Comprehensive logistics, tailored for you." sub="Six core capabilities, one trusted team — from quote to delivery." />

      {/* Grid */}
      <section className="bg-white">
        <div className="container-x py-24">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.id}>
<<<<<<< HEAD
                <a href={`#${s.id}`} className="block h-full">
                  <div className="h-full rounded-2xl border border-hairline p-6 hover:border-coral hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(255,107,61,0.5)] transition-all">
                    <div className="w-14 h-14 mb-5"><s.Ill /></div>
                    <h3 className="font-display font-bold text-xl mb-2">{s.t}</h3>
                    <p className="text-sm text-body leading-relaxed mb-4">{s.c}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                      Learn more <ArrowRight size={14} />
                    </span>
=======
                <a href={`#${s.id}`} className="block h-full group">
                  <div className="h-full card-premium overflow-hidden flex flex-col">
                    <div className="relative">
                      <Img src={s.img} alt={s.t} className="aspect-[16/10]" rounded="rounded-none" zoom overlay="bottom" />
                      <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl glass-light p-2.5"><s.Ill /></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display font-bold text-xl mb-2">{s.t}</h3>
                      <p className="text-sm text-body leading-relaxed mb-4 flex-1">{s.c}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Deep dives */}
      <section className="bg-cream">
        <div className="container-x py-12 lg:py-20">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="py-14 lg:py-20 border-t border-hairline first:border-t-0 scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <Reveal>
                  <div className="lg:[direction:ltr]">
                    <p className="eyebrow">{s.t}</p>
                    <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight max-w-lg">{s.c}</h3>
                    <p className="mt-5 text-body leading-relaxed max-w-xl">{s.long}</p>
                    <ul className="mt-6 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Check size={18} className="text-coral mt-0.5 shrink-0" />
                          <span className="text-body">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral">
                        Register Now <ArrowUpRight size={16} />
                      </a>
                      <Link to="/rates" className="btn-outline-dark">Get a Quote</Link>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
<<<<<<< HEAD
                  <div className="lg:[direction:ltr] aspect-square max-w-md mx-auto p-8 rounded-3xl bg-white border border-hairline">
                    <s.Ill />
=======
                  <div className="lg:[direction:ltr] relative group">
                    <Img src={s.img} alt={s.t} className="aspect-[4/3] shadow-[0_40px_80px_-44px_rgba(10,10,10,0.45)]" rounded="rounded-3xl" zoom overlay="full" />
                    <div className="absolute -bottom-5 -right-3 hidden sm:block w-20 h-20 rounded-2xl glass-light p-4">
                      <s.Ill />
                    </div>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Warehousing teaser */}
      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 lg:py-28 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <Reveal><p className="eyebrow">3rd Party Logistics</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display font-bold text-4xl md:text-6xl !text-white leading-tight max-w-2xl">
                Warehousing and Distribution.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
                Our warehousing solutions provide secure, convenient storage with efficient space management, advanced security, and a dedicated team safeguarding your products.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link to="/warehousing" className="btn-coral">
              Explore Warehousing <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">BlackPalm Shipping — Frequently asked questions.</h2>
              <p className="mt-5 text-body">Quick answers about how we move your goods. Don't see yours? <Link to="/contact" className="text-coral font-semibold">Ask us directly.</Link></p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={[
              { q: "What types of shipping services does BlackPalm offer?", a: "Export-import shipping, air and ocean freight forwarding, customs brokerage, global shipping, multi-merchant consolidation, and fully managed door-to-door delivery." },
              { q: "How do I choose the right service for my needs?", a: "Tell us what you're shipping, where it's going, and how fast it needs to arrive. We'll recommend the most cost-effective option — usually air for speed and ocean for scale." },
              { q: "Can BlackPalm handle international shipments?", a: "Yes. We serve 30+ countries with a focus on the Caribbean and Latin America, plus extensive reach into Europe, Asia, and Africa via partner networks." },
              { q: "Are my goods insured during shipping?", a: "Standard transit insurance is available on all shipments. We'll recommend coverage levels based on declared value and destination." },
              { q: "How is shipping cost determined?", a: "By weight, dimensions, destination, mode (air vs ocean), and service tier. Use our Quick Quote on the Rates page for an instant estimate." },
              { q: "Does BlackPalm provide tracking for shipments?", a: "Yes — every shipment gets a tracking reference accessible from your BlackPalm account, with milestone updates from origin to delivery." },
              { q: "What is the process for shipping oversized or heavy items?", a: "We handle oversized freight regularly. Contact us with dimensions and weight and we'll route it through the right carrier and equipment." },
            ]} />
          </Reveal>
        </div>
      </section>

      <CTACloser title="Ready to start shipping?" sub="Pick a service. Get a quote. Or just register and start sending." />
    </Layout>
  );
}
