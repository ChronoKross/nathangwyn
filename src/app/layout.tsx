import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Gwyn · Portfolio",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-zinc-100">
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              NathanGwyn
            </Link>
            <nav className="flex items-center gap-6 text-sm text-zinc-300">
              <Link href="/twitch" className="hover:text-white">
                Twitch
              </Link>
              <a href="/#projects" className="hover:text-white">
                Projects
              </a>
              <a href="mailto:hello@nathangwyn.com" className="hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
