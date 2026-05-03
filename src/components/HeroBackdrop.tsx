"use client";

/** Sofistike minimal gradient — hareket yok */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-[-20%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--accent)_10%,transparent)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute right-[-6%] top-[36%] h-[14rem] w-[14rem] rounded-full bg-violet-500/[0.07] blur-3xl" />
    </div>
  );
}
