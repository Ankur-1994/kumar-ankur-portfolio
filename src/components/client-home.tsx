"use client";

import type { ReactNode } from "react";
import { ScrollParallax } from "@/components/scroll-parallax";
import SplashScreen from "@/components/splash-screen";

type Props = {
  children: ReactNode;
};

export function ClientHome({ children }: Props) {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[500] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <SplashScreen />
      <ScrollParallax />
      <div id="site-main" className="relative z-[2] isolate min-h-dvh">
        {children}
      </div>
    </>
  );
}
