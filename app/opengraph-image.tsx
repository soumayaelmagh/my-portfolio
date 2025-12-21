import { ImageResponse } from "next/og";
import {
  highlightedSkills,
  siteDescription,
  siteName,
  siteTitle,
} from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          background:
            "radial-gradient(circle at 25% 25%, rgba(250,204,21,0.08), transparent 35%), linear-gradient(135deg, #0f172a 0%, #0b1220 50%, #111827 100%)",
          color: "#e5e7eb",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "30px",
            borderRadius: "28px",
            border: "1px solid rgba(148,163,184,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: 60,
            width: 220,
            height: 220,
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(250,204,21,0.18), transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        <div style={{ fontSize: 20, letterSpacing: 1.4, color: "#94a3b8" }}>
          {siteName}
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, color: "#f8fafc" }}>
          {siteTitle}
        </div>
        <div style={{ fontSize: 28, color: "#cbd5e1", maxWidth: 900, lineHeight: 1.35 }}>
          {siteDescription}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 8,
            maxWidth: 940,
          }}
        >
          {highlightedSkills.slice(0, 6).map((skill) => (
            <div
              key={skill}
              style={{
                padding: "12px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(250,204,21,0.35)",
                background: "rgba(250,204,21,0.12)",
                color: "#facc15",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
