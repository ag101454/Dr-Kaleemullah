"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarHeart, Menu, X } from "lucide-react";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = doctor.name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <motion.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-cream-50/80 border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between md:h-20"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full py-1 pr-3 focus-visible:outline-none"
          aria-label={`${doctor.name} — home`}
        >
          <motion.span
            animate={
              reduce ? false : { scale: scrolled ? 0.95 : 1 }
            }
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface text-sm font-medium tracking-tight text-ink-900 transition-colors group-hover:border-teal-500/40"
          >
            {initials || "Dr"}
          </motion.span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium tracking-tight text-ink-900">
              {doctor.name}
            </span>
            <span className="text-xs text-ink-500">
              {doctor.specialization || doctor.title}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href !== "/#experience" &&
              pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-0 rounded-full bg-ink-900/[0.05]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/appointment"
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition-all hover:bg-ink-800 hover:shadow-soft"
          >
            <CalendarHeart
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-ink-900 transition-colors hover:border-line-strong md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={
              reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }
            }
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="border-t border-line bg-cream-50/95 backdrop-blur-xl">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: reduce ? 0 : 0.05,
                      delayChildren: 0.08,
                    },
                  },
                }}
                className="container-page flex flex-col gap-1 py-6"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-2xl px-4 py-3 text-base text-ink-800 transition hover:bg-ink-900/[0.04]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  <Link
                    href="/appointment"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3.5 text-sm font-medium text-cream-50"
                  >
                    <CalendarHeart className="h-4 w-4" strokeWidth={1.75} />
                    Book Appointment
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}