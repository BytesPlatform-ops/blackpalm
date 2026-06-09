<<<<<<< HEAD
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem } from "@/components/Layout";
import { IllPlane, IllSpark, IllHeart, IllShield, IllChart, IllPortrait, IllGlobe } from "@/components/Illustrations";
import { CTACloser } from "./index";

const REGISTER_URL = "https://blackpalm.app/";

=======
import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Users, TrendingUp } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem, Counter } from "@/components/Layout";
import { IllPlane, IllSpark, IllHeart, IllShield } from "@/components/Illustrations";
import { Img, ParallaxImage, SectionHeading, CinematicBand } from "@/components/Media";
import { IMG, VIDEO } from "@/lib/assets";
import { CTACloser } from "./index";

>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BlackPalm Export-Import" },
      { name: "description", content: "Founded in 2018 in Fort Lauderdale, BlackPalm Export-Import simplifies global trade with a self-serve digital platform and expert logistics team." },
      { property: "og:title", content: "About — BlackPalm Export-Import" },
      { property: "og:description", content: "Your trusted partner in global trade. Built for shippers who deserve better." },
    ],
  }),
  component: AboutPage,
});

<<<<<<< HEAD
function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About BlackPalm" title="Your trusted partner in global trade." sub="Built in Florida. Trusted around the world." />

