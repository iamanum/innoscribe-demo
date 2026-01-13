/**
 * Root Layout
 * Provides global HTML structure, fonts, and theme.
 * App Router layout wraps all pages.
 */
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innoscribe Command Center",
  description: "Agentic AI demo — UI-controlling voice AI dashboard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}