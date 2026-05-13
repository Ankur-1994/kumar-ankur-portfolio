import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-lg flex-col justify-center gap-6 px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">404</p>
      <h1 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">This page doesn’t exist</h1>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">
        The link may be broken or the page was moved. Head back to the portfolio home or jump to contact.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
        >
          Back to portfolio
        </Link>
        <Link
          href="/#contact"
          className="focus-ring text-sm font-semibold text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--text)] hover:underline"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
