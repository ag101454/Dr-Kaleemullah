"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners, SLIDE_DURATION } from "@/data/banners";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const total = banners.length;

  const goTo = useCallback(
    (i) => setIndex(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduce || paused || total <= 1) return;
    timerRef.current = setTimeout(() => {
      setIndex((v) => (v + 1) % total);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, reduce, total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (!total) return null;

  const current = banners[index];

  return (
    <section
      aria-label="Practice hero banner"
      aria-roledescription="carousel"
      className="relative w-full bg-white pt-6 pb-12 md:pt-10 md:pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Ambient cyan glow behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-[500px] w-[80%] -translate-x-1/2 bg-blob-cyan opacity-60 blur-3xl" />
      </div>

      <div className="container-page">
        {/* Container — matches screenshot 2 proportions */}
        <div className="relative mx-auto max-w-[1280px]">
          {/* Rounded banner frame */}
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-line bg-navy-900 shadow-lift md:aspect-[2400/1000] md:rounded-[28px]">
            {/* Slides */}
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduce ? 0 : 1.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                {/* Subtle Ken Burns */}
                <motion.div
                  initial={reduce ? false : { scale: 1.03 }}
                  animate={reduce ? false : { scale: 1.0 }}
                  transition={{
                    duration: reduce ? 0 : SLIDE_DURATION / 1000 + 1.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    priority={index === 0}
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-cover object-center"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* ---- Left / Right arrow controls (like screenshot 2) ---- */}
            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous banner"
                  className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 md:left-5 md:h-12 md:w-12"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next banner"
                  className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 md:right-5 md:h-12 md:w-12"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                </button>
              </>
            ) : null}

            {/* ---- Dot indicators (bottom center, inside banner) ---- */}
            {total > 1 ? (
              <div
                role="tablist"
                aria-label="Select banner"
                className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-md md:bottom-6"
              >
                {banners.map((b, i) => (
                  <button
                    key={b.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index
                        ? "w-7 bg-white"
                        : "w-1.5 bg-white/50 hover:bg-white/80"
                    )}
                  />
                ))}
              </div>
            ) : null}

            {/* ---- Progress bar (very bottom edge) ---- */}
            {total > 1 && !reduce ? (
              <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/15">
                <motion.div
                  key={`progress-${index}-${paused}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? undefined : 1 }}
                  transition={{
                    duration: paused ? 0 : SLIDE_DURATION / 1000,
                    ease: "linear",
                  }}
                  className="h-full origin-left bg-cyan-400"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}