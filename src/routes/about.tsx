import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Ruler, Layers, Factory, FileCheck2, Hammer, Clock,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import livingImg from "@/assets/living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";

import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DLIFE Interiors" },
      { name: "description", content: "Crafting custom-made home interiors since 2004. Design expertise, manufacturing strength and systematic execution." },
      { property: "og:title", content: "About — DLIFE Interiors" },
      { property: "og:description", content: "Design, manufacturing and execution under one trusted brand." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero />
      <About />
      <Value />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, oklch(0.76 0.115 80 / .6), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Sparkles size={13} /> About DLIFE
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl text-balance leading-[1.05] max-w-4xl mx-auto">
            Crafting custom-made home interiors{" "}
            <em className="not-italic text-gradient-gold">since 2004.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            DLIFE Interiors brings together design expertise, manufacturing strength and systematic
            execution to create beautiful and functional homes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative section-pad overflow-hidden border-y border-white/10">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, oklch(0.76 0.115 80 / .12), transparent 34%), radial-gradient(circle at 85% 65%, oklch(0.36 0.045 50 / .45), transparent 42%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <Reveal>
            <div className="img-zoom rounded-3xl overflow-hidden shadow-premium aspect-[4/5]">
              <img src={aboutImg} alt="DLIFE interior" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block absolute -bottom-10 -right-6 w-56 rounded-2xl overflow-hidden shadow-premium border-4 border-charcoal/90"
          >
            <img src={kitchenImg} alt="Kitchen detail" className="h-48 w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden md:block absolute -top-6 -left-6 w-40 rounded-2xl overflow-hidden shadow-premium border-4 border-charcoal/90"
          >
            <img src={livingImg} alt="Living detail" className="h-32 w-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <SectionTitle
            eyebrow="Our Story"
            title={<>A home is more than a space — it's <em className="not-italic text-gradient-gold">how you live.</em></>}
          />
          <Reveal delay={0.15}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                DLIFE Interiors is a contemporary home interior design company focused on
                customized modular interiors for apartments, villas and family homes. We provide
                complete furnishing solutions — modular kitchens, bedrooms, living and dining
                spaces — under one professional roof.
              </p>
              <p>
                Our work is shaped by a simple belief: every family deserves a home designed
                around their lifestyle, with materials they can trust and a process they can see.
                From the first sketch to the final handover, our designers, factory and execution
                teams move as one.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { n: "22+", l: "Years" },
                { n: "14K+", l: "Homes" },
                { n: "28", l: "Centres" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-4 text-center border border-primary/15 shadow-premium">
                  <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Value() {
  const items = [
    { i: <Ruler size={18} />, t: "Custom-Made Interiors", d: "Every home is designed and built around the people who will live in it." },
    { i: <Layers size={18} />, t: "Space-Smart Planning", d: "Layouts that get the most out of Indian apartments and villa floor-plates." },
    { i: <Factory size={18} />, t: "Quality Manufacturing", d: "Owned modular factories with controlled finishes and consistent standards." },
    { i: <FileCheck2 size={18} />, t: "Transparent Process", d: "Clear estimates, detailed drawings and approvals at every milestone." },
    { i: <Hammer size={18} />, t: "Professional Execution", d: "Trained site teams and structured project management on every job." },
    { i: <Clock size={18} />, t: "On-Time Handover", d: "Disciplined timelines so you can move into your finished home on schedule." },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          align="center"
          eyebrow="Our Values"
          title={<>What we bring to <em className="not-italic text-gradient-gold">every project.</em></>}
          description="Six commitments that shape the way we design, manufacture and deliver every home."
        />
        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((v) => (
            <motion.div
              key={v.t}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl glass p-6 shadow-premium hover:border-primary/40 transition-colors"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-gold text-primary-foreground">
                {v.i}
              </span>
              <h3 className="mt-4 font-display text-xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
