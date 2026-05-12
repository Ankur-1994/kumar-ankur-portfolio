import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

const titleDefault = "Kumar Ankur | Senior Frontend Engineer & Architect";
const description =
  "Kumar Ankur — 10+ years building enterprise React and TypeScript platforms for Fortune 500 programs. Frontend architecture, performance, accessibility, SharePoint SPFx, and AI-assisted engineering (Copilot, Cursor, ChatGPT).";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07070a" },
    { media: "(prefers-color-scheme: light)", color: "#07070a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s | Kumar Ankur",
  },
  description,
  applicationName: "Kumar Ankur Portfolio",
  authors: [{ name: "Kumar Ankur", url: siteUrl }],
  creator: "Kumar Ankur",
  keywords: [
    "Kumar Ankur",
    "frontend engineer",
    "React",
    "TypeScript",
    "enterprise UI",
    "frontend architect",
    "accessibility",
    "WCAG",
    "performance",
    "Core Web Vitals",
    "SharePoint SPFx",
    "Fortune 500",
    "Bangalore",
    "India",
    "AI-assisted development",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Kumar Ankur",
    title: titleDefault,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: "Senior Frontend Engineer",
  description,
  email: profile.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.links.linkedin, profile.links.github, profile.links.medium],
  knowsAbout: [
    "React",
    "TypeScript",
    "Frontend architecture",
    "Web accessibility",
    "Enterprise software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-dvh min-h-[100svh] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
