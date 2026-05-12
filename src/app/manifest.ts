import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kumar Ankur — Portfolio",
    short_name: "Kumar Ankur",
    description:
      "Senior frontend engineer and architect — enterprise React, TypeScript, performance, and AI-assisted delivery.",
    start_url: "/",
    display: "browser",
    background_color: "#07070a",
    theme_color: "#07070a",
    lang: "en",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
