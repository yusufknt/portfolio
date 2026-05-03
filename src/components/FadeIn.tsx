"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: reduce ? 0 : 0.72,
        ease: [0, 0, 0.2, 1],
        delay: reduce ? 0 : delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
