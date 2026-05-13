"use client";

import { useEffect } from "react";

/**
 * Print often captures from the current scroll position; scroll-linked layers and
 * viewport-based motion can mis-measure. Reset to top right before the print pipeline runs.
 */
export function PrintPrepare() {
  useEffect(() => {
    const onBeforePrint = () => {
      window.scrollTo(0, 0);
      void document.documentElement.offsetHeight;
    };
    window.addEventListener("beforeprint", onBeforePrint);
    return () => window.removeEventListener("beforeprint", onBeforePrint);
  }, []);
  return null;
}
