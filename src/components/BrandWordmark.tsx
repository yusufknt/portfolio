"use client";

export type BrandWordmarkVariant = "nav" | "hero" | "footer";

/** İsim + nokta imzası — içerikte sonda `.` varsa tekrar eklenmez */
export function BrandWordmark({
  name,
  variant,
  className = "",
}: {
  name: string;
  variant: BrandWordmarkVariant;
  className?: string;
}) {
  const base = name.replace(/\.+\s*$/, "").trim();

  const dot =
    variant === "footer" ? (
      <span className="text-slate-500" aria-hidden>
        .
      </span>
    ) : (
      <span className="text-sky-400/90" aria-hidden>
        .
      </span>
    );

  if (variant === "hero") {
    return (
      <span className={`type-hero-name inline-flex items-baseline gap-px text-slate-50 ${className}`}>
        <span>{base}</span>
        {dot}
      </span>
    );
  }

  if (variant === "footer") {
    return (
      <span className={`type-wordmark inline-flex items-baseline gap-px font-semibold tracking-tight ${className}`}>
        <span>{base}</span>
        {dot}
      </span>
    );
  }

  return (
    <span
      className={`type-wordmark inline-flex items-baseline gap-px text-xl font-semibold tracking-tight text-slate-100 ${className}`}
    >
      <span>{base}</span>
      {dot}
    </span>
  );
}
