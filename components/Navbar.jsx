"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarHeart, Menu, X } from "lucide-react";
import { doctor } from "@/data/doctor";
import { scrollToId } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleAnchorClick = (e, hash) => {
    if (!isHome) return;
    e.preventDefault();
    scrollToId(hash.replace("#", ""));
    window.history.replaceState(null, "", hash);
    setOpen(false);
  };

  return (
    <motion.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-line bg-white shadow-[0_1px_3px_rgba(10,30,63,0.04)]"
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-14 items-center justify-between gap-3 md:h-20"
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 py-1 pr-2 focus-visible:outline-none md:gap-3 md:pr-3"
          aria-label={`${doctor.name} — home`}
        >
          <Image
            src="/logo.png"
            alt={`${doctor.name} logo`}
            width={120}
            height={120}
            priority
            className="h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-bold tracking-tight text-navy-900 md:text-base">
              {doctor.name}
            </span>
            <span className="truncate text-[0.65rem] font-medium text-ink-500 md:text-xs">
              {doctor.specialization}
            </span>
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative rounded-full px-4 py-2 text-sm font-semibold text-navy-700 transition-colors hover:text-navy-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/appointment"
            className="group inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-red md:gap-2 md:px-5 md:py-2.5 md:text-sm"
          >
            <CalendarHeart
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 md:h-4 md:w-4"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="hidden sm:inline">Book Appointment</span>
            <span className="sm:hidden">Book</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-navy-900 transition hover:border-line-strong md:h-10 md:w-10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5 md:py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-navy-900 transition hover:bg-cyan-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}