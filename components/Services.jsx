"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Baby,
  Brain,
  ClipboardCheck,
  Ear,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

const ICONS = {
  Activity,
  Baby,
  Brain,
  ClipboardCheck,
  Ear,
  HeartPulse,
  Microscope,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
};

function ServiceIcon({ name }) {
  const Cmp = ICONS[name] || Stethoscope;
  return <Cmp className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />;
}

export default function Services({ limit }) {
  const list = limit ? doctor.services.slice(0, limit) : doctor.services;
  const reduce = useReducedMotion();

  if (!list.length) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative"
    >
      <div className="container-page py-20 md:py-28">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2
                id="services-heading"
                className="mt-5 font-display text-h2 text-ink-900 balance"
              >
                Focused clinical services,{" "}
                <em className="not-italic text-teal-600">
                  delivered with precision.
                </em>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 self-start text-sm text-ink-800 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500 md:self-auto"
            >
              View all services
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.08,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((service) => (
            <motion.li
              key={service.slug || service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <ServiceIcon name={service.icon} />
                </div>

                <h3 className="mt-6 font-display text-xl text-ink-900">
                  {service.title}
                </h3>

                {service.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">
                    {service.description}
                  </p>
                ) : null}

                {service.details ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-400 pretty">
                    {service.details}
                  </p>
                ) : null}

                <div className="mt-8 pt-6 border-t border-line">
                  <span className="inline-flex items-center gap-1.5 text-sm text-ink-800 transition-colors group-hover:text-teal-600">
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}