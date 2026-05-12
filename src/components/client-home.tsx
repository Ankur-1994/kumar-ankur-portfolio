"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { ScrollParallax } from "@/components/scroll-parallax";

const SplashScreen = dynamic(() => import("@/components/splash-screen"), {
  ssr: false,
});

type Props = {
  children: ReactNode;
};

export function ClientHome({ children }: Props) {
  return (
    <>
      <ScrollParallax />
      <SplashScreen />
      <div className="relative z-[2] isolate min-h-dvh">{children}</div>
    </>
  );
}
