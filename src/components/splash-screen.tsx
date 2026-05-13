"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";

const SITE_MAIN_ID = "site-main";

export default function SplashScreen() {
  const titleId = useId();
  /** Runs on every full page load / refresh (no localStorage). */
  const [phase, setPhase] = useState<"run" | "exit" | "done">("run");
  const autoTimer = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);
  const skipRef = useRef<HTMLButtonElement>(null);

  const finish = useCallback(() => {
    setPhase("exit");
    exitTimer.current = window.setTimeout(() => setPhase("done"), 520);
  }, []);

  useEffect(() => {
    if (phase !== "run") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 450 : 2400;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    autoTimer.current = window.setTimeout(finish, duration);

    return () => {
      document.body.style.overflow = prevOverflow;
      if (autoTimer.current != null) window.clearTimeout(autoTimer.current);
    };
  }, [phase, finish]);

  useEffect(() => {
    if (phase === "run") {
      skipRef.current?.focus();
    }
  }, [phase]);

  useLayoutEffect(() => {
    const main = document.getElementById(SITE_MAIN_ID);
    if (!main) return;
    if (phase === "done") {
      main.removeAttribute("inert");
      queueMicrotask(() => {
        document.getElementById("main-content")?.focus({ preventScroll: true });
      });
    } else {
      main.setAttribute("inert", "");
    }
  }, [phase]);

  useEffect(() => {
    return () => {
      document.getElementById(SITE_MAIN_ID)?.removeAttribute("inert");
    };
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      if (exitTimer.current != null) window.clearTimeout(exitTimer.current);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`splash-shell pointer-events-auto fixed inset-0 z-[400] flex min-h-[100svh] flex-col items-center justify-center gap-10 bg-[color:var(--bg)] px-6 ${
        phase === "exit" ? "splash-shell--exit" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <p id={titleId} className="sr-only">
        Kumar Ankur portfolio intro
      </p>
      <div
        className="splash-mark select-none font-black tracking-tighter text-[clamp(4.5rem,18vw,9rem)] leading-none text-transparent"
        aria-hidden
        style={{
          backgroundImage: "linear-gradient(135deg, #ff5a1f, #c084fc, #7c3aed)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        KA
      </div>
      <button
        ref={skipRef}
        type="button"
        className="focus-ring min-h-[44px] min-w-[44px] rounded-full border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.06)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.1)]"
        onClick={() => {
          if (autoTimer.current != null) window.clearTimeout(autoTimer.current);
          finish();
        }}
      >
        Skip intro
      </button>
    </div>
  );
}
