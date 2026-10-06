"use client";

import { useState } from "react";
import Image from "next/image";

export default function DoctorPortrait({
  src,
  alt,
  fallbackLabel = "Image coming soon",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 40vw",
  className = "object-cover object-center",
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center text-center">
        <p className="px-6 text-xs uppercase tracking-[0.18em] text-ink-400">
          {fallbackLabel}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}