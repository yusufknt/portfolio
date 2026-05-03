"use client";

import { motion } from "framer-motion";

export function ShowcaseLift({ children, compact = false }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: compact ? -3 : -6 }}
      transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
      className={
        compact
          ? "relative rounded-xl shadow-[0_12px_40px_-38px_rgba(15,23,42,0.8)] transition-shadow duration-300 ease-out hover:shadow-[0_18px_48px_-40px_rgba(56,189,248,0.12)]"
          : "relative rounded-[1.85rem] shadow-[0_20px_70px_-50px_rgba(15,23,42,0.75)] transition-shadow duration-500 ease-out hover:shadow-[0_32px_90px_-50px_rgba(56,189,248,0.14)]"
      }
    >
      {children}
    </motion.div>
  );
}
