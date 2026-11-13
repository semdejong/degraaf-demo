import type { Metadata, Viewport } from "next";
import { Chivo_Mono, DM_Serif_Display, Urbanist } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const sans = Urbanist({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const mono = Chivo_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · De Graaf Hoveniers",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: content.colors.paper };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[70] focus:bg-paper focus:px-3 focus:py-2"
        >
          {content.ui.skip}
        </a>
        <Header
          logo={content.company.logo}
          name={content.company.name}
          tagline={content.company.logoMark}
          nav={content.nav}
          phone={content.contact.phone}
          phoneHref={`tel:${content.contact.phoneE164}`}
          ctaLabel={content.hero.primaryCta.label}
          ctaHref={content.hero.primaryCta.href}
          menuLabel={content.ui.menu}
          closeLabel={content.ui.close}
        />
        <main id="inhoud" className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
