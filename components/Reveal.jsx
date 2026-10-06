"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle fade-up-on-scroll wrapper.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}