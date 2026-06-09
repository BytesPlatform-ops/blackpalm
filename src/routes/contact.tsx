import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { ArrowUpRight, Check, Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Layout, Reveal } from "@/components/Layout";
=======
import { ArrowUpRight, Check, Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Layout, Reveal } from "@/components/Layout";
import { Img } from "@/components/Media";
import { IMG } from "@/lib/assets";
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
import { PageHero } from "./about";

const REGISTER_URL = "https://blackpalm.app/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BlackPalm Export-Import" },
      { name: "description", content: "Get in touch with BlackPalm Export-Import in Fort Lauderdale, FL. Questions, quotes, or partnerships — we're here to help." },
      { property: "og:title", content: "Contact BlackPalm Export-Import" },
      { property: "og:description", content: "We love to hear from you. Reach out today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
<<<<<<< HEAD
      <PageHero eyebrow="Get in touch" title="We Love to Hear From You." sub="Questions, quotes, partnerships — we're here, and we answer." />
=======
      <PageHero eyebrow="Get in touch" title="We Love to Hear From You." sub="Questions, quotes, partnerships — we're here, and we answer." image={IMG.supportAgent} />
>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))

      <section className="bg-white">
        <div className="container-x py-20 lg:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <Reveal>
            <div>
<<<<<<< HEAD
=======
              {/* Support team card */}
              <div className="rounded-2xl bg-cream border border-hairline p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[IMG.opsManager, IMG.warehouseManager, IMG.businessOwner].map((src, i) => (
                      <span key={i} className="w-11 h-11 rounded-full ring-2 ring-cream overflow-hidden">
                        <Img src={src} alt="BlackPalm support specialist" rounded="rounded-full" className="w-full h-full" />
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Support team online
                    </p>
                    <p className="text-xs text-muted-text mt-0.5">Avg. response under 2 hours · Mon–Fri</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="tel:+19546638243" className="chip"><Phone size={13} className="text-coral" /> Call us</a>
                  <a href="mailto:roletobain@blackpalmei.com" className="chip"><Mail size={13} className="text-coral" /> Email</a>
                  <span className="chip"><MessageCircle size={13} className="text-coral" /> Personal reply</span>
                </div>
              </div>

>>>>>>> 410b767 (BlackPalm Export-Import — premium enterprise homepage (V5))
              <p className="text-body leading-relaxed text-lg">
                Your questions and feedback are important to us. Whether it's about our services, quotes, or support — we're here to help.
              </p>

              <div className="mt-10">
                <p className="eyebrow">Follow us</p>
                <div className="flex gap-3 mt-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" aria-label="Social" className="w-11 h-11 rounded-full border border-hairline flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition-colors">
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-hairline">
                <p className="eyebrow">What happens next</p>
                <ul className="mt-5 space-y-5">
                  {[
                    { n: "01", t: "We read your message", c: "Typically within hours, not days." },
                    { n: "02", t: "We respond personally", c: "With answers or next steps — never a templated reply." },
                    { n: "03", t: "We schedule a quick call", c: "If it's a project, we align on scope and timeline." },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-coral text-white flex items-center justify-center font-display font-bold text-sm">{s.n}</span>
                      <div>
                        <p className="font-display font-bold text-base">{s.t}</p>
                        <p className="text-sm text-body mt-0.5">{s.c}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x py-24 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl bg-ink-deep text-white p-10 h-full">
              <h3 className="font-display font-bold text-3xl !text-white">Visit Our Office</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                We're always ready to assist you with any inquiries or concerns you may have. Feel free to visit us or get in touch using the contact information below.
              </p>
              <ul className="mt-8 space-y-5">
                <Info icon={MapPin} label="Address" value="3585 NW 13th St, Fort Lauderdale, FL 33311, USA" />
                <Info icon={Mail} label="Email" value="roletobain@blackpalmei.com" href="mailto:roletobain@blackpalmei.com" />
                <Info icon={Phone} label="Phone" value="(954) 663-8243" href="tel:+19546638243" />
                <Info icon={Clock} label="Hours" value="Mon–Fri 9 AM – 6 PM EST" />
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-hairline bg-white h-[460px] lg:h-full min-h-[420px]">
              <iframe
                title="BlackPalm Fort Lauderdale office"
                src="https://www.google.com/maps?q=3585+NW+13th+St+Fort+Lauderdale+FL+33311&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep text-white">
        <div className="container-x py-24 text-center">
          <Reveal><h2 className="font-display font-bold text-4xl md:text-6xl !text-white">Ready to ship?</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-coral cta-pulse">
                Register Now <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <>
      <p className="text-xs uppercase tracking-wider text-white/50 font-semibold">{label}</p>
      <p className="mt-0.5 text-white/90">{value}</p>
    </>
  );
  return (
    <li className="flex gap-4">
      <span className="shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-coral"><Icon size={18} /></span>
      <div>{href ? <a href={href} className="hover:text-coral transition-colors">{content}</a> : content}</div>
    </li>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({ name: "", phone: "", email: "", subject: "", company: "", message: "" });
  const set = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  return (
    <div className="rounded-3xl bg-white border border-hairline shadow-[0_30px_60px_-30px_rgba(10,10,10,0.18)] p-6 md:p-10 min-h-[560px] flex">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="m-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-coral text-white flex items-center justify-center mx-auto mb-5">
              <Check size={28} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">Thanks — we've got your message.</h3>
            <p className="text-body">Roleto and the team will be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0 }} className="w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name *"><input className="bp-input" required value={state.name} onChange={set("name")} /></Field>
              <Field label="Phone"><input className="bp-input" value={state.phone} onChange={set("phone")} /></Field>
              <Field label="Email *"><input type="email" className="bp-input" required value={state.email} onChange={set("email")} /></Field>
              <Field label="Subject"><input className="bp-input" value={state.subject} onChange={set("subject")} /></Field>
            </div>
            <div className="mt-4">
              <Field label="Company"><input className="bp-input" value={state.company} onChange={set("company")} /></Field>
            </div>
            <div className="mt-4">
              <Field label="Message *">
                <textarea className="bp-input min-h-[140px] resize-y" required value={state.message} onChange={set("message")} />
              </Field>
            </div>
            <div className="mt-7">
              <button onClick={() => setSubmitted(true)} className="btn-coral w-full justify-center">
                Send Message <ArrowUpRight size={16} />
              </button>
            </div>
            <style>{`
              .bp-input{
                width:100%; padding:.75rem .95rem; border:1px solid var(--color-hairline);
                border-radius:.6rem; font-size:.95rem; background:#fff; color:var(--color-ink);
                transition: box-shadow .2s, border-color .2s; font-family: inherit;
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
