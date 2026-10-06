"use client";

import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";

export default function Testimonials() {
  const items = doctor.testimonials || [];
  const reduce = useReducedMotion();

  if (!items.length) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="container-page py-20 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">Patient Voices</p>
        <h2
          id="testimonials-heading"
          className="mt-5 font-display text-h2 text-ink-900 balance"
        >
          In their{" "}
          <em className="not-italic text-teal-600">own words.</em>
        </h2>
      </div>

      {/* Mobile: horizontal snap scroll. Desktop: grid */}
      <div className="mt-12 -mx-5 overflow-x-auto px-5 pb-4 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
        <ul className="flex min-w-max gap-5 md:grid md:min-w-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.li
              key={i}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: reduce ? 0 : i * 0.06,
              }}
              className="w-[85vw] shrink-0 sm:w-[70vw] md:w-auto"
            >
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7">
                <Quote
                  className="h-5 w-5 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-700 pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-medium text-ink-900">
                    {t.author}
                  </p>
                  {t.context ? (
                    <p className="mt-0.5 text-xs text-ink-400">{t.context}</p>
                  ) : null}
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}