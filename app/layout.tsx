import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Body / UI: a clean grotesque (Franklin Gothic heritage).
// Fonts are self-hosted from app/fonts (OFL-licensed, via Fontsource) so the
// build never depends on fetching from Google Fonts.
const sans = localFont({
  src: [
    { path: "./fonts/libre-franklin-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/libre-franklin-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/libre-franklin-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/libre-franklin-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/libre-franklin-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

// Display: Archivo — a confident, contemporary grotesque for headlines and
// figures. A deliberate move away from the serif (which read as generic/AI),
// toward the clean bold-sans headline used by institutional credit peers.
// The CSS var stays --font-serif so existing `font-serif` utilities pick it up.
const display = localFont({
  src: [
    { path: "./fonts/archivo-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/archivo-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/archivo-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northlight.co.uk"),
  title: {
    default: "Northlight Group — European Credit Investing",
    template: "%s · Northlight Group",
  },
  description:
    "Northlight Group is a London-based investment manager specialising in European credit. Fundamental research, risk discipline and consistent returns since 2009.",
  // Draft: keep it out of search engines until ready to go public.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
