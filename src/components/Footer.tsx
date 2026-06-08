import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiteLogo } from "./SiteLogo";

const REGISTER_URL = "https://blackpalm.app/";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="container-x py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-hairline-dark">
          <div>
            <SiteLogo variant="light" />
            <h2 className="mt-10 font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight !text-white leading-[0.95]">
              You Shop.<br />We Ship<span className="text-coral">.</span>
            </h2>
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
                </a>
              ))}
            </div>
          </div>
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
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hairline-dark flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
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

function FootCol({ title, items }: { title: string; items: Array<{ label: string; to?: string; href?: string; external?: boolean }> }) {
  return (
    <div>
      <h4 className="font-display font-bold text-base mb-4 !text-white">{title}</h4>
      <ul className="space-y-2.5 text-sm text-white/70">
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
