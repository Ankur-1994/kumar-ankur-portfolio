"use client";

import { useEffect, useRef } from "react";

export function ScrollParallax() {
  const slow = useRef<HTMLDivElement>(null);
  const mid = useRef<HTMLDivElement>(null);
  const fast = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const y = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const apply = () => {
      const scroll = y.current;
      const s1 = slow.current;
      const s2 = mid.current;
      const s3 = fast.current;
      /* Stronger multi-layer parallax + slight horizontal drift (common on modern marketing sites). */
      if (s1) {
        s1.style.transform = `translate3d(${scroll * -0.04}px, ${scroll * 0.14}px, 0) scale(${1 + scroll * 0.00006})`;
      }
      if (s2) {
        s2.style.transform = `translate3d(${scroll * 0.06}px, ${scroll * 0.28}px, 0) rotate(${scroll * 0.012}deg)`;
      }
      if (s3) {
        s3.style.transform = `translate3d(${scroll * -0.03}px, ${scroll * 0.36}px, 0)`;
      }
      frame.current = 0;
    };

    const onScroll = () => {
      y.current = window.scrollY;
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 min-h-[100dvh] overflow-x-clip"
      aria-hidden
    >
      <div
        ref={slow}
        className="absolute -left-[20%] -top-[25%] h-[min(120vw,85vh)] w-[min(120vw,85vh)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18)_0%,rgba(124,58,237,0.05)_42%,transparent_78%)] blur-3xl will-change-transform"
      />
      <div
        ref={mid}
        className="absolute -bottom-[18%] -right-[22%] h-[min(130vw,90vh)] w-[min(130vw,90vh)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.12)_0%,rgba(255,90,31,0.04)_45%,transparent_80%)] blur-3xl will-change-transform"
      />
      <div
        ref={fast}
        className="absolute left-[28%] top-[38%] h-[min(95vw,65vh)] w-[min(95vw,65vh)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.07)_0%,transparent_72%)] blur-3xl will-change-transform"
      />
    </div>
  );
}
