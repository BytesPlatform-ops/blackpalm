import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout, Reveal, Stagger, StaggerItem } from "@/components/Layout";
import { IllPlane, IllSpark, IllHeart, IllShield, IllChart, IllPortrait, IllGlobe } from "@/components/Illustrations";
import { CTACloser } from "./index";

const REGISTER_URL = "https://blackpalm.app/";

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

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About BlackPalm" title="Your trusted partner in global trade." sub="Built in Florida. Trusted around the world." />

      <section className="bg-white">
        <div className="container-x py-24 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight">A logistics partner that actually behaves like one.</h2>
              <p className="mt-6 text-body leading-relaxed">
                Founded in 2018 in Fort Lauderdale, Florida, BlackPalm Export-Import was built to simplify global trade for shippers who'd been failed by complicated, opaque, slow logistics. We blend operational expertise with a self-serve digital platform — making international shipping accessible to small businesses, individual shippers, and cross-border shoppers who deserve better.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-square max-w-md mx-auto p-6 rounded-3xl bg-cream border border-hairline">
              <IllGlobe />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x py-24 grid md:grid-cols-2 gap-6">
          {[
            { t: "Our Mission", c: "To simplify global trade by offering personalized, efficient shipping solutions. We're dedicated to transforming the logistics landscape — making it accessible and reliable for everyone.", Ill: IllPlane },
            { t: "Our Promise", c: "BlackPalm is committed to delivering your goods on time, every time. With our robust network and dedicated team, we ensure a smooth and seamless shipping experience from start to finish.", Ill: IllHeart },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="h-full rounded-2xl bg-white border border-hairline p-8 lg:p-10">
                <div className="w-14 h-14 mb-5"><c.Ill /></div>
                <h3 className="font-display font-bold text-2xl mb-3">{c.t}</h3>
                <p className="text-body leading-relaxed">{c.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-24 lg:py-32">
          <Reveal><p className="eyebrow">What we stand for</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl max-w-2xl leading-tight">Three things we won't compromise.</h2>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Customer-Centric Approach", c: "At the heart of our services is a commitment to our customers. We listen, understand, and deliver solutions that meet your unique needs.", Ill: IllHeart },
              { t: "Innovation", c: "We constantly evolve, embracing the latest in logistics technology to provide state-of-the-art services.", Ill: IllSpark },
              { t: "Reliability", c: "Our promise is reliability. We ensure every shipment is handled with precision and care, delivered safely and on time.", Ill: IllShield },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="h-full rounded-2xl border border-hairline p-7 hover:border-coral transition-colors">
                  <div className="w-12 h-12 mb-5"><v.Ill /></div>
                  <h3 className="font-display font-bold text-xl mb-2">{v.t}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.c}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Founder note */}
      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-[220px_1fr] gap-10 items-start">
          <Reveal>
            <div className="w-44 h-44 mx-auto lg:mx-0"><IllPortrait /></div>
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

      <CTACloser title="Ready to ship smarter?" />
    </Layout>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="bg-ink-deep text-white">
      <div className="container-x py-20 lg:py-28">
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
