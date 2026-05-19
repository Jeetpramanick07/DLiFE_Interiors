import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-premium" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-full gradient-gold shadow-gold grid place-items-center text-primary-foreground font-display text-lg">D</span>
            <span className="font-display text-xl tracking-wide">
              DLIFE <span className="text-gradient-gold">Interiors</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`underline-grow text-sm tracking-wide transition-colors ${
                    active ? "text-primary" : "text-foreground/85 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-gold hover:translate-y-[-1px] transition-transform"
            >
              Book Free Consultation
            </Link>
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full glass"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-4 animate-fade-in">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-3 px-2 text-sm border-b border-border/40 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full gradient-gold text-primary-foreground px-5 py-3 text-sm font-medium"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
