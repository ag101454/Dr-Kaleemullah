import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/utils";

const QUICK_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  const services = doctor.services?.slice(0, 4) || [];

  return (
    <footer className="mt-24 border-t border-line bg-cream-100">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-display text-2xl text-ink-900">
              {doctor.name}
            </p>
            <p className="mt-2 text-sm text-ink-500">
              {doctor.specialization}
            </p>
            {doctor.clinic?.city ? (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-500">
                <MapPin
                  className="h-4 w-4 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {doctor.clinic.city}
              </p>
            ) : null}
          </div>

          {/* Quick links */}
          <nav aria-label="Footer — quick links" className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.16em] text-ink-400">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-700 transition hover:text-teal-600"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          {services.length ? (
            <nav aria-label="Footer — services" className="md:col-span-3">
              <h2 className="text-xs uppercase tracking-[0.16em] text-ink-400">
                Services
              </h2>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug || s.title}>
                    <Link
                      href="/services"
                      className="text-sm text-ink-700 transition hover:text-teal-600"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {/* Contact */}
          <div className="md:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.16em] text-ink-400">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {doctor.phone ? (
                <li>
                  <a
                    href={telUrl(doctor.phoneRaw || doctor.phone)}
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-teal-600"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    Call
                  </a>
                </li>
              ) : null}
              {doctor.whatsapp ? (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-teal-600"
                  >
                    <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {doctor.email ? (
                <li>
                  <a
                    href={mailtoUrl(doctor.email, `Enquiry — ${doctor.name}`)}
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-teal-600"
                  >
                    <Mail className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                    Email
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Disclaimer + Copyright */}
        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ink-400 pretty">
            This website is for general informational purposes only and does not
            constitute medical advice, diagnosis, or treatment. Please consult a
            qualified healthcare professional for any medical concerns. In an
            emergency, contact your local emergency services immediately.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {doctor.name}. All rights reserved.
            </p>
            <p>{doctor.title}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}