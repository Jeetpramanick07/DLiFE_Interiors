import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CalendarCheck, Sparkles, Send, Check } from "lucide-react";
import { z } from "zod";

import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DLIFE Interiors" },
      { name: "description", content: "Book a free consultation with DLIFE Interiors. Phone, email and experience centres across India." },
      { property: "og:title", content: "Contact — DLIFE Interiors" },
      { property: "og:description", content: "Let's design your dream home." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-[480px] w-[480px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.76 0.115 80 / .55), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Sparkles size={13} /> Contact
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance max-w-4xl mx-auto">
            Let's design your <em className="not-italic text-gradient-gold">dream home.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Connect with DLIFE Interiors to discuss your space, requirements and interior design goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  city: z.string().trim().min(2, "City is required").max(60),
  homeType: z.string().min(1, "Select a home type"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

type FormState = Record<keyof z.infer<typeof schema>, string>;

const initial: FormState = { name: "", phone: "", email: "", city: "", homeType: "", message: "" };

function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of r.error.issues) errs[issue.path[0] as keyof FormState] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm(initial);
  };

  const cards = [
    { i: <Phone size={16} />, t: "Phone", l: "+91 800 000 0000", s: "Mon – Sat, 10 AM – 7 PM" },
    { i: <Mail size={16} />, t: "Email", l: "hello@dlifeinteriors.com", s: "We reply within one working day" },
    { i: <MapPin size={16} />, t: "Experience Centres", l: "28 centres across India", s: "Walk in, touch and feel the finishes" },
    { i: <CalendarCheck size={16} />, t: "Consultation Booking", l: "Free design consultation", s: "Online or in-centre, your choice" },
  ];

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8">
        {/* Form */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-10 shadow-premium">
              <SectionTitle eyebrow="Consultation" title={<>Tell us about <em className="not-italic text-gradient-gold">your space.</em></>} />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl bg-primary/15 border border-primary/40 p-6 text-center"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-primary-foreground">
                    <Check size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-2xl">Thank you!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your consultation request has been received. A DLIFE design consultant will reach out shortly.
                  </p>
                </motion.div>
              ) : (
                <form className="mt-8 grid sm:grid-cols-2 gap-4" onSubmit={onSubmit} noValidate>
                  <Field label="Name" error={errors.name}>
                    <input value={form.name} onChange={update("name")} className={inp} placeholder="Your full name" maxLength={80} />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input value={form.phone} onChange={update("phone")} className={inp} placeholder="+91" maxLength={20} />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input value={form.email} onChange={update("email")} className={inp} placeholder="you@example.com" type="email" maxLength={120} />
                  </Field>
                  <Field label="City" error={errors.city}>
                    <input value={form.city} onChange={update("city")} className={inp} placeholder="City" maxLength={60} />
                  </Field>
                  <Field label="Home Type" error={errors.homeType} full>
                    <select value={form.homeType} onChange={update("homeType")} className={inp}>
                      <option value="">Select home type</option>
                      <option>2 BHK Apartment</option>
                      <option>3 BHK Apartment</option>
                      <option>4 BHK Apartment</option>
                      <option>Villa</option>
                      <option>Independent Home</option>
                    </select>
                  </Field>
                  <Field label="Message (optional)" error={errors.message} full>
                    <textarea value={form.message} onChange={update("message")} className={`${inp} min-h-[120px] resize-none`} placeholder="Tell us about your project" maxLength={800} />
                  </Field>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-gold text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-gold hover:translate-y-[-1px] transition-transform"
                    >
                      Book Free Consultation <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Info cards */}
        <div className="lg:col-span-5">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {cards.map((c) => (
              <motion.div
                key={c.t}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="rounded-2xl glass p-6 shadow-premium hover:border-primary/40 transition-colors"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-gold text-primary-foreground">
                  {c.i}
                </span>
                <h3 className="mt-4 font-display text-xl">{c.t}</h3>
                <p className="mt-1 text-base text-foreground/90">{c.l}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.s}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

const inp =
  "w-full rounded-xl bg-white/[0.04] border border-border focus:border-primary/60 focus:ring-2 focus:ring-primary/20 focus:outline-none px-4 py-3 text-sm transition-all placeholder:text-muted-foreground";

function Field({
  label, error, children, full = false,
}: { label: string; error?: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}
