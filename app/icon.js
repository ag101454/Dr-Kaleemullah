import { ImageResponse } from "next/og";
import { doctor } from "@/data/doctor";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const initials = doctor.name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1A2B",
          color: "#FBF9F6",
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {initials || "Dr"}
      </div>
    ),
    size
  );
}