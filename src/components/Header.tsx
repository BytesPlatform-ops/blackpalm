import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SiteLogo } from "./SiteLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/rates", label: "Rates" },
  { to: "/warehousing", label: "Warehousing" },
  { to: "/contact", label: "Contact" },
] as const;

const REGISTER_URL = "https://blackpalm.app/";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.2)]" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between" style={{ height: scrolled ? 64 : 76, transition: "height .3s ease" }}>
        <SiteLogo variant="dark" />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => {
            const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-sm font-medium text-ink hover:text-coral transition-colors"
              >
                {n.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-coral rounded"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
            Register Now <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white z-50 lg:hidden flex flex-col"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-hairline">
                <SiteLogo variant="dark" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2"><X size={24} /></button>
              </div>
              <nav className="flex flex-col p-5 gap-1">
                {NAV.map((n) => {
                  const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
                  return (
                    <Link
                      key={n.to}
                      to={n.to}
                      className={`px-3 py-3 rounded-lg text-lg font-medium transition-colors ${
                        active ? "bg-coral-soft text-coral" : "text-ink hover:bg-cream"
                      }`}
                    >
                      {n.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto p-5 border-t border-hairline">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral w-full justify-center">
                  Register Now <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
