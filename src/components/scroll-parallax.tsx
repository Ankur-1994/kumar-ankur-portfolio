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
      if (s1) s1.style.transform = `translate3d(0, ${scroll * 0.06}px, 0)`;
      if (s2) s2.style.transform = `translate3d(0, ${scroll * 0.11}px, 0)`;
      if (s3) s3.style.transform = `translate3d(0, ${scroll * 0.16}px, 0)`;
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
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        ref={slow}
        className="absolute -top-[20%] left-[-15%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_68%)] blur-3xl will-change-transform"
      />
      <div
        ref={mid}
        className="absolute bottom-[-10%] right-[-20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.14),transparent_70%)] blur-3xl will-change-transform"
      />
      <div
        ref={fast}
        className="absolute left-[35%] top-[40%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.08),transparent_72%)] blur-2xl will-change-transform"
      />
    </div>
  );
}
