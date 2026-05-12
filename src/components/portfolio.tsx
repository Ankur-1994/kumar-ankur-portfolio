import type { SVGProps } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.37V23h-4V8z"
      />
    </svg>
  );
}

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.9c.58.1.79-.25.79-.56l-.01-2.05c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.1-3.17 0 0 .97-.31 3.18 1.2a11 11 0 0 0 5.8 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.65.23 2.87.12 3.17.75.8 1.19 1.82 1.19 3.08 0 5.42-2.69 6.38-5.26 6.71.42.36.8 1.08.8 2.18l-.01 3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
      />
    </svg>
  );
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5 7.8 6.2 7.8-6.2H4.2ZM20 8.36l-7.45 5.9a1.2 1.2 0 0 1-1.5 0L4 8.36V17.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.36Z"
      />
    </svg>
  );
}

function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.5 3.5A10.3 10.3 0 0 0 3.4 20.6L2 22l3.1-.8A10.3 10.3 0 0 0 12 22.5 10.5 10.5 0 0 0 20.5 3.5ZM12 20.4a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.5.7.7-2.4-.2-.3a8.3 8.3 0 1 1 6.5 3.4Zm4.7-6.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.3-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.6-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.1.2-.3.3-.5 0-.2 0-.4-.1-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.3 1.9 2.9 4.6 4  .6.3 1.1.4 1.5.5.6.1 1.1.1 1.5.1.5 0 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.2-.3-.3-.6-.4Z"
      />
    </svg>
  );
}

function IconArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 5h12v12h-2V9.4l-9.3 9.3-1.4-1.4L15.6 8H7V5z"
      />
    </svg>
  );
}

function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
      />
    </svg>
  );
}

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#project", label: "Featured" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
] as const;

