/** In-page sections — header, mobile strip, and command palette (palette also prepends “Top”). */
export const siteHeaderNav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#impact", label: "Impact" },
  { href: "#proof", label: "Proof" },
  { href: "#skills", label: "Skills" },
  { href: "#tools", label: "Tools" },
  { href: "#writing", label: "Writing" },
  { href: "#project", label: "Featured" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#performance", label: "Perf" },
  { href: "#craft", label: "This site" },
  { href: "#contact", label: "Contact" },
] as const;

export type SiteHeaderNavItem = (typeof siteHeaderNav)[number];
