import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";
import { Reveal } from "@/components/site/Reveal";

export function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-premium">
          <img
            src={ctaBg}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.18_0.014_55/.92),oklch(0.32_0.05_55/.7)_60%,oklch(0.76_0.115_80/.45))]" />
          <div className="relative px-6 sm:px-12 md:px-20 py-20 md:py-28 text-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Begin Your Journey</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl text-balance">
                Ready to Transform <em className="not-italic text-gradient-gold">Your Home?</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-foreground/85 leading-relaxed">
                Book a free consultation with DLIFE Interiors and start planning a home that matches
                your lifestyle, space, and taste.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-gold hover:translate-y-[-1px] transition-transform"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
