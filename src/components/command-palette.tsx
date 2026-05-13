"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useToast } from "@/components/toast";
import { profile } from "@/data/profile";
import { siteHeaderNav } from "@/data/site-nav";

export const COMMAND_PALETTE_OPEN_EVENT = "ka-command-palette-open";

function navigateTo(hash: string, after: () => void) {
  after();
  requestAnimationFrame(() => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (hash.startsWith("#")) {
      window.history.replaceState(null, "", hash);
    }
  });
}

type Cmd = {
  id: string;
  group: string;
  label: string;
  keywords: string[];
  run: () => void | Promise<void>;
};

export function dispatchOpenCommandPalette() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COMMAND_PALETTE_OPEN_EVENT));
}

export function CommandPalette() {
  const reduceMotion = useReducedMotion();
  const { showToast } = useToast();
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const allCommands = useMemo<Cmd[]>(() => {
    const go = (hash: string) => () => navigateTo(hash, close);

    const navCmds: Cmd[] = [
      {
        id: "top",
        group: "Go to",
        label: "Top of page",
        keywords: ["home", "start", "hero", "main"],
        run: go("#main-content"),
      },
      ...siteHeaderNav.map(
        (item): Cmd => ({
          id: item.href,
          group: "Go to",
          label: item.label,
          keywords: [item.label.toLowerCase(), item.href.replace("#", "")],
          run: go(item.href),
        }),
      ),
    ];

    const actionCmds: Cmd[] = [
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        keywords: ["mail", "clipboard", "gmail", "contact"],
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.contact.email);
            showToast("Email copied to clipboard");
          } catch {
            showToast("Couldn’t copy — use Contact → Mail me");
          } finally {
            close();
          }
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Download resume (PDF)",
        keywords: ["cv", "pdf", "download"],
        run: () => {
          showToast("Starting resume download…");
          const a = document.createElement("a");
          a.href = profile.assets.resumePdfPath;
          a.download = profile.assets.resumeDownloadName;
          a.rel = "noopener";
          document.body.appendChild(a);
          a.click();
          a.remove();
          close();
        },
      },
      {
        id: "print-page",
        group: "Actions",
        label: "Print page (Save as PDF)",
        keywords: ["print", "pdf", "export", "paper", "hardcopy"],
        run: () => {
          close();
          requestAnimationFrame(() => window.print());
        },
      },
    ];

    const openCmds: Cmd[] = [
      {
        id: "linkedin",
        group: "Open",
        label: "LinkedIn profile",
        keywords: ["social", "network"],
        run: () => {
          window.open(profile.links.linkedin, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "github",
        group: "Open",
        label: "GitHub profile",
        keywords: ["code", "repos"],
        run: () => {
          window.open(profile.links.github, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "medium",
        group: "Open",
        label: "Medium articles",
        keywords: ["blog", "writing"],
        run: () => {
          window.open(profile.links.medium, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "featured",
        group: "Open",
        label: "Featured project (live site)",
        keywords: ["aashvi", "project", "portfolio"],
        run: () => {
          window.open(profile.links.featuredProject, "_blank", "noopener,noreferrer");
          close();
        },
      },
    ];

    return [...navCmds, ...actionCmds, ...openCmds];
  }, [close, showToast]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/\s+/g, " ");
    if (!q) return allCommands;
    return allCommands.filter((c) => {
      if (c.label.toLowerCase().includes(q)) return true;
      if (c.group.toLowerCase().includes(q)) return true;
      return c.keywords.some((k) => k.includes(q));
    });
  }, [query, allCommands]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(COMMAND_PALETTE_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDocKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onDocKey);
    return () => document.removeEventListener("keydown", onDocKey);
  }, [open, close]);

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => {
        if (filtered.length === 0) return 0;
        return Math.min(filtered.length - 1, i + 1);
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => {
        if (filtered.length === 0) return 0;
        return Math.max(0, i - 1);
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[active];
      if (cmd) void cmd.run();
    }
  };

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const root = panelRef.current;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const list = Array.from(focusables);
      if (list.length === 0) return;
      const first = list[0]!;
      const last = list[list.length - 1]!;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", handler);
    return () => root.removeEventListener("keydown", handler);
  }, [open, filtered.length]);

  if (!mounted) return null;

  const panelMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring" as const, stiffness: 420, damping: 34 },
      };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="command-palette-root"
          className="ka-no-print fixed inset-0 z-[480]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[rgba(0,0,0,0.55)] backdrop-blur-[2px]"
            onClick={close}
          />
          <div className="relative mx-auto flex min-h-dvh max-w-2xl items-start justify-center px-4 pt-[min(18vh,8rem)] sm:px-6">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              data-command-palette=""
              className="focus-ring w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] shadow-[0_24px_80px_rgba(0,0,0,0.55)] outline-none"
              onKeyDown={onPanelKeyDown}
              {...panelMotion}
            >
              <div className="border-b border-[color:var(--border)] px-4 py-3 sm:px-5">
                <p id={titleId} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--faint)]">
                  Command palette
                </p>
                <label className="sr-only" htmlFor={`${titleId}-q`}>
                  Search commands
                </label>
                <input
                  ref={inputRef}
                  id={`${titleId}-q`}
                  type="search"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder="Jump to section or run an action…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mt-2 w-full border-0 bg-transparent text-base text-[color:var(--text)] placeholder:text-[color:var(--faint)] outline-none"
                />
                <p className="mt-2 text-xs text-[color:var(--muted)]">
                  <kbd className="rounded border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.05)] px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--faint)]">
                    ↑↓
                  </kbd>{" "}
                  navigate ·{" "}
                  <kbd className="rounded border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.05)] px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--faint)]">
                    ↵
                  </kbd>{" "}
                  run ·{" "}
                  <kbd className="rounded border border-[color:var(--border)] bg-[color:rgba(255,255,255,0.05)] px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--faint)]">
                    esc
                  </kbd>{" "}
                  close
                </p>
              </div>
              <ul
                className="max-h-[min(55vh,420px)] overflow-y-auto overscroll-contain p-2"
                role="listbox"
                aria-label="Commands"
              >
                {filtered.length === 0 ? (
                  <li className="px-3 py-8 text-center text-sm text-[color:var(--muted)]">No matches.</li>
                ) : (
                  filtered.map((cmd, idx) => (
                    <li key={cmd.id} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={idx === active}
                        className={`flex w-full flex-col items-start gap-0.5 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                          idx === active
                            ? "bg-[color:rgba(255,90,31,0.14)] text-[color:var(--text)]"
                            : "text-[color:var(--muted)] hover:bg-[color:rgba(255,255,255,0.05)]"
                        }`}
                        onMouseEnter={() => setActive(idx)}
                        onClick={() => void cmd.run()}
                      >
                        <span className="font-medium text-[color:var(--text)]">{cmd.label}</span>
                        <span className="text-[11px] font-medium uppercase tracking-wide text-[color:var(--faint)]">
                          {cmd.group}
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
