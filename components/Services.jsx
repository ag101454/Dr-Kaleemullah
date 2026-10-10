"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function Services({ limit }) {
  const list = limit ? doctor.services.slice(0, limit) : doctor.services;
  const reduce = useReducedMotion();

  if (!list.length) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-cream-50 py-20 md:py-28"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Treatments &amp; Services</p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-h2 text-navy-900 balance"
              >
                Expert thoracic surgical care,{" "}
                <span className="text-red-500">delivered with precision.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500 pretty md:text-lg">
                Comprehensive surgical treatments for the chest, lungs,
                oesophagus, and mediastinum — available at Nishtar Hospital,
                Multan.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Cards grid */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.06,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {list.map((service) => (
            <motion.li
              key={service.slug || service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-card">
                {/* Red left accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 bg-red-500 transition-all duration-300 group-hover:w-1.5"
                />

                <div className="pl-7 pr-7 pt-7 pb-6 md:pl-8 md:pr-8">
                  {/* English */}
                  <div>
                    <p className="lang-badge">EN</p>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-900 md:text-xl">
                      {service.title}
                    </h3>
                    {service.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty md:text-[0.95rem] md:leading-7">
                        {service.description}
                      </p>
                    ) : null}
                  </div>

                  {/* Urdu — separated with a dashed divider */}
                  {service.titleUr ? (
                    <div className="mt-6 border-t border-dashed border-line pt-6">
                      <p className="lang-badge urdu-block !text-right !leading-none">
                        اردو
                      </p>
                      <h4 className="urdu-title mt-3 text-navy-800">
                        {service.titleUr}
                      </h4>
                      {service.descriptionUr ? (
                        <p className="urdu-desc mt-3 text-ink-500">
                          {service.descriptionUr}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom CTA */}
        <Reveal delay={0.1}>
          <div className="mt-14 text-center">
            <Link
              href="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-red"
            >
              Book a Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}