export function Portfolio() {
  const waHref = `https://wa.me/${profile.contact.whatsappE164}`;
  const resumeHref = profile.assets.resumePdfPath;
  const resumeDownload = profile.assets.resumeDownloadName;

  return (
    <div className="relative z-[1] min-h-dvh overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 grid-overlay" />

      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:rgba(7,7,10,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="#main-content"
            className="focus-ring group flex items-center gap-3 rounded-xl outline-none"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] text-sm font-extrabold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
              KA
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="absolute -inset-10 rotate-12 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] blur-sm" />
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight text-[color:var(--text)]">
                Kumar Ankur
              </span>
              <span className="block text-xs text-[color:var(--muted)]">Frontend · Architecture · AI</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring inline-flex min-h-[44px] items-center rounded-full px-3 py-2 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="focus-ring inline-flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-3 py-2 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.06)] sm:px-4"
              href={resumeHref}
              download={resumeDownload}
              title="Download resume PDF"
            >
              <IconDownload className="h-4 w-4 shrink-0 opacity-90" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <a
              className="focus-ring hidden min-h-[44px] items-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.06)] sm:inline-flex"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="focus-ring inline-flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[#ff8a4a] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_40px_var(--glow)] transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-[color:var(--border)] bg-[color:rgba(7,7,10,0.35)] lg:hidden">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring whitespace-nowrap rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-3 py-2 text-xs font-semibold text-[color:var(--muted)] min-h-[44px] inline-flex items-center touch-manipulation"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 outline-none"
      >
        <section className="reveal relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.35),transparent_65%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_65%)] blur-2xl" />

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
              10+ years · Enterprise UI · Fortune 500 programs
            </p>

            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-[color:var(--text)] sm:text-5xl">
              {profile.name}
              <span className="block text-[color:var(--muted)] sm:mt-2 sm:text-4xl">
                {profile.role}
              </span>
            </h1>

            {profile.roleAccent ? (
              <p className="mt-3 max-w-3xl text-pretty text-sm font-semibold text-[color:var(--text)] sm:text-base">
                {profile.roleAccent}
              </p>
            ) : null}

            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              {profile.headline}
            </p>

            {profile.expertiseChips?.length ? (
              <ul className="mt-6 flex max-w-4xl flex-wrap gap-2">
                {profile.expertiseChips.map((line) => (
                  <li
                    key={line}
                    className="rounded-full border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-3 py-1.5 text-xs font-semibold text-[color:var(--muted)]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={resumeHref}
                download={resumeDownload}
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.06)] px-5 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.1)]"
              >
                <IconDownload className="h-4 w-4" />
                Download resume (PDF)
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
              >
                <IconLinkedIn className="h-4 w-4" aria-hidden />
                Message on LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-5 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.07)]"
              >
                <IconGitHub className="h-4 w-4" aria-hidden />
                View GitHub
              </a>
              <a
                href={profile.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-5 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.07)]"
              >
                Read on Medium
                <IconArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
              <a
                href={profile.featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--text)] hover:underline"
              >
                See featured project
                <IconArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            </div>

            <dl className="mt-10 grid gap-0 border-t border-[color:var(--border)] pt-8 sm:grid-cols-3 sm:divide-x sm:divide-[color:var(--border)]">
              <div className="px-0 py-4 sm:py-0 sm:pr-6">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                  Location
                </dt>
                <dd className="mt-2 text-sm font-medium text-[color:var(--text)]">{profile.location}</dd>
              </div>
              <div className="border-t border-[color:var(--border)] px-0 py-4 sm:border-t-0 sm:px-6 sm:py-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                  Focus
                </dt>
                <dd className="mt-2 text-sm font-medium text-[color:var(--text)]">
                  {profile.heroCallouts?.focus ?? "Modernization, architecture, delivery"}
                </dd>
              </div>
              <div className="border-t border-[color:var(--border)] px-0 py-4 sm:border-t-0 sm:pl-6 sm:py-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                  Proof
                </dt>
                <dd className="mt-2 text-sm font-medium text-[color:var(--text)]">
                  {profile.heroCallouts?.proof ?? "Production systems + leadership"}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="about" className="reveal reveal-delay-1 mt-14 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">About</h2>
          <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-[color:var(--muted)]">
            {profile.summary.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.02)]">
            <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-[color:var(--border)]">
              <div className="p-6 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                  Leadership & impact
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {profile.leadership.map((item) => (
                    <li key={item} className="border-l-2 border-[color:rgba(124,58,237,0.35)] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="divide-y divide-[color:var(--border)]">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                    Education
                  </h3>
                  <p className="mt-4 text-sm font-medium text-[color:var(--text)]">{profile.education.degree}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{profile.education.school}</p>
                  <p className="mt-2 font-mono text-xs text-[color:var(--faint)]">{profile.education.period}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                    Certifications & signals
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-[color:var(--muted)]">
                    {profile.certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="reveal reveal-delay-2 mt-16 scroll-mt-28">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Experience</h2>
          </div>

          <ol className="relative mt-12 max-w-3xl border-l border-[color:rgba(255,255,255,0.12)] pl-8 sm:pl-10">
            {profile.experience.map((job, index) => (
              <li
                key={`${job.company}-${job.role}-${job.start}`}
                className={`relative ${index < profile.experience.length - 1 ? "pb-14 sm:pb-16" : "pb-0"}`}
              >
                <span
                  className="absolute top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_0_3px_var(--bg),0_0_12px_rgba(255,90,31,0.45)] left-[calc(-2rem+0.5px)] sm:left-[calc(-2.5rem+0.5px)]"
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--faint)]">
                    {job.start} — {job.end}
                  </p>
                  {job.client ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)] sm:text-right">
                      {job.client}
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--text)] sm:text-xl">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-sm text-[color:var(--muted)]">
                  {job.company}
                  <span className="text-[color:var(--faint)]"> · {job.location}</span>
                </p>
                <ul className="mt-5 space-y-3 border-t border-[color:rgba(255,255,255,0.06)] pt-5 text-sm leading-relaxed text-[color:var(--muted)]">
                  {job.highlights.map((h) => (
                    <li key={h} className="pl-0 sm:pl-1">
                      <span className="text-[color:var(--faint)]">— </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="reveal reveal-delay-3 mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Skills</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            Platforms, performance, and delivery patterns I use regularly in production.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide text-[color:var(--text)]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="writing" className="reveal reveal-delay-4 mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Writing (Medium)</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            Technical notes on Medium—implementation detail and edge cases.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {profile.writing.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group flex h-full flex-col rounded-[1.75rem] border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.03)] p-6 transition-colors hover:bg-[color:rgba(255,255,255,0.055)]"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--faint)]">
                  {post.readingMinutes} min read
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-[color:var(--text)] group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">{post.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-2.5 py-0.5 text-[11px] font-semibold text-[color:var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--text)]">
                  Read on Medium
                  <IconArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)] hover:underline"
            >
              View all posts on Medium
              <IconArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="project" className="reveal reveal-delay-4 mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Featured project</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            A live business site—design, copy, and performance tuned for real traffic.
          </p>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-gradient-to-br from-[color:rgba(255,90,31,0.18)] via-[color:rgba(124,58,237,0.12)] to-[color:rgba(7,7,10,0.2)] p-[1px]">
            <div className="rounded-[2rem] bg-[color:rgba(7,7,10,0.65)] p-7 backdrop-blur-xl sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--faint)]">
                    Production website
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--text)]">
                    {profile.featuredProject.name}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-[color:var(--muted)]">
                    {profile.featuredProject.tagline}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">
                    {profile.featuredProject.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {profile.featuredProject.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {profile.featuredProject.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[color:rgba(255,255,255,0.14)] bg-[color:rgba(255,255,255,0.05)] px-3 py-1 text-xs font-semibold text-[color:var(--text)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full shrink-0 lg:w-[360px]">
                  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--faint)]">
                      Live
                    </p>
                    <a
                      href={profile.featuredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-3 inline-flex items-center gap-2 break-all text-sm font-semibold text-[color:var(--text)] hover:underline"
                    >
                      {profile.featuredProject.url.replace(/^https?:\/\//, "")}
                      <IconArrowUpRight className="h-4 w-4 shrink-0" />
                    </a>
                    <a
                      href={profile.featuredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
                    >
                      Open the site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recommendations" className="reveal mt-16 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Recommendations</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {profile.recommendations.map((rec) => (
              <figure
                key={`${rec.author}-${rec.quote.slice(0, 24)}`}
                className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.03)] p-7"
              >
                <div className="absolute left-6 top-6 text-5xl leading-none text-[color:rgba(255,255,255,0.12)]" aria-hidden>
                  “
                </div>
                <blockquote className="relative mt-6 text-sm leading-relaxed text-[color:var(--muted)]">
                  {rec.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-[color:var(--border)] pt-5">
                  <div className="text-sm font-semibold text-[color:var(--text)]">{rec.author}</div>
                  <div className="mt-1 text-xs text-[color:var(--faint)]">{rec.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[color:var(--muted)]">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-semibold text-[color:var(--text)] underline-offset-4 hover:underline"
              aria-label="Kumar Ankur on LinkedIn (opens in new tab)"
            >
              LinkedIn profile
            </a>
          </p>
        </section>
      </main>

      <footer
        id="contact"
        className="relative border-t border-[color:var(--border)] bg-[color:rgba(7,7,10,0.65)] py-14"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Contact</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--muted)]">
                LinkedIn for a professional note, email for a thread or attachments, WhatsApp when scheduling is
                simpler.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-2xl">
              <a
                href={resumeHref}
                download={resumeDownload}
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.06)] px-4 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.09)]"
              >
                <IconDownload className="h-4 w-4 shrink-0" aria-hidden />
                Download resume
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-4 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.07)]"
              >
                <IconMail className="h-4 w-4 shrink-0" aria-hidden />
                Mail me
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 motion-safe:transition-transform motion-safe:hover:-translate-y-0.5"
              >
                <IconLinkedIn className="h-4 w-4 shrink-0" aria-hidden />
                Message on LinkedIn
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(16,185,129,0.10)] px-4 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(16,185,129,0.14)]"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden />
                WhatsApp me
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 rounded-2xl border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.04)] px-4 py-3 text-sm font-semibold text-[color:var(--text)] transition-colors hover:bg-[color:rgba(255,255,255,0.07)]"
              >
                <IconGitHub className="h-4 w-4 shrink-0" aria-hidden />
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-[color:var(--border)] pt-8 text-xs text-[color:var(--faint)]">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
