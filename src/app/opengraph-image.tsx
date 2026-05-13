import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { getExperienceYears, injectYears } from "@/lib/career-years";

export const alt = "Kumar Ankur — Senior Frontend Engineer & Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function displayHost(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim() ?? "";
  if (!raw || /localhost|127\.0\.0\.1/i.test(raw)) return "";
  try {
    return new URL(raw).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export default function OpenGraphImage() {
  const { label } = getExperienceYears(profile.careerStartISO);
  const statusLine = injectYears(profile.heroStatusLine, label);
  const host = displayHost();
  const footnote = profile.expertiseChips
    .slice(0, 2)
    .map((c) => injectYears(c, label))
    .join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #0a0814 0%, #07070a 42%, #120a1a 100%)",
          fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -120,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.28)",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 100,
            bottom: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255, 90, 31, 0.22)",
            filter: "blur(56px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: 26,
                background: "linear-gradient(145deg, #ff5a1f 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.12)",
              }}
            >
              KA
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.96)",
                  letterSpacing: "-0.045em",
                  lineHeight: 1.05,
                }}
              >
                {profile.name}
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 650,
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.25,
                  maxWidth: 920,
                }}
              >
                {profile.role}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 980 }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.35,
              }}
            >
              {statusLine}
            </div>
            <div style={{ fontSize: 24, color: "rgba(255,255,255,0.45)" }}>{profile.location}</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
            }}
          >
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.38)", maxWidth: "72%", lineHeight: 1.35 }}>
              {footnote}
            </div>
            <div
              style={{
                fontSize: 20,
                color: "rgba(255,255,255,0.32)",
                fontFamily: 'ui-monospace, Menlo, monospace',
                letterSpacing: "-0.02em",
              }}
            >
              {host || "Portfolio"}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
