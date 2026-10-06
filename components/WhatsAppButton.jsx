import { MessageCircle } from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl } from "@/lib/utils";

export default function WhatsAppButton({ variant = "floating" }) {
  const url = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  if (variant !== "floating") return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-white shadow-lift transition hover:bg-teal-600 focus-visible:outline-none md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </a>
  );
}