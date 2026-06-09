import { Link } from "@tanstack/react-router";
<<<<<<< HEAD
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiteLogo } from "./SiteLogo";
=======
import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Send, Calendar, Globe2, PackageCheck, Clock } from "lucide-react";
import { SiteLogo } from "./SiteLogo";
import { LazyVideo } from "./Media";
import { VID } from "@/lib/videos";
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))

const REGISTER_URL = "https://blackpalm.app/";

export function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-ink-deep text-white">
      <div className="container-x py-16 lg:py-24">
=======
    <footer className="relative overflow-hidden bg-ink-deep text-white">
      {/* cinematic video background + overlays */}
      <div className="absolute inset-0">
        <LazyVideo src={VID.footer.src} poster={VID.footer.poster} rounded="rounded-none" className="h-full w-full opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep via-ink-deep/92 to-ink-deep" />
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] max-w-[90vw] rounded-full bg-coral/15 blur-[120px]" />
      </div>

      <div className="relative container-x py-16 lg:py-24">
        {/* mini stats / trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-2 border-b border-hairline-dark">
          {[
            { Icon: Calendar, v: "Since 2018", l: "Trusted for 7+ years" },
            { Icon: PackageCheck, v: "10,000+", l: "Shipments delivered" },
            { Icon: Globe2, v: "30+", l: "Countries served" },
            { Icon: Clock, v: "98%", l: "On-time delivery" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-coral/15 text-coral grid place-items-center shrink-0"><s.Icon size={18} /></span>
              <div>
                <p className="font-display font-bold !text-white leading-none">{s.v}</p>
                <p className="text-[11px] text-white/50 mt-1">{s.l}</p>
              </div>
            </div>
          ))}
        </div>

        {/* brand statement + register */}
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-hairline-dark">
          <div>
            <SiteLogo variant="light" />
            <h2 className="mt-10 font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight !text-white leading-[0.95]">
              You Shop.<br />We Ship<span className="text-coral">.</span>
            </h2>
<<<<<<< HEAD
          </div>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral self-start lg:self-end">
            Register Now <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-14">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm text-white/70 leading-relaxed">
              Florida's premier export-import logistics solution, tailored for you. Since 2018.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-coral hover:border-coral transition-colors">
                  <Icon size={15} />
=======
            <p className="mt-5 text-white/60 max-w-md leading-relaxed">
              Florida's premier export-import logistics platform — moving goods across oceans, skies, and borders since 2018.
            </p>
          </div>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral-lg cta-pulse self-start lg:self-end shrink-0">
            Register Now <ArrowUpRight size={18} />
          </a>
        </div>

        {/* newsletter / quote CTA */}
        <div className="py-12 border-b border-hairline-dark grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl !text-white">Get a shipping quote in your inbox.</h3>
            <p className="mt-2 text-white/60">Drop your email — our team sends a tailored estimate, usually within hours.</p>
          </div>
          <NewsletterForm />
        </div>

        {/* contact cards */}
        <div className="py-12 grid sm:grid-cols-3 gap-4">
          {[
            { Icon: MapPin, label: "Visit us", value: "3585 NW 13th St, Fort Lauderdale, FL 33311", href: "https://www.google.com/maps?q=3585+NW+13th+St+Fort+Lauderdale+FL+33311" },
            { Icon: Phone, label: "Call us", value: "(954) 663-8243", href: "tel:+19546638243" },
            { Icon: Mail, label: "Email us", value: "roletobain@blackpalmei.com", href: "mailto:roletobain@blackpalmei.com" },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="group glass-dark rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.09] transition-colors">
              <span className="w-11 h-11 rounded-xl bg-coral/15 text-coral grid place-items-center shrink-0 group-hover:bg-coral group-hover:text-white transition-colors"><c.Icon size={19} /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/45 font-semibold">{c.label}</p>
                <p className="mt-1 text-sm text-white/85 leading-snug break-words group-hover:text-coral transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-6">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm text-white/55 leading-relaxed">BlackPalm Export Import LLC</p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-coral hover:border-coral hover:shadow-[0_0_24px_-2px_rgba(255,107,61,0.7)] hover:-translate-y-0.5">
                  <Icon size={16} />
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
                </a>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <FootCol title="Useful Links" items={[
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Rates", to: "/rates" },
            { label: "Warehousing", to: "/warehousing" },
            { label: "Contact", to: "/contact" },
            { label: "Track AWB", href: REGISTER_URL, external: true },
          ]} />
          <FootCol title="Company" items={[
            { label: "Team", to: "/about" },
            { label: "Career", to: "/contact" },
            { label: "Blog", to: "/about" },
            { label: "Contact Us", to: "/contact" },
          ]} />
          <div>
            <h4 className="font-display font-bold text-base mb-4 !text-white">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>3585 NW 13th St</li>
              <li>Fort Lauderdale, FL 33311</li>
              <li><a href="tel:+19546638243" className="hover:text-coral transition-colors">(954) 663-8243</a></li>
              <li><a href="mailto:roletobain@blackpalmei.com" className="hover:text-coral transition-colors break-all">roletobain@blackpalmei.com</a></li>
=======
          <FootCol title="Services" items={[
            { label: "Export-Import", to: "/services" },
            { label: "Freight Forwarding", to: "/services" },
            { label: "Customs Brokerage", to: "/services" },
            { label: "Warehousing & 3PL", to: "/warehousing" },
            { label: "Rates & Quote", to: "/rates" },
          ]} />
          <FootCol title="Company" items={[
            { label: "About", to: "/about" },
            { label: "Contact Us", to: "/contact" },
            { label: "Get a Quote", to: "/rates" },
            { label: "Track AWB", href: REGISTER_URL, external: true },
          ]} />
          <div>
            <h4 className="font-display font-bold text-base mb-4 !text-white">Business</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Mon–Fri · 9 AM – 6 PM EST</li>
              <li>Fort Lauderdale, Florida</li>
              <li>Founded 2018</li>
              <li><span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Support online</span></li>
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-14 pt-6 border-t border-hairline-dark flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
=======
        <div className="mt-14 pt-6 border-t border-hairline-dark flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
          <p>© 2026 BlackPalm Export Import LLC. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

<<<<<<< HEAD
=======
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
      className="flex w-full lg:w-auto max-w-md gap-2"
    >
      {sent ? (
        <p className="glass-dark rounded-full px-6 py-3.5 text-sm text-white/90 w-full text-center">
          ✓ Thanks — we'll be in touch shortly.
        </p>
      ) : (
        <>
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 lg:w-72 rounded-full bg-white/10 border border-white/20 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-coral focus:bg-white/15 transition-colors"
          />
          <button type="submit" className="btn-coral shrink-0" aria-label="Submit email">
            <Send size={16} />
          </button>
        </>
      )}
    </form>
  );
}

>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
function FootCol({ title, items }: { title: string; items: Array<{ label: string; to?: string; href?: string; external?: boolean }> }) {
  return (
    <div>
      <h4 className="font-display font-bold text-base mb-4 !text-white">{title}</h4>
<<<<<<< HEAD
      <ul className="space-y-2.5 text-sm text-white/70">
=======
      <ul className="space-y-2.5 text-sm text-white/60">
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        {items.map((it) => (
          <li key={it.label}>
            {it.external ? (
              <a href={it.href} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">{it.label}</a>
            ) : (
              <Link to={it.to!} className="hover:text-coral transition-colors">{it.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
