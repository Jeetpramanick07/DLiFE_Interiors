import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, Sparkles, Users, MapPin, Calendar,
  ChefHat, BedDouble, Sofa, UtensilsCrossed,
  Phone, PencilRuler, FileCheck2, Factory, Truck, KeyRound,
  Building2, Award, ShieldCheck,
} from "lucide-react";

import heroLiving from "@/assets/hero-living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import livingImg from "@/assets/living.jpg";
import diningImg from "@/assets/dining.jpg";

import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Counter } from "@/components/site/Counter";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DLIFE Interiors — Custom Home Interiors in India" },
      { name: "description", content: "Premium custom modular kitchens, bedrooms, living and dining interiors. 22+ years, 14,000+ happy homes, 28 experience centres." },
      { property: "og:title", content: "DLIFE Interiors — Custom Home Interiors" },
      { property: "og:description", content: "Designing homes that feel beautiful, functional, and truly yours." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <CTASection />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-32 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.76 0.115 80 / .6), transparent 60%)" }} />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.36 0.045 50 / .8), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary">
              <Sparkles size={13} /> Modern Indian Luxury Interiors
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl text-balance">
              Designing homes that feel{" "}
              <em className="not-italic text-gradient-gold">beautiful, functional</em>,
              and truly yours.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              DLIFE Interiors creates customized home interiors for modular kitchens, bedrooms,
              living spaces, dining areas, apartments and villas — with professional design and
              end-to-end execution.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full gradient-gold text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-gold hover:translate-y-[-1px] transition-transform"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hero image w/ floating stat cards */}
        <div className="lg:col-span-6 relative">
          <Reveal delay={0.1}>
            <motion.div
              style={{ y, scale }}
              className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-premium img-zoom"
            >
              <img
                src={heroLiving}
                alt="DLIFE Interiors luxury living room"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />
            </motion.div>
          </Reveal>

          {/* Floating stat cards */}
          <FloatingStat className="left-[-8px] sm:left-[-32px] top-10" delay={0.4} icon={<Award size={16} />}
            value="22+" label="Years Experience" />
          <FloatingStat className="right-[-8px] sm:right-[-24px] top-1/3" delay={0.55} icon={<Users size={16} />}
            value="14,000+" label="Happy Customers" />
          <FloatingStat className="left-[-8px] sm:left-[-40px] bottom-24" delay={0.7} icon={<MapPin size={16} />}
            value="28" label="Experience Centres" />
          <FloatingStat className="right-[-8px] sm:right-[-16px] bottom-6" delay={0.85} icon={<Calendar size={16} />}
            value="40 Days*" label="Working Days" />
        </div>
      </div>
    </section>
  );
}

function FloatingStat({
  className = "", icon, value, label, delay = 0,
}: { className?: string; icon: React.ReactNode; value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={`absolute glass rounded-2xl px-4 py-3 shadow-premium ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3"
      >
        <span className="h-9 w-9 rounded-full gradient-gold grid place-items-center text-primary-foreground">
          {icon}
        </span>
        <div className="leading-tight">
          <div className="font-display text-lg">{value}</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Trust ───────────────────────── */
function Trust() {
  const stats = [
    { n: 22, s: "+", label: "Years of design experience" },
    { n: 14000, s: "+", label: "Satisfied customers" },
    { n: 28, s: "", label: "Showrooms across India" },
    { n: 1600, s: "+", label: "Employees" },
  ];
  const pillars = [
    { icon: <Factory size={18} />, t: "Own Modular Factory", d: "End-to-end manufacturing under one roof for precision and quality control." },
    { icon: <ShieldCheck size={18} />, t: "Design-to-Execution", d: "A single professional team takes you from first sketch to final handover." },
    { icon: <Building2 size={18} />, t: "Pan-India Presence", d: "28 experience centres so you can touch, feel and finalize with confidence." },
  ];
  return (
    <section className="relative bg-charcoal text-ivory overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 20% 10%, oklch(0.36 0.045 50 / .45), transparent 32%), radial-gradient(circle at 85% 25%, oklch(0.76 0.115 80 / .18), transparent 28%)" }} />
      <div className="section-pad relative mx-auto max-w-7xl px-6">
        <SectionTitle
          light
          eyebrow="Trust & Credibility"
          title={<>Two decades of crafting <em className="not-italic text-gradient-gold">premium Indian homes.</em></>}
          description="A brand built on consistency, craftsmanship and a meticulous process — backed by infrastructure and people who care."
        />

        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="rounded-2xl glass p-6 border border-primary/15 hover:border-primary/35 hover:shadow-gold transition-all"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient-gold">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory/60">{s.label}</div>
            </motion.div>
          ))}
        </Stagger>

        <Stagger className="mt-10 grid md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <motion.div
              key={p.t}
              variants={itemVariants}
              className="group rounded-2xl glass p-6 border border-primary/15 hover:border-primary/35 hover:shadow-gold transition-all"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full gradient-gold text-primary-foreground">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-2xl">{p.t}</h3>
              <p className="mt-2 text-sm text-ivory/65 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */
const SERVICES = [
  { icon: <ChefHat size={16} />, title: "Modular Kitchen Interiors", desc: "Smart layouts, premium hardware and finishes engineered for everyday Indian cooking.", img: kitchenImg },
  { icon: <BedDouble size={16} />, title: "Bedroom Interiors", desc: "Restful, storage-rich bedrooms with custom wardrobes, lighting and warm materials.", img: bedroomImg },
  { icon: <Sofa size={16} />, title: "Living Room Interiors", desc: "Statement living spaces with curated paneling, lighting and bespoke joinery.", img: livingImg },
  { icon: <UtensilsCrossed size={16} />, title: "Dining Room Interiors", desc: "Elegant dining settings designed around the way your family gathers and entertains.", img: diningImg },
];

function Services() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionTitle
            eyebrow="Our Services"
            title={<>Interiors crafted around <em className="not-italic text-gradient-gold">how you live.</em></>}
          />
          <Reveal delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary underline-grow">
              View all services <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group rounded-2xl overflow-hidden glass shadow-premium"
            >
              <div className="img-zoom aspect-[4/5] relative">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {s.icon} Service
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary underline-grow"
                >
                  View Details <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */
function Process() {
  const steps = [
    { icon: <Phone size={16} />, t: "Talk to Our Design Consultant", d: "Share your space, lifestyle and budget. We listen first." },
    { icon: <PencilRuler size={16} />, t: "Get Estimate & Design Direction", d: "Receive a transparent estimate and an initial design direction." },
    { icon: <FileCheck2 size={16} />, t: "Detailed Drawing & Approval", d: "Material, finishes and detailed drawings approved by you." },
    { icon: <Factory size={16} />, t: "Production at Own Factories", d: "Precision manufacturing in our owned modular facilities." },
    { icon: <Truck size={16} />, t: "Material Delivery & Execution", d: "Safe delivery and disciplined on-site execution by trained teams." },
    { icon: <KeyRound size={16} />, t: "On-Time Project Handover", d: "Walkthrough, quality checks, and handover of your finished home." },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Process"
          align="center"
          title={<>A calm, structured journey to your <em className="not-italic text-gradient-gold">finished home.</em></>}
          description="From the first conversation to the final handover, every step is owned by DLIFE Interiors."
        />

        <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl glass p-6 shadow-premium"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 h-11 w-11 rounded-full gradient-gold grid place-items-center text-primary-foreground">
                  {s.icon}
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
