"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl } from "@/lib/utils";

export default function Hero() {
  const reduce = useReducedMotion();
  const wa = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] bg-blob-teal blur-2xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] bg-blob-sand blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-100/60" />
      </div>

      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24 lg:py-28">
        {/* ---- Left: copy ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="md:col-span-7 lg:col-span-7"
        >
          <motion.p
            variants={itemVariants}
            className="eyebrow inline-flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            Compassionate Medical Care
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mt-6 font-display text-display text-ink-900 balance"
          >
            {doctor.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-ink-500 md:text-xl"
          >
            <span className="text-ink-800">{doctor.specialization}</span>
            {doctor.subSpecialization ? (
              <span> · {doctor.subSpecialization}</span>
            ) : null}
          </motion.p>

          {doctor.tagline ? (
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 pretty md:text-lg"
            >
              {doctor.tagline}
            </motion.p>
          ) : null}

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
            >
              Book an Appointment
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            {doctor.whatsapp ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
              >
                <MessageCircle
                  className="h-4 w-4 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            ) : null}
          </motion.div>

          {/* Micro trust row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500"
          >
            {doctor.experience ? (
              <span className="inline-flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {doctor.experience}+ Years Experience
              </span>
            ) : null}

            {doctor.qualifications?.length ? (
              <span className="inline-flex items-center gap-2">
                <ShieldCheck
                  className="h-4 w-4 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {doctor.qualifications.length} Qualification
                {doctor.qualifications.length > 1 ? "s" : ""}
              </span>
            ) : null}

            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-ink-800 underline decoration-line-strong decoration-1 underline-offset-4 transition hover:decoration-teal-500"
            >
              View Services
              <ArrowRight
                className="h-3.5 w-3.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* ---- Right: image composition ---- */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative md:col-span-5 lg:col-span-5"
        >
          <DoctorPhoto name={doctor.name} />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Doctor photo with graceful fallback if the image is missing        */
/* ------------------------------------------------------------------ */

function DoctorPhoto({ name }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Offset decorative frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border border-line-strong bg-cream-100/60"
      />

      {/* Photo frame */}
      <div className="grain relative h-full w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50">
        {failed ? (
          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="px-6">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line-strong bg-surface/80 text-ink-500">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-400">
                Photo coming soon
              </p>
            </div>
          </div>
        ) : (
          <Image
            src="/doctor/doctor-profile.jpg"
            alt={`Portrait of ${name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-center"
            onError={() => setFailed(true)}
          />
        )}
      </div>

      {/* Floating credential badge */}
      <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-soft backdrop-blur-md sm:block">
        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-400">
          Practice
        </p>
        <p className="mt-0.5 text-sm font-medium text-ink-900">
          Patient-centered care
        </p>
      </div>
    </div>
  );
}