=======
const TIMELINE = [
  { y: "2018", t: "Founded in Fort Lauderdale", c: "BlackPalm opens its doors with a simple mission: make global shipping effortless for everyday shippers." },
  { y: "2020", t: "Customs & freight licensed", c: "Added licensed customs brokerage and air/ocean freight forwarding to handle the full journey end-to-end." },
  { y: "2022", t: "Self-serve platform launches", c: "Our digital portal goes live at blackpalm.app — register, ship, and track from one place." },
  { y: "2024", t: "30+ countries, 10,000+ shipments", c: "Expanded warehousing and 3PL with a dedicated distribution facility serving brands worldwide." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About BlackPalm" title="Your trusted partner in global trade." sub="Built in Florida in 2018. Trusted around the world ever since." image={IMG.globalTrade} />

      {/* Who we are + image */}
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
      <section className="bg-white">
        <div className="container-x py-24 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight">A logistics partner that actually behaves like one.</h2>
              <p className="mt-6 text-body leading-relaxed">
                Founded in 2018 in Fort Lauderdale, Florida, BlackPalm Export-Import was built to simplify global trade for shippers who'd been failed by complicated, opaque, slow logistics. We blend operational expertise with a self-serve digital platform — making international shipping accessible to small businesses, individual shippers, and cross-border shoppers who deserve better.
              </p>
<<<<<<< HEAD
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-square max-w-md mx-auto p-6 rounded-3xl bg-cream border border-hairline">
              <IllGlobe />
            </div>
=======
              <Stagger className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { v: 10000, s: "+", l: "Shipments delivered" },
                  { v: 30, s: "+", l: "Countries served" },
                  { v: 98, s: "%", l: "On-time rate" },
                  { v: 500, s: "+", l: "Happy shippers" },
                ].map((x) => (
                  <StaggerItem key={x.l}>
                    <div className="border-l-2 border-coral/30 pl-4">
                      <p className="font-display font-bold text-3xl text-ink"><Counter to={x.v} suffix={x.s} /></p>
                      <p className="text-xs text-muted-text uppercase tracking-wider mt-1">{x.l}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ParallaxImage src={IMG.teamMeeting} alt="The BlackPalm team coordinating shipments" className="aspect-[4/5] shadow-[0_40px_80px_-44px_rgba(10,10,10,0.45)]" overlay="full" />
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-cream">
=======
      {/* Timeline */}
      <section className="bg-cream">
        <div className="container-x py-24 lg:py-28">
          <SectionHeading center eyebrow="Our journey" title="From a Fort Lauderdale startup to a global network." />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2" />
            <div className="space-y-10 md:space-y-0">
              {TIMELINE.map((step, i) => (
                <Reveal key={step.y} delay={i * 0.05}>
                  <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "" : ""}`}>
                    <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:text-right md:pr-12"}`}>
                      <div className="relative">
                        <span className="hidden md:block absolute top-2 w-4 h-4 rounded-full bg-coral ring-4 ring-cream" style={{ [i % 2 ? "left" : "right"]: "-3.4rem" } as any} />
                        <p className="font-display font-bold text-coral text-2xl">{step.y}</p>
                        <h3 className="font-display font-bold text-xl mt-1">{step.t}</h3>
                        <p className="text-body text-sm mt-2 leading-relaxed">{step.c}</p>
                      </div>
                    </div>
                    <div className={`${i % 2 ? "md:order-1" : ""} hidden md:block`} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Promise */}
      <section className="bg-white">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        <div className="container-x py-24 grid md:grid-cols-2 gap-6">
          {[
            { t: "Our Mission", c: "To simplify global trade by offering personalized, efficient shipping solutions. We're dedicated to transforming the logistics landscape — making it accessible and reliable for everyone.", Ill: IllPlane },
            { t: "Our Promise", c: "BlackPalm is committed to delivering your goods on time, every time. With our robust network and dedicated team, we ensure a smooth and seamless shipping experience from start to finish.", Ill: IllHeart },
          ].map((c) => (
            <Reveal key={c.t}>
<<<<<<< HEAD
              <div className="h-full rounded-2xl bg-white border border-hairline p-8 lg:p-10">
=======
              <div className="h-full card-premium p-8 lg:p-10">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                <div className="w-14 h-14 mb-5"><c.Ill /></div>
                <h3 className="font-display font-bold text-2xl mb-3">{c.t}</h3>
                <p className="text-body leading-relaxed">{c.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <Reveal><p className="eyebrow">What we stand for</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl max-w-2xl leading-tight">Three things we won't compromise.</h2>
          </Reveal>
=======
      {/* Values */}
      <section className="bg-white pb-8">
        <div className="container-x pb-24">
          <SectionHeading eyebrow="What we stand for" title="Three things we won't compromise." />
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Customer-Centric Approach", c: "At the heart of our services is a commitment to our customers. We listen, understand, and deliver solutions that meet your unique needs.", Ill: IllHeart },
              { t: "Innovation", c: "We constantly evolve, embracing the latest in logistics technology to provide state-of-the-art services.", Ill: IllSpark },
              { t: "Reliability", c: "Our promise is reliability. We ensure every shipment is handled with precision and care, delivered safely and on time.", Ill: IllShield },
            ].map((v) => (
              <StaggerItem key={v.t}>
<<<<<<< HEAD
                <div className="h-full rounded-2xl border border-hairline p-7 hover:border-coral transition-colors">
=======
                <div className="h-full card-premium p-7">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                  <div className="w-12 h-12 mb-5"><v.Ill /></div>
                  <h3 className="font-display font-bold text-xl mb-2">{v.t}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.c}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

<<<<<<< HEAD
      {/* Founder note */}
      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-[220px_1fr] gap-10 items-start">
          <Reveal>
            <div className="w-44 h-44 mx-auto lg:mx-0"><IllPortrait /></div>
=======
      {/* Global reach band */}
      <CinematicBand poster={IMG.warehouseAisle} videoSrc={VIDEO.warehouse.src} minH="min-h-[460px]">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow">Global reach, local care</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl !text-white leading-[1.05]">
              One team behind every shipment.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: Globe2, v: 30, s: "+", l: "Countries" },
              { Icon: Users, v: 500, s: "+", l: "Shippers" },
              { Icon: TrendingUp, v: 10000, s: "+", l: "Shipments" },
              { Icon: Award, v: 7, s: "yr", l: "In business" },
            ].map((x) => (
              <StaggerItem key={x.l}>
                <x.Icon size={22} className="text-coral mb-2" />
                <p className="font-display font-bold text-3xl !text-white"><Counter to={x.v} suffix={x.s} /></p>
                <p className="text-xs text-white/55 uppercase tracking-wider mt-1">{x.l}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </CinematicBand>

      {/* Founder note */}
      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-[280px_1fr] gap-12 items-center">
          <Reveal>
            <div className="relative">
              <Img src={IMG.opsManager} alt="Roleto Bain, Founder of BlackPalm Export-Import" className="aspect-[4/5]" overlay="bottom" />
              <div className="absolute bottom-4 left-4 chip-dark">Founder · Since 2018</div>
            </div>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow">A note from the founder</p>
              <p className="mt-4 font-display text-2xl md:text-3xl !text-white leading-snug">
                "We started BlackPalm because logistics shouldn't be the hardest part of growing your business. Whether you're a single shopper sending a box home or a brand scaling globally — you deserve a partner who answers the phone, hits the deadline, and tells you exactly what's happening with your shipment."
              </p>
              <p className="mt-6 text-white/60 font-medium tracking-wide text-sm">— Roleto Bain, Founder · BlackPalm Export-Import</p>
            </div>
          </Reveal>
        </div>
      </section>

<<<<<<< HEAD
      <section className="bg-cream">
        <div className="container-x py-20 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-5xl">Want to work with us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                Register Now <ArrowUpRight size={16} />
              </a>
              <Link to="/contact" className="btn-outline-dark">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>

=======
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
      <CTACloser title="Ready to ship smarter?" />
    </Layout>
  );
}

<<<<<<< HEAD
export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="bg-ink-deep text-white">
      <div className="container-x py-20 lg:py-28">
=======
export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-deep text-white">
      {image && (
        <div className="absolute inset-0">
          <Img src={image} alt="" rounded="rounded-none" className="h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/90 to-ink-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-dark opacity-50" />
        </div>
      )}
      <div className="relative container-x pt-36 pb-24 lg:pt-44 lg:pb-32">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl !text-white leading-[0.95] max-w-4xl tracking-tight">
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">{sub}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
