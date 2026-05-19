import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChefHat, BedDouble, Sofa, UtensilsCrossed, Plus, Minus, Sparkles, Check } from "lucide-react";

import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import livingImg from "@/assets/living.jpg";
import diningImg from "@/assets/dining.jpg";

import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DLIFE Interiors" },
      { name: "description", content: "Modular kitchens, bedrooms, living and dining interiors designed and executed for modern Indian homes." },
      { property: "og:title", content: "Services — DLIFE Interiors" },
      { property: "og:description", content: "Complete interior solutions for apartments and villas." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.36 0.045 50 / .8), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Sparkles size={13} /> Our Services
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance max-w-4xl mx-auto">
            Complete interior solutions for{" "}
            <em className="not-italic text-gradient-gold">modern Indian homes.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            From modular kitchens to bedrooms, living rooms and dining spaces — DLIFE Interiors
            creates spaces that balance beauty, comfort and functionality.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: <ChefHat size={18} />,
    title: "Modular Kitchen Interiors",
    desc: "Smart layouts engineered for Indian cooking — premium hardware, durable surfaces and finishes that age beautifully.",
    img: kitchenImg,
    features: ["L / U / Parallel / Island layouts", "Soft-close drawers & premium hardware", "Anti-bacterial laminates & quartz tops", "Tall units, pull-outs & corner solutions"],
  },
  {
    icon: <BedDouble size={18} />,
    title: "Bedroom Interiors",
    desc: "Restful, storage-rich bedrooms with custom wardrobes, layered lighting and warm tactile materials.",
    img: bedroomImg,
    features: ["Sliding & openable wardrobes", "Custom beds, side tables and headboards", "Cove & ambient lighting design", "Study, dresser and loft solutions"],
  },
  {
    icon: <Sofa size={18} />,
    title: "Living Room Interiors",
    desc: "Statement living spaces with curated paneling, joinery and lighting that quietly elevate the everyday.",
    img: livingImg,
    features: ["TV units & feature wall paneling", "Custom sofas & soft furnishings", "False ceiling & lighting layout", "Display, bar and storage units"],
  },
  {
    icon: <UtensilsCrossed size={18} />,
    title: "Dining Room Interiors",
    desc: "Elegant dining settings designed around the way your family gathers, hosts and entertains.",
    img: diningImg,
    features: ["Dining tables & upholstered chairs", "Crockery units & buffets", "Statement chandeliers & lighting", "Wall paneling & mirror features"],
  },
];

function Services() {
  return (
    <section className="relative section-pad overflow-hidden border-y border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-65"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, oklch(0.76 0.115 80 / .12), transparent 32%), radial-gradient(circle at 88% 55%, oklch(0.36 0.045 50 / .48), transparent 44%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Four Specialties"
          title={<>Crafted for <em className="not-italic text-gradient-gold">how Indian families live.</em></>}
        />
        <div className="mt-14 space-y-10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article
                className={`grid lg:grid-cols-12 gap-8 items-center rounded-3xl glass p-6 sm:p-10 border border-primary/15 shadow-premium`}
              >
                <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="img-zoom rounded-2xl overflow-hidden aspect-[5/4]">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                    {s.icon} 0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl text-balance">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full gradient-gold text-primary-foreground px-6 py-3 text-sm font-medium shadow-gold hover:translate-y-[-1px] transition-transform"
                  >
                    Book Free Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What type of interiors does DLIFE Interiors provide?", a: "We design and execute complete home interiors including modular kitchens, bedrooms, living rooms and dining spaces for apartments, villas and independent homes." },
  { q: "Does DLIFE Interiors design modular kitchens?", a: "Yes. Modular kitchens are a core specialty — from layout planning and material selection to manufacturing in our own factory and on-site installation." },
  { q: "Can interiors be customized for apartments and villas?", a: "Absolutely. Every project is custom-designed around your floor plan, lifestyle and budget — whether it's a compact apartment or a multi-floor villa." },
  { q: "How does the design process work?", a: "It begins with a free consultation, followed by an estimate and design direction, detailed drawings, factory production, on-site execution and a final on-time handover." },
  { q: "How can I book a consultation?", a: "Use the Book Free Consultation button anywhere on the site or visit the Contact page to share your details — our design consultant will reach out shortly." },
];

function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          align="center"
          eyebrow="FAQ"
          title={<>Answers to <em className="not-italic text-gradient-gold">common questions.</em></>}
        />
        <Stagger className="mt-12 space-y-3" gap={0.06}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                variants={itemVariants}
                className="rounded-2xl glass overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl">{f.q}</span>
                  <span className="shrink-0 h-9 w-9 rounded-full gradient-gold text-primary-foreground grid place-items-center">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
