"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [message, setMessage] = useState<string | null>(null);
  const clearTimer = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    if (clearTimer.current != null) window.clearTimeout(clearTimer.current);
    setMessage(msg);
    clearTimer.current = window.setTimeout(() => {
      setMessage(null);
      clearTimer.current = null;
    }, 2800);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="ka-no-print pointer-events-none fixed bottom-6 left-1/2 z-[490] w-[min(100%-2rem,420px)] -translate-x-1/2 px-4"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence>
          {message ? (
            <motion.div
              key={message}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.99 }}
              transition={
                reduceMotion
                  ? { duration: 0.12 }
                  : { type: "spring" as const, stiffness: 380, damping: 28 }
              }
              className="pointer-events-auto rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3 text-center text-sm font-semibold text-[color:var(--text)] shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
            >
              {message}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
