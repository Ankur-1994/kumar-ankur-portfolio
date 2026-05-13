"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[100svh] max-w-lg flex-col justify-center gap-6 px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">Something went wrong</p>
      <h1 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">We hit an unexpected error</h1>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">
        Try again, or return home. If this keeps happening, email me from the contact section with what you were doing.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
        >
          Try again
        </button>
        <Link
          href="/"
          className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.06)] px-5 py-3 text-sm font-semibold text-[color:var(--text)]"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
