import { ImageResponse } from "next/og";

export const alt = "Kumar Ankur — Senior Frontend Engineer and architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(155deg, #0c0a14 0%, #07070a 45%, #140a18 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            color: "#ff5a1f",
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
        >
          KA
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 44,
            fontWeight: 650,
            color: "rgba(255,255,255,0.94)",
            letterSpacing: "-0.03em",
          }}
        >
          Kumar Ankur
        </div>
        <div style={{ marginTop: 14, fontSize: 26, color: "rgba(255,255,255,0.58)" }}>
          Senior Frontend Engineer · Architect · Enterprise UI
        </div>
      </div>
    ),
    { ...size },
  );
}
