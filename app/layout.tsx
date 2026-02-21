import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ─── Font Configuration ─────────────────────────────────────────── */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
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
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
