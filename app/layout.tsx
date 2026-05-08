import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import CursorEffect from "@/components/CursorEffect";
import "./globals.css";

/* ─── Font Configuration ─────────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

/* ─── Site Metadata ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Rebira Oli Negassa | Software Engineer",
  description:
    "Software Engineer specializing in AI/ML and backend systems. Building intelligent, scalable solutions from Addis Ababa, Ethiopia.",
  keywords: [
    "Rebira Oli Negassa",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Python",
    "Django",
    "Backend Engineer",
    "Ethiopia",
  ],
  authors: [{ name: "Rebira Oli Negassa" }],
  openGraph: {
    title: "Rebira Oli Negassa | Software Engineer",
    description:
      "Software Engineer specializing in AI/ML and backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebira Oli Negassa | Software Engineer",
    description:
      "Software Engineer specializing in AI/ML and backend systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
