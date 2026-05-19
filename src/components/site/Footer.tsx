import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-full gradient-gold grid place-items-center text-primary-foreground font-display text-lg">D</span>
            <span className="font-display text-2xl">DLIFE <span className="text-gradient-gold">Interiors</span></span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            Crafting custom-made home interiors for modern Indian families since 2004 —
            from modular kitchens to bedrooms, living and dining spaces.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-gold"
          >
            Book Free Consultation <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Navigate</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About" },
              { to: "/services", l: "Services" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-foreground/80 hover:text-primary transition-colors">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>Modular Kitchen</li>
            <li>Bedroom Interiors</li>
            <li>Living Room Interiors</li>
            <li>Dining Room Interiors</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-full glass grid place-items-center hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DLIFE Interiors. All rights reserved.</p>
          <p className="font-display tracking-wide">Designed for homes that feel like home.</p>
        </div>
      </div>
    </footer>
  );
}
