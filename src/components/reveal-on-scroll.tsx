"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** @deprecated no-op; motion uses spring + viewport timing */
  delayClass?: string;
};

/** Scroll-driven section reveal — spring motion, no blur (cleaner for a portfolio demo). */
export function RevealOnScroll({ children, className = "" }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -12% 0px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 26,
        mass: 0.85,
      }}
    >
      {children}
    </motion.div>
  );
}
