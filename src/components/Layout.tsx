import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useRouterState } from "@tanstack/react-router";

const REGISTER_URL = "https://blackpalm.app/";

export function Layout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
<<<<<<< HEAD
          className="pt-[76px]"
=======
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {showSticky && (
          <motion.div
            className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-white/90 backdrop-blur-md border-t border-hairline"
            initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
          >
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral w-full justify-center">
              Register Now <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Reveal helpers
export function Reveal({ children, delay = 0, className = "", as = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "span" }) {
  const Comp: any = motion[as as keyof typeof motion] ?? motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", damping: 25, stiffness: 220, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 220 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
