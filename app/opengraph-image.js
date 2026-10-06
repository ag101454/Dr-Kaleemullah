import { ImageResponse } from "next/og";
import { doctor } from "@/data/doctor";

export const runtime = "edge";
export const alt = `${doctor.name} — ${doctor.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FBF9F6 0%, #F6F2EC 60%, #EAF5F4 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#0A6462",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 40,
              height: 2,
              background: "#0E7C7B",
              display: "flex",
            }}
          />
          Medical Practice
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0F1A2B",
              display: "flex",
            }}
          >
            {doctor.name}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#2A374A",
              display: "flex",
              fontFamily: "sans-serif",
            }}
          >
            {doctor.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#5B6678",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <div>{doctor.clinic?.city || ""}</div>
          <div>{doctor.specialization}</div>
        </div>
      </div>
    ),
    size
  );
}