import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-primary/70" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance ${light ? "" : ""}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base sm:text-lg ${light ? "text-foreground/70" : "text-muted-foreground"} leading-relaxed`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
