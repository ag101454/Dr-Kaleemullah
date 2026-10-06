import {
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Navigation,
    Phone,
  } from "lucide-react";
  import { doctor } from "@/data/doctor";
  import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/utils";
  import Reveal from "@/components/Reveal";
  
  export default function ClinicInfo() {
    const { clinic } = doctor;
    const hasHours = clinic?.hours?.length > 0;
  
    const wa = whatsappUrl(
      doctor.whatsapp,
      `Hello ${doctor.name}, I would like to book an appointment.`
    );
  
    return (
      <section
        id="clinic"
        aria-labelledby="clinic-heading"
        className="container-page py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Clinic</p>
            <h2
              id="clinic-heading"
              className="mt-5 font-display text-h2 text-ink-900 balance"
            >
              Where to find us.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500 pretty">
              Clinic details, hours, and directions — updated directly from the
              practice.
            </p>
  
            {clinic?.mapUrl ? (
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
              >
                <Navigation
                  className="h-4 w-4 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Get Directions
              </a>
            ) : null}
          </Reveal>
  
          <Reveal className="md:col-span-8" delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              {clinic?.name || clinic?.address || clinic?.city ? (
                <DetailCard icon={MapPin} title="Address">
                  {clinic.name ? (
                    <p className="font-medium text-ink-900">{clinic.name}</p>
                  ) : null}
                  {clinic.address ? (
                    <p className="mt-1 text-ink-500">{clinic.address}</p>
                  ) : null}
                  {clinic.city ? (
                    <p className="text-ink-500">{clinic.city}</p>
                  ) : null}
                </DetailCard>
              ) : null}
  
              {hasHours ? (
                <DetailCard icon={Clock} title="Consultation Hours">
                  <ul className="space-y-1.5">
                    {clinic.hours.map((h) => (
                      <li
                        key={`${h.day}-${h.time}`}
                        className="flex justify-between gap-4"
                      >
                        <span className="text-ink-700">{h.day}</span>
                        <span className="text-ink-500">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </DetailCard>
              ) : null}
  
              {doctor.phone ? (
                <DetailCard icon={Phone} title="Phone">
                  <a
                    href={telUrl(doctor.phoneRaw || doctor.phone)}
                    className="text-ink-900 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
                  >
                    {doctor.phone}
                  </a>
                </DetailCard>
              ) : null}
  
              {doctor.whatsapp ? (
                <DetailCard icon={MessageCircle} title="WhatsApp">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-900 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
                  >
                    Message the clinic
                  </a>
                </DetailCard>
              ) : null}
  
              {doctor.email ? (
                <DetailCard icon={Mail} title="Email">
                  <a
                    href={mailtoUrl(
                      doctor.email,
                      `Appointment enquiry — ${doctor.name}`
                    )}
                    className="break-all text-ink-900 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
                  >
                    {doctor.email}
                  </a>
                </DetailCard>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
  
  function DetailCard({ icon: Icon, title, children }) {
    return (
      <div className="rounded-3xl border border-line bg-surface p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-teal-50 text-teal-600">
            <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </span>
          <h3 className="text-xs uppercase tracking-[0.16em] text-ink-400">
            {title}
          </h3>
        </div>
        <div className="mt-4 text-sm">{children}</div>
      </div>
    );
